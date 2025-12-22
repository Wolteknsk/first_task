import React from "react";
import "./Config.css";

export default function Config() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="config-container" id="formats">
            <div className="config-tag">
                <p>ФОРМАТЫ ВЗАИМОДЕЙСТВИЯ</p>
            </div>

            <div className="config-title">Выберите конфигурацию под свои задачи</div>

            <div className="config-description">
                <p className="config-desc-text">
                    Индивидуальные и корпоративные условия рассчитываем отдельно.
                    <br /> Поможем собрать программу под ваш запрос.
                </p>
                <p className="config-desc-text">
                    Гарантируем возврат 100% стоимости,
                    <br /> если решение не подойдёт
                    <br /> после первой недели.
                </p>
            </div>

            <div className="config-cards">
                <div className="config-card">
                    <div className="config-card-content">
                        <div className="config-card-title">
                            Программа
                            <br />
                            «Путь через перемены»
                        </div>
                        <div className="config-card-price">65 000 ₽</div>
                        <p className="config-card-subtitle">
                            8 недель практики для лидеров
                            <br /> и команд с трекером и живыми
                            <br /> встречами.
                        </p>
                        <ul className="config-card-features">
                            <li>Гибридный формат: онлайн + офлайн сессии</li>
                            <li>Трекер сопровождения и индивидуальная обратная связь</li>
                            <li>Работа в мини-группах и доступ к сообществу</li>
                        </ul>
                    </div>
                    <button className="config-card-button" onClick={() => scrollTo("contact")}>
                        Отправить заявку
                    </button>
                </div>

                <div className="config-card">
                    <div className="config-card-content">
                        <div className="config-card-title">
                            Годовая подписка <br />
                            на цифровой сервис
                        </div>
                        <div className="config-card-price">30 000 ₽</div>
                        <p className="config-card-subtitle">
                            ИИ-ассистент и аналитика
                            <br /> для одной команды
                            <br /> (до 15 человек).
                        </p>
                        <ul className="config-card-features">
                            <li>Регулярная диагностика состояния команды</li>
                            <li>Инструменты повышения вовлечённости</li>
                            <li>Доступ к рекомендациям по действиям в реальном времени</li>
                        </ul>
                    </div>
                    <button className="config-card-button" onClick={() => scrollTo("contact")}>
                        Получить консультацию
                    </button>
                </div>

                <div className="config-card">
                    <div className="config-card-content">
                        <div className="config-card-title">
                            Карты «Побеждаем
                            <br />
                            командой»
                        </div>
                        <div className="config-card-price">55 000 ₽</div>
                        <p className="config-card-subtitle">
                            7 колод с инструкциями <br />и сценарием для самостоятельных
                            <br /> диалоговых сессий.
                        </p>
                        <ul className="config-card-features">
                            <li>Пошаговые сценарии и вопросы</li>
                            <li>Рабочие тетради и чек-листы</li>
                            <li>Доставка и поддержка по внедрению</li>
                        </ul>
                    </div>
                    <button className="config-card-button" onClick={() => scrollTo("contact")}>
                        Предзаказать набор
                    </button>
                </div>
            </div>
        </div>
    );
}