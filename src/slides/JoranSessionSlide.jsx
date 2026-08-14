import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './JoranSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoJoran from './deck-project-ghcp-runbook-copy-2/data/speakers/Joran.png'

export default function JoranSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.joranSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="joran.title">Power of Cloud &amp; SRE Agents</Editable>

            <Editable as="p" id="joran.description1" className={styles.description}>
              Closing the SDLC loop. Software velocity is increasing more than ever now that we can use AI to code quicker &mdash; and that drives a lot more change in production, which we need to control. Ironically, solving the challenge introduced by AI with AI is the narrative of this session.
            </Editable>

            <Editable as="p" id="joran.description2" className={styles.description}>
              We look at how to introduce agents at the tail end of the Software Delivery Lifecycle to close the loop when bugs and issues appear. To close it, we explore how to identify issues, diagnose them, and even automatically remediate them with a fix-forward delegated to the GitHub platform.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>SRE Agents</span>
                <span className={styles.skillBadge}>Auto-Remediation</span>
              </div>
            </div>

            <div className={styles.prerequisites}>
              <span className={styles.prerequisitesLabel}>Pre-requisites</span>
              <div className={styles.badges}>
                <span className={styles.prereqBadge}>GitHub Copilot</span>
                <span className={styles.prereqBadge}>GitHub Actions</span>
              </div>
            </div>
          </div>

          <div className={styles.speakerCard}>
            <div className={styles.speakerHeader}>
              <img src={photoJoran} alt="Joran Bergfeld" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <Editable as="div" id="joran.speaker.name" className={styles.speakerName}>Joran Bergfeld</Editable>
                <Editable as="div" id="joran.speaker.role" className={styles.speakerRole}>Solutions Engineer @ GitHub</Editable>
              </div>
            </div>
            <Editable as="p" id="joran.speaker.bio" className={styles.speakerBio}>
              Closing the SDLC loop with cloud &amp; SRE agents that detect, diagnose, and auto-remediate production issues.
            </Editable>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
