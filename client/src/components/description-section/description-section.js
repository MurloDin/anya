import React from "react";
import "./description-section.css";


const DescriptionSection = () => {
    return (
        <section className="description-section" id="second-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 offset-md-1 col-sm-12">
                        <div className="img-block">
                            <img src="/images/Pets.png" alt="Pets" className="description-section__img "/>
                        </div>
                    </div>
                    <div className="col-md-5 offset-1">
                        <div className="main-title description-section_indent">
                            Про общество защиты животных
                            “Доброта”
                        </div>
                        <div className="description-section__desc description-section_indent">
                            Объединение неравнодушных и активных людей, нацеленных на изменение экологической ситуации в
                            нашей стране, а также на создание благоприятного экологического климата.
                            <br/><br/>
                            Наша миссия — воспитание в людях гуманного отношения. Мы накопили огромный опыт в лечении,
                            адаптации и социализации животных. Приют активно сотрудничает с аналогичными организациями
                            как в Беларуси, так и в странах ближнего зарубежья.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DescriptionSection;
