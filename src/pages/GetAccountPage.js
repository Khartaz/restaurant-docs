import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const GetAccountPage = () => {
    return ( 
          <div class="content">
            <div className="post">
                <h2><p>Account User Controller</p></h2>
                <p className="a"><span class="post_method">Get</span><code>/api/accounts/{`{uniqueId}`}</code></p>
                <div class="info">
                    <p className="under_title"><span>Request parameter user uniqueId</span></p>
                </div>
                <div className="details">
                    <pre>
                        <code>
                            <div className="java">
                                {` parameter          value
userUniqueId     uniqueString `}
                            </div>
                        </code>
                    </pre>
                </div> 
                <p className="under_title"><span>Example Response </span></p>
                <p className="status_200">Status 200</p>
                    <div className="details">
                        <pre>
                            <code>
                                <div className="java">
                                    {`{
    "id": 1,
    "name": "name",
    "lastname": "lastname",
    "email": "email8@mail.com",
    "username": "name.lastname.1",
    "userUniqueId": "uniqueString",
    "emailVerificationToken": null,
    "roles": [
        {
            "name": "MANAGER"
        }
    ],
    "active": true,
    "_links": {
        "self": {
            "href": "http://host/api/accounts/uniqueString"
        }
    }
}`}
                                </div>
                            </code>
                        </pre>
                    </div>
                    <p className="under_title"><span>Example Response User Not Found. </span></p>
                    <p className="status_200">Status 404</p>
                    <div className="details">
                        <pre>
                            <code>
                                <div className="java">
                                    {`{
    "timestamp": "2019-04-16T17:55:42.261+0000",
    "message": "User not found with unique id : uniqueString ",
    "details": "uri=/api/accounts/uniqueString"
}`}
                                </div>
                            </code>
                        </pre>
                    </div>
                    
            </div>
          </div>
     );
}
 
export default GetAccountPage;