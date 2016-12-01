function addToCart(goodsId, parentId)

{

  var goods        = new Object();

  var spec_arr     = new Array();

  var fittings_arr = new Array();

  var number       = 1;

  var formBuy      = document.forms['ECS_FORMBUY'];

  var quick        = 0;




  if (formBuy)

  {

    spec_arr = getSelectedAttributes(formBuy);
	
	fittings_arr = getSelectedFittings(formBuy);


    if (formBuy.elements['number'])

    {

      number = formBuy.elements['number'].value;

    }



    quick = 1;

  }



  goods.quick    = quick;

  goods.spec     = spec_arr;
  
  goods.fitting   = fittings_arr;

  goods.goods_id = goodsId;

  goods.number   = number;

  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
 



  Ajax.call('flow.php?step=add_to_cart', 'goods=' + obj2str(goods), addToCartResponse, 'POST', 'JSON');

}




function getSelectedAttributes(formBuy)

{

  var spec_arr = new Array();

  var j = 0;



  for (i = 0; i < formBuy.elements.length; i ++ )

  {

    var prefix = formBuy.elements[i].name.substr(0, 5);



    if (prefix == 'spec_' && (

      ((formBuy.elements[i].type == 'radio' || formBuy.elements[i].type == 'checkbox') && formBuy.elements[i].checked) ||

      formBuy.elements[i].tagName == 'SELECT'))

    {

      spec_arr[j] = formBuy.elements[i].value;

      j++ ;

    }

  }



  return spec_arr;

}


//取得活动商品
function getSelectedFittings(formBuy)

{

  var fitting_arr = new Array();

  var j = 0;



  for (i = 0; i < formBuy.elements.length; i ++ )

  {

    var prefix = formBuy.elements[i].name.substr(0, 8);



    if (prefix == 'fitting_' && formBuy.elements[i].checked)

    {

      fitting_arr[j] = formBuy.elements[i].value;

      j++ ;

    }

  }



  return fitting_arr;

}





function addToCartResponse(result)

{
  cart.getGoods();
  if (result.error > 0)

  {

    if (result.error == 2)

    {

      if (confirm(result.message))

      {

        location.href = 'user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;

      }

    }


    else if (result.error == 6)

    {

      openSpeDiv(result.message, result.goods_id, result.parent);

    }

    else

    {

      alert(result.message);

    }

  }

  else

  {

    var cartInfo = document.getElementById('ECS_CARTINFO');

    var cart_url = 'http://www.wm18.com/flow.php?step=cart';

    if (cartInfo)

    {

      cartInfo.innerHTML = result.content;

    }



    if (result.one_step_buy == '1')

    {

      location.href = cart_url;

    }

    else

    {

      switch(result.confirm_type)

      {

        case '1' :

          if (confirm(result.message)) location.href = cart_url;

          break;

        case '2' :

          if (!confirm(result.message)) location.href = cart_url;

          break;

        case '3' :

          location.href = cart_url;

          break;

        default :

          break;

      }

    }

  }

}




function collect(goodsId)

{

	_birdpush.push(['goodId',goodsId]);      //商品ID
	_birdpush.push(['_track','collect']);  
	window._birdpush = _birdpush;
  Ajax.call('/user.php?act=collect', 'id=' + goodsId, collectResponse, 'GET', 'JSON');

}




function collectResponse(result)

{

  if(result.message == ""){

      //alert(result.message);
		
	  com_alert2('商品收藏成功');
      //window.location.href = "user.php";

  }else{
		//alert(1);
      //alert(result.message);
      if(result.code == 2){
       // com_alert3(result.message,'/user.php','请登录');
		$.post("/user.php", { act: "ajax_check_login" },
				function(data){
					{	
						$("body").after( data );
					}
		});
      }else{
        com_alert2(result.message);
      }
	  

  } 

}




function signInResponse(result)

{

  toggleLoader(false);



  var done    = result.substr(0, 1);

  var content = result.substr(2);



  if (done == 1)

  {

    document.getElementById('member-zone').innerHTML = content;

  }

  else

  {

    alert(content);

  }

}



function gotoPage(page, id, type)

