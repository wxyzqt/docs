# 访问 github

众所周知，连接 github 需要一点帮助。

## 本地代理

本地代理是在本地局域网内设置一个代理服务器来转发网络请求，需要先在电脑上设置代理，相关方法搜索可得。

## 手动修改 hosts

系统不同，hosts 文件位置不同，windows 一般在下面位置

```md
c:\windows\system32\drivers\etc
```

## 加速工具（推荐）

[watt toolkit](https://steampp.net/)，我最近常用的，免费、随用随停。

::: tip
使用它加速时，会占用 ssl 端口，端口冲突时，停用刷新 dns 即可。
:::

```md
ipconfig /flushdns
```

[dev-sidecar](https://github.com/docmirror/dev-sidecar)，同样好用的加速工具，作为备选。

[SwitchHosts](https://github.com/oldj/SwitchHosts)，定时自动修改 hosts 文件，[安装包下载地址](https://github.com/oldj/SwitchHosts/releases)。
