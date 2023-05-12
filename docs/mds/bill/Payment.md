# 账目 API

### 获取收支信息

**GET /api/v1/items/balance**

### Parameters

|Name| Description|
|:-|:-|
|happened_after <font style=float:right color=red>required</font>|时间起点|
|happened_before <font style=float:right color=red>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required</font>|时间终点|

### Response Fields

|Name |Description|
|:-|:-|
|balance| 净收入（单位：分）|
|expenses |支出（单位：分）|
|income |收入（单位：分）|

### Request

**Headers**

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMzk4LCJleHAiOjE2ODE3NDg4MDB9.SOgGVKmeJlM2DvWtb6gOXPXHtc_MoGOx8hlyO_-wQPI
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```

### Route

**GET /api/v1/items/balance?happened_after=2018-01-01&happened_before=2019-01-01**

### Query Parameters

```text
happened_after: 2018-01-01
happened_before: 2019-01-01
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
ETag: W/"92dcece23596914356bd022aebf8b139"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 3a260a61-93bf-469f-b356-c67fe2b39dc1
X-Runtime: 0.001946
Content-Length: 41
```

**Status**

```text
200 OK
```

**Body**

```json
{
  "income": 400,
  "expenses": 400,
  "balance": 0
}
```
