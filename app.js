// Application Logic for AI Email Intelligence & Response Workflow System

// Sample Datasets representing realistic workplace emails
const sampleEmails = [
  {
    id: 'email-1',
    senderName: 'Marcus Vance',
    senderEmail: 'marcus.vance@fintech-pay.io',
    subject: 'URGENT: API Gateway Timeout Failure on Checkout Service',
    timestamp: '10:14 AM Today',
    urgency: 'P0',
    urgencyScore: 96,
    category: 'Production Outage',
    urgencyRationale: 'Immediate revenue loss impact reported by enterprise client. Active outage in primary payment gateway.',
    body: `Hi Engineering & Support Team,

We are experiencing a critical failure on our checkout flow right now. Since 09:45 AM UTC, over 40% of our API checkout requests are returning 504 Gateway Timeout errors.

Our enterprise merchant customers (including ShopCorp and QuickPay) are unable to process transactions, resulting in direct revenue loss. 

We need an immediate incident response team on call, root cause identification, and a status update within the next 30 minutes.

Please confirm receipt and assign a primary incident manager immediately.

Regards,
Marcus Vance
VP of Operations | FinTech Pay`,
    summary: 'Enterprise client FinTech Pay reports a 504 Gateway Timeout issue affecting 40% of checkout transactions since 09:45 AM UTC. ShopCorp & QuickPay affected. Requests incident responder assignment and status update within 30 minutes.',
    actionItems: [
      { text: 'Assign Primary Incident Manager & spin up war room', deadline: 'Immediate (15 mins)' },
      { text: 'Investigate payment gateway API logs for 504 errors', deadline: 'Immediate' },
      { text: 'Send incident acknowledgment & status update to Marcus Vance', deadline: '10:45 AM UTC' }
    ],
    draftResponses: {
      Professional: `Hi Marcus,

Thank you for alerting us. We have declared a P0 Critical Incident regarding the checkout API gateway timeouts. 

Our Lead Site Reliability Engineer has been assigned as Incident Commander. We are currently analyzing the latency spikes on the payment cluster.

We will provide a full status report and mitigation plan within the next 25 minutes.

Best regards,
Incident Response Team`,
      Empathetic: `Hi Marcus,

I completely understand how critical this issue is for FinTech Pay and your merchants. We deeply regret the impact on ShopCorp and QuickPay.

Our engineering team is already actively investigating the 504 Gateway Timeout errors as our highest priority task right now. I will personally ensure you receive an update within 20 minutes.

Warm regards,
Customer Success Lead`,
      Concise: `Marcus: P0 Incident opened. SRE team investigating 504 timeouts. Status update coming within 25 mins.`,
      Direct: `Marcus, incident acknowledged. Engineering is actively debugging the API gateway 504 timeouts. Update promised by 10:45 AM UTC.`
    },
    status: 'hitl_pending'
  },
  {
    id: 'email-2',
    senderName: 'Elena Rostova',
    senderEmail: 'elena.r@globaltech-solutions.com',
    subject: 'Enterprise License Renewal & Q3 Expansion Inquiry',
    timestamp: '08:30 AM Today',
    urgency: 'P1',
    urgencyScore: 78,
    category: 'Sales & Renewal',
    urgencyRationale: 'High-value enterprise contract renewal due in 14 days with potential seat expansion (+150 seats).',
    body: `Hi Account Team,

Our current Enterprise subscription for 300 seats is set to expire on August 26th. 

Overall, our team has had a great experience with the AI platform. We are looking to renew for another 12 months, and we are also considering expanding to add 150 additional seats for our EMEA division.

Could you send over the renewal proposal including custom pricing tiers for the 450 total seats? We would also like to schedule a 30-minute review call with our Procurement Lead, David Miller, this Thursday afternoon.

Thanks,
Elena Rostova
Director of IT Procurement | GlobalTech Solutions`,
    summary: 'GlobalTech Solutions seeks enterprise contract renewal for 300 seats expiring Aug 26th and requests custom pricing for 150 seat EMEA expansion (450 total). Requests review call Thursday afternoon with Procurement Lead David Miller.',
    actionItems: [
      { text: 'Prepare Q3 Enterprise Renewal Proposal for 450 seats with volume discount', deadline: 'Aug 14' },
      { text: 'Schedule 30-min call with David Miller & Elena Rostova for Thursday PM', deadline: 'Aug 13' }
    ],
    draftResponses: {
      Professional: `Hi Elena,

Thank you for reaching out and for your continued partnership! We are thrilled to hear that your team is seeing great value from the platform.

I have attached our Q3 Enterprise Renewal proposal featuring volume tier pricing for the expanded 450-seat rollout. 

We would be delighted to meet with you and David Miller this Thursday. Are you available at 2:00 PM or 3:30 PM EST?

Best regards,
Account Executive`,
      Empathetic: `Dear Elena,

It is fantastic news to hear how well your team is enjoying our platform! We truly appreciate GlobalTech Solutions' trust in us.

I am preparing a tailored proposal for the 450 seats with special expansion incentives. I will hold Thursday afternoon on our calendar for your call with David.

Warm regards,
Client Relations Manager`,
      Concise: `Hi Elena, proposal for 450 seats attached. Thursday at 2:00 PM EST works for the call with David Miller. Let me know if that time suits!`,
      Direct: `Elena: Enterprise expansion proposal ready. Thursday meeting options: 2:00 PM or 3:30 PM EST. Please confirm best slot.`
    },
    status: 'hitl_pending'
  },
  {
    id: 'email-3',
    senderName: 'David Chen',
    senderEmail: 'david.chen@acme-corp.com',
    subject: 'Re: Discrepancy in July Invoice #INV-8842',
    timestamp: 'Yesterday',
    urgency: 'P2',
    urgencyScore: 54,
    category: 'Billing & Accounting',
    urgencyRationale: 'Invoice overcharge dispute ($1,250 excess charge). Requires finance reconciliation before payment release.',
    body: `Hi Support,

I noticed a discrepancy on our latest invoice #INV-8842 dated July 31st. 

We were billed $5,750, but according to our signed order form, our tier includes 100GB extra storage which was charged separately as an add-on fee of $1,250.

Please review and issue a revised invoice so our Accounts Payable team can process payment before the due date.

Best,
David Chen`,
    summary: 'David Chen identified a $1,250 billing discrepancy on Invoice #INV-8842 regarding included 100GB storage add-on fee. Requests credit adjustment and revised invoice.',
    actionItems: [
      { text: 'Verify signed Order Form against July Invoice #INV-8842', deadline: 'Aug 13' },
      { text: 'Issue $1,250 credit note / revised invoice via Billing Dept', deadline: 'Aug 14' }
    ],
    draftResponses: {
      Professional: `Hi David,

Thank you for bringing invoice #INV-8842 to our attention. 

Upon reviewing your signed order form, you are correct—the 100GB storage add-on should have been included. I have submitted a request to our finance team to credit $1,250 and issue a revised invoice within 24 hours.

Thank you for your patience!

Best regards,
Billing Support Lead`,
      Empathetic: `Hi David,

Apologies for the confusion with invoice #INV-8842! You are absolutely right, and we appreciate you spotting this.

Our accounting team is issuing a corrected invoice reflecting the $1,250 credit immediately.

Best regards,
Customer Operations`,
      Concise: `David: Verified error on #INV-8842. Corrected invoice with $1,250 credit will be re-sent within 24h.`,
      Direct: `David, billing error confirmed. $1,250 credit applied. Revised invoice #INV-8842 incoming shortly.`
    },
    status: 'hitl_pending'
  },
  {
    id: 'email-4',
    senderName: 'Tech Pulse Weekly',
    senderEmail: 'newsletter@techpulse.io',
    subject: 'Weekly Digest: AI Agent Architectures & LLM Benchmarks',
    timestamp: 'Aug 10',
    urgency: 'P3',
    urgencyScore: 12,
    category: 'Newsletter & Updates',
    urgencyRationale: 'Informational broadcast email. No direct action or response required.',
    body: `Welcome to this week's issue of Tech Pulse!

In today's edition:
1. Deep Dive into Multi-Agent Orchestration Patterns (LangGraph, AutoGen, CrewAI).
2. Comparative Analysis of LLM inference latencies across cloud providers.
3. Open source tools for structured data extraction.

Read the full articles on techpulse.io/digest-104`,
    summary: 'Informational tech newsletter covering multi-agent architectures, LLM inference benchmarks, and structured extraction open-source tools.',
    actionItems: [],
    draftResponses: {
      Professional: `No response required for newsletter broadcast.`,
      Empathetic: `No response required.`,
      Concise: `No action required.`,
      Direct: `Archived.`
    },
    status: 'dispatched'
  }
];

