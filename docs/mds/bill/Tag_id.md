# 账目 API

### 统计信息（按tag_id分组）

**GET /api/v1/items/summary**

### Parameters

|Name |Description|
|:-|:-|
|happened_after <font style=float:right color=red>required</font>|时间起点|
|happened_before &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<font style=float:right color=red>required</font>|时间终点|
|kind <font style=float:right color=red>required</font>|账目类型|
|group_by <font style=float:right color=red>required</font>|分组依据|

### Response Fields

|Name |Description|
|:-|:-|
|groups| 分组信息|
|total| 总金额（单位：分）|

### Request

**Headers**

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMzk3LCJleHAiOjE2ODE3NDg4MDB9.vwGKwalqibrTSmGwDYXpTU7BLDcWOxmodnZtNVV71CM
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```

### Route

**GET /api/v1/items/summary?happened_after=2018-01-01&happened_before=2019-01-01&kind=expenses&group_by=tag_id**

### Query Parameters

```text
happened_after: 2018-01-01
happened_before: 2019-01-01
kind: expenses
group_by: tag_id
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
ETag: W/"6d4911e530f95f0487ca2e8af5d237ea"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 65caf1ea-c0d1-44dc-974d-faed21e710fa
X-Runtime: 0.007291
Content-Length: 672
```

**Status**

```text
200 OK
```

Body

```json
{
  "groups": [
    {
      "tag_id": 3678,
      "tag": {
        "id": 3678,
        "user_id": 1397,
        "name": "Est.",
        "sign": "😡",
        "deleted_at": null,
        "created_at": "2023-04-17T22:26:39.994+08:00",
        "updated_at": "2023-04-17T22:26:39.994+08:00",
        "kind": "expenses"
      },
      "amount": 500
    },
    {
      "tag_id": 3676,
      "tag": {
        "id": 3676,
        "user_id": 1397,
        "name": "Eaq.",
        "sign": "😀",
        "deleted_at": null,
        "created_at": "2023-04-17T22:26:39.989+08:00",
        "updated_at": "2023-04-17T22:26:39.989+08:00",
        "kind": "expenses"
      },
      "amount": 400
    },
    {
      "tag_id": 3677,
      "tag": {
        "id": 3677,
        "user_id": 1397,
        "name": "Opt.",
        "sign": "😀",
        "deleted_at": null,
        "created_at": "2023-04-17T22:26:39.992+08:00",
        "updated_at": "2023-04-17T22:26:39.992+08:00",
        "kind": "expenses"
      },
      "amount": 300
    }
  ],
  "total": 600
}
```
