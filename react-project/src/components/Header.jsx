import React from "react";
import container from "../css/container.module.css";
import style from "../css/header.module.css";
import Slider from "react-slick";

function Header() {
  return (
    <div className={style.header}>
      <div className={container.container}>
        <div className={style.topSide}>
          <div className={style.mainCard}>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg"
              alt=""
            />
            <div className={style.mainTitle}>
              <div className={style.title}>Modern Black Chair</div>
              <div className={style.subtitle}>
                Only <span>99$</span>
              </div>
              <div className={style.mainButton}>Buy it</div>
            </div>
          </div>
        </div>
        <div className={style.bottomSide}>
          <div className={style.card}>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              alt=""
            />
            <p className={style.cardTitle}>Smart Tablet</p>
          </div>
          <div className={style.card}>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              alt=""
            />
            <p className={style.cardTitle}>Smart Tablet</p>
          </div>
          <div className={style.card}>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              alt=""
            />
            <p className={style.cardTitle}>Smart Tablet</p>
          </div>
          <div className={style.card}>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              alt=""
            />
            <p className={style.cardTitle}>Smart Tablet</p>
          </div>
          <div className={style.card}>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              alt=""
            />
            <p className={style.cardTitle}>Smart Tablet</p>
          </div>
          <div className={style.card}>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              alt=""
            />
            <p className={style.cardTitle}>Smart Tablet</p>
          </div>
          <div className={style.card}>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
              alt=""
            />
            <p className={style.cardTitle}>Smart Tablet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
