import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photoNataliyaN from "./assets/nataliyaN.svg";
import photoMarinaB from "./assets/marinaB.svg";
import photoOlgaG from "./assets/olgaG.svg";
import photoIngaG from "./assets/ingaG.svg";
import arrowleft from "./assets/arrowleft.svg";
import arrowright from "./assets/arrowright.svg";
import "./Feedbacks.css";

const feedbacks = [
    {
        photo: photoNataliyaN,
        name: "Наталья Нургалиева",
        position: "и.о. начальника отдела персонала ОАО \"Сбербанк России\", \"Восток-запад\"",
        text: "\"Для нас диалоговый инструмент (карты #ПобеждаемКомандой) оказался очень полезным. Это нестандартный подход в бизнес-среде, который вызывает интерес у персонала и \"снимает блоки\" в разговоре. Инструмент позволяет неформально обсудить...\"",
    },
    {
        photo: photoMarinaB,
        name: "Марина Боброва",
        position: "Руководитель по подбору, обучению и развитию персонала. Кавказский филиал ПАО \"Мегафон\"",
        text: "\"Я очень довольна этой методикой, с точки зрения оценки результата и его полезности для наших специалистов. Легко, открыто и в интересной форме получаем самую полезную информацию о важном в работе профессионального руководителя. Это содержательная изюминка...\"",
    },
    {
        photo: photoOlgaG,
        name: "Ольга Гайдышева",
        position: "зам. директора по администрированию 2Гис - Дальний Восток",
        text: "\"Я очень довольна этой методикой, с точки зрения оценки результата и его полезности\"\"Была задача понять уровень вовлеченности и готовности сотрудников к изменениям. Технология #ПобеждаемКомандой (мобильное приложение) позволила нам быстро провести диагностику ...\"",
    },
    {
        photo: photoIngaG,
        name: "Инга Герасименко",
        position: "Директор по персоналу БАРС-груп, Казань",
        text: "\"Польза конкретно этого инструмента (карты #Побеждаем командой и мобильное приложение) в том, что вопросы очень хорошо переработаны и сформулированы. Нам, как ИТ-компании такие формулировки подходят идеально, потому что мы не можем себе позволить общаться...\"",
    },
];

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="feedback-arrow-left" onClick={onClick}>
            <img src={arrowleft} alt="Предыдущий" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="feedback-arrow-right" onClick={onClick}>
            <img src={arrowright} alt="Следующий" />
        </div>
    );
}

export default function Feedbacks() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
        arrows: true,
        draggable: false,
    };

    return (
        <div className="feedbacks-container">
            <div className="feedbacks-wrapper">
                <div className="feedbacks-content">
                    <div className="feedbacks-heading">Отзывы</div>
                    <div className="feedbacks-slider">
                        <Slider {...settings}>
                            {feedbacks.map((feedback, index) => (
                                <div key={index}>
                                    <div className="feedback-card">
                                        <div className="feedback-inner">
                                            <div className="feedback-photo">
                                                <img src={feedback.photo} alt={feedback.name} />
                                            </div>
                                            <div className="feedback-info">
                                                <div className="feedback-header">
                                                    <div className="feedback-name">{feedback.name}</div>
                                                    <div className="feedback-position">{feedback.position}</div>
                                                </div>
                                                <div className="feedback-text">{feedback.text}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}