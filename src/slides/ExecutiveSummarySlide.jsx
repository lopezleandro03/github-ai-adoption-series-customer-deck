import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ExecutiveSummarySlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Platform Shift',
    desc: 'AI is redefining how software is built. Organizations that move now will compound their advantage — those that wait will fall behind.',
    accent: 'accent',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Agentic Engineering Skills',
    desc: 'Build the muscle, hands-on. Move your entire engineering workforce into agentic development through expert-led, demo-first enablement.',
    accent: 'purple',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
    title: 'Cost-Aware Agent Management',
    desc: 'Practical techniques to optimize token use — right model for the task, tight context and prompts, and reusable patterns — so engineers scale AI intensively while spend stays predictable and ROI stays clear.',
    accent: 'green',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Build Your AI Community',
    desc: 'Grow an internal community of AI champions who share practices, mentor peers, and create a self-sustaining capability that scales beyond any single program.',
    accent: 'pink',
  },
]

export default function ExecutiveSummarySlide({ index }) {
  return (
    <Slide index={index} className={styles.execSummary}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Executive Summary</h2>
          <p className={styles.sectionSubtitle}>The <span>GitHub AI Adoption Series</span> at a glance</p>
          <p className={styles.subtitle}>
            A structured program to drive <strong>sustainable AI adoption</strong> across your engineering
            organization — building the agentic skills to move faster and the consumption awareness to scale
            them predictably, delivered by GitHub &amp; Microsoft engineers.
          </p>
        </div>

        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <div key={i} className={`${styles.pillar} ${styles[`pillar${p.accent.charAt(0).toUpperCase() + p.accent.slice(1)}`]}`}>
              <div className={styles.pillarGlow} />
              <div className={`${styles.pillarIcon} ${styles[`icon${p.accent.charAt(0).toUpperCase() + p.accent.slice(1)}`]}`}>
                {p.icon}
              </div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <span className={styles.ctaIcon}>→</span>
          <span>6 sessions · bi-weekly · demo-first · led by GitHub &amp; Microsoft engineers · 200+ attendees per session</span>
        </div>
      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
