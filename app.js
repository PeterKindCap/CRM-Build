const today = new Date("2026-04-23T09:00:00+08:00");

const stages = [
  "Target / to reach out",
  "Contacted",
  "Replied",
  "First meeting",
  "Second meeting",
  "Partner meeting",
  "IC / diligence",
  "Term sheet",
  "Passed",
  "Invested",
  "Monitoring / keep warm"
];

const users = [
  { id: "maya", name: "Maya Chen", role: "Partner", email: "maya@northstar.vc" },
  { id: "leo", name: "Leo Santos", role: "Principal", email: "leo@northstar.vc" },
  { id: "anika", name: "Anika Rao", role: "Associate", email: "anika@northstar.vc" },
  { id: "sam", name: "Sam Rivera", role: "Platform", email: "sam@northstar.vc" }
];

let companies = [
  {
    id: "c1",
    name: "HelioGrid",
    logo: "HG",
    website: "heliogrid.ai",
    sector: "AI infrastructure",
    theme: "Energy-aware compute",
    geography: "US",
    stage: "Seed",
    roundSize: "$3.5M",
    checkTarget: "$750K",
    status: "Active",
    pipelineStage: "Partner meeting",
    source: "Founder referral",
    founders: ["Nora Ellis", "Vik Narang"],
    lastInteraction: "2026-04-22",
    nextAction: "Partner debrief",
    owner: "Maya Chen",
    priority: 94,
    likelihood: 71,
    notes: "Strong design partner pull from cloud cost teams; diligence focused on grid data defensibility.",
    tags: ["AI", "devtools", "US"],
    introStrength: 88,
    inboundType: "Referred",
    passRisk: "Data access risk"
  },
  {
    id: "c2",
    name: "FinPilot",
    logo: "FP",
    website: "finpilot.co",
    sector: "Fintech",
    theme: "Autonomous CFO",
    geography: "SEA",
    stage: "Pre-seed",
    roundSize: "$1.8M",
    checkTarget: "$400K",
    status: "Active",
    pipelineStage: "First meeting",
    source: "Scout",
    founders: ["Ari Lim"],
    lastInteraction: "2026-04-23",
    nextAction: "Send data room asks",
    owner: "Leo Santos",
    priority: 86,
    likelihood: 58,
    notes: "Product velocity is high; revenue still founder-led. Customer references scheduled this week.",
    tags: ["fintech", "SEA", "AI"],
    introStrength: 74,
    inboundType: "Referred",
    passRisk: "Early revenue quality"
  },
  {
    id: "c3",
    name: "KiteOps",
    logo: "KO",
    website: "kiteops.dev",
    sector: "Devtools",
    theme: "Release orchestration",
    geography: "US",
    stage: "Seed",
    roundSize: "$4M",
    checkTarget: "$1M",
    status: "Active",
    pipelineStage: "IC / diligence",
    source: "Outbound",
    founders: ["Ben Okafor", "Mila Park"],
    lastInteraction: "2026-04-18",
    nextAction: "IC memo v2",
    owner: "Anika Rao",
    priority: 91,
    likelihood: 77,
    notes: "Usage expansion inside three engineering orgs. Pricing power looks better than initial assumption.",
    tags: ["devtools", "US"],
    introStrength: 62,
    inboundType: "Outbound",
    passRisk: "Competitive wedge"
  },
  {
    id: "c4",
    name: "CareLattice",
    logo: "CL",
    website: "carelattice.health",
    sector: "Healthtech",
    theme: "Clinic workflow AI",
    geography: "US",
    stage: "Seed",
    roundSize: "$5M",
    checkTarget: "$750K",
    status: "Keep warm",
    pipelineStage: "Monitoring / keep warm",
    source: "Accelerator",
    founders: ["Priya Shah"],
    lastInteraction: "2026-04-02",
    nextAction: "May ARR check-in",
    owner: "Maya Chen",
    priority: 72,
    likelihood: 43,
    notes: "Loved the founder but market timing is uneven. Track pilots converting to annual contracts.",
    tags: ["AI", "healthtech", "US"],
    introStrength: 68,
    inboundType: "Inbound",
    passRisk: "Sales cycle"
  },
  {
    id: "c5",
    name: "Portage",
    logo: "PT",
    website: "portage.trade",
    sector: "Climate",
    theme: "Carbon supply chain",
    geography: "Europe",
    stage: "Pre-seed",
    roundSize: "$2.2M",
    checkTarget: "$500K",
    status: "Active",
    pipelineStage: "Second meeting",
    source: "Conference",
    founders: ["Jon Bell", "Elena Kovac"],
    lastInteraction: "2026-04-21",
    nextAction: "Market map review",
    owner: "Sam Rivera",
    priority: 78,
    likelihood: 54,
    notes: "Interesting commodity data moat; need proof that buyers will switch from spreadsheets.",
    tags: ["climate", "frontier tech", "Europe"],
    introStrength: 57,
    inboundType: "Referred",
    passRisk: "Adoption friction"
  },
  {
    id: "c6",
    name: "AgentLane",
    logo: "AL",
    website: "agentlane.com",
    sector: "AI applications",
    theme: "Vertical agent ops",
    geography: "US",
    stage: "Seed",
    roundSize: "$6M",
    checkTarget: "$1M",
    status: "Active",
    pipelineStage: "Term sheet",
    source: "Founder referral",
    founders: ["Owen Kim"],
    lastInteraction: "2026-04-23",
    nextAction: "Finalize terms",
    owner: "Maya Chen",
    priority: 98,
    likelihood: 86,
    notes: "Unusually strong engagement across enterprise pilots. Partner group aligned on leading.",
    tags: ["AI", "US", "watchlist"],
    introStrength: 92,
    inboundType: "Referred",
    passRisk: "Round dynamics"
  },
  {
    id: "c7",
    name: "TalaStack",
    logo: "TS",
    website: "talastack.ph",
    sector: "B2B SaaS",
    theme: "SMB operations",
    geography: "SEA",
    stage: "Pre-seed",
    roundSize: "$900K",
    checkTarget: "$250K",
    status: "Active",
    pipelineStage: "Contacted",
    source: "Outbound",
    founders: ["Mika Cruz"],
    lastInteraction: "2026-04-16",
    nextAction: "Follow up with founder",
    owner: "Leo Santos",
    priority: 69,
    likelihood: 36,
    notes: "High founder-market fit, still waiting on response after tailored market note.",
    tags: ["SEA", "B2B SaaS"],
    introStrength: 41,
    inboundType: "Outbound",
    passRisk: "No response yet"
  },
  {
    id: "c8",
    name: "Northbeam Robotics",
    logo: "NR",
    website: "northbeam.bot",
    sector: "Frontier tech",
    theme: "Warehouse robotics",
    geography: "US",
    stage: "Seed",
    roundSize: "$7M",
    checkTarget: "$1M",
    status: "Passed",
    pipelineStage: "Passed",
    source: "Angel",
    founders: ["Cal Wynn", "Sara Ito"],
    lastInteraction: "2026-03-18",
    nextAction: "No action",
    owner: "Anika Rao",
    priority: 63,
    likelihood: 12,
    notes: "Passed after diligence: hardware margin profile did not fit fund return target.",
    tags: ["frontier tech", "US"],
    introStrength: 70,
    inboundType: "Referred",
    passRisk: "Margin profile"
  },
  {
    id: "c9",
    name: "Ledgerlight",
    logo: "LL",
    website: "ledgerlight.xyz",
    sector: "Crypto infra",
    theme: "Compliance primitives",
    geography: "Singapore",
    stage: "Pre-seed",
    roundSize: "$2M",
    checkTarget: "$300K",
    status: "Active",
    pipelineStage: "Replied",
    source: "Inbound",
    founders: ["Rhea Tan"],
    lastInteraction: "2026-04-20",
    nextAction: "Book first meeting",
    owner: "Sam Rivera",
    priority: 74,
    likelihood: 42,
    notes: "Sharp founder with regulatory edge. Need clarity on developer distribution.",
    tags: ["crypto", "SEA"],
    introStrength: 51,
    inboundType: "Inbound",
    passRisk: "Distribution"
  },
  {
    id: "c10",
    name: "Mosaic Bio",
    logo: "MB",
    website: "mosaicbio.com",
    sector: "Bio",
    theme: "Lab automation",
    geography: "US",
    stage: "Seed",
    roundSize: "$4.5M",
    checkTarget: "$500K",
    status: "Invested",
    pipelineStage: "Invested",
    source: "Accelerator",
    founders: ["Talia Brooks"],
    lastInteraction: "2026-04-12",
    nextAction: "Portfolio onboarding",
    owner: "Maya Chen",
    priority: 89,
    likelihood: 100,
    notes: "Closed Fund I investment. Onboarding with platform support and hiring plan.",
    tags: ["frontier tech", "US", "portfolio"],
    introStrength: 83,
    inboundType: "Inbound",
    passRisk: ""
  }
];

