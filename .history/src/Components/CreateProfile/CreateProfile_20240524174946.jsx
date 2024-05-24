import styles from "./CreateProfile.module.css";
const CreateProfile = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <img
            src="https://occ-0-5639-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
            alt=""
          />
        </div>
        <div>
          <h1>Create profiles for kids</h1>
          <h3>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership
          </h3>
        </div>
      </div>
    </>
  );
};
export default CreateProfile;
