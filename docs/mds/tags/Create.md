# 标签API

### 创建标签

**POST /api/v1/tags**

### Parameters

|Name|Description|
|  :- |  :- |
|name <font style=float:right color=red>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require</font>|名称|
|sign <font style=float:right color=red>require</font>|符号|
|kind <font style=float:right color=red>require</font>|类型|

### Response Fields

| Name | Description |
|:-|:-|
| resource[id]   | ID |
| resource[name]    | 名称 |
| resource[sign]  | 符号|
| resource[user_id]    | 用户ID |
| resource[deleted_at]    | 删除时间 |

### Request

**Headers**

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNDAzLCJleHAiOjE2ODE3NDg4MDB9.7lD9WmHR5jpGeoiQ_ZfUIPy2GCZgdPzhA372EIF2B6s
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie: 
```

**Demo Route**

```text
POST /api/v1/tags
```

**Demo Body**

```json
{
  "name": "x",
  "sign": "x",
  "kind": "income"
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
ETag: W/"5e6330e0efb0c89801bf198c823cc691"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: c8df7f4d-eb32-4ed1-bc32-dd604ea4558f
X-Runtime: 0.004273
Content-Length: 185
```

**Status**

```text
200 OK
```

**Body**

```json
{
  "resource": {
    "id": 3707,
    "user_id": 1403,
    "name": "x",
    "sign": "x",
    "deleted_at": null,
    "created_at": "2023-04-17T22:26:40.142+08:00",
    "updated_at": "2023-04-17T22:26:40.142+08:00",
    "kind": "income"
  }
}
```
