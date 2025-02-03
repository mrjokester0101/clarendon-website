import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clarendon</title>
        <meta name="description" content="Privacy Policy" />
        <link rel="icon" href="/profile.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image className={styles.image} src="/profile.png" alt="Profile Icon"/> Clarendon
        </h1>
        <p className={styles.description}>Privacy Policy</p>

      <MainButtons/>
  
      <div className={styles.content}>
        <h2>Introduction</h2>
          <p>Welcome to Doors Moderator Bot. This privacy policy explains how we collect, use, disclose, and safeguard your information when you interact with our bot. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not use the bot.</p>
        <h2>Information We Collect</h2>
          <p>We collect various types of information in connection with your interaction with Doors Moderator Bot.</p>
          <h3>1. Personal Information</h3>
            <p>We do not actively collect personal information. However, any information you provide when interacting with the bot, such as usernames or personal messages, may be processed.</p>
          <h3>2. Cookies and Tracking Technologies</h3>
            <p>We do not use cookies or other tracking technologies in the bot.</p>
        <h2>How We Use Your Information</h2>
          <p>We use the information we collect in the following ways.</p>
          <h3>1. To operate and maintain the bot</h3>
            <p>Ensuring the bot functions as intended and providing necessary maintenance.</p>
          <h3>2. To improve our services</h3>
            <p>Analyzing interactions to enhance bot performance and features.</p>
          <h3>3. To ensure compliance and security</h3>
            <p>Monitoring usage to prevent abuse and ensure the safety of users.</p>
        <h2>Sharing Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your information to outside parties except as described below.</p>
          <h3>1. Service Providers</h3>
            <p>We may share information with third-party service providers who assist us in operating the bot and providing related services.</p>
          <h3>2. Legal Requirements</h3>
            <p>We may disclose your information if required to do so by discord or in response to valid requests by discord.</p>
        <h2>Data Retention</h2>
          <p>We retain your information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by discord.</p>
        <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
        <h2>Changes To This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy within the bot. You are advised to review this privacy policy periodically for any changes.</p>
        <h2>Agreement</h2>
          <p>By using Clarendon, you agree to the terms of this privacy policy.</p>
        <h2>Last updated</h2>
          <p>This has been last updated on 24/01/2025.</p>
      </div>
  
      </main>
    </div>
  );
};

export default Home;
