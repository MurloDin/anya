import React from "react";

import "./donation-information.css";


const DonationInformation = () => {
    return (
        <section className="donation-information" id="donation-information">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="donation-information__img-boundary">
                            <img src="/images/Dog2.png"
                                 alt="Dog"
                                 className="donation-information__img"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="main-title donation-information_title-position">
                            Кроме того, вы<br />
                            можете сделать пожертвование
                        </div>
                        <div className="donation-information__subtitle">
                            Номер банковсокго счёта
                        </div>
                        <div className="credit-card">
                            <img src="/icons/credit-card_(1).png"
                                 alt="credit-card"
                                 className="credit-card__img"/>
                            <div className="credit-card__title">
                                8380 2880 8028 8791
                            </div>
                        </div>
                        <div className="donation-information__desc">
                            Legal information and lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Maecenas a ipsum
                            at libero sagittis dignissim sed
                            ac diam. Praesent ultrices maximus tortor et vulputate.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationInformation;
