import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/Page.css';

import HomePage from '../pages/HomePage';
import PostSignIn from '../pages/PostSignInPage';
import GetAccountsPage from '../pages/GetAccountsPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import NotFoundPage from '../pages/NotFoundPage';
import PostSignUp from '../pages/PostSignUpPage';
import GetAccountPage from '../pages/GetAccountPage';

const Page = () => {
    return ( 
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/post-sign-in" component={PostSignIn} />
                <Route path="/post-sign-up" component={PostSignUp} />
                <Route path="/get-accounts" component={GetAccountsPage} />
                <Route path="/get-account-unique-id" component={GetAccountPage} />
                <Route path="/user-details" component={UserDetailsPage} />
                <Route component={NotFoundPage} />
            </Switch>
     );
}
 
export default Page;