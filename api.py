from flask import Flask, request, jsonify
from flask_cors import CORS
import asyncio

from agent_system import EmailMessage, WorkflowOrchestrator

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze_email():
    data = request.get_json()

    email = EmailMessage(
        id=data.get("id", "web-email"),
        sender_name=data.get("sender_name", "Unknown"),
        sender_email=data.get("sender_email", ""),
        subject=data.get("subject", ""),
        body=data.get("body", ""),
        timestamp=data.get("timestamp", "")
    )

    orchestrator = WorkflowOrchestrator()
    result = asyncio.run(orchestrator.run_pipeline(email))

    return jsonify({
        "email": result["email"],
        "classification": result["classification"],
        "action_items": result["action_items"],
        "summary": result["summary"],
        "draft": result["draft"],
        "latency_seconds": result["latency_seconds"]
    })

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "running"})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)