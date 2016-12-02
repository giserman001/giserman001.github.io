/*
    newRight区域的功能
 * */
$(function(){
	var newRight={
		newRight:$('#newRight'),
		init:function(){
			this.mouseenterPhone();
			this.mouseleavePhone();
			this.scrollTop();
			this.clickScrollTop();
		},
		//鼠标移入"咨询电话区域"
		mouseenterPhone:function(){
			this.newRight.find('#right-phone').on('mouseenter',function(){
				//alert(1);
				$(this).find('.right-kefu').stop(true).animate({
					left:-231,
					opacity:1
				},600).show();
			});
		},
		//鼠标移出"咨询电话区域"
		mouseleavePhone:function(){
			this.newRight.find('#right-phone').on('mouseleave',function(){
				$(this).find('.right-kefu').stop(true).animate({
					left:-300,
					opacity:0
				},500,function(){
					$(this).hide()
				});
			});
		},
		//回到顶部
		scrollTop:function(){
			var that=this;
			$(window).scroll(function(){
				var t = $(this).scrollTop();
				if(t >= 100){
					that.newRight.find('.newTop').fadeIn(1000);
				}else{
					that.newRight.find('.newTop').fadeOut(1000);
				}
			});
		},
		//点击回到顶部
		clickScrollTop:function(){
			//按钮点击
			this.newRight.find('.newTop').click(function(){
					//回到顶部
					$('html,body').animate({scrollTop:0},500);
				});
		}
	};
	newRight.init();
});
