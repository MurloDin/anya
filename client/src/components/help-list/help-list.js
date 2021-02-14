import React from "react";

import "./help-list.css";
import HelpListItem from "./help-list-item";

const first_column = [
    {
        src: "/icons/cat-pets.png",
        alt: "cat-pets",
        title: "Корм"
    },
    {
        src: "/icons/ambulance.png",
        alt: "ambulance",
        title: "Транспортировка"
    },
    {
        src: "/icons/ball.png",
        alt: "Ball",
        title: "Игрушки"
    },
    {
        src: "/icons/bowl.png",
        alt: "bowl",
        title: "Миски"
    },
    {
        src: "/icons/shampoo.png",
        alt: "shampoo",
        title: "Шампуни"
    },
]

const second_column = [
    {
        src: "/icons/pills.png",
        alt: "syringe",
        title: "Медикоменты"
    },
    {
        src: "/icons/syringe.png",
        alt: "ambulance",
        title: "Привики"
    },
    {
        src: "/icons/leash.png",
        alt: "leash",
        title: "Ошейники"
    },
    {
        src: "/icons/cat.png",
        alt: "cat",
        title: "Зоны сна"
    },
]

const HelpList = () => {
    return (
        <section className="help-list" id="fourth-section">
            <div className="container">
                <div className="main-title help-list_title-position">
                    Чем ты можешь помочь
                    <br />нашему приютут</div>
                <div className="row">
                    <div className="col-md-10 col-sm-6 col-6 offset-md-1">
                        <HelpListItem items={first_column} />
                    </div>
                    <div className="col-md-8 col-sm-6 offset-md-2 col-6 second-help-list">
                        <HelpListItem items={second_column} />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HelpList;
