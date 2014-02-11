function html2str(text,type){
  // 默认使用逗号
  type = type||",";
  if(type==","){
    var newStr = "[\n'"+text                  // 加入括号
    .replace(/\\/g,"\\\\")                    // 字符串中\换成\\
    .replace(/'/g,"\\'")                      // 字符串中/换成\/
    .replace(/(\/script>\n)/g,"\\$1")         // 字符串"/script"需要转换成"\/script";
    .replace(/\n([ ]*)/g,"',\n$1'")           // 数组核心替换，自己思考。
    +"'].join('')";                           // 加入结尾
    return newStr;
  }else if(type=="+"){
    var newStr = "'"+text
    .replace(/\\/g,"\\\\")
    .replace(/'/g,"\\'")
    .replace(/(\/script>\n)/g,"\\$1")
    .replace(/\n([ ]*)/g,"'+\n$1'")
    +"'";
    return newStr;
  }
}

function str2html(text,type){
  // 默认使用逗号
  type = type||",";
  if(type==","){
    var newStr = text
    .replace(/\[[ ]*\n[ ]*'/,"")
    .replace(/'][.]join\(''\)/,"")
    .replace(/',\n([ ]*)'/g,"\n$1")
    .replace(/\\\/script>\n/g,"\/script>\n")
    .replace(/\\'/g,"'")
    .replace(/\\\\/g,"\\")
    return newStr;
  }else if(type=="+"){
    var newStr = text
    .substr(1,text.length-2)
    .replace(/'[+]\n([ ]*)'/g,"\n$1")
    .replace(/\\\/script>\n/g,"\/script>\n")
    .replace(/\\'/g,"'")
    .replace(/\\\\/g,"\\")
    return newStr;
  }
}

