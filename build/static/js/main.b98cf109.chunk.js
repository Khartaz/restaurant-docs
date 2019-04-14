(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(31)},24:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(10),c=t.n(s),r=(t(9),t(11)),m=t(12),i=t(15),o=t(13),d=t(16),u=t(32),E=t(33),p=(t(24),function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"logo"},n.a.createElement(E.a,{to:"/"},"Restaurant")),n.a.createElement("p",null,n.a.createElement("strong",null,"API Documentation")))}),h=(t(28),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",{className:"mob"},n.a.createElement("h2",null,"Account User Controller"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(E.a,{to:"/user-details"},"Account User Entity Details")),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{className:"post_method"},"Post")," /api/accounts/signin")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{className:"post_method"},"Post")," /api/accounts/signup")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/accounts/userUniqueId")," "),n.a.createElement("li",null,n.a.createElement(E.a,{to:"/get-accounts"},n.a.createElement("span",{className:"get_method"},"Get")," /api/accounts ")),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{className:"put_method"},"Put")," /api/accounts")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"delete_method"},"Delete")," /api/accounts/id")," "))),n.a.createElement("div",{className:"mob"},n.a.createElement("h2",null,"Auth Controller"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/auth/email-token")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/auth/password-reset-request")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/auth/reset-password")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/auth/email-verification")," "))),n.a.createElement("div",{class:"mob"},n.a.createElement("li",{className:"linkcat"},n.a.createElement("h2",null,"Customer Controller"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/customers")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/customers/id/orders")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/customers/id/carts/session")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/customers")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/customers/id")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/customers/id/carts")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/customers/id/carts/session")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/customers/id/carts/uniqueId")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/customers/id/orders")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/customers/id/orders/orderNumber")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"put_method"},"Put")," /api/customers/id/carts/session")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"put_method"},"Put")," /api/customers/id/carts/session/product")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"delete_method"},"Delete")," /api/customers/id")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"delete_method"},"Delete")," /api/customers/id/carts/session/product")," ")))),n.a.createElement("div",{className:"mob"},n.a.createElement("h2",null,"Cart Controller"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/carts/customer/customerId")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/carts")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/carts/session")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/carts/session/uniqueId")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/carts/uniqueId")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"put_method"},"Put")," /api/carts/session/customerId")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"put_method"},"Put")," /api/carts/session/customerId/product")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"delete_method"},"Delete")," /api/carts/session/uniqueId")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"delete_method"},"Delete")," /api/carts/session/customerId/product")," "))),n.a.createElement("div",{className:"mob"},n.a.createElement("h2",null,"Product Controller"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/products")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/products")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/products/uniqueId")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"put_method"},"Put")," /api/products")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"delete_method"},"Delete")," /api/products/uniqueId")," "))),n.a.createElement("div",{className:"mob"},n.a.createElement("h2",null,"Order Controller"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/orders")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/orders/orderNumber")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"delete_method"},"Delete")," /api/orders/orderNumber")," "))),n.a.createElement("div",{className:"mob"},n.a.createElement("h2",null,"Daily Order List Controller"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/orders/daily")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"post_method"},"Post")," /api/orders/daily")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"patch_method"},"Patch")," /api/orders/daily/add")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"patch_method"},"Patch")," /api/orders/daily/close")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"patch_method"},"Patch")," /api/orders/daily/remove")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"get_method"},"Get")," /api/orders/daily/uniqueId")," "),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"disabled"},n.a.createElement("span",{class:"delete_method"},"Delete")," /api/orders/daily/uniqueId")," ")))))}),f=t(34),b=t(17),g=(t(29),function(){return n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"post"},n.a.createElement("h2",null,"Start page"),n.a.createElement("p",{className:"a"},"Heroku Swagger-UI "),n.a.createElement("div",{className:"details"},n.a.createElement("p",{className:"text-line"},n.a.createElement("a",{href:"https://shielded-brook-69228.herokuapp.com/swagger-ui.html",target:"_blank"},"Heroku Link")," "))))}),_=function(){return n.a.createElement("div",{class:"content"},n.a.createElement("div",{className:"post"},n.a.createElement("h2",null,n.a.createElement("p",null,"Account User Controller")),n.a.createElement("p",{className:"a"},n.a.createElement("span",{class:"get_method"},"Get"),n.a.createElement("code",null,"/api/accounts")),n.a.createElement("p",{className:"a"},n.a.createElement("span",{class:"get_method"},"Get"),n.a.createElement("code",null,"/api/accounts?page=0&size=1")),n.a.createElement("div",{class:"info"},n.a.createElement("p",null,"Fetch all accounts pagination available")),n.a.createElement("p",{className:"under_title"},n.a.createElement("span",null,"Example Response")),n.a.createElement("div",{className:"details"},n.a.createElement("pre",null,n.a.createElement("code",null,"text code")))))},v=function(){return n.a.createElement("div",{class:"content"},n.a.createElement("div",{class:"post"},n.a.createElement("h2",null,n.a.createElement("a",{href:"#"},"Account User Entity Details")),n.a.createElement("div",{class:"details"},n.a.createElement("div",{class:"text_wrapper"},n.a.createElement("p",null,"Long id - Primary key of entity. "),n.a.createElement("p",null,"String name - Name of user, min length size is 4 max 40. Cannot be null. "),n.a.createElement("p",null,"String lastname - Last Name of user, min length size is 4 max 40. Cannot be null. "),n.a.createElement("p",null,"String email - The string has to be a well-formed email address. Max length size is 40. "),n.a.createElement("p",null,"String password - Password of user account, min length 6 max 20. Cannot be null. "),n.a.createElement("p",null,"String username - Is unique value autogenerated. "),n.a.createElement("p",null,"String userUniqueId - User unique id autogenerated. "),n.a.createElement("p",null,"String emailVerificationToken - JWT token required to activate the account. Sent during registration on email. "),n.a.createElement("p",null,"String passwordResetToken - JWT token required to reset password. Generated after request. "),n.a.createElement("p",null,"Set roles - Type of user roles. "),n.a.createElement("p",null,"Boolean active - Status of user account activation. False not active, true is active. ")))))},N=function(){return n.a.createElement("div",null,"Page not found")},P=function(){return n.a.createElement(f.a,null,n.a.createElement(b.a,{path:"/",exact:!0,component:g}),n.a.createElement(b.a,{path:"/get-accounts",component:_}),n.a.createElement(b.a,{path:"/user-details",component:v}),n.a.createElement(b.a,{component:N}))},G=(t(30),function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",{className:"top"},"Copyright \xa9 ",n.a.createElement(E.a,{to:"/"},"API Restaurant Documentation")," - All Rights Reserved"))}),I=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("header",null,n.a.createElement(p,null)),n.a.createElement("main",null,n.a.createElement("aside",null,n.a.createElement(h,null)),n.a.createElement("section",{className:"page"},n.a.createElement(P,null))),n.a.createElement("footer",null,n.a.createElement(G,null))))}}]),a}(l.Component);c.a.render(n.a.createElement(I,null),document.getElementById("root"))},9:function(e,a,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.b98cf109.chunk.js.map