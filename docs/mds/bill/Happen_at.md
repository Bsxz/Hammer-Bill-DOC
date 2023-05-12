# 账目 API

### 统计信息（按happen_at分组）

**GET /api/v1/items/summary**

### Parameters

|Name | Description|
|:-|:-|
|happened_after <font style=float:right color=red>required</font>| 时间起点|
|happened_before &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  <font style=float:right color=red>required</font> |时间终点|
|kind <font style=float:right color=red>required</font>| 账目类型|
|group_by   <font style=float:right color=red>required</font> |分组依据|

### Response Fields

|Name| Description|
|:-|:-|
|groups| 分组信息|
|total |总金额（单位：分）|

### Request

**Headers**

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMzk2LCJleHAiOjE2ODE3NDg3OTl9.7JNYt9LibMnViHksgBAOsVTUK0kqEoW4OHCPsj_7JBg
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```

### Route

```GET /api/v1/items/summary?happened_after=2018-01-01&happened_before=2019-01-01&kind=expenses&group_by=happen_at```

### Query Parameters

```text
happened_after: 2018-01-01
happened_before: 2019-01-01
kind: expenses
group_by: happen_at
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
ETag: W/"367cc286c8a36499c731aa3f1e53adaa"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 9a71661c-442c-4616-897b-2a0910b71bfe
X-Runtime: 0.008105
Content-Length: 177
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
      "happen_at": "2018-06-20",
      "tag": null,
      "amount": 300
    },
    {
      "happen_at": "2018-06-19",
      "tag": null,
      "amount": 300
    },
    {
      "happen_at": "2018-06-18",
      "tag": null,
      "amount": 300
    }
  ],
  "total": 900
}
```
