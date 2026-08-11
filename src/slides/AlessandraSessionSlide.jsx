import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AlessandraSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoAlessandra from './deck-project-ghcp-runbook-copy-2/data/speakers/Alessandra.png'
import photoRick from './deck-project-ghcp-runbook-copy-2/data/speakers/Rick.png'

export default function AlessandraSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.alessandraSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="alessandra.title">GitHub Copilot CLI & GitHub Copilot App</Editable>

            <Editable as="p" className={styles.description} id="alessandra.description1">
              Discover the latest innovations in GitHub Copilot with a deep dive into GitHub Copilot CLI and the newly released GitHub Copilot App. Since reaching General Availability, GitHub Copilot CLI has evolved into a powerful agentic development environment, enabling developers to plan, build, test, review, and collaborate with AI directly from the terminal while staying seamlessly connected to their GitHub workflow.
            </Editable>

            <Editable as="p" className={styles.description} id="alessandra.description2">
              We'll also explore the new GitHub Copilot App, a native desktop experience for orchestrating agentic workflows, managing AI-powered coding tasks, and collaborating with multiple agents across your projects. Join us to see the latest capabilities in action and learn how these innovations are reshaping modern software development.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show & Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>GitHub Copilot CLI</span>
                <span className={styles.skillBadge}>GitHub Copilot App</span>
              </div>
            </div>

            <div className={styles.prerequisites}>
              <span className={styles.prerequisitesLabel}>Pre-requisites</span>
              <div className={styles.badges}>
                <span className={styles.prereqBadge}>GitHub Copilot</span>
                <span className={styles.prereqBadge}>Install GitHub Copilot CLI & App to follow along</span>
              </div>
            </div>
          </div>

          <div className={styles.speakers}>
            <div className={styles.speakerCard}>
              <div className={styles.speakerHeader}>
                <img src={photoAlessandra} alt="Alessandra Vicini" className={styles.speakerPhoto} />
                <div className={styles.speakerInfo}>
                  <Editable as="div" className={styles.speakerName} id="alessandra.speaker.name">Alessandra Vicini</Editable>
                  <Editable as="div" className={styles.speakerRole} id="alessandra.speaker.role">Solution Engineer @ GitHub</Editable>
                </div>
              </div>
              <Editable as="p" className={styles.speakerBio} id="alessandra.speaker.bio">
                Solution Engineer with a deep passion for building products and solving complex technical challenges. At GitHub, I empower organizations to harness the full potential of technology by fostering collaboration and translating technical insights into strategic impact.
              </Editable>
            </div>

            <div className={styles.speakerCard}>
              <div className={styles.speakerHeader}>
                <img src={photoRick} alt="Rick Smit" className={styles.speakerPhoto} />
                <div className={styles.speakerInfo}>
                  <Editable as="div" className={styles.speakerName} id="rick.speaker.name">Rick Smit</Editable>
                  <Editable as="div" className={styles.speakerRole} id="rick.speaker.role">Solution Engineer @ GitHub</Editable>
                </div>
              </div>
              <Editable as="p" className={styles.speakerBio} id="rick.speaker.bio">
                Solution Engineer at GitHub, passionate about helping organizations unlock the full potential of AI-powered development and modern engineering practices.
              </Editable>
            </div>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
