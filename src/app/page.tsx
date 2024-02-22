import styles from "./page.module.css";
import { Metadata } from "next";
import LoginIndication from "./userinfo/LoginIndication";

export const metadata: Metadata = {
  title: {
    absolute: "", //dont need here instead we can use in respective page as absolute in object
    default: "danishdojo",
    template: "%s - danishdojo",
  },
};
export default function Home() {
  return (
    <main className={styles.main}>
      <LoginIndication />
    </main>
  );
}
