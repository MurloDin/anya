import React from "react";

import "./footer.css";
import FooterItem from "./footer-item";

const first_data = [
    {
        src: "/icons/envelope.png",
        alt: "envelope",
        title: "email@shelter.com"
    },
    {
        src: "/icons/telephone.png",
        alt: "telephone",
        title: "+13 674 567 75 54"
    }
]

const second_data = [
    {
        src: "/icons/pin.png",
        alt: "pin",
        title: "Гомель, улица Совецкая, 12"
    },
    {
        src: "/icons/pin.png",
        alt: "pin",
        title: "Гомель, улица Крестьянская 22"
    }
]

const Footer = () => {
    return (
        <footer className="my-footer" id="my-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-5">
                        <FooterItem title="Как с нами связаться"
                                    content={first_data}/>
                    </div>
                    <div className="col-lg-3 offset-2 col-5">
                        <FooterItem title="Где мы находимся"
                                    content={second_data} />
                    </div>
                    <div className="col-lg-4 offset-lg-2">
                        <img src="/images/Dog.png"
                             alt="Puppy"
                             className="my-footer__img"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
