# docker

统一的软件运行环境管理

## 链接

[website](https://www.docker.com/)

[术语表](https://docs.docker.com/reference/glossary/)

考虑到 docker 国内访问经常受限，可以访问 github 上的文档库

[docker docs](https://github.com/docker/docs)

## 代理配置

docker desktop 可以配置 daemon.json

```json
{
  "experimental": false,
  "registry-mirrors": [
    "https://docker.m.daocloud.io/",
    "https://dockerproxy.com",
    "https://docker.nju.edu.cn",
    "https://mirror.aliyuncs.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```