{

  Ajax.call('/comment.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type, gotoPageResponse, 'GET', 'JSON');

}



function gotoPageResponse(result)

{
  //alert(document.getElementById("ECS_COMMENT"));
  //document.getElementsByClassName("comment_class").innerHTML = result.content;
  $('.comment_class').html(result.content);

}


function gotoPageMsg(page, id)

{

  Ajax.call('messages_ajax.php?act=gotopage', 'page=' + page + '&id=' + id, gotoPageMsgResponse, 'GET', 'JSON');

}



function gotoPageMsgResponse(result)

{

  document.getElementById("ECS_MESSAGE").innerHTML = result.content;

}


function gotoBuyPage(page, id)

{

  Ajax.call('goods.php?act=gotopage', 'page=' + page + '&id=' + id, gotoBuyPageResponse, 'GET', 'JSON');

}



function gotoBuyPageResponse(result)

{

  document.getElementById("ECS_BOUGHT").innerHTML = result.result;

}




function getFormatedPrice(price)

{

  if (currencyFormat.indexOf("%s") > - 1)

  {

    return currencyFormat.replace('%s', advFormatNumber(price, 2));

  }

  else if (currencyFormat.indexOf("%d") > - 1)

  {

    return currencyFormat.replace('%d', advFormatNumber(price, 0));

  }

  else

  {

    return price;

  }

}






function bid(step)

{

  var price = '';

  var msg   = '';

  if (step != - 1)

  {

    var frm = document.forms['formBid'];

    price   = frm.elements['price'].value;

    id = frm.elements['snatch_id'].value;

    if (price.length == 0)

    {

      msg += price_not_null + '\n';

    }

    else

    {

      var reg = /^[\.0-9]+/;

      if ( ! reg.test(price))

      {

        msg += price_not_number + '\n';

      }

    }

  }

  else

  {

    price = step;

  }



  if (msg.length > 0)

  {

    alert(msg);

    return;

  }



  Ajax.call('snatch.php?act=bid&id=' + id, 'price=' + price, bidResponse, 'POST', 'JSON')

}






function bidResponse(result)

{

  if (result.error == 0)

  {

    document.getElementById('ECS_SNATCH').innerHTML = result.content;

    if (document.forms['formBid'])

    {

      document.forms['formBid'].elements['price'].focus();

    }

    newPrice(); 

  }

  else

  {

    alert(result.content);

  }

}

onload = function()

{ }






function newPrice(id)

{

  Ajax.call('snatch.php?act=new_price_list&id=' + id, '', newPriceResponse, 'GET', 'TEXT');

}






function newPriceResponse(result)

{

  document.getElementById('ECS_PRICE_LIST').innerHTML = result;

}




function getAttr(cat_id)

{

  var tbodies = document.getElementsByTagName('tbody');

  for (i = 0; i < tbodies.length; i ++ )

  {

    if (tbodies[i].id.substr(0, 10) == 'goods_type')tbodies[i].style.display = 'none';

  }



  var type_body = 'goods_type_' + cat_id;

  try

  {

    document.getElementById(type_body).style.display = '';

  }

  catch (e)

  {

  }

}




function advFormatNumber(value, num) 

{

  var a_str = formatNumber(value, num);

  var a_int = parseFloat(a_str);

  if (value.toString().length > a_str.length)

  {

    var b_str = value.toString().substring(a_str.length, a_str.length + 1);

    var b_int = parseFloat(b_str);

    if (b_int < 5)

    {

      return a_str;

    }

    else

    {

      var bonus_str, bonus_int;

      if (num == 0)

      {

        bonus_int = 1;

      }

      else

      {

        bonus_str = "0."

        for (var i = 1; i < num; i ++ )

        bonus_str += "0";

        bonus_str += "1";

        bonus_int = parseFloat(bonus_str);

      }

      a_str = formatNumber(a_int + bonus_int, num)

    }

  }

  return a_str;

}



function formatNumber(value, num) 

{

  var a, b, c, i;

  a = value.toString();

  b = a.indexOf('.');

  c = a.length;

  if (num == 0)

  {

    if (b != - 1)

    {

      a = a.substring(0, b);

    }

  }

  else

  {

    if (b == - 1)

    {

      a = a + ".";

      for (i = 1; i <= num; i ++ )

      {

        a = a + "0";

      }

    }

    else

    {

      a = a.substring(0, b + num + 1);

      for (i = c; i <= b + num; i ++ )

      {

        a = a + "0";

      }

    }

  }

  return a;

}




function set_insure_status()

{


  var shippingId = getRadioValue('shipping');

  var insure_fee = 0;

  if (shippingId > 0)

  {

    if (document.forms['theForm'].elements['insure_' + shippingId])

    {

      insure_fee = document.forms['theForm'].elements['insure_' + shippingId].value;

    }


    if (document.forms['theForm'].elements['need_insure'])

    {

      document.forms['theForm'].elements['need_insure'].checked = false;

    }




    if (document.getElementById("ecs_insure_cell"))

    {

      if (insure_fee > 0)

      {

        document.getElementById("ecs_insure_cell").style.display = '';

        setValue(document.getElementById("ecs_insure_fee_cell"), getFormatedPrice(insure_fee));

      }

      else

      {

        document.getElementById("ecs_insure_cell").style.display = "none";

        setValue(document.getElementById("ecs_insure_fee_cell"), '');

      }

    }

  }

}




function changePayment(pay_id)

{


  calculateOrderFee();

}



function getCoordinate(obj)

{

  var pos =

  {

    "x" : 0, "y" : 0

  }



  pos.x = document.body.offsetLeft;

  pos.y = document.body.offsetTop;



  do

  {

    pos.x += obj.offsetLeft;

    pos.y += obj.offsetTop;



    obj = obj.offsetParent;

  }

  while (obj.tagName.toUpperCase() != 'BODY')



  return pos;

}



function showCatalog(obj)

{

  var pos = getCoordinate(obj);

  var div = document.getElementById('ECS_CATALOG');



  if (div && div.style.display != 'block')

  {

    div.style.display = 'block';

    div.style.left = pos.x + "px";

    div.style.top = (pos.y + obj.offsetHeight - 1) + "px";

  }

}



function hideCatalog(obj)

{

  var div = document.getElementById('ECS_CATALOG');



  if (div && div.style.display != 'none') div.style.display = "none";

}



function sendHashMail()

{

  Ajax.call('user.php?act=send_hash_mail', '', sendHashMailResponse, 'GET', 'JSON')

}



function sendHashMailResponse(result)

{

  alert(result.message);

}




function orderQuery()

{

  var order_sn = document.forms['ecsOrderQuery']['order_sn'].value;



  var reg = /^[\.0-9]+/;

  if (order_sn.length < 10 || ! reg.test(order_sn))

  {

    alert(invalid_order_sn);

    return;

  }

  Ajax.call('user.php?act=order_query&order_sn=s' + order_sn, '', orderQueryResponse, 'GET', 'JSON');

}



function orderQueryResponse(result)

{

  if (result.message.length > 0)

  {

    alert(result.message);

  }

  if (result.error == 0)

  {

    var div = document.getElementById('ECS_ORDER_QUERY');

    div.innerHTML = result.content;

  }

}



function display_mode(str)

{

    document.getElementById('display').value = str;

    setTimeout(doSubmit, 0);

    function doSubmit() {document.forms['listform'].submit();}

}



function display_mode_wholesale(str)

{

    document.getElementById('display').value = str;

    setTimeout(doSubmit, 0);

    function doSubmit() 

    {

        document.forms['wholesale_goods'].action = "wholesale.php";

        document.forms['wholesale_goods'].submit();

    }

}




function fixpng()

{

  var arVersion = navigator.appVersion.split("MSIE")

  var version = parseFloat(arVersion[1])



  if ((version >= 5.5) && (document.body.filters))

  {

     for(var i=0; i<document.images.length; i++)

     {

        var img = document.images[i]

        var imgName = img.src.toUpperCase()

        if (imgName.substring(imgName.length-3, imgName.length) == "PNG")

        {

           var imgID = (img.id) ? "id='" + img.id + "' " : ""

           var imgClass = (img.className) ? "class='" + img.className + "' " : ""

           var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "

           var imgStyle = "display:inline-block;" + img.style.cssText

           if (img.align == "left") imgStyle = "float:left;" + imgStyle

           if (img.align == "right") imgStyle = "float:right;" + imgStyle

           if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle

           var strNewHTML = "<span " + imgID + imgClass + imgTitle

           + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"

           + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"

           + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"

           img.outerHTML = strNewHTML

           i = i-1

        }

     }

  }

}



function hash(string, length)

{

  var length = length ? length : 32;

  var start = 0;

  var i = 0;

  var result = '';

  filllen = length - string.length % length;

  for(i = 0; i < filllen; i++)

  {

    string += "0";

  }

  while(start < string.length)

  {

    result = stringxor(result, string.substr(start, length));

    start += length;

  }

  return result;

}



function stringxor(s1, s2)

{

  var s = '';

  var hash = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var max = Math.max(s1.length, s2.length);

  for(var i=0; i<max; i++)

  {

    var k = s1.charCodeAt(i) ^ s2.charCodeAt(i);

    s += hash.charAt(k % 52);

  }

  return s;

}



var evalscripts = new Array();

function evalscript(s)

{

  if(s.indexOf('<script') == -1) return s;

  var p = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/ig;

  var arr = new Array();

  while(arr = p.exec(s)) appendscript(arr[1], '', arr[2], arr[3]);

  return s;

}



function $$(id)

{

    return document.getElementById(id);

}



function appendscript(src, text, reload, charset)

{

  var id = hash(src + text);

  if(!reload && in_array(id, evalscripts)) return;

  if(reload && $$(id))

  {

    $$(id).parentNode.removeChild($$(id));

  }

  evalscripts.push(id);

  var scriptNode = document.createElement("script");

  scriptNode.type = "text/javascript";

  scriptNode.id = id;

  //scriptNode.charset = charset;

  try

  {

    if(src)

    {

      scriptNode.src = src;

    }

    else if(text)

    {

      scriptNode.text = text;

    }

    $$('append_parent').appendChild(scriptNode);

  }

  catch(e)

  {}

}



function in_array(needle, haystack)

{

  if(typeof needle == 'string' || typeof needle == 'number')

  {

    for(var i in haystack)

    {

      if(haystack[i] == needle)

      {

        return true;

      }

    }

  }

  return false;

}



var pmwinposition = new Array();



var userAgent = navigator.userAgent.toLowerCase();

var is_opera = userAgent.indexOf('opera') != -1 && opera.version();

var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);

