# git

git 就不用多介绍了

## 下载地址

[下载地址](https://git-scm.com/)

## 文档

[英文文档](https://git-scm.com/book/en/v2)

[中文文档](https://git-scm.com/book/zh/v2)

[速查手册](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)

## 常用命令行

### ssh 公钥

```md
cd ~/.ssh
ls 查看是否有一对以 id_dsa 或 id_rsa 命名的文件
没有则要生成秘钥
ssh-keygen -t rsa -C "xx@xx.com"
查看公钥
cat ~/.ssh/id_rsa.pub
```

### 创建仓库

#### 从目录中初始化仓库

```md
git init
git remote add origin <url>
git push -u origin main
```

::: tip
-u 选项是--set-upstream 的简写

github 从 2020 年开始，仓库默认主分支已从 master 改为 main
:::

#### 克隆已有的仓库

```md
git clone <url>
可以指定新的名字
git clone <url> newNmae
```

#### 修改仓库远程地址

```md
git remote set-url origin <url>
```

### 命令行配置参数

作用域（从大到小）

```md
--system
--global
--local
```

不带参数则为三者相加

```md
git config --list = git config (--system + --global + --local) --list
```

新增/修改

```md
git config --global user.name 'xx'
git config --global user.email 'xx@xx.com'
```

删除配置

```md
git config --global --unset user.name
```

查看所有配置

```md
git config --global --list
```

查看某一项

```md
git config --global user.name
```

### .gitignore 忽略文件

.gitignore 文件格式规范如下：

- 所有空行或者以 # 开头的行都会被 Git 忽略。
- 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。
- 匹配模式可以以（/）开头防止递归。
- 匹配模式可以以（/）结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。

```txt
忽略已.o 或.a 结尾的文件
*.[oa]

忽略~结尾的文件
*~

忽略所有的 .a 文件
*.a

但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

忽略任何目录下名为 build 的文件夹
build/

忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

::: tip
[gitignore](https://github.com/github/gitignore)有各语言忽略文件列表
:::

### 查看状态

#### 检查当前文件状态

```md
git status
```

### 提交

```md
进入 vim 编辑环境
git commit

提交信息与命令同一行
git commit -m 'description'

跳过 add 暂存，直接提交修改文件
git commit -a -m 'description'
```

### 删除文件

```md
简单删除
git rm

如果已暂存则
git rm -f

保留本地，删除远程
git rm --cached <fileNmae>

支持 glob 模式
删除 log 目录下.log 结尾文件
git rm log/\*.log

删除所有名字以 ~ 结尾的文件
git rm \*~
```

### 移动文件（重命名）

```md
git mv file_from file_to
相当于三条命令缩写
mv README.md README
git rm README.md
git add README
```

### 提交历史

```md
git log

最近两条提交引入的差异
git log -p (--patch) -2

每次提交的简略统计信息
git log --stat

格式化输出,可以带参 oneline， short，full 和 fuller
git log --pretty

自定义提交格式
git log --pretty=format:"%h - %an, %ar : %s"

oneline 和 format 可以结合 graph
git log --pretty=format:"%h %s" --graph

查找修改了特定内容的提交（-S pickaxe）
git log -S function_name
```

### 撤销操作

```md
修改提交，将暂存区中的文件重新提交
git commit --amend
撤销暂存区文件
git reset HEAD <file>
撤销修改，会将文件恢复到上一次 commit 后状态
git checkout -- <file>
```

### 远程仓库

```md
查看所有远程仓库
git remote -v
添加远程仓库
git remote add <shortname> <url>
从远程拉取所有本地还没有的数据,但不合并
git fetch <remote>
拉取当前分支最新数据并合并
git pull
推送
git push <remote> <branch>
查看远程信息
git remote show <remote>
远程重命名
git remote rename origin wx
远程移除
git remote remove origin
```

### 打标签

```md
列出已有标签
git tag -l (--list)
查询具体信息
git tag -l "v1.8.5\*"
```

#### 轻量标签（lightweight）

```md
git tag v1.3
```

#### 附注标签（annotated）

包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证

```md
git tag -a v1.4 -m "my version 1.4"
git show v1.4
```

#### 后期打标签（补标签）

```md
带上校验和
git tag -a v1.2 9fceb02
```

#### 共享标签

默认情况下，git push 命令并不会传送标签到远程仓库服务器

```md
git push origin <tagname>
git push origin v1.5
一次性推送多条标签
git push <remote> --tags
git push origin --tags
```

#### 删除标签

```md
git tag -d <tagname>
删除本地标签后，需要推送到远程仓库才能删除远程标签
git push <remote> :refs/tags/<tagname>
直观的删除远程标签
git push origin --delete <tagname>
```

### 别名

```md
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
执行外部命令时，在命令前加!
git config --global alias.visual '!gitk'
```

### 分支

```md
创建分支
git branch <name>
切换分支
git checkout <name>
创建并切换分支
git checkout -b <name>
删除分支
git branch -d <name>
查看所有分支
git log --oneline --decorate --graph --all
合并分支（假定位于 main,目标 hotfix，冲突时 git status 查看，并建议手动合并冲突文件）
git merge hotfix
查看本地所有分支最后一次提交
git branch -v
查看已经合并或未合并到当前分支的分支 --merged --no-merged
git branch --merged
查看尚未合并到 main 分支的分支
git branch --no-merged main
删除未合并分支会报错，可以使用-D 强制删除（慎用）
git branch -D <name>
```

#### 远程分支

```md
git ls-remote <remote>
git remote show <remote>
拉取远程数据
git fetch <remote>
推送分支到远程
git push <remote> <branch>
拉取本地没有的远程分支，合入本地分支
git merge <remote>/<branch>
拉取本地没有的远程分支，在本地创建此分支
git checkout -b <branch> <remote>/<branch>
设置已有的本地分支跟踪一个刚刚拉取下来的远程分支
git branch -u <remote>/<branch>
查看设置的所有跟踪分支
git branch -vv
删除远程分支
git push <remote> --delete <branch>
```

### 变基

```md
变基本质与分支并无差别，但能使提交历史串行，变得简洁
假设有分支 main 和 hotfix
1.git checkout hotfix
2.git rebase main
3.git checkout main
4.git merge hotfix
1.,2.和 3.命令简写
git rebase <basebranch> <topicbranch>
git rebase main hotfix
变基分支的分支
出 client 分支，找出它从 server 分支分歧之后的补丁， 然后把这些补丁在 main 分支上重放一遍，让 client 看起来像直接基于 main 修改一样
1.git rebase --onto main server client
2.git checkout main
3.git merge client
注意：变基带来的影响决定其不适用于远程公共环境而适用于本地开发。
```
