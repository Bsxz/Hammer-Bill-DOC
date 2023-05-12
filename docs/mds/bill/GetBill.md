# 账目 API

### 获取账目

**GET /api/v1/items**

### Parameters

|Name| Description|
|:-|:-|
|page |页码|
|happened_after |发生时间的起点|
|happened_before |发生时间的终点|

### Response Fields

|Name |Description|
|:-|:-|
|resources[id]    |ID|
|resources[amount]    |金额（单位：分）|

### Request

**Headers**

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMzkzLCJleHAiOjE2ODE3NDg3OTl9.T6x7OMbl1ycyfuD-9fo5sbKxpW8ln0_rrPD6Lu1h5xM
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```

### Route

**GET /api/v1/items?happened_after=2023-04-07+22%3A26%3A39+%2B0800&happened_before=2023-04-17+22%3A26%3A39+%2B0800**

### Query Parameters

```text
happened_after: 2023-04-07 22:26:39 +0800
happened_before: 2023-04-17 22:26:39 +0800
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
ETag: W/"7566f5a9c870ceb25aac32f75099d334"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 593cea09-6951-4bd3-8f67-313a39e1b832
X-Runtime: 0.031999
Content-Length: 1486
```

**Status**

```text
200 OK
```

**Body**

```json
{
  "resources": [
    {
      "id": 2407,
      "user_id": 1393,
      "amount": 6729,
      "note": null,
      "tag_ids": [
        3671
      ],
      "happened_at": "2023-04-12T22:26:39.821+08:00",
      "created_at": "2023-04-17T22:26:39.822+08:00",
      "updated_at": "2023-04-17T22:26:39.822+08:00",
      "kind": "expenses",
      "deleted_at": null,
      "happen_at": "2023-04-12T22:26:39.821+08:00",
      "tags": [
        {
          "id": 3671,
          "user_id": 1393,
          "name": "Rat.",
          "sign": "😡",
          "deleted_at": null,
          "created_at": "2023-04-17T22:26:39.715+08:00",
          "updated_at": "2023-04-17T22:26:39.715+08:00",
          "kind": "expenses"
        }
      ]
    },
    {
      "id": 2408,
      "user_id": 1393,
      "amount": 7870,
      "note": null,
      "tag_ids": [
        3671
      ],
      "happened_at": "2023-04-12T22:26:39.821+08:00",
      "created_at": "2023-04-17T22:26:39.825+08:00",
      "updated_at": "2023-04-17T22:26:39.825+08:00",
      "kind": "expenses",
      "deleted_at": null,
      "happen_at": "2023-04-12T22:26:39.821+08:00",
      "tags": [
        {
          "id": 3671,
          "user_id": 1393,
          "name": "Rat.",
          "sign": "😡",
          "deleted_at": null,
          "created_at": "2023-04-17T22:26:39.715+08:00",
          "updated_at": "2023-04-17T22:26:39.715+08:00",
          "kind": "expenses"
        }
      ]
    },
    {
      "id": 2409,
      "user_id": 1393,
      "amount": 5645,
      "note": null,
      "tag_ids": [
        3671
      ],
      "happened_at": "2023-04-12T22:26:39.821+08:00",
      "created_at": "2023-04-17T22:26:39.828+08:00",
      "updated_at": "2023-04-17T22:26:39.828+08:00",
      "kind": "expenses",
      "deleted_at": null,
      "happen_at": "2023-04-12T22:26:39.821+08:00",
      "tags": [
        {
          "id": 3671,
          "user_id": 1393,
          "name": "Rat.",
          "sign": "😡",
          "deleted_at": null,
          "created_at": "2023-04-17T22:26:39.715+08:00",
          "updated_at": "2023-04-17T22:26:39.715+08:00",
          "kind": "expenses"
        }
      ]
    }
  ],
  "pager": {
    "page": 1,
    "per_page": 25,
    "count": 3
  }
}
```
