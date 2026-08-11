import styles from './FloatingLogo.module.css'
import copilotMascot from '../data/mascots/copilot-mascot.png'

export default function FloatingLogo() {
  return <img src={copilotMascot} alt="" aria-hidden="true" className={styles.floatingCopilot} />
}