var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);

function pmwin(action, param)

{

  var objs = document.getElementsByTagName("OBJECT");

  if(action == 'open')

  {

    for(i = 0;i < objs.length; i ++)

    {

      if(objs[i].style.visibility != 'hidden')

      {

        objs[i].setAttribute("oldvisibility", objs[i].style.visibility);

        objs[i].style.visibility = 'hidden';

      }

    }

    var clientWidth = document.body.clientWidth;

    var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;

    var scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;

    var pmwidth = 800;

    var pmheight = clientHeight * 0.9;

    if(!$$('pmlayer'))

    {

      div = document.createElement('div');div.id = 'pmlayer';

      div.style.width = pmwidth + 'px';

      div.style.height = pmheight + 'px';

      div.style.left = ((clientWidth - pmwidth) / 2) + 'px';

      div.style.position = 'absolute';

      div.style.zIndex = '999';

      $$('append_parent').appendChild(div);

      $$('pmlayer').innerHTML = '<div style="width: 800px; background: #666666; margin: 5px auto; text-align: left">' +

        '<div style="width: 800px; height: ' + pmheight + 'px; padding: 1px; background: #FFFFFF; border: 1px solid #7597B8; position: relative; left: -6px; top: -3px">' +

        '<div onmousedown="pmwindrag(event, 1)" onmousemove="pmwindrag(event, 2)" onmouseup="pmwindrag(event, 3)" style="cursor: move; position: relative; left: 0px; top: 0px; width: 800px; height: 30px; margin-bottom: -30px;"></div>' +

        '<a href="###" onclick="pmwin(\'close\')"><img style="position: absolute; right: 20px; top: 15px" src="images/close.gif" title="关闭" /></a>' +

        '<iframe id="pmframe" name="pmframe" style="width:' + pmwidth + 'px;height:100%" allowTransparency="true" frameborder="0"></iframe></div></div>';

    }

    $$('pmlayer').style.display = '';

    $$('pmlayer').style.top = ((clientHeight - pmheight) / 2 + scrollTop) + 'px';

    if(!param)

    {

        pmframe.location = 'pm.php';

    }

    else

    {

        pmframe.location = 'pm.php?' + param;

    }

  }

  else if(action == 'close')

  {

    for(i = 0;i < objs.length; i ++)

    {

      if(objs[i].attributes['oldvisibility'])

      {

        objs[i].style.visibility = objs[i].attributes['oldvisibility'].nodeValue;

        objs[i].removeAttribute('oldvisibility');

      }

    }

    hiddenobj = new Array();

    $$('pmlayer').style.display = 'none';

  }

}



