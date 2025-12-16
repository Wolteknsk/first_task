import React from "react";
import bad1 from "./assets/bad1.png";
import good1 from "./assets/good1.png";
import bad2 from "./assets/bad2.png";
import good2 from "./assets/good2.png";
import bad3 from "./assets/bad3.png";
import good3 from "./assets/good3.png";
import bad4 from "./assets/bad4.png";
import good4 from "./assets/good4.png";
import phone from "./assets/phone.png";
import highfive from "./assets/highfive.png";
import "./What.css";

export default function What() {
    return (
        <div className="what-container">
            <div className="what-title">Что внутри технологии?</div>
            <div className="what-content">
                <div className="what-cards-section">
                    <div className="what-section-title">Набор карт "Побеждаем командой" и сценарии проведения диалоговых командных сессий</div>
                    <div className="what-cards-grid">
                        <div className="flex gap-5px">
                            <img className="what-card" src={bad1} alt="" />
                            <img className="what-card" src={good1} alt="" />
                        </div>
                        <div className="flex gap-5px">
                            <img className="what-card" src={bad2} alt="" />
                            <img className="what-card" src={good2} alt="" />
                        </div>
                        <div className="flex gap-5px">
                            <img className="what-card" src={good3} alt="" />
                            <img className="what-card" src={bad3} alt="" />
                        </div>
                        <div className="flex gap-5px">
                            <img className="what-card" src={good4} alt="" />
                            <img className="what-card" src={bad4} alt="" />
                        </div>
                    </div>
                    <div className="what-cards-benefits">
                        <ul className="what-benefits-list">
                            <li>выявить и описать проблемы, о которых обычно принято умалчивать</li>
                            <li>справиться с противоречиями и преодолеть кризис в команде</li>
                            <li>сформировать качественные горизонтальные связи, командную ответственность и "мы-мышление"</li>
                        </ul>
                    </div>
                </div>
                <div className="what-right-section">
                    <div className="what-ai-section">
                        <div className="flex flex-col w-full h-full justify-around items-center">
                            <div className="what-ai-title">
                                ИИ-ассистент для команд <br />- диагностика вовлеченности <br />и готовности к изменениям
                            </div>
                            <div className="what-ai-content">
                                <div className="what-ai-list">
                                    <ol className="what-ai-benefits">
                                        <li>оценить потенциал команды</li>
                                        <li>определить точки напряжения и сопротивления</li>
                                        <li>мгновенная аналитика и рекомендации для команды, руководителя, <br />а также для <br /> HR и собственника</li>
                                    </ol>
                                </div>
                                <img src={phone} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="what-game-section">
                        <div>
                            Бизнес-игра <br /> "Побеждаем командой"
                        </div>
                        <div>В разработке!</div>
                    </div>
                </div>
                <div className="what-community-section">
                    <div className="w-50percent flex">
                        <div className="flex flex-col justify-center items-center gap-10">
                            <div className="what-community-title">
                                Сообщество выпускников <br /> и студентов
                            </div>
                            <ol className="what-community-benefits">
                                <li>поддерживающая среда</li>
                                <li>база знаний</li>
                                <li>доступ к экспертам в узких нишах</li>
                                <li>обмен опытом, разбор кейсов, расширение насмотренности</li>
                            </ol>
                        </div>
                    </div>
                    <div className="what-community-right">
                        <img src={highfive} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}