# 标签 API

### 获取标签列表

**GET /api/v1/tags**

### Parameters

|Name |Description|
|:-:|:-:|
|page |页码|
|kind| 类型|

### Response Fields

|Name| Description|
|:-|:-|
|resources[id]| ID|
|resources[name]    |名称|
|resources[sign]    |符号|
|resources[user_id]    |用户ID|
|resources[deleted_at]    |删除时间|

### Request

**Headers**

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNDAyLCJleHAiOjE2ODE3NDg4MDB9.HAjQfCLrgEC6khg7YESHSRmZXvBHngKA2Ylx-kcvIzg
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:
```

### Route

**GET /api/v1/tags**

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
ETag: W/"49d4e4056f94e0cc910783bcbff6b2bc"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 5cf7987c-85e6-4504-b197-3758758345d5
X-Runtime: 0.004765
Content-Length: 4573
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
      "id": 3706,
      "user_id": 1402,
      "name": "Vol.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.129+08:00",
      "updated_at": "2023-04-17T22:26:40.129+08:00",
      "kind": "expenses"
    },
    {
      "id": 3705,
      "user_id": 1402,
      "name": "Lab.",
      "sign": "😡",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.126+08:00",
      "updated_at": "2023-04-17T22:26:40.126+08:00",
      "kind": "expenses"
    },
    {
      "id": 3704,
      "user_id": 1402,
      "name": "Nul.",
      "sign": "😡",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.124+08:00",
      "updated_at": "2023-04-17T22:26:40.124+08:00",
      "kind": "expenses"
    },
    {
      "id": 3703,
      "user_id": 1402,
      "name": "Et .",
      "sign": "😡",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.122+08:00",
      "updated_at": "2023-04-17T22:26:40.122+08:00",
      "kind": "expenses"
    },
    {
      "id": 3702,
      "user_id": 1402,
      "name": "Odi.",
      "sign": "😀",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.120+08:00",
      "updated_at": "2023-04-17T22:26:40.120+08:00",
      "kind": "expenses"
    },
    {
      "id": 3701,
      "user_id": 1402,
      "name": "Ut .",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.118+08:00",
      "updated_at": "2023-04-17T22:26:40.118+08:00",
      "kind": "expenses"
    },
    {
      "id": 3700,
      "user_id": 1402,
      "name": "Et .",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.115+08:00",
      "updated_at": "2023-04-17T22:26:40.115+08:00",
      "kind": "expenses"
    },
    {
      "id": 3699,
      "user_id": 1402,
      "name": "Sim.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.113+08:00",
      "updated_at": "2023-04-17T22:26:40.113+08:00",
      "kind": "expenses"
    },
    {
      "id": 3698,
      "user_id": 1402,
      "name": "Cor.",
      "sign": "😡",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.111+08:00",
      "updated_at": "2023-04-17T22:26:40.111+08:00",
      "kind": "expenses"
    },
    {
      "id": 3697,
      "user_id": 1402,
      "name": "Ear.",
      "sign": "😀",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.109+08:00",
      "updated_at": "2023-04-17T22:26:40.109+08:00",
      "kind": "expenses"
    },
    {
      "id": 3696,
      "user_id": 1402,
      "name": "Exp.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.107+08:00",
      "updated_at": "2023-04-17T22:26:40.107+08:00",
      "kind": "expenses"
    },
    {
      "id": 3695,
      "user_id": 1402,
      "name": "Ita.",
      "sign": "😀",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.106+08:00",
      "updated_at": "2023-04-17T22:26:40.106+08:00",
      "kind": "expenses"
    },
    {
      "id": 3694,
      "user_id": 1402,
      "name": "Del.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.104+08:00",
      "updated_at": "2023-04-17T22:26:40.104+08:00",
      "kind": "expenses"
    },
    {
      "id": 3693,
      "user_id": 1402,
      "name": "Qui.",
      "sign": "😀",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.102+08:00",
      "updated_at": "2023-04-17T22:26:40.102+08:00",
      "kind": "expenses"
    },
    {
      "id": 3692,
      "user_id": 1402,
      "name": "Off.",
      "sign": "😀",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.100+08:00",
      "updated_at": "2023-04-17T22:26:40.100+08:00",
      "kind": "expenses"
    },
    {
      "id": 3691,
      "user_id": 1402,
      "name": "Nul.",
      "sign": "😡",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.097+08:00",
      "updated_at": "2023-04-17T22:26:40.097+08:00",
      "kind": "expenses"
    },
    {
      "id": 3690,
      "user_id": 1402,
      "name": "Aut.",
      "sign": "😡",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.095+08:00",
      "updated_at": "2023-04-17T22:26:40.095+08:00",
      "kind": "expenses"
    },
    {
      "id": 3689,
      "user_id": 1402,
      "name": "Dol.",
      "sign": "😀",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.092+08:00",
      "updated_at": "2023-04-17T22:26:40.092+08:00",
      "kind": "expenses"
    },
    {
      "id": 3688,
      "user_id": 1402,
      "name": "Mol.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.090+08:00",
      "updated_at": "2023-04-17T22:26:40.090+08:00",
      "kind": "expenses"
    },
    {
      "id": 3687,
      "user_id": 1402,
      "name": "Qui.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.088+08:00",
      "updated_at": "2023-04-17T22:26:40.088+08:00",
      "kind": "expenses"
    },
    {
      "id": 3686,
      "user_id": 1402,
      "name": "Ips.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.086+08:00",
      "updated_at": "2023-04-17T22:26:40.086+08:00",
      "kind": "expenses"
    },
    {
      "id": 3685,
      "user_id": 1402,
      "name": "Vel.",
      "sign": "😀",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.083+08:00",
      "updated_at": "2023-04-17T22:26:40.083+08:00",
      "kind": "expenses"
    },
    {
      "id": 3684,
      "user_id": 1402,
      "name": "Qui.",
      "sign": "😡",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.081+08:00",
      "updated_at": "2023-04-17T22:26:40.081+08:00",
      "kind": "expenses"
    },
    {
      "id": 3683,
      "user_id": 1402,
      "name": "Sed.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.078+08:00",
      "updated_at": "2023-04-17T22:26:40.078+08:00",
      "kind": "expenses"
    },
    {
      "id": 3682,
      "user_id": 1402,
      "name": "Fac.",
      "sign": "❤",
      "deleted_at": null,
      "created_at": "2023-04-17T22:26:40.075+08:00",
      "updated_at": "2023-04-17T22:26:40.075+08:00",
      "kind": "expenses"
    }
  ],
  "pager": {
    "page": 1,
    "per_page": 25,
    "count": 26
  }
}
```
