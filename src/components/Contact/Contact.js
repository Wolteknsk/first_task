import React from "react";
import iphone from "./assets/phone.svg";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-wrapper">
                <div className="contact-header">
                    <div className="contact-header-card">
                        <div className="contact-header-title">
                            Связаться
                            <br />с командой
                        </div>
                        <img src={iphone} alt="Телефон" className="contact-header-phone" />
                    </div>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-title">
                            Получите консультацию
                            <br />и доступ к демо-среде
                        </div>
                        <div className="contact-description">
                            <p>
                                Оставьте контакты — в течение
                                <br /> рабочего дня обсудим
                                <br />
                                задачу, пришлём программу
                                <br /> и доступ к материалам.
                            </p>
                            <p className="contact-margin">
                                Расскажем о скидках для команд
                                <br /> и корпоративных пакетов.
                            </p>
                            <ul className="contact-list">
                                <li>
                                    Демо на живой платформе
                                    <br /> с ИИ-ассистентом
                                </li>
                                <li>
                                    Индивидуальные условия
                                    <br /> и расчёт стоимости
                                </li>
                                <li>
                                    Доступ к аналитике
                                    <br /> и бенчмаркам программы
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-field">
                                <label className="form-label">ИМЯ</label>
                                <input type="text" required name="name" placeholder="Анна Смирнова" className="form-input" />
                            </div>
                            <div className="form-field">
                                <label className="form-label">КОМПАНИЯ ИЛИ ФОРМАТ</label>
                                <input type="text" required name="company" placeholder="Компания / Семейная команда" className="form-input" />
                            </div>
                            <div className="form-field">
                                <label className="form-label">КОНТАКТ</label>
                                <input type="text" required name="contact" placeholder="@username или +7" className="form-input" />
                            </div>
                            <div className="form-field">
                                <label className="form-label">КОММЕНТАРИЙ</label>
                                <textarea
                                    name="comment"
                                    placeholder="Расскажите, с каким запросом приходите"
                                    className="form-textarea"
                                ></textarea>
                            </div>

                            <button type="submit" className="form-submit">
                                Отправить заявку
                            </button>
                            <p className="form-note">
                                Нажимая на кнопку, вы соглашаетесь с обработкой персональных
                                <br /> данных и даете доступ к материалам программы.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}