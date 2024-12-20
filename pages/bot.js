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
            <p>You can make the bot help moderate the</p>
            <p>server, with the option to enable or disable it</p>
            <p>as needed!</p>
          <h2>🌐 Unity Commands</h2>
            <p>There are various functions like help,</p>
            <p>setting channels & automod on or off,</p>
            <p>checking info, chatting, accessing tools like</p>
            <p>a calculator, managing AFK status, and</p>
            <p>viewing server or leaderboard details which</p>
            <p>you can use!</p>
          <h2>🛠️ Staff Commands</h2>
            <p>There are commands for managing users</p>
            <p>and channels, such as banning, unbanning,</p>
            <p>timing out, warning, clearing messages,</p>
            <p>locking/unlocking channels, and kicking</p>
            <p>users which you can use to help moderate</p>
            <p>your server!</p>
          <h2>😜 Fun Commands</h2>
            <p>There are fun functions, like memory</p>
            <p>match, dice rolls, snake, slot machine,</p>
            <p>tic-tac-toe & bomb games to make you have</p>
            <p>fun!</p>
          <h2>💵 Economy Commands</h2>
            <p>This bot also manages a virtual economy,</p>
            <p>allowing users to check balances, deposit or</p>
            <p>withdraw cash, claim daily rewards, work for</p>
            <p>money, manage inventory, buy and sell items,</p>
            <p>hunt for resources, and browse the shop for</p>
            <p>resources!</p>
          <h2>📈 Level System</h2>
            <p>It also has a leveling system that tracks</p>
            <p>user activity, rewards XP for engagement,</p>
            <p>and allows progression through levels, with</p>
            <p>the option to enable or disable it as needed!</p>
        </div>

      </main>
    </div>
  );
};

export default Home;
