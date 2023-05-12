# 账目 API

### 统计信息（按happened_at分组）

**GET /api/v1/items/summary**

### Parameters

|Name |Description|
|:-|:-|
|happened_after    <font style=float:right color=red>required</font>|时间起点|
|happened_before &emsp;&emsp;&emsp;&emsp;&emsp;<font style=float:right color=red>required</font>| 时间终点|
|kind    <font style=float:right color=red>required</font>|账目类型|
|group_by <font style=float:right color=red>required</font>|分组依据|

### Response Fields

|Name| Description|
|:-|:-|
|groups |分组信息|
|total| 总金额（单位：分）|

### Request

**Headers**

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMzk1LCJleHAiOjE2ODE3NDg3OTl9.SnWsPb2BEC_pXA_SgTRlYPLBd4p5v6c07on7wkvGzOk
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```

### Route

**GET /api/v1/items/summary?happened_after=2018-01-01&happened_before=2019-01-01&kind=expenses&group_by=happened_at**

### Query Parameters

```text
happened_after: 2018-01-01
happened_before: 2019-01-01
kind: expenses
group_by: happened_at
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
ETag: W/"fe1b6d6b4a95f2ca4e5b0b45aa817f2d"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 679659f0-9620-4cb4-a8a1-1e2caca04fae
X-Runtime: 0.006732
Content-Length: 183
```

**Status**

```text
200 OK
```

**Body**

```json
{
  "groups": [
    {
      "happened_at": "2018-06-18",
      "tag": null,
      "amount": 300
    },
    {
      "happened_at": "2018-06-19",
      "tag": null,
      "amount": 300
    },
    {
      "happened_at": "2018-06-20",
      "tag": null,
      "amount": 300
    }
  ],
  "total": 900
}
```
