import React from "react";
import './preview.css';
import Header from "./header";


const Preview = () => {
    return (
        <section className="preview">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="preview__title">
                            Не только люди нуждаются в доме
                        </div>
                        <div className="preview__subtitle">
                            Оказываем всестороннюю поддержку и помощь животным, нуждающимся в этом.
                        </div>
                        <button className="main-btn preview__btn">Найти друга</button>
                    </div>
                    <div className="col-6 offset-1">
                        <img src="/images/main_dog.png" alt="Dog" className="preview__img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Preview;
