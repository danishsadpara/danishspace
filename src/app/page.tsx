import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};
export default function Home() {
  return <main className={styles.main}>Danish-Dojo</main>;
}
