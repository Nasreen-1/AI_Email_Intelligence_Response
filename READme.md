# AI Email Intelligence & Response Workflow System

An **Agentic AI Email System** that automates incoming email classification, urgency scoring, action item extraction, thread summarization, and context-aware draft generation with a **Human-in-the-Loop (HITL)** approval workflow.

---

## 🌟 Key Features

1. **Multi-Agent Engine Architecture**:
   - **Ingestion & Parser Agent**: Parses raw email headers, MIME structures, and thread metadata.
   - **Classification & Urgency Agent**: Categorizes emails (e.g., Production Outage, Sales Renewal, Billing Dispute) and assigns urgency scores ($P0$ Critical to $P3$ Low) with rationale.
   - **Action Item & Entity Extractor Agent**: Identifies actionable tasks, deadlines, assigned owners, and key dates.
   - **Thread Summarizer Agent**: Distills multi-turn email conversations into concise executive summaries.
   - **Response Draft Generator Agent**: Synthesizes facts and tone preferences (Professional, Empathetic, Concise, Direct) to draft responses.
   
2. **Human-in-the-Loop (HITL) Studio**:
   - Real-time response editing and natural-language prompt refinement (e.g., *"Add a note that we are free for a call on Thursday at 2 PM"*).
   - Tone switcher (Professional, Empathetic, Concise, Direct).
   - One-click **Approve & Send** vs. **Reject / Archive** controls.

3. **Multi-Agent Pipeline Inspector**:
   - Live execution graph visualizer showing step-by-step agent status, execution timings, and reasoning logs.

4. **Custom Email Tester**:
   - Built-in form to input arbitrary raw email messages and run them live through the agentic pipeline.

---

## 📁 Project Structure

```text
ai-email-intelligence/
├── index.html        # Interactive Web Dashboard UI
├── styles.css        # Premium Dark Glassmorphism CSS Design System
├── app.js            # Frontend State, Multi-Agent Simulation Engine & HITL Logic
├── agent_system.py   # Production Python Async Multi-Agent System Implementation
└── README.md         # Project documentation & execution guide
```

---

## 🚀 How to Run the Project

### 1. Interactive Web Application
Simply open `index.html` in any web browser, or serve it locally using any static web server:

**Using Python HTTP server:**
```bash
python -m http.server 8000
```
Then visit [`http://localhost:8000`](http://localhost:8000) in your browser.

### 2. Python Multi-Agent Engine
Run the standalone Python multi-agent system:

```bash
python agent_system.py
```

Output:
```text
[ORCHESTRATOR] Processing Email ID: email-101 | Subject: 'URGENT: API Gateway Timeout Failure on Checkout Service'
  [+] Classifier Agent: Urgency = P0 (Score 96/100) | Category: Production Outage
  [+] Extractor Agent: Extracted 3 action items.
  [+] Summarizer Agent: Generated executive summary.
  [+] Draft Agent: Generated draft response (Tone: Professional).
[ORCHESTRATOR] Pipeline completed in 0.92s. Halted at Human-in-the-Loop checkpoint.

=== DRAFT GENERATED FOR HUMAN APPROVAL ===
To: marcus.vance@fintech-pay.io
Subject: Re: URGENT: API Gateway Timeout Failure on Checkout Service
Body:
Hi Marcus,
We have declared a P0 Critical Incident regarding 'URGENT: API Gateway Timeout Failure on Checkout Service'...
```

---

## 🧠 Step-by-Step Implementation Guide

### Step 1: Define Structured Data Schemas
Use Pydantic or Python `dataclasses` to enforce strict input/output structures across agents (`ClassificationResult`, `ActionItem`, `ThreadSummary`, `DraftResponse`).

### Step 2: Build Specialized Agents
Decouple concerns into focused single-responsibility agents:
- `ClassificationAgent`: Evaluates criticality and intent.
- `ExtractionAgent`: Locates actionable tasks and deadlines.
- `SummarizationAgent`: Condenses long threads.
- `DraftAgent`: Generates candidate responses.

### Step 3: Orchestrate with Workflow Control & Guardrails
Wrap agent calls in an async pipeline (`WorkflowOrchestrator`) with a strict pause before email dispatch to enforce **Human-in-the-Loop (HITL)** approval.

---

## 🛠️ Connecting Real LLM APIs (OpenAI / Gemini / LangGraph)

To connect this Python system to live LLM providers, replace the mock agent methods in `agent_system.py` with LLM API calls using structured output prompts.

Example with Google Gemini / OpenAI structured outputs:
```python
# Example LLM Prompt template for Classification Agent:
SYSTEM_PROMPT = """
You are an expert AI Email Classifier. 
Analyze the input email and return JSON matching this schema:
{
  "category": "string",
  "urgency_level": "P0 | P1 | P2 | P3",
  "urgency_score": integer (0-100),
  "rationale": "string"
}
"""
```