const interactions = [
  { companyId: "c6", type: "Partner call", date: "2026-04-23", user: "Maya Chen", note: "Aligned on valuation range and lead check size." },
  { companyId: "c2", type: "First meeting", date: "2026-04-23", user: "Leo Santos", note: "Founder walked through bank integration roadmap." },
  { companyId: "c1", type: "Partner meeting", date: "2026-04-22", user: "Maya Chen", note: "Team wants reference calls with infra buyers." },
  { companyId: "c5", type: "Second meeting", date: "2026-04-21", user: "Sam Rivera", note: "Market map shows fragmented buyer tools." },
  { companyId: "c9", type: "Reply", date: "2026-04-20", user: "Sam Rivera", note: "Founder available next week." },
  { companyId: "c3", type: "Diligence", date: "2026-04-18", user: "Anika Rao", note: "Usage cohort looks stronger after pricing change." },
  { companyId: "c7", type: "Outbound email", date: "2026-04-16", user: "Leo Santos", note: "Sent tailored note referencing PH SMB workflow wedge." }
];

const tasks = [
  { id: "t1", companyId: "c6", title: "Send revised term sheet", owner: "Maya Chen", due: "2026-04-23", status: "Due today", priority: "High" },
  { id: "t2", companyId: "c3", title: "Update IC memo with cohort chart", owner: "Anika Rao", due: "2026-04-23", status: "Due today", priority: "High" },
  { id: "t3", companyId: "c7", title: "Follow up with founder", owner: "Leo Santos", due: "2026-04-20", status: "Overdue", priority: "Medium" },
  { id: "t4", companyId: "c4", title: "Check May ARR progress", owner: "Maya Chen", due: "2026-05-02", status: "Upcoming", priority: "Medium" },
  { id: "t5", companyId: "c5", title: "Request customer reference intro", owner: "Sam Rivera", due: "2026-04-24", status: "Upcoming", priority: "Medium" }
];

