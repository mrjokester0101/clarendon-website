import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>Game Bot</title>
          <meta name="description" content="Main Page" />
          <link rel="icon" href="/gamebot.png" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/gamebot.png" alt="Profile Icon"/> Game Bot
          </h1>
          <p className={styles.description}>Main Page</p>
  
        <MainButtons/>
  
        <a href="https://top.gg/bot/1251525661185806336">
          <img src="https://top.gg/api/widget/1251525661185806336.svg">
        </a>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Game Bot</h2>
            <a href="https://discord.com/oauth2/authorize?client_id=1251525661185806336&permissions=8&integration_type=0&scope=bot" className={styles.linkcard}>
              <p>Get Invite</p>
            </a>
          </div>

          <div className={styles.card}>
            <h2>MrJokester Studios</h2>
            <a href="https://discord.com/invite/VWEcYvKztc" className={styles.linkcard}>
              <p>Get Invite</p>
            </a>
          </div>
        </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
