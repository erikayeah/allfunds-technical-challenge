import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/news");
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleHome}>
        <span className={styles.noselect}>ENTER</span>
      </button>
    </div>
  );
};

export default Landing;
