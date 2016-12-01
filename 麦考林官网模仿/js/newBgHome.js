/*
 莫态框里的功能
 * */


$(function(){
	var modal={
		newBgHome:$('#newBgHome'),
		init:function(){
			var that=this;
			this.newBgHome.find('span').on('click',function(){
				//alert(1);
				that.newBgHome.hide();
			});
		}
	};
	modal.init();
});
