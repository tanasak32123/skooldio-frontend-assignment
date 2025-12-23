import { Admission } from "../../interfaces";
import styles from "./AdmissionCard.module.css";

interface AdmissionCardProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  data: Admission;
}

export function AdmissionCard({ data }: AdmissionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.facultyLogoWrapper}>
          <img
            className={styles.facultyLogo}
            src={data.logo}
            alt={data.logo}
          ></img>
        </div>

        <div className={styles.facultyInfo}>
          <div className={styles.facultyAndBranch}>
            <div className={styles.facultyNameWrapper}>
              <div className={styles.facultyName}>{data.faculty.name}</div>
              <img
                className={styles.favoriteLogo}
                src="favorite.png"
                alt="favorite"
              />
            </div>
            <div className={styles.branchName}>{data.name}</div>
          </div>

          <div className={styles.universityName}>
            {data.faculty.university.name}
          </div>
        </div>
      </div>

      <div className={styles.cardMiddle}>
        <div className={styles.admissionInfo}>
          <div className={styles.admissionRoundText}>รอบที่เปิด</div>
          <div className={styles.admissionRounds}>
            {data.roundSeats.map((seat, i) => (
              <div
                key={i}
                className={`${styles.admissionRound} ${
                  seat !== -1
                    ? styles.admissionRoundOpened
                    : styles.admissionRoundClosed
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {data.score !== null && (
          <div className={styles.scoreInfo}>
            <div className={styles.scoreInfoHeader}>
              <div className={styles.admissionRound4Text}>
                รอบที่ 4 : Admission
              </div>
              <button className={styles.editScoreButton}>แก้ไขคะแนน</button>
            </div>

            <div className={styles.myScore}>
              <img
                className={styles.scoreLogo}
                src="score-logo.svg"
                alt="Score logo"
              />
              <div className={styles.scoreTextWrapper}>
                <div className={styles.scoreText}>คะแนนของคุณคือ</div>
                <div className={styles.scoreNumber}>0</div>
              </div>
            </div>

            <div className={styles.globalScore}>
              <div className={styles.globalScoreColumn}>
                <div className={styles.globalScoreNumber}>{data.score.min.toLocaleString()}</div>
                <div className={styles.globalScoreText}>คะแนนต่ำสุด 60</div>
              </div>

              <div className={styles.dividedLineScore}></div>

              <div className={styles.globalScoreColumn}>
                <div className={styles.globalScoreNumber}>{data.score.avg.toLocaleString()}</div>
                <div className={styles.globalScoreText}>คะแนนต่ำสุด 60</div>
              </div>

              <div className={styles.dividedLineScore}></div>

              <div className={styles.globalScoreColumn}>
                <div className={styles.globalScoreNumber}>{data.score.max.toLocaleString()}</div>
                <div className={styles.globalScoreText}>คะแนนต่ำสุด 60</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
