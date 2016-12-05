
$(function(){
	/**
  搜索页面显示
*/
	var search={
		searchBtn:$('.search-btn'),
		vivoSearch:$('.vivo-search'),
		searchBox:$('.search-box'),
		vivoHead:$('#vivo-head'),
		//点击状态
		status:true,
		init:function(){
			this.clickSearch();
			this.mouseenterVivoHead();
			this.clickClose();
			this.mouseenterClose();
		},
		//点击搜索图标
		clickSearch:function(){
			var that=this;
			this.searchBtn.on('click',function(){
				if(that.status){
					that.vivoSearch.animate({
						height:80
					},600);
					that.vivoSearch.show();
					that.searchBox.animate({
						opacity:0
					},300,function(){
						$(this).animate({
							opacity:1
						},300);
					})
					that.status=false;
				}else{
					that.vivoSearch.animate({
						height:0
					},600,function(){
						that.vivoSearch.hide();
					});
					
					that.searchBox.animate({
						opacity:0
					},300,function(){
						$(this).animate({
							opacity:1
						},300);
					})
					that.status=true;
				}
			});
		},
		//鼠标移入vivoHead区域
		mouseenterVivoHead:function(){
			this.vivoHead.hover(function(){
				$(this).find('.close').stop(true).animate({
					opacity:1
				},300);
			},function(){
				$(this).find('.close').stop(true).animate({
					opacity:0
				},300);
			})
		},
		//点击close图标
		clickClose:function(){
			var that=this;
			this.vivoHead.find('.close').on('click',function(){
				that.vivoSearch.animate({
						height:0
					},600,function(){
						that.vivoSearch.hide();
					});
					
					that.searchBox.animate({
						opacity:0
					},300,function(){
						$(this).animate({
							opacity:1
						},300);
					})
					that.status=true;
			});
		},
		//移入close图标
		mouseenterClose:function(){
			this.vivoHead.find('.close').hover(function(){
				$(this).addClass('current');
			},function(){
				$(this).removeClass('current');
			});
		}
	};
	search.init();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
 轮播区域功能
 * */
	var banner={
			banner:$('.banner'),
			imgItem:$('.img-item'),
			bannerWarpper:$('.banner-warpper'),
			strip:$('.strip'),
			timer:null,
			next:0,
			now:0,
			init:function(){
				this.create();
				this.imgItem=$('.img-item');
				this.imgItem.eq(0).addClass('first');
				this.creatStrip();
				this.autoPlay();
				this.mouseenter();
				this.mouseleave();
				this.clickLeft();
				this.clickRight();
				this.clickStrip();
				//console.log(this.imgs);
			},
			//动态生成img-item
			create:function(){
				for(var i=1;i<=4;i++){
						var div=$('<div class="img-item"></div>');
						var content="";
						content+='<ul>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+				'<li class="imgFragment">'
										+					'<div></div>'
										+				'</li>'
										+	'</ul>';
						div.html(content);
						this.bannerWarpper.append(div);
				}
			},
			//自动轮播
			autoPlay:function(){
				var that=this;
				this.timer=setInterval(function(){
					that.next++;
					that.next %= that.imgItem.length;
					that.imgSwitch();
					
				},2000);
			},
			
			//图片切换
			imgSwitch:function(){
				//处理右边界
				if(this.next>=this.imgItem.length){
					this.next=0;
				}
				//处理左边界
				if(this.next<=-1){
					this.next=this.imgItem.length-1;
				}
				var that = this;
				var now = that.now;
				this.strip.find('.strip-item').eq(this.now).removeClass('current');
				this.strip.find('.strip-item').eq(this.next).addClass('current');
				this.imgItem.eq(this.now).css('z-index',0);
				this.imgItem.eq(this.next).css('z-index',1000).find('li div').each(function(k,v){
					var _this = this;
					(function(key){
							$(_this).stop(true).animate({
								height:40,
								opacity:1
							},1000,function(){
								if(key == that.imgItem.length - 1){
									that.imgItem.eq(now).find('li div').css({
										height: 0,
										opacity: 0
									});
								}
							});
					})(k);
				});
				this.now = this.next;
			},
			//鼠标点击左边
			clickLeft:function(){
				var that=this;
				this.banner.find('.arrow-left').on('click',function(){
					that.next--;
					that.imgSwitch();
					
				});
			},
			//鼠标点击右边
			clickRight:function(){
				var that=this;
				this.banner.find('.arrow-right').on('click',function(){
					that.next++;
					that.imgSwitch();
				});
			},
			//鼠标移入轮播停止
			mouseenter:function(){
				var that=this;
				this.banner.on('mouseenter',function(){
						clearInterval(that.timer);
				});
			},
			//鼠标离开轮播继续
			mouseleave:function(){
				var that=this;
				this.banner.on('mouseleave',function(){
						that.autoPlay();
				});
			},
			//动态生成轮播顶部动态小长条
			creatStrip:function(){
				//创建长条
				for(var i=0;i<this.imgItem.size();i++ ){
					var span=$('<span class="strip-item"></span>');
					this.strip.append(span);
				}
			//给第一个小长条加class
			this.strip.find('.strip-item').eq(0).addClass('current');
			},
			//点击小长条
			clickStrip:function(){
				//利用事件委托给未来元素加事件
				var that=this;
				this.strip.on('click','.strip-item',function(){
					//console.log($(this));
					that.next=$(this).index()//$(this)指的是当前点击对象
					that.imgSwitch();
				});
			}
	};
	banner.init();
	
	
	
	
	
	
	
	/*
	 
	 * main区域的特效
	 * */
	var main={
		mainFunction:$('.main'),
		init:function(){
			this.enterLeave();
			this.clickMouse();
			this.closedAnimate();
			this.companyMOve();
		},
		//鼠标移入移出(main-top)
		enterLeave:function(){
			//console.log( this.mainFunction.find('.main-top .beauty .description'));
			this.mainFunction.find('.main-top .show').hover(function(){
				$(this).find('.description').css({
					backgroundColor:"#EEAFCE"
				});
				$(this).find('.arrow_hover').css({
					borderLeftColor:"#EEAFCE"
				});
				$(this).find('.description').find('p').eq(0).css({
					color:"#fff"
				});
				$(this).find('.arrow_right').css({
					borderRightColor:"#EEAFCE"
				});
				$(this).find('.image .move-left').stop(true).animate({
					left:-5
				},200);
				$(this).find('.image .move-right').stop(true).animate({
					left:5
				},200);
			},function(){
				$(this).find('.description').css({
					backgroundColor:"#fff"
				});
				$(this).find('.arrow_hover').css({
					borderLeftColor:"#fff"
				});
				$(this).find('.description').find('p').eq(0).css({
					color:"#888"
				});
				$(this).find('.arrow_right').css({
					borderRightColor:"#fff"
				});
				$(this).find('.image .move-left').stop(true).animate({
					left:0
				},200);
				$(this).find('.image .move-right').stop(true).animate({
					left:0
				},200);
			});
		},
		//鼠标点击
		clickMouse:function(){
			this.mainFunction.find('.click').on('click',function(){
				$('#bgGround').show();
				$(this).next().css({
					//opacity:1,
					zIndex:1003
				});
				$(this).next().stop(true).animate({
					width:380,
					opacity:1,
					//zIndex:1003
				},600,function(){
					$(this).stop(true).animate({
						height:689,
					},1000);
				});
			});
		},
		//点击叉号关闭动画
		closedAnimate:function(){
			var that=this;
			this.mainFunction.find('.click').next().find('.close').on('click',function(){
				$('#bgGround').hide();
				that.mainFunction.find('.click').next().animate({
					height:227
				},1000,function(){
					$(this).animate({
						opacity:0,
						width:0
					},600,function(){
								that.mainFunction.find('.click').next().css({
							//opacity:1,
							zIndex:-1
						});
					});
				});
			});
		},
		//company区域的功能
		companyMOve:function(){
			this.mainFunction.next().find('.move').hover(function(){
				//console.log(1);
				$(this).find('.move-l').stop(true).animate({
					left:-5
				},200);
			},function(){
				//console.log($(this));
				$(this).find('.move-l').stop(true).animate({
					left:0
				},200);
			});
		}
	};
	main.init();
});



