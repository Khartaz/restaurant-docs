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
                            <div className="java">
                                {`{
  "_embedded": {
      "accountUserResponseList": [
          {
              "id": 1,
              "name": name",
              "lastname": "lastname",
              "email": "email@mail.com",
              "username": "name.lastname.1",
              "userUniqueId": "uPoteHHKmy",
              "emailVerificationToken": "2jfgj9HJ",
              "roles": [
                  {
                      "name": "Types of roles"
                  }
              ],
              "active": true
          }
      ]
  },
  "_links": {
      "first": {
          "href": "http://host/api/accounts?page=0&size=1"
      },
      "self": {
          "href": "http://host/api/accounts?page=0&size=1"
      },
      "next": {
          "href": "http://host/api/accounts?page=1&size=1"
      },
      "last": {
          "href": "http://host/api/accounts?page=29&size=1"
      }
  },
  "page": {
      "size": 1,
      "totalElements": 30,
      "totalPages": 30,
      "number": 0
  }
}`}
                            </div>
                        </code>
                    </pre>
                </div> 
            </div>
          </div>
     );
}
 
export default GetAccountsPage;