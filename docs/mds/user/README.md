# 当前用户 API

### 获取当前用户

**GET /api/v1/me**

### Request

**Headers**

```json
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMzk5LCJleHAiOjE2ODE3NDg4MDB9.OvidYsa0slsrSPez0GSenrmA3RRprdHk-pWyTyQ1IRI
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:

```

### Route

**GET /api/v1/me**

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
ETag: W/"571c193263ea3d3178c4d9c81461e050"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 2157a8e2-9049-4b77-8514-564cd8b051dd
X-Runtime: 0.004264
Content-Length: 152

```

**Status**

```text
200 OK
```

**Body**

```json
{
  "resource": {
    "id": 1399,
    "email": "jules@brekke.co",
    "name": null,
    "created_at": "2023-04-17T22:26:40.041+08:00",
    "updated_at": "2023-04-17T22:26:40.041+08:00"
  }
}

```
