$(function(){
	login={
		username:$('#phone'),
		password:$('#password'),
		yanzhenma:$('#yanzhenma'),
		remember:$('#remember'),
		loginBtn:$('.login_btn'),
		init:function(){
			this.usernameCheck();
			this.passwordCheck();
			this.autologin();
			this.yanzhenmaCheck();
			this.clickyanzhenma();
			this.clicklogin();
		},
		//验证用户名
		usernameCheck:function(){
			//失去焦点
			this.username.on('blur',function(){
				var val=$(this).val();
				//console.log(val);
				$(this).parent().css({
						borderColor:'#e24a4a'
					})
				if(val.length>0){
					$(this).parent().css({
						borderColor:'#c5c8c6'
					})
				}
			});
			//获得焦点
			this.username.on('focus',function(){
				var val=$(this).val();
				//console.log(val);
				$(this).parent().css({
						borderColor:'#c5c8c6'
				})
			});
		},
		//验证密码
		passwordCheck:function(){
			//失去焦点
			this.password.on('blur',function(){
				var val=$(this).val();
				//console.log(val);
				$(this).parent().css({
						borderColor:'#e24a4a'
					})
				if(val.length>0){
					$(this).parent().css({
						borderColor:'#c5c8c6'
					})
				}
			});
			//获得焦点
			this.password.on('focus',function(){
				var val=$(this).val();
				//console.log(val);
				$(this).parent().css({
						borderColor:'#c5c8c6'
				})
			});
		},
		//验证验证码
		yanzhenmaCheck:function(){
			var arr=['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			var str='';
			for(var i=0;i<4;i++){
				str+=arr[Math.floor((Math.random()*36))];
			}
			//console.log(str);
			this.yanzhenma.next().children().eq(0).html(str);
			//失去焦点
			this.yanzhenma.on('blur',function(){
				var val=$(this).val();
				//console.log(val);
				$(this).parent().css({
						borderColor:'#e24a4a'
					})
				if(val.length>0){
					$(this).parent().css({
						borderColor:'#c5c8c6'
					})
				}
			});
			//获得焦点
			this.yanzhenma.on('focus',function(){
				var val=$(this).val();
				//console.log(val);
				$(this).parent().css({
						borderColor:'#c5c8c6'
				})
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
		//判断是否自动登录
		autologin:function(){
			/*
				判断是否存在用户名（用户是否曾经点击过【自动登录】）
			*/
			//console.log(JSON.parse($.cookie('username'))['username']);
			if( $.cookie('username')!=''&&$.cookie('username')!=undefined ){
				this.username.val(JSON.parse($.cookie('username'))['username']);
				this.password.val(JSON.parse($.cookie('username'))['password']);
				this.remember.prop('checked',true);
			}
			//console.log(user);
			var that=this;
			this.remember.on('click',function(){
				if(that.remember.prop('checked')){
					var phones=that.username.val();
			 		var passwords=that.password.val();
					var cookie=$.cookie('username')||'{}';
					cookie=JSON.parse(cookie);
					cookie={
			 			"username":phones,
			 			"password":passwords
			 		}
					//重新写入cookie
					$.cookie('username',JSON.stringify(cookie),{expires:365,path:'/'});
				}
			});
		},
		//点击登录按钮
		clicklogin:function(){
			var that=this;
			this.loginBtn.on('click',function(){
				
				var value1=that.username.val();
				var value2=that.password.val();
				//console.log(value1);
				if(that.username.val()==''){
					that.yanzhenma.next().next().show().children().html('手机号未填写或格式不正确');
						return;
				}
				if(that.password.val()==''){
					that.yanzhenma.next().next().show().children().html('请填写密码');
						return;
				}
				if(that.yanzhenma.val()==''){
					that.yanzhenma.next().next().show().children().html('请填写验证码');
						return;
				}
				//判断验证码是否正确
				if(that.yanzhenma.val()!=that.yanzhenma.next().children().eq(0).html()){
					that.yanzhenma.next().next().show().children().html('验证码不正确');
					return;
				}
				//获取cookie
				var use=JSON.parse($.cookie('user'));
				//console.log(use);
				var status=true;//开关状态
				for(var key in use){
					if(value1==use[key]['username']||value2==use[key]['password']){
						status=false;
					}
				}
				if(status){
					that.yanzhenma.next().next().show().children().html('用户名或者密码不正确1');
					return;
					}
				//重置开关状态
				status=true;
				//隐藏所有的红色字体
				that.yanzhenma.next().next().hide();
				alert('登录成功');
			});
		}
	};
	login.init();
});
