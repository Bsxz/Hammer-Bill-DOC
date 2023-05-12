# 标签API
### 修改标签
**PATCH /api/v1/tags/:id**
### Parameters
| **Name** | **Description**  |
|:-:|:-:|
| name | 名称 |
| sign | 符号 |
### Response Fields
| **Name** | **Description**  |
|:-|:-|
| resource[id]   | ID |
| resource[name]    | 名称 |
| resource[sign]  | 符号|
| resource[user_id]    | 用户ID |
| resource[deleted_at]    | 删除时间 |
### Request
**Headers**
```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNDA0LCJleHAiOjE2ODE3NDg4MDB9.MwBuScx1GoLx8yV3SUe9T6e9HNAJfJtnTrdfsRJE8LA
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie: 
```
**Demo Route**
```text
PATCH /api/v1/tags/3708
```
**Demo Body**
```text
{"name":"y","sign":"y"}
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
Content-Type: application/json; charset=utf-8
Vary: Accept, Origin
ETag: W/"c6efa9551926ec1474e459dd54b6234c"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: f6d226c7-15ff-43a0-9ae2-62474b110f82
X-Runtime: 0.004700
Content-Length: 187
```
**Status**
```text
200 OK
```
**Body**
```json
{
  "resource": {
    "name": "y",
    "sign": "y",
    "id": 3708,
    "user_id": 1404,
    "deleted_at": null,
    "created_at": "2023-04-17T22:26:40.150+08:00",
    "updated_at": "2023-04-17T22:26:40.155+08:00",
    "kind": "expenses"
  }
}
```
