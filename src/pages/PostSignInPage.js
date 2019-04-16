import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PostSignIn = () => {
    return ( 
          <div class="content">
            <div className="post">
                <h2><p>Account User Controller</p></h2>
                <p className="a"><span class="post_method">Post</span><code>/api/accounts/signin</code></p>
                <div class="info">
                    <p>Sign in account. AccessToken JWT, token type Bearer</p>
                </div>
            <p className="under_title"><span>Request json</span></p>
                <div className="details">
                    <pre>
                        <code>
                            <div className="java">
                                {`{
	"usernameOrEmail" : "example@mail.com",
	"password" : "string"
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
        "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0YnJDS3JFUzhpIiwiaWF0IjoxNTU1MjY4MTgzLCJleHAiOjE1NTU4NzI5ODN9.tF876WEuSOHdeTgQmdi8SODGYH-sAwc1mlyXtHzhKOzZPVDBkImDc7Oe8qvYPY_bJOqcseXDqPv-pbLjucbEig",
        "tokenType": "Bearer"
    }`}
                                </div>
                            </code>
                        </pre>
                    </div>
                    <p className="under_title"><span>Example Response Not Found </span></p>
                    <p className="status_200">Status 404</p>
                    <div className="details">
                        <pre>
                            <code>
                                <div className="java">
                                    {`{
    "timestamp": "2019-04-14T19:13:06.376+0000",
    "message": "User not found with username or email : example@mail.com",
    "details": "uri=/api/accounts/signin"
}`}
                                </div>
                            </code>
                        </pre>
                    </div>
                    <p className="under_title"><span>Example Response Unauthorized </span></p>
                    <p className="status_200">Status 401</p>
                    <div className="details">
                        <pre>
                            <code>
                                <div className="java">
                                    {`{
    "timestamp": "2019-04-14T19:19:23.374+0000",
    "message": "Account is disabled. Please verify email first.",
    "details": "uri=/api/accounts/signin"
}`}
                                </div>
                            </code>
                        </pre>
                    </div>
                    <p className="under_title"><span>Example Response Unauthorized - Bad Credientals </span></p>
                    <p className="status_200">Status 401</p>
                    <div className="details">
                        <pre>
                            <code>
                                <div className="java">
                                    {`{
    "timestamp": "2019-04-14T19:20:48.366+0000",
    "message": "Bad credentials",
    "details": "uri=/api/accounts/signin"
}`}
                                </div>
                            </code>
                        </pre>
                    </div>
            </div>
          </div>
     );
}
 
export default PostSignIn;