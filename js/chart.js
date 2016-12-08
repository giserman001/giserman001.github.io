$(function(){
	/*
 	1、读取cookie   readCookie
 	2、设置cookie   setCookie
 	3、将cookie中的数据渲染到页面上   initData
 	4、数量增加
 	5、数量减少
 	6、直接输入
 	7、删除
 	8、选中
 	9、结算信息填充
*/
/*从购物车中(cookie中)读取数据并放到页面中*/
	var Cart={
			data:null,
			//cookie里面数据
			cart:{},
			pay:{},
			tbody:$('tbody'),
			init:function(){
				this.readCookie();
				//获取所有商品json数据
				var that=this;
				$.getJSON('js/data.json?key'+Math.random(),function(data){
					//console.log(data);
					that.data=data;
					//遍历所有cookie
					for(var key in that.cart){
						//利用闭包保留所有key值
						(function(i){
							//创建tr
							var tr=$('<tr class="cart_item "></tr>');
							tr.load('goodsDetail.html?key'+Math.random(),function(){
								//获取商品id(难点，也是重点)
								var gid=that.cart[i]['goods-id'];
								//console.log(gid);
								//给tr加自定义属性(一个ul就是一件商品信息 也就有自定义的 商品编号，尺寸编号)
								tr.attr({
									"data-gid":gid
								});
								//填充信息
								//获取价格信息
								tr.find('.cart_item_price .jumei_price i').html(that.data[gid]['goods-sale']);
								//数量信息(这个需要了解存储cookie的对象的json数据格式里有什么内容？)
								tr.find('.item_quantity').val(that.cart[i]['amount']);
								//计算出总共需要支付的钱（单价乘以数量）
								var total=that.cart[i]['amount']*that.data[gid]['goods-sale'];
								tr.find('.cart_item_total .item_total_price i').html(total);
							});
							//将ul追加到商品区
							that.tbody.append(tr);
						})(key);
					}
				})
				this.increase();
				this.decrease();
				this.input();
				this.remove();
				this.goodsSelect();
				this.selectAll();
				this.delSelected();
			},
			//点击数量增加
			increase:function(){
				var that=this;
				//给未来元素添加点击事件   利用事件委托
				this.tbody.on('click','.increase_one',function(){
					//alert(1);
					//input是自己前一个兄弟,获取input的value值
					var amount=parseInt($(this).prev().val());
					//重新获取商品id（重点。。。。。。。。。难点。。。。。。。。。。。）
					var gid = $(this).parents('.cart_item').data('gid');//此data是方法
					amount++;
					//增加后的数量重新写入input里面
					$(this).prev().val(amount);
					//调用回写cookie功能
					that.handleCookie( $(this).prev() );
				});
			},
			//商品数量减少
			decrease:function(){
				var that=this;
				//给未来元素添加点击事件   利用事件委托
				this.tbody.on("click",'.decrease_one',function(){
					//alert(1);
					//input是自己前一个兄弟,获取input的value值
					var amount=parseInt($(this).next().val());
					if(amount<=1){
						return;
					}
					amount--;
					//增加后的数量重新写入input里面
					$(this).next().val(amount);
					//调用回写cookie功能
					that.handleCookie( $(this).next() );
				});
			},
			//直接手动输入
			input:function(){
				var that=this;
				this.tbody.on('input','.item_quantity',function(){
					//获取input框value值(实时获取)
					var amount=parseInt($(this).val());
					//获取库存量和重新获取商品id（重点。。。。。。。。。难点。。。。。。。。。。。）
					var gid = $(this).parents('.cart_item').data('gid');//此data是方法
					//input事件实时的获取input的value值
					if(amount==''){
						return;
					}
					//判断手动输入的是不是数字或者空
					if(isNaN(amount)||amount==0){
						$(this).val(1);
					}else{
						$(this).val(amount);
					}
					//调用回写cookie功能
					that.handleCookie( $(this) );
				});
			},
			//数量回写cookie
			handleCookie:function(input){//这里的input是对象
				//console.log(input);
				var goodsItem=input.parents('.cart_item');
				//console.log(goodsItem);
				var gid=goodsItem.data('gid');
				//console.log(gid);
				//处理回写后的总价
				var price=parseFloat(goodsItem.find('.cart_item_price .jumei_price i').html());
				var totalMoneyBox=goodsItem.find('.cart_item_total .item_total_price i');
				//重新显示商品单价和商品总价
				var totalMoney=(parseInt(input.val())*price);
				//console.log(totalMoney);
				totalMoneyBox.html(totalMoney);
				this.cart[gid].amount=parseInt(input.val());
				//console.log(this.cart);
				this.setCookie();
				//判断当前商品是否被选中
				if(goodsItem.find('input[type="checkbox"]').prop('checked')){
					//改变pay对象里面当前商品的总价(就是把对应选中的商品尺寸的总价放到pay对象里)（难点重点）
					console.log(1);
					this.pay[gid] = totalMoney;
					//调用结算商品信息方法
					console.log(this.pay);
					this.handlePay();
				}
				
			},
			//处理数量和总价
			handlePay:function(){
				var goodsAmount = $('.total_amount');
				var goodsMoney = $('.total_price i');
				var goPay = $('#go_to_order');
				console.log(goodsAmount);
				console.log(goodsMoney);
				console.log(goPay);
				//遍历pay对象，获取件数和总价
				var totalNum =this.tbody.find('.item_quantity').val();
				var totalMoney = 0;
				for(var key in this.pay){
					//console.log(totalNum);
					totalMoney += parseFloat(this.pay[key]);
				}
				//给总价和总量重新赋值
				goodsAmount.html(totalNum);
				goodsMoney.html(totalMoney);
			},
			//单件商品删除
			remove:function(){
				var that=this;
				this.tbody.on('click','.delete_item',function(){
					if(confirm('确定删除这个宝贝吗？')){
						//从页面上消失
						$(this).parents('.cart_item').remove();
						//从cookie中消失
						var gid = $(this).parents('.cart_item').data('gid');
						console.log(gid);
						//删除对象中属性用cookie
						delete that.cart[gid];
						//设置cookie
						that.setCookie();
					}
				});
			},
			//商品选择
			goodsSelect:function(){
				var that=this;
				this.tbody.on('change','.selector input[type="checkbox"]',function(){//注意这里不能用click
					var goodsItem=$(this).parents('.cart_item');
					//获取商品当前状态的id
					var gid=goodsItem.data('gid');
					//获取总价
					var total=goodsItem.find('.total_price i').html();
					//如果已经是点击状态   再次点击取消
					//如果已经存在，再点击取消
					if(!goodsItem.find('input[type="checkbox"]').prop('checked')){
						delete that.pay[gid];
					}else{
						that.pay[gid] = total;
					}
					//判断是否需要选中或者撤销全选按钮的选中状态
					//获取所有的checkbox盒子
					var allCheckBox = that.tbody.find('input[type="checkbox"]');
					//获取所有已经选中的的(重点   难点    伪类选择器)
					var allCkecked=that.tbody.find('input[type="checkbox"]:checked');
					//比较所有复选框的个数和被选中复选框的个数，如果相等，则全部被选中了
					if(allCheckBox.length==allCkecked.length){
						//让全选按钮选中
						$('.all_selector').prop('checked',true);
					}else{
						$('.all_selector').prop('checked',false);
					}
					that.handleCookie(that.tbody.find('.item_quantity'));
					//处理页面
					that.handlePay();
				});
			},
			//全选
			selectAll:function(){
				//console.log(1);
				$('.all_selector').click(function(){
					//获取自己的状态  选中或者不选中
					console.log(1);
					var status = $(this).prop('checked');
					var allCheckbox = $('.cart_item input[type="checkbox"]');
					console.log(status);
					//如果自己选中
					if(status){
						//让所有商品的选择按钮选中
						allCheckbox.prop('checked',true);
					}else{
						//让所有商品的选择按钮不选中
						allCheckbox.prop('checked',false);
					}
					//触发商品前面的复选框(难点  重点    自动触发change事件)
					allCheckbox.change();
				});
			},
			//删除选中的商品
			delSelected: function(){
				var that = this;
				$('.clear_cart_all').click(function(){
					var allChecked = that.tbody.find('input[type="checkbox"]:checked');
					if(allChecked.length == 0){
						alert('请选择需要删除的商品!!!');
						return;
					}
					if(confirm('确定删除选中的宝贝吗？')){
						//遍历所有被选中的商品
						allChecked.each(function(){
							//获取sizeid
							var gid = $(this).parents('.cart_item').data('gid');
							//从页面消失
							$(this).parents('.cart-item').remove();
							//从cookie中删除
							delete that.cart[gid];
							that.setCookie();
							//处理结算信息
							delete that.pay[gid];
							that.handlePay();
						});
					}
				});
			},
			//读取cookie
			readCookie:function(){
				this.cart=$.cookie('tb_cart')||'{}';
				//console.log(JSON.parse(this.cart));
				this.cart=JSON.parse(this.cart);
				//console.log(this.cart);
			},
			//设置cookie
			setCookie:function(){
				$.cookie('tb_cart',JSON.stringify(this.cart),{expires:365,path:'/'});
			}
		};
		Cart.init();
});
