import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Bot</title>
        <meta name="description" content="Commands" />
        <link rel="icon" href="/gamebot.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image className={styles.image} src="/gamebot.png" alt="Profile Icon"/> Game Bot
        </h1>
        <p className={styles.description}>Commands</p>

      <MainButtons/>
  
      <div className={styles.content}>
        <h2>🛠 Staff Commands 🛠</h2>
          <p>.ban - Ban a user with a reason.</p>
          <p>.unban - Unban a user with their id.</p>
          <p>.timeout - Timeout a person with</p>
          <p>the inputted time (1-40320).</p>
          <p>.untimeout - Untimeout a person.</p>
          <p>.warn - Warn a person with a reason.</p>
          <p>.unwarn - Unwarn a person.</p>
          <p>.punishes - Check your or someone</p>
          <p>else's warns.</p>
          <p>.clear - Clears the amount</p>
          <p> you put (1-100).</p>
          <p>.lock - Lock the current channel.</p>
          <p>.unlock - Unlocks the current channel.</p>
          <p>.kick - Kick a person with a reason.</p>
        <h2>🌐 Unity Commands 🌐</h2>
          <p>.help - Shows the start menu of</p>
          <p>the help command.</p>
          <p>.scc - Set the counting channel.</p>
          <p>.rcc - Remove the counting channel.</p>
          <p>.slc - Set the level channel.</p>
          <p>.rlc - Remove the level channel.</p>
          <p>.level - Check your or someone else's level.</p>
          <p>.leaderboard - Check the leaderboards.</p>
          <p>.chat - Chat with the application.</p>
          <p>.support - Show links.</p>
          <p>.botinfo - Show the bot info.</p>
          <p>.severinfo - Show the server Info.</p>
          <p>.userinfo - Check your or someone else's info.</p>
          <p>.copy - Copy the text you want.</p>
          <p>.clipboard - Show all your copied texts.</p>
          <p>.calculator - Show a calculator with buttons.</p>
          <p>.afk - Set your afk.</p>
          <p>.back - Remove your afk.</p>
          <p>.automod - Set automod to your server.</p>
        <h2>💵 Economy Commands 💵</h2>
          <p>.balance - Check your's or someone</p>
          <p>else's balance.</p>
          <p>.deposit - Deposit cash in your bank.</p>
          <p>.withdraw - Withdraw cash from your bank.</p>
          <p>.daily - Claim your daily cash</p>
          <p>.work - Work for cash.</p>
          <p>.inventory - Check your or someone</p>
          <p>else's inventory.</p>
          <p>.sell - Sell items from your inventory</p>
          <p>using their number ID's.</p>
          <p>.hunt - Hunt for items.</p>
          <p>.shop - Check the shop.</p>
          <p>.buy - Buy items from the shop</p>
          <p>using their number ID's.</p>
        <h2>😜 Fun Commands 😜</h2>
          <p>.mm - Play a game of memory match.</p>
          <p>(broken)</p>
          <p>.roll - Rolls a dice 1-10.</p>
          <p>.snake - Play a game of snake.</p>
          <p>.slot - Slot machine.</p>
          <p>.tic-tac-toe - Play a game of tic-tac-toe</p>
          <p>with a user or yourself.</p>
          <p>.bomb - Play a game of bomb.</p>
        </div>
  
      </main>
    </div>
  );
};

export default Home;