var pmwindragstart = new Array();

function pmwindrag(e, op)

{

  if(op == 1)

  {

    pmwindragstart = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];

    pmwindragstart[2] = parseInt($$('pmlayer').style.left);

    pmwindragstart[3] = parseInt($$('pmlayer').style.top);

    doane(e);

  }

  else if(op == 2 && pmwindragstart[0])

  {

    var pmwindragnow = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];

    $$('pmlayer').style.left = (pmwindragstart[2] + pmwindragnow[0] - pmwindragstart[0]) + 'px';

    $$('pmlayer').style.top = (pmwindragstart[3] + pmwindragnow[1] - pmwindragstart[1]) + 'px';

    doane(e);

  }

  else if(op == 3)

  {

    pmwindragstart = [];

    doane(e);

  }

}



function doane(event)

{

  e = event ? event : window.event;

  if(is_ie)

  {

    e.returnValue = false;

    e.cancelBubble = true;

  }

  else if(e)

  {

    e.stopPropagation();

    e.preventDefault();

  }

}




function addPackageToCart(packageId)

{

  var package_info = new Object();

  var number       = 1;



  package_info.package_id = packageId

  package_info.number     = number;



  Ajax.call('flow.php?step=add_package_to_cart', 'package_info=' + obj2str(package_info), addPackageToCartResponse, 'POST', 'JSON');

}




