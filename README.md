# ayxargs - a weak xargs tool in Node.js

## 1. Code

所有的代码都在 ayxargs 文件中，js 文件

## 2. 测试用例

1. test文件夹中有多个 .js 文件，测试脚本：`ls *.js | ayxargs -n 3 wc -l` 和 `ls *.js | ayxargs wc -l` 分别测试使用参数 `n` 和不使用参数 `n` 的两种情况。

2. 测试脚本：`echo {0..4} | ayxargs -n 2 echo` ，与上面类似，测试数据只包含数字。

3. 测试脚本：`cat README.md | ayxargs -n 2`，测试对特殊字符的支持情况。特殊字符包括 ``、 |、 #、 \、 @$%^&*()` ""

## 3. 功能实现情况说明

1. 实现了 xargs 不处理 `\、'、"` 三个符号的feature

2. 实现了参数 `n` 的题目要求

3. 未实现 Bonus 参数 `p`  
