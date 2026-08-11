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
import photoAlessandra from './deck-project-ghcp-runbook-copy-2/data/speakers/Alessandra.png'
import photoEmile from './deck-project-ghcp-runbook-copy-2/data/speakers/Emile.png'
import photoJoran from './deck-project-ghcp-runbook-copy-2/data/speakers/Joran.png'

const sessions = [
  { id: 'ali', name: 'Ali Soliman', role: 'Tech Lead @ Applied AI @ Microsoft', topic: 'Skills & Subagents', photo: photoAli },
  { id: 'karol', name: 'Karol Muciek', role: 'Sr. Software Solution Engineer', topic: 'Token Optimization', photo: photoKarol },
  { id: 'anton', name: 'Anton Sizikov', role: 'Sr. Software Solution Engineer', topic: 'Context Engineering', photo: photoAnton },
  { id: 'gerald', name: 'Gerald Versluis', role: 'Senior Software Engineer @ Microsoft', topic: 'GitHub Copilot App @ .NET MAUI', photo: photoGerald },
  { id: 'carlos', name: 'Carlos Sardo', role: 'Principal Software Engineer @ Microsoft', topic: 'Squad — AI Agent Teams', photo: photoCarlos },
  { id: 'pascal', name: 'Pascal van der Heiden', role: 'Sr Solution Engineer @ Microsoft', topic: 'Spec-Driven Development', photo: photoPascal },
  { id: 'alessandra', name: 'Alessandra Vicini', role: 'Solution Engineer @ GitHub', topic: 'Copilot CLI & Copilot App', photo: photoAlessandra },
  { id: 'emile', name: 'Emile Verbunt', role: 'Sr. Solution Engineer @ Microsoft', topic: 'Agentic Workflows', photo: photoEmile },
  { id: 'joran', name: 'Joran Bergfeld', role: 'Sr. Solution Engineer @ Microsoft', topic: 'Cloud & SRE Agents', photo: photoJoran },
  { id: 'universe', name: 'To be announced', role: 'Speaker TBA', topic: 'GitHub Universe Recap', placeholder: true },
  { id: 'openweight', name: 'To be announced', role: 'Speaker TBA', topic: 'Openweight Models & Model Choice', placeholder: true },
  { id: 'security', name: 'To be announced', role: 'Speaker TBA', topic: 'AI-Powered Security with GHAS', placeholder: true },
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
