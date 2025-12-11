# vscode (windows)

## 步骤

安装 VS Code。

安装 C++ 扩展（如 Microsoft C/C++）。

安装编译器（Windows 推荐 MinGW 或 MSVC）。

配置环境变量（如将 g++ 添加到 PATH）。

创建 tasks.json 用于编译。

创建 launch.json 用于调试。

编写并运行 C++ 代码。

## 详细操作

- 下载并安装 VS Code。

- 打开 VS Code，插件搜索并安装 "C/C++"（Microsoft）。

- 下载 [MinGW](https://sourceforge.net/projects/mingw/)，安装后将 bin 目录添加到系统环境变量 PATH。

- 在 VS Code 中按 Ctrl+Shift+P，选择 "C/C++: Edit Configurations (UI)"，自动生成 `tasks.json` 和 `launch.json`，没有生成就手动创建一下。

- 示例 tasks.json（.vscode/tasks.json）：

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build",
      "type": "shell",
      "command": "g++",
      "args": [
        "-g",
        "${file}",
        "-o",
        "${fileDirname}\\${fileBasenameNoExtension}.exe"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": ["$gcc"]
    }
  ]
}
```

- 示例 launch.json（.vscode/launch.json）：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "C++ Launch",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": true,
      "MIMode": "gdb",
      "miDebuggerPath": "D:\\software\\mingw\\bin\\gdb.exe",
      "preLaunchTask": "build"
    }
  ]
}
```

- 新建 .cpp 文件，写代码，按 Ctrl+Shift+B 编译，F5 调试。
