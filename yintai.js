window.onload=function(){
	// top中我的银泰效果
	var bian1=$(".bian1")[0];
	var mineList=$(".mineList")[0];
	hover(bian1,function(){
		mineList.style.display="block";
		bian1.style.background="#fff"
	},function(){
		mineList.style.display="none";
		bian1.style.background="#EEEEEE"
	})
	// 特卖部分
	var teleft_top_tits=document.getElementsByClassName("teleft_top_tit");
	var teleft_bottom_tu=document.getElementsByClassName("teleft_bottom");
	var xiaosanjiao=$(".jt")
	for (var i = 0;i<teleft_top_tits.length ;i++) {
		teleft_top_tits[i].index=i;
		teleft_top_tits[i].onmouseover=function(){
			for (var i = 0;i<teleft_bottom_tu.length;i++) {
				teleft_bottom_tu[i].style.display="none";
				xiaosanjiao[i].style.display="none";
				teleft_top_tits[i].style.borderColor="#333";
			}
			teleft_bottom_tu[this.index].style.display="";
			xiaosanjiao[this.index].style.display="block";
			teleft_top_tits[this.index].style.borderColor="#E5004F";
		}
	}
	// 右边的导航
	var	biannavkuangs=document.getElementsByClassName("biannavkuang");
	for (var i = 0;i<biannavkuangs.length;i++) {
		biannavkuangs[i].style.backgroundPosition="0 "+(i*-55)+"px";
	}
	var biannavs=document.getElementsByClassName("biannav");
	for (var i = 0;i<biannavs.length;i++) {
		biannavkuangs[i].index=i;
		biannavkuangs[i].onmouseover=function(){
			biannavs[this.index].style.display="block";
		}
		biannavkuangs[i].onmouseout=function(){
			biannavs[this.index].style.display="none";
		}
	}
	// 右边导航跳转效果
	var content=$(".shishang");
	var floodbtn=$(".biannavkuang");
	var chuangkou=getWindow();
	for (var i = 0;i<floodbtn.length-1;i++) {
		floodbtn[i].index=i;
		floodbtn[i].onclick=function(){
			var st=content[this.index].offsetTop-10;
			animate(chuangkou,{scrollTop:st})
		}
	}
	// 返回顶部
	var totop=$(".totop")[0];
	totop.onclick=function(){
		animate(chuangkou,{scrollTop:0});
	}
	// banner图轮播
	var bannerimg=getClass("bannerimg");
	var banbtn=getClass("banbtn");
	var banner1=getClass("banner")[0];
	var bannerbg=["images/94.1.jpg","images/93.1.jpg","images/95.1.jpg","images/92.1.jpg"]
	var prev=getClass("banner_pre")[0];
	var next= getClass("banner_next")[0];
	for (var i = 0;i<banbtn.length ;i++) {
		banbtn[i].index=i;
		banbtn[i].onmouseover=function(){
			n=this.index;    // 从哪个开始  
			for (var i = 0;i<bannerimg.length;i++) {
			bannerimg[i].style.zIndex="1";
			banbtn[i].style.background="#111";
			bannerimg[i].style.opacity=0.8;
			}
			bannerimg[this.index].style.zIndex="2";
			banbtn[this.index].style.background="#e5004f";
			banner1.style.backgroundImage="url("+bannerbg[this.index]+")";
			animate(bannerimg[n],{opacity:1});
		}
	}
	var n=0;
	function banner(){
		n++;
		if (n==bannerimg.length) {
			n=0;
		}
		if (n==-1) {
			n=banbtn.length-1;
		};
		for (var i = 0;i<bannerimg.length;i++) {
			bannerimg[i].style.zIndex="1";
			banbtn[i].style.background="#111";
			bannerimg[i].style.opacity=0.8;
		}
		banbtn[n].style.background="#e5004f";
		bannerimg[n].style.zIndex="2";
		banner1.style.backgroundImage="url("+bannerbg[n]+")";
		animate(bannerimg[n],{opacity:1});
	}

		var bannert=setInterval(banner,3000);
		banner1.onmouseover=function(){
			clearInterval(bannert);
		}
		banner1.onmouseout=function(){
			bannert=setInterval(banner,3000);
		}
		prev.onclick=function(){
			n-=2;
			banner();
		}
		next.onclick=function(){
			banner();
		}

// banner右边的广告
var banright=$(".banright")[0];
banright.onmouseover=function(){
	animate(banright,{marginRight:10});
}
banright.onmouseout=function(){
	animate(banright,{marginRight:0})
}

// 百货
	var bhtop_titles=getClass("bhtop_title");
	var bh_bot_ri_nr=getClass("bh_bot_ri_nr");
	var bhsanjiao=$(".bhsanjiao");
	for (var i = 0;i<bhtop_titles.length ;i++) {
		bhtop_titles[i].index=i;
		bhtop_titles[i].onmouseover=function(){
			for (var i = 0;i<bh_bot_ri_nr.length;i++) {
				bh_bot_ri_nr[i].style.display="none";
				bhsanjiao[i].style.display="none";
				bhtop_titles[i].style.borderColor="#333";
			}
			bh_bot_ri_nr[this.index].style.display="";
			bhsanjiao[this.index].style.display="block";
			bhtop_titles[this.index].style.borderColor="#E70050";
		}
	}


// 下边小的banner图函数
function miniban(container,innerbox,prev,next,dianbox){
	var dian1=$(".ssbtn",dianbox)[0];
	var dian2=$(".ssbtn",dianbox)[1];
	dian1.onclick=qian;
	dian2.onclick=hou;
	container.onmouseover=function(){
		animate(prev,{left:0},200);
		animate(next,{right:0},200);
	}
	container.onmouseout=function(){
		animate(prev,{left:-30},200);
		animate(next,{right:-30},200);
	}
	next.onclick=hou;
	function hou(){
		animate(innerbox,{left:-390},600)
		next.style.backgroundPosition="right 0";
		dian2.style.backgroundPosition="0 -13px";
		dian1.style.backgroundPosition="0 0"
	}
	prev.onclick=qian;
	function qian(){
		animate(innerbox,{left:0},600);
		next.style.backgroundPosition="";
		dian1.style.backgroundPosition="0 -13px";
		dian2.style.backgroundPosition="0 0";
	}
	
}

// 时尚名品
var ssqjt=$(".ssqjt");
var sshjt=$(".sshjt");
var imgbox=$(".imgbox");
var shishangbox=$(".ssmid");
var banbtnbox=$(".ssdian");
for (var i = 0;i<6;i++) {
	miniban(shishangbox[i],imgbox[i],ssqjt[i],sshjt[i],banbtnbox[i]);
}

// 黑线动画效果

var borderitem=$(".bordereffect");
for (var i = 0;i<borderitem.length;i++) {
	border(borderitem[i]);
}



// 每块左边下边的商家
var ssjt1=$(".ssjt1");
var ssjt2=$(".ssjt2");
var xiamintiao=$(".xiamintiao");
var xiaxianshi=$(".xiaxianshi");
for (var i = 0; i < xiaxianshi.length; i++) {
	shjlunbo(xiaxianshi[i],xiamintiao[i],ssjt1[i],ssjt2[i])
};
function shjlunbo(xiaxianshi,xiamintiao,ssjt1,ssjt2){
	function move(){
		animate(xiamintiao,{marginLeft:-160},function(){
			var first=getFirst(xiamintiao);
			xiamintiao.appendChild(first);
			this.style.marginLeft=0;
			flag11=true;
		})
	}

	var flag11=true;
	ssjt2.onclick=function(){
		if (flag11) {
			flag1=false;
			move();
		};
	}
	var flag21=true;
	ssjt1.onclick=function(){
		if (flag21) {
			flag21=false;
			var	last=getLast(xiamintiao);
			var first=getFirst(xiamintiao);
			xiamintiao.insertBefore(last,first);
			xiamintiao.style.marginLeft="-160px";
			animate(xiamintiao,{marginLeft:0},function(){
				flag21=true;
			})
		}
	}
}

// banner左边nav选项卡效果
var	banleftli=$(".banleftli");
var bllist=$(".bllist");
for (var i = 0; i < banleftli.length; i++) {
	banleftli[i].index=i;
	hover(banleftli[i],function(){
		bllist[this.index].style.display="block";
	},function(){
		bllist[this.index].style.display="none";
	})
}



       // 页面缓存加载效果
var contentjz=$(".jiaozai");
var chuangkou=getWindow();
var imgarr=$("img");
var ksheight=document.documentElement.clientHeight;
for (var i = 0;i<imgarr.length;i++) {
	imgarr[i].datesrc=imgarr[i].src;
	imgarr[i].src="";
}
for (var i = 0;i<imgarr.length;i++) {
	if (ksheight>getPosition(imgarr[i]).y) {
		imgarr[i].src=imgarr[i].datesrc;
	}
}
var flont_nav=$(".flont_nav")[0];
window.onscroll=function(){
	var st=chuangkou.scrollTop;
	for (var i = 0; i < imgarr.length; i++) {
		if (st+ksheight>getPosition(imgarr[i]).y) {
			imgarr[i].src=imgarr[i].datesrc;
		};
	}
	if (st>670) {// 右边导航在banner图之后出现
		flont_nav.style.display="block";
	}else{
		flont_nav.style.display="none";
	}
	
}


}//页面加载之后执行