const activityByDay = [
  { day: "Thu", sourced: 22, emails: 64, replies: 14, meetings: 6, notes: 18 },
  { day: "Fri", sourced: 18, emails: 51, replies: 11, meetings: 4, notes: 12 },
  { day: "Mon", sourced: 31, emails: 78, replies: 19, meetings: 7, notes: 21 },
  { day: "Tue", sourced: 27, emails: 69, replies: 16, meetings: 5, notes: 15 },
  { day: "Wed", sourced: 35, emails: 82, replies: 22, meetings: 8, notes: 24 },
  { day: "Today", sourced: 16, emails: 43, replies: 10, meetings: 3, notes: 9 }
];

const teamStats = [
  { user: "Anika Rao", sourced: 42, emails: 121, replies: 27, meetings: 9, notes: 33 },
  { user: "Leo Santos", sourced: 36, emails: 108, replies: 22, meetings: 8, notes: 26 },
  { user: "Maya Chen", sourced: 19, emails: 41, replies: 13, meetings: 11, notes: 29 },
  { user: "Sam Rivera", sourced: 25, emails: 76, replies: 15, meetings: 6, notes: 21 }
];

const funnel = [
  ["Companies sourced", 1240],
  ["Contacted", 684],
  ["Replied", 238],
  ["First meetings", 102],
  ["Second meetings", 49],
  ["Partner meetings", 23],
  ["IC discussions", 11],
  ["Term sheets", 4],
  ["Closed investments", 2]
];

const medianDays = [2, 4, 5, 7, 8, 9, 11, 14];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function daysSince(date) {
  return Math.floor((today - new Date(`${date}T00:00:00+08:00`)) / 86400000);
}

