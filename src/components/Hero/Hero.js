import React from "react";
import phone from "./assets/phone.png";
import "./Hero.css";

export default function Hero() {
    return (
        <div className="consult-banner-container">
            <div className="consult-banner">
                <div className="banner-content">
                    <div className="banner-text">
                        <div className="banner-title">#ПобеждаемКомандой</div>
                        <div className="banner-subtitle">Образовательная программа | ИИ-ассистент | Сообщество</div>
                    </div>
                </div>
                <div className="consult-card">
                    <div className="card-text">Технология создания вовлеченных команд и внедрения изменений</div>
                    <button className="consult-button">Получить консультацию</button>
                    <img className="card-phone" src={phone} alt="phone" />
                </div>
            </div>
        </div>
    );
}