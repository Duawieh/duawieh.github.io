$("#homepageCenterShowcaseTitle_Title").load("./test.txt");

// function loadXMLDoc(){
// 	var xmlhttp;
// 	// 1，建立xmlHttpRequest对象
// 	if(window.XMLHttpRequest){
// 		xmlhttp = new XMLHttpRequest();
// 	}
// 	else{
// 		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	// 2，设置回调函数
// 	xmlhttp.onreadystatechange=callback;
// 	// 3，使用open方法与服务器建立连接
// 	xmlhttp.open("GET","test.txt",true);
// 	// 4，向服务器端发送数据
// 	xmlhttp.send();
// 	// 5，在回调函数中针对不同呃响应状态进行处理
// 	function callback(){
// 		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
// 		//注意： onreadystatechange 事件被触发 4 次（0 - 4）, 分别是： 0-1、1-2、2-3、3-4，对应着 readyState 的每个变化。
// 			document.getElementById("homepageCenterShowcaseTitle_Title").innerHTML = xmlhttp.responseText;
// 		}
// 	}
// }

