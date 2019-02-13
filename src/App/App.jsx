import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import Restaurant from '../Restaurant/Restaurant';
import Setup from '../Setup/Setup';

import BrunchMoney from '../beers/BrunchMoney';
import SaltyLady from '../beers/SaltyLady';
import DallasBlonde from '../beers/DallasBlonde';
import Budlight from '../beers/BudLight';
import MillerLite from '../beers/MillerLite';
import Greenbelt from '../beers/Greenbelt';
import Temptress from '../beers/Temptress';
import VelvetHammer from '../beers/VelvetHammer';
import BlueMoon from '../beers/BlueMoon';

class App extends React.Component {
    
    
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/setup" component={Setup} />
                                <Route path="/restaurant" component={Restaurant} />
                                <Route path="/brunchmoney" component={BrunchMoney} />
                                <Route path='/saltylady' component={SaltyLady} />
                                <Route path='/dallasblonde' component={DallasBlonde} />
                                <Route path='/budlight' component={Budlight} />
                                <Route path='/millerlite' component={MillerLite} />
                                <Route path='/greenbelt' component={Greenbelt} />
                                <Route path='/temptress' component={Temptress} />
                                <Route path='/velvethammer' component={VelvetHammer} />
                                <Route path='/bluemoon' component={BlueMoon} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 