// App State
let emails = [...sampleEmails];
let selectedEmailId = 'email-1';
let currentFilter = 'all';
let currentUrgencyFilter = 'all';
let selectedTone = 'Professional';
let currentTab = 'intelligence';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderEmailList();
  selectEmail(selectedEmailId);
  setupEventListeners();
  updateStats();
}

function setupEventListeners() {
  // Navigation filters
  document.querySelectorAll('.sidebar .nav-item[data-filter]').forEach(item => {
    item.addEventListener('click', (e) => {
      document.querySelectorAll('.sidebar .nav-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      currentFilter = item.getAttribute('data-filter');
      renderEmailList();
    });
  });

  // Urgency chip filters
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentUrgencyFilter = chip.getAttribute('data-urgency');
      renderEmailList();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderEmailList();
    });
  }

  // Workspace Tabs
  document.querySelectorAll('.ws-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ws-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.getAttribute('data-tab');
      
      document.getElementById('pane-intelligence').style.display = currentTab === 'intelligence' ? 'block' : 'none';
      document.getElementById('pane-thread').style.display = currentTab === 'thread' ? 'block' : 'none';
      document.getElementById('pane-inspector').style.display = currentTab === 'inspector' ? 'block' : 'none';
    });
  });

  // Tone selector buttons
  document.querySelectorAll('.tone-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTone = btn.getAttribute('data-tone');
      updateDraftForSelectedTone();
    });
  });

  // Refine draft button
  const btnRefine = document.getElementById('btn-refine-draft');
  if (btnRefine) {
    btnRefine.addEventListener('click', handleRefineDraft);
  }

  // Approve & Send button
  const btnApprove = document.getElementById('btn-approve-send');
  if (btnApprove) {
    btnApprove.addEventListener('click', handleApproveAndSend);
  }

  // Reject button
  const btnReject = document.getElementById('btn-reject-draft');
  if (btnReject) {
    btnReject.addEventListener('click', handleRejectDraft);
  }

  // Custom email modal triggers
  const btnCustom = document.getElementById('btn-custom-email');
  const modal = document.getElementById('custom-email-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnCancelModal = document.getElementById('btn-cancel-modal');
  const btnRunPipeline = document.getElementById('btn-run-custom-pipeline');

  if (btnCustom && modal) {
    btnCustom.addEventListener('click', () => modal.classList.add('active'));
  }
  if (btnCloseModal && modal) {
    btnCloseModal.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (btnCancelModal && modal) {
    btnCancelModal.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (btnRunPipeline) {
    btnRunPipeline.addEventListener('click', handleCustomEmailSubmit);
  }

  // Re-run pipeline button
  const btnRerun = document.getElementById('btn-rerun-pipeline');
  if (btnRerun) {
    btnRerun.addEventListener('click', () => simulateAgentPipeline(getEmailById(selectedEmailId)));
  }
}

function renderEmailList() {
  const container = document.getElementById('email-list-container');
  if (!container) return;

  const searchQuery = (document.getElementById('search-input')?.value || '').toLowerCase();

  const filtered = emails.filter(email => {
    // Navigation category filter
    if (currentFilter === 'urgent' && email.urgency !== 'P0') return false;
    if (currentFilter === 'hitl' && email.status !== 'hitl_pending') return false;
    if (currentFilter === 'dispatched' && email.status !== 'dispatched') return false;

    // Urgency chip filter
    if (currentUrgencyFilter !== 'all' && email.urgency !== currentUrgencyFilter) return false;

    // Search term
    if (searchQuery) {
      const matchSender = email.senderName.toLowerCase().includes(searchQuery);
      const matchSubject = email.subject.toLowerCase().includes(searchQuery);
      const matchBody = email.body.toLowerCase().includes(searchQuery);
      if (!matchSender && !matchSubject && !matchBody) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No emails match your filter criteria.</div>`;
    return;
  }

  container.innerHTML = filtered.map(email => {
    const isSelected = email.id === selectedEmailId ? 'selected' : '';
    const urgencyClass = `urgency-${email.urgency.toLowerCase()}`;
    return `
      <div class="email-card ${isSelected}" onclick="selectEmail('${email.id}')">
        <div class="card-top">
          <span class="sender-name">${escapeHtml(email.senderName)}</span>
          <span class="email-time">${escapeHtml(email.timestamp)}</span>
        </div>
        <div class="card-subject">${escapeHtml(email.subject)}</div>
        <div class="card-snippet">${escapeHtml(email.body)}</div>
        <div class="card-meta">
          <span class="urgency-badge ${urgencyClass}">${email.urgency} (${email.urgencyScore})</span>
          <span class="category-tag">${escapeHtml(email.category)}</span>
          ${email.status === 'dispatched' ? '<span style="color: var(--success); font-size: 0.7rem; font-weight: 600;">✓ Dispatched</span>' : ''}
        </div>
      </div>
    `;
  }).join('');
}

function getEmailById(id) {
  return emails.find(e => e.id === id) || emails[0];
}

function selectEmail(id) {
  selectedEmailId = id;
  const email = getEmailById(id);

  // Update selection UI in list
  renderEmailList();

  // Populate Header
  document.getElementById('view-subject').innerText = email.subject;
  document.getElementById('view-sender-name').innerText = email.senderName;
  document.getElementById('view-sender-email').innerText = `<${email.senderEmail}>`;
  document.getElementById('view-timestamp').innerText = email.timestamp;
  document.getElementById('view-avatar').innerText = email.senderName.charAt(0).toUpperCase();

  const badgeContainer = document.getElementById('view-urgency-badge');
  badgeContainer.innerHTML = `<span class="urgency-badge urgency-${email.urgency.toLowerCase()}">${email.urgency} Criticality (${email.urgencyScore}/100)</span>`;

  // Populate Intelligence Card
  const circle = document.getElementById('urgency-circle');
  circle.innerText = email.urgencyScore;
  circle.style.borderColor = getUrgencyColor(email.urgencyScore);
  circle.style.color = getUrgencyColor(email.urgencyScore);

  document.getElementById('urgency-level-title').innerText = `${email.urgency} Priority Level`;
  document.getElementById('urgency-rationale').innerText = email.urgencyRationale;
  document.getElementById('view-category-label').innerText = email.category;

  // Action Items
  const actionList = document.getElementById('action-items-list');
  if (email.actionItems && email.actionItems.length > 0) {
    actionList.innerHTML = email.actionItems.map((item, idx) => `
      <li class="action-item">
        <input type="checkbox" class="action-checkbox" id="chk-${idx}" />
        <div class="action-text">
          <span>${escapeHtml(item.text)}</span>
          <div class="action-deadline">Deadline: ${escapeHtml(item.deadline)}</div>
        </div>
      </li>
    `).join('');
  } else {
    actionList.innerHTML = `<li class="action-item"><span class="action-text" style="color: var(--text-muted);">No action items extracted.</span></li>`;
  }

  // Summary
  document.getElementById('view-executive-summary').innerText = email.summary;

  // Raw body
  document.getElementById('raw-email-body').innerText = email.body;

  // Draft Studio Text
  updateDraftForSelectedTone();

  // Update Status Label
  const statusLabel = document.getElementById('draft-status-label');
  if (email.status === 'dispatched') {
    statusLabel.innerText = '✅ Dispatched & Logged';
    statusLabel.style.color = 'var(--success)';
  } else if (email.status === 'rejected') {
    statusLabel.innerText = '❌ Rejected / Archived';
    statusLabel.style.color = 'var(--p0-critical)';
  } else {
    statusLabel.innerText = '✍️ Awaiting Human Review';
    statusLabel.style.color = 'var(--p1-high)';
  }

  // Simulate Multi-Agent execution graph trace
  simulateAgentPipeline(email);
}

function updateDraftForSelectedTone() {
  const email = getEmailById(selectedEmailId);
  const draftArea = document.getElementById('draft-textarea');
  if (draftArea && email.draftResponses) {
    draftArea.value = email.draftResponses[selectedTone] || email.draftResponses['Professional'];
  }
}

function handleRefineDraft() {
  const email = getEmailById(selectedEmailId);
  const input = document.getElementById('refinement-input');
  const userInstruction = input ? input.value.trim() : '';

  if (!userInstruction) {
    alert('Please enter refinement instructions for the AI agent (e.g. "Add a note that we can meet on Thursday at 2 PM").');
    return;
  }

  const draftArea = document.getElementById('draft-textarea');
  const currentText = draftArea.value;

  // Log in Agent trace
  logAgentTrace(`[HITL REFINEMENT AGENT] Processing natural language directive: "${userInstruction}"`);

  // Simulate LLM rewriting
  draftArea.value = `${currentText}\n\nP.S. ${userInstruction}`;
  email.draftResponses[selectedTone] = draftArea.value;

  input.value = '';
  logAgentTrace(`[HITL REFINEMENT AGENT] Draft updated successfully.`);
}

function handleApproveAndSend() {
  const email = getEmailById(selectedEmailId);
  const draftText = document.getElementById('draft-textarea').value;

  email.status = 'dispatched';
  email.dispatchedContent = draftText;

  logAgentTrace(`[DISPATCH AGENT] Human approval granted. Email response queued to ${email.senderEmail}.`);
  
  selectEmail(email.id);
  updateStats();
}

function handleRejectDraft() {
  const email = getEmailById(selectedEmailId);
  email.status = 'rejected';

  logAgentTrace(`[HITL MANAGER] Draft response rejected by user. Archiving email thread.`);
  
  selectEmail(email.id);
  updateStats();
}

function handleCustomEmailSubmit() {
  const senderVal = document.getElementById('input-sender').value.trim();
  const subjectVal = document.getElementById('input-subject').value.trim();
  const bodyVal = document.getElementById('input-body').value.trim();

  if (!senderVal || !subjectVal || !bodyVal) {
    alert('Please fill out all fields to run the custom email test.');
    return;
  }

  const newEmail = {
    id: `email-custom-${Date.now()}`,
    senderName: senderVal.split('(')[0].trim() || senderVal,
    senderEmail: senderVal.includes('<') ? senderVal.match(/<([^>]+)>/)?.[1] || 'user@example.com' : 'user@example.com',
    subject: subjectVal,
    timestamp: 'Just now',
    urgency: subjectVal.toLowerCase().includes('critical') || subjectVal.toLowerCase().includes('urgent') ? 'P0' : 'P1',
    urgencyScore: subjectVal.toLowerCase().includes('critical') ? 92 : 75,
    category: 'Custom Input Test',
    urgencyRationale: 'Custom incoming email processed by multi-agent classifier engine.',
    body: bodyVal,
    summary: `Analyzed message from ${senderVal}: "${bodyVal.substring(0, 120)}..."`,
    actionItems: [
      { text: 'Review customer query details', deadline: 'Today' },
      { text: 'Send requested information', deadline: '24 hours' }
    ],
    draftResponses: {
      Professional: `Hi ${senderVal},\n\nThank you for reaching out regarding "${subjectVal}". We have received your inquiry and our team is actively addressing your request.\n\nBest regards,\nCustomer Operations`,
      Empathetic: `Hi ${senderVal},\n\nThank you for getting in touch. We understand how important this request is for you and we are making it our priority.\n\nWarmly,\nSupport Team`,
      Concise: `Received inquiry regarding "${subjectVal}". Review in progress.`,
      Direct: `Message received. We are handling your request.`
    },
    status: 'hitl_pending'
  };

  emails.unshift(newEmail);
  document.getElementById('custom-email-modal').classList.remove('active');
  
  // Clear inputs
  document.getElementById('input-sender').value = '';
  document.getElementById('input-subject').value = '';
  document.getElementById('input-body').value = '';

  selectEmail(newEmail.id);
  updateStats();
}

function simulateAgentPipeline(email) {
  const logBox = document.getElementById('agent-logs-box');
  if (!logBox) return;

  logBox.innerHTML = `[0.00s SYSTEM] Initializing Agentic AI Email Intelligence Pipeline for email ID '${email.id}'...\n`;

  const steps = [
    { node: 'node-parse', delay: 100, msg: `[0.10s INGESTION AGENT] Parsed MIME structure. Sender: ${email.senderEmail}, Tokens: ${Math.round(email.body.length / 4)}` },
    { node: 'node-classify', delay: 250, msg: `[0.25s CLASSIFIER AGENT] Computed Urgency: ${email.urgency} (Score ${email.urgencyScore}/100). Category: '${email.category}'` },
    { node: 'node-extract', delay: 450, msg: `[0.45s EXTRACTOR AGENT] Extracted ${email.actionItems.length} action items and key deadlines.` },
    { node: 'node-summary', delay: 700, msg: `[0.70s SUMMARIZER AGENT] Generated executive summary (${email.summary.length} chars).` },
    { node: 'node-draft', delay: 950, msg: `[0.95s DRAFT AGENT] Generated 4 response draft variants (Tone: Professional, Empathetic, Concise, Direct).` },
    { node: null, delay: 1100, msg: `[1.10s HITL MANAGER] Workflow halted at Human-in-the-Loop checkpoint. Awaiting user review.` }
  ];

  steps.forEach(step => {
    setTimeout(() => {
      logAgentTrace(step.msg);
    }, step.delay);
  });
}

function logAgentTrace(msg) {
  const logBox = document.getElementById('agent-logs-box');
  if (logBox) {
    logBox.innerHTML += `${msg}\n`;
    logBox.scrollTop = logBox.scrollHeight;
  }
}

function updateStats() {
  const total = emails.length;
  const pending = emails.filter(e => e.status === 'hitl_pending').length;
  const p0 = emails.filter(e => e.urgency === 'P0').length;
  const sent = emails.filter(e => e.status === 'dispatched').length;

  document.getElementById('stat-processed').innerText = total + 19;
  document.getElementById('stat-pending').innerText = pending;
  document.getElementById('badge-all').innerText = total;
  document.getElementById('badge-p0').innerText = p0;
  document.getElementById('badge-hitl').innerText = pending;
  document.getElementById('badge-sent').innerText = sent + 12;
}

function getUrgencyColor(score) {
  if (score >= 90) return 'var(--p0-critical)';
  if (score >= 70) return 'var(--p1-high)';
  if (score >= 40) return 'var(--p2-medium)';
  return 'var(--p3-low)';
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}
