function requestMethod(par1,par2,par3,callback) {


//第一步.创建一个请求对象（负责去服务端要数据）
    var xhr = new XMLHttpRequest();
//第二步.建立与服务端的链接（找到哪个服务器去要数据）
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'  +par2);
//设置头信息,告诉服务器以表单的形式传递过去
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//第三步.向服务端发送数据
    xhr.send(par3);
//第四步,接受返回的数据
    xhr.onreadystatechange = function () {
        //xhr.readyState==4代表数据请求完成,xhr.status代表数据返回成功

        if (xhr.readyState == 4 && xhr.status == 200) {
            var responseData = JSON.parse(xhr.responseText);
           var returnStr=responseData.data;
           callback(returnStr);

        }
    }
}