function addPackageToCartResponse(result)

{

  if (result.error > 0)

  {

    if (result.error == 2)

    {

      if (confirm(result.message))

      {

        location.href = 'user.php?act=add_booking&id=' + result.goods_id;

      }

    }

    else

    {

      alert(result.message);    

    }

  }

  else

  {

    var cartInfo = document.getElementById('ECS_CARTINFO');

    var cart_url = 'http://www.wm18.com/flow.php?step=cart';

    if (cartInfo)

    {

      cartInfo.innerHTML = result.content;

    }



    if (result.one_step_buy == '1')

    {

      location.href = cart_url;

    }

    else

    {

      switch(result.confirm_type)

      {

        case '1' :

          if (confirm(result.message)) location.href = cart_url;

          break;

        case '2' :

          if (!confirm(result.message)) location.href = cart_url;

          break;

        case '3' :

          location.href = cart_url;

          break;

        default :

          break;

      }

    }

  }

}



function setSuitShow(suitId)

{

    var suit    = document.getElementById('suit_'+suitId);



    if(suit == null)

    {

        return;

    }

    if(suit.style.display=='none')

    {

        suit.style.display='';

    }

    else

    {

        suit.style.display='none';

    }

}






function docEle() 

{

  return document.getElementById(arguments[0]) || false;

}




function openSpeDiv(message, goods_id, parent) 

{

  var _id = "speDiv";

  var m = "mask";

  if (docEle(_id)) document.removeChild(docEle(_id));

  if (docEle(m)) document.removeChild(docEle(m));


  var scrollPos; 

  if (typeof window.pageYOffset != 'undefined') 

  { 

    scrollPos = window.pageYOffset; 

  } 

  else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 

  { 

    scrollPos = document.documentElement.scrollTop; 

  } 

  else if (typeof document.body != 'undefined') 

  { 

    scrollPos = document.body.scrollTop; 

  }



  var i = 0;

  var sel_obj = document.getElementsByTagName('select');

  while (sel_obj[i])

  {

    sel_obj[i].style.visibility = "hidden";

    i++;

  }




  var newDiv = document.createElement("div");

  newDiv.id = _id;

  newDiv.style.position = "absolute";

  newDiv.style.zIndex = "10000";

  newDiv.style.top = (parseInt(scrollPos + 400)) + "px";

  newDiv.style.left = (parseInt(document.body.offsetWidth) - 400) / 2 + "px"; // 屏幕居中

  newDiv.style.overflow = "auto"; 




  newDiv.innerHTML = '<p class="tt">' + select_spe + "</p>";



  for (var spec = 0; spec < message.length; spec++)

  {

      newDiv.innerHTML += '<div class="clear">' + '</div>' + '<p class="spe_name">' +  message[spec]['name'] + '</p>';



      if (message[spec]['attr_type'] == 1)

      {

        for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++)

        {

          if (val_arr == 0)

          {

            newDiv.innerHTML += "<div class='d_radio'><input type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' checked /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + '</font></div> ';      

          }

          else

          {

            newDiv.innerHTML += "<div class='d_radio'><input type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + '</font></div> ';      

          }

        } 

        newDiv.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";

      }

      else

      {

        for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++)

        {

          newDiv.innerHTML += "<div class='d_check'><input type='checkbox' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + ' [' + message[spec]['values'][val_arr]['format_price'] + ']</font></div>';     

        }

        newDiv.innerHTML += "<div class='d_check'><input type='hidden' name='spec_list' value='" + val_arr + "' /></div>";

      }

  }

  newDiv.innerHTML += "<div class='clear'></div><div class='d_confirm'><a href='javascript:submit_div(" + goods_id + "," + parent + ")' class='buy' >" + btn_buy + "</a><a href='javascript:cancel_div()' class='cancel' >" + is_cancel + "</a></div>";

  document.body.appendChild(newDiv);






  var newMask = document.createElement("div");

  newMask.id = m;

  newMask.style.position = "absolute";

  newMask.style.zIndex = "9999";

  newMask.style.width = document.body.scrollWidth + "px";

  newMask.style.height = document.body.scrollHeight + "px";

  newMask.style.top = "0px";

  newMask.style.left = "0px";

  newMask.style.filter = "alpha(opacity=30)";

  newMask.style.opacity = "0.40";

  document.body.appendChild(newMask);

} 




