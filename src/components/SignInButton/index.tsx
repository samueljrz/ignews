import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = false
  
  return (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color={ isUserLoggedIn ? "#04d361" : "#eba417" } />
      { isUserLoggedIn ? "Samuel Junior" : "Sign in with Github" }
      { isUserLoggedIn && <FiX color="#737380" className={styles.closeIcon} /> } 
    </button>
  )
}