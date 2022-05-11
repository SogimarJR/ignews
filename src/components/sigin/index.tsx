import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SiginButton({ onClick }) {
  const isUserLoggedin = true;

  if (isUserLoggedin) {
    return (
      <button className={styles.signInButton} onClick={onClick}>
        <FaGithub color="#04d361" />
        <span>Sogimar Junior</span>
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    );
  } else {
    return (
      <button className={styles.signInButton} onClick={onClick}>
        <FaGithub color="#eba417" />
        <span>Sign in with Github</span>
      </button>
    );
  }
}