function submit_div(goods_id, parentId) 

{

  var goods        = new Object();

  var spec_arr     = new Array();

  var fittings_arr = new Array();

  var number       = 1;

  var input_arr      = document.getElementsByTagName('input'); 

  var quick        = 1;



  var spec_arr = new Array();

  var j = 0;



  for (i = 0; i < input_arr.length; i ++ )

  {

    var prefix = input_arr[i].name.substr(0, 5);



    if (prefix == 'spec_' && (

      ((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked)))

    {

      spec_arr[j] = input_arr[i].value;

      j++ ;

    }

  }



  goods.quick    = quick;

  goods.spec     = spec_arr;

  goods.goods_id = goods_id;

  goods.number   = number;

  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);



  Ajax.call('flow.php?step=add_to_cart', 'goods=' + obj2str(goods), addToCartResponse, 'POST', 'JSON');



  document.body.removeChild(docEle('speDiv'));

  document.body.removeChild(docEle('mask'));



  var i = 0;

  var sel_obj = document.getElementsByTagName('select');

  while (sel_obj[i])

  {

    sel_obj[i].style.visibility = "";

    i++;

  }



}



function cancel_div() 

{

  document.body.removeChild(docEle('speDiv'));

  document.body.removeChild(docEle('mask'));



  var i = 0;

  var sel_obj = document.getElementsByTagName('select');

  while (sel_obj[i])

  {

    sel_obj[i].style.visibility = "";

    i++;

  }

}
function elems(id,cur){
var id = document.getElementById(id).getElementsByTagName("li");
for(var i=0; i<id.length; i++)
{
id[0].className = "cur";
id[i].onmouseover = function()
{
this.className="";
for(var j=0; j<id.length; j++)
{
if((id[j].getAttribute("class") == cur) || (id[j].getAttribute("className") == cur))
{
id[j].className = "";
break;
}
}
this.className = cur;
}
}
}
// tab
function tabChange(obj,id)
{
var arrayli = obj.parentNode.getElementsByTagName("h3"); 
var arrayul = document.getElementById(id).getElementsByTagName("ul"); 
for(i=0;i<arrayul.length;i++)
{
if(obj==arrayli[i])
{
arrayli[i].className = "cli";
arrayul[i].className = "";
}
else
{
arrayli[i].className = "";
arrayul[i].className = "hidden";
}
}
}
/*radio*/

var checkboxHeight = "25";
var radioHeight = "25";
var selectWidth = "190";


/* No need to change anything after this */


document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
	init: function() {
		var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
		for(a = 0; a < inputs.length; a++) {
			if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
				span[a] = document.createElement("span");
				span[a].className = inputs[a].type;

				if(inputs[a].checked == true) {
					if(inputs[a].type == "checkbox") {
						position = "0 -" + (checkboxHeight*2) + "px";
						span[a].style.backgroundPosition = position;
					} else {
						position = "0 -" + (radioHeight*2) + "px";
						span[a].style.backgroundPosition = position;
					}
				}
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				inputs[a].onchange = Custom.clear;
				if(!inputs[a].getAttribute("disabled")) {
					span[a].onmousedown = Custom.pushed;
					span[a].onmouseup = Custom.check;
				} else {
					span[a].className = span[a].className += " disabled";
				}
			}
		}
		inputs = document.getElementsByTagName("select");
		for(a = 0; a < inputs.length; a++) {
			if(inputs[a].className == "styled") {
				option = inputs[a].getElementsByTagName("option");
				active = option[0].childNodes[0].nodeValue;
				textnode = document.createTextNode(active);
				for(b = 0; b < option.length; b++) {
					if(option[b].selected == true) {
						textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
					}
				}
				span[a] = document.createElement("span");
				span[a].className = "select";
				span[a].id = "select" + inputs[a].name;
				span[a].appendChild(textnode);
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				if(!inputs[a].getAttribute("disabled")) {
					inputs[a].onchange = Custom.choose;
				} else {
					inputs[a].previousSibling.className = inputs[a].previousSibling.className += " disabled";
				}
			}
		}
		document.onmouseup = Custom.clear;
	},
	pushed: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight*3 + "px";
		} else if(element.checked == true && element.type == "radio") {
			this.style.backgroundPosition = "0 -" + radioHeight*3 + "px";
		} else if(element.checked != true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
		} else {
			this.style.backgroundPosition = "0 -" + radioHeight + "px";
		}
	},
	check: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 0";
			element.checked = false;
		} else {
			if(element.type == "checkbox") {
				this.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else {
				this.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
				group = this.nextSibling.name;
				inputs = document.getElementsByTagName("input");
				for(a = 0; a < inputs.length; a++) {
					if(inputs[a].name == group && inputs[a] != this.nextSibling) {
						inputs[a].previousSibling.style.backgroundPosition = "0 0";
					}
				}
			}
			element.checked = true;
		}
	},
	clear: function() {
		inputs = document.getElementsByTagName("input");
		for(var b = 0; b < inputs.length; b++) {
			if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			} else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
			} else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			}
		}
	},
	choose: function() {
		option = this.getElementsByTagName("option");
		for(d = 0; d < option.length; d++) {
			if(option[d].selected == true) {
				document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
			}
		}
	}
}
window.onload = Custom.init;

