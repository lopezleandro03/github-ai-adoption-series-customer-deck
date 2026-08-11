import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './CustomerGoalsSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'

const goals = [
  {
    title: 'Build the Skill of the Future',
    description: 'Develop Agentic Engineering capabilities and maximize the value you get from GitHub',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    accent: 'accent',
  },
  {
    title: 'Scale Sustainably',
    description: 'Build token optimization and consumption awareness into everyday practice — maximize value per token as agent usage grows',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" />
      </svg>
    ),
    accent: 'purple',
  },
  {
    title: 'Build an internal GitHub AI community',
    description: 'Increase momentum, reuse, and peer learning and help build your internal GitHub AI community',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    accent: 'green',
  },
]

export default function CustomerGoalsSlide({ index }) {
  return (
    <Slide index={index} className={styles.goals}>
      <div className="accent-bar" />
      {/* Decorative orbs */}
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Three clear goals</h2>
          <p className={styles.subtitle}>Program Intent (Why this series exists)</p>
        </div>

        <div className={styles.cards}>
          {goals.map((g, i) => (
            <div key={i} className={`${styles.card} ${styles[`card${g.accent.charAt(0).toUpperCase() + g.accent.slice(1)}`]}`}>
              <div className={styles.cardGlow} />
              <div className={`${styles.cardIcon} ${styles[`icon${g.accent.charAt(0).toUpperCase() + g.accent.slice(1)}`]}`}>
                {g.icon}
              </div>
              <h3 className={styles.cardTitle}>{g.title}</h3>
              <p className={styles.cardDesc}>{g.description}</p>
            </div>
          ))}
        </div>
      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
