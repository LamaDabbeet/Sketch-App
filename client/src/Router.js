import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CustomersList from './components/CustomersList';
import CustomerCreate from './components/CustomerCreate';
import CustomerShow from './components/CustomerShow';

const RouterComponent = () => {
  return (
    <Router >
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            onRight={() => Actions.customerCreate()}
            rightTitle="Add"
            key="customersList"
            component={CustomersList}
            title="Customers"
            initial
          />
          <Scene key="customerCreate" component={CustomerCreate} title="Create Customer" />
          <Scene key="customerShow" component={CustomerShow} title="Customer Details" />
        </Scene>
      </Scene>



    </Router>
  );
};

export default RouterComponent;
