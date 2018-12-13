/*
功能：发送ajax请求
参数：
请求方式
请求地址
请求参数
是否异步
回调函数
返回值：无
*/
function ajax1(method, url, param, isAsync, func) {
	let xhr = new XMLHttpRequest();
	let urlAndParam = url;
	if(method.toLowerCase() == "get" && param != "") {
		urlAndParam += "?" + param;
	}
	xhr.open(method, urlAndParam, isAsync);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			func(xhr.responseText);
		}
	}
	if(method.toLowerCase() == "post") {
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(param);
	} else {
		xhr.send();
	}
}

//把参数写在对象里
/*
ajax2({
	url:"a.php",
	method:"get",
	param:"a=1&b=2",
	isAsync:"true",
	func:function(){}
})
*/
function ajax2(obj) {
	let xhr = new XMLHttpRequest();
	let urlAndParam = obj.url;
	if(obj.method.toLowerCase() == "get" && obj.param != "") {
		urlAndParam += "?" + obj.param;
	}
	xhr.open(obj.method, urlAndParam, obj.isAsync);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			obj.func(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase() == "post") {
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(obj.param);
	} else {
		xhr.send();
	}
}

/* 
参数是对象，并且有默认值；
ajax3({
	url:"a.php",
	param:"a=1&b=2",
	func=function(){}
})
*/
function ajax3(obj) {
	let defaultobj = {
		url: "#",
		method: "get",
		param: "",
		isAsync: true,
		func: null
	};
	for(let key in defaultobj) {
		if(obj[key]) {
			defaultobj[key] = obj[key];
		}
		//创建对象
		let xhr = new XMLHttpRequest();
		let urlAndParam = defaultobj.url;
		if(defaultobj.method.toLowerCase() == "get" && defaultobj.param != "") {
			urlAndParam += "?" + defaultobj.param;
		}
		xhr.open(defaultobj.method, urlAndParam, defaultobj.isAsync);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				defaultobj.func && defaultobj.func(xhr.responseText);

			}
			if(defaultobj.method.toLowerCase() == "post") {
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.send(defaultobj.param);
			} else {
				xhr.send();
			}
		}