'use client';

import { useState } from "react";

const LOGO_SRC = "data:image/png;base64,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";

const strategyItems = [
  { id: "s-mission", name: "Mission & Vision", desc: "Why the brand exists and where it's going. One sentence each. The north star that aligns every decision — sharp enough to guide hard choices." },
  { id: "s-manifesto", name: "Manifesto", desc: "What the brand believes in. 60–150 words. A declaration of conviction that draws a line — includes a manifesto film voiceover script ready for production." },
  { id: "s-positioning", name: "Brand Positioning", desc: "A distinct, defensible space in people's minds. Tested with the swap test: if a competitor could say it, it gets rewritten. 2–3 territory options presented." },
  { id: "s-cvp", name: "Customer Value Prop", desc: "The promise to customers: what they get, why it matters, and the 'only we' statement that no competitor can claim. Core promise + 3 proof points." },
  { id: "s-evp", name: "Employer Value Prop", desc: "The promise to talent: what the brand stands for as a workplace. Grounded in real company culture, not aspirational posters." },
  { id: "s-rtb", name: "Reasons to Believe", desc: "4–6 proof points that turn positioning into credibility. Heritage, capability, data, method, endorsement — specific, not generic." },
  { id: "s-tov", name: "Tone of Voice", desc: "3–4 voice characteristics, each with 'this not that' contrasts and 2–3 example headlines with matching body copy. 6–9 ready-to-use headline+copy combinations total." },
  { id: "s-boap", name: "Brand on a Page", desc: "The entire strategy compressed onto one page. If it doesn't fit, the strategy isn't clear enough. The ultimate alignment tool." },
];

const identityItems = [
  { id: "i-logo", name: "Logo, Lockups & Sound Logo", desc: "Visual mark (symbol, wordmark, combination) in all configurations + a 2–5 second sonic identity. Multi-sensory recognition: how the brand looks and sounds." },
  { id: "i-assets", name: "Distinctive Brand Assets", desc: "Ownable elements beyond the logo: signature graphic devices, mascots or characters, key visuals, patterns, motion principles. Cover the logo — can you still identify the brand?" },
  { id: "i-colour", name: "Colour System", desc: "Primary + secondary palette, functional colours, usage rules, accessibility standards. Strategically chosen to break category colour conventions." },
  { id: "i-type", name: "Typography", desc: "Primary + secondary typefaces with hierarchy system. Selected to embody the tone of voice — the voice made visible. Includes multilingual support for DACH." },
  { id: "i-imagery", name: "Imagery Style", desc: "Photographic and illustrative direction: mood, lighting, composition, subjects, treatment. Makes someone feel the brand before reading a word." },
  { id: "i-layout", name: "Layout Principles", desc: "Grid system, spatial hierarchy, white space philosophy, responsive behaviour. The invisible architecture of every brand experience." },
  { id: "i-icons", name: "Iconography", desc: "Consistent icon language: style, stroke weight, grid, sizing system, core icon set. Functional assets that reinforce the visual identity." },
  { id: "i-apps", name: "Brand Applications", desc: "Mockups showing the identity system in action across real touchpoints — digital, print, environmental. Proof that the system works in the wild." },
  { id: "i-donts", name: "Design Dos & Don'ts", desc: "Clear guardrails with correct and incorrect examples. Protects the brand from inconsistency, dilution, and falling back into category conventions." },
  { id: "i-handbook", name: "Hands-On Handbook", desc: "Quick-reference field guide ensuring anyone can apply the brand correctly. Practical, scannable, one-page visual cheat sheet included." },
];

const Arrow = ({ label }) => (
  <div className="flex justify-center py-3">
    <div className="flex flex-col items-center">
      <div className="w-px h-6 bg-neutral-700" />
      {label && <div className="text-[10px] font-mono text-neutral-500 py-1">{label}</div>}
      {label && <div className="w-px h-3 bg-neutral-700" />}
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M1 1L6 6L11 1" stroke="#82FF41" strokeWidth="2" />
      </svg>
    </div>
  </div>
);

const SkillBadge = ({ name }) => (
  <span className="inline-block px-2 py-0.5 text-xs font-mono rounded" style={{ background: "rgba(130,255,65,0.15)", color: "#82FF41", border: "1px solid rgba(130,255,65,0.3)" }}>
    {name}
  </span>
);

