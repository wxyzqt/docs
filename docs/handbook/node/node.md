# Nodejs

## 链接

[node](https://nodejs.org/zh-cn/learn/getting-started/introduction-to-nodejs)

## 基础概念

### 事件循环

默认情况下 nodejs 使用单个 js 线程，将非阻塞操作交给系统内核，内核调用其他线程完成操作后，通过回调通知 nodejs 进行轮询。

一次简化的事件循环流程如下：

- timers(计时器)：此阶段执行由 setTimeout()和 setInterval()调度的回调。
- pending callbacks(pending 状态的回调操作)：执行延迟到下一个循环迭代的 I/O 回调。
- idle, prepare(闲置，准备)：仅内部使用。
- poll(轮询)：检索新的 I/O 事件；执行与 I/O 相关的回调（除 timers,setImmediate()和 close callbacks 回调以外的其他回调）；Node 将在适当的时候阻塞在这里。
- check(检查)：此处调用 setImmediate 回调。
- close callbacks(关闭回调)：一些关闭回调，例如 socket.on("close",…)

setTimeout 属于 timers，setimmeate 属于 check 流程中的部分，而 prcess.nextTick 则不在事件循环之中。

传递给 prcess.nextTick 的回调总会在事件循环之前执行

:::warning
从 node11 开始，setImmediate 被废弃。
nodejs 事件循环机制与浏览器保持一致，建议使用 setTimeout(fn,0)来代替。
事件循环机制采用宏微任务的循环机制。
:::

### 宏任务和微任务

#### 宏任务（Macro Tasks）

宏任务通常指的是那些可以直接进入事件循环的任务，包括：

I/O 操作：如文件读写、网络请求等。

定时器：setTimeout, setInterval。

setImmediate（已经被废弃）。

执行脚本：整个脚本的执行就是一个宏任务。

#### 微任务（Micro Tasks）

微任务是在当前宏任务执行完毕后，但在下一个宏任务开始之前执行的。它们包括了：

Promise 的回调：例如 promise.then, promise.catch, promise.finally 的回调。

process.nextTick（在 Node.js 中，尽管被设计用于特定的用途，但在某些场景下也可以被视为微任务）。

queueMicrotask,将回调函数添加到当前宏任务结束后的微任务队列中。node 内置，浏览器支持[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#%E4%BB%BB%E5%8A%A1_vs_%E5%BE%AE%E4%BB%BB%E5%8A%A1)，这也是推荐的添加微任务的方式。
