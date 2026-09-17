import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './RickAgenticWorkflowsSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoRick from './deck-project-ghcp-runbook-copy-2/data/speakers/Rick.png'

export default function RickAgenticWorkflowsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.rickAgenticWorkflowsSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="rickaw.title">Agentic Workflows</Editable>

            <Editable as="p" id="rickaw.description1" className={styles.description}>
              Agentic Workflows combine AI coding agents with GitHub Actions to automate complex development tasks through natural language instructions. Unlike rule-based automation, they understand repository context, reason about situations, and adapt their behavior accordingly.
            </Editable>

            <Editable as="p" id="rickaw.description2" className={styles.description}>
              Common use cases include automated code-quality monitoring, security vulnerability audits, documentation updates, test analysis, and code deduplication; all running autonomously on every code change, without manual scripting for each scenario.
            </Editable>

            <Editable as="p" id="rickaw.description3" className={styles.description}>
              In this session we dive into creating workflows that optimize your CI/CD pipelines with agentic capabilities.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>GitHub Copilot</span>
                <span className={styles.skillBadge}>Agentic Workflows</span>
                <span className={styles.skillBadge}>GitHub Actions</span>
                <span className={styles.skillBadge}>CI/CD</span>
                <span className={styles.skillBadge}>DevOps Automation</span>
                <span className={styles.skillBadge}>AI-Assisted Development</span>
              </div>
            </div>
          </div>

          <div className={styles.speakerCard}>
            <div className={styles.speakerHeader}>
              <img src={photoRick} alt="Rick van den Bosch" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <Editable as="div" id="rickaw.speaker.name" className={styles.speakerName}>Rick van den Bosch</Editable>
                <Editable as="div" id="rickaw.speaker.role" className={styles.speakerRole}>Senior Cloud Solution Architect @ Microsoft</Editable>
              </div>
            </div>
            <Editable as="p" id="rickaw.speaker.bio" className={styles.speakerBio}>
              Cloud Solution Architect with more than 25 years of software development experience and an early Azure adopter. Passionate about .NET, Azure, cloud architecture, and AI-assisted development, with a focus on practical guidance, real-world lessons, and building software that delivers business value.
            </Editable>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
