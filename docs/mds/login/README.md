# 登入API

### 登入

**POST /api/v1/session**

### Parameters

| Name | Description |
|:-|:-|
| email <font style=float:right color=red>required</font>      | 邮箱 |
| code &nbsp;&emsp;&emsp;&emsp;&emsp;<font style=float:right  color=red>required</font> | 验证码 |

### Response Fields

| **Name** | **Description**  |
|:-|:-|
| jwt | 用于验证用户身份的 token |

### Request

**Headers**

```
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie: 
```

### Route

**POST /api/v1/session**

**Body**

```json
{
  "email": "1@qq.com",
  "code": "123456"
}
```

### Response

**Headers**

```
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 0
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: strict-origin-when-cross-origin
Content-Type: application/json; charset=utf-8
Vary: Accept, Origin
ETag: W/"15754d7277ae9d641d8fbc065f094135"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: bd88f8dd-2429-4848-b670-cd02c5ab5528
X-Runtime: 0.006185
Content-Length: 119
```

**Status**

```
200 OK
```

**Body**

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNDAwLCJleHAiOjE2ODE3NDg4MDB9.-p5c0Gxbmr5ZunVB3Cz3NTrOzKtQFO2-Mi_04IHk5to"
}
```
