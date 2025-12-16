import React from "react";
import { scrollTo } from "../nav";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer" id="contacts">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">#ПобеждаемКомандой</div>
                        <nav className="footer-nav">
                            <ul className="nav-list">
                                <li className="nav-item" onClick={() => scrollTo("tech")}>
                                    Технология
                                </li>
                                <li className="nav-item" onClick={() => scrollTo("advantages")}>
                                    Преимущества
                                </li>
                                <li className="nav-item" onClick={() => scrollTo("program")}>
                                    Программа
                                </li>
                                <li className="nav-item" onClick={() => scrollTo("formats")}>
                                    Форматы
                                </li>
                                <li className="nav-item" onClick={() => scrollTo("corporate")}>
                                    Для корпоратов
                                </li>
                                <li className="nav-item" onClick={() => scrollTo("contacts")}>
                                    Контакты
                                </li>
                            </ul>
                        </nav>

                        <div className="footer-bottom">
                            <p className="copyright">© 2025. Партнёрская сессия.</p>
                            <a href="https://partnership.expert/confidence" className="privacy-link">
                                Политика конфиденциальности
                            </a>
                            <p className="rights">Все права защищены.</p>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="contact-section">
                            <div className="phone-number">+7 962 222 55 82</div>
                            <a href="tel:+79622225582" className="call-button">
                                Позвоните мне
                            </a>
                        </div>

                        <div className="newsletter-form">
                            <h3 className="newsletter-title">Получайте новости и спецпредложения</h3>
                            <input type="email" placeholder="Ваш email" className="email-input" />
                            
                            <label className="checkbox-label">
                                <input type="checkbox" className="custom-checkbox" />
                                <span className="checkbox-text">
                                    Я согласен с{" "}
                                    <a href="https://partnership.expert/confidence" className="privacy-link-inline">
                                        Политикой конфиденциальности
                                    </a>
                                </span>
                            </label>

                            <label className="checkbox-label">
                                <input className="custom-checkbox" type="checkbox" />
                                <span className="checkbox-text">Я даю согласие на получение информационной рассылки</span>
                            </label>

                            <button className="submit-button">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}