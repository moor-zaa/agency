import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Create Toughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          delectus quae voluptatum excepturi neque illo rerum debitis mollitia
          nam voluptates, facilis molestiae, earum, dolor tempora asperiores
          ducimus laborum. Amet, ex!
        </p>
        <div className={styles.buttons}>
          <button className={styles.homeButton}>Learn More</button>
          <button className={styles.homeButton}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src={"/brands.png"}
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={"/hero.gif"} alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
