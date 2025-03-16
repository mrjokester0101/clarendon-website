import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta property="og:site_name" content="Clarendon" />
        <meta property="og:title" content="Commands" />
        <meta property="og:description" content="The official Clarendon bot. This bot looks for you to have fun when using it!" />
        <meta property="og:url" content="https://clarendonbot.vercel.app/" />
        <title>Clarendon</title>
        <meta name="description" content="Information for the commands." />
        <meta property="og:image" content="/profile.png" />
        <link rel="icon" href="/profile.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image className={styles.image} src="/profile.png" alt="Profile Icon"/> Clarendon
        </h1>
        <p className={styles.description}>Commands</p>

      <MainButtons/>
  
      <div className={styles.content}>
        <h2>🛠 Staff Commands 🛠</h2>
          <p>.ban - Ban a user with a reason.</p>
          <p>.unban - Unban a user with their id.</p>
          <p>.timeout - Timeout a person with the inputted time (1-40320).</p>
          <p>.untimeout - Untimeout a person.</p>
          <p>.warn - Warn a person with a reason.</p>
          <p>.unwarn - Unwarn a person.</p>
          <p>.punishes - Check your or someone else's warns.</p>
          <p>.clear - Clears the amount you put (1-100).</p>
          <p>.lock - Lock the current channel.</p>
          <p>.unlock - Unlocks the current channel.</p>
          <p>.kick - Kick a person with a reason.</p>
          <p>.automodsettings - Shows a menu of the automod settings.</p>
        <h2>🌐 Unity Commands 🌐</h2>
          <p>.help - Shows the start menu of the help command or showing others by saying staff/unity/economy/fun</p>
          <p>.countsettings - Shows a menu of the count settings.</p>
          <p>.levelsettings - Shows a menu of the level settings.</p>
          <p>.level - Check your or someone else's level.</p>
          <p>.leaderboard - Check the leaderboards or by saying cash/bank/level/question/snake.</p>
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
        <h2>💵 Economy Commands 💵</h2>
          <p>.balance - Check your's or someone else's balance.</p>
          <p>.deposit - Deposit cash in your bank.</p>
          <p>.withdraw - Withdraw cash from your bank.</p>
          <p>.daily - Claim your daily cash</p>
          <p>.work - Work for cash.</p>
          <p>.inventory - Check your or someone else's inventory.</p>
          <p>.sell - Sell items from your inventory using their number ID's.</p>
          <p>.hunt - Hunt for items.</p>
          <p>.shop - Check the shop.</p>
          <p>.buy - Buy items from the shop using their number ID's.</p>
          <p>.slotmachine - Gamble on the slot machine for double rewards. (Max is 500 and the minimum is 10.)</p>
        <h2>😜 Fun Commands 😜</h2>
          <p>.roll - Rolls a dice 1-10.</p>
          <p>.snake - Play a game of snake.</p>
          <p>.tic-tac-toe - Play a game of tic-tac-toe with a user or yourself.</p>
          <p>.bomb - Play a game of bomb.</p>
          <p>.question - .question - Play a game of questions about the bot.</p>
        </div>
  
      </main>
    </div>
  );
};

export default Home;
