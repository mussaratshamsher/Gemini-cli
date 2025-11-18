import streamlit as st
import requests
import time

API_URL = "http://localhost:8000"

st.set_page_config(page_title="Mini Bank App", page_icon="💳", layout="centered")


def initialize_session_state():
    """Initializes session state variables."""
    if "logged_in" not in st.session_state:
        st.session_state.logged_in = False
        st.session_state.name = ""
        st.session_state.balance = 0


def logout():
    """Resets the session state to log the user out."""
    st.session_state.logged_in = False
    st.session_state.name = ""
    st.session_state.balance = 0


def login_form():
    """Displays the login form and handles authentication."""
    with st.container(border=True):
        st.subheader("🔐 Login")
        name = st.text_input("Enter your name", key="login_name")
        pin = st.text_input("Enter PIN", type="password", key="login_pin")

        if st.button("Authenticate", use_container_width=True):
            if not name or not pin:
                st.error("Name and PIN are required.")
                return
            try:
                with st.spinner("Authenticating..."):
                    r = requests.post(
                        f"{API_URL}/authenticate",
                        json={"name": name, "pin_number": int(pin)},
                    )
                if r.status_code == 200:
                    data = r.json()
                    st.session_state.logged_in = True
                    st.session_state.name = data["name"]
                    st.session_state.balance = data["balance"]
                    st.balloons()
                    st.rerun()
                else:
                    st.error(r.json()["detail"])
            except (requests.RequestException, ValueError) as e:
                st.error(f"Authentication failed: {e}")


def main_app():
    """Displays the main banking interface after login."""
    st.sidebar.success(f"Logged in as **{st.session_state.name.title()}**")
    st.sidebar.info(f"#### Balance: `${st.session_state.balance:,.2f}`")
    st.sidebar.button("Logout", on_click=logout, use_container_width=True)

    # --- Bank Transfer Section ---
    with st.container(border=True):
        st.subheader("🏦 Bank Transfer")
        receiver = st.text_input("Recipient Name")
        amount = st.number_input("Amount to Transfer", min_value=1.0, step=1.0, format="%.2f")
        
        if st.button("Transfer Money", use_container_width=True):
            if not receiver or not amount:
                st.warning("Please fill in all transfer details.")
                return
            try:
                with st.spinner("Processing transfer..."):
                    r = requests.post(
                        f"{API_URL}/bank-transfer",
                        json={
                            "sender": st.session_state.name,
                            "recipients_name": receiver,
                            "amount": float(amount),
                        },
                    )
                data = r.json()
                if r.status_code == 200:
                    st.session_state.balance = data["sender_balance"]
                    st.success("Transfer Successful!")
                    st.balloons()
                    time.sleep(1) # Give balloons time to fly
                    st.rerun()
                else:
                    st.error(data.get("detail", "An unknown error occurred."))
            except requests.RequestException as e:
                st.error(f"Error during transfer: {e}")

    st.write("---")

    # --- Check Balance Section ---
    with st.container(border=True):
        st.subheader("🔄 Check Another User's Balance")
        with st.form(key="check_balance_form"):
            user_name = st.text_input("User's Name")
            user_pin = st.text_input("User's PIN", type="password")
            submit_button = st.form_submit_button("Authenticate and Check", use_container_width=True)

            if submit_button:
                if not user_name or not user_pin:
                    st.error("Name and PIN are required.")
                    return
                try:
                    with st.spinner(f"Checking {user_name.title()}'s balance..."):
                        r = requests.post(
                            f"{API_URL}/authenticate",
                            json={"name": user_name, "pin_number": int(user_pin)},
                        )
                    if r.status_code == 200:
                        d = r.json()
                        st.success(
                            f"**{d['name'].title()}'s** Balance: `${d['balance']:,.2f}`"
                        )
                    else:
                        st.error(r.json()["detail"])
                except (requests.RequestException, ValueError) as e:
                    st.error(f"Authentication failed: {e}")


def main():
    """Main function to run the Streamlit app."""
    st.title("💳 Mini Bank Application")
    initialize_session_state() 

    if st.session_state.logged_in:
        main_app()
    else:
        login_form()


if __name__ == "__main__":
    main()
