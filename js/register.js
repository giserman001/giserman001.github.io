$(function(){
	register={
		username:$('#phone'),
		yanzhenma:$('#yanzhenma'),
		yz_code:$('#yz_code'),
		password:$('#password'),
		password2:$('#password2'),
		loginBtn:$('.login_btn'),
		init:function(){
			this.verifyusername();
			this.verificationCode();
			this.clickyanzhenma();
			this.VerificationPassword();
			this.VerificationPasswordAgain();
			this.clickRegister();
		},
		//验证用户名
		verifyusername:function(){
			var that=this;
			//手机号正则
			var reg=/^1[34578]\d{9}$/;
			//失去焦点
			 this.username.on('blur',function(){
			 	
				var phone=that.username.val();
				
				$(this).parent().css({
					borderColor:'#e24a4a'
				})
				if(phone==''){
					$(this).next().show().children().html('手机用来登录，不能为空');
					return;
				}
				if(!(reg.test(phone))){
					$(this).next().show().children().html('手机格式错误');
				}
				//获取cookie
				var cookieValue=$.cookie('user');
				cookieValue=JSON.parse(cookieValue)
				//console.log(cookieValue);
				if(cookieValue!=undefined&&cookieValue!={}){
					for(var key in cookieValue){
						if(phone==cookieValue[key]['username']){
							$(this).next().show().children().html('该手机已被注册');
							return;
						}
					}
				}
				
				$(this).parent().css({
					borderColor:'#c5c8c6'
				})
			 });
			 //再次获焦
			 this.username.on('focus',function(){
			 	$(this).parent().css({
					borderColor:'#c5c8c6'
				})
			 	$(this).next().hide()
			 });
		},
		//验证验证码
		verificationCode:function(){
			var arr=['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			var str='';
			for(var i=0;i<4;i++){
				str+=arr[Math.floor((Math.random()*36))];
			}
			//console.log(str);
			this.yanzhenma.next().children().eq(0).html(str);
			this.yanzhenma.on('blur',function(){
				$(this).parent().css({
					borderColor:'#e24a4a'
				})
				//判断验证码是否为空
				if($(this).val()==''){
					$(this).next().next().show().children().html('验证码不能为空');
					return;
				}
				//判断验证码是否正确
				if($(this).val()!=$(this).next().children().eq(0).html()){
					$(this).next().next().show().children().html('验证码不正确');
				}
				$(this).parent().css({
					borderColor:'#c5c8c6'
				})
				
			});
			//重新获焦
			this.yanzhenma.on('focus',function(){
				$(this).parent().css({
					borderColor:'#c5c8c6'
				})
			 	$(this).next().next().hide()
			});
		},
		//点击刷新验证码。。
		clickyanzhenma:function(){
			var that=this;
			this.yanzhenma.next().children().eq(1).on('click',function(e){
				e.stopPropagation();
				var arr=['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				var str='';
				for(var i=0;i<4;i++){
					str+=arr[Math.floor((Math.random()*36))];
				}
				//console.log(str);
				that.yanzhenma.next().children().eq(0).html(str);
			});
		},
		//密码验证
		 VerificationPassword:function(){
		 	var that=this;
		 	var reg=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
		 	this.password.on('blur',function(){
		 		$(this).parent().css({
					borderColor:'#e24a4a'
				});
		 		var val=that.password.val();
		 		//console.log(val);
		 		if(val==''){
		 			$(this).next().show().children().html('密码不能为空');
		 			return;
		 		}
		 		if(val.length<6){
		 			$(this).next().show().children().html('密码太短啦，不足6个字符');
		 			return;
		 		}
		 		if(!(reg.test(val))){
		 			$(this).next().show().children().html('密码不能包含@!#$%^&*.~以外的特殊字符');
		 		}
		 		$(this).parent().css({
					borderColor:'#c5c8c6'
				})
		 	});
		 	//获取焦点
		 	this.password.on('focus',function(){
		 		$(this).parent().css({
					borderColor:'#c5c8c6'
				})
		 		$(this).next().hide();
		 	})
		 },
		 //密码验证
		 VerificationPasswordAgain:function(){
		 	var that=this;
		 	this.password2.on('blur',function(){
		 		var val=$(this).val();
		 		$(this).parent().css({
					borderColor:'#e24a4a'
				});
		 		//判断是否与第一次输入的是否一致
		 		if(val!=that.password.val()){
		 			$(this).next().show().children().html('密码不一致');
		 			return;
		 		}
		 		$(this).parent().css({
					borderColor:'#c5c8c6'
				});
		 	});
		 	//获取焦点
		 	this.password2.on('focus',function(){
		 		$(this).parent().css({
					borderColor:'#c5c8c6'
				})
		 		$(this).next().hide();
		 	})
		 },
		 //点击立即注册
		 clickRegister:function(){
		 	var that=this;
		 	this.loginBtn.on('click',function(){
		 		//判断是否勾选
		 		if(!($('.remember label input').prop('checked'))){
		 			alert('请勾选 我已阅读并同意《麦考林用户注册协议》');
		 			return;
		 		}
		 		/*
		 		 
		 		 * 利用cookie模拟数据库（来判断是否被其他人注册了）
		 		 * 
		 		 * 
		 		 * */
		 		//将用户信息写入cookie中
		 		//获取cookie名
		 		var phones=that.username.val();
		 		//console.log(typeof phones);
		 		var passwords=that.password.val();
		 		var user=$.cookie('user')||'{}';
		 		user=JSON.parse(user);
		 		user[phones]={
		 			"username":phones,
		 			"password":passwords
		 		}
		 		//重新写入cookie
				$.cookie('user',JSON.stringify(user),{expires:365,path:'/'});
		 		console.log(JSON.parse($.cookie('user')));
		 		alert('恭喜注册成功');
		 	});
		 }
	};
	register.init();
});
