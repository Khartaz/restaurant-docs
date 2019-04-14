import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const GetAccountsPage = () => {
    return ( 
          <div class="content">
            <div className="post">
                <h2><p>Account User Controller</p></h2>
                <p className="a"><span class="get_method">Get</span><code>/api/accounts</code></p>
                <p className="a"><span class="get_method">Get</span><code>/api/accounts?page=0&size=1</code></p>
                <div class="info">
                    <p>Fetch all accounts pagination available</p>
                </div>
            <p className="under_title"><span>Example Response</span></p>
                <div className="details">
                    <pre>
                        <code>
                            text code
                        </code>
                    </pre>
                </div> 
            </div>
          </div>
     );
}
 
export default GetAccountsPage;