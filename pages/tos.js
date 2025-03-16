import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta property="og:site_name" content="Clarendon" />
        <meta property="og:title" content="Terms Of Service" />
        <meta property="og:description" content="The official Clarendon bot. This bot looks for you to have fun when using it!" />
        <meta property="og:url" content="https://clarendonbot.vercel.app/" />
        <title>Clarendon</title>
        <meta name="description" content="Information for the bot's Terms Of Service." />
        <meta property="og:image" content="/profile.png" />
        <link rel="icon" href="/profile.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image className={styles.image} src="/profile.png" alt="Profile Icon"/> Clarendon
        </h1>
        <p className={styles.description}>Terms Of Service</p>

      <MainButtons/>
  
      <div className={styles.content}>
        <h2>Introduction</h2>
          <p>Welcome to Clarendon's Terms of service ("Terms"). These Terms govern your use of the bot. By using the bot, you agree to these Terms. If you do not agree to these Terms, please do not use the bot.</p>
        <h2>Use of the Bot</h2>
          <h3>1. Eligibility</h3>
            <p>You must be at least 13 years old to use Doors Moderator Bot. By using the bot, you represent and warrant that you meet this age requirement.</p>
          <h3>2. License</h3>
            <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to use the bot in accordance with these Terms.</p>
          <h3>3. Prohibited Conduct</h3>
            <p>You agree not to:</p>
            <p>1. Use the bot for any illegal or unauthorized purpose.</p>
            <p>2. Attempt to gain unauthorized access to the bot or its systems.</p>
            <p>3. Transmit any viruses, malware, or other harmful code.</p>
            <p>4. Use the bot in any way that could damage, disable, overburden, or impair the bot or interfere with any other party's use of the bot.</p>
            <p>5. Harass, abuse, or harm another person using the bot.</p>
          <h2>User Content</h2>
            <h3>1. Responsibility</h3>
              <p>You are solely responsible for any content you transmit through the bot. We are not responsible for the content users transmit.</p>
            <h3>2. Rights</h3>
              <p>By transmitting content through the bot, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content for the purposes of operating and providing the bot.</p>
          <h2>Modifications to the Bot</h2>
            <p>We reserve the right to modify, suspend, or discontinue the bot at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the bot.</p>
          <h2>Termination</h2>
            <p>We may terminate or suspend your access to the bot immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the bot will cease immediately.</p>
          <h2>Disclaimer of Warranties</h2>
            <p>The bot is provided on an "as is" and "as available" basis. We disclaim all warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by discord terms of service, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
            <p>1. Your use or inability to use the bot.</p>
            <p>2. Any unauthorized access to or use of our servers and/or any personal information stored therein.</p>
            <p>3. Any interruption or cessation of transmission to or from the bot.</p>
            <p>4. Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the bot by any third party.</p>
          <h2>Indemnification</h2>
            <p>You agree to indemnify and hold us harmless from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:</p>
            <p>1. Your use of and access to the bot.</p>
            <p>2. Your violation of any term of these Terms.</p>
            <p>3. Your violation of any third-party right, including without limitation any copyright, property, or privacy right.</p>
        <h2>Discord</h2>
          <p>These Terms shall be governed by and construed in accordance with the discord terms of service of the jurisdiction in which we are based, without regard to its conflict of law principles.</p>
        <h2>Changes to These Terms</h2>
          <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms within the support server. You are advised to review these Terms periodically for any changes.</p>
        <h2>Last updated</h2>
          <p>This has been last updated on 19/01/2025.</p>
      </div>
  
      </main>
    </div>
  );
};

export default Home;
