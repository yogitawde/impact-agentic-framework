import { useState } from "react";

const framework = [
  {
    letter: "I",
    title: "Intent Mapping",
    color: "#00FF94",
    darkColor: "#00CC77",
    tagline: "What is the agent trying to accomplish — and for whom?",
    description:
      "Define the agent's purpose with surgical precision. Vague intent leads to unpredictable behavior and misaligned outcomes. Intent mapping anchors every downstream decision.",
    questions: [
      "What is the primary job-to-be-done this agent solves?",
      "Who is the beneficiary — end user, business, or system?",
      "What does success look like in 30 seconds of agent activity?",
      "What is explicitly out of scope for this agent?",
    ],
    artifacts: ["Agent Purpose Statement", "Scope Boundary Doc", "Stakeholder Map"],
    agenticContext:
      "Unlike traditional features, autonomous agents can pursue goals in unexpected ways. Intent mapping prevents goal misalignment — the #1 failure mode in agentic systems.",
  },
  {
    letter: "M",
    title: "Memory & Context Design",
    color: "#FF6B35",
    darkColor: "#E55A25",
    tagline: "What does the agent need to remember — and for how long?",
    description:
      "Agents operate across time and sessions. Designing memory architecture is a core PM responsibility — it shapes personalization, cost, privacy, and capability boundaries.",
    questions: [
      "What context must persist across sessions vs. within a session?",
      "What user data is essential vs. risky to store?",
      "How does memory decay or refresh over time?",
      "What happens when the agent has conflicting memories?",
    ],
    artifacts: ["Memory Architecture Diagram", "Data Retention Policy", "Context Window Strategy"],
    agenticContext:
      "Memory is leverage. Agents with well-designed memory feel intelligent; agents without it feel broken. This is a product decision, not just an engineering one.",
  },
  {
    letter: "P",
    title: "Planning & Action Scope",
    color: "#A78BFA",
    darkColor: "#8B5CF6",
    tagline: "What can the agent decide — and what requires a human?",
    description:
      "Autonomous agents plan multi-step tasks. PMs must define the decision boundary: what actions the agent can take autonomously, what it must flag, and what it must never do.",
    questions: [
      "What is the maximum blast radius of an agent action gone wrong?",
      "Which actions are reversible vs. irreversible?",
      "At what confidence threshold does the agent act vs. ask?",
      "How does planning change in high-stakes vs. low-stakes contexts?",
    ],
    artifacts: ["Action Taxonomy", "Confidence Threshold Matrix", "Human-in-the-Loop Flowchart"],
    agenticContext:
      "The planning scope defines your trust model. Too narrow and the agent is useless. Too broad and it's dangerous. This tension is the central PM challenge in agentic products.",
  },
  {
    letter: "A",
    title: "Autonomy Calibration",
    color: "#FBBF24",
    darkColor: "#D97706",
    tagline: "How much control does the agent have — and how does it evolve?",
    description:
      "Autonomy is not binary. It exists on a spectrum from fully supervised to fully autonomous. PMs must design the autonomy dial and define how it shifts over time as trust is established.",
    questions: [
      "Where on the autonomy spectrum does this agent start?",
      "What metrics unlock expanded autonomy over time?",
      "How do users increase or decrease agent autonomy?",
      "What triggers an autonomy rollback?",
    ],
    artifacts: ["Autonomy Spectrum Map", "Trust Escalation Model", "User Control Surface Spec"],
    agenticContext:
      "Autonomy calibration is your trust roadmap. Ship conservative, earn trust, expand gradually. This is how you avoid the two failure modes: agents that feel like toys or agents that feel out of control.",
  },
  {
    letter: "C",
    title: "Communication & Transparency",
    color: "#38BDF8",
    darkColor: "#0EA5E9",
    tagline: "How does the agent explain what it's doing — and why?",
    description:
      "Users need legible agents. Designing how the agent communicates its reasoning, status, and decisions is what separates trustworthy AI products from black boxes.",
    questions: [
      "How does the agent surface its current plan to the user?",
      "What does 'explainability' look like for non-technical users?",
      "How does the agent communicate uncertainty or failure?",
      "What feedback loops exist between agent output and user correction?",
    ],
    artifacts: ["Agent Communication Spec", "Error State Library", "Explainability UX Patterns"],
    agenticContext:
      "Transparency is not just a UX nicety — it's a trust primitive. Agents that can't explain themselves get abandoned. Communication design is where PMs have the most leverage in AI.",
  },
  {
    letter: "T",
    title: "Trust & Safety Rails",
    color: "#F472B6",
    darkColor: "#EC4899",
    tagline: "What prevents the agent from causing harm — intentionally or not?",
    description:
      "Safety in agentic systems is a product requirement, not an afterthought. PMs must define guardrails, failure modes, and escalation paths before launch — not after an incident.",
    questions: [
      "What are the 3 most catastrophic things this agent could do?",
      "What content, actions, or domains are explicitly prohibited?",
      "How does the agent handle adversarial inputs or prompt injection?",
      "What is the kill switch — and who can use it?",
    ],
    artifacts: ["Risk Register", "Guardrail Specification", "Incident Response Playbook"],
    agenticContext:
      "Safety rails are not constraints on the agent — they're the foundation of user trust. Every agentic PM must think like a risk officer. The best agents are safe by design, not by policy.",
  },
];

