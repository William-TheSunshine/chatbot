"use client";

import { useState } from "react";

type Tab = "overview" | "structure" | "standards";

export default function GuidelineScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="guide-page">
      <header className="guide-header">
        <div>
          <h1 className="guide-header-title">2025 ICF 윤리강령</h1>
          <p className="guide-header-desc">더 넓고 깊어진 전문 코칭의 신뢰 기준</p>
        </div>
      </header>

      {/* 탭 네비게이션 */}
      <div className="guide-tabs">
        <button className={`guide-tab ${activeTab === "overview" ? "active" : ""}`} onClick={() => setActiveTab("overview")}>
          개정 비교
        </button>
        <button className={`guide-tab ${activeTab === "structure" ? "active" : ""}`} onClick={() => setActiveTab("structure")}>
          주요 구조적 변화
        </button>
        <button className={`guide-tab ${activeTab === "standards" ? "active" : ""}`} onClick={() => setActiveTab("standards")}>
          신설 및 강화 표준
        </button>
      </div>

      <div className="guide-content">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "structure" && <StructureTab />}
        {activeTab === "standards" && <StandardsTab />}
      </div>
    </div>
  );
}

/* ===== 개정 비교 탭 ===== */
function OverviewTab() {
  return (
    <div className="guide-overview">
      <div className="guide-compare">
        {/* 2021년 강령 */}
        <div className="guide-compare-card old">
          <div className="guide-compare-badge old">2021년 강령</div>
          <div className="guide-compare-items">
            <div className="guide-compare-item">
              <div className="guide-icon-circle teal">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M12 21l-7-7 2-2 5 5L22 7l2 2L12 21z" fill="#fff"/></svg>
              </div>
              <div>
                <strong>ICF 전문가</strong>
                <p>(회원, 인증자)</p>
              </div>
            </div>
            <div className="guide-compare-item">
              <div className="guide-icon-circle blue">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#fff"/></svg>
              </div>
              <div>
                <strong>기술 보조 서비스</strong>
                <p>언급 수준</p>
              </div>
            </div>
            <div className="guide-compare-item">
              <div className="guide-icon-circle gray">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="8" stroke="#fff" strokeWidth="2" fill="none"/><path d="M14 10v4M14 18h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <strong>&apos;Do No Harm&apos;</strong>
                <p>해를 끼치지 않음</p>
              </div>
            </div>
          </div>
        </div>

        {/* 브릿지 화살표 */}
        <div className="guide-compare-bridge">
          <div className="guide-bridge-line" />
          <div className="guide-bridge-arrow">&#10132;</div>
          <span className="guide-bridge-label">개정</span>
        </div>

        {/* 2025년 강령 */}
        <div className="guide-compare-card new">
          <div className="guide-compare-badge new">2025년 강령 (개정)</div>
          <div className="guide-compare-items">
            <div className="guide-compare-item">
              <div className="guide-icon-circle teal">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="4" fill="#fff"/><circle cx="8" cy="18" r="3" fill="#fff" opacity="0.7"/><circle cx="20" cy="18" r="3" fill="#fff" opacity="0.7"/><circle cx="14" cy="22" r="3" fill="#fff" opacity="0.5"/></svg>
              </div>
              <div>
                <strong>ICF 생태계 전체</strong>
                <p>(직원, 봉사자 포함)</p>
              </div>
            </div>
            <div className="guide-compare-item">
              <div className="guide-icon-circle gold">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="6" y="8" width="16" height="12" rx="2" fill="#fff"/><path d="M10 14h8M10 17h5" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div>
                <strong>AI 및 디지털 플랫폼</strong>
                <p>상세 지침 (표준 2.5)</p>
              </div>
            </div>
            <div className="guide-compare-item">
              <div className="guide-icon-circle red">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 8c-2-3-6-3-7 0s1 6 7 10c6-4 8-7 7-10s-5-3-7 0z" fill="#fff"/></svg>
              </div>
              <div>
                <strong>&apos;Do Good&apos;</strong>
                <p>적극적인 선의 실천</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 핵심 변화 요약 */}
      <div className="guide-summary-cards">
        <div className="guide-summary-card">
          <div className="guide-summary-icon">&#x1F310;</div>
          <h4>적용 범위 확대</h4>
          <p>인증 코치뿐만 아니라 비서, 직원, 자원봉사자, 이사회 멤버 등 코칭과 관련된 모든 주체에게 적용됩니다.</p>
        </div>
        <div className="guide-summary-card">
          <div className="guide-summary-icon">&#x2696;</div>
          <h4>철학적 전환</h4>
          <p>단순히 잘못을 피하는 수준을 넘어, 고객과 사회를 위해 능동적으로 윤리적 행동을 실현할 것을 요구합니다.</p>
        </div>
        <div className="guide-summary-card">
          <div className="guide-summary-icon">&#x1F916;</div>
          <h4>기술 활용 지침</h4>
          <p>AI 도구 사용 시 반드시 고객에게 공개하고, 데이터 보안 및 문화적 책임을 코치가 직접 져야 합니다.</p>
        </div>
      </div>
    </div>
  );
}

