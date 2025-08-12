import logo from "./footer.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={style.container}>
        <p>© All rights reserved</p>
        <a href="https://allfunds.com/es/contact/" target="_blank">
          <img src={logo} className={style.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
