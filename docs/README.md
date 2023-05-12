## 记账API文档

#### 注意事项

1.happen_at 全都应该重命名为 happened_at （目前会同时输出这两个字段）<br/>
2.happen_after 参数全都应该重命名为 happened_after（happen_before 同理）<br/>
3.表单错误时，后端会返回
``` json
{
  "errors": {
    "field": ["中文报错"]
  }
}
```
前端可以把这个错误信息直接展示给用户
