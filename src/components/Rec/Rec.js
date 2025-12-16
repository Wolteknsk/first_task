import React from "react";
import firstImage from "./assets/firstImage.png";
import secondImage from "./assets/secondImage.png";
import thirdImage from "./assets/thirdImage.png";
import fourthImage from "./assets/fourthImage.jpg";
import "./Rec.css";

export default function Rec() {
    return (
        <div className="rec-container">
            <div className="rec-title">
                Образовательная программа <br />
                "Путь через перемены"
            </div>
            <div className="rec-subtitle">по технологии #ПобеждаемКомандой</div>
            <div className="rec-grid">
                <div className="grid-item text-item">Подходит как для оффлайн, так и для распределенных команд.</div>
                <img className="grid-item image-item" src={firstImage} alt="" />
                <div className="grid-item text-item">Учитесь из любой точки мира вместе с командой!</div>
                <img className="grid-item image-item" src={secondImage} alt="" />
                <img className="grid-item image-item" src={thirdImage} alt="" />
                <div className="grid-item text-item">Для сотрудников разных специализаций и поколений.</div>
                <img className="grid-item image-item" src={fourthImage} alt="" />
                <div className="grid-item text-item">
                    Будь вместе! <br /> Будь с командой!
                </div>
            </div>
            <div className="rec-date">Открытая группа стартует 13 октября</div>
            <button className="rec-button">Оставить заявку</button>
        </div>
    );
}