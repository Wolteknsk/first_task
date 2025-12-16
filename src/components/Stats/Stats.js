import React from "react";
import "./Stats.css";

export default function Stats() {
    return (
        <div className="stats-container">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-number-bg">84%</div>
                    <div className="stat-title">84% компаний проваливают цифровую трансформацию</div>
                    <div className="stat-description">Помогаем снизить риск провала изменений за счет работы по технологии "Побеждаем командой"</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number-bg">№1</div>
                    <div className="stat-title">Управление изменениями - навык №1, которым хотят овладеть руководители</div>
                    <div className="stat-description">Обучаем инструментам системного управления изменениями в бизнесе</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number-bg">25%</div>
                    <div className="stat-title">До 25% прибыли теряется из-за накопленной усталости от изменений, выгорания и снижения вовлеченности</div>
                    <div className="stat-description">Проводим диагностику состояния команд, развиваем вовлеченность и навыки здоровой коммуникации</div>
                </div>
            </div>
        </div>
    );
}