export default function IMPACTFramework() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("questions");

  const item = framework[active];

  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        background: "#0A0A0A",
        minHeight: "100vh",
        color: "#E8E8E0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "32px 40px 20px",
          borderBottom: "1px solid #1E1E1E",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#555",
              textTransform: "uppercase",
            }}
          >
            Agentic Product Framework
          </span>
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(28px, 5vw, 48px)",
            fontFamily: "'Courier New', monospace",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#F0F0E8",
          }}
        >
          IMPACT
        </h1>
        <p style={{ margin: "6px 0 0", fontSize: 13, color: "#555", letterSpacing: "0.05em" }}>
          A senior PM's framework for building autonomous agent products
        </p>
      </div>

      {/* Nav Pills */}
      <div
        style={{
          display: "flex",
          gap: 0,
          padding: "0 40px",
          borderBottom: "1px solid #1E1E1E",
          overflowX: "auto",
        }}
      >
        {framework.map((f, i) => (
          <button
            key={i}
            onClick={() => { setActive(i); setTab("questions"); }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: active === i ? `2px solid ${f.color}` : "2px solid transparent",
              marginBottom: -1,
              transition: "all 0.15s",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: active === i ? f.color : "#333",
                transition: "color 0.15s",
                fontFamily: "'Courier New', monospace",
              }}
            >
              {f.letter}
            </span>
            <span
              style={{
                fontSize: 11,
                color: active === i ? "#AAA" : "#444",
                letterSpacing: "0.05em",
                display: window.innerWidth < 500 ? "none" : "block",
              }}
            >
              {f.title.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "32px 40px", maxWidth: 900 }}>
        {/* Title Block */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <span
              style={{
                fontSize: 56,
                fontWeight: 900,
                color: item.color,
                lineHeight: 1,
                fontFamily: "'Courier New', monospace",
              }}
            >
              {item.letter}
            </span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#F0F0E8", letterSpacing: "-0.01em" }}>
                {item.title}
              </div>
              <div style={{ fontSize: 13, color: "#666", marginTop: 3, fontStyle: "italic" }}>
                {item.tagline}
              </div>
            </div>
          </div>

          <div
            style={{
              borderLeft: `3px solid ${item.color}`,
              paddingLeft: 16,
              color: "#AAA",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            {item.description}
          </div>
        </div>

        {/* Agentic Context Callout */}
        <div
          style={{
            background: "#111",
            border: `1px solid #1E1E1E`,
            borderRadius: 4,
            padding: "14px 18px",
            marginBottom: 24,
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: 11, color: item.color, letterSpacing: "0.15em", flexShrink: 0, paddingTop: 2 }}>
            WHY IT MATTERS
          </span>
          <span style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{item.agenticContext}</span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 20, borderBottom: "1px solid #1E1E1E" }}>
          {["questions", "artifacts"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 20px",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: tab === t ? item.color : "#444",
                borderBottom: tab === t ? `1px solid ${item.color}` : "1px solid transparent",
                marginBottom: -1,
                transition: "all 0.15s",
              }}
            >
              {t === "questions" ? "Key Questions" : "PM Artifacts"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === "questions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {item.questions.map((q, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom: "1px solid #141414",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: item.color,
                    fontWeight: 700,
                    flexShrink: 0,
                    paddingTop: 2,
                    opacity: 0.7,
                  }}
                >
                  Q{i + 1}
                </span>
                <span style={{ fontSize: 14, color: "#CCC", lineHeight: 1.6 }}>{q}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "artifacts" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ fontSize: 12, color: "#555", margin: "0 0 16px", letterSpacing: "0.05em" }}>
              Recommended deliverables for this pillar:
            </p>
            {item.artifacts.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  background: "#111",
                  border: "1px solid #1A1A1A",
                  borderRadius: 4,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: item.color,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 14, color: "#CCC" }}>{a}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 40px",
          borderTop: "1px solid #1A1A1A",
        }}
      >
        <button
          onClick={() => { setActive(Math.max(0, active - 1)); setTab("questions"); }}
          disabled={active === 0}
          style={{
            background: "none",
            border: "1px solid #222",
            color: active === 0 ? "#333" : "#888",
            cursor: active === 0 ? "default" : "pointer",
            padding: "8px 16px",
            fontSize: 11,
            letterSpacing: "0.1em",
            borderRadius: 2,
          }}
        >
          ← PREV
        </button>
        <span style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em", alignSelf: "center" }}>
          {active + 1} / {framework.length}
        </span>
        <button
          onClick={() => { setActive(Math.min(framework.length - 1, active + 1)); setTab("questions"); }}
          disabled={active === framework.length - 1}
          style={{
            background: "none",
            border: "1px solid #222",
            color: active === framework.length - 1 ? "#333" : "#888",
            cursor: active === framework.length - 1 ? "default" : "pointer",
            padding: "8px 16px",
            fontSize: 11,
            letterSpacing: "0.1em",
            borderRadius: 2,
          }}
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}
