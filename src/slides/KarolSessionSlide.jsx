import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './KarolSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoKarol from './deck-project-ghcp-runbook-copy-2/data/speakers/Karol.png'

export default function KarolSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.karolSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="karol.title">Beyond Token Counting: Measuring Value in AI-Assisted Development</Editable>

            <Editable as="p" id="karol.description" className={styles.description}>
              Tokens are the new unit of engineering spend, but spend alone tells you nothing. This session reframes token usage as an investment question: what is the return, and how do you measure it? Together we&rsquo;ll discover an approach that ties consumption to developer outcomes such as cycle time, rework, quality, and time-to-merge, and we&rsquo;ll show how to separate genuine productivity gains from noise. Along the way we&rsquo;ll cover where optimization actually pays off, when more tokens are the right call, and how to report results to leadership in terms they&rsquo;ll act on. You&rsquo;ll leave with an idea of how to evaluate whether your AI-assisted development is paying for itself at scale.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>Developer Productivity</span>
                <span className={styles.skillBadge}>FinOps</span>
                <span className={styles.skillBadge}>Engineering Metrics</span>
              </div>
            </div>

            <div className={styles.prerequisites}>
              <span className={styles.prerequisitesLabel}>Pre-requisites</span>
              <div className={styles.badges}>
                <span className={styles.prereqBadge}>GitHub Copilot</span>
                <span className={styles.prereqBadge}>GitHub Copilot CLI</span>
                <span className={styles.prereqBadge}>GitHub Copilot App</span>
              </div>
            </div>
          </div>

          <div className={styles.speakerCard}>
            <div className={styles.speakerHeader}>
              <img src={photoKarol} alt="Karol Muciek" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <div className={styles.speakerName}>Karol Muciek</div>
                <Editable as="div" id="karol.speakerRole" className={styles.speakerRole}>Sr. Software Solution Engineer @ Microsoft</Editable>
              </div>
            </div>
            <p className={styles.speakerBio}>
              <Editable as="span" id="karol.speakerBio">Karol advises enterprise customers on the agentic software development lifecycle and how to implement it inside their organizations, from 50-person engineering teams to enterprises with 10,000+ developers. A long-time FinOps enthusiast, he now applies the same cost-and-value discipline to a newer frontier: understanding what companies actually get back from their investment in coding agents.</Editable>
            </p>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
