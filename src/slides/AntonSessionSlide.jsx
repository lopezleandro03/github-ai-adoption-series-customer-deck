import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AntonSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoAnton from './deck-project-ghcp-runbook-copy-2/data/speakers/Anton.png'

export default function AntonSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.antonSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="anton.title">Token Optimization</Editable>

            <Editable as="p" id="anton.description" className={styles.description}>
              Deep dive into token optimization and context engineering to improve latency, cost, and output quality. As AI-powered development scales across teams, understanding how to structure prompts, manage context windows, and minimize unnecessary token usage becomes critical. This session covers proven techniques for designing efficient, high-performing AI interactions — from crafting precise system instructions and leveraging few-shot patterns, to pruning context for faster responses and better reasoning. Walk away with practical strategies you can apply immediately to reduce costs and get more reliable outputs from GitHub Copilot at scale.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>Token Optimization</span>
                <span className={styles.skillBadge}>Context Engineering</span>
              </div>
            </div>

            <div className={styles.prerequisites}>
              <span className={styles.prerequisitesLabel}>Pre-requisites</span>
              <div className={styles.badges}>
                <span className={styles.prereqBadge}>GitHub Copilot</span>
                <span className={styles.prereqBadge}>GitHub Copilot CLI</span>
              </div>
            </div>
          </div>

          <div className={styles.speakerCard}>
            <div className={styles.speakerHeader}>
              <img src={photoAnton} alt="Anton Sizikov" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <div className={styles.speakerName}>Anton Sizikov</div>
                <Editable as="div" id="anton.speakerRole" className={styles.speakerRole}>Sr. Software Solution Engineer @ Microsoft</Editable>
              </div>
            </div>
            <p className={styles.speakerBio}>
              <Editable as="span" id="anton.speakerBio">Diving deep into token optimization and context engineering to cut cost and latency at scale.</Editable>
            </p>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
