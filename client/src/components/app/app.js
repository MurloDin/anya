import React from "react";
import {Switch, Route} from 'react-router-dom'

import Preview from "../preview";
import DescriptionSection from "../description-section";
import PetsSlider from "../pets-slider/pets-slider";
import HelpList from "../help-list";
import DonationInformation from "../donation-information";
import Footer from "../footer";
import PetsPage from "../PetsPage/PetsPage";



const App = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Preview/>
                <DescriptionSection/>
                <PetsSlider/>
                <HelpList/>
                <DonationInformation/>
                <Footer/>
            </Route>
            <Route path='/pets' component={PetsPage}/>
        </Switch>
    );
};

export default App;
