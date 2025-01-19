import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clarendon</title>
        <meta name="description" content="Terms Of Service" />
        <link rel="icon" href="/profile.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image className={styles.image} src="/profile.png" alt="Profile Icon"/> Clarendon
        </h1>
        <p className={styles.description}>Terms Of Service</p>

      <MainButtons/>
  
      <div className={styles.content}>
        
      </div>
  
      </main>
    </div>
  );
};

export default Home;
