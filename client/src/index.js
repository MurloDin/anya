import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/index.css';
import './css/bootstrap-grid.min.css';
import './css/bootstrap-reboot.min.css';
import './css/humburgers.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import PetShelterService from "./services/petshelter-service";
import { PetshelterServiceProvider } from "./components/petshelter-service-context";

import store from './store';

const petShelterService = new PetShelterService();



ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <PetshelterServiceProvider value={petShelterService}>
                <Router>
                    <App />
                </Router>
            </PetshelterServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));