/* ===== 주요 구조적 변화 탭 ===== */
function StructureTab() {
  const sections = [
    {
      icon: "&#x1F4CB;",
      title: "책임 (Responsibility)",
      color: "#4285f4",
      desc: "코치는 자신의 행동과 결정에 대해 전적인 책임을 집니다. 전문성 유지와 지속적 학습을 포함합니다.",
      items: ["전문 역량 범위 내에서 활동", "지속적인 전문성 개발", "윤리적 의사결정 체계 유지"],
    },
    {
      icon: "&#x1F91D;",
      title: "합의 (Agreement)",
      color: "#34a853",
      desc: "코칭 관계 시작 전 명확한 합의를 수립합니다. 역할, 기대, 비용, 일정 등을 포함합니다.",
      items: ["코칭 계약의 명확한 수립", "역할과 기대치 사전 합의", "이해관계 충돌 사전 공개"],
    },
    {
      icon: "&#x1F512;",
      title: "비밀 유지 (Confidentiality)",
      color: "#f4b400",
      desc: "고객의 정보를 철저히 보호합니다. 디지털 환경에서의 데이터 보안도 포함됩니다.",
      items: ["고객 정보의 철저한 보호", "디지털 데이터 보안 준수", "정보 공개 시 사전 동의 필수"],
    },
    {
      icon: "&#x1F4A1;",
      title: "가치 전달 (Value Creation)",
      color: "#ea4335",
      desc: "고객에게 실질적인 가치를 전달하기 위해 최선을 다합니다. 코칭의 효과와 영향을 측정합니다.",
      items: ["고객 중심의 코칭 설계", "코칭 효과 측정 및 피드백", "지속 가능한 변화 지원"],
    },
    {
      icon: "&#x2B50;",
      title: "전문적 행위 (Professional Conduct)",
      color: "#7c4dff",
      desc: "코칭 전문가로서 품위와 윤리를 유지합니다. 사회적 책임과 다양성 존중을 포함합니다.",
      items: ["전문가적 품위 유지", "다양성과 포용성 존중", "사회적 책임 이행"],
    },
  ];

  return (
    <div className="guide-structure">
      <div className="guide-section-banner">
        <h3>5대 섹션 중심의 체계적 재편</h3>
        <p>기존 4개 장에서 합의, 비밀유지, 가치 전달, 책임의 5개 섹션으로 구체화되었습니다.</p>
      </div>

      <div className="guide-sections-grid">
        {sections.map((s, i) => (
          <div key={i} className="guide-section-card">
            <div className="guide-section-card-header" style={{ borderLeftColor: s.color }}>
              <span className="guide-section-icon" dangerouslySetInnerHTML={{ __html: s.icon }} />
              <h4 style={{ color: s.color }}>{s.title}</h4>
            </div>
            <p className="guide-section-desc">{s.desc}</p>
            <ul className="guide-section-list">
              {s.items.map((item, j) => (
                <li key={j} style={{ color: s.color }}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Do Good 철학 배너 */}
      <div className="guide-dogood-banner">
        <div className="guide-dogood-icon">&#x1F49A;</div>
        <div>
          <h4>&apos;Do Good (선을 행함)&apos; 철학의 확립</h4>
          <p>단순히 잘못을 피하는 수준을 넘어, 고객과 사회를 위해 능동적으로 윤리적 행위를 실천할 것을 요구합니다.</p>
        </div>
      </div>
    </div>
  );
}

/* ===== 신설 및 강화 표준 탭 ===== */
function StandardsTab() {
  return (
    <div className="guide-standards">
      {/* 표준 2.5 */}
      <div className="guide-standard-card">
        <div className="guide-standard-header blue">
          <div className="guide-standard-badge">표준 2.5</div>
          <h3>AI 및 기술 활용의 투명성</h3>
        </div>
        <div className="guide-standard-body">
          <p className="guide-standard-desc">AI 도구 사용 시 반드시 고객에게 공개하고, 데이터 보안 및 문화적 책임을 코치가 직접 져야 합니다.</p>
          <div className="guide-standard-points">
            <div className="guide-standard-point">
              <span className="guide-point-icon">&#x1F4BB;</span>
              <div>
                <strong>기술 사용 공개 의무</strong>
                <p>코칭 과정에서 AI 도구나 디지털 플랫폼을 사용할 경우, 사전에 고객에게 반드시 알려야 합니다.</p>
              </div>
            </div>
            <div className="guide-standard-point">
              <span className="guide-point-icon">&#x1F50F;</span>
              <div>
                <strong>데이터 보안 책임</strong>
                <p>고객 데이터의 수집, 저장, 처리에 관한 보안 기준을 준수하고 책임져야 합니다.</p>
              </div>
            </div>
            <div className="guide-standard-point">
              <span className="guide-point-icon">&#x1F30D;</span>
              <div>
                <strong>문화적 민감성</strong>
                <p>AI 도구가 생성하는 결과물의 문화적 적절성을 코치가 검증해야 합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 표준 3.7 */}
      <div className="guide-standard-card">
        <div className="guide-standard-header green">
          <div className="guide-standard-badge">표준 3.7</div>
          <h3>다중 역할의 명확한 구분</h3>
        </div>
        <div className="guide-standard-body">
          <p className="guide-standard-desc">코치가 멘토, 컨설턴트, 치료사 등 다른 역할을 겸할 경우, 역할 전환 시 이를 명확히 고지해야 합니다.</p>
          <div className="guide-roles-grid">
            {[
              { role: "멘토", icon: "&#x1F9D1;&#x200D;&#x1F3EB;", desc: "경험 기반 조언 제공" },
              { role: "컨설턴트", icon: "&#x1F4BC;", desc: "전문적 솔루션 제안" },
              { role: "코치", icon: "&#x1F3AF;", desc: "자기 발견 촉진" },
              { role: "치료사", icon: "&#x1FA7A;", desc: "심리적 치유 지원" },
            ].map((r, i) => (
              <div key={i} className="guide-role-card">
                <span className="guide-role-icon" dangerouslySetInnerHTML={{ __html: r.icon }} />
                <strong>{r.role}</strong>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEIB */}
      <div className="guide-standard-card">
        <div className="guide-standard-header purple">
          <div className="guide-standard-badge">DEIB</div>
          <h3>다양성, 형평성, 포용성, 소속감 강화</h3>
        </div>
        <div className="guide-standard-body">
          <p className="guide-standard-desc">권력 역동과 체계적 억압에 대한 인식을 기반으로 포용하고 형평성을 코칭 문화를 조성해야 합니다.</p>
          <div className="guide-deib-items">
            <div className="guide-deib-item">
              <span className="guide-deib-letter" style={{ background: "#4285f4" }}>D</span>
              <div>
                <strong>Diversity (다양성)</strong>
                <p>다양한 배경과 관점을 인정하고 존중합니다.</p>
              </div>
            </div>
            <div className="guide-deib-item">
              <span className="guide-deib-letter" style={{ background: "#34a853" }}>E</span>
              <div>
                <strong>Equity (형평성)</strong>
                <p>공정한 기회와 자원 접근을 보장합니다.</p>
              </div>
            </div>
            <div className="guide-deib-item">
              <span className="guide-deib-letter" style={{ background: "#f4b400" }}>I</span>
              <div>
                <strong>Inclusion (포용성)</strong>
                <p>모든 구성원이 소속감을 느끼는 환경을 만듭니다.</p>
              </div>
            </div>
            <div className="guide-deib-item">
              <span className="guide-deib-letter" style={{ background: "#ea4335" }}>B</span>
              <div>
                <strong>Belonging (소속감)</strong>
                <p>진정한 연결과 소속의 경험을 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
