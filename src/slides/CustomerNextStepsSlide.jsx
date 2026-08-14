import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './CustomerNextStepsSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'

const steps = [
  'Commit to the Adoption Series',
  'Nominate owner and start planning',
  'Confirm audience and cadence via our self-service portal',
  'Kick off the series',
]

export default function CustomerNextStepsSlide({ index }) {
  return (
    <Slide index={index} className={styles.nextSteps}>
      <div className="accent-bar" />
      {/* Decorative orbs */}
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <h2 className={styles.title}>What we&rsquo;re asking you to decide</h2>
          <p className={styles.subtitle}>Decision &amp; Next Steps</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardGlow} />
          <ul className={styles.stepList}>
            {steps.map((step, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <div className={styles.divider} />
          <p className={styles.timeline}>
            <strong>Timeline:</strong> Mid-September &ndash; end of 2026
          </p>
          <p className={styles.tagline}>
            Together, we turn GitHub AI into daily engineering practice — and scale it sustainably.
          </p>
        </div>
      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
