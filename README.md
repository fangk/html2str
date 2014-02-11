# html与str互相转换。
## why
在使用js模板的时候，我们需要将一段html模板以字符串的形式引入。
*  用ajax取。（代码最好看，浪费一个请求数！）
*  写在<script type="text/html" id="testHTML"></script>里。（代码相对好看。一次取dom的IO）
*  写在字符串里。（代码比较难看，执行效率最高）

## 前两种是硬伤，我想让第三种发挥点作用。让代码稍微好看一点。
写字符串里主流的方法分三种，分别是 \,数组，+
![](https://raw.github.com/fangk/html2str/master/src/img/show.jpg)

反斜杠的模式我不怎么赞同，因为代码压缩的时候字符串是不压缩的！
所以html2str就是针对数组模式和+号模式进行转换，
在代码压缩的时候都会把它们合并成一行字符串。





