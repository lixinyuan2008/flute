var _g_ver_blAppPlx = "v0.1. 134 ";

function _plxJobClass()
{ 
	this. blrIssues = function(b,d){
		if(!d.v){
			d.tb = blo0.blDiv(d,d.id+"v","tb",blGrey[1]);
			d.tb.style = "color: brown; background: grey";
			d.v = blo0.blDiv(d,d.id+"v1","v1",blGrey[1]);
			d.v.style = "color: brown; background: grey";
			var INO = 1;
 			function _loadIssue (o) { 
    				var btn = blo0.blBtn(d.tb , "d.tb.b" + INO, "i" + INO, blGrey[2]);	
				btn.onclick = function (_o, _this, _v){
					return function(){
						_v.innerHTML = _this.id + ":  " + o.title + "<br>" ;
						_v.ta = blo0.blTextarea(_v, _v.id + "ta", o.body , blGrey[0]);
						_v.ta .style. width 	= "98%";
						_v.ta .style. height	= "50px";
					}
				}(o, btn, d.v);

				INO ++;
  				var url = "https://api.github.com/repos/lixinyuan2008/flute/issues/" + INO ;
  				w3.getHttpObject(url, _loadIssue);
  			}
  			var url = "https://api.github.com/repos/lixinyuan2008/flute/issues/" + INO ;
  			w3.getHttpObject(url, _loadIssue);
		}
		_on_off_div(b,d);		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
	this.bll0="";
	this.blrIssue3C = function(b,d){
		if(!d.v){
			d.v = blo0.blDiv(d,d.id+"v","v",blGrey[5]);
			d.v.innerHTML = "blrIssue3C <br>"; 
			function _loadIssue3Comments(o) {
				for(i in o){
					var a = o[i].body;
					var b = a.split("~~~html");
					var c = b[1].split("~~~"); 
					d.v.innerHTML += c[0]; 
					d.v.innerHTML += "<br>";
				}

			}
			w3.getHttpObject("https://api.github.com/repos/littleflute/bat/issues/3/comments", _loadIssue3Comments);		
		}
		_on_off_div(b,d);
		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
	this.bll1="";
	this.blrAboutPlx= function(b,d){		
		var s = "blrAboutPlx<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/bat/edit/master/blAppPlx.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " blAppPlx.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/bat/blAppPlx.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " blAppPlx.js ";
		s += "</a>"; 

		s += "<a target='_blank'  href='https://lixinyuan2008.github.io/flute/'";
		s += " style='color:green;'";
		s +=">";
		s += "lixinyuan2008/flute ";
		s += "</a>"; 


		s += "<a target='_blank'  href='https://littleflute.github.io/flute/'";
		s += " style='color:lightgreen;'";
		s +=">";
		s += "littleflute/flute ";
		s += "</a>"; 


		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
}
function CBlAppPlxClass()
{ 
	var _plxUI = null;
	var divPlx = bl$("id_div_4_plx");
	if(divPlx!=null){
		_plxUI = blo0.blDiv(divPlx, divPlx.id + "_plx" , "blAppPlx: " + _g_ver_blAppPlx, blGrey[3]);  
		_plxUI.v = blo0.blDiv(_plxUI, _plxUI.id + "_v" , "v " , blColor[4]);  
		blo0.blShowObj2Div(_plxUI.v,new _plxJobClass);
	} 
	else{
		_plxUI = blo0.blDiv(document.body, "_plx" , "blAppPlx: " + _g_ver_blAppPlx, blColor[3]);  
		_plxUI.v = blo0.blDiv(_plxUI, _plxUI.id + "_v" , "v " , blColor[4]);  
		blo0.blShowObj2Div(_plxUI.v,new _plxJobClass);
	}
}
 
var _blAppPlx = new CBlAppPlxClass;    
	bl$( "blrIssues" ).click();	bl$( "blrIssues" ).click();
	bl$("blrIssue3C").click();	bl$("blrIssue3C").click();
	bl$("blrAboutPlx").click();	bl$("blrAboutPlx").click();
