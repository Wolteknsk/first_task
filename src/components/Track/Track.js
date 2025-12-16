import React from "react";
import "./Track.css";

export default function Track() {
    return (
        <div className="track-container">
            <div className="track-content">
                <div className="track-title">
                    Вы проходите путь через перемены за руку <br />с <span className="track-title-highlight">экспертами-практиками</span>
                </div>
                <div className="track-steps">
                    <ul className="track-list">
                        <li className="track-item">
                            <div className="track-number">01</div>
                            <div className="track-details">
                                <div className="track-step-title">Постановка цели и KPI-навигация</div>
                                <div className="track-step-description">Где мы и куда дальше? Особенности переходного периода. В чём застряли?</div>
                            </div>
                        </li>
                        <div className="track-divider"></div>
                        <li className="track-item">
                            <div className="track-number">02</div>
                            <div className="track-details">
                                <div className="track-step-title">Оценка рисков и шансов на успех</div>
                                <div className="track-step-description">Диагностика потенциала команды и точек напряжения, выявление слепых пятен- системно по технологии.</div>
                            </div>
                        </li>
                        <div className="track-divider"></div>
                        <li className="track-item">
                            <div className="track-number">03</div>
                            <div className="track-details">
                                <div className="track-step-title">Создание дорожной карты</div>
                                <div className="track-step-description">Главный инструмент в системном управлении изменениями.</div>
                            </div>
                        </li>
                        <div className="track-divider"></div>
                        <li className="track-item">
                            <div className="track-number">04</div>
                            <div className="track-details">
                                <div className="track-step-title">Человеческий фактор и вовлечённость</div>
                                <div className="track-step-description">На кого опереться? С кем расстаться? Как увидеть и выбрать амбассадоров, вовлечь в создание внутреннего сообщества лидеров перемен?</div>
                            </div>
                        </li>
                        <div className="track-divider"></div>
                        <li className="track-item">
                            <div className="track-number">05</div>
                            <div className="track-details">
                                <div className="track-step-title">Основные знания</div>
                                <div className="track-step-description">Регулярный календарь встреч: разбор кейсов и новых инструментов, вопросы и обмен опытом.</div>
                            </div>
                        </li>
                        <div className="track-divider"></div>
                        <li className="track-item">
                            <div className="track-number">06</div>
                            <div className="track-details">
                                <div className="track-step-title">Работа в мини-группах</div>
                                <div className="track-step-description">Отработка практических навыков, и применение новых инструментов на практику в свои проекты</div>
                            </div>
                        </li>
                        <div className="track-divider"></div>
                        <li className="track-item">
                            <div className="track-number">07</div>
                            <div className="track-details">
                                <div className="track-step-title">Консультация с трекерами</div>
                                <div className="track-step-description">Сверка по сложным и нестандартным запросам с экспертами в нише или узкой теме.</div>
                            </div>
                        </li>
                        <div className="track-divider"></div>
                        <li className="track-item">
                            <div className="track-number">08</div>
                            <div className="track-details">
                                <div className="track-step-title">Эмоциональная связь</div>
                                <div className="track-step-description">Очные и онлайн встречи для тусовок, нетворкинга, взаимной поддержки</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}