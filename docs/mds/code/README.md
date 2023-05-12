# 验证码 API

### 请求发送验证码

**POST /api/v1/validation_codes**

### Parameters

|Name| Description|
|:-|:-|
|email| Email|

### Request

**Headers**

```text
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```

### Route

**POST /api/v1/validation_codes**
**Body**

```json
{
  "email": "1@qq.com"
}
```

### Response

**Headers**

```text
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 0
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: strict-origin-when-cross-origin
Content-Type: text/plain; charset=utf-8
Vary: Accept, Origin
ETag: W/"36a9e7f1c95b82ffb99743e0c5c4ce95"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: f0d79153-b48c-4441-b994-a271c4f00f2b
X-Runtime: 0.011074
Content-Length: 1
```

**Status**

```text
200 OK
```
