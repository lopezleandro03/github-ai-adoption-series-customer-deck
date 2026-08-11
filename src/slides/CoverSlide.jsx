/**
 * SAMPLE CONTENT ONLY
 * This slide contains scaffolded placeholder copy.
 * Agents must not use it as factual project context until the user replaces it.
 */
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'
import githubMark from '../data/logos/github-mark.svg'
import microsoftMark from '../data/logos/microsoft-mark.svg'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="cover.eyebrow" className={styles.eyebrow}>github-ai-adoption-series-customer-deck</Editable>
          <h1>
            <Editable as="span" id="cover.titleBefore">GitHub AI Adoption</Editable> <Editable as="span" id="cover.titleHighlight" className={styles.highlight}>Series</Editable>
          </h1>
          <Editable as="p" id="cover.subtitle" multiline className={styles.subtitle}>
            Driving sustainable GitHub Copilot AI adoption across engineering teams
          </Editable>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Project</span>
              <span className={styles.metaValue}>GitHub AI Adoption Series - Customer Deck</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.logosWrap}>
        <div className={styles.logos}>
          <img src={microsoftMark} alt="Microsoft" className={`${styles.logo} ${styles.logoMicrosoft}`} />
          <span className={styles.logoDivider} />
          <img src={githubMark} alt="GitHub" className={`${styles.logo} ${styles.logoGitHub}`} />
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="cover.footer">github-ai-adoption-series-customer-deck</Editable>} />
    </Slide>
  )
}
