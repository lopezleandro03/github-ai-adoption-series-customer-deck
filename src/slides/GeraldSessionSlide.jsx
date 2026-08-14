import React from 'react'
import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './GeraldSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoGerald from './deck-project-ghcp-runbook-copy-2/data/speakers/Gerald.png'

export default function GeraldSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.geraldSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <h2>From One Agent to a Fleet: How We use GitHub Copilot App to Ship .NET</h2>
            
            <p className={styles.description}>
              The .NET MAUI repo has over 4K open issues, until recently 700+ open PRs, but now we merged over 200 pull requests last month alone. That is not a demo project. On our team, Copilot goes well beyond code completion. We use it to triage issues, investigate CI failures, validate fixes, and review pull requests. Copilot agents have authored and merged over 30 PRs in our repo themselves. In this session I will show you how, starting with real scenarios from our repository using Copilot CLI: finding why a CI build broke, writing tests that actually catch regressions, and where it gets things wrong.
            </p>

            <p className={styles.description}>
              Then we will zoom out and demo PolyPilot, an open source tool we built with .NET MAUI to orchestrate dozens of agents in parallel across our codebase, including the guardrails we put in place before anything hits main. It runs on desktop and mobile, so yes, you can manage your agent fleet from the beach. Bitterballen in one hand, phone in the other. You will leave with patterns you can apply to your own repos next week.
            </p>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show & Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>GitHub Copilot App</span>
                <span className={styles.skillBadge}>Fleet Management</span>
                <span className={styles.skillBadge}>Agent Orchestration</span>
                <span className={styles.skillBadge}>GitHub Copilot CLI</span>
                <span className={styles.skillBadge}>Applied AI</span>
                <span className={styles.skillBadge}>GitHub Copilot</span>
              </div>
            </div>

            <div className={styles.prerequisites}>
              <span className={styles.prerequisitesLabel}>Pre-requisites</span>
              <div className={styles.badges}>
                <span className={styles.prereqBadge}>GitHub Copilot App</span>
                <span className={styles.prereqBadge}>GitHub Copilot CLI</span>
              </div>
            </div>
          </div>

          <div className={styles.speakerCard}>
            <div className={styles.speakerHeader}>
              <img src={photoGerald} alt="Gerald Versluis" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <div className={styles.speakerName}>Gerald Versluis</div>
                <div className={styles.speakerRole}>Senior Software Engineer @ Microsoft</div>
              </div>
            </div>
            <p className={styles.speakerBio}>
              Gerald Versluis is a Software Engineer on the .NET team at Microsoft where he writes code for .NET MAUI. At least, he used to. These days he spends more time orchestrating a fleet of Copilot agents than opening his IDE, and shares everything he learns along the way with customers and the community.
            </p>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
