import styles from "./page.module.css";
import { Metadata } from "next";
import LoginIndication from "./userinfo/LoginIndication";

export const metadata: Metadata = {
  title: "Danish-DOJO",
};
export default function Home() {
  return (
    <main className={styles.main}>
      <LoginIndication />
    </main>
  );
}