function elems(id,cur){
var id = document.getElementById(id).getElementsByTagName("li");
for(var i=0; i<id.length; i++)
{
id[0].className = "cur";
id[i].onmouseover = function()
{
this.className="";
for(var j=0; j<id.length; j++)
{
if((id[j].getAttribute("class") == cur) || (id[j].getAttribute("className") == cur))
{
id[j].className = "";
break;
}
}
this.className = cur;
}
}
}
function Marquee()
{
	this.ID = document.getElementById(arguments[0]);
	if(!this.ID)
	{
		alert("\"" + arguments[0] + "\"error\r\nplease check the id!");
		this.ID = -1;
		return;
	}
	this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
	this.Step = 1;
	this.Timer = 30;
	this.DirectionArray = {"top":0 , "up":0 , "bottom":1 , "down":1 , "left":2 , "right":3};
	if(typeof arguments[1] == "number" || typeof arguments[1] == "string")this.Direction = arguments[1];
	if(typeof arguments[2] == "number")this.Step = arguments[2];
	if(typeof arguments[3] == "number")this.Width = arguments[3];
	if(typeof arguments[4] == "number")this.Height = arguments[4];
	if(typeof arguments[5] == "number")this.Timer = arguments[5];
	if(typeof arguments[6] == "number")this.DelayTime = arguments[6];
	if(typeof arguments[7] == "number")this.WaitTime = arguments[7];
	if(typeof arguments[8] == "number")this.ScrollStep = arguments[8];
	this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
	this.ID.noWrap = true;
	this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
	if(arguments.length >= 7)this.Start();
}

