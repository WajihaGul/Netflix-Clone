import styles from "./Downloads.module.css";
const Downloads = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Dimg}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
      </div>
      <div className={styles.Dtext}>
        <h1 className={styles.Dhead1}>Download your shows to watch offline </h1>
        <h2 className={styles.Dhead2}>
          Save your favorites easily and always have something to watch.
        </h2>
      </div>
    </div>
  );
};

export default Downloads;
