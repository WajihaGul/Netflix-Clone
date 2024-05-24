import styles from "./Enjoy.module.css";
const Enjoy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <h1 className={styles.ehead1}>Enjoy on your TV </h1>
        <h2 className={styles.ehead2}>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h2>
      </div>
      <div className={styles.Eimage}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Enjoy;
