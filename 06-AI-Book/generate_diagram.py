from diagrams import Diagram, Cluster, Edge
from diagrams.generic.compute import Rack
from diagrams.generic.device import Server
from diagrams.generic.database import Sql
from diagrams.generic.storage import Storage
from diagrams.onprem.workflow import Workflow
from diagrams.onprem.client import User
from diagrams.onprem.network import Web

with Diagram("AI Agent Architecture", show=False, direction="LR", filename="ai_agent_components"):
    user = User("User")
    environment = Web("External Environment")

    with Cluster("AI Agent"):
        perception = Server("Perception (Input)")
        brain = Rack("LLM (Reasoning & Decision)")
        planning = Workflow("Planning (Goals -> Steps)")
        memory = Storage("Memory (Short-term & Long-term)")
        tool_use = Sql("Tool Use (APIs, Web Search, Code)")
        action = Server("Action (Output)")

        perception >> brain
        brain >> Edge(label="Plans") >> planning
        planning >> Edge(label="Tasks") >> brain
        brain >> Edge(label="Store/Retrieve") >> memory
        memory >> Edge(label="Context") >> brain
        brain >> Edge(label="Commands") >> tool_use
        tool_use >> Edge(label="Results/Data") >> brain
        brain >> action

    environment >> perception
    action >> environment
