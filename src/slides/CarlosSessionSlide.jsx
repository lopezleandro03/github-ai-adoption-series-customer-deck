import React from 'react'
import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './CarlosSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoCarlos from './deck-project-ghcp-runbook-copy-2/data/speakers/Carlos.png'

export default function CarlosSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.carlosSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <h2>Squad — AI Agent Teams for Any Project</h2>
            
            <p className={styles.description}>
              Squad gives you an AI development team through GitHub Copilot. Describe what you're building. Get a team of specialists — frontend, backend, tester, lead — that live in your repo as files. They persist across sessions, learn your codebase, share decisions, and get better the more you use them.
            </p>

            <p className={styles.description}>
              It's not a chatbot wearing hats. Each team member runs in its own context, reads only its own knowledge, and writes back what it learned. In this session, we'll explore how Squad transforms the way teams build software by providing persistent, specialized AI agents that evolve with your project.
            </p>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show & Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>Multi-Agent Teams</span>
                <span className={styles.skillBadge}>Persistent Agents</span>
                <span className={styles.skillBadge}>Knowledge Sharing</span>
              </div>
            </div>

            <div className={styles.prerequisites}>
              <span className={styles.prerequisitesLabel}>Pre-requisites</span>
              <div className={styles.badges}>
                <span className={styles.prereqBadge}>GitHub Copilot</span>
                <span className={styles.prereqBadge}>npm install -g @bradygaster/squad-cli</span>
              </div>
            </div>
          </div>

          <div className={styles.speakerCard}>
            <div className={styles.speakerHeader}>
              <img src={photoCarlos} alt="Carlos" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <div className={styles.speakerName}>Carlos Sardo</div>
                <div className={styles.speakerRole}>Principal Software Engineer @ Microsoft</div>
              </div>
            </div>
            <p className={styles.speakerBio}>
              Carlos is a Principal Software Engineer at Microsoft with a passion for driving innovation and delivering exceptional software solutions for customers. With a strong focus on Azure and AI, he thrives on leveraging cutting-edge technologies to help organizations unlock their full potential in the cloud. Currently exploring Squad — AI agent teams for any project.
            </p>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
