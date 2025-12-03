---
title: Chapter 3 – Agent Architecture (Simple)
---

# Chapter 3 – Agent Architecture (Simple)

Building upon our understanding of what AI agents are, this chapter delves into the fundamental architectural patterns that allow them to function. We'll explore how these components work together in a simple, cohesive pipeline.

## The basic pipeline: Input → Process → Output

At its core, any AI agent follows a cyclical pattern: taking in information, thinking about it, and then acting on it. This can be summarized as the Input → Process → Output pipeline.

-   **Input:** This is how the agent perceives its environment. It can come from various sources:
    *   A user's natural language query (e.g., "What's the capital of France?").
    *   Sensor data from a physical environment (e.g., a robot's camera feed).
    *   The result of a tool execution (e.g., data returned from a web search API).
    *   Internal observations about its own state.

-   **Process:** This is where the agent "thinks." The Large Language Model (LLM) acts as the brain, responsible for:
    *   **Understanding:** Interpreting the input and current context.
    *   **Reasoning:** Determining what needs to be done to achieve the goal.
    *   **Planning:** Breaking down complex goals into a series of smaller, executable steps.
    *   **Decision-making:** Deciding which tools to use, what parameters to provide, and what the next action should be.

-   **Output:** This is the agent's action or response back to the environment. It could be:
    *   A natural language answer to the user.
    *   A command to a tool (e.g., calling an API).
    *   Execution of a script or code.
    *   A physical action in a robotic system.

This cycle continues until the agent determines its goal is met or it requires further human input.

## Prompt engineering basics

Prompt engineering is the art and science of crafting effective instructions (prompts) to guide the behavior of Large Language Models. For AI agents, effective prompting is paramount, as it dictates how the LLM will interpret goals, use tools, and generate responses.

Key principles for agent prompt engineering include:

-   **Clear Goal Definition:** State the agent's objective explicitly.
-   **Role-Playing:** Assign a persona or role to the agent (e.g., "You are a helpful assistant who can search for information.").
-   **Constraints & Guidelines:** Define boundaries, format requirements, and any rules the agent must follow.
-   **Tool Descriptions:** Clearly describe the available tools, their functions, and expected inputs/outputs, so the LLM knows when and how to use them.
-   **Few-Shot Examples:** Provide examples of successful interactions, demonstrating how the agent should reason, use tools, and respond.

Well-engineered prompts allow the LLM to function as a reliable controller for the entire agent system.

## Memory and context handling

For an agent to perform multi-step tasks or engage in extended conversations, it needs memory. Memory allows the agent to maintain **context**, remembering past interactions and relevant information to inform future decisions.

-   **Short-Term Memory (Context Window):** This is typically managed within the LLM's context window. It holds recent turns of a conversation, immediate observations, and currently active thoughts. However, LLMs have a limited context window size, meaning they can only "remember" so much directly.

-   **Long-Term Memory:** For information that exceeds the context window or needs to be persistent across sessions, agents utilize long-term memory. This often involves:
    *   **Vector Databases:** Storing embeddings of past conversations, documents, or knowledge bases.
    *   **Summarization:** Condensing old parts of a conversation to fit into the context window.
    *   **Retrieval-Augmented Generation (RAG):** When new input comes, relevant information is retrieved from long-term memory and injected into the LLM's prompt, providing it with necessary context without overloading the context window.

Effective memory management enables agents to act intelligently over longer durations and with more complex information.

## Tools & API integration in agents

Tools are the "hands" and "feet" of an AI agent, extending its capabilities beyond what the LLM alone can do. They allow agents to interact with the real world, fetch up-to-date information, and perform specific actions.

The integration process generally involves:

1.  **Tool Definitions:** Providing the LLM with clear descriptions (often in a structured format like JSON) of available tools, their purpose, and their required parameters.
2.  **LLM Decision:** Based on the user's goal and current context, the LLM decides *if* a tool is needed, *which* tool to use, and *what* arguments to pass to it.
3.  **Tool Execution:** The agent framework calls the actual external function or API corresponding to the tool chosen by the LLM.
4.  **Observation:** The result of the tool's execution is returned to the agent, serving as a new piece of "input" for the LLM to process in the next cycle.

Common types of tools include:
-   **Web Search:** For accessing real-time information.
-   **Calculators/Code Interpreters:** For performing precise computations or executing code.
-   **Custom APIs:** For interacting with external services like calendars, email, databases, or smart home devices.

## Simple architecture diagram explanation

Imagine a simple agent architecture as a loop with the LLM at its center, constantly evaluating and acting:

1.  **Start:** The agent receives a **User Query** or an **Event**.
2.  **Perception & Context:** This input, along with relevant information from **Memory**, is fed into the **LLM**.
3.  **LLM (Reasoning & Planning):** The LLM analyzes the situation, considers its goal, and decides on the next step. This might involve:
    *   Formulating a thought process.
    *   Deciding to use a tool.
    *   Deciding to generate a final response.
4.  **Tool Execution (Optional):** If a tool is chosen, the LLM constructs the tool call (e.g., `search_weather(location="London")`). The agent executes this tool.
5.  **Observation:** The result from the tool (e.g., weather data) becomes a new input, and the loop returns to the LLM for further processing.
6.  **Action/Output:** Once the LLM determines the goal is met, it generates a **Final Response** to the user or performs a concluding action.

This continuous cycle allows the agent to break down complex problems and iterate towards a solution.

## Example mini agent flow in text

Let's trace a simple interaction with a weather agent:

**User:** "What's the weather like in Tokyo and what time is it there right now?"

**Agent (Thought):** The user wants two pieces of information: current weather and current time for "Tokyo". I have two tools available: `get_current_weather(location: string)` and `get_current_time(location: string)`. I should call both tools.

**Agent (Tool Call):** `get_current_weather(location="Tokyo")`

**Agent (Observation):** `{'weather': 'Partly cloudy', 'temperature': '22°C', 'humidity': '60%'}`

**Agent (Thought):** I have the weather information. Now I need the time.

**Agent (Tool Call):** `get_current_time(location="Tokyo")`

**Agent (Observation):** `{'time': '3:45 PM', 'timezone': 'JST'}`

**Agent (Thought):** I have both the weather and the time for Tokyo. I can now synthesize this information into a clear response for the user.

**Agent (Final Response):** "The current weather in Tokyo is partly cloudy with a temperature of 22°C and 60% humidity. The time there is 3:45 PM JST."

This example demonstrates how an agent can use its reasoning, memory, and tool-use capabilities to fulfill a multi-part request.