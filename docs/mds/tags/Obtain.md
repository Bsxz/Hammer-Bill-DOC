# 标签 API
### 获取标签
**GET /api/v1/tags/:id**
### Response Fields
|Name   |	Description|
|:-|:-|
|resource[id]	|ID|
|resource[name]	|名称
|resource[sign]	|符号
|resource[user_id]	|用户ID
|resource[deleted_at]	|删除时间|
### Request
**Headers**
```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNDAxLCJleHAiOjE2ODE3NDg4MDB9.z_lLTTMAFc58wU-n5kk7BOrGR6yqgsnwggSeytuMBvA
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```
### Route
**GET /api/v1/tags/3680**
###Response
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
ETag: W/"4e5dd36019da9fe1760cc6572cc7414d"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 5e3eeb7a-e1a0-4abf-8bb8-9943a7e748fe
X-Runtime: 0.003209
Content-Length: 193
```
**Status**
```text
200 OK
```
**Body**
```json
{
  "resource": {
    "id": 3680,
    "user_id": 1401,
    "name": "Sun.",
    "sign": "😡",
    "deleted_at": null,
    "created_at": "2023-04-17T22:26:40.062+08:00",
    "updated_at": "2023-04-17T22:26:40.062+08:00",
    "kind": "expenses"
  }
}
```
