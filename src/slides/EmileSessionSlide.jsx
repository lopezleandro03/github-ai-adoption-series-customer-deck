import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './EmileSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoEmile from './deck-project-ghcp-runbook-copy-2/data/speakers/Emile.png'

export default function EmileSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.emileSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="emile.title">Agentic Workflows</Editable>

            <Editable as="p" id="emile.description1" className={styles.description}>
              Agentic Workflows combine AI coding agents with GitHub Actions to automate complex development tasks through natural language instructions. Unlike rule-based automation, they understand repository context, reason about situations, and adapt their behavior accordingly.
            </Editable>

            <Editable as="p" id="emile.description2" className={styles.description}>
              Common use cases include automated code-quality monitoring, security vulnerability audits, documentation updates, test analysis, and code deduplication &mdash; all running autonomously on every code change, without manual scripting for each scenario. In this session we dive into creating workflows that optimize your CI/CD pipelines with agentic capabilities.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>Agentic Workflows</span>
                <span className={styles.skillBadge}>GitHub Actions</span>
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
              <img src={photoEmile} alt="Emile Verbunt" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <Editable as="div" id="emile.speaker.name" className={styles.speakerName}>Emile Verbunt</Editable>
                <Editable as="div" id="emile.speaker.role" className={styles.speakerRole}>Solutions Engineer @ GitHub</Editable>
              </div>
            </div>
            <Editable as="p" id="emile.speaker.bio" className={styles.speakerBio}>
              Automating CI/CD with agentic workflows that reason about your repo and adapt on every change.
            </Editable>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
