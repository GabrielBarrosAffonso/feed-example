import styles from './Header.module.css'
import { IgniteLogo } from '../../assets/IgniteLogo.jsx'

export function Header(){
  return(
    <header className={styles.header}>
      <IgniteLogo />
    </header>
  )
}