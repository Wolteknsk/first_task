import React from "react";
import photo from "./assets/photo.png";
import "./QuoteChuhutina.css";

export default function QuoteChuhutina() {
    return (
        <div className="quote-container">
            <div className="quote-photo">
                <img src={photo} alt="Татьяна Чухутина" />
            </div>
            <div className="quote-content">
                <div className="quote-text">
                    "Управления изменениями - это отдельная область знаний. <br /> Не то же самое, что управление проектами или операционное управление. Это своего рода "буферная зона", в которой
                    требуется особый сет навыков и компетенций для достижения успеха".
                </div>
                <div className="quote-author">
                    <div className="author-name">Татьяна Чухутина</div>
                    <div className="author-title">автор методики и основатель проекта #ПобеждаемКомандой.</div>
                </div>
            </div>
        </div>
    );
}