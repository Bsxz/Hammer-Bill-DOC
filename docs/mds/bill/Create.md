# 账目 API

### 创建账目

**POST /api/v1/items**

### Parameters

|Name |Description|
|:-|:-|
|amount &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<font color=red>require</font>|金额（单位：分）|
|kind &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<font color=red>require</font>|类型|
|happen_at &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;<font color=red>require</font>|发生时间|
|tag_ids &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<font color=red>require</font>|标签列表（只传ID）|

### Response Fields

|Name |Description|
|:-|:-|
|resource[id]    |Resource|
|resource[amount]    |Resource amount|
|resource[kind]    |Resource kind|
|resource[happen_at]    |Resource happen at|
|resource[tag_ids]    |Resource tag ids|

### Request

**Headers**

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMzk0LCJleHAiOjE2ODE3NDg3OTl9.lZRNZj1QPGQFy1VTGn_FzQ86VMsF3v5rm6CGoOcmMaQ
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```

### Route

**POST /api/v1/items**
**Body**

```json
{
  "amount": 9900,
  "kind": "expenses",
  "happen_at": "2020-10-30T00:00:00+08:00",
  "tag_ids": [
    3672,
    3673
  ]
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
Content-Type: application/json; charset=utf-8
Vary: Accept, Origin
ETag: W/"9da2ff23d8de380be532326574dfc905"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 56608a2c-77a5-475c-8dbe-12001a258836
X-Runtime: 0.011202
Content-Length: 673
```

**Status**

```text
200 OK
```

**Body**

```json
{
  "resource": {
    "id": 2410,
    "user_id": 1394,
    "amount": 9900,
    "note": null,
    "tag_ids": [
      3672,
      3673
    ],
    "happened_at": "2020-10-30T00:00:00.000+08:00",
    "created_at": "2023-04-17T22:26:39.904+08:00",
    "updated_at": "2023-04-17T22:26:39.904+08:00",
    "kind": "expenses",
    "deleted_at": null,
    "happen_at": "2020-10-30T00:00:00.000+08:00",
    "tags": [
      {
        "id": 3673,
        "user_id": 1394,
        "name": "Qui.",
        "sign": "❤",
        "deleted_at": null,
        "created_at": "2023-04-17T22:26:39.892+08:00",
        "updated_at": "2023-04-17T22:26:39.892+08:00",
        "kind": "expenses"
      },
      {
        "id": 3672,
        "user_id": 1394,
        "name": "Ame.",
        "sign": "😀",
        "deleted_at": null,
        "created_at": "2023-04-17T22:26:39.889+08:00",
        "updated_at": "2023-04-17T22:26:39.889+08:00",
        "kind": "expenses"
      }
    ]
  }
}
```
