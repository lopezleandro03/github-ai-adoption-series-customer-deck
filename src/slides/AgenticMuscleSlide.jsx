import React from 'react'
import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AgenticMuscleSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'

export default function AgenticMuscleSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.agenticMuscleSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        
        {/* Watermark */}
        <div className={styles.watermark}>Generic Invitation — To Screenshot & Share with the Dev Community</div>

        <div className={styles.content}>
          
          {/* Main message */}
          <div className={styles.hero}>
            {/* Logos */}
            <div className={styles.logos}>
              <svg className={styles.msLogo} viewBox="0 0 23 23" fill="none">
                <path d="M0 0h11v11H0z" fill="#f25022"/>
                <path d="M12 0h11v11H12z" fill="#7fba00"/>
                <path d="M0 12h11v11H0z" fill="#00a4ef"/>
                <path d="M12 12h11v11H12z" fill="#ffb900"/>
              </svg>
              <span className={styles.logoPlus}>+</span>
              <svg className={styles.ghLogo} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className={styles.badge}>♻️ Sustainable Adoption Series</div>
            <h1 className={styles.title}>
              Agentic Engineering That <span className={styles.titleAccent}>Scales Sustainably</span>
            </h1>
            <p className={styles.subtitle}>
              Hands-on sessions with GitHub and Microsoft engineers — and your peers. Build the agentic
              skills to ship faster, and the habits that keep token consumption and agent sprawl under
              control as you scale.
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>🛠️</span>
                <span className={styles.pillarText}>Agentic skills</span>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>📊</span>
                <span className={styles.pillarText}>Token awareness</span>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>🎛️</span>
                <span className={styles.pillarText}>Agent management</span>
              </div>
            </div>
          </div>

          {/* Session Agenda */}
          <div className={styles.agendaSection}>
            <h3 className={styles.agendaTitle}>Agenda</h3>
            
            <div className={styles.agendaRows}>
              <div className={styles.agendaRow}>
                <div className={styles.agendaTime}>
                  <span className={styles.agendaDuration}>40</span>
                  <span className={styles.agendaUnit}>min</span>
                </div>
                <div className={styles.agendaBar} style={{background: 'var(--accent)'}} />
                <div className={styles.agendaContent}>
                  <h4>Hands-on Demo</h4>
                  <p>GitHub/Microsoft live demo on a focused topic — the agentic skill and what it consumes</p>
                  <span className={styles.agendaSpeaker}>GitHub / Microsoft</span>
                </div>
              </div>

              <div className={styles.agendaRow}>
                <div className={styles.agendaTime}>
                  <span className={styles.agendaDuration}>Live</span>
                  <span className={styles.agendaUnit}>ongoing</span>
                </div>
                <div className={styles.agendaBar} style={{background: 'var(--purple)'}} />
                <div className={styles.agendaContent}>
                  <h4>Live Panel Q&A</h4>
                  <p>Ongoing in the chat, in parallel to the hands-on demo and customer engineer demo — GitHub and Microsoft SMEs take your questions throughout</p>
                  <span className={styles.agendaSpeaker}>GitHub / Microsoft + Customer</span>
                </div>
              </div>

              <div className={styles.agendaRow}>
                <div className={styles.agendaTime}>
                  <span className={styles.agendaDuration}>20</span>
                  <span className={styles.agendaUnit}>min</span>
                </div>
                <div className={styles.agendaBar} style={{background: 'var(--green)'}} />
                <div className={styles.agendaContent}>
                  <h4>Customer Engineer Demo</h4>
                  <p>Share what worked internally — patterns, guardrails, and lessons on running agents well</p>
                  <span className={styles.agendaSpeaker}>Customer</span>
                </div>
              </div>
            </div>

            <div className={styles.agendaFooter}>
              <span className={styles.agendaKey}><span style={{background: 'var(--accent)'}} /> GitHub / Microsoft</span>
              <span className={styles.agendaKey}><span style={{background: 'var(--purple)'}} /> Joint</span>
              <span className={styles.agendaKey}><span style={{background: 'var(--green)'}} /> Customer-led</span>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <div className={styles.ctaText}>Speakers announced 1 week prior to session</div>
            <div className={styles.ctaMeta}>Biweekly • 1 hour sessions</div>
          </div>

        </div>

      </div>

      <FloatingLogo />
      <BottomBar text="Sustainable AI Adoption Series" />
    </Slide>
  )
}
