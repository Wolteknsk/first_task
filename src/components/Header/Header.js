import React from "react";
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">#ПобеждаемКомандой</div>
                <div className="nav-item">Технология</div>
                <div className="nav-item">Преимущества</div>
                <div className="nav-item">Программа</div>
                <div className="nav-item">Форматы</div>
                <div className="nav-item">Для корпоратов</div>
                <div className="nav-item">Контакты</div>
                <button className="demo-button">
                    Демо
                </button>
            </div>
        </header>
    );
}