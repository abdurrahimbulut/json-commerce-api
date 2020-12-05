# json-commerce
(Still under development)
(Hala geliştirilme aşamasında)

Bu paket node.js ile çok kısa sürede e-ticaret backend'i sahibi olmanızı sağlar. Sadece projenize dahil ederek e-ticaret uygulamanıza rest-api sağlayabilirsiniz.  

This package allows you to have an e-commerce backend in a very short time with node.js. You can only provide rest-api by adding this package to your e-commerce application.


## Dependencies
* bcryptjs
* dotenv
* express
* express-async-handler
* jsonwebtoken
* mongoose
* multer
* nodemailer

## Auth
- REGISTER
> POST :
``` {{URL}}/api/auth/register ```

> HEADER:
```
authorization : Barer: {{Token}}
  
```

> BODY:
```
{
    "name":"abdurrahim",
    "email":"abdurrahim.3078@gmail.com",
    "password":"123"
}
  
```
----
- LOGIN
> POST :
``` {{URL}}/api/auth/login ```

> HEADER:
```
authorization : Barer: {{Token}}
  
```

> BODY:
```
{
    "email":"admin@gmail.com",
    "password":"123"
}
  
```

----
- EDIT
> POST :
``` {{URL}}/api/auth/edit ```

> HEADER:
```
authorization : Barer: {{Token}}
  
```

> BODY:
```
{
    "name":"bulut"
}
  
```

----
- FORGOT PASSWORD
> PUT :
``` {{URL}}/api/auth/resetpassword?resetPasswordToken= ```

> BODY:
```
{
    "email":"abdurrahim.3078@gmail.com"
}
  
```
----
- RESET PASSWORD
> PUT :
``` {{URL}}/api/auth/resetpassword?resetPasswordToken= ```

> BODY:
```
{
    "password": "123456789"
}
```
"# json-commerce-api" 
