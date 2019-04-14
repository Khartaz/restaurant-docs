import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/Page.css';

import HomePage from '../pages/HomePage';
import PostSignIn from '../pages/PostSignIn';
import GetAccountsPage from '../pages/GetAccountsPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import NotFoundPage from '../pages/NotFoundPage';

const Page = () => {
    return ( 
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/post-sign-in" component={PostSignIn} />
                <Route path="/get-accounts" component={GetAccountsPage} />
                <Route path="/user-details" component={UserDetailsPage} />
                <Route component={NotFoundPage} />
            </Switch>
     );
}
 
export default Page;