const DirectionBadge = ({ text }) => (
  <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded" style={{ background: "rgba(255,255,255,0.05)", color: "#999", border: "1px solid rgba(255,255,255,0.1)" }}>
    {text}
  </span>
);

const ExpandHint = () => (
  <span className="inline-block ml-1.5 text-[9px] font-mono opacity-40 group-hover:opacity-70 transition-opacity">+</span>
);

const ClickableItem = ({ item, isActive, onClick, cols }) => (
  <div
    className={`group rounded p-2.5 border text-center cursor-pointer transition-all duration-300 ${
      isActive
        ? "clickable-card-active"
        : "clickable-item"
    }`}
    onClick={onClick}
  >
    <div className={`${cols === 5 ? "text-[11px]" : "text-xs"} font-medium text-neutral-300 flex items-center justify-center`}>
      {item.name}
      {!isActive && <ExpandHint />}
    </div>
    {isActive && (
      <p className="text-[10px] text-neutral-400 mt-2 leading-relaxed text-left animate-fadeIn">{item.desc}</p>
    )}
  </div>
);

const StaticItem = ({ children }) => (
  <div className="rounded p-2 border border-neutral-800/60 bg-[#0d0d0d] text-center">
    {children}
  </div>
);

export default function BrandBuildingFlow() {
  const [activeCard, setActiveCard] = useState(null);
  const toggle = (id) => setActiveCard(activeCard === id ? null : id);

  const cardBase = "group cursor-pointer transition-all duration-300 rounded-lg p-4 border";
  const cardActive = (id) => activeCard === id
    ? "clickable-card-active"
    : "clickable-card";

  return (
    <div className="min-h-screen text-white" style={{ background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(130,255,65,0); } 50% { box-shadow: 0 0 24px 2px rgba(130,255,65,0.12); } }
        .pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
        .clickable-card { border-color: #404040; background: #111; }
        .clickable-card:hover { border-color: rgba(130,255,65,0.5); background: #161616; }
        .clickable-card-active { border-color: #82FF41; background: #1a1a1a; box-shadow: 0 4px 12px rgba(130,255,65,0.1); }
        .clickable-item { border-color: #404040; background: #111; }
        .clickable-item:hover { border-color: rgba(130,255,65,0.5); background: #161616; }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Header with Logo */}
        <div className="text-center mb-16">
          <img src={LOGO_SRC} alt="berndt ad-venture" className="w-12 h-12 mx-auto mb-4 rounded-lg" />
          <div className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "#82FF41" }}>berndt ad-venture</div>
          <h1 className="text-3xl font-bold mb-3">Agentic Brand Building Workflow</h1>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto">
            An agentic workflow with human quality gates — where AI-powered intelligence meets two decades of strategic experience and taste. Every phase is machine-accelerated, every decision is human-curated.
          </p>
        </div>

        {/* Foundation */}
        <div className="mb-4 rounded-xl p-6 border border-neutral-800" style={{ background: "#0f0f0f" }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-1 text-neutral-500">The Foundation</div>
          <h2 className="text-lg font-bold mb-4">Three Goals. Every Decision.</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Relevance", desc: "Connects to real human needs, motivations, and cultural context" },
              { name: "Distinctiveness", desc: "Instantly recognisable through ownable assets and codes" },
              { name: "Salience", desc: "Comes to mind first when decisions are made" },
            ].map((item, i) => (
              <StaticItem key={i}>
                <div className="text-sm font-semibold mb-1" style={{ color: "#82FF41" }}>{item.name}</div>
                <div className="text-xs text-neutral-500 leading-relaxed">{item.desc}</div>
              </StaticItem>
            ))}
          </div>
        </div>

        <div className="flex justify-center py-1">
          <div className="text-[10px] text-neutral-600 font-mono tracking-wider">INFORMS EVERYTHING ↓</div>
        </div>

        {/* Phase 0 + 1: 4C Analysis */}
        <div className="mb-4 rounded-xl p-6 border border-neutral-800" style={{ background: "#0f0f0f" }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-1 text-neutral-500">Phase 0 + Phase 1</div>
          <h2 className="text-lg font-bold mb-1">The 4C Analysis</h2>
          <p className="text-xs text-neutral-500 mb-6">Starting inside-out with the client, then looking outside-in at market, people, and culture</p>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <DirectionBadge text="→ Inside Out" />
              <span className="text-[10px] text-neutral-600">Starting point: the client's own intelligence</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { id: "questionnaire", label: "Brand Discovery Questionnaire", desc: "16 questions across 4 categories — the client's own words about their business, competition, ambition, and identity. This is the primary fuel for the Company C." },
                { id: "uploads", label: "Client Documents & Studies", desc: "Existing playbooks, pitch decks, research, studies — anything the client shares that deepens our understanding." },
                { id: "analyzer", label: "Discovery Analyzer", desc: "Synthesizes raw answers into a structured Needs Assessment: business portrait, tensions, gaps, and hypotheses for all four C's.", skill: "brand-discovery-analyzer" },
              ].map((input) => (
                <div key={input.id} className={`${cardBase} ${cardActive(input.id)}`} onClick={() => toggle(input.id)}>
                  <div className="text-xs font-semibold text-white mb-1 flex items-center">{input.label}{activeCard !== input.id && <ExpandHint />}</div>
                  {input.skill && <SkillBadge name={input.skill} />}
                  {activeCard === input.id && <p className="text-neutral-400 text-xs mt-2 leading-relaxed animate-fadeIn">{input.desc}</p>}
                </div>
              ))}
            </div>

            <div className="flex justify-center py-2">
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-neutral-700" />
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="#82FF41" strokeWidth="2" /></svg>
              </div>
            </div>

            <div className={`${cardBase} ${cardActive("company")} border-l-2`} style={{ borderLeftColor: "#82FF41" }} onClick={() => toggle("company")}>
              <div className="flex items-center justify-between mb-1">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest" style={{ color: "#82FF41" }}>Who are you?</div>
                  <div className="text-base font-bold text-white flex items-center">Company{activeCard !== "company" && <ExpandHint />}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <SkillBadge name="company-checker" />
                  <DirectionBadge text="1st C — starting point" />
                </div>
              </div>
              {activeCard === "company" && <p className="text-neutral-400 text-xs mt-2 leading-relaxed animate-fadeIn">The inside-out starting point. Fed directly by the client's questionnaire answers and any documents they share. We crunch and synthesize their business reality — heritage, model, financials, leadership, ambition, strengths, blind spots — into a strategic company portrait.</p>}
            </div>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-neutral-800" />
            <div className="text-[10px] font-mono text-neutral-500 tracking-wider">THEN</div>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <DirectionBadge text="← Outside In" />
              <span className="text-[10px] text-neutral-600">Market, people, and cultural intelligence</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "category", label: "Category", question: "Where do you play?", desc: "The competitive landscape, category conventions, unwritten rules, trends, and white space. Where conventions can be broken and defensible territory claimed.", skill: "category-checker" },
                { id: "consumer", label: "Consumer", question: "Who do you serve?", desc: "Buyer psychology beyond demographics — motivations, pain & love points, behavioural patterns. Rich typologies that reveal why people really choose.", skill: "consumer-checker" },
                { id: "culture", label: "Culture", question: "What's shaping your world?", desc: "Societal shifts, cultural tensions, subcultures, tastemakers, emerging movements. Where the brand connects to something bigger than the product.", skill: "culture-checker" },
              ].map((step) => (
                <div key={step.id} className={`${cardBase} ${cardActive(step.id)}`} onClick={() => toggle(step.id)}>
                  <div className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: "#82FF41" }}>{step.question}</div>
                  <div className="text-sm font-bold text-white mb-1 flex items-center">{step.label}{activeCard !== step.id && <ExpandHint />}</div>
                  <SkillBadge name={step.skill} />
                  {activeCard === step.id && <p className="text-neutral-400 text-xs mt-2 leading-relaxed animate-fadeIn">{step.desc}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-3 rounded-lg border border-neutral-800/60 bg-[#0c0c0c]">
            <div className="text-xs text-neutral-500"><span className="font-semibold text-neutral-300">What you get:</span> Four dossiers forming a 360° brand intelligence base — plus KPIs that define what success looks like going forward.</div>
          </div>
        </div>

        <Arrow label="4 dossiers feed into synthesis" />

        {/* Synthesis Bridge */}
        <div className="mb-4 rounded-xl p-6 border pulse-glow" style={{ background: "#0f0f0f", borderColor: "#82FF41" }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: "#82FF41" }}>The Bridge</div>
          <h2 className="text-lg font-bold mb-1">Intelligence → Insight → Strategy</h2>
          <p className="text-xs text-neutral-500 mb-4">Where four perspectives become one strategic direction</p>
          <div className={`${cardBase} ${cardActive("synthesis")}`} onClick={() => toggle("synthesis")}>
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-bold text-white flex items-center">4C Synthesis{activeCard !== "synthesis" && <ExpandHint />}</div>
              <SkillBadge name="4c-synthesis" />
            </div>
            {activeCard === "synthesis" && <p className="text-neutral-400 text-xs mt-2 leading-relaxed animate-fadeIn">Weaves all four dossiers into a unified strategic brief: cross-cutting patterns (alignment, conflict, gaps), strategic territories, tensions to navigate, and Phase 2 hypotheses. This is where intelligence becomes strategy.</p>}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { name: "Alignment Patterns", desc: "Where findings across C's reinforce each other" },
              { name: "Conflict Patterns", desc: "Where C's contradict — strategic gold" },
              { name: "Gap Patterns", desc: "Opportunities no single C reveals alone" },
            ].map((p, i) => (
              <StaticItem key={i}>
                <div className="text-xs font-mono font-medium" style={{ color: "#82FF41" }}>{p.name}</div>
                <div className="text-[10px] text-neutral-500 mt-1 leading-relaxed">{p.desc}</div>
              </StaticItem>
            ))}
          </div>
        </div>

        <Arrow label="strategic territories & hypotheses" />

        {/* Phase 2a — Brand Strategy */}
        <div className="mb-4 rounded-xl p-6 border border-neutral-800" style={{ background: "#0f0f0f" }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-1 text-neutral-500">Phase 2a</div>
          <h2 className="text-lg font-bold mb-1">Brand Strategy</h2>
          <p className="text-xs text-neutral-500 mb-4">From insight to direction — 8 strategic dimensions, zero fluff</p>
          <div className={`${cardBase} ${cardActive("strategy-writer")} mb-4`} onClick={() => toggle("strategy-writer")}>
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-bold text-white flex items-center">Brand Strategy Writer{activeCard !== "strategy-writer" && <ExpandHint />}</div>
              <SkillBadge name="brand-strategy-writer" />
            </div>
            {activeCard === "strategy-writer" && <p className="text-neutral-400 text-xs mt-2 leading-relaxed animate-fadeIn">Takes the 4C Synthesis and develops each of the eight strategic dimensions into full content — mission, manifesto, positioning, value propositions, tone of voice with 6–9 example headlines+copy. Every piece tested against three quality gates: Relevance, Distinctiveness, Salience. If a competitor could say it, it gets rewritten.</p>}
          </div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {strategyItems.map((item) => (
              <ClickableItem key={item.id} item={item} isActive={activeCard === item.id} onClick={() => toggle(item.id)} cols={4} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg border border-neutral-700 bg-[#141414]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="2" stroke="#82FF41" strokeWidth="1.5"/><path d="M5 8L7 10L11 6" stroke="#82FF41" strokeWidth="1.5"/></svg>
            <span className="text-sm font-semibold" style={{ color: "#82FF41" }}>Deliverable: Brand Playbook</span>
          </div>
        </div>

        <Arrow label="strategy applied in context" />

        {/* Phase 2b — Territory Testing */}
        <div className="mb-4 rounded-xl p-6 border border-neutral-800" style={{ background: "#0f0f0f" }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-1 text-neutral-500">Phase 2b</div>
          <h2 className="text-lg font-bold mb-1">Strategy in Context</h2>
          <p className="text-xs text-neutral-500 mb-4">Experience the brand strategy as customer-facing landing pages — and test strategic territories with real audiences</p>
          <div className={`${cardBase} ${cardActive("landing-page")} mb-4`} onClick={() => toggle("landing-page")}>
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-bold text-white flex items-center">Strategy Landing Page Builder{activeCard !== "landing-page" && <ExpandHint />}</div>
              <SkillBadge name="strategy-landing-page" />
            </div>
            {activeCard === "landing-page" && <p className="text-neutral-400 text-xs mt-2 leading-relaxed animate-fadeIn">Translates the Brand Playbook into customer-facing landing pages with real copy in the actual tone of voice. Includes a manifesto film placeholder with voiceover script. Each page follows: hero/positioning, problem, value proposition, proof, manifesto, CTA. The client experiences the strategy as their customers would.</p>}
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <DirectionBadge text="Territory Testing" />
              <span className="text-[10px] text-neutral-600">Different strategic directions, same page structure</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Territory A", desc: "E.g., playful & approachable — warm, human, conversational", bg: "rgba(130,255,65,0.12)" },
                { label: "Territory B", desc: "E.g., expert & authoritative — precise, confident, premium", bg: "rgba(130,255,65,0.07)" },
                { label: "Territory C", desc: "E.g., bold & disruptive — provocative, future-forward, challenger", bg: "rgba(130,255,65,0.03)" },
              ].map((t, i) => (
                <StaticItem key={i}>
                  <div className="text-xs font-mono font-medium text-white mb-1">{t.label}</div>
                  <div className="text-[10px] text-neutral-400 leading-relaxed">{t.desc}</div>
                  <div className="mt-2 text-[10px] font-mono text-neutral-600">Landing Page #{i + 1}</div>
                </StaticItem>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <StaticItem>
              <div className="text-xs text-neutral-500 mb-1">The Thinking</div>
              <div className="text-sm font-semibold text-neutral-200">Brand Playbook</div>
              <div className="text-[10px] text-neutral-500 mt-1">Strategic logic & frameworks</div>
            </StaticItem>
            <StaticItem>
              <div className="text-xs text-neutral-500 mb-1">The Feeling</div>
              <div className="text-sm font-semibold text-neutral-200">2–3 Landing Page Mockups</div>
              <div className="text-[10px] text-neutral-500 mt-1">Strategy experienced as different territories</div>
            </StaticItem>
          </div>
        </div>

        {/* Dual Quality Gates */}
        <div className="flex justify-center py-4">
          <div className="flex flex-col items-center w-full max-w-md">
            <div className="w-px h-4 bg-neutral-700" />
            <div className="w-full px-4 py-3 rounded-lg border-2 mb-2" style={{ borderColor: "#82FF41", background: "rgba(130,255,65,0.05)" }}>
              <div className="flex items-center gap-2 mb-1">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#82FF41" strokeWidth="1.5"/><path d="M5 8L7 10L11 6" stroke="#82FF41" strokeWidth="1.5"/></svg>
                <span className="text-xs font-mono font-medium" style={{ color: "#82FF41" }}>Quality Gate 1: Client Review</span>
              </div>
              <p className="text-[10px] text-neutral-400 leading-relaxed ml-6">The client sees their brand strategy in action. Does this feel like us? Which territory resonates?</p>
            </div>
            <div className="w-full px-4 py-3 rounded-lg border-2" style={{ borderColor: "#82FF41", background: "rgba(130,255,65,0.05)" }}>
              <div className="flex items-center gap-2 mb-1">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#82FF41" strokeWidth="1.5"/><path d="M5 8L7 10L11 6" stroke="#82FF41" strokeWidth="1.5"/></svg>
                <span className="text-xs font-mono font-medium" style={{ color: "#82FF41" }}>Quality Gate 2: Consumer Testing</span>
              </div>
              <p className="text-[10px] text-neutral-400 leading-relaxed ml-6">A/B/C test with real target audiences. Does the message land? Which territory resonates? What converts?</p>
            </div>
            <div className="w-px h-4 bg-neutral-700 mt-2" />
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="#82FF41" strokeWidth="2" /></svg>
            <div className="text-[10px] font-mono text-neutral-500 mt-1">validated direction</div>
          </div>
        </div>

        {/* Phase 3 — Brand Identity */}
        <div className="mb-4 rounded-xl p-6 border border-neutral-800" style={{ background: "#0f0f0f" }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-1 text-neutral-500">Phase 3</div>
          <h2 className="text-lg font-bold mb-1">Brand Identity</h2>
          <p className="text-xs text-neutral-500 mb-4">From strategy to expression — only after strategic direction is validated. Distinctiveness is the dominant force.</p>
          <div className={`${cardBase} ${cardActive("identity-prompter")} mb-4`} onClick={() => toggle("identity-prompter")}>
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-bold text-white flex items-center">Brand Identity Prompter{activeCard !== "identity-prompter" && <ExpandHint />}</div>
              <SkillBadge name="brand-identity-prompter" />
            </div>
            {activeCard === "identity-prompter" && <p className="text-neutral-400 text-xs mt-2 leading-relaxed animate-fadeIn">Writes detailed creative briefs and AI generation prompts for each identity component. Every visual decision traced to a strategic decision. Includes the Distinctiveness Imperative: three tests (recognition, memory, decipherability) applied to every element. Uses the validated territory, Q15 brand references, and category conventions as input.</p>}
          </div>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {identityItems.map((item) => (
              <ClickableItem key={item.id} item={item} isActive={activeCard === item.id} onClick={() => toggle(item.id)} cols={5} />
            ))}
          </div>
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-neutral-800" />
            <div className="text-[10px] font-mono text-neutral-500 tracking-wider">HANDOVER TO DESIGN TOOL / DESIGNER</div>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { name: "AI Generation", desc: "Midjourney, DALL-E, Ideogram", icon: "\u26A1" },
              { name: "Design Tools", desc: "Figma, Adobe CC, Canva", icon: "\uD83C\uDFA8" },
              { name: "Human Designer", desc: "Creative direction + refinement", icon: "\u270B" },
            ].map((tool, i) => (
              <StaticItem key={i}>
                <div className="text-lg mb-1">{tool.icon}</div>
                <div className="text-xs font-medium text-neutral-300">{tool.name}</div>
                <div className="text-[10px] text-neutral-500 mt-0.5">{tool.desc}</div>
              </StaticItem>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg border border-neutral-700 bg-[#141414]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="2" stroke="#82FF41" strokeWidth="1.5"/><path d="M5 8L7 10L11 6" stroke="#82FF41" strokeWidth="1.5"/></svg>
            <span className="text-sm font-semibold" style={{ color: "#82FF41" }}>Deliverable: Brand Style Guide</span>
          </div>
        </div>

        {/* Skill Map */}
        <div className="mt-12 rounded-xl p-6 border border-neutral-800" style={{ background: "#0f0f0f" }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-3 text-neutral-500">Skill Map — What Powers Each Phase</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {[
              { skill: "brand-discovery-analyzer", phase: "Questionnaire → Company C" },
              { skill: "company-checker", phase: "Phase 1: Company (inside-out)" },
              { skill: "category-checker", phase: "Phase 1: Category (outside-in)" },
              { skill: "consumer-checker", phase: "Phase 1: Consumer (outside-in)" },
              { skill: "culture-checker", phase: "Phase 1: Culture (outside-in)" },
              { skill: "4c-synthesis", phase: "Phase 1 → 2: The Bridge" },
              { skill: "brand-strategy-writer", phase: "Phase 2a: Brand Playbook" },
              { skill: "strategy-landing-page", phase: "Phase 2b: Territory testing" },
              { skill: "brand-identity-prompter", phase: "Phase 3: Visual & sonic briefs" },
              { skill: "brand-building-framework", phase: "Methodology backbone" },
              { skill: "presentation-maker", phase: "Client-facing decks" },
              { skill: "image-prompt-generator", phase: "Photography prompts" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-neutral-800">
                <SkillBadge name={s.skill} />
                <span className="text-xs text-neutral-500">{s.phase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <img src={LOGO_SRC} alt="berndt ad-venture" className="w-6 h-6 rounded" />
          <span className="text-xs text-neutral-600 font-mono">berndt ad-venture LLC — Agentic Brand Building Workflow v5.0</span>
        </div>
      </div>
    </div>
  );
}
