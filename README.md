# ayxargs - a weak xargs tool in Node.js

## 1. Code

所有的代码都在 ayxargs 文件中，js 文件

## 2. 测试用例

1. test文件夹中有多个 .js 文件，测试脚本：`ls *.js | ayxargs -n 3 wc -l` 和 `ls *.js | ayxargs wc -l` 分别测试使用参数 `n` 和不使用参数 `n` 的两种情况。

2. 测试脚本：`echo {0..4} | ayxargs -n 2 echo` ，与上面类似，测试数据只包含数字。

3. 测试脚本：`cat README.md | ayxargs -n 2`，测试对特殊字符的支持情况。特殊字符包括 ``、 |、 #、 \、 @$%^&*()` ""

## 3. 功能实现情况

1. 实现了 xargs 不处理 `\、'、"` 三个符号的feature

2. 实现了参数 `n` 的题目要求

3. 未实现 Bonus 参数 `p`  

## 4. 时间情况

1. 4 小时：入门 node.js，过了一遍新手教程和官方文档

2. 1 小时：编码实现，大部分时间是在 Google 和 Stack Overflow 里翻阅遇到的问题和寻找可用的 library

3. 2 小时：测试改进，测试过程中发现测试用例3中的特殊字符需要特殊处理，查找解决方案和了解 xargs 的 feature 花了比较多时间

4. 0.5 小时：完善文档，上传 npm

## 5. 已知问题

1. 异常处理非常差，没有找到合适的处理机制，还在思考。

2. 参数 p 没有实现，node.js 的并发还没弄明白，还需要进一步思考。
