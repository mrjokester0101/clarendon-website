import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clarendon</title>
        <meta name="description" content="About The Bot" />
        <link rel="icon" href="/profile.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image className={styles.image} src="/profile.png" alt="Profile Icon"/> Clarendon
        </h1>
        <p className={styles.description}>About The Bot</p>

        <MainButtons/>
  
        <div className={styles.content}>
          <h2>🤖 Automod</h2>
            <p>You can make the bot help moderate the server, with the option to enable or disable it as needed & edit what contents are banned!</p>
          <h2>🌐 Unity Commands</h2>
            <p>There are various functions like help setting channels & automod on or off, checking info, chatting, accessing tools like a calculator, managing AFK status, and viewing server or leaderboard details which you can use!</p>
          <h2>🛠️ Staff Commands</h2>
            <p>There are commands for managing users and channels, such as banning, unbanning, timing out, warning, clearing messages, locking/unlocking channels, and kicking users which you can use to help moderate your server!</p>
          <h2>😜 Fun Commands</h2>
            <p>There are fun functions, like memory match, dice rolls, snake, slot machine, tic-tac-toe, bomb games & questions to make you have fun!</p>
          <h2>💵 Economy Commands</h2>
            <p>This bot also manages a virtual economy, allowing users to check balances, deposit or withdraw cash, claim daily rewards, work for money, manage inventory, buy and sell items, hunt for resources, and browse the shop for resources!</p>
          <h2>📈 Level System</h2>
            <p>It also has a leveling system that tracks user activity, rewards XP for engagement, and allows progression through levels, with the option to enable or disable it as needed!</p>
        </div>

      </main>
    </div>
  );
};

export default Home;
