import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ThankYouSlide.module.css'
import mascotDuck from '../data/mascots/mascot-duck.png'
import copilotMascot from '../data/mascots/copilot-mascot.png'

export default function ThankYouSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <span className={styles.accentDash} />
          <Editable as="h2" id="thankYou.title" className={styles.title}>Thank You</Editable>
          <Editable as="p" id="thankYou.subtitle" multiline className={styles.subtitle}>
            Driving sustainable GitHub Copilot AI adoption across engineering teams.
          </Editable>
        </div>
      </div>

      <div className={styles.mascots}>
        <img src={mascotDuck} alt="" aria-hidden="true" className={`${styles.mascot} ${styles.m1}`} />
        <img src={copilotMascot} alt="" aria-hidden="true" className={`${styles.mascot} ${styles.m2}`} />
      </div>

      <BottomBar text={<Editable as="span" id="thankYou.footer">GitHub AI Adoption Series</Editable>} />
    </Slide>
  )
}
