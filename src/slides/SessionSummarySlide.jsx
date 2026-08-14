import React from 'react'
import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './SessionSummarySlide.module.css'
import FloatingLogo from './FloatingLogo.jsx'
import photoAli from './deck-project-ghcp-runbook-copy-2/data/speakers/Ali.png'
import photoKarol from './deck-project-ghcp-runbook-copy-2/data/speakers/Karol.png'
import photoAnton from './deck-project-ghcp-runbook-copy-2/data/speakers/Anton.png'
import photoGerald from './deck-project-ghcp-runbook-copy-2/data/speakers/Gerald.png'
import photoCarlos from './deck-project-ghcp-runbook-copy-2/data/speakers/Carlos.png'
import photoPascal from './deck-project-ghcp-runbook-copy-2/data/speakers/Pascal.png'
import photoEmile from './deck-project-ghcp-runbook-copy-2/data/speakers/Emile.png'
import photoJoran from './deck-project-ghcp-runbook-copy-2/data/speakers/Joran.png'

const sessions = [
  { id: 'ali', name: 'Ali Soliman', role: 'Tech Lead @ Applied AI @ Microsoft', topic: 'Supercharge Your Development Workflow with Agent Skills', photo: photoAli },
  { id: 'karol', name: 'Karol Muciek', role: 'Sr. Software Solution Engineer @ Microsoft', topic: 'Beyond Token Counting: Measuring Value in AI-Assisted Development', photo: photoKarol },
  { id: 'anton', name: 'Anton Sizikov', role: 'Sr. Software Solution Engineer @ Microsoft', topic: 'Token Optimization', photo: photoAnton },
  { id: 'gerald', name: 'Gerald Versluis', role: 'Senior Software Engineer @ Microsoft', topic: 'From One Agent to a Fleet: How We use GitHub Copilot App to Ship .NET', photo: photoGerald },
  { id: 'carlos', name: 'Carlos Sardo', role: 'Principal Software Engineer @ Microsoft', topic: 'Squad — AI Agent Teams for Any Project', photo: photoCarlos },
  { id: 'pascal', name: 'Pascal van der Heiden', role: 'Sr Solution Engineer @ Microsoft', topic: 'Building Enterprise ready solutions quickly with GitHub Copilot and Spec-Driven Development methodology', photo: photoPascal },
  { id: 'emile', name: 'Emile Verbunt', role: 'Solutions Engineer @ GitHub', topic: 'Agentic Workflows', photo: photoEmile },
  { id: 'joran', name: 'Joran Bergfeld', role: 'Solutions Engineer @ GitHub', topic: 'Power of Cloud & SRE Agents', photo: photoJoran },
  { id: 'cli', name: 'Speaker to be announced', role: 'Placeholder session · speaker being confirmed', topic: 'GitHub Copilot CLI Foundations — From First Prompt to Power User', placeholder: true },
  { id: 'universe', name: 'Speaker to be announced', role: 'Placeholder session · speaker being confirmed', topic: 'GitHub Universe 2026 Recap — What Shipped, and What to Adopt First', placeholder: true },
  { id: 'openweight', name: 'Speaker to be announced', role: 'Placeholder session · speaker being confirmed', topic: 'Open-Weight Models & Model Choice — Picking the Right Brain for the Job', placeholder: true },
  { id: 'security', name: 'Speaker to be announced', role: 'Placeholder session · speaker being confirmed', topic: 'GitHub AI for Security — Getting the Most out of Agentic AppSec', placeholder: true },
]

export default function SessionSummarySlide({ index, project }) {
  return (
    <Slide index={index} className={styles.sessionSummarySlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>

        <Editable as="h2" id="summary.title" className={styles.title}>Session Line-up &amp; Speakers</Editable>
        <Editable as="p" id="summary.subtitle" className={styles.subtitle}>Every session at a glance — biweekly, hands-on, with GitHub and Microsoft engineers.</Editable>

        <EditableList
          id="summary.sessions"
          items={sessions}
          keyOf={(s) => s.id}
          className={styles.grid}
          itemClassName={styles.card}
        >
          {(s) => (
            <article className={s.placeholder ? `${styles.cardInner} ${styles.placeholder}` : styles.cardInner}>
              <div className={styles.speakerHeader}>
                {s.placeholder ? (
                  <div className={styles.placeholderAvatar}>✨</div>
                ) : (
                  <img src={s.photo} alt={s.name} className={styles.photo} />
                )}
                <div className={styles.speakerInfo}>
                  <Editable as="div" id={`summary.sessions.${s.id}.name`} className={styles.name}>{s.name}</Editable>
                  <Editable as="div" id={`summary.sessions.${s.id}.role`} className={styles.role}>{s.role}</Editable>
                </div>
              </div>
              <Editable as="div" id={`summary.sessions.${s.id}.topic`} className={styles.topic}>{s.topic}</Editable>
            </article>
          )}
        </EditableList>

      </div>

      <FloatingLogo />
      <BottomBar />
    </Slide>
  )
}
