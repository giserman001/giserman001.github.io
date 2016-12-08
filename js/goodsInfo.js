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
						_this.large.css("z-index",100000000).stop(true).animate({
							width:200,
							height:200,
							opacity:1,
							top:0,
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
							right:206,
							top:182
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
			goodsInfos.find('.large img').attr("src",srcStr);
		});
	});
	
	
	/*
 	详情页面js

 	1、增加数量
 	2、减少数量
 	3、直接修改input
 	4、加入购物车
*/
	var detail={
		goodsInfo:$('.goodsInfos .c2'),
		//标题
		h1:$('.goodsInfos .c2 h1'),
		//获取价格
		price:$('.goodsInfos .c2 .price'),
		//商品编号
		numbers:$('.goodsInfos .c2 .good-info'),
		//数量输入框
		amountInput:$('.goodsInfos .c2 .quantity .item_quantity_editer .item_quantity'),
		//增加数量按钮
		amountInc : $('.goodsInfos .c2 .quantity .item_quantity_editer .increase_one'),
		//减少数量按钮
		amountDec : $('.goodsInfos .c2 .quantity .item_quantity_editer .decrease_one'),
		//加入购物车
		chart:$('.goodsInfos .c2 .car-btn'),
		data : {},
		init:function(){
			this.initData();
		},
		initData:function(){
			//通过attr获取元素属性
			var gid=this.goodsInfo.attr('data-gid');
			//console.log(this.goodsInfo.attr('data-gid'));
			var that=this;
			$.getJSON('js/data.json',function(result){
				//console.log(result);
				//对应商品信息取出来
				var data=result[gid];
				//console.log(data);
				that.data=data;
				//console.log(that.data);
				//填充信息
				that.h1.html(result[gid]["goods-name"]);
				//console.log(result[gid]["goods-name"]);
				that.price.find('i').html(result[gid]["goods-sale"]);
				that.numbers.find('i').html(result[gid]["goods-number"]);
				//填充尺寸
				that.increase();
				that.decrease();
				that.inputs();
				that.addCart();
			});
		},
		//数量增加点击
		increase:function(){
			var that=this;
			this.amountInc.on('click',function(){
				//获取数量框的值
				var amount=parseInt(that.amountInput.val());
				//console.log(amount);
				amount++;
				//重新给数量框赋值
				that.amountInput.val(amount);
			});
		},
		//数量减少点击
		decrease:function(){
			var that = this;
			this.amountDec.click(function(){
				//获取数量框的值
					var amount=parseInt(that.amountInput.val());
					//console.log(amount);
					if(amount<=1){
						return;
					}
					amount--;
					//重新给数量框赋值
					that.amountInput.val(amount);
			});
		},
		//用户直接手动输入
		inputs:function(){
			var that = this;
			this.amountInput.on('input',function(){
				//input事件实时的获取input的value值
				var amount=that.amountInput.val();
				if(amount==''){
					return;
				}
				amount=parseInt(that.amountInput.val());
				//判断是不是数字或者是不是输入的是0
				if(isNaN(amount)||amount==0){
					that.amountInput.val(1);
					return;
				}
				//符合就直接是amount
				that.amountInput.val(amount);
			});
			//失去焦点判断是否空
			this.amountInput.on('blur',function(){
				var amount=that.amountInput.val();
				if(amount==''){
					that.amountInput.val(1);
					return;
				}
			});
		},
		//加入购物车
		addCart:function(){
			var that = this;
			//点击购物车按钮
			this.chart.on('click',function(){
				//data() 获取以data-开的自定义属性的值
				var gid=that.goodsInfo.data('gid');
				//console.log(that.amountInput.val());
				var amount = parseInt( that.amountInput.val() );
				//获取商品编号
				var numbers=that.numbers.find('i').html();
				//获取图片存储路径
				var src=that.data["goods-src"];
				console.log(src);
				//console.log(numbers);
				//console.log(that.goodsInfo.data('gid'),amount);
				//获取cookie名
				var cart=$.cookie('tb_cart')||'{}';
				//console.log(cart);
				cart=JSON.parse(cart);
				//console.log(cart);
				if(!cart[gid]){
					cart[gid]={
						'goods-id':gid,
						'amount':amount,
						'good-number':numbers,
						'goods-src':src
					}
				}else{
						cart[gid].amount += amount;
				}
				//重新写入cookie
				$.cookie('tb_cart',JSON.stringify(cart),{expires:365,path:'/'});
				//alert('加入成功');
				console.log( JSON.parse( $.cookie('tb_cart') ) );
				$('.headerCar i').html(amount);
				that.showcheck();
				that.clickClose();
				that.clickGo();
			});
		},
		//跳转结算
		showcheck:function(){
			$('#bgGround').show();
			$('#bgGround').stop(true).animate({
				opacity:1
			},300);
			$('.box-wrap').stop(true).animate({
				top:300
			},400);
		},
		//点击关闭
		clickClose:function(){
			$('.box-wrap').find('.closed').on('click',function(){
				$('#bgGround').hide();
				$('.box-wrap').css({
					top:-1000
				});
			});
		},
		//点击继续购物
		clickGo:function(){
			$('.box-wrap').find('.gbNew').on('click',function(){
				$('#bgGround').hide();
				$('.box-wrap').css({
					top:-1000
				});
			});
		}
	};
	detail.init();
	/*
	 
	 * 分享区功能
	 * 
	 * */
	var shares={
		shareAll:$('.goodsInfos .c2 .share'),
		bdsharebuttonbox:$('.goodsInfos .c2 .share .bdsharebuttonbox'),
		init:function(){
			//console.log(this.shareAll);
			this.mouseenter();
			this.mouseleave();
			this.mouseleaveshare();
			this.mouseentershare();
		},
		//鼠标移入
		mouseenter:function(){
			this.bdsharebuttonbox.on('mouseenter','a',function(){
				//console.log($(this))
				
				$(this).stop(true).animate({
					backgroundPositionY:-25
				},200);
			});
		},
		//鼠标离开 分享模块显示
		mouseentershare:function(){
			this.bdsharebuttonbox.children().eq(0).on('mouseenter',function(){
				$('.goodsInfos .c2 .share .bdshare_popup_box').show();
			});
		},
		//鼠标移出
		mouseleave:function(){
			this.bdsharebuttonbox.on('mouseleave','a',function(){
				//console.log($(this))
				$(this).stop(true).animate({
					backgroundPositionY:0
				},200);
			});
		},
		//鼠标离开 分享模块隐藏
		mouseleaveshare:function(){
			$('.goodsInfos .c2 .share').on('mouseleave',function(){
				$('.goodsInfos .c2 .share .bdshare_popup_box').hide();
			});
		}
	};
	shares.init();
	
	
	
	
	
	/*
	 
	 * 商品的评论 互动    详细介绍区
	 * 
	 * 
	 * */
	
	
	
	var xxk={
		subNaver:$('.b .b-left .sub-naver'),
		init:function(){
			//console.log(subNaver);
			this.clickLi();
			
		},
		clickLi:function(){
			var that=this;
			this.subNaver.find('li').on('click',function(){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				$('.b .b-left .haha').eq($(this).index()).show();
				$('.b .b-left .haha').eq($(this).index()).siblings().hide();
			});
		}
	};
	xxk.init();
});
