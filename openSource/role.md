# role

[github](https://github.com/wxyzqt/role)

Role 角色控制类

## 使用

```sh
npm i @wxyzqt/role
```

```js
import { Role } from "@wxyzqt/role";

const userRole = new Role("admin,user");

console.log(userRole.getRoles()); // ['admin', 'user']

consle.log(userRole.getRolesStr()); // 'admin,user'

userRole.delRoles("admin");

console.log(userRole.getRoles()); // ['user']

consle.log(userRole.hasAccess("admin")); // false

consle.log(userRole.hasAccess(["user", "visitor"])); // true
```

详细请参考文档[docs](https://wxyzqt.github.io/role/classes/Role.html)
