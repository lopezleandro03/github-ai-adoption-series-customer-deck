import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AliSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoAli from './deck-project-ghcp-runbook-copy-2/data/speakers/Ali.png'

export default function AliSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.aliSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="ali.title">Supercharge Your Development Workflow with Agent Skills</Editable>

            <Editable as="p" id="ali.description1" className={styles.description}>
              Developer tools have moved past single prompts and code completion. Agent skills let you package repeatable expertise as instructions, scripts, and resources that an agent picks up when the task calls for it. Write the skill once and everyone on the team gets the same steps for a code review, a release checklist, or onboarding a new service.
            </Editable>

            <Editable as="p" id="ali.description2" className={styles.description}>
              This session covers what goes inside a skill, how the agent decides to load one, and how to turn a workflow you already do by hand into something reusable. We&rsquo;ll build skills live in GitHub Copilot CLI, and I&rsquo;ll be honest about where they help and where they just add overhead.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>Agent Skills</span>
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
              <img src={photoAli} alt="Ali Soliman" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <Editable as="div" id="ali.speaker.name" className={styles.speakerName}>Ali Soliman</Editable>
                <Editable as="div" id="ali.speaker.role" className={styles.speakerRole}>Tech Lead @ Applied AI @ Microsoft</Editable>
              </div>
            </div>
            <Editable as="p" id="ali.speaker.bio" className={styles.speakerBio}>
              Ali Soliman is an Applied AI Tech Lead at Microsoft &mdash; engineer by heart, working with customers day in and day out to co-build and co-engineer on the latest technologies. He also contributes to Microsoft Foundry as part of the core engineering group.
            </Editable>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
