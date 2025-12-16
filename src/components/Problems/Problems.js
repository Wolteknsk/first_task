import React from "react";
import arrow from "./assets/arrow.svg";
import chartBar from "./assets/chartBar.svg";
import timer from "./assets/timer.svg";
import "./Problems.css";

export default function Problems() {
    return (
        <div className="problems-container">
            <div className="problems-title">
                Это позволяет <span className="problems-title-highlight">защитить бизнес</span> от частых проблем, на которых теряются время и деньги при внедрении изменений
            </div>
            <div className="problems-grid">
                <div className="problem-item">
                    <img src={arrow} alt="Ошибки в оценке" />
                    <div className="problem-text">Ошибки в оценке рисков и потенциала команды</div>
                </div>
                <div className="problem-item middle-problem">
                    <img src={chartBar} alt="Неправильные KPI" />
                    <div className="problem-text">Неправильно установленные KPI и критерии успеха</div>
                </div>
                <div className="problem-item">
                    <img src={timer} alt="Ошибки в дорожной карте" />
                    <div className="problem-text">
                        Типичные ошибки <br />в дорожной карте - повороты не туда, спешка
                    </div>
                </div>
            </div>
        </div>
    );
}