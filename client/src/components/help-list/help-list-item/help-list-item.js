import React from "react";
import "./help-list-item.css";


const HelpListItem = ({items}) => {
    return (
        <div className="help-list-item__content-container">
            {
                items.map((item, idx) => (
                    <div className="help-list-item__content" key={idx}>
                        <div className="help-list-item__img-boundary">
                            <img src={ item.src }
                                 alt={ item.alt }
                                 className="help-list-item__img"/>
                        </div>
                        <div className="help-list-item__title">{ item.title }</div>
                    </div>
                ))
            }
        </div>
    );
};

export default HelpListItem;
