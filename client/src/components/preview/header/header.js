import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RLink } from 'react-router-dom'

import './header.css';

import Hamburger from "../hamburger";


const Header = () => {
    return (
        <header>
            <nav className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3">
                            <h1 className="header-title">Доброта</h1>
                            <h2 className="header-subtitle">Гомельское общество защиты животных</h2>
                        </div>
                        <div className="col-xl-5 offset-xl-5 col-lg-6 offset-lg-3">
                            <ul className="navigation-list">
                                <li>
                                    <Link
                                        to="second-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="navigation-list__link"
                                    >Про нас</Link>
                                </li>
                                <li>
                                    <RLink
                                        to="/pets"
                                        className="navigation-list__link"
                                    >Наши питомцы</RLink>
                                </li>
                                <li>
                                    <Link
                                        to="fourth-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="navigation-list__link"
                                    >Помощь для нас</Link>
                                </li>
                                <li>
                                    <Link
                                        to="my-footer"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="navigation-list__link"
                                    >Контакты</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Hamburger />
        </header>
    );
};

export default Header;
