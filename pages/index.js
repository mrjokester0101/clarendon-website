import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clarendon</title>
        <meta name="description" content="Main Page" />
        <link rel="icon" href="/profile.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image className={styles.image} src="/profile.png" alt="Profile Icon"/> Clarendon
        </h1>
        <p className={styles.description}>Main Page</p>
  
        <MainButtons/>

        <div className={styles.grid}>
          <a href="https://discord.com/oauth2/authorize?client_id=1251525661185806336&permissions=1787146563091583&integration_type=0&scope=bot" className={styles.card}>
            <h2>Invite Me</h2>
          </a>

          <a href="https://discord.gg/VWEcYvKztc" className={styles.card}>
            <h2>MrJokester Studios</h2>
          </a>
        </div>

      </main>
    </div>
  );
};

export default Home;
