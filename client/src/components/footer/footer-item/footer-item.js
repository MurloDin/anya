import React from "react";

import "./footer-item.css";


const FooterItem = ({title, content}) => {
    return (
        <div className="footer-item">
            <div className="footer-item__title">
                { title }
            </div>
            {
                content.map((item, idx) => (
                    <div className="footer-item__content" key={idx}>
                        <img src={item.src}
                             alt={item.alt}
                             className="footer-item__content-img"/>
                        <div className="footer-item__content-title">
                            {item.title}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FooterItem;
