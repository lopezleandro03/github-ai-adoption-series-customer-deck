import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './GabrielaSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'

export default function GabrielaSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.gabrielaSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="gabriela.title">Code Faster. Review Smarter.</Editable>

            <Editable as="p" id="gabriela.description1" className={styles.description}>
              As AI accelerates software development, teams are producing more code than ever! But code review can quickly become the next delivery bottleneck. A scalable, consistent review process is essential for maintaining quality, security, and developer velocity.
            </Editable>

            <Editable as="p" id="gabriela.description2" className={styles.description}>
              In this practical session, discover how GitHub Copilot code review can analyze pull requests, identify potential issues, suggest improvements, and apply your organization&rsquo;s coding standards through custom instructions. Learn how to combine AI-assisted reviews with automated security checks and human expertise, allowing reviewers to spend less time on routine findings and more time on architecture, business logic, and high-impact risks.
            </Editable>

            <Editable as="p" id="gabriela.description3" className={styles.description}>
              Walk away with practical approaches for building a faster, human-in-the-loop review process that scales with AI-assisted development.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>Copilot Code Review</span>
                <span className={styles.skillBadge}>Developer Productivity</span>
                <span className={styles.skillBadge}>Secure Development</span>
              </div>
            </div>

            <div className={styles.prerequisites}>
              <span className={styles.prerequisitesLabel}>Pre-requisites</span>
              <div className={styles.badges}>
                <span className={styles.prereqBadge}>GitHub Copilot</span>
              </div>
            </div>
          </div>

          <div className={styles.speakerCard}>
            <div className={styles.speakerHeader}>
              <div className={styles.speakerInitials} aria-label="Gabriela Dobrescu">GD</div>
              <div className={styles.speakerInfo}>
                <Editable as="div" id="gabriela.speaker.name" className={styles.speakerName}>Gabriela Dobrescu</Editable>
                <Editable as="div" id="gabriela.speaker.role" className={styles.speakerRole}>Sr Solutions Engineer @GitHub</Editable>
              </div>
            </div>
            <Editable as="p" id="gabriela.speaker.bio" className={styles.speakerBio}>
              Gabriela is a Senior Solutions Engineer at GitHub working with large enterprise customers across North EMEA. She helps engineering teams get the most out of the GitHub platform with a focus on GitHub Copilot, developer experience and secure software development. She is particularly interested in how AI is changing the way developers build and ship software.
            </Editable>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
