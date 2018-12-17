//登录
//		$(".loginbtn").click( function () {
//			if($(".phoneNumber").val()!='' && $(".passWord").val()!=''){
//			$.ajax({
//				type:"post",
//				url:"login.php",
//				async:true,
//				data:{
//					'phoneNumber' : $(".phoneNumber").val(),
//					'passWord' : $(".passWord").val()
//				},
//				success:function(data){
//					if(data == 0){
//						alert("账号或者密码错误");
//					}else if(data == 1){
//						alert("登陆成功")
//						location.href="index.html";
//					}
//				}
//			});
//		}
//		
//	});
function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	


function logins(){
	$(".loginbtn").onclick = function(){
		let xhr = new XMLHttpRequest();
		xhr.open("post","login.php",true);
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="0"){
					$("spanError").style.display = "block";
				}else{
					//保存cookie
					addCookie("phoneNumber",$(".phoneNumber").value,7);
					addCookie("passWord",$(".passWord").value,7);
					location.href = "index.html";
				}
			} 
		}	
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let sendStr="phoneNumber="+$(".phoneNumber").value+"&passWord="+$(".passWord").value;
		xhr.send(sendStr);
	}
}