function companyById(id) {
  return companies.find((company) => company.id === id);
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function stageCounts() {
  return stages.map((stage) => ({
    stage,
    count: companies.filter((company) => company.pipelineStage === stage).length
  }));
}

function renderMetric(label, value, delta = "") {
  return `
    <article class="metric-card">
      <div class="metric-label">${label}</div>
      <div class="metric-value">${value}${delta ? `<span class="delta">${delta}</span>` : ""}</div>
    </article>
  `;
}

function renderCompanyCell(company) {
  return `
    <div class="company-cell">
      <div class="logo">${company.logo}</div>
      <div>
        <strong>${company.name}</strong>
        <span class="muted">${company.website}</span>
      </div>
    </div>
  `;
}

function renderFunnel() {
  return `
    <div class="funnel">
      ${funnel.map(([label, value], index) => {
        const previous = index === 0 ? value : funnel[index - 1][1];
        const rate = index === 0 ? 100 : Math.round((value / previous) * 100);
        const width = Math.max(8, Math.round((value / funnel[0][1]) * 100));
        return `
          <div class="funnel-row">
            <strong>${label}</strong>
            <div class="bar"><span style="width:${width}%"></span></div>
            <span>${value.toLocaleString()}</span>
            <span class="muted">${rate}%</span>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderBars(data, key) {
  const max = Math.max(...data.map((item) => item[key]));
  return `
    <div class="chart">
      ${data.map((item) => `
        <div class="bar-col">
          <div class="bar-fill" style="height:${Math.round((item[key] / max) * 150)}px"></div>
          <span>${item.day || item.label}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderLineChart() {
  const points = activityByDay.map((item, index) => {
    const x = 30 + index * 105;
    const y = 180 - item.replies * 5.6;
    return `${x},${y}`;
  }).join(" ");
  return `
    <svg class="line-chart" viewBox="0 0 610 210" role="img" aria-label="Weekly reply trend">
      <polyline fill="none" stroke="var(--accent)" stroke-width="3" points="${points}" />
      ${activityByDay.map((item, index) => {
        const x = 30 + index * 105;
        const y = 180 - item.replies * 5.6;
        return `<circle cx="${x}" cy="${y}" r="4" fill="var(--accent)"></circle><text x="${x - 14}" y="202" fill="var(--muted)" font-size="11">${item.day}</text>`;
      }).join("")}
    </svg>
  `;
}

function renderTable(rows = companies) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Company</th><th>Sector / Geo</th><th>Stage</th><th>Round</th><th>Status</th><th>Source</th><th>Founders</th><th>Last</th><th>Next action</th><th>Owner</th><th>Priority</th><th>Likelihood</th><th>Notes</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((company) => `
            <tr>
              <td>${renderCompanyCell(company)}</td>
              <td><strong>${company.sector}</strong><span class="muted">${company.theme} &middot; ${company.geography}</span></td>
              <td>${company.stage}<span class="muted">${company.pipelineStage}</span></td>
              <td>${company.roundSize}<span class="muted">${company.checkTarget} target</span></td>
              <td><span class="status ${slug(company.status)}">${company.status}</span></td>
              <td>${company.source}<span class="muted">${company.inboundType}</span></td>
              <td>${company.founders.join(", ")}</td>
              <td>${company.lastInteraction}<span class="muted">${daysSince(company.lastInteraction)}d ago</span></td>
              <td>${company.nextAction}</td>
              <td>${company.owner}</td>
              <td><span class="score">${company.priority}</span></td>
              <td><span class="score">${company.likelihood}</span></td>
              <td>${company.notes}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function staleDeals() {
  return companies
    .filter((company) => daysSince(company.lastInteraction) >= 7 && !["Passed", "Invested"].includes(company.pipelineStage))
    .sort((a, b) => daysSince(b.lastInteraction) - daysSince(a.lastInteraction));
}

function renderDashboard() {
  const activeDeals = companies.filter((company) => !["Passed", "Invested"].includes(company.pipelineStage)).length;
  $("#dashboard").innerHTML = `
    <div class="grid cols-5">
      ${renderMetric("Total companies", "1,240", "+73 this month")}
      ${renderMetric("Added this week", "41", "+18%")}
      ${renderMetric("Contacted today", "43", "12 warm intros")}
      ${renderMetric("Met today / week", "3 / 33", "+6 vs last week")}
      ${renderMetric("Active pipeline", activeDeals, "4 high priority")}
    </div>
    <div class="split" style="margin-top:14px">
      <section class="panel">
        <div class="toolbar"><h2>Conversion Funnel</h2><span class="chip">Rolling 90 days</span></div>
        ${renderFunnel()}
      </section>
      <section class="panel">
        <h2>Median Days Between Stages</h2>
        ${renderBars(medianDays.map((value, index) => ({ label: `${index + 1}->${index + 2}`, days: value })), "days")}
      </section>
    </div>
    <div class="grid cols-3" style="margin-top:14px">
      <section class="panel">
        <h2>Stale Deals</h2>
        <div class="spec-list">
          ${staleDeals().map((company) => `<div class="task-row"><span class="tag risk">${daysSince(company.lastInteraction)}d</span><div><strong>${company.name}</strong><span class="muted">${company.nextAction} &middot; ${company.owner}</span></div></div>`).join("")}
        </div>
      </section>
      <section class="panel">
        <h2>Upcoming Follow-ups</h2>
        <div class="spec-list">${tasks.map(renderTask).join("")}</div>
      </section>
      <section class="panel">
        <h2>Active Sectors</h2>
        <div class="heatmap">${["AI apps", "Devtools", "Fintech", "Climate", "Healthtech", "Frontier"].map((label, index) => `<div class="heat-cell" style="opacity:${0.55 + index * 0.07}"><strong>${label}</strong><br>${[31, 24, 19, 15, 11, 9][index]} active</div>`).join("")}</div>
      </section>
    </div>
  `;
}

function renderBoard() {
  $("#board").innerHTML = `
    <div class="toolbar">
      <div class="filter-row">
        <button class="secondary-button">Saved view: Partner pipeline</button>
        <button class="secondary-button">Bulk update</button>
        <button class="secondary-button">Duplicate scan</button>
      </div>
      <span class="kanban-note">Drag company cards between stages; table editing remains available in Pipeline Table.</span>
    </div>
    <div class="board-scroll">
      <div class="board-grid">
        ${stages.map((stage) => `
          <section class="stage-column">
            <div class="stage-head"><strong>${stage}</strong><span class="chip">${companies.filter((c) => c.pipelineStage === stage).length}</span></div>
            <div class="stage-drop" data-stage="${stage}">
              ${companies.filter((company) => company.pipelineStage === stage).map(renderCard).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </div>
  `;
  bindDrag();
}

function renderCard(company) {
  return `
    <article class="company-card" draggable="true" data-company-id="${company.id}">
      <div class="card-top">
        ${renderCompanyCell(company)}
        <span class="score">${company.priority}</span>
      </div>
      <div class="card-meta">${company.tags.slice(0, 3).map((tag) => `<span class="tag ${tag === "watchlist" ? "hot" : ""}">${tag}</span>`).join("")}</div>
      <p class="muted">${company.notes}</p>
      <div class="bar"><span style="width:${company.likelihood}%"></span></div>
      <span class="muted">${company.nextAction} &middot; ${company.owner}</span>
    </article>
  `;
}

function bindDrag() {
  $$(".company-card").forEach((card) => {
    card.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", card.dataset.companyId));
  });
  $$(".stage-drop").forEach((drop) => {
    drop.addEventListener("dragover", (event) => {
      event.preventDefault();
      drop.classList.add("drag-over");
    });
    drop.addEventListener("dragleave", () => drop.classList.remove("drag-over"));
    drop.addEventListener("drop", (event) => {
      event.preventDefault();
      const company = companyById(event.dataTransfer.getData("text/plain"));
      company.pipelineStage = drop.dataset.stage;
      company.lastInteraction = "2026-04-23";
      company.nextAction = suggestNextAction(company.pipelineStage);
      renderAll();
      activateView("board");
    });
  });
}

function suggestNextAction(stage) {
  const suggestions = {
    "Contacted": "Wait 3 days, then follow up",
    "Replied": "Book first meeting",
    "First meeting": "Send data room asks",
    "Second meeting": "Schedule partner meeting",
    "Partner meeting": "Prepare IC memo",
    "IC / diligence": "Finish diligence checklist",
    "Monitoring / keep warm": "Set 30-day reminder"
  };
  return suggestions[stage] || "Log decision rationale";
}

function renderTask(task) {
  const company = companyById(task.companyId);
  return `
    <div class="task-row">
      <span class="tag ${task.status === "Overdue" ? "risk" : task.priority === "High" ? "hot" : ""}">${task.status}</span>
      <div>
        <strong>${task.title}</strong>
        <span class="muted">${company.name} &middot; ${task.owner} &middot; ${task.due}</span>
      </div>
    </div>
  `;
}

function renderCompanyDetail() {
  const company = companies[0];
  $("#company").innerHTML = `
    <div class="detail-layout">
      <div class="grid">
        <section class="panel hero-detail">
          <div>
            ${renderCompanyCell(company)}
            <p class="muted" style="margin-top:10px">${company.notes}</p>
            <div class="card-meta">${company.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          </div>
          <div class="grid cols-2" style="min-width:320px">
            ${renderMetric("Priority", company.priority)}
            ${renderMetric("Likelihood", `${company.likelihood}%`)}
          </div>
        </section>
        <section class="panel">
          <h2>CRM Timeline</h2>
          <div class="timeline">
            ${interactions.filter((item) => item.companyId === company.id || ["c6", "c3"].includes(item.companyId)).map((item) => `<div class="timeline-item"><strong>${item.type}</strong><span class="muted">${item.date} &middot; ${item.user}</span><p>${item.note}</p></div>`).join("")}
          </div>
        </section>
        <section class="panel">
          <h2>Meeting Notes</h2>
          <textarea rows="5">Template: founder story, customer pain, wedge, evidence of pull, financing context, risks, suggested next step.</textarea>
        </section>
        <section class="panel">
          <h2>Decision Log</h2>
          <div class="grid cols-3">
            <div><strong>Proceed reason</strong><span class="muted">High urgency infra cost wedge</span></div>
            <div><strong>Open risk</strong><span class="muted">${company.passRisk}</span></div>
            <div><strong>Memo</strong><span class="muted">/memos/heliogrid-seed</span></div>
          </div>
        </section>
      </div>
      <aside class="grid">
        <section class="panel">
          <h2>Fundraising</h2>
          <p><strong>${company.roundSize}</strong> round &middot; target check ${company.checkTarget}</p>
          <p class="muted">${company.stage} &middot; ${company.source} &middot; intro strength ${company.introStrength}</p>
        </section>
        <section class="panel">
          <h2>Founders</h2>
          ${company.founders.map((founder) => `<div class="profile-row"><div class="avatar">${founder.split(" ").map((n) => n[0]).join("")}</div><div><strong>${founder}</strong><span class="muted">2 shared paths &middot; previous: GridSense</span></div></div>`).join("<br>")}
        </section>
        <section class="panel">
          <h2>Diligence Checklist</h2>
          <div class="checklist">
            ${["Founder references", "Customer calls", "Market map", "Competitive review", "Financial model", "IC memo", "Legal red flags"].map((item, index) => `<label><input type="checkbox" ${index < 3 ? "checked" : ""}>${item}</label>`).join("")}
          </div>
        </section>
        <section class="panel">
          <h2>Relationship Map</h2>
          <p>Maya -&gt; Nora Ellis: ex-colleague at GridSense</p>
          <p>Leo -&gt; Vik Narang: mutual angel, Priya Shah</p>
          <p class="muted">Relationship strength score: 88 / 100</p>
        </section>
      </aside>
    </div>
  `;
}

function renderFounder() {
  $("#founder").innerHTML = `
    <div class="detail-layout">
      <section class="panel">
        <div class="profile-row">
          <div class="avatar">NE</div>
          <div><h2 style="margin-bottom:2px">Nora Ellis</h2><span class="muted">Founder, HelioGrid &middot; ex-GridSense &middot; Stanford CS</span></div>
        </div>
        <div class="grid cols-4" style="margin-top:16px">
          ${renderMetric("Relationship strength", "88")}
          ${renderMetric("Known by", "3")}
          ${renderMetric("Companies built", "2")}
          ${renderMetric("Response time", "6h")}
        </div>
        <section style="margin-top:18px">
          <h2>Relationship History</h2>
          <div class="timeline">
            <div class="timeline-item"><strong>Warm intro from Priya Shah</strong><span class="muted">2026-04-10</span><p>Priya worked with Nora during GridSense acquisition.</p></div>
            <div class="timeline-item"><strong>Founder office hours</strong><span class="muted">2025-11-06</span><p>Discussed energy markets before HelioGrid incorporated.</p></div>
          </div>
        </section>
      </section>
      <aside class="panel">
        <h2>Associated Companies</h2>
        <div class="spec-list">
          <div>${renderCompanyCell(companies[0])}</div>
          <div>${renderCompanyCell({ name: "GridSense", logo: "GS", website: "acquired by VoltIQ" })}</div>
        </div>
      </aside>
    </div>
  `;
}

function renderActivity() {
  $("#activity").innerHTML = `
    <div class="grid cols-4">
      ${renderMetric("Companies messaged", "43")}
      ${renderMetric("Replies received", "10")}
      ${renderMetric("Meetings held", "3")}
      ${renderMetric("Notes logged", "9")}
    </div>
    <div class="split" style="margin-top:14px">
      <section class="panel"><h2>Weekly Outreach Trend</h2>${renderLineChart()}</section>
      <section class="panel"><h2>Meetings Per Week</h2>${renderBars(activityByDay, "meetings")}</section>
    </div>
    <div class="grid cols-2" style="margin-top:14px">
      <section class="panel">
        <h2>Team Leaderboard</h2>
        <div class="spec-list">${teamStats.sort((a, b) => b.sourced - a.sourced).map((stat) => `<div class="leader-row"><span class="score">${stat.sourced}</span><div><strong>${stat.user}</strong><span class="muted">${stat.emails} emails &middot; ${stat.replies} replies &middot; ${stat.meetings} meetings</span></div></div>`).join("")}</div>
      </section>
      <section class="panel">
        <h2>Daily Activity Feed</h2>
        <div class="spec-list">${interactions.map((item) => `<div class="feed-row"><span class="tag">${item.type}</span><div><strong>${companyById(item.companyId).name}</strong><span class="muted">${item.user} &middot; ${item.note}</span></div></div>`).join("")}</div>
      </section>
    </div>
  `;
}

function renderAnalytics() {
  const sourceData = [
    { label: "Founder referral", value: 31 },
    { label: "Outbound", value: 24 },
    { label: "Scout", value: 18 },
    { label: "Accelerator", value: 16 },
    { label: "Inbound", value: 12 },
    { label: "Conference", value: 9 }
  ];
  $("#analytics").innerHTML = `
    <div class="grid cols-4">
      ${renderMetric("Outreach -> meeting", "14.9%")}
      ${renderMetric("Meeting -> partner", "22.5%")}
      ${renderMetric("Partner -> IC", "47.8%")}
      ${renderMetric("IC -> investment", "18.2%")}
    </div>
    <div class="grid cols-3" style="margin-top:14px">
      <section class="panel"><h2>Conversion by Source</h2>${renderBars(sourceData, "value")}</section>
      <section class="panel"><h2>Sector Distribution</h2>${renderBars(["AI", "Devtools", "Fintech", "Climate", "Health", "Frontier"].map((label, i) => ({ label, value: [36, 24, 19, 14, 12, 9][i] })), "value")}</section>
      <section class="panel"><h2>Geography Mix</h2>${renderBars(["US", "SEA", "Europe", "Singapore"].map((label, i) => ({ label, value: [58, 27, 9, 6][i] })), "value")}</section>
    </div>
    <div class="grid cols-2" style="margin-top:14px">
      <section class="panel"><h2>Pass Reasons Analysis</h2>${renderBars(["Market", "Timing", "Team", "Margin", "Distribution", "Round"].map((label, i) => ({ label, value: [19, 16, 8, 11, 15, 7][i] })), "value")}</section>
      <section class="panel"><h2>Portfolio vs Pipeline Mix</h2>${renderFunnel()}</section>
    </div>
  `;
}

function renderTasks() {
  $("#tasks").innerHTML = `
    <div class="toolbar">
      <div class="filter-row">
        <button class="secondary-button">All owners</button>
        <button class="secondary-button">Overdue</button>
        <button class="secondary-button">High priority</button>
        <button class="secondary-button">Keep warm</button>
      </div>
      <button class="primary-button">Create task</button>
    </div>
    <div class="grid cols-2">
      <section class="panel"><h2>Follow-up Queue</h2><div class="spec-list">${tasks.map(renderTask).join("")}</div></section>
      <section class="panel"><h2>Smart Suggestions</h2><div class="spec-list">
        <div class="task-row"><span class="tag hot">Alert</span><div><strong>AgentLane has unusually strong engagement</strong><span class="muted">3 meetings, 2 references, same-day responses. Keep at top of partner agenda.</span></div></div>
        <div class="task-row"><span class="tag risk">Inactive</span><div><strong>TalaStack is high-fit but stale</strong><span class="muted">Outbound deal with no activity for ${daysSince("2026-04-16")} days. Suggested follow-up today.</span></div></div>
        <div class="task-row"><span class="tag">Keep warm</span><div><strong>CareLattice should be checked after monthly close</strong><span class="muted">Reminder set for May ARR update.</span></div></div>
      </div></section>
    </div>
  `;
}

function renderPortfolio() {
  $("#portfolio").innerHTML = `
    <div class="grid cols-4">
      ${renderMetric("Portfolio companies", "18")}
      ${renderMetric("Active reserves", "$6.4M")}
      ${renderMetric("Hiring asks", "7")}
      ${renderMetric("Customer intros", "14")}
    </div>
    <section class="panel" style="margin-top:14px">
      <h2>Portfolio Tracking</h2>
      ${renderTable(companies.filter((company) => company.status === "Invested"))}
    </section>
  `;
}

function renderSpec() {
  $("#spec").innerHTML = `
    <div class="grid cols-2">
      <section class="panel spec-list">
        <h2>Product Requirements Summary</h2>
        <p>Northstar CRM is a venture-specific operating dashboard for sourcing, relationship intelligence, pipeline progression, task discipline, and investment decision support from first touch through investment.</p>
        <strong>Information Architecture</strong>
        <p>Executive dashboard, pipeline board, editable table, company profile, founder profile, team activity, analytics, tasks, portfolio, and admin-ready data model.</p>
        <strong>Recommended Components and States</strong>
        <p>Metric cards, dense data tables, saved filters, stage board, side panels, searchable command input, bulk update controls, stale alerts, note templates, diligence checklist, decision log, relationship graph, empty/loading/error states, and dark mode.</p>
        <strong>Design System Direction</strong>
        <p>Use a restrained palette, crisp typography, 8px radii, high-contrast tables, compact controls, status chips, keyboard-first navigation, and charts optimized for scanning.</p>
        <strong>Suggested Tech Stack</strong>
        <p>Next.js, TypeScript, Tailwind, shadcn/ui, TanStack Table, Recharts, Postgres, Prisma or Drizzle, Auth.js or Clerk, Resend/Google integrations, background jobs for sync and stale deal scoring.</p>
      </section>
      <section class="panel">
        <h2>Sample Database Schema</h2>
        <pre><code>companies(id, name, website, logo_url, sector, theme, geography, stage, status, pipeline_stage_id, source_id, owner_id, priority_score, likelihood_score, last_interaction_at, next_action, created_at)
contacts(id, name, email, title, linkedin_url, relationship_strength, created_at)
company_contacts(company_id, contact_id, role, is_founder)
interactions(id, company_id, contact_id, user_id, type, occurred_at, channel, summary, sentiment)
meetings(id, company_id, owner_id, scheduled_at, template_id, transcript_url, notes)
tasks(id, company_id, owner_id, title, due_at, status, priority)
notes(id, company_id, user_id, body, visibility, created_at)
referrals(id, company_id, source_type, source_name, intro_strength, requested_at, completed_at)
decisions(id, company_id, stage, outcome, reason_code, rationale, decided_by, decided_at)
tags(id, name, category)
company_tags(company_id, tag_id)
funds(id, name, vintage, strategy)
portfolio_entries(id, company_id, fund_id, invested_at, check_size, ownership, reserve_amount)</code></pre>
      </section>
    </div>
    <section class="panel" style="margin-top:14px">
      <h2>Wireframe-Level Screen Layouts</h2>
      <div class="grid cols-3">
        <p><strong>Executive dashboard:</strong> top metrics, conversion funnel, stage timing, stale deals, follow-up queue, active themes.</p>
        <p><strong>Pipeline board:</strong> horizontal stage lanes, draggable company cards, priority and likelihood scores, next actions.</p>
        <p><strong>Pipeline table:</strong> spreadsheet-grade editable data surface with filters, saved views, bulk operations, and notes preview.</p>
        <p><strong>Company detail:</strong> company header, fundraising, founders, interaction timeline, notes, email history, memo, checklist, decision log.</p>
        <p><strong>Founder page:</strong> contact profile, relationship history, shared paths, prior companies, engagement quality.</p>
        <p><strong>Analytics:</strong> conversion by source, sector, geography, owner, pass reasons, portfolio versus pipeline mix.</p>
      </div>
    </section>
  `;
}

function renderAll() {
  renderDashboard();
  renderBoard();
  $("#table").innerHTML = `
    <div class="toolbar">
      <div class="filter-row">
        <button class="secondary-button">Saved view: All active deals</button>
        <button class="secondary-button">Filter</button>
        <button class="secondary-button">Columns</button>
        <button class="secondary-button">Bulk edit stage</button>
      </div>
      <span class="chip">Duplicate detector: 2 possible matches</span>
    </div>
    ${renderTable()}
  `;
  renderCompanyDetail();
  renderFounder();
  renderActivity();
  renderAnalytics();
  renderTasks();
  renderPortfolio();
  renderSpec();
}

function activateView(view) {
  $$(".view").forEach((node) => node.classList.toggle("active-view", node.id === view));
  $$(".nav-item").forEach((node) => node.classList.toggle("active", node.dataset.view === view));
  const titles = {
    dashboard: "Executive Dashboard",
    board: "Pipeline Board",
    table: "Pipeline Table",
    company: "Company Detail",
    founder: "Founder / Contact",
    activity: "Team Activity",
    analytics: "Analytics",
    tasks: "Tasks and Follow-ups",
    portfolio: "Portfolio Tracking",
    spec: "PRD + Data Model"
  };
  $("#viewTitle").textContent = titles[view];
}

function bindChrome() {
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => activateView(button.dataset.view)));
  $("#themeToggle").addEventListener("click", () => document.body.classList.toggle("dark"));
  $("#searchInput").addEventListener("input", (event) => {
    const term = event.target.value.toLowerCase();
    const filtered = companies.filter((company) => JSON.stringify(company).toLowerCase().includes(term));
    $("#table").innerHTML = `
      <div class="toolbar"><span class="chip">${filtered.length} matches</span><button class="secondary-button">Save as view</button></div>
      ${renderTable(filtered)}
    `;
    if (term.length > 1) activateView("table");
  });
}

renderAll();
bindChrome();
