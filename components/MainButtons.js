import Head from "next/head";
import Image from "next/image";
import styles from "../styles/MainButtons.module.css";

const Home = () => {
  return (
    <div className={styles.border}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => window.location.href = 'https://clarendonbot.vercel.app/'}>
          <h2>Main Page</h2>
        </button>
        <button className={styles.button} onClick={() => window.location.href = 'https://clarendonbot.vercel.app/bot'}>
          <h2>About The Bot</h2>
        </button>
        <button className={styles.button} onClick={() => window.location.href = 'https://clarendonbot.vercel.app/cmds'}>
          <h2>Commands</h2>
        </button>
        <button className={styles.button} onClick={() => window.location.href = 'https://clarendonbot.vercel.app/tos'}>
          <h2>Terms Of Service</h2>
        </button>
        <button className={styles.button} onClick={() => window.location.href = 'https://clarendonbot.vercel.app/privacy'}>
          <h2>Privacy Policy</h2>
        </button>
      </div>
    </div>
  );
};

export default Home;
