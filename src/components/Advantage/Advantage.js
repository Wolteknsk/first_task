import React from "react";
import compassIcon from "./assets/compassIcon.svg";
import usersIcon from "./assets/usersIcon.svg";
import trophyIcon from "./assets/trophyIcon.svg";
import "./Advantage.css";

export default function Advantages() {
    return (
        <div className="advantages-container">
            <div className="advantages-header" id="advantages">
                Мы помогаем собственникам, первым лицам компаний <br /> и их командам пройти через изменения и неопределённость <br /> к новым целям.
            </div>
            <div className="advantages-grid">
                <div className="advantage-item">
                    <img src={compassIcon} alt="Пройти через неопределённость" />
                    <div className="advantage-text">пройти через неопределённость</div>
                </div>
                <div className="advantage-item middle-item">
                    <img src={usersIcon} alt="Сохранить себя и лучших людей в команде" />
                    <div className="advantage-text">сохранить себя и лучших людей в команде</div>
                </div>
                <div className="advantage-item">
                    <img src={trophyIcon} alt="Получить результат ради которого начали перемены" />
                    <div className="advantage-text">
                        получить тот <br /> результат, ради которого начали перемены
                    </div>
                </div>
            </div>
        </div>
    );
}