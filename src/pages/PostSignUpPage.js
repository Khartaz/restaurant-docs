import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PostSignUpPage = () => {
    return ( 
          <div class="content">
            <div className="post">
                <h2><p>Account User Controller</p></h2>
                <p className="a"><span class="post_method">Post</span><code>/api/accounts/signup</code></p>
                <div class="info">
                    <p>Register new account.</p>
                </div>
            <p className="under_title"><span>Request json</span></p>
                <div className="details">
                    <pre>
                        <code>
                            <div className="java">
                                {`{
	"name": "name",
	"lastname": "lastname",
	"email": "email@gmail.com",
	"password": "password"
}`}
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
  "email": "email@gmail.com",
  "username": null,
  "userUniqueId": "Is0MGIrwzF",
  "emailVerificationToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJJczBNR0lT",
  "roles": [
    {
      "name": "MANAGER"
    }
  ],
  "active": false,
  "_links": {
    "self": {
      "href": "https://host/api/accounts/Is0MGIrwzF"
    }
  }
}`}
                                </div>
                            </code>
                        </pre>
                    </div>
                    <p className="under_title"><span>Example Response Bad Request when email is already in use. </span></p>
                    <p className="status_200">Status 400</p>
                    <div className="details">
                        <pre>
                            <code>
                                <div className="java">
                                    {`{
  "timestamp": "2019-04-16T17:23:50.554+0000",
  "message": "Email is already taken",
  "details": "uri=/api/accounts/signup"
}`}
                                </div>
                            </code>
                        </pre>
                    </div>
                    
            </div>
          </div>
     );
}
 
export default PostSignUpPage;