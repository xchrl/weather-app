import styles from "./errorPopup.module.scss";

export default function ErrorPopup(props: { errorMessage: string }) {
  return (
    <div className={styles.popup}>
      <header>An error has occured!</header>
      <main>{props.errorMessage}</main>
      <footer>
        Check your console (CTRL + Shift + I &rarr; Console) and contact xchrl
        on discord for further details.
      </footer>
    </div>
  );
}