Marquee.prototype.Start = function()
{
	if(this.ID == -1)return;
	if(this.WaitTime < 800)this.WaitTime = 800;
	if(this.Timer < 20)this.Timer = 20;
	if(this.Width == 0)this.Width = parseInt(this.ID.style.width);
	if(this.Height == 0)this.Height = parseInt(this.ID.style.height);
	if(typeof this.Direction == "string")this.Direction = this.DirectionArray[this.Direction.toString().toLowerCase()];
	this.HalfWidth = Math.round(this.Width / 2);
	this.HalfHeight = Math.round(this.Height / 2);
	this.BakStep = this.Step;
	this.ID.style.width = this.Width + "px";
	this.ID.style.height = this.Height + "px";
	if(typeof this.ScrollStep != "number")this.ScrollStep = this.Direction > 1 ? this.Width : this.Height;
	var templateLeft = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
	var templateTop = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
	var msobj = this;
	msobj.tempHTML = msobj.ID.innerHTML;
	if(msobj.Direction <= 1)
	{
		msobj.ID.innerHTML = templateTop.replace(/MSCLASS_TEMP_HTML/g,msobj.ID.innerHTML);
	}
	else
	{
		if(msobj.ScrollStep == 0 && msobj.DelayTime == 0)
		{
			msobj.ID.innerHTML += msobj.ID.innerHTML;
		}
		else
		{
			msobj.ID.innerHTML = templateLeft.replace(/MSCLASS_TEMP_HTML/g,msobj.ID.innerHTML);
		}
	}
	var timer = this.Timer;
	var delaytime = this.DelayTime;
	var waittime = this.WaitTime;
	msobj.StartID = function(){msobj.Scroll()}
	msobj.Continue = function()
				{
					if(msobj.MouseOver == 1)
					{
						setTimeout(msobj.Continue,delaytime);
					}
					else
					{	clearInterval(msobj.TimerID);
						msobj.CTL = msobj.Stop = 0;
						msobj.TimerID = setInterval(msobj.StartID,timer);
					}
				}

	msobj.Pause = function()
			{
				msobj.Stop = 1;
				clearInterval(msobj.TimerID);
				setTimeout(msobj.Continue,delaytime);
			}

	msobj.Begin = function()
		{
			msobj.ClientScroll = msobj.Direction > 1 ? msobj.ID.scrollWidth / 2 : msobj.ID.scrollHeight / 2;
			if((msobj.Direction <= 1 && msobj.ClientScroll <= msobj.Height + msobj.Step) || (msobj.Direction > 1 && msobj.ClientScroll <= msobj.Width + msobj.Step))			{
				msobj.ID.innerHTML = msobj.tempHTML;
				delete(msobj.tempHTML);
				return;
			}
			delete(msobj.tempHTML);
			msobj.TimerID = setInterval(msobj.StartID,timer);
			if(msobj.ScrollStep < 0)return;
			msobj.ID.onmousemove = function(event)
						{
							if(msobj.ScrollStep == 0 && msobj.Direction > 1)
							{
								var event = event || window.event;
								if(window.event)
								{
									if(msobj.IsNotOpera)
									{
										msobj.EventLeft = event.srcElement.id == msobj.ID.id ? event.offsetX - msobj.ID.scrollLeft : event.srcElement.offsetLeft - msobj.ID.scrollLeft + event.offsetX;
									}
									else
									{
										msobj.ScrollStep = null;
										return;
									}
								}
								else
								{
									msobj.EventLeft = event.layerX - msobj.ID.scrollLeft;
								}
								msobj.Direction = msobj.EventLeft > msobj.HalfWidth ? 3 : 2;
								msobj.AbsCenter = Math.abs(msobj.HalfWidth - msobj.EventLeft);
								msobj.Step = Math.round(msobj.AbsCenter * (msobj.BakStep*2) / msobj.HalfWidth);
							}
						}
			msobj.ID.onmouseover = function()
						{
							if(msobj.ScrollStep == 0)return;
							msobj.MouseOver = 1;
							clearInterval(msobj.TimerID);
						}
			msobj.ID.onmouseout = function()
						{
							if(msobj.ScrollStep == 0)
							{
								if(msobj.Step == 0)msobj.Step = 1;
								return;
							}
							msobj.MouseOver = 0;
							if(msobj.Stop == 0)
							{
								clearInterval(msobj.TimerID);
								msobj.TimerID = setInterval(msobj.StartID,timer);
							}
						}
		}
	setTimeout(msobj.Begin,waittime);
}

Marquee.prototype.Scroll = function()
{
	switch(this.Direction)
	{
		case 0:
			this.CTL += this.Step;
			if(this.CTL >= this.ScrollStep && this.DelayTime > 0)
			{
				this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
				this.Pause();
				return;
			}
			else
			{
				if(this.ID.scrollTop >= this.ClientScroll)
				{
					this.ID.scrollTop -= this.ClientScroll;
				}
				this.ID.scrollTop += this.Step;
			}
		break;

		case 1:
			this.CTL += this.Step;
			if(this.CTL >= this.ScrollStep && this.DelayTime > 0)
			{
				this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
				this.Pause();
				return;
			}
			else
			{
				if(this.ID.scrollTop <= 0)
				{
					this.ID.scrollTop += this.ClientScroll;
				}
				this.ID.scrollTop -= this.Step;
			}
		break;

		case 2:
			this.CTL += this.Step;
			if(this.CTL >= this.ScrollStep && this.DelayTime > 0)
			{
				this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
				this.Pause();
				return;
			}
			else
			{
				if(this.ID.scrollLeft >= this.ClientScroll)
				{
					this.ID.scrollLeft -= this.ClientScroll;
				}
				this.ID.scrollLeft += this.Step;
			}
		break;

		case 3:
			this.CTL += this.Step;
			if(this.CTL >= this.ScrollStep && this.DelayTime > 0)
			{
				this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
				this.Pause();
				return;
			}
			else
			{
				if(this.ID.scrollLeft <= 0)
				{
					this.ID.scrollLeft += this.ClientScroll;
				}
				this.ID.scrollLeft -= this.Step;
			}
		break;
	}
}
//-->