$(function(){
	/*
	 
	 * 放大镜功能区
	 * */
	glass={
		small:$('.small'),
		filter:$('.filter'),
		large:$('.large'),
		bigImg:$('.bigImg'),
		content:$('.big-img'),
		init:function(){
			this.mouseMove();
			this.show();
			this.hide();
		},
		//鼠标移动 
		mouseMove:function(){
			var that=this;
			this.small.on('mousemove',function(e){
				//获取鼠标的位置在small区域的位置（思考为啥不用e.offsetX或者e.offsetY获取？）
				e=e||window.event;
				//console.log(e.clientX,e.clientY);
				//console.log(that.small.offset().left,that.small.offset().top);
				var l=e.clientX-that.small.offset().left;
				var t=e.clientY-that.small.offset().top;
				//console.log(l,t);
				//边界处理
				l=l<50?50:(l>230?230:l);
				t=t<50?50:(t>314?314:t);
				//改变滤镜的位置
				that.filter.css({
					left:l-50,//获取中心位置
					top:t-50
				});
				//大图片跟随(难点，重点)
				that.bigImg.css({
					left:-2*(l-50),
					top:-2*(t-50)
				});
			});	
		},
		show:function(){
					var _this=this;
					this.small.on('mouseenter',function(){
						_this.filter.show();
						_this.large.show();
						_this.large.stop(true).animate({
							width:200,
							height:200,
							opacity:1,
							right:-250
						},1000);
						/*_this.small.find('img').animate({
							opacity:0.5
						},200);*/
					});
				},
		hide:function(){
			var _this=this;
			this.small.on('mouseleave',function(){
				_this.filter.hide();
				//_this.large.hide();
				_this.large.stop(true).animate({
							width:0,
							height:0,
							opacity:0,
							right:0
						},1000);
				/*_this.small.find('img').animate({
							opacity:1
						},200);*/
			});
		}
	};
	glass.init();
	
	
	
	/*
	 
	 * 点击切换图片
	 * */
	var goodsInfos=$('.goodsInfos');
	goodsInfos.find('.slideBox ul li').each(function(k,v){
		//console.log(v);
		$(v).on('click',function(){
			var srcStr=$(this).find('img').attr("src");
			goodsInfos.find('.small img').attr("src",srcStr);
		});
		/*(function(key){
			//console.log(key);
		})(k)*/
	});
});
