import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './KarolSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoKarol from './deck-project-ghcp-runbook-copy-2/data/speakers/Karol.png'
import photoLili from './deck-project-ghcp-runbook-copy-2/data/speakers/Lili.png'

export default function KarolSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.karolSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="slide.title">Token Optimization</Editable>

            <Editable as="p" id="slide.description" className={styles.description}>
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
              <img src={photoKarol} alt="Karol Muciek" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <div className={styles.speakerName}>Karol Muciek</div>
                <Editable as="div" id="slide.speakerRole" className={styles.speakerRole}>Sr. Software Solution Engineer</Editable>
              </div>
            </div>
            <div className={styles.supportedBy}>
              <span className={styles.supportedByLabel}>Supported by</span>
              <img src={photoLili} alt="Lili Nazer" className={styles.supportPhoto} />
              <Editable as="span" id="slide.supportedBy" className={styles.supportedByName}>Lili Nazer</Editable>
              <Editable as="span" id="slide.supportedByRole" className={styles.speakerRole}>Solution Engineer</Editable>
            </div>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
