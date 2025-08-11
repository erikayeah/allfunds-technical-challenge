import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import logo from "../../../public/landing.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/news");
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <button className={styles.btn} onClick={handleHome}>
        <span className={styles.noselect}>ENTER</span>
      </button>
    </div>
  );
};

export default Landing;
