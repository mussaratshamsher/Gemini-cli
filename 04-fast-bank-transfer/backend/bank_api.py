from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from threading import Lock
from typing import Dict

app = FastAPI(title="Mini Bank API")

# In-memory database
users_db: Dict[str, Dict] = {
    "ali": {"pin": 1111, "balance": 5000},
    "ahmed": {"pin": 2222, "balance":3000},
    "maria": {"pin": 3333, "balance":7000},
    "sara": {"pin": 4444, "balance": 6000},
    "john": {"pin": 5555, "balance": 8000},
}

db_lock = Lock()

class AuthRequest(BaseModel):
    name: str
    pin_number: int

class TransferRequest(BaseModel):
    sender: str
    recipients_name: str
    amount: int

@app.post("/authenticate")
def authenticate(data: AuthRequest):
    name = data.name.lower().strip()
    if name not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    
    if users_db[name]["pin"] != data.pin_number:
        raise HTTPException(status_code=401, detail="Invalid PIN")
    
    return {
        "message": "Authenticated successfully",
        "name": name,
        "balance": users_db[name]["balance"]
    }

@app.post("/bank-transfer")
def bank_transfer(data: TransferRequest):
    sender = data.sender.lower().strip()
    receiver = data.recipients_name.lower().strip()
    amount = data.amount

    if sender not in users_db:
        raise HTTPException(status_code=404, detail="Sender not found")
    if receiver not in users_db:
        raise HTTPException(status_code=404, detail="Receiver not found")
    if amount <= 0:
        raise HTTPException(status_code=400, detail="Amount must be positive")
    if users_db[sender]["balance"] < amount:
        raise HTTPException(status_code=400, detail="Insufficient balance")

    with db_lock:
        users_db[sender]["balance"] -= amount
        users_db[receiver]["balance"] += amount

    return {
        "message": "Transfer successful",
        "sender_balance": users_db[sender]["balance"],
        "receiver_balance": users_db[receiver]["balance"]
    }

@app.get("/ping")
def ping():
    return {"status": "ok"}
