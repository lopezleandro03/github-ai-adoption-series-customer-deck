import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './TyroneSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoTyrone from './deck-project-ghcp-runbook-copy-2/data/speakers/Tyrone.jpg'

export default function TyroneSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.tyroneSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="tyrone.title">From UX to Code: Building with Figma &amp; GitHub Copilot</Editable>

            <Editable as="p" id="tyrone.description1" className={styles.description}>
              Discover how modern AI tools can dramatically accelerate the journey from idea to implementation. Learn how to turn a concept into UX designs, generate a product backlog, and build a working application using tools such as Figma and GitHub Copilot. See the complete end-to-end workflow that is reshaping product development and AI-driven engineering.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>MCP tools</span>
                <span className={styles.skillBadge}>AI UX design</span>
                <span className={styles.skillBadge}>GitHub Copilot</span>
                <span className={styles.skillBadge}>Business analysis</span>
              </div>
            </div>

            <div className={styles.prerequisites}>
              <span className={styles.prerequisitesLabel}>Pre-requisites</span>
              <div className={styles.badges}>
                <span className={styles.prereqBadge}>GitHub Copilot</span>
                <span className={styles.prereqBadge}>Figma or any other UX design tool</span>
              </div>
            </div>
          </div>

          <div className={styles.speakerCard}>
            <div className={styles.speakerHeader}>
              <img src={photoTyrone} alt="Tyrone Vriesde" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <Editable as="div" id="tyrone.speaker.name" className={styles.speakerName}>Tyrone Vriesde</Editable>
                <Editable as="div" id="tyrone.speaker.role" className={styles.speakerRole}>Enterprise Cloud Solution Architect</Editable>
              </div>
            </div>
            <Editable as="p" id="tyrone.speaker.bio" className={styles.speakerBio}>
              From building large-scale consumer applications used by millions to helping enterprises adopt AI-powered engineering, Tyrone combines real-world product experience with deep expertise in GitHub Copilot, developer productivity and Azure cloud. At Microsoft, he works with customers to transform the way software is designed, built, and delivered.
            </Editable>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
