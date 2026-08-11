import React from 'react'
import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './PascalSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoPascal from './deck-project-ghcp-runbook-copy-2/data/speakers/Pascal.png'

export default function PascalSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.pascalSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <h2>Building Enterprise ready solutions quickly with GitHub Copilot and Spec-Driven Development methodology</h2>
            
            <p className={styles.description}>
              Most modernization projects start the same way — a vague spec, a mountain of legacy code, and a deadline that was yesterday. What if your spec itself could drive the entire development workflow, with an agentic dev team that understands your architecture, your patterns, and your constraints?
            </p>

            <p className={styles.description}>
              In this session I will show you how Spec-Driven Development (SDD) combined with GitHub Copilot custom agents, skills, prompts, and MCP servers creates a repeatable, intelligent development template, embedding corporate Platform Engineering practices. Whether you are modernizing a 2.8 million line legacy codebase or spinning up a green-field microservice, the approach is the same: write the spec, let the agents build.
            </p>

            <p className={styles.description}>
              I will walk through real-world scenarios — from brown-field app modernization on Azure to green-field API development — showing how custom agents collaborate like a dev team: one writes the spec, another scaffolds the code, another reviews, and another validates against the original requirements. You will see how MCP servers ground agents in your organization's standards and how custom skills keep your patterns consistent across repos.
            </p>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show & Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>Custom Agents & Skills</span>
                <span className={styles.skillBadge}>Spec-Driven Development</span>
                <span className={styles.skillBadge}>MCP Server Integration</span>
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
              <img src={photoPascal} alt="Pascal van der Heiden" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <div className={styles.speakerName}>Pascal van der Heiden</div>
                <div className={styles.speakerRole}>Sr Solution Engineer @ Microsoft</div>
              </div>
            </div>
            <p className={styles.speakerBio}>
              Pascal van der Heiden is a Senior Solution Engineer at Microsoft with over 20 years of cloud architecture and development experience. He leads innovation and app modernization engagements for strategic accounts, guiding teams through legacy-to-cloud transformations with Azure and GitHub Copilot. Board member of the Microsoft Integration User Group and a passionate community speaker, Pascal lives by "seeing is believing" — if he can't demo it, he won't present it. When he's not orchestrating agentic dev teams, you'll find him playing chess, watching soccer, tinkering with retro computers, or tending to his chickens.
            </p>
          </div>
        </div>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
