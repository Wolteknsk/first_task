import React from "react";
import photo from "./assets/photo.png";
import "./QuoteDmitrieva.css";

export default function QuoteDmitrieva() {
    return (
        <div className="quoted-container">
            <div className="quoted-photo">
                <img src={photo} alt="Александра Дмитриева" />
            </div>
            <div className="quoted-content">
                <div className="quoted-text">
                    "Застрять в переменах - это как заблудиться в бескрайней тайге. <br /> И для нас главное достижение всегда - это найденный нашими клиентами путь через перемены к тем важным
                    результатам, ради которых эти перемены и были запущены изначально".
                </div>
                <div className="quoted-author">
                    <div className="quoted-name">Александра Дмитриева</div>
                    <div className="quoted-title">
                        соавтор образовательной программы "Путь через перемены", <br />
                        эксперт в образовании взрослых и внедрении изменений.
                    </div>
                </div>
            </div>
        </div>
    );
}