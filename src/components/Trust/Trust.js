import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dns from "./assets/DNS.png";
import doubleGis from "./assets/2GIS.png";
import wolkswagen from "./assets/Volkswagen.png";
import megaphone from "./assets/MegaPhone.png";
import yandex from "./assets/Yandex.png";
import kamaz from "./assets/Kamaz.png";
import moscow from "./assets/Moscow.png";
import sber from "./assets/SBER.png";
import mailru from "./assets/MailRU.png";
import rostelecom from "./assets/RosTeleKom.png";
import checkboxIcon from "./assets/checkBoxIcon.svg";
import "./Trust.css";

export default function Trust() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
    };
    const logosArray = [dns, doubleGis, wolkswagen, megaphone, yandex, kamaz, moscow, sber, mailru, rostelecom];
    
    return (
        <div className="trust-container">
            <div className="trust-title">С 2012 года нам доверяют</div>
            <div className="trust-slider">
                <Slider {...settings}>
                    {logosArray.map((logo, index) => (
                        <div key={index}>
                            <div className="logo-slide">
                                <img className="logo-image" src={logo} alt={`Логотип ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="trust-stats">
                <div className="stat-item">
                    <img src={checkboxIcon} alt="Иконка чекбокса" />
                    <div className="stat-text">Более 6000 диалоговых командных сессий и фокус-групп.</div>
                </div>
                <div className="stat-item middle-stat">
                    <img src={checkboxIcon} alt="Иконка чекбокса" />
                    <div className="stat-text">Более 300 внутренних лидерских конференций и сообществ</div>
                </div>
                <div className="stat-item">
                    <img src={checkboxIcon} alt="Иконка чекбокса" />
                    <div className="stat-text">260 управленцев прошли обучение.</div>
                </div>
            </div>
        </div>
    );
}