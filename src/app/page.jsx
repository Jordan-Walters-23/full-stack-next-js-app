import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png"

export default function Home() {
  return(
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hello, I'm Jordan. I'm a full stack web developer.</h1>
        <p className={styles.desc}>Turning ideas into reality</p>
        <button className={styles.button}>See My Work</button>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="Hero" className={styles.img}/>
      </div>
    </div>
  )
}
