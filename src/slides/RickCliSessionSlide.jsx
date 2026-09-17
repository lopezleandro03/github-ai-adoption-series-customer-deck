import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './RickCliSessionSlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoRick from './deck-project-ghcp-runbook-copy-2/data/speakers/Rick.png'

export default function RickCliSessionSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.rickCliSessionSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <div className={styles.content}>
          <div className={styles.main}>
            <Editable as="h2" id="rickcli.title">Copilot CLI Fundamentals</Editable>

            <Editable as="p" id="rickcli.description1" className={styles.description}>
              Several sessions in this series assume you are comfortable in the GitHub Copilot CLI. This is the session that gets you there &mdash; and then keeps going well past the basics.
            </Editable>

            <Editable as="p" id="rickcli.description2" className={styles.description}>
              We start from a clean machine: install and sign in, what the CLI can see and change, how to run it safely against a real repository, and the approval model that keeps it from doing something you did not ask for. Then we move into the way experienced users actually work: driving multi-step tasks from the terminal, keeping the agent grounded with the right context instead of the most context, custom instructions and prompt files that encode your team&rsquo;s conventions, MCP servers to give the agent access to your own systems, and delegating longer work so you are not babysitting a prompt.
            </Editable>

            <Editable as="p" id="rickcli.description3" className={styles.description}>
              We close with our latest developments and the tips and tricks that make the biggest difference in practice &mdash; the flags and settings worth knowing, the failure patterns worth recognising early, and how the CLI fits alongside the IDE and the coding agent rather than competing with them.
            </Editable>

            <Editable as="p" id="rickcli.description4" className={styles.description}>
              You will leave able to run the CLI confidently on your own codebase, and with a set of habits that make every other agentic session in this series land better.
            </Editable>

            <div className={styles.keySkills}>
              <span className={styles.keySkillsLabel}>Agentic Skills to Show &amp; Tell</span>
              <div className={styles.badges}>
                <span className={styles.skillBadge}>Copilot CLI</span>
                <span className={styles.skillBadge}>MCP &amp; Custom Tooling</span>
                <span className={styles.skillBadge}>Tips &amp; Tricks</span>
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
              <img src={photoRick} alt="Rick van den Bosch" className={styles.speakerPhoto} />
              <div className={styles.speakerInfo}>
                <Editable as="div" id="rickcli.speaker.name" className={styles.speakerName}>Rick van den Bosch</Editable>
                <Editable as="div" id="rickcli.speaker.role" className={styles.speakerRole}>Senior Cloud Solution Architect @ Microsoft</Editable>
              </div>
            </div>
            <Editable as="p" id="rickcli.speaker.bio" className={styles.speakerBio}>
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
