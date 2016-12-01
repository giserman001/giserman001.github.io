/*
 newLeft区域的功能
 * */
$(function(){
	var newLeft={
		newLeft:$('#newLeft'),
		init:function(){
			this.mouseenterLeft();
			this.mouseleaveLeft();
		},
		//鼠标移入品牌系列显示二级菜单
		mouseenterLeft:function(){
			var that=this;
			this.newLeft.find('ul li.MenuItemLi .change').on('mouseenter',function(){
				//alert(1);
				$(this).next().stop(true).animate({
					width:74,
					height:'100%',
					opacity:1
				},300).show();
			});
		},
		mouseleaveLeft:function(){
			var that=this;
			this.newLeft.find('ul li.MenuItemLi').on('mouseleave',function(){
				//alert(1);
				$(this).find('.change').next().stop(true).animate({
					width:0,
					height:0,
					opacity:0
				},300,function(){
					$(this).hide();
				})
			});
		}
	};
	newLeft.init();
});
