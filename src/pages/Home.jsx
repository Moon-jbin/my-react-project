import styles from "../css/Home.module.css";

export default function Home() {
  return (
    <div id={styles["home_inner"]}>
      <div id={styles["main_left"]}>
        <div id={styles["main_left_top"]}>
          <div className={styles["mlt-left"]}></div>
          <a href="/teamwork">
            <div className={styles["mlt-right"]}>importance of teamwork</div>
          </a>
        </div>

        <div id={styles["main_left_bottom"]}>
          <div id={styles["main_lb_left"]}>
            <div className={styles["mlb1"]}>Undetermined</div>
            <div className={styles["mlb2"]}></div>
          </div>
          <div className={styles["mlb3"]}></div>
        </div>
      </div>

      <div id={styles["main_right"]}>
        <div id={styles["main_right_left"]}>
          <a href="/portfolio">
            <div className={styles["mrl1"]}>My Portfolio </div>
          </a>
          <a href="/react-project">
            <div className={styles["mrl2"]}>Project</div>
          </a>
        </div>

        <div id={styles["main_right_right"]}>
          <a href="/explanation">
            <div className={styles["mrr1"]}>
              This is React-Project - explanation
            </div>
          </a>
          <div className={styles["mrr2"]}></div>
        </div>
      </div>
    </div>
  );
}
