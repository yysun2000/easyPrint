/*

                      _       _._
               _,,-''' ''-,_ }'._''.,_.=._
            ,-'      _ _    '        (  @)'-,
          ,'  _..==;;::_::'-     __..----'''}
         :  .'::_;==''       ,'',: : : '' '}
        }  '::-'            /   },: : : :_,'
       :  :'     _..,,_    '., '._-,,,--\'    _
      :  ;   .-'       :      '-, ';,__\.\_.-'
     {   '  :    _,,,   :__,,--::',,}___}^}_.-'
     }        _,'__''',  ;_.-''_.-'
    :      ,':-''  ';, ;  ;_..-'
_.-' }    ,',' ,''',  : ^^
_.-''{    { ; ; ,', '  :
      }   } :  ;_,' ;  }
       {   ',',___,'   '
        ',           ,'
          '-,,__,,-'

		Chameleon (0.0.0.1)


				Created By yys(cocacolar@nate.com), lsw(dltlsdn12312@nagosoft.com)
				Ver 0.0.0.1
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('k w(4){4=x(4);3 7=5 u;3 d=5 r();3 f=5 r();3 b=4.v;l(i=0;i<b;i++){d[i]=4.m(i);f[i]=4.m(i+1)}l(i=0;i<b;i=i+2){7+=u.C(d[i]-f[i])}3 j=h(7);6 j}k h(7){3 9=7.E(\'|\');3 8=5 a();3 n=5 a(8.D(),8.y(),8.z());3 s=5 a(9[0]);e(n.t()<=s.t()){e(9[1].o(q.A+\'//\'+q.B)>-1)6 p;c e(9[1].o(\'*\')>-1)6 p;c 6 g}c 6 g}',41,41,'|||var|theText|new|return|output|now|array|Date|TextSize|else|Temp|if|Temp2|false|inspection||check|function|for|charCodeAt|todayAtMidn|indexOf|true|location|Array|licenseDate|getTime|String|length|unEncrypt|unescape|getMonth|getDate|protocol|hostname|fromCharCode|getFullYear|split'.split('|'),0,{}))


var ptmLicense = '%A1o%A8x%A3p%A9y%B5%86%ED%BD%91%5B%AF%80%8D%5B%96e%u0121%A5%7CR';

var serverPath = location.protocol + "//" + location.hostname + "/ptm6";
if(location.port != "")
	serverPath = location.protocol + "//" + location.hostname + ":9043/ih/docs/js/print";


/**********************************************************************************************
 *
 * Global Options
 *
 **********************************************************************************************/

var LICENSE_CODE = 'FMV9Ro2Bw3kdwjDoAv+PRCuFebTqHnEtkR5oDZwkDN6RXth7hJxbYfG22xaTLMhDEXouUf9NDdV1A4/AnxAYhuxJU4NamXEMYOAwdchE3wUA8tfxYp4NtQJPd1vb4YA9GnpoctYOI8LXZ0DzBpeWd9kT+u4Uz2ZZ3ftcrk0arlz1IRywsCXrNng0LjnFN0q6G+y5xKi+5pJDOPcj2Fvq5ajBKGxLUz+1nYTzCQcyKcUH1rvhBrQjyIMGctnvEZFEgn0rYkRfZN2UKjOzPPuXz3d1ygSt0VMP2dmGebkpes1yTzDWvTkqJXwonwwrOdDWQUGnJQe/zfk4HVtJUkzlp2AgQQEAmyDigIQX7LvJlrDH72CiT/e9jwqr0PIF5ZzLBRcvwXYptJc4g/3CEp27Y5SpjnEPl20oaVH+a2h66ASj1WK4zVK95n1F3mEjn9jkBjKNjQPTmAevNc/7wk3KwebikdNzAQq5sQrn4Tm+ETekzboHHpYscRZvoOEOTBihLuMWqq0Ho4e1hw0OToAPNGnxu/+lj/urVLnyQCOV9ZTiRTfizLjLU6edcn47S3nuyHYgelMlaPhn8KmVsThtu3xcXTil7xlflnAHjjswTjesaJ5IKQ6LZ1Oted2TL1nB3AskyPGKbmvsZzRN9Ao6bq1++cyyha8WZDcsbEZ2Oi0uF0bSdO1kpZb6K1XRIXKdUKzRwnljOQrD8KFkcYj3N1GAFAgIWCIoogEICkJ4JZDNnmkU91Q9un+SfRSeAXisHxMcHTD5MQkt0Ry2nJn3+M04F8w2sVT4gCsVAOMlA2fQUnPXm5u9eku1sPEGjNcV6w2ecffSusi8TOJ6OlE3WuMS4vQ98yj/gjN2tYmVwoAohLuM0idZ781FfzjFjDuXsNchmX6q82J4bbfaSOO6l+S1fhjOhMFeB7X+MbYwht89lLSVSmaZ23kRw1KZLOGvCh5ksCoL6etrZckuKIf3hg==';
//var SERVER_PATH = '/ih/print';
var SERVER_PATH = '/ptm6';

// ActiveX DLL 경로 - IE용 플러그인 업데이트를 위한 경로
var OCX_CODEBASE = SERVER_PATH + '/download_files/Windows/Printmade2.ocx';
// Install 프로그램 경로들
var WIN_DOWNLOAD_URL = SERVER_PATH + '/download_files/Windows/Printmade2_setup.exe';
var MAC_DOWNLOAD_URL = SERVER_PATH + '/download_files/MacOSX/Printmade2forMac.dmg';
var UBUNTU_32BIT_URL = SERVER_PATH + '/download_files/Linux/Printmade2_Ubuntu_32bit.tar';
var UBUNTU_64BIT_URL = SERVER_PATH + '/download_files/Linux/Printmade2_Ubuntu_64bit.tar';
var FEDORA_32BIT_URL = SERVER_PATH + '/download_files/Linux/Printmade2_Fedora_32bit.tar';
var FEDORA_64BIT_URL = SERVER_PATH + '/download_files/Linux/Printmade2_Fedora_64bit.tar';


/**********************************************************************************************
//양식파일 경로
**********************************************************************************************/
var FORMURL = SERVER_PATH + '/server_files/form.txt';

//설치 화면 이미지 경로
var INSTALL_IMG_URL = SERVER_PATH + '/server_files/imgs/';
//Printmade 윈도우 화면 위치 지정. 0,0,0,0 이면 최대값으로 지정함
var DIALOG_RECT = '0,0,0,0';
//페이지 브레이크 기능
var PAGEBREAKS = '';
//Printmade에서 기본적으로 인쇄할 렌더링 방식. image,webobject 두가지 방식이 있음
var RENDERINGTYPE = 'image';
//인쇄할 용지의 기본 방향
var ORIENTATION = 'portrait'; // portrait, landscape
//인쇄 페이지 정렬 - left, center, right
var PAGEALIGNMENT = 'left';
//Viewer 버전 - 업데이트를 할 때 버전을 올려주어야 한다.
var VIEWER_VERSION = '2.0.1.19';
//내부 개발자용 모드
var DEVELOPMENT_MODE = 0;
//Mac, Linux용 설정값
var GPrintmade_MainFrame = null; 
var GPrintmade_NonCrossTop = '';

//12.03.28 link 태그 복사 기능
var GPrintmade_CopyLinkTag = false;

//2.0.0.7
//인쇄 방법 - 0:바로 인쇄, 1:뷰어로 확인, 2:PDF 인쇄
var DIALOGMODE = 1;
//기존 유저 환경설정값 사용 - 0 : 사용 안함, 1 : 사용
var USERPREFERENCE = 0;
//페이지 여백(Margin) - '상,우,하,좌'
var PAGEMARGIN = '10,10,10,10';

//2.0.1.0
var PMCUSTOMER = ''; //Customer name
var PMLOGOIMG = ''; //Url
var PMICON = ''; //Url
var PMPAGESIZE = ''; //width,height
var PMVIEWERMODAL = 0; //0 - modeless, 1 - modal

//2.0.1.3
var PMMEMO = 0; // 0 - 사용 안함, 1 - 사용

//SKT 작업 부분 : DownloadDiv 설정하기. NonCrossTop 함수 수정(body가 있는 top도 찾아오도록)
var GPrintmade_DownloadDivFrame = '';

var KDB_PRINTID = undefined;
var PMPAGEWIDTH = '';

/*****************************************0*****************************************************
*
* Messages
* 
**********************************************************************************************/
var VALIDATECLASS_MSG = 'JavaScript가 제대로 로드되지 않았습니다.\n';
var UNDEFINED_WEBBROWSER_MSG = '현재 사용하고 있는 웹브라우저는 지원하지 않습니다.';
var UNDEFINED_OS_MSG = '현재 사용하고 있는 OS는 지원하지 않습니다.';
var INSTALL_DIV_MSG = '이 프로그램은 웹 페이지 인쇄를 위한 솔루션입니다.';
var INSTALL_LINUX_MSG = '압축 파일을 해제 후, install.sh를 터미널에서 실행하십시오'; //빈칸으로 설정시 메시지가 안뜬다.

var UPDATE_ERROR_MSG = 'Printmade 2 업데이트 과정에서 오류가 생겼습니다. 새 버전을 설치합니다.';


if ( (navigator.language || navigator.userLanguage).toLowerCase().indexOf('en') > -1 ) {
VALIDATECLASS_MSG = 'Javascript is not loaded correctly.';
UNDEFINED_WEBBROWSER_MSG = 'Currently Web Browser is not supported.';
UNDEFINED_OS_MSG = 'Currently Operating System is not supported.';
INSTALL_DIV_MSG = 'Web Print Solution. Printmade 2';
INSTALL_LINUX_MSG = 'Uncompress archive file and run install.sh in Terminal mode.';
 
UPDATE_ERROR_MSG = 'Error in updating Printmade 2. Install latest version.';
}
/*
	date : 2016-03-26
	modifier : 이신우
	contents : IE Version check Function!!!!!!
*/
function checkIE_Version(){
	var version;
	try{
		version = navigator.userAgent.match(/Trident\/(\d.\d)/i)[1];
		switch (version){
			case '4.0' :
				version = 8;
				break;
			case '5.0' :
				version = 9;
				break;
			case '6.0' :
				version = 10;
				break;
			case '7.0' :
				version = 11;
				break;
			default :
				version = undefined;
		}
	}catch(e){
		version = 'Not IE';
	}finally{
		return version;
	}
}
/*
	date : 2016-05-31
	modifier : 이신우
	contents : IE Version 9 check Function!!!!!! IE 9 Donut...no
*/
function checkIE8(){
	if(navigator.appVersion.indexOf("Win")!=-1){
		if(this.checkIE_Version() == 8) return true;
		if(navigator.userAgent.indexOf('MSIE 7.0') > -1) return true;
		if(navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') == -1) return true;
	}
	return false;
}



/**********************************************************************************************
* PTMPrintWebPage 캡쳐 함수
*
*  - Parameters -
* frame_name : 원하는 프레임의 name 또는 id를 입력한다. 전체 페이지 캡쳐이면 빈 스트링 '' 을 넣는다.
* elementid : 캡쳐하려는 Element의 id를 넣는다. CSS Selector 처럼 #[id] 형태로 넣는다.
* objectcapture : 스크롤 캡쳐의 작동여부를 설정한다. 플래시가 존재할 때 주로 설정한다. 0은 작동안함, 1은 작동함.(true,false)
* cutrect : 캡쳐된 이미지를 인쇄할 때 '상,우,하,좌' 를 얼만큼 잘라낼 것인가를 설정한다.
* formvar : 양식파일에 지정된 사용자 변수에 대한 값을 넣는다.
* formurl : 양식파일의 경로를 지정한다. 지정되지 않으면 FORMURL 전역변수를 사용한다.
*
* 12.03.26 frame_index 추가
* frame_index : '$1.2' -> frames[1].frames[2] 찾음
*
* 12.04.09 fullcapture 추가
* fullcapture : true 설정 시 캡쳐 실행(fullcapture 설정 시 objectcapture는 자동으로 true로 설정)
*
* PTMPrintWebPage({frame_name:'',cutrect:'0,0,0,0'});
*
**********************************************************************************************/
function PTMPrintWebPage( options )
{
	if(checkIE8()){
	KDB_PRINTID = options.elementid;
	options.elementid = undefined;

	/*
	 * 		this._frame.document.body.scrollLeft = this._list[this._current_pos][0]; 
			this._frame.document.body.scrollTop = this._list[this._current_pos][1];
			this._frame.document.documentElement.scrollLeft = this._list[this._current_pos][0]; 
			this._frame.document.documentElement.scrollTop = this._list[this._current_pos][1];
	 */
	// PTMPrintWebPage() 형식으로 호출할 경우 options 값이 undefined가 되어
	//아래의 options.frame_name에서 에러남.
	if ( options == undefined )
		options = {};

	//JavaScript가 제대로 로드 되었는지 확인한다.
	if ( validateJavaScript() == false )
		return;

	var top_array = GetNonCrossTop( window );

	if ( GPrintmade_NonCrossTop == '' )
		GPrintmade_NonCrossTop = top_array.non_cross_top;

	if ( GPrintmade_DownloadDivFrame == '' ) {
		GPrintmade_DownloadDivFrame = top_array.top_frame_with_body;
	} else {
		var frame = FindFrameByName( GPrintmade_NonCrossTop, GPrintmade_DownloadDivFrame );
		if ( frame == null ) {
			GPrintmade_DownloadDivFrame = top_array.top_frame_with_body;
		} else {
			GPrintmade_DownloadDivFrame = frame;
		}
	}

	//GPrintmade는 전역으로 설정되어 있다.
	GPrintmade = new PTMMainController();
	if ( GPrintmade == null )
		return;

	var targetframe = null;
	//Target Frame ID	
	if ( options.frame_name != undefined && options.frame_name != '' ) {
		var frameobject = Soo.Util.FindFrame( GPrintmade_NonCrossTop, options.frame_name );

		if( frameobject != null && frameobject != undefined ) {
			targetframe = frameobject;
			GPrintmade.option.SetFrameId( options.frame_name );
		} else {
			targetframe = GPrintmade_NonCrossTop;
		}
	} else {
		targetframe = GPrintmade_NonCrossTop;
	}

	/*
	 * 12.03.26 
	 * frame_index 파라미터 추가
	 * frame_element : '$0.1' 형태로, NonCrossTop 하위 트리 순회
	 */
	if ( options.frame_index != undefined ) {
		var frameobject = Soo.Util.FindFrameWithIndex( GPrintmade_NonCrossTop, options.frame_index );

		if ( typeof frameobject == 'string') {
			alert('PTMPrintWebPage 함수의 [frame_index]가 올바른 프레임을 가리키고 있지 않습니다.\n세부오류 : ' + frameobject);
			return;
		} else {
			targetframe = frameobject;
			var $object = dmj( frameobject.frameElement );

			if ( $object.attr('id') != undefined ) {
				GPrintmade.option.SetFrameId( $object.attr('id') );
			} else {
				$object.attr( 'id_ptm', 'ptm_print_frame' );
				GPrintmade.option.SetFrameId( 'ptm_print_frame' );
			}
		}
	}

	//Validate Target Frame
	if ( dmj('frameset',targetframe.document)[0] != undefined ) {
		alert('PTMPrintWebPage 함수의 [frame_name]의 frame은 frameset이 아닌 body를 가지고 있어야 합니다.');
		return;
		targetframe = GetMainFrame();
	}


	// KDB의 경우, 부분 인쇄를 전체 인쇄로 우회해서 사용하므로 
	// options.elementid를 그대로 사용하면 안 되고 전역 변수인 KDB_PRINTID에 저장한 값을 사용해야 함.
	if( KDB_PRINTID != undefined && dmj(KDB_PRINTID,targetframe.document).length == 0){
		alert('PTMPrintWebPage 함수의 elementid의 Element를 찾을 수 없습니다.\n elementid : ' + KDB_PRINTID);
		return;
	}

	/*
	 * PTM_BeforePrinting
	 *
	 * 인쇄되기 직전에 필요한 작업들을 PTM_BeforePrinting 함수에서 작업한다.
	 * 12.03.27 위치 변경 : targetframe을 모르는 상태에서는 인쇄 전 작업을 하는 데에 
	 * 한계가 있어 targetframe을 구한 이후 부분의 위치로 변경.
	 */ 

	PTM_BeforePrinting( options, targetframe );

	//Target Element ID
	if(options.elementid != undefined){
		if(dmj(options.elementid,targetframe.document).length == 0){
			alert('PTMPrintWebPage 함수의 elementid의 Element를 찾을 수 없습니다.');
			return;
		}

		GPrintmade.option.SetElementId(options.elementid);
		if(options.executeJavaScript != undefined)
			GPrintmade.option.SetExecuteString(executeJavaScript);
		//Validate Target Element
	}


	//Object Capture
	if(options.objectcapture == 0){
		GPrintmade.option.SetCaptureEnabled(false);
	}else{
		GPrintmade.option.SetCaptureEnabled(true);
	}

	//Cut
	if ( options.cutrect != undefined ) {
		GPrintmade.option.SetCutRect( options.cutrect );	
	}

	// One Page
	if( options.onepage != undefined ) {
		GPrintmade.option._onepage = options.onepage;
	}		

	//Other options
	GPrintmade.option.SetLicense( LICENSE_CODE );
	GPrintmade.option.SetRenderingType( RENDERINGTYPE );
	GPrintmade.option.SetDialogRect( DIALOG_RECT );
	GPrintmade.option.SetOrientation( ORIENTATION );
	GPrintmade.option.SetAlignment( PAGEALIGNMENT );
	GPrintmade.option.SetPageMargin( PAGEMARGIN );
	GPrintmade.option.SetUserPreference( USERPREFERENCE );
	GPrintmade.option.SetDialogMode( DIALOGMODE );
	GPrintmade.option.SetOriginalURL(location.hostname);	

	//2.0.1.0
	GPrintmade.option.SetCustomer(PMCUSTOMER);
	GPrintmade.option.SetLogoImage(PMLOGOIMG);
	GPrintmade.option.SetIcon(PMICON);
	GPrintmade.option.SetPageSize(PMPAGESIZE);            

	//2.0.1.3
	GPrintmade.option.SetMemo(PMMEMO);    

	GPrintmade.option.SetPageWidth(PMPAGEWIDTH);

	if ( options.formurl != undefined ) {
		GPrintmade.option.SetFormURL( options.formurl );
	} else {
		GPrintmade.option.SetFormURL( FORMURL );
	}

	if ( options.fullcapture != undefined ) {
		GPrintmade.option.SetFullCapture( options.fullcapture );
		GPrintmade.option.SetCaptureEnabled( true );		
	}

	if( options.formvar != undefined && typeof(options.formvar) == 'object' ) {
		var formvar = '';
		formvar = JSON.stringify( options.formvar );
		formvar = formvar.replace( /\"/gi, "\'" );
		GPrintmade.option.SetFormVariables( formvar );
	}

	//인쇄 작업이 끝난 후 작업들을 PTM_AfterPrinting 함수에서 작업한다.
	PTM_AFTERPRINTING.push( [PTM_AfterPrinting, options, targetframe] );

	if ( GPrintmade_CopyLinkTag == true ) {
		PTM_CopyCSS( targetframe );
	} else {
		GPrintmade.Run( targetframe );
	}

	}else{
		EPrintWebPage(options);
	}
	
}

/**********************************************************************************************
* 
* PTM_BeforePrinting
* PTM_AfterPrinting
*
**********************************************************************************************/
function PTM_BeforePrinting( options, targetframe ) {
	// 고정값(스크롤 : 17px, 상단 툴바 : 73px, 타이틀바 : 30px)
	var SCROLL_WIDTH = 17;
	var TOOLBAR_HEIGHT = 73;
	var TITLEBAR_HEIGHT = 30;

	/*
	 * DIALOG_WIDTH : Printmade 2 Viewer 창 너비
	 * DIALOG_HEIGHT : Printmade 2 Viewer 창 높이
	 * DIALOG_LEFT : Printmade 2 Viewer 창 가로 위치(x 좌표)
	 * DIALOG_TOP : Printmade 2 Viewer 창 세로 위치(y 좌표)
	 */
	var DIALOG_WIDTH, DIALOG_HEIGHT, DIALOG_LEFT, DIALOG_TOP;

	// 인쇄 내용 좌우 여백
	var DIALOG_MARGIN = 30;

	/* 
	 * element_width, element_height : Printmade 2 Viewer 창에서 실제 컨텐츠 영역이 차지하는 너비, 높이
	 * screen_width, screen_height : 화면 전체 너비, 높이(해상도와 연관)
	 */
	var element_width, element_height, screen_width, screen_height;

	dmj('body', targetframe.document).width(dmj('body', targetframe.document)[0].scrollWidth);
	  

	var elementid = KDB_PRINTID;
	if ( elementid != undefined ) {
		var $element = dmj(elementid, targetframe.document);
		var left, top, width, height, right, bottom;

		left = parseInt($element.offset().left);
		top = parseInt($element.offset().top);
		width = parseInt($element.width());
		height = parseInt($element.height());

		right = targetframe.document.body.scrollWidth - left - width;
		bottom, $footer = null;

		if (elementid == '#printArea') {
			PMPAGEWIDTH = dmj('body', targetframe.document)[0].scrollWidth;
			
			if ( dmj('#pop-supple-content').length > 0 && dmj('#pop-supple-content').find('#printArea').length > 0 ) {
//				dmj('#printArea').height(dmj('#printArea').height() + 60);
				PMPAGEWIDTH = '';
				var $element = dmj('#pop-supple-content');
				var height = $element.height();
//				$element.height($element[0].scrollHeight);
				$element.height('auto');
				$element.attr('ptm-scroll-height', height);
				GPrintmade.option.SetElementId(elementid);
			} else if ( dmj('#printArea').find('iframe').length > 0 ) {
				PMPAGEWIDTH = '';
				$iframe = dmj(dmj('#printArea').find('iframe')[0]);
				$iframe.attr('ptm-scroll-height', $iframe.height());
				dmj('#printArea').attr('ptm-scroll-height', dmj('#printArea').height());
				dmj('#printArea').find('iframe').height('1100px');
				dmj('#printArea').height('1100px');
				GPrintmade.option.SetElementId(elementid);
			} else {
				$footer = dmj(dmj('#footer, .footer')[0]);
	
				$footer.height($footer.height());
				$footer.css('padding-bottom', parseInt($footer.css('padding-bottom')));
				$footer.css('padding-top', parseInt($footer.css('padding-top')));
	
				if ( dmj('.rndBoxType').length > 0 ) {
					dmj('#printArea div:not(.visual_area)').height('auto').attr('ptm-height-set', 'true');
					dmj('#printArea .visual_area').each(function() {
						dmj(this).height(dmj(this).height());
					});
				}
	
				dmj('th').each(function() {
					dmj(this).width( dmj(this).width() );
				});
	
				if ( top < 5 ) top = 5;
				if ( left < 20 ) left = 20;
				if ( bottom < 0 ) bottom = 0;
				if ( right < 0 ) {
					right = 0;
					PMPAGEWIDTH = left + width;
				}
	
				bottom = $footer.height() + parseInt($footer.css('padding-bottom')) + parseInt($footer.css('padding-top')) + 20;
	
	
				if ( dmj('#map_canvas').length > 0 && dmj('#map_canvas').find('canvas').length == 0 ) {
					var $element = dmj(dmj('#map_canvas').children().children()[0]);
					if ( $element != undefined ) {
						map_element = $element.children().children()[0];
						if ( map_element != undefined && map_element.style.zIndex == 100 ) {
							dmj(map_element).css('display','none');
						}
					}
	
					var ruler_element = dmj('img[src="https://maps.gstatic.com/mapfiles/mapcontrols3d6.png"]')[0];
					var ruler_parent = dmj(ruler_element).parent().parent()[0];
									
					if ( ruler_parent != undefined && ruler_parent.tagName.toLowerCase() == 'div' ) 
						dmj(ruler_parent).css('zIndex', 200);
	
					dmj('img[src="https://maps.gstatic.com/mapfiles/google_white.png"]').next().css('display','none');
					
					var $zoom_element = dmj('img[src="https://maps.gstatic.com/mapfiles/mapcontrols3d7.png"]');
					var zoom_element_1 = dmj($zoom_element[1]).parent()[0];
					var zoom_element_2 = dmj($zoom_element[2]).parent()[0];
					
					if ( zoom_element_1 != undefined )
						dmj(zoom_element_1).css('zIndex', 200);
					if ( zoom_element_2 != undefined )
						dmj(zoom_element_2).css('zIndex', 201);
					
					var $map_img = dmj('#map_canvas').find('img[src^="https://maps.googleapis.com/"]');
					if ( $map_img.length > 0 ) {
						var map_parent = $map_img.parent().parent()[0];
						if ( map_parent != undefined && map_parent.tagName.toLowerCase() == 'div' )
							dmj(map_parent).css('zIndex', 100);
					}
				}

				options.cutrect = ( top - 5 ) + ',' + right + ',' + bottom + ',' + ( left - 20 );
			}
		} else {
			GPrintmade.option.SetElementId(elementid);
		}

		if ( navigator.appName == "Microsoft Internet Explorer" && navigator.userAgent.indexOf('MSIE 9.0') == -1 ) {
			dmj('li', targetframe.document).each(function() { 
				if ( parseInt(dmj(this).css('margin-right')) > 20 ) { 
					dmj(this).attr('ptm-margin-right', dmj(this).css('margin-right'));
					dmj(this).css('margin-right', parseInt(dmj(this).css('margin-right')) - 5);
				}	
			});
		}
	} else {
		PMPAGEWIDTH = dmj('body', targetframe.document)[0].scrollWidth;
	}

	screen_width = screen.width;
	screen_height = screen.height;
	element_width = 870;
	element_height = 650;

	DIALOG_LEFT = parseInt( (screen_width - element_width)/2 );
	DIALOG_TOP = parseInt( (screen_height - element_height)/2 );
	DIALOG_WIDTH = element_width;
	DIALOG_HEIGHT = element_height + TITLEBAR_HEIGHT;

	DIALOG_RECT = DIALOG_TOP + ',' + DIALOG_LEFT + ',' + DIALOG_WIDTH + ',' + DIALOG_HEIGHT;
}

function PTM_AfterPrinting( options, targetframe ) {
	if ( KDB_PRINTID != undefined && dmj(KDB_PRINTID, targetframe.document).length > 0 ) {
		dmj(KDB_PRINTID, targetframe.document).css('overflow', '');
		dmj(KDB_PRINTID, targetframe.document).height('');

		if ( navigator.appName == "Microsoft Internet Explorer" && navigator.userAgent.indexOf('MSIE 9.0') == -1 ) {
			dmj('*[ptm-margin-right]', targetframe.document).each(function() {
				var ptm_margin_right = parseInt(dmj(this).attr('ptm-margin-right'));
				dmj(this).css('margin-right', ptm_margin_right);
				dmj(this).removeAttr('ptm-margin-right');
			});
		}
		
		if (KDB_PRINTID == '#printArea' ) {
			dmj('body', targetframe.document).width('');
			dmj('th').width('');
		}		
	}
	
	var $element = dmj('#pop-supple-content');
	if ( $element.length > 0 && $element.attr('ptm-scroll-height') != undefined )
		$element.height($element.attr('ptm-scroll-height'));
	
	if ( dmj('#printArea').attr('ptm-scroll-height') != undefined ) { 
		var $iframe = dmj(dmj('#printArea').find('iframe')[0]);
		$iframe.height($iframe.attr('ptm-scroll-height'));
		dmj('#printArea').height(dmj('#printArea').attr('ptm-scroll-height'));
	}
}

/*
*
* 특정 frame 인쇄 시, 그 frame이 화면 상에 나타나지 않은 채로 Run 함수를 실행하는 경우가 있음.
* 그럴 경우 다른 영역이 캡쳐되므로 인쇄 전에 해당 frame을 화면 상에 나타나게 한 후 Run 함수 실행.
*
* 현재 스크롤 값은 body의 ptm_scroll_top, ptm_scroll_left 속성 값으로 저장.
*
* 04.06 현재 크롬 브라우저 기준으로 document.body.scrollLeft, scrollTop 조작하여 스크롤 이동
* 타 브라우저 작업 필요.
*
*/

function PTM_SetScrollToTargetFrame( targetframe ) {
	while ( targetframe != GPrintmade_NonCrossTop ) {
		var 
		top, left;

		top = dmj( targetframe.frameElement ).offset().top;
		left = dmj( targetframe.frameElement ).offset().left;

		dmj( targetframe.parent.document.body ).attr('ptm_scroll_top', targetframe.parent.document.body.scrollTop );
		dmj( targetframe.parent.document.body ).attr('ptm_scroll_left', targetframe.parent.document.body.scrollLeft );		

		targetframe.parent.document.body.scrollTop = top;
		targetframe.parent.document.body.scrollLeft = left;



		targetframe = targetframe.parent;
	}
}

/*
*
*
*
*/

function PTM_ReturnScroll( targetframe ) {
	var frm = targetframe;

	if ( frm == window.top )
		return;

	do {
		frm = frm.parent;

		var top = dmj( frm.document.body ).attr( 'ptm_scroll_top' );
		var left = dmj( frm.document.body ).attr( 'ptm_scroll_left' );

		frm.document.body.scrollTop = top;
		frm.document.body.scrollLeft = left;
	} while ( frm != GPrintmade_NonCrossTop );	
}


/**********************************************************************************************
* 
* Works at each frames
*
**********************************************************************************************/
var PTM_WorkAt = function(context){
	//1. background-image
	//상대 경로로 되어 있는 background-image들을 절대 경로로 바꿔준다.
	dmj('body *:not(embed):not(object)',context).filter(function(){ 
		return this && dmj(this) && dmj(this).css('background-image') && (dmj(this).css('background-image').indexOf('http') != -1) }).each(function(){

			if ( this.style.backgroundImage == '' ) return;

			dmj(this).attr('ptm-background-image',this.style.backgroundImage);
			dmj(this).css('background-image',dmj(this).css('background-image'));
		});

	//2. Input
	dmj('body input[type!="hidden"]',context).each(function(){
		dmj(this).attr('value',dmj(this).val());
	});
	//3. Select
	dmj('body select',context).each(function(){
		var selectedIndex = this.selectedIndex;
		dmj('option[selected]',this).removeAttr('selected');
		dmj('option:eq('+selectedIndex+')',this).attr('selected','selected');
		/* 		dmj(this).attr('selectedIndex',this.selectedIndex); */
	});
};
var PTM_AfterWorkingAt = function(context){
	//1. Restore background-image
	dmj('body *[ptm-background-image]',context).each(function(){
		dmj(this).css('background-image',dmj(this).attr('ptm-background-image'));
	});
};

/**********************************************************************************************
* 
* Custom works
*
**********************************************************************************************/
var
total_link_count = 0, css_load_count = 0, css_list = [];

function PTM_CopyCSS( targetframe ) {
	PTM_MakeLinkTagList( targetframe );

	if ( total_link_count > 0 ) {
		for ( var i = 0; i < total_link_count; i++ ) {
			var $body = css_list[i].framewin.document.body;
			dmj( $body ).append( '<div id = "ptm_css_div' + i + '" style="display:none"></div>' );                

			var div_element = dmj( '#ptm_css_div' + i, css_list[i].framewin.document );
			dmj( div_element ).load( css_list[i].href, function(response, status, xhr) {
				var element_index = parseInt( this.id.substring(11) );
				var $head = dmj( 'head', css_list[element_index].framewin.document );	    
				var text = dmj( this ).html(); 
				dmj( $head ).append( '<style class="ptm_css_style" ptm_href = ' + css_list[element_index].href + ' type=text/css>' + text + '</style>' );
				PTM_PrintStart( targetframe );
			});
		}
	} else {
		GPrintmade.Run( targetframe );	
	}
}



function PTM_MakeLinkTagList( frm ) {
	var $head = dmj( 'head', frm.document );
	var head_link_count = dmj( 'link', $head ).length;
	total_link_count = total_link_count + head_link_count;


	var $body = dmj( 'body', frm.document );
	var body_link_count = dmj( 'link', $body ).length;
	total_link_count = total_link_count + body_link_count;    

	if ( head_link_count > 0 ) {
		dmj( $head ).find( 'link' ).each(function() {
			css_list.push( {'href':this.href, 'framewin':frm} );
		});
	}      

	if ( body_link_count > 0 ) {
		dmj( $body ).find( 'link' ).each(function() {
			css_list.push( {'href':this.href, 'framewin':frm} );
		});
	}          

	if ( frm.frames.length > 0 ) {
		for ( var i = 0; i < frm.frames.length; i++ ) {
			if ( Soo.Util.CheckCrossDomain( frm.frames[i] ) == false ) {
				PTM_MakeLinkTagList( frm.frames[i] );
			}
		}
	}
}

function PTM_PrintStart( targetframe ) {
	css_load_count++;
	if (total_link_count == css_load_count) {
		for (var i = 0; i < total_link_count; i++) {
			dmj('#ptm_css_div' + i, css_list[i].framewin.document).remove();                                    
		}
		GPrintmade.Run( targetframe );	
	}
}

function PTM_DownloadDialog() {
	var frame = GPrintmade_DownloadDivFrame;
	var dialog_width = 455;
	var dialog_height = 295;
	var downloaddiv = frame.document.createElement('div');
	var scrollLeft = frame.document.body.scrollLeft;
	var scrollTop = frame.document.body.scrollTop;
	var clientWidth = frame.document.body.clientWidth;
	var clientHeight =frame.document.body.clientHeight; 
//	if(GPrintmade.isIE && frame.document.documentElement.clientHeight > 0){		
	if(frame.document.documentElement.clientHeight > 0){
		//IE의 Quirks Mode가 아닌 7,8 모드

		if (GPrintmade.isIE) {
			scrollLeft = frame.document.documentElement.scrollLeft;
			scrollTop = frame.document.documentElement.scrollTop;
		}

		clientWidth = frame.document.documentElement.clientWidth;
		clientHeight = frame.document.documentElement.clientHeight;

	}

	var download_div_left, download_div_top;

	if (clientWidth < dialog_width)
		download_div_left = scrollLeft;
	else
		download_div_left = scrollLeft + (clientWidth - dialog_width) / 2 ;

	if (clientHeight < dialog_height)
		download_div_top = scrollTop;
	else
		download_div_top = scrollTop + (clientHeight - dialog_height) / 2 ;


	if (download_div_left < 0)
		download_div_left = 0;
	if (download_div_top < 0)
		download_div_top = 0;

	dmj(frame.document.body).append('<div id = "ptm_down" align = center style="position:absolute;top:' + download_div_top + 'px;left:' + download_div_left + 'px;width:'+dialog_width+'px;height:'+dialog_height+'px;background-image:url(\'' + INSTALL_IMG_URL + 'setup.jpg\');z-index:5001;display:block"></div>');
	var down_div = frame.document.getElementById('ptm_down');
	var $down_div = dmj(down_div);
	$down_div.append('<div style="height:160px"></div>');
	$down_div.append('<p>'+INSTALL_DIV_MSG+'</p>');

	var download_url = '';

	if (GPrintmade.isWindows == true) {
		download_url = WIN_DOWNLOAD_URL;
		$down_div.append('<a href = "' + download_url + '" id = "ptm_download" ><img alt = "다운로드" src = "' + INSTALL_IMG_URL + 'download.jpg" style = "border:0"></a>');			
	}
	else if (GPrintmade.isMac == true) {
		download_url = MAC_DOWNLOAD_URL;
		$down_div.append('<a href = "' + download_url + '" id = "ptm_download" ><img alt = "다운로드" src = "' + INSTALL_IMG_URL + 'download.jpg" style = "border:0"></a>');
	}
	else if (GPrintmade.isLinux == true) {
		var os_bit, os_type;
		var ubuntu_url = '';
		var fedora_url = '';

		if (navigator.platform.indexOf('64') > -1) {
			fedora_url = FEDORA_64BIT_URL;
			ubuntu_url = UBUNTU_64BIT_URL;
		}
		else {
			fedora_url = FEDORA_32BIT_URL;
			ubuntu_url = UBUNTU_32BIT_URL;
		}
		var installmessage = '';
		if(INSTALL_LINUX_MSG != '')
			installmessage = 'onClick="alert(\''+INSTALL_LINUX_MSG+'\');"';

		$down_div.append('<a href = "' + fedora_url + '" id = "ptm_fedora_download" '+installmessage+'><img alt = "다운로드" src = "' + INSTALL_IMG_URL + 'download_fedora.jpg" style = "border:0"></a>&nbsp;');
		$down_div.append('<a href = "' + ubuntu_url + '" id = "ptm_ubuntu_download" '+installmessage+'><img alt = "다운로드" src = "' + INSTALL_IMG_URL + 'download_ubuntu.jpg" style = "border:0"></a>&nbsp;');		                
	}

	$down_div.append('<a href = "#" id = "ptm_cancel"><img alt = "취소" src = "' + INSTALL_IMG_URL + 'cancel.jpg" style = "border:0"></a>');
	dmj(frame.document.body).append('<div id = "ptm_bg" style = "filter:alpha(opacity=50);opacity:0.5;position:absolute;top:0;left:0;background-color:#000000;z-index:5000;display:block;width:' + frame.document.body.scrollWidth + 'px;height:' + frame.document.body.scrollHeight + 'px"></div>');


	if (frame.document.getElementById('ptm_download') != null) {
		dmj(frame.document.getElementById('ptm_download')).click(function(e) {
			dmj(frame.document.getElementById('ptm_bg')).remove();
			dmj(frame.document.getElementById('ptm_down')).remove();
		});
	}
	else {
		dmj(frame.document.getElementById('ptm_fedora_download')).click(function(e) { 
			dmj(frame.document.getElementById('ptm_bg')).remove();
			dmj(frame.document.getElementById('ptm_down')).remove();
			// dmj('#ptm_bg').remove();
			// dmj('#ptm_down').remove();
		});

		dmj(frame.document.getElementById('ptm_ubuntu_download')).click(function(e) { 
			dmj(frame.document.getElementById('ptm_bg')).remove();
			dmj(frame.document.getElementById('ptm_down')).remove();
			// dmj('#ptm_bg').remove();
			// dmj('#ptm_down').remove();
		});    				    
	}


	dmj(frame.document.getElementById('ptm_cancel')).click(function(e) { 
		dmj(frame.document.getElementById('ptm_bg')).remove();
		dmj(frame.document.getElementById('ptm_down')).remove();

//		dmj('#ptm_bg').remove();
//		dmj('#ptm_down').remove();
	});
}

/*!
* jQuery JavaScript Library v1.7.1
* http://jquery.com/	
*
* Copyright 2011, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* Includes Sizzle.js
* http://sizzlejs.com/
* Copyright 2011, The Dojo Foundation
* Released under the MIT, BSD, and GPL Licenses.
*
* Date: Mon Nov 21 21:11:03 2011 -0500
*/

var dmj;

try {
	var expando = jQuery.expando;
	
	var old$ = $, oldjQuery = jQuery;
(function(r,n){function Qa(a,b,c){if(c===n&&1===a.nodeType)if(c="data-"+b.replace(Vb,"-$1").toLowerCase(),c=a.getAttribute(c),"string"===typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:d.isNumeric(c)?parseFloat(c):Wb.test(c)?d.parseJSON(c):c}catch(e){}d.data(a,b,c)}else c=n;return c}function ua(a){for(var b in a)if(!("data"===b&&d.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Ra(a,b,c){var e=b+"defer",f=b+"queue",g=b+"mark",h=d._data(a,e);h&&(("queue"===c||!d._data(a,
f))&&("mark"===c||!d._data(a,g)))&&setTimeout(function(){!d._data(a,f)&&!d._data(a,g)&&(d.removeData(a,e,!0),h.fire())},0)}function L(){return!1}function aa(){return!0}function Sa(a,b,c){b=b||0;if(d.isFunction(b))return d.grep(a,function(a,e){return!!b.call(a,e,a)===c});if(b.nodeType)return d.grep(a,function(a){return a===b===c});if("string"===typeof b){var e=d.grep(a,function(a){return 1===a.nodeType});if(Xb.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a){return 0<=d.inArray(a,
b)===c})}function Ta(a){var b=Ua.split("|"),a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function Va(a,b){if(1===b.nodeType&&d.hasData(a)){var c,e,f;e=d._data(a);var g=d._data(b,e),h=e.events;if(h)for(c in delete g.handle,g.events={},h){e=0;for(f=h[c].length;e<f;e++)d.event.add(b,c+(h[c][e].namespace?".":"")+h[c][e].namespace,h[c][e],h[c][e].data)}g.data&&(g.data=d.extend({},g.data))}}function Wa(a,b){var c;if(1===b.nodeType){b.clearAttributes&&
b.clearAttributes();b.mergeAttributes&&b.mergeAttributes(a);c=b.nodeName.toLowerCase();if("object"===c)b.outerHTML=a.outerHTML;else if("input"===c&&("checkbox"===a.type||"radio"===a.type)){if(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value)b.value=a.value}else if("option"===c)b.selected=a.defaultSelected;else if("input"===c||"textarea"===c)b.defaultValue=a.defaultValue;b.removeAttribute(d.expando)}}function ba(a){return"undefined"!==typeof a.getElementsByTagName?a.getElementsByTagName("*"):
"undefined"!==typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function Xa(a){if("checkbox"===a.type||"radio"===a.type)a.defaultChecked=a.checked}function Ya(a){var b=(a.nodeName||"").toLowerCase();"input"===b?Xa(a):"script"!==b&&"undefined"!==typeof a.getElementsByTagName&&d.grep(a.getElementsByTagName("input"),Xa)}function Yb(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Zb,"/*$0*/"));b.parentNode&&b.parentNode.removeChild(b)}
function Za(a,b,c){var e="width"===b?a.offsetWidth:a.offsetHeight,f="width"===b?$b:ac,g=0,h=f.length;if(0<e){if("border"!==c)for(;g<h;g++)c||(e-=parseFloat(d.css(a,"padding"+f[g]))||0),e="margin"===c?e+(parseFloat(d.css(a,c+f[g]))||0):e-(parseFloat(d.css(a,"border"+f[g]+"Width"))||0);return e+"px"}e=G(a,b,b);if(0>e||null==e)e=a.style[b]||0;e=parseFloat(e)||0;if(c)for(;g<h;g++)e+=parseFloat(d.css(a,"padding"+f[g]))||0,"padding"!==c&&(e+=parseFloat(d.css(a,"border"+f[g]+"Width"))||0),"margin"===c&&
(e+=parseFloat(d.css(a,c+f[g]))||0);return e+"px"}function $a(a){return function(b,c){"string"!==typeof b&&(c=b,b="*");if(d.isFunction(c))for(var e=b.toLowerCase().split(ab),f=0,g=e.length,h,i;f<g;f++)h=e[f],(i=/^\+/.test(h))&&(h=h.substr(1)||"*"),h=a[h]=a[h]||[],h[i?"unshift":"push"](c)}}function ca(a,b,c,e,d,g){d=d||b.dataTypes[0];g=g||{};g[d]=!0;for(var d=a[d],h=0,i=d?d.length:0,j=a===va,o;h<i&&(j||!o);h++)o=d[h](b,c,e),"string"===typeof o&&(!j||g[o]?o=n:(b.dataTypes.unshift(o),o=ca(a,b,c,e,o,
g)));if((j||!o)&&!g["*"])o=ca(a,b,c,e,"*",g);return o}function bb(a,b){var c,e,f=d.ajaxSettings.flatOptions||{};for(c in b)b[c]!==n&&((f[c]?a:e||(e={}))[c]=b[c]);e&&d.extend(!0,a,e)}function wa(a,b,c,e){if(d.isArray(b))d.each(b,function(b,f){c||bc.test(a)?e(a,f):wa(a+"["+("object"===typeof f||d.isArray(f)?b:"")+"]",f,c,e)});else if(!c&&null!=b&&"object"===typeof b)for(var f in b)wa(a+"["+f+"]",b[f],c,e);else e(a,b)}function cb(){try{return new r.XMLHttpRequest}catch(a){}}function db(){setTimeout(cc,
0);return da=d.now()}function cc(){da=n}function B(a,b){var c={};d.each(eb.concat.apply([],eb.slice(0,b)),function(){c[this]=a});return c}function fb(a){if(!xa[a]){var b=l.body,c=d("<"+a+">").appendTo(b),e=c.css("display");c.remove();if("none"===e||""===e){v||(v=l.createElement("iframe"),v.frameBorder=v.width=v.height=0);b.appendChild(v);if(!K||!v.createElement)K=(v.contentWindow||v.contentDocument).document,K.write(("CSS1Compat"===l.compatMode?"<!doctype html>":"")+"<html><body>"),K.close();c=K.createElement(a);
K.body.appendChild(c);e=d.css(c,"display");b.removeChild(v)}xa[a]=e}return xa[a]}function ya(a){return d.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var l=r.document,dc=r.location,d,gb=function(){if(!k.isReady){try{l.documentElement.doScroll("left")}catch(a){setTimeout(gb,1);return}k.ready()}},k=function(a,b){return new k.fn.init(a,b,hb)},ec=r.jQuery,fc=r.$,hb,gc=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,ib=/\S/,jb=/^\s+/,kb=/\s+$/,hc=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,ic=/^[\],:{}\s]*$/,
jc=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,kc=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,lc=/(?:^|:|,)(?:\s*\[)+/g,mc=/(webkit)[ \/]([\w.]+)/,nc=/(opera)(?:.*version)?[ \/]([\w.]+)/,oc=/(msie) ([\w.]+)/,pc=/(mozilla)(?:.*? rv:([\w.]+))?/,qc=/-([a-z]|[0-9])/ig,rc=/^-ms-/,sc=function(a,b){return(b+"").toUpperCase()},tc=r.navigator.userAgent,ea,fa,C,uc=Object.prototype.toString,za=Object.prototype.hasOwnProperty,Aa=Array.prototype.push,X=Array.prototype.slice,lb=String.prototype.trim,
mb=Array.prototype.indexOf,nb={};k.fn=k.prototype={constructor:k,init:function(a,b,c){var e;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("body"===a&&!b&&l.body)return this.context=l,this[0]=l.body,this.selector=a,this.length=1,this;if("string"===typeof a){if((e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&3<=a.length?[null,a,null]:gc.exec(a))&&(e[1]||!b)){if(e[1])return c=(b=b instanceof k?b[0]:b)?b.ownerDocument||b:l,(a=hc.exec(a))?k.isPlainObject(b)?(a=[l.createElement(a[1])],
k.fn.attr.call(a,b,!0)):a=[c.createElement(a[1])]:(a=k.buildFragment([e[1]],[c]),a=(a.cacheable?k.clone(a.fragment):a.fragment).childNodes),k.merge(this,a);if((b=l.getElementById(e[2]))&&b.parentNode){if(b.id!==e[2])return c.find(a);this.length=1;this[0]=b}this.context=l;this.selector=a;return this}return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a)}if(k.isFunction(a))return c.ready(a);a.selector!==n&&(this.selector=a.selector,this.context=a.context);return k.makeArray(a,this)},selector:"",
jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return X.call(this,0)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();k.isArray(a)?Aa.apply(e,a):k.merge(e,a);e.prevObject=this;e.context=this.context;"find"===b?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return k.each(this,a,b)},ready:function(a){k.bindReady();
fa.add(a);return this},eq:function(a){a=+a;return-1===a?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(X.apply(this,arguments),"slice",X.call(arguments).join(","))},map:function(a){return this.pushStack(k.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:Aa,sort:[].sort,splice:[].splice};k.fn.init.prototype=k.fn;k.extend=k.fn.extend=function(){var a,
b,c,e,d,g=arguments[0]||{},h=1,i=arguments.length,j=!1;"boolean"===typeof g&&(j=g,g=arguments[1]||{},h=2);"object"!==typeof g&&!k.isFunction(g)&&(g={});i===h&&(g=this,--h);for(;h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],e=a[b],g!==e&&(j&&e&&(k.isPlainObject(e)||(d=k.isArray(e)))?(d?(d=!1,c=c&&k.isArray(c)?c:[]):c=c&&k.isPlainObject(c)?c:{},g[b]=k.extend(j,c,e)):e!==n&&(g[b]=e));return g};k.extend({noConflict:function(a){r.$===k&&(r.$=fc);a&&r.jQuery===k&&(r.jQuery=ec);return k},isReady:!1,
readyWait:1,holdReady:function(a){a?k.readyWait++:k.ready(!0)},ready:function(a){if(!0===a&&!--k.readyWait||!0!==a&&!k.isReady){if(!l.body)return setTimeout(k.ready,1);k.isReady=!0;!0!==a&&0<--k.readyWait||(fa.fireWith(l,[k]),k.fn.trigger&&k(l).trigger("ready").off("ready"))}},bindReady:function(){if(!fa){fa=k.Callbacks("once memory");if("complete"===l.readyState)return setTimeout(k.ready,1);if(l.addEventListener)l.addEventListener("DOMContentLoaded",C,!1),r.addEventListener("load",k.ready,!1);else if(l.attachEvent){l.attachEvent("onreadystatechange",
C);r.attachEvent("onload",k.ready);var a=!1;try{a=null==r.frameElement}catch(b){}l.documentElement.doScroll&&a&&gb()}}},isFunction:function(a){return"function"===k.type(a)},isArray:Array.isArray||function(a){return"array"===k.type(a)},isWindow:function(a){return a&&"object"===typeof a&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):nb[uc.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==k.type(a)||a.nodeType||
k.isWindow(a))return!1;try{if(a.constructor&&!za.call(a,"constructor")&&!za.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);return c===n||za.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw Error(a);},parseJSON:function(a){if("string"!==typeof a||!a)return null;a=k.trim(a);if(r.JSON&&r.JSON.parse)return r.JSON.parse(a);if(ic.test(a.replace(jc,"@").replace(kc,"]").replace(lc,"")))return(new Function("return "+a))();
k.error("Invalid JSON: "+a)},parseXML:function(a){var b,c;try{r.DOMParser?(c=new DOMParser,b=c.parseFromString(a,"text/xml")):(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a))}catch(e){b=n}(!b||!b.documentElement||b.getElementsByTagName("parsererror").length)&&k.error("Invalid XML: "+a);return b},noop:function(){},globalEval:function(a){a&&ib.test(a)&&(r.execScript||function(a){r.eval.call(r,a)})(a)},camelCase:function(a){return a.replace(rc,"ms-").replace(qc,sc)},nodeName:function(a,
b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,c){var e,d=0,g=a.length,h=g===n||k.isFunction(a);if(c)if(h)for(e in a){if(!1===b.apply(a[e],c))break}else for(;d<g&&!1!==b.apply(a[d++],c););else if(h)for(e in a){if(!1===b.call(a[e],e,a[e]))break}else for(;d<g&&!1!==b.call(a[d],d,a[d++]););return a},trim:lb?function(a){return null==a?"":lb.call(a)}:function(a){return null==a?"":a.toString().replace(jb,"").replace(kb,"")},makeArray:function(a,b){var c=b||[];if(null!=
a){var e=k.type(a);null==a.length||"string"===e||"function"===e||"regexp"===e||k.isWindow(a)?Aa.call(c,a):k.merge(c,a)}return c},inArray:function(a,b,c){var e;if(b){if(mb)return mb.call(b,a,c);e=b.length;for(c=c?0>c?Math.max(0,e+c):c:0;c<e;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=a.length,e=0;if("number"===typeof b.length)for(var d=b.length;e<d;e++)a[c++]=b[e];else for(;b[e]!==n;)a[c++]=b[e++];a.length=c;return a},grep:function(a,b,c){for(var e=[],d,c=!!c,g=0,h=a.length;g<
h;g++)d=!!b(a[g],g),c!==d&&e.push(a[g]);return e},map:function(a,b,c){var e,d,g=[],h=0,i=a.length;if(a instanceof k||i!==n&&"number"===typeof i&&(0<i&&a[0]&&a[i-1]||0===i||k.isArray(a)))for(;h<i;h++)e=b(a[h],h,c),null!=e&&(g[g.length]=e);else for(d in a)e=b(a[d],d,c),null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,b){if("string"===typeof b)var c=a[b],b=a,a=c;if(!k.isFunction(a))return n;var e=X.call(arguments,2),c=function(){return a.apply(b,e.concat(X.call(arguments)))};
c.guid=a.guid=a.guid||c.guid||k.guid++;return c},access:function(a,b,c,e,d,g){var h=a.length;if("object"===typeof b){for(var i in b)k.access(a,i,b[i],e,d,c);return a}if(c!==n){e=!g&&e&&k.isFunction(c);for(i=0;i<h;i++)d(a[i],b,e?c.call(a[i],i,d(a[i],b)):c,g);return a}return h?d(a[0],b):n},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();a=mc.exec(a)||nc.exec(a)||oc.exec(a)||0>a.indexOf("compatible")&&pc.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(b,
e){return new a.fn.init(b,e)}k.extend(!0,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(c,e){e&&(e instanceof k&&!(e instanceof a))&&(e=a(e));return k.fn.init.call(this,c,e,b)};a.fn.init.prototype=a.fn;var b=a(l);return a},browser:{}});k.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){nb["[object "+b+"]"]=b.toLowerCase()});ea=k.uaMatch(tc);ea.browser&&(k.browser[ea.browser]=!0,k.browser.version=ea.version);
k.browser.webkit&&(k.browser.safari=!0);ib.test("\u00a0")&&(jb=/^[\s\xA0]+/,kb=/[\s\xA0]+$/);hb=k(l);l.addEventListener?C=function(){l.removeEventListener("DOMContentLoaded",C,false);k.ready()}:l.attachEvent&&(C=function(){if(l.readyState==="complete"){l.detachEvent("onreadystatechange",C);k.ready()}});d=k;var ob={};d.Callbacks=function(a){var b;if(a){if(!(b=ob[a])){b=a;var c=ob[b]={},e,f;b=b.split(/\s+/);e=0;for(f=b.length;e<f;e++)c[b[e]]=true;b=c}}else b={};var a=b,g=[],h=[],i,j,o,H,l,k=function(b){var c,
e,f,h;c=0;for(e=b.length;c<e;c++){f=b[c];h=d.type(f);h==="array"?k(f):h==="function"&&(!a.unique||!m.has(f))&&g.push(f)}},p=function(b,c){c=c||[];i=!a.memory||[b,c];j=true;l=o||0;o=0;for(H=g.length;g&&l<H;l++)if(g[l].apply(b,c)===false&&a.stopOnFalse){i=true;break}j=false;if(g)if(a.once)i===true?m.disable():g=[];else if(h&&h.length){i=h.shift();m.fireWith(i[0],i[1])}},m={add:function(){if(g){var a=g.length;k(arguments);if(j)H=g.length;else if(i&&i!==true){o=a;p(i[0],i[1])}}return this},remove:function(){if(g)for(var b=
arguments,c=0,e=b.length;c<e;c++)for(var d=0;d<g.length;d++)if(b[c]===g[d]){if(j&&d<=H){H--;d<=l&&l--}g.splice(d--,1);if(a.unique)break}return this},has:function(a){if(g)for(var b=0,c=g.length;b<c;b++)if(a===g[b])return true;return false},empty:function(){g=[];return this},disable:function(){g=h=i=n;return this},disabled:function(){return!g},lock:function(){h=n;(!i||i===true)&&m.disable();return this},locked:function(){return!h},fireWith:function(b,c){h&&(j?a.once||h.push([b,c]):(!a.once||!i)&&p(b,
c));return this},fire:function(){m.fireWith(this,arguments);return this},fired:function(){return!!i}};return m};var Ca=[].slice;d.extend({Deferred:function(a){var b=d.Callbacks("once memory"),c=d.Callbacks("once memory"),e=d.Callbacks("memory"),f="pending",g={resolve:b,reject:c,notify:e},h={done:b.add,fail:c.add,progress:e.add,state:function(){return f},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,
arguments);return this},pipe:function(a,b,c){return d.Deferred(function(e){d.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],f=b[1],g;if(d.isFunction(c))i[a](function(){if((g=c.apply(this,arguments))&&d.isFunction(g.promise))g.promise().then(e.resolve,e.reject,e.notify);else e[f+"With"](this===i?e:this,[g])});else i[a](e[f])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g){i[j]=g[j].fire;
i[j+"With"]=g[j].fireWith}i.done(function(){f="resolved"},c.disable,e.lock).fail(function(){f="rejected"},b.disable,e.lock);a&&a.call(i,i);return i},when:function(a){function b(a){return function(b){e[a]=arguments.length>1?Ca.call(arguments,0):b;--i||j.resolveWith(j,e)}}function c(a){return function(b){h[a]=arguments.length>1?Ca.call(arguments,0):b;j.notifyWith(o,h)}}var e=Ca.call(arguments,0),f=0,g=e.length,h=Array(g),i=g,j=g<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),o=j.promise();if(g>1){for(;f<
g;f++)e[f]&&e[f].promise&&d.isFunction(e[f].promise)?e[f].promise().then(b(f),j.reject,c(f)):--i;i||j.resolveWith(j,e)}else j!==a&&j.resolveWith(j,g?[a]:[]);return o}});var vc=d,Da;var s,Ea,M,ga,ha,u,R,I,Y,ia,Fa,S,m=l.createElement("div");m.setAttribute("className","t");m.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";Ea=m.getElementsByTagName("*");M=m.getElementsByTagName("a")[0];if(!Ea||!Ea.length||!M)Da={};else{ga=l.createElement("select");
ha=ga.appendChild(l.createElement("option"));u=m.getElementsByTagName("input")[0];s={leadingWhitespace:3===m.firstChild.nodeType,tbody:!m.getElementsByTagName("tbody").length,htmlSerialize:!!m.getElementsByTagName("link").length,style:/top/.test(M.getAttribute("style")),hrefNormalized:"/a"===M.getAttribute("href"),opacity:/^0.55/.test(M.style.opacity),cssFloat:!!M.style.cssFloat,checkOn:"on"===u.value,optSelected:ha.selected,getSetAttribute:"t"!==m.className,enctype:!!l.createElement("form").enctype,
html5Clone:"<:nav></:nav>"!==l.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0};u.checked=!0;s.noCloneChecked=u.cloneNode(!0).checked;ga.disabled=!0;s.optDisabled=!ha.disabled;try{delete m.test}catch(md){s.deleteExpando=!1}!m.addEventListener&&(m.attachEvent&&m.fireEvent)&&(m.attachEvent("onclick",function(){s.noCloneEvent=false}),m.cloneNode(!0).fireEvent("onclick"));
u=l.createElement("input");u.value="t";u.setAttribute("type","radio");s.radioValue="t"===u.value;u.setAttribute("checked","checked");m.appendChild(u);I=l.createDocumentFragment();I.appendChild(m.lastChild);s.checkClone=I.cloneNode(!0).cloneNode(!0).lastChild.checked;s.appendChecked=u.checked;I.removeChild(u);I.appendChild(m);m.innerHTML="";r.getComputedStyle&&(R=l.createElement("div"),R.style.width="0",R.style.marginRight="0",m.style.width="2px",m.appendChild(R),s.reliableMarginRight=0===(parseInt((r.getComputedStyle(R,
null)||{marginRight:0}).marginRight,10)||0));if(m.attachEvent)for(Fa in{submit:1,change:1,focusin:1})ia="on"+Fa,S=ia in m,S||(m.setAttribute(ia,"return;"),S="function"===typeof m[ia]),s[Fa+"Bubbles"]=S;I.removeChild(m);I=ga=ha=R=m=u=null;d(function(){var a,b,c,e,f=l.getElementsByTagName("body")[0];if(f){a=l.createElement("div");a.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";f.insertBefore(a,f.firstChild);m=l.createElement("div");a.appendChild(m);
m.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";Y=m.getElementsByTagName("td");S=Y[0].offsetHeight===0;Y[0].style.display="";Y[1].style.display="none";s.reliableHiddenOffsets=S&&Y[0].offsetHeight===0;m.innerHTML="";m.style.width=m.style.paddingLeft="1px";d.boxModel=s.boxModel=m.offsetWidth===2;if(typeof m.style.zoom!=="undefined"){m.style.display="inline";m.style.zoom=1;s.inlineBlockNeedsLayout=m.offsetWidth===2;m.style.display="";m.innerHTML="<div style='width:4px;'></div>";
s.shrinkWrapBlocks=m.offsetWidth!==2}m.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;";m.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";b=m.firstChild;c=b.firstChild;e=b.nextSibling.firstChild.firstChild;
e={doesNotAddBorder:c.offsetTop!==5,doesAddBorderForTableAndCells:e.offsetTop===5};c.style.position="fixed";c.style.top="20px";e.fixedPosition=c.offsetTop===20||c.offsetTop===15;c.style.position=c.style.top="";b.style.overflow="hidden";b.style.position="relative";e.subtractsBorderForOverflowNotVisible=c.offsetTop===-5;e.doesNotIncludeMarginInBodyOffset=f.offsetTop!==1;f.removeChild(a);m=null;d.extend(s,e)}});Da=s}vc.support=Da;var Wb=/^(?:\{.*\}|\[.*\])$/,Vb=/([A-Z])/g;d.extend({cache:{},uuid:0,expando:"jQuery"+
(d.fn.jquery+(new Date).getTime().toString().replace(/\D/g,"")),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!ua(a)},data:function(a,b,c,e){if(d.acceptData(a)){var f;f=d.expando;var g=typeof b==="string",h=a.nodeType,i=h?d.cache:a,j=h?a[f]:a[f]&&f,o=b==="events";if(j&&i[j]&&(o||e||i[j].data)||!(g&&c===n)){j||(h?a[f]=j=++d.uuid:j=f);if(!i[j]){i[j]={};if(!h)i[j].toJSON=d.noop}if(typeof b===
"object"||typeof b==="function")e?i[j]=d.extend(i[j],b):i[j].data=d.extend(i[j].data,b);f=a=i[j];if(!e){if(!a.data)a.data={};a=a.data}c!==n&&(a[d.camelCase(b)]=c);if(o&&!a[b])return f.events;if(g){c=a[b];c==null&&(c=a[d.camelCase(b)])}else c=a;return c}}},removeData:function(a,b,c){if(d.acceptData(a)){var e,f,g,h=d.expando,i=a.nodeType,j=i?d.cache:a,o=i?a[h]:h;if(j[o]){if(b)if(e=c?j[o]:j[o].data){if(!d.isArray(b))if(b in e)b=[b];else{b=d.camelCase(b);b=b in e?[b]:b.split(" ")}f=0;for(g=b.length;f<
g;f++)delete e[b[f]];if(!(c?ua:d.isEmptyObject)(e))return}if(!c){delete j[o].data;if(!ua(j[o]))return}d.support.deleteExpando||!j.setInterval?delete j[o]:j[o]=null;i&&(d.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}}},_data:function(a,b,c){return d.data(a,b,c,true)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});d.fn.extend({data:function(a,b){var c,e,f,g=null;
if(typeof a==="undefined"){if(this.length){g=d.data(this[0]);if(this[0].nodeType===1&&!d._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var h=0,i=e.length;h<i;h++){f=e[h].name;if(f.indexOf("data-")===0){f=d.camelCase(f.substring(5));Qa(this[0],f,g[f])}}d._data(this[0],"parsedAttrs",true)}}return g}if(typeof a==="object")return this.each(function(){d.data(this,a)});c=a.split(".");c[1]=c[1]?"."+c[1]:"";if(b===n){g=this.triggerHandler("getData"+c[1]+"!",[c[0]]);if(g===n&&this.length){g=d.data(this[0],
a);g=Qa(this[0],a,g)}return g===n&&c[1]?this.data(c[0]):g}return this.each(function(){var e=d(this),f=[c[0],b];e.triggerHandler("setData"+c[1]+"!",f);d.data(this,a,b);e.triggerHandler("changeData"+c[1]+"!",f)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}});d.extend({_mark:function(a,b){if(a){b=(b||"fx")+"mark";d._data(a,b,(d._data(a,b)||0)+1)}},_unmark:function(a,b,c){if(a!==true){c=b;b=a;a=false}if(b){var c=c||"fx",e=c+"mark";if(a=a?0:(d._data(b,e)||1)-1)d._data(b,
e,a);else{d.removeData(b,e,true);Ra(b,c,"mark")}}},queue:function(a,b,c){var e;if(a){b=(b||"fx")+"queue";e=d._data(a,b);c&&(!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c));return e||[]}},dequeue:function(a,b){var b=b||"fx",c=d.queue(a,b),e=c.shift(),f={};e==="inprogress"&&(e=c.shift());if(e){b==="fx"&&c.unshift("inprogress");d._data(a,b+".run",f);e.call(a,function(){d.dequeue(a,b)},f)}if(!c.length){d.removeData(a,b+"queue "+b+".run",true);Ra(a,b,"queue")}}});d.fn.extend({queue:function(a,
b){if(typeof a!=="string"){b=a;a="fx"}return b===n?d.queue(this[0],a):this.each(function(){var c=d.queue(this,a,b);a==="fx"&&c[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a;return this.queue(b||"fx",function(b,e){var d=setTimeout(b,a);e.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a){function b(){--g||c.resolveWith(e,[e])}typeof a!==
"string"&&(a=n);for(var a=a||"fx",c=d.Deferred(),e=this,f=e.length,g=1,h=a+"defer",i=a+"queue",a=a+"mark",j;f--;)if(j=d.data(e[f],h,n,true)||(d.data(e[f],i,n,true)||d.data(e[f],a,n,true))&&d.data(e[f],h,d.Callbacks("once memory"),true)){g++;j.add(b)}b();return c.promise()}});var qb=/[\n\t\r]/g,ja=/\s+/,wc=/\r/g,xc=/^(?:button|input)$/i,yc=/^(?:button|input|object|select|textarea)$/i,zc=/^a(?:rea)?$/i,rb=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
sb=d.support.getSetAttribute,w,tb,ub;d.fn.extend({attr:function(a,b){return d.access(this,a,b,true,d.attr)},removeAttr:function(a){return this.each(function(){d.removeAttr(this,a)})},prop:function(a,b){return d.access(this,a,b,true,d.prop)},removeProp:function(a){a=d.propFix[a]||a;return this.each(function(){try{this[a]=n;delete this[a]}catch(b){}})},addClass:function(a){var b,c,e,f,g,h,i;if(d.isFunction(a))return this.each(function(b){d(this).addClass(a.call(this,b,this.className))});if(a&&typeof a===
"string"){b=a.split(ja);c=0;for(e=this.length;c<e;c++){f=this[c];if(f.nodeType===1)if(!f.className&&b.length===1)f.className=a;else{g=" "+f.className+" ";h=0;for(i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g=g+(b[h]+" "));f.className=d.trim(g)}}}return this},removeClass:function(a){var b,c,e,f,g,h,i;if(d.isFunction(a))return this.each(function(b){d(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a==="string"||a===n){b=(a||"").split(ja);c=0;for(e=this.length;c<e;c++){f=this[c];if(f.nodeType===
1&&f.className)if(a){g=(" "+f.className+" ").replace(qb," ");h=0;for(i=b.length;h<i;h++)g=g.replace(" "+b[h]+" "," ");f.className=d.trim(g)}else f.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";return d.isFunction(a)?this.each(function(c){d(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string")for(var f,g=0,h=d(this),i=b,j=a.split(ja);f=j[g++];){i=e?i:!h.hasClass(f);h[i?"addClass":"removeClass"](f)}else if(c==="undefined"||
c==="boolean"){this.className&&d._data(this,"__className__",this.className);this.className=this.className||a===false?"":d._data(this,"__className__")||""}})},hasClass:function(a){for(var a=" "+a+" ",b=0,c=this.length;b<c;b++)if(this[b].nodeType===1&&(" "+this[b].className+" ").replace(qb," ").indexOf(a)>-1)return true;return false},val:function(a){var b,c,e,f=this[0];if(arguments.length){e=d.isFunction(a);return this.each(function(c){var f=d(this);if(this.nodeType===1){c=e?a.call(this,c,f.val()):
a;c==null?c="":typeof c==="number"?c=c+"":d.isArray(c)&&(c=d.map(c,function(a){return a==null?"":a+""}));b=d.valHooks[this.nodeName.toLowerCase()]||d.valHooks[this.type];if(!b||!("set"in b)||b.set(this,c,"value")===n)this.value=c}})}if(f){if((b=d.valHooks[f.nodeName.toLowerCase()]||d.valHooks[f.type])&&"get"in b&&(c=b.get(f,"value"))!==n)return c;c=f.value;return typeof c==="string"?c.replace(wc,""):c==null?"":c}}});d.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?
a.value:a.text}},select:{get:function(a){var b,c,e=a.selectedIndex,f=[],g=a.options,h=a.type==="select-one";if(e<0)return null;a=h?e:0;for(c=h?e+1:g.length;a<c;a++){b=g[a];if(b.selected&&(d.support.optDisabled?!b.disabled:b.getAttribute("disabled")===null)&&(!b.parentNode.disabled||!d.nodeName(b.parentNode,"optgroup"))){b=d(b).val();if(h)return b;f.push(b)}}return h&&!f.length&&g.length?d(g[e]).val():f},set:function(a,b){var c=d.makeArray(b);d(a).find("option").each(function(){this.selected=d.inArray(d(this).val(),
c)>=0});if(!c.length)a.selectedIndex=-1;return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,b,c,e){var f,g,h=a.nodeType;if(a&&!(h===3||h===8||h===2)){if(e&&b in d.attrFn)return d(a)[b](c);if(typeof a.getAttribute==="undefined")return d.prop(a,b,c);if(e=h!==1||!d.isXMLDoc(a)){b=b.toLowerCase();g=d.attrHooks[b]||(rb.test(b)?tb:w)}if(c!==n)if(c===null)d.removeAttr(a,b);else{if(g&&"set"in g&&e&&(f=g.set(a,c,b))!==n)return f;a.setAttribute(b,""+c);return c}else{if(g&&
"get"in g&&e&&(f=g.get(a,b))!==null)return f;f=a.getAttribute(b);return f===null?n:f}}},removeAttr:function(a,b){var c,e,f,g,h=0;if(b&&a.nodeType===1){e=b.toLowerCase().split(ja);for(g=e.length;h<g;h++)if(f=e[h]){c=d.propFix[f]||f;d.attr(a,f,"");a.removeAttribute(sb?f:c);rb.test(f)&&c in a&&(a[c]=false)}}},attrHooks:{type:{set:function(a,b){if(xc.test(a.nodeName)&&a.parentNode)d.error("type property can't be changed");else if(!d.support.radioValue&&b==="radio"&&d.nodeName(a,"input")){var c=a.value;
a.setAttribute("type",b);if(c)a.value=c;return b}}},value:{get:function(a,b){return w&&d.nodeName(a,"button")?w.get(a,b):b in a?a.value:null},set:function(a,b,c){if(w&&d.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,
b,c){var e,f,g;g=a.nodeType;if(a&&!(g===3||g===8||g===2)){if(g=g!==1||!d.isXMLDoc(a)){b=d.propFix[b]||b;f=d.propHooks[b]}return c!==n?f&&"set"in f&&(e=f.set(a,c,b))!==n?e:a[b]=c:f&&"get"in f&&(e=f.get(a,b))!==null?e:a[b]}},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?parseInt(b.value,10):yc.test(a.nodeName)||zc.test(a.nodeName)&&a.href?0:n}}}});d.attrHooks.tabindex=d.propHooks.tabIndex;tb={get:function(a,b){var c,e=d.prop(a,b);return e===true||typeof e!==
"boolean"&&(c=a.getAttributeNode(b))&&c.nodeValue!==false?b.toLowerCase():n},set:function(a,b,c){if(b===false)d.removeAttr(a,c);else{b=d.propFix[c]||c;b in a&&(a[b]=true);a.setAttribute(c,c.toLowerCase())}return c}};sb||(ub={name:!0,id:!0},w=d.valHooks.button={get:function(a,b){var c;return(c=a.getAttributeNode(b))&&(ub[b]?c.nodeValue!=="":c.specified)?c.nodeValue:n},set:function(a,b,c){var e=a.getAttributeNode(c);if(!e){e=l.createAttribute(c);a.setAttributeNode(e)}return e.nodeValue=b+""}},d.attrHooks.tabindex.set=
w.set,d.each(["width","height"],function(a,b){d.attrHooks[b]=d.extend(d.attrHooks[b],{set:function(a,e){if(e===""){a.setAttribute(b,"auto");return e}}})}),d.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false");w.set(a,b,c)}});d.support.hrefNormalized||d.each(["href","src","width","height"],function(a,b){d.attrHooks[b]=d.extend(d.attrHooks[b],{get:function(a){a=a.getAttribute(b,2);return a===null?n:a}})});d.support.style||(d.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||
n},set:function(a,b){return a.style.cssText=""+b}});d.support.optSelected||(d.propHooks.selected=d.extend(d.propHooks.selected,{get:function(a){if(a=a.parentNode){a.selectedIndex;a.parentNode&&a.parentNode.selectedIndex}return null}}));d.support.enctype||(d.propFix.enctype="encoding");d.support.checkOn||d.each(["radio","checkbox"],function(){d.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}});d.each(["radio","checkbox"],function(){d.valHooks[this]=d.extend(d.valHooks[this],
{set:function(a,b){if(d.isArray(b))return a.checked=d.inArray(d(a).val(),b)>=0}})});var Ga=/^(?:textarea|input|select)$/i,vb=/^([^\.]*)?(?:\.(.+))?$/,Ac=/\bhover(\.\S+)?\b/,Bc=/^key/,Cc=/^(?:mouse|contextmenu)|click/,wb=/^(?:focusinfocus|focusoutblur)$/,Dc=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Ec=function(a){if(a=Dc.exec(a)){a[1]=(a[1]||"").toLowerCase();a[3]=a[3]&&RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)")}return a},xb=function(a){return d.event.special.hover?a:a.replace(Ac,"mouseenter$1 mouseleave$1")};
d.event={add:function(a,b,c,e,f){var g,h,i,j,o,l,k,P,p;if(!(a.nodeType===3||a.nodeType===8||!b||!c||!(g=d._data(a)))){if(c.handler){k=c;c=k.handler}if(!c.guid)c.guid=d.guid++;i=g.events;if(!i)g.events=i={};h=g.handle;if(!h){g.handle=h=function(a){return typeof d!=="undefined"&&(!a||d.event.triggered!==a.type)?d.event.dispatch.apply(h.elem,arguments):n};h.elem=a}b=d.trim(xb(b)).split(" ");for(g=0;g<b.length;g++){j=vb.exec(b[g])||[];o=j[1];l=(j[2]||"").split(".").sort();p=d.event.special[o]||{};o=(f?
p.delegateType:p.bindType)||o;p=d.event.special[o]||{};j=d.extend({type:o,origType:j[1],data:e,handler:c,guid:c.guid,selector:f,quick:Ec(f),namespace:l.join(".")},k);P=i[o];if(!P){P=i[o]=[];P.delegateCount=0;if(!p.setup||p.setup.call(a,e,l,h)===false)a.addEventListener?a.addEventListener(o,h,false):a.attachEvent&&a.attachEvent("on"+o,h)}if(p.add){p.add.call(a,j);if(!j.handler.guid)j.handler.guid=c.guid}f?P.splice(P.delegateCount++,0,j):P.push(j);d.event.global[o]=true}a=null}},global:{},remove:function(a,
b,c,e,f){var g=d.hasData(a)&&d._data(a),h,i,j,o,l,n,k,p,m,q;if(g&&(k=g.events)){b=d.trim(xb(b||"")).split(" ");for(h=0;h<b.length;h++){i=vb.exec(b[h])||[];j=o=i[1];i=i[2];if(j){p=d.event.special[j]||{};j=(e?p.delegateType:p.bindType)||j;m=k[j]||[];l=m.length;i=i?RegExp("(^|\\.)"+i.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<m.length;n++){q=m[n];if((f||o===q.origType)&&(!c||c.guid===q.guid)&&(!i||i.test(q.namespace))&&(!e||e===q.selector||e==="**"&&q.selector)){m.splice(n--,1);
q.selector&&m.delegateCount--;p.remove&&p.remove.call(a,q)}}if(m.length===0&&l!==m.length){(!p.teardown||p.teardown.call(a,i)===false)&&d.removeEvent(a,j,g.handle);delete k[j]}}else for(j in k)d.event.remove(a,j+b[h],c,e,true)}if(d.isEmptyObject(k)){if(b=g.handle)b.elem=null;d.removeData(a,["events","handle"],true)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(a,b,c,e){if(!c||!(c.nodeType===3||c.nodeType===8)){var f=a.type||a,g=[],h,i,j,o,l;if(!wb.test(f+d.event.triggered)){if(f.indexOf("!")>=
0){f=f.slice(0,-1);h=true}if(f.indexOf(".")>=0){g=f.split(".");f=g.shift();g.sort()}if(c&&!d.event.customEvent[f]||d.event.global[f]){a=typeof a==="object"?a[d.expando]?a:new d.Event(f,a):new d.Event(f);a.type=f;a.isTrigger=true;a.exclusive=h;a.namespace=g.join(".");a.namespace_re=a.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;h=f.indexOf(":")<0?"on"+f:"";if(c){a.result=n;if(!a.target)a.target=c;b=b!=null?d.makeArray(b):[];b.unshift(a);j=d.event.special[f]||{};if(!(j.trigger&&
j.trigger.apply(c,b)===false)){l=[[c,j.bindType||f]];if(!e&&!j.noBubble&&!d.isWindow(c)){o=j.delegateType||f;g=wb.test(o+f)?c:c.parentNode;for(i=null;g;g=g.parentNode){l.push([g,o]);i=g}i&&i===c.ownerDocument&&l.push([i.defaultView||i.parentWindow||r,o])}for(i=0;i<l.length&&!a.isPropagationStopped();i++){g=l[i][0];a.type=l[i][1];(o=(d._data(g,"events")||{})[a.type]&&d._data(g,"handle"))&&o.apply(g,b);(o=h&&g[h])&&(d.acceptData(g)&&o.apply(g,b)===false)&&a.preventDefault()}a.type=f;if(!e&&!a.isDefaultPrevented()&&
(!j._default||j._default.apply(c.ownerDocument,b)===false)&&!(f==="click"&&d.nodeName(c,"a"))&&d.acceptData(c))if(h&&c[f]&&(f!=="focus"&&f!=="blur"||a.target.offsetWidth!==0)&&!d.isWindow(c)){(i=c[h])&&(c[h]=null);d.event.triggered=f;c[f]();d.event.triggered=n;i&&(c[h]=i)}return a.result}}else{c=d.cache;for(i in c)c[i].events&&c[i].events[f]&&d.event.trigger(a,b,c[i].handle.elem,true)}}}}},dispatch:function(a){var a=d.event.fix(a||r.event),b=(d._data(this,"events")||{})[a.type]||[],c=b.delegateCount,
e=[].slice.call(arguments,0),f=!a.exclusive&&!a.namespace,g=[],h,i,j,o,l,k,p;e[0]=a;a.delegateTarget=this;if(c&&!a.target.disabled&&!(a.button&&a.type==="click")){j=d(this);j.context=this.ownerDocument||this;for(i=a.target;i!=this;i=i.parentNode||this){l={};k=[];j[0]=i;for(h=0;h<c;h++){o=b[h];p=o.selector;if(l[p]===n){var m=l,q=p,E;if(o.quick){E=o.quick;var s=i.attributes||{};E=(!E[1]||i.nodeName.toLowerCase()===E[1])&&(!E[2]||(s.id||{}).value===E[2])&&(!E[3]||E[3].test((s["class"]||{}).value))}else E=
j.is(p);m[q]=E}l[p]&&k.push(o)}k.length&&g.push({elem:i,matches:k})}}b.length>c&&g.push({elem:this,matches:b.slice(c)});for(h=0;h<g.length&&!a.isPropagationStopped();h++){c=g[h];a.currentTarget=c.elem;for(b=0;b<c.matches.length&&!a.isImmediatePropagationStopped();b++){o=c.matches[b];if(f||!a.namespace&&!o.namespace||a.namespace_re&&a.namespace_re.test(o.namespace)){a.data=o.data;a.handleObj=o;o=((d.event.special[o.origType]||{}).handle||o.handler).apply(c.elem,e);if(o!==n){a.result=o;if(o===false){a.preventDefault();
a.stopPropagation()}}}}}return a.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(a,b){if(a.which==null)a.which=b.charCode!=null?b.charCode:b.keyCode;return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(a,b){var c,e,d=b.button,g=b.fromElement;if(a.pageX==null&&b.clientX!=null){c=a.target.ownerDocument||l;e=c.documentElement;c=c.body;a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0);a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)}if(!a.relatedTarget&&g)a.relatedTarget=g===a.target?b.toElement:g;if(!a.which&&d!==n)a.which=d&1?1:d&2?3:d&4?2:0;return a}},fix:function(a){if(a[d.expando])return a;var b,
c,e=a,f=d.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props,a=d.Event(e);for(b=g.length;b;){c=g[--b];a[c]=e[c]}if(!a.target)a.target=e.srcElement||l;if(a.target.nodeType===3)a.target=a.target.parentNode;if(a.metaKey===n)a.metaKey=a.ctrlKey;return f.filter?f.filter(a,e):a},special:{ready:{setup:d.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){if(d.isWindow(this))this.onbeforeunload=c},teardown:function(a,
b){if(this.onbeforeunload===b)this.onbeforeunload=null}}},simulate:function(a,b,c,e){a=d.extend(new d.Event,c,{type:a,isSimulated:true,originalEvent:{}});e?d.event.trigger(a,null,b):d.event.dispatch.call(b,a);a.isDefaultPrevented()&&c.preventDefault()}};d.event.handle=d.event.dispatch;d.removeEvent=l.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,false)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)};d.Event=function(a,b){if(!(this instanceof d.Event))return new d.Event(a,
b);if(a&&a.type){this.originalEvent=a;this.type=a.type;this.isDefaultPrevented=a.defaultPrevented||a.returnValue===false||a.getPreventDefault&&a.getPreventDefault()?aa:L}else this.type=a;b&&d.extend(this,b);this.timeStamp=a&&a.timeStamp||d.now();this[d.expando]=true};d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=aa;var a=this.originalEvent;if(a)a.preventDefault?a.preventDefault():a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=aa;var a=this.originalEvent;
if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=aa;this.stopPropagation()},isDefaultPrevented:L,isPropagationStopped:L,isImmediatePropagationStopped:L};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={delegateType:b,bindType:b,handle:function(a){var e=a.relatedTarget,f=a.handleObj,g;if(!e||e!==this&&!d.contains(this,e)){a.type=f.origType;g=f.handler.apply(this,arguments);
a.type=b}return g}}});d.support.submitBubbles||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return false;d.event.add(this,"click._submit keypress._submit",function(a){a=a.target;if((a=d.nodeName(a,"input")||d.nodeName(a,"button")?a.form:n)&&!a._submit_attached){d.event.add(a,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&d.event.simulate("submit",this.parentNode,a,true)});a._submit_attached=true}})},teardown:function(){if(d.nodeName(this,"form"))return false;d.event.remove(this,
"._submit")}});d.support.changeBubbles||(d.event.special.change={setup:function(){if(Ga.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){d.event.add(this,"propertychange._change",function(a){if(a.originalEvent.propertyName==="checked")this._just_changed=true});d.event.add(this,"click._change",function(a){if(this._just_changed&&!a.isTrigger){this._just_changed=false;d.event.simulate("change",this,a,true)}})}return false}d.event.add(this,"beforeactivate._change",function(a){a=a.target;
if(Ga.test(a.nodeName)&&!a._change_attached){d.event.add(a,"change._change",function(a){this.parentNode&&(!a.isSimulated&&!a.isTrigger)&&d.event.simulate("change",this.parentNode,a,true)});a._change_attached=true}})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){d.event.remove(this,"._change");return Ga.test(this.nodeName)}});d.support.focusinBubbles||d.each({focus:"focusin",
blur:"focusout"},function(a,b){var c=0,e=function(a){d.event.simulate(b,a.target,d.event.fix(a),true)};d.event.special[b]={setup:function(){c++===0&&l.addEventListener(a,e,true)},teardown:function(){--c===0&&l.removeEventListener(a,e,true)}}});d.fn.extend({on:function(a,b,c,e,f){var g,h;if(typeof a==="object"){if(typeof b!=="string"){c=b;b=n}for(h in a)this.on(h,b,c,a[h],f);return this}if(c==null&&e==null){e=b;c=b=n}else if(e==null)if(typeof b==="string"){e=c;c=n}else{e=c;c=b;b=n}if(e===false)e=L;
else if(!e)return this;if(f===1){g=e;e=function(a){d().off(a);return g.apply(this,arguments)};e.guid=g.guid||(g.guid=d.guid++)}return this.each(function(){d.event.add(this,a,e,c,b)})},one:function(a,b,c,e){return this.on.call(this,a,b,c,e,1)},off:function(a,b,c){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;d(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a==="object"){for(e in a)this.off(e,b,a[e]);return this}if(b===false||typeof b===
"function"){c=b;b=n}c===false&&(c=L);return this.each(function(){d.event.remove(this,a,c,b)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){d(this.context).on(a,this.selector,b,c);return this},die:function(a,b){d(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,e){return this.on(b,a,c,e)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,
b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return d.event.trigger(a,b,this[0],true)},toggle:function(a){var b=arguments,c=a.guid||d.guid++,e=0,f=function(c){var f=(d._data(this,"lastToggle"+a.guid)||0)%e;d._data(this,"lastToggle"+a.guid,f+1);c.preventDefault();return b[f].apply(this,arguments)||false};for(f.guid=c;e<b.length;)b[e++].guid=c;return this.click(f)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
function(a,b){d.fn[b]=function(a,e){if(e==null){e=a;a=null}return arguments.length>0?this.on(b,null,a,e):this.trigger(b)};d.attrFn&&(d.attrFn[b]=true);if(Bc.test(b))d.event.fixHooks[b]=d.event.keyHooks;if(Cc.test(b))d.event.fixHooks[b]=d.event.mouseHooks});var yb=function(a,b,c,e,d,g){for(var d=0,h=e.length;d<h;d++){var i=e[d];if(i){for(var j=false,i=i[a];i;){if(i[T]===c){j=e[i.sizset];break}if(i.nodeType===1&&!g){i[T]=c;i.sizset=d}if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}e[d]=j}}},zb=function(a,
b,c,e,d,g){for(var d=0,h=e.length;d<h;d++){var i=e[d];if(i){for(var j=false,i=i[a];i;){if(i[T]===c){j=e[i.sizset];break}if(i.nodeType===1){if(!g){i[T]=c;i.sizset=d}if(typeof b!=="string"){if(i===b){j=true;break}}else if(p.filter(b,[i]).length>0){j=i;break}}i=i[a]}e[d]=j}}},Ha=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,T="sizcache"+((new Date).getTime()+"").replace(".",""),Ia=0,Ab=Object.prototype.toString,ka=
!1,Bb=!0,U=/\\/g,Fc=/\r\n/g,la=/\W/;[0,0].sort(function(){Bb=false;return 0});var p=function(a,b,c,e){var c=c||[],d=b=b||l;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return c;var g,h,i,j,o,k=true,n=p.isXML(b),m=[],r=a;do{Ha.exec("");if(g=Ha.exec(r)){r=g[3];m.push(g[1]);if(g[2]){j=g[3];break}}}while(g);if(m.length>1&&Gc.exec(a))if(m.length===2&&q.relative[m[0]])h=Cb(m[0]+m[1],b,e);else for(h=q.relative[m[0]]?[b]:p(m.shift(),b);m.length;){a=m.shift();q.relative[a]&&(a=a+m.shift());
h=Cb(a,h,e)}else{if(!e&&m.length>1&&b.nodeType===9&&!n&&q.match.ID.test(m[0])&&!q.match.ID.test(m[m.length-1])){g=p.find(m.shift(),b,n);b=g.expr?p.filter(g.expr,g.set)[0]:g.set[0]}if(b){g=e?{expr:m.pop(),set:x(e)}:p.find(m.pop(),m.length===1&&(m[0]==="~"||m[0]==="+")&&b.parentNode?b.parentNode:b,n);h=g.expr?p.filter(g.expr,g.set):g.set;for(m.length>0?i=x(h):k=false;m.length;){g=o=m.pop();q.relative[o]?g=m.pop():o="";g==null&&(g=b);q.relative[o](i,g,n)}}else i=[]}i||(i=h);i||p.error(o||a);if(Ab.call(i)===
"[object Array]")if(k)if(b&&b.nodeType===1)for(a=0;i[a]!=null;a++)i[a]&&(i[a]===true||i[a].nodeType===1&&p.contains(b,i[a]))&&c.push(h[a]);else for(a=0;i[a]!=null;a++)i[a]&&i[a].nodeType===1&&c.push(h[a]);else c.push.apply(c,i);else x(i,c);if(j){p(j,d,c,e);p.uniqueSort(c)}return c};p.uniqueSort=function(a){if(ma){ka=Bb;a.sort(ma);if(ka)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a};p.matches=function(a,b){return p(a,null,null,b)};p.matchesSelector=function(a,b){return p(b,null,
null,[a]).length>0};p.find=function(a,b,c){var e,d,g,h,i,j;if(!a)return[];d=0;for(g=q.order.length;d<g;d++){i=q.order[d];if(h=q.leftMatch[i].exec(a)){j=h[1];h.splice(1,1);if(j.substr(j.length-1)!=="\\"){h[1]=(h[1]||"").replace(U,"");e=q.find[i](h,b,c);if(e!=null){a=a.replace(q.match[i],"");break}}}}e||(e=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:e,expr:a}};p.filter=function(a,b,c,e){for(var d,g,h,i,j,o,l,k,m=a,r=[],s=b,E=b&&b[0]&&p.isXML(b[0]);a&&b.length;){for(h in q.filter)if((d=
q.leftMatch[h].exec(a))!=null&&d[2]){o=q.filter[h];j=d[1];g=false;d.splice(1,1);if(j.substr(j.length-1)!=="\\"){s===r&&(r=[]);if(q.preFilter[h])if(d=q.preFilter[h](d,s,c,r,e,E)){if(d===true)continue}else g=i=true;if(d)for(l=0;(j=s[l])!=null;l++)if(j){i=o(j,d,l,s);k=e^i;if(c&&i!=null)k?g=true:s[l]=false;else if(k){r.push(j);g=true}}if(i!==n){c||(s=r);a=a.replace(q.match[h],"");if(!g)return[];break}}}if(a===m)if(g==null)p.error(a);else break;m=a}return s};p.error=function(a){throw Error("Syntax error, unrecognized expression: "+
a);};var Ja=p.getText=function(a){var b,c;b=a.nodeType;var d="";if(b)if(b===1||b===9){if(typeof a.textContent==="string")return a.textContent;if(typeof a.innerText==="string")return a.innerText.replace(Fc,"");for(a=a.firstChild;a;a=a.nextSibling)d=d+Ja(a)}else{if(b===3||b===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(d=d+Ja(c));return d},q=p.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},
type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!la.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,f=a.length,g;d<f;d++)if(g=a[d]){for(;(g=g.previousSibling)&&g.nodeType!==1;);a[d]=c||g&&g.nodeName.toLowerCase()===b?g||false:g===b}c&&p.filter(b,a,true)},">":function(a,b){var c,d=typeof b==="string",f=0,g=a.length;if(d&&!la.test(b))for(b=b.toLowerCase();f<g;f++){if(c=a[f]){c=c.parentNode;a[f]=c.nodeName.toLowerCase()===b?c:false}}else{for(;f<
g;f++)(c=a[f])&&(a[f]=d?c.parentNode:c.parentNode===b);d&&p.filter(b,a,true)}},"":function(a,b,c){var d,f=Ia++,g=zb;if(typeof b==="string"&&!la.test(b)){d=b=b.toLowerCase();g=yb}g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=Ia++,g=zb;if(typeof b==="string"&&!la.test(b)){d=b=b.toLowerCase();g=yb}g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!==
"undefined"){for(var c=[],d=b.getElementsByName(a[1]),f=0,g=d.length;f<g;f++)d[f].getAttribute("name")===a[1]&&c.push(d[f]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,f,g){a=" "+a[1].replace(U,"")+" ";if(g)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(f^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=false));return false},ID:function(a){return a[1].replace(U,
"")},TAG:function(a){return a[1].replace(U,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||p.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}else a[2]&&p.error(a[0]);a[0]=Ia++;return a},ATTR:function(a,b,c,d,f,g){b=a[1]=a[1].replace(U,"");!g&&q.attrMap[b]&&(a[1]=q.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(U,"");a[2]==="~="&&(a[4]=" "+a[4]+
" ");return a},PSEUDO:function(a,b,c,d,f){if(a[1]==="not")if((Ha.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=p(a[3],null,null,b);else{a=p.filter(a[3],b,c,1^f);c||d.push.apply(d,a);return false}else if(q.match.POS.test(a[0])||q.match.CHILD.test(a[0]))return true;return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){a.parentNode&&
a.parentNode.selectedIndex;return a.selected===true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!p(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&
"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();
return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,
b,c,d){var f=b[1],g=q.filters[f];if(g)return g(a,c,b,d);if(f==="contains")return(a.textContent||a.innerText||Ja([a])||"").indexOf(b[3])>=0;if(f==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return false;return true}p.error(f)},CHILD:function(a,b){var c,d,f,g,h,i;c=b[1];i=a;switch(c){case "only":case "first":for(;i=i.previousSibling;)if(i.nodeType===1)return false;if(c==="first")return true;i=a;case "last":for(;i=i.nextSibling;)if(i.nodeType===1)return false;return true;case "nth":c=b[2];
d=b[3];if(c===1&&d===0)return true;f=b[0];if((g=a.parentNode)&&(g[T]!==f||!a.nodeIndex)){h=0;for(i=g.firstChild;i;i=i.nextSibling)if(i.nodeType===1)i.nodeIndex=++h;g[T]=f}i=a.nodeIndex-d;return c===0?i===0:i%c===0&&i/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],
c=p.attr?p.attr(a,c):q.attrHandle[c]?q.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=c+"",f=b[2],g=b[4];return c==null?f==="!=":!f&&p.attr?c!=null:f==="="?d===g:f==="*="?d.indexOf(g)>=0:f==="~="?(" "+d+" ").indexOf(g)>=0:!g?d&&c!==false:f==="!="?d!==g:f==="^="?d.indexOf(g)===0:f==="$="?d.substr(d.length-g.length)===g:f==="|="?d===g||d.substr(0,g.length+1)===g+"-":false},POS:function(a,b,c,d){var f=q.setFilters[b[2]];if(f)return f(a,c,b,d)}}},Gc=q.match.POS,Hc=function(a,b){return"\\"+(b-0+
1)},Z;for(Z in q.match)q.match[Z]=RegExp(q.match[Z].source+/(?![^\[]*\])(?![^\(]*\))/.source),q.leftMatch[Z]=RegExp(/(^(?:.|\r|\n)*?)/.source+q.match[Z].source.replace(/\\(\d+)/g,Hc));var x=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(l.documentElement.childNodes,0)[0].nodeType}catch(nd){x=function(a,b){var c=0,d=b||[];if(Ab.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var f=
a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var ma,$;l.documentElement.compareDocumentPosition?ma=function(a,b){if(a===b){ka=true;return 0}return!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(ma=function(a,b){if(a===b){ka=true;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,f=[],g=[];c=a.parentNode;d=b.parentNode;var h=c;if(c===d)return $(a,b);if(c){if(!d)return 1}else return-1;
for(;h;){f.unshift(h);h=h.parentNode}for(h=d;h;){g.unshift(h);h=h.parentNode}c=f.length;d=g.length;for(h=0;h<c&&h<d;h++)if(f[h]!==g[h])return $(f[h],g[h]);return h===c?$(a,g[h],-1):$(f[h],b,1)},$=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});var na=l.createElement("div"),Db="script"+(new Date).getTime(),oa=l.documentElement;na.innerHTML="<a name='"+Db+"'/>";oa.insertBefore(na,oa.firstChild);l.getElementById(Db)&&(q.find.ID=function(a,b,c){if(typeof b.getElementById!==
"undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:n:[]},q.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b});oa.removeChild(na);var oa=na=null,J=l.createElement("div");J.appendChild(l.createComment(""));0<J.getElementsByTagName("*").length&&(q.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){for(var d=
[],f=0;c[f];f++)c[f].nodeType===1&&d.push(c[f]);c=d}return c});J.innerHTML="<a href='#'></a>";J.firstChild&&("undefined"!==typeof J.firstChild.getAttribute&&"#"!==J.firstChild.getAttribute("href"))&&(q.attrHandle.href=function(a){return a.getAttribute("href",2)});J=null;if(l.querySelectorAll){var Ka=p,pa=l.createElement("div");pa.innerHTML="<p class='TEST'></p>";if(!(pa.querySelectorAll&&0===pa.querySelectorAll(".TEST").length)){var p=function(a,b,c,d){b=b||l;if(!d&&!p.isXML(b)){var f=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
if(f&&(b.nodeType===1||b.nodeType===9)){if(f[1])return x(b.getElementsByTagName(a),c);if(f[2]&&q.find.CLASS&&b.getElementsByClassName)return x(b.getElementsByClassName(f[2]),c)}if(b.nodeType===9){if(a==="body"&&b.body)return x([b.body],c);if(f&&f[3]){var g=b.getElementById(f[3]);if(g&&g.parentNode){if(g.id===f[3])return x([g],c)}else return x([],c)}try{return x(b.querySelectorAll(a),c)}catch(h){}}else if(b.nodeType===1&&b.nodeName.toLowerCase()!=="object"){var f=b,i=(g=b.getAttribute("id"))||"__sizzle__",
j=b.parentNode,o=/^\s*[+~]/.test(a);g?i=i.replace(/'/g,"\\$&"):b.setAttribute("id",i);if(o&&j)b=b.parentNode;try{if(!o||j)return x(b.querySelectorAll("[id='"+i+"'] "+a),c)}catch(k){}finally{g||f.removeAttribute("id")}}}return Ka(a,b,c,d)},La;for(La in Ka)p[La]=Ka[La];pa=null}}var qa=l.documentElement,ra=qa.matchesSelector||qa.mozMatchesSelector||qa.webkitMatchesSelector||qa.msMatchesSelector;if(ra){var Ic=!ra.call(l.createElement("div"),"div"),Eb=!1;try{ra.call(l.documentElement,"[test!='']:sizzle")}catch(od){Eb=
!0}p.matchesSelector=function(a,b){b=b.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!p.isXML(a))try{if(Eb||!q.match.PSEUDO.test(b)&&!/!=/.test(b)){var c=ra.call(a,b);if(c||!Ic||a.document&&a.document.nodeType!==11)return c}}catch(d){}return p(b,null,null,[a]).length>0}}var V=l.createElement("div");V.innerHTML="<div class='test e'></div><div class='test'></div>";V.getElementsByClassName&&0!==V.getElementsByClassName("e").length&&(V.lastChild.className="e",1!==V.getElementsByClassName("e").length&&
(q.order.splice(1,0,"CLASS"),q.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},V=null));p.contains=l.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):true)}:l.documentElement.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(){return false};p.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":false};var Cb=function(a,b,c){for(var d,
f=[],g="",b=b.nodeType?[b]:b;d=q.match.PSEUDO.exec(a);){g=g+d[0];a=a.replace(q.match.PSEUDO,"")}a=q.relative[a]?a+"*":a;d=0;for(var h=b.length;d<h;d++)p(a,b[d],f,c);return p.filter(g,f)};p.attr=d.attr;p.selectors.attrMap={};d.find=p;d.expr=p.selectors;d.expr[":"]=d.expr.filters;d.unique=p.uniqueSort;d.text=p.getText;d.isXMLDoc=p.isXML;d.contains=p.contains;var Jc=/Until$/,Kc=/^(?:parents|prevUntil|prevAll)/,Lc=/,/,Xb=/^.[^:#\[\.,]*$/,Mc=Array.prototype.slice,Fb=d.expr.match.POS,Nc={children:!0,contents:!0,
next:!0,prev:!0};d.fn.extend({find:function(a){var b=this,c,e;if(typeof a!=="string")return d(a).filter(function(){c=0;for(e=b.length;c<e;c++)if(d.contains(b[c],this))return true});var f=this.pushStack("","find",a),g,h,i;c=0;for(e=this.length;c<e;c++){g=f.length;d.find(a,this[c],f);if(c>0)for(h=g;h<f.length;h++)for(i=0;i<g;i++)if(f[i]===f[h]){f.splice(h--,1);break}}return f},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,e=b.length;a<e;a++)if(d.contains(this,b[a]))return true})},
not:function(a){return this.pushStack(Sa(this,a,false),"not",a)},filter:function(a){return this.pushStack(Sa(this,a,true),"filter",a)},is:function(a){return!!a&&(typeof a==="string"?Fb.test(a)?d(a,this.context).index(this[0])>=0:d.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){for(f=1;g&&g.ownerDocument&&g!==b;){for(e=0;e<a.length;e++)d(g).is(a[e])&&c.push({selector:a[e],elem:g,level:f});g=g.parentNode;f++}return c}var h=Fb.test(a)||
typeof a!=="string"?d(a,b||this.context):0;e=0;for(f=this.length;e<f;e++)for(g=this[e];g;)if(h?h.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}else{g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){return!a?this[0]&&this[0].parentNode?this.prevAll().length:-1:typeof a==="string"?d.inArray(this[0],d(a)):d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):
d.makeArray(a&&a.nodeType?[a]:a),e=d.merge(this.get(),c);return this.pushStack(!c[0]||!c[0].parentNode||c[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}});d.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,
2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,
b){d.fn[a]=function(c,e){var f=d.map(this,b,c);Jc.test(a)||(e=c);e&&typeof e==="string"&&(f=d.filter(e,f));f=this.length>1&&!Nc[a]?d.unique(f):f;if((this.length>1||Lc.test(e))&&Kc.test(a))f=f.reverse();return this.pushStack(f,a,Mc.call(arguments).join(","))}});d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,b,c){for(var e=[],a=a[b];a&&a.nodeType!==9&&(c===n||a.nodeType!==1||!d(a).is(c));){a.nodeType===
1&&e.push(a);a=a[b]}return e},nth:function(a,b,c){for(var b=b||1,d=0;a;a=a[c])if(a.nodeType===1&&++d===b)break;return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Ua="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Oc=/ jQuery\d+="(?:\d+|null)"/g,Ma=/^\s+/,Gb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Hb=/<([\w:]+)/,
Pc=/<tbody/i,Qc=/<|&#?\w+;/,Rc=/<(?:script|style)/i,Sc=/<(?:script|object|embed|option|style)/i,Ib=RegExp("<(?:"+Ua+")","i"),Jb=/checked\s*(?:[^=]|=\s*.checked.)/i,Tc=/\/(java|ecma)script/i,Zb=/^\s*<!(?:\[CDATA\[|\-\-)/,y={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
area:[1,"<map>","</map>"],_default:[0,"",""]},Kb=Ta(l);y.optgroup=y.option;y.tbody=y.tfoot=y.colgroup=y.caption=y.thead;y.th=y.td;d.support.htmlSerialize||(y._default=[1,"div<div>","</div>"]);d.fn.extend({text:function(a){return d.isFunction(a)?this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))}):typeof a!=="object"&&a!==n?this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(a)):d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,
b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&a.firstChild.nodeType===1;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return d.isFunction(a)?this.each(function(b){d(this).wrapInner(a.call(this,b))}):this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=d.isFunction(a);return this.each(function(c){d(this).wrapAll(b?
a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,
this)});if(arguments.length){var a=d.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d.clean(arguments));return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length){if(!b&&e.nodeType===1){d.cleanData(e.getElementsByTagName("*"));
d.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a,b){a=a==null?false:a;b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===n)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Oc,""):null;if(typeof a==="string"&&!Rc.test(a)&&(d.support.leadingWhitespace||
!Ma.test(a))&&!y[(Hb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Gb,"<$1></$2>");try{for(var b=0,c=this.length;b<c;b++)if(this[b].nodeType===1){d.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();
c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove();b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,true)},domManip:function(a,b,c){var e,f,g,h=a[0],i=[];if(!d.support.checkClone&&arguments.length===3&&typeof h==="string"&&Jb.test(h))return this.each(function(){d(this).domManip(a,b,c,true)});
if(d.isFunction(h))return this.each(function(e){var f=d(this);a[0]=h.call(this,e,b?f.html():n);f.domManip(a,b,c)});if(this[0]){e=h&&h.parentNode;e=d.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:d.buildFragment(a,this,i);g=e.fragment;if(f=g.childNodes.length===1?g=g.firstChild:g.firstChild){b=b&&d.nodeName(f,"tr");f=0;for(var j=this.length,o=j-1;f<j;f++)c.call(b?d.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):
this[f]:this[f],e.cacheable||j>1&&f<o?d.clone(g,true,true):g)}i.length&&d.each(i,Yb)}return this}});d.buildFragment=function(a,b,c){var e,f,g,h,i=a[0];b&&b[0]&&(h=b[0].ownerDocument||b[0]);h.createDocumentFragment||(h=l);if(a.length===1&&typeof i==="string"&&i.length<512&&h===l&&i.charAt(0)==="<"&&!Sc.test(i)&&(d.support.checkClone||!Jb.test(i))&&(d.support.html5Clone||!Ib.test(i))){f=true;(g=d.fragments[i])&&g!==1&&(e=g)}if(!e){e=h.createDocumentFragment();d.clean(a,h,e,c)}f&&(d.fragments[i]=g?e:
1);return{fragment:e,cacheable:f}};d.fragments={};d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],c=d(c),f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&c.length===1){c[b](this[0]);return this}for(var f=0,g=c.length;f<g;f++){var h=(f>0?this.clone(true):this).get();d(c[f])[b](h);e=e.concat(h)}return this.pushStack(e,a,c.selector)}});d.extend({clone:function(a,
b,c){var e,f,g;if(d.support.html5Clone||!Ib.test("<"+a.nodeName))e=a.cloneNode(true);else{e=l.createElement("div");Kb.appendChild(e);e.innerHTML=a.outerHTML;e=e.firstChild}var h=e;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){Wa(a,h);e=ba(a);f=ba(h);for(g=0;e[g];++g)f[g]&&Wa(e[g],f[g])}if(b){Va(a,h);if(c){e=ba(a);f=ba(h);for(g=0;e[g];++g)Va(e[g],f[g])}}return h},clean:function(a,b,c,e){b=b||l;typeof b.createElement==="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||l);for(var f=[],g,h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i=i+"");if(i){if(typeof i==="string")if(Qc.test(i)){i=i.replace(Gb,"<$1></$2>");g=(Hb.exec(i)||["",""])[1].toLowerCase();var j=y[g]||y._default,o=j[0],k=b.createElement("div");b===l?Kb.appendChild(k):Ta(b).appendChild(k);for(k.innerHTML=j[1]+i+j[2];o--;)k=k.lastChild;if(!d.support.tbody){o=Pc.test(i);j=g==="table"&&!o?k.firstChild&&k.firstChild.childNodes:j[1]==="<table>"&&!o?k.childNodes:[];for(g=j.length-
1;g>=0;--g)d.nodeName(j[g],"tbody")&&!j[g].childNodes.length&&j[g].parentNode.removeChild(j[g])}!d.support.leadingWhitespace&&Ma.test(i)&&k.insertBefore(b.createTextNode(Ma.exec(i)[0]),k.firstChild);i=k.childNodes}else i=b.createTextNode(i);var n;if(!d.support.appendChecked)if(i[0]&&typeof(n=i.length)==="number")for(g=0;g<n;g++)Ya(i[g]);else Ya(i);i.nodeType?f.push(i):f=d.merge(f,i)}}if(c){a=function(a){return!a.type||Tc.test(a.type)};for(h=0;f[h];h++)if(e&&d.nodeName(f[h],"script")&&(!f[h].type||
f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{if(f[h].nodeType===1){b=d.grep(f[h].getElementsByTagName("script"),a);f.splice.apply(f,[h+1,0].concat(b))}c.appendChild(f[h])}}return f},cleanData:function(a){for(var b,c,e=d.cache,f=d.event.special,g=d.support.deleteExpando,h=0,i;(i=a[h])!=null;h++)if(!i.nodeName||!d.noData[i.nodeName.toLowerCase()])if(c=i[d.expando]){if((b=e[c])&&b.events){for(var j in b.events)f[j]?d.event.remove(i,
j):d.removeEvent(i,j,b.handle);if(b.handle)b.handle.elem=null}g?delete i[d.expando]:i.removeAttribute&&i.removeAttribute(d.expando);delete e[c]}}});var Na=/alpha\([^)]*\)/i,Uc=/opacity=([^)]*)/,Vc=/([A-Z]|^ms)/g,Lb=/^-?\d+(?:px)?$/i,Wc=/^-?\d/,Xc=/^([\-+])=([\-+.\de]+)/,Yc={position:"absolute",visibility:"hidden",display:"block"},$b=["Left","Right"],ac=["Top","Bottom"],G,Mb,Nb;d.fn.css=function(a,b){return arguments.length===2&&b===n?this:d.access(this,a,b,true,function(a,b,f){return f!==n?d.style(a,
b,f):d.css(a,b)})};d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=G(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,e){if(a&&!(a.nodeType===3||a.nodeType===8||!a.style)){var f,g=d.camelCase(b),h=a.style,i=d.cssHooks[g],b=d.cssProps[g]||g;if(c!==n){e=typeof c;if(e==="string"&&(f=Xc.exec(c))){c=
+(f[1]+1)*+f[2]+parseFloat(d.css(a,b));e="number"}if(!(c==null||e==="number"&&isNaN(c))){e==="number"&&!d.cssNumber[g]&&(c=c+"px");if(!i||!("set"in i)||(c=i.set(a,c))!==n)try{h[b]=c}catch(j){}}}else return i&&"get"in i&&(f=i.get(a,false,e))!==n?f:h[b]}},css:function(a,b,c){var e,f,b=d.camelCase(b);f=d.cssHooks[b];b=d.cssProps[b]||b;b==="cssFloat"&&(b="float");if(f&&"get"in f&&(e=f.get(a,true,c))!==n)return e;if(G)return G(a,b)},swap:function(a,b,c){var d={},f;for(f in b){d[f]=a.style[f];a.style[f]=
b[f]}c.call(a);for(f in b)a.style[f]=d[f]}});d.curCSS=d.css;d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,e,f){var g;if(e){if(a.offsetWidth!==0)return Za(a,b,f);d.swap(a,Yc,function(){g=Za(a,b,f)});return g}},set:function(a,b){if(Lb.test(b)){b=parseFloat(b);if(b>=0)return b+"px"}else return b}}});d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return Uc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,
b){var c=a.style,e=a.currentStyle,f=d.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=e&&e.filter||c.filter||"";c.zoom=1;if(b>=1&&d.trim(g.replace(Na,""))===""){c.removeAttribute("filter");if(e&&!e.filter)return}c.filter=Na.test(g)?g.replace(Na,f):g+" "+f}});d(function(){if(!d.support.reliableMarginRight)d.cssHooks.marginRight={get:function(a,b){var c;d.swap(a,{display:"inline-block"},function(){c=b?G(a,"margin-right","marginRight"):a.style.marginRight});return c}}});l.defaultView&&l.defaultView.getComputedStyle&&
(Mb=function(a,b){var c,e,f,b=b.replace(Vc,"-$1").toLowerCase();if((e=a.ownerDocument.defaultView)&&(f=e.getComputedStyle(a,null))){c=f.getPropertyValue(b);c===""&&!d.contains(a.ownerDocument.documentElement,a)&&(c=d.style(a,b))}return c});l.documentElement.currentStyle&&(Nb=function(a,b){var c,d,f=a.currentStyle&&a.currentStyle[b],g=a.style;if(f===null&&g&&(c=g[b]))f=c;if(!Lb.test(f)&&Wc.test(f)){c=g.left;if(d=a.runtimeStyle&&a.runtimeStyle.left)a.runtimeStyle.left=a.currentStyle.left;g.left=b===
"fontSize"?"1em":f||0;f=g.pixelLeft+"px";g.left=c;if(d)a.runtimeStyle.left=d}return f===""?"auto":f});G=Mb||Nb;d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!d.support.reliableHiddenOffsets&&(a.style&&a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var Zc=/%20/g,bc=/\[\]$/,Ob=/\r?\n/g,$c=/#.*$/,ad=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bd=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
cd=/^(?:GET|HEAD)$/,dd=/^\/\//,Pb=/\?/,ed=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,fd=/^(?:select|textarea)/i,ab=/\s+/,gd=/([?&])_=[^&]*/,Qb=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Rb=d.fn.load,va={},Sb={},D,F,Tb=["*/"]+["*"];try{D=dc.href}catch(pd){D=l.createElement("a"),D.href="",D=D.href}F=Qb.exec(D.toLowerCase())||[];d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&Rb)return Rb.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0)var f=
a.slice(e,a.length),a=a.slice(0,e);e="GET";if(b)if(d.isFunction(b)){c=b;b=n}else if(typeof b==="object"){b=d.param(b,d.ajaxSettings.traditional);e="POST"}var g=this;d.ajax({url:a,type:e,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText;if(a.isResolved()){a.done(function(a){e=a});g.html(f?d("<div>").append(e.replace(ed,"")).find(f):e)}c&&g.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?
d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||fd.test(this.nodeName)||bd.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a){return{name:b.name,value:a.replace(Ob,"\r\n")}}):{name:b.name,value:c.replace(Ob,"\r\n")}}).get()}});d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.on(b,a)}});d.each(["get","post"],
function(a,b){d[b]=function(a,e,f,g){if(d.isFunction(e)){g=g||f;f=e;e=n}return d.ajax({type:b,url:a,data:e,success:f,dataType:g})}});d.extend({getScript:function(a,b){return d.get(a,n,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){if(b)bb(a,d.ajaxSettings);else{b=a;a=d.ajaxSettings}bb(a,b);return a},ajaxSettings:{url:D,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(F[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",
processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tb},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":r.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:$a(va),ajaxTransport:$a(Sb),ajax:function(a,b){function c(a,b,c,k){if(u!==2){u=2;r&&clearTimeout(r);q=n;m=k||"";t.readyState=
a>0?4:0;var l,p,s,k=b;if(c){var H=e,x=t,Ba=H.contents,v=H.dataTypes,pb=H.responseFields,A,z,w,I;for(z in pb)z in c&&(x[pb[z]]=c[z]);for(;v[0]==="*";){v.shift();A===n&&(A=H.mimeType||x.getResponseHeader("content-type"))}if(A)for(z in Ba)if(Ba[z]&&Ba[z].test(A)){v.unshift(z);break}if(v[0]in c)w=v[0];else{for(z in c){if(!v[0]||H.converters[z+" "+v[0]]){w=z;break}I||(I=z)}w=w||I}if(w){w!==v[0]&&v.unshift(w);c=c[w]}else c=void 0}else c=n;if(a>=200&&a<300||a===304){if(e.ifModified){if(A=t.getResponseHeader("Last-Modified"))d.lastModified[o]=
A;if(A=t.getResponseHeader("Etag"))d.etag[o]=A}if(a===304){k="notmodified";l=true}else try{A=e;A.dataFilter&&(c=A.dataFilter(c,A.dataType));var J=A.dataTypes;z={};var D,F,L=J.length,G,N=J[0],B,K,O,Q,C;for(D=1;D<L;D++){if(D===1)for(F in A.converters)typeof F==="string"&&(z[F.toLowerCase()]=A.converters[F]);B=N;N=J[D];if(N==="*")N=B;else if(B!=="*"&&B!==N){K=B+" "+N;O=z[K]||z["* "+N];if(!O){C=n;for(Q in z){G=Q.split(" ");if(G[0]===B||G[0]==="*")if(C=z[G[1]+" "+N]){Q=z[Q];Q===true?O=C:C===true&&(O=Q);
break}}}!O&&!C&&d.error("No conversion from "+K.replace(" "," to "));O!==true&&(c=O?O(c):C(Q(c)))}}p=c;k="success";l=true}catch(M){k="parsererror";s=M}}else{s=k;if(!k||a){k="error";a<0&&(a=0)}}t.status=a;t.statusText=""+(b||k);l?h.resolveWith(f,[p,k,t]):h.rejectWith(f,[t,k,s]);t.statusCode(j);j=n;y&&g.trigger("ajax"+(l?"Success":"Error"),[t,e,l?p:s]);i.fireWith(f,[t,k]);if(y){g.trigger("ajaxComplete",[t,e]);--d.active||d.event.trigger("ajaxStop")}}}if(typeof a==="object"){b=a;a=n}var b=b||{},e=d.ajaxSetup({},
b),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d.Callbacks("once memory"),j=e.statusCode||{},o,k={},l={},m,p,q,r,s,u=0,y,x,t={readyState:0,setRequestHeader:function(a,b){if(!u){var c=a.toLowerCase(),a=l[c]=l[c]||a;k[a]=b}return this},getAllResponseHeaders:function(){return u===2?m:null},getResponseHeader:function(a){var b;if(u===2){if(!p)for(p={};b=ad.exec(m);)p[b[1].toLowerCase()]=b[2];b=p[a.toLowerCase()]}return b===n?null:b},overrideMimeType:function(a){if(!u)e.mimeType=
a;return this},abort:function(a){a=a||"abort";q&&q.abort(a);c(0,a);return this}};h.promise(t);t.success=t.done;t.error=t.fail;t.complete=i.add;t.statusCode=function(a){if(a){var b;if(u<2)for(b in a)j[b]=[j[b],a[b]];else{b=a[t.status];t.then(b,b)}}return this};e.url=((a||e.url)+"").replace($c,"").replace(dd,F[1]+"//");e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(ab);if(e.crossDomain==null){s=Qb.exec(e.url.toLowerCase());e.crossDomain=!(!s||!(s[1]!=F[1]||s[2]!=F[2]||(s[3]||(s[1]==="http:"?
80:443))!=(F[3]||(F[1]==="http:"?80:443))))}if(e.data&&e.processData&&typeof e.data!=="string")e.data=d.param(e.data,e.traditional);ca(va,e,b,t);if(u===2)return false;y=e.global;e.type=e.type.toUpperCase();e.hasContent=!cd.test(e.type);y&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){if(e.data){e.url=e.url+((Pb.test(e.url)?"&":"?")+e.data);delete e.data}o=e.url;if(e.cache===false){s=d.now();var v=e.url.replace(gd,"$1_="+s);e.url=v+(v===e.url?(Pb.test(e.url)?"&":"?")+"_="+s:"")}}(e.data&&
e.hasContent&&e.contentType!==false||b.contentType)&&t.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){o=o||e.url;d.lastModified[o]&&t.setRequestHeader("If-Modified-Since",d.lastModified[o]);d.etag[o]&&t.setRequestHeader("If-None-Match",d.etag[o])}t.setRequestHeader("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", "+Tb+"; q=0.01":""):e.accepts["*"]);for(x in e.headers)t.setRequestHeader(x,e.headers[x]);if(e.beforeSend&&(e.beforeSend.call(f,
t,e)===false||u===2)){t.abort();return false}for(x in{success:1,error:1,complete:1})t[x](e[x]);if(q=ca(Sb,e,b,t)){t.readyState=1;y&&g.trigger("ajaxSend",[t,e]);e.async&&e.timeout>0&&(r=setTimeout(function(){t.abort("timeout")},e.timeout));try{u=1;q.send(k,c)}catch(w){if(u<2)c(-1,w);else throw w;}}else c(-1,"No Transport");return t},param:function(a,b){var c=[],e=function(a,b){b=d.isFunction(b)?b():b;c[c.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(b===n)b=d.ajaxSettings.traditional;
if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){e(this.name,this.value)});else for(var f in a)wa(f,a[f],b,e);return c.join("&").replace(Zc,"+")}});d.extend({active:0,lastModified:{},etag:{}});var hd=d.now(),sa=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+hd++}});d.ajaxPrefilter("json jsonp",function(a,b,c){b=a.contentType==="application/x-www-form-urlencoded"&&typeof a.data==="string";if(a.dataTypes[0]==="jsonp"||a.jsonp!==false&&
(sa.test(a.url)||b&&sa.test(a.data))){var e,f=a.jsonpCallback=d.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,g=r[f],h=a.url,i=a.data,j="$1"+f+"$2";if(a.jsonp!==false){h=h.replace(sa,j);if(a.url===h){b&&(i=i.replace(sa,j));a.data===i&&(h=h+((/\?/.test(h)?"&":"?")+a.jsonp+"="+f))}}a.url=h;a.data=i;r[f]=function(a){e=[a]};c.always(function(){r[f]=g;if(e&&d.isFunction(g))r[f](e[0])});a.converters["script json"]=function(){e||d.error(f+" was not called");return e[0]};a.dataTypes[0]="json";
return"script"}});d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}});d.ajaxPrefilter("script",function(a){if(a.cache===n)a.cache=false;if(a.crossDomain){a.type="GET";a.global=false}});d.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=l.head||l.getElementsByTagName("head")[0]||l.documentElement;return{send:function(d,
f){b=l.createElement("script");b.async="async";if(a.scriptCharset)b.charset=a.scriptCharset;b.src=a.url;b.onload=b.onreadystatechange=function(a,d){if(d||!b.readyState||/loaded|complete/.test(b.readyState)){b.onload=b.onreadystatechange=null;c&&b.parentNode&&c.removeChild(b);b=n;d||f(200,"success")}};c.insertBefore(b,c.firstChild)},abort:function(){if(b)b.onload(0,1)}}}});var Oa=r.ActiveXObject?function(){for(var a in W)W[a](0,1)}:!1,id=0,W;d.ajaxSettings.xhr=r.ActiveXObject?function(){var a;if(!(a=
!this.isLocal&&cb()))a:{try{a=new r.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:cb;var Pa=d.ajaxSettings.xhr();d.extend(d.support,{ajax:!!Pa,cors:!!Pa&&"withCredentials"in Pa});d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var b;return{send:function(c,e){var f=a.xhr(),g,h;a.username?f.open(a.type,a.url,a.async,a.username,a.password):f.open(a.type,a.url,a.async);if(a.xhrFields)for(h in a.xhrFields)f[h]=a.xhrFields[h];a.mimeType&&f.overrideMimeType&&
f.overrideMimeType(a.mimeType);!a.crossDomain&&!c["X-Requested-With"]&&(c["X-Requested-With"]="XMLHttpRequest");try{for(h in c)f.setRequestHeader(h,c[h])}catch(i){}f.send(a.hasContent&&a.data||null);b=function(c,h){var i,k,l,m,p;try{if(b&&(h||f.readyState===4)){b=n;if(g){f.onreadystatechange=d.noop;Oa&&delete W[g]}if(h)f.readyState!==4&&f.abort();else{i=f.status;l=f.getAllResponseHeaders();m={};if((p=f.responseXML)&&p.documentElement)m.xml=p;m.text=f.responseText;try{k=f.statusText}catch(q){k=""}!i&&
a.isLocal&&!a.crossDomain?i=m.text?200:404:i===1223&&(i=204)}}}catch(r){h||e(-1,r)}m&&e(i,k,m,l)};if(!a.async||f.readyState===4)b();else{g=++id;if(Oa){if(!W){W={};d(r).unload(Oa)}W[g]=b}f.onreadystatechange=b}},abort:function(){b&&b(0,1)}}}});var xa={},v,K,jd=/^(?:toggle|show|hide)$/,kd=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ta,eb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],da;d.fn.extend({show:function(a,
b,c){if(a||a===0)return this.animate(B("show",3),a,b,c);for(var c=0,e=this.length;c<e;c++){a=this[c];if(a.style){b=a.style.display;if(!d._data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&d.css(a,"display")==="none"&&d._data(a,"olddisplay",fb(a.nodeName))}}for(c=0;c<e;c++){a=this[c];if(a.style){b=a.style.display;if(b===""||b==="none")a.style.display=d._data(a,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(B("hide",3),a,b,c);for(var c=0,e=this.length;c<
e;c++){a=this[c];if(a.style){b=d.css(a,"display");b!=="none"&&!d._data(a,"olddisplay")&&d._data(a,"olddisplay",b)}}for(c=0;c<e;c++)if(this[c].style)this[c].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(B("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",
0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){function f(){g.queue===false&&d._mark(this);var b=d.extend({},g),c=this.nodeType===1,e=c&&d(this).is(":hidden"),f,k,l,m,n;b.animatedProperties={};for(l in a){f=d.camelCase(l);if(l!==f){a[f]=a[l];delete a[l]}k=a[f];if(d.isArray(k)){b.animatedProperties[f]=k[1];k=a[f]=k[0]}else b.animatedProperties[f]=b.specialEasing&&b.specialEasing[f]||b.easing||"swing";if(k==="hide"&&e||k==="show"&&!e)return b.complete.call(this);if(c&&(f==="height"||
f==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")!d.support.inlineBlockNeedsLayout||fb(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1}}if(b.overflow!=null)this.style.overflow="hidden";for(l in a){c=new d.fx(this,b,l);k=a[l];if(jd.test(k))if(f=d._data(this,"toggle"+l)||(k==="toggle"?e?"show":"hide":0)){d._data(this,"toggle"+l,f==="show"?"hide":"show");c[f]()}else c[k]();
else{f=kd.exec(k);m=c.cur();if(f){k=parseFloat(f[2]);n=f[3]||(d.cssNumber[l]?"":"px");if(n!=="px"){d.style(this,l,(k||1)+n);m=(k||1)/c.cur()*m;d.style(this,l,m+n)}f[1]&&(k=(f[1]==="-="?-1:1)*k+m);c.custom(m,k,n)}else c.custom(m,k,"")}}return true}var g=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(g.complete,[false]);a=d.extend({},a);return g.queue===false?this.each(f):this.queue(g.queue,f)},stop:function(a,b,c){if(typeof a!=="string"){c=b;b=a;a=n}b&&a!==false&&this.queue(a||"fx",[]);return this.each(function(){var b,
f=false,g=d.timers,h=d._data(this);c||d._unmark(true,this);if(a==null)for(b in h){if(h[b]&&h[b].stop&&b.indexOf(".run")===b.length-4){var i=h[b];d.removeData(this,b,true);i.stop(c)}}else if(h[b=a+".run"]&&h[b].stop){h=h[b];d.removeData(this,b,true);h.stop(c)}for(b=g.length;b--;)if(g[b].elem===this&&(a==null||g[b].queue===a)){if(c)g[b](true);else g[b].saveState();f=true;g.splice(b,1)}(!c||!f)&&d.dequeue(this,a)})}});d.each({slideDown:B("show",1),slideUp:B("hide",1),slideToggle:B("toggle",1),fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,d,f){return this.animate(b,a,d,f)}});d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default;if(e.queue==null||e.queue===true)e.queue="fx";e.old=e.complete;e.complete=function(a){d.isFunction(e.old)&&
e.old.call(this);e.queue?d.dequeue(this,e.queue):a!==false&&d._unmark(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+0.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;b.orig=b.orig||{}}});d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||
this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function e(a){return f.step(a)}var f=this,g=d.fx;this.startTime=da||db();this.end=b;this.now=this.start=a;this.pos=this.state=0;this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px");e.queue=this.options.queue;e.elem=this.elem;e.saveState=function(){f.options.hide&&d._data(f.elem,"fxshow"+f.prop)===n&&d._data(f.elem,"fxshow"+
f.prop,f.start)};e()&&(d.timers.push(e)&&!ta)&&(ta=setInterval(g.tick,g.interval))},show:function(){var a=d._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||d.style(this.elem,this.prop);this.options.show=true;a!==n?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d._data(this.elem,"fxshow"+this.prop)||d.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),
0)},step:function(a){var b,c=da||db(),e=true,f=this.elem,g=this.options;if(a||c>=g.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();g.animatedProperties[this.prop]=true;for(b in g.animatedProperties)g.animatedProperties[b]!==true&&(e=false);if(e){g.overflow!=null&&!d.support.shrinkWrapBlocks&&d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]});g.hide&&d(f).hide();if(g.hide||g.show)for(b in g.animatedProperties){d.style(f,b,g.orig[b]);d.removeData(f,
"fxshow"+b,true);d.removeData(f,"toggle"+b,true)}if(a=g.complete){g.complete=false;a.call(f)}}return false}if(g.duration==Infinity)this.now=c;else{a=c-this.startTime;this.state=a/g.duration;this.pos=d.easing[g.animatedProperties[this.prop]](this.state,a,0,1,g.duration);this.now=this.start+(this.end-this.start)*this.pos}this.update();return true}};d.extend(d.fx,{tick:function(){for(var a,b=d.timers,c=0;c<b.length;c++){a=b[c];!a()&&b[c]===a&&b.splice(c--,1)}b.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ta);
ta=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}});d.each(["width","height"],function(a,b){d.fx.step[b]=function(a){d.style(a.elem,b,Math.max(0,a.now)+a.unit)}});d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var ld=/^t(?:able|d|h)$/i,Ub=/^(?:body|html)$/i;
d.fn.offset="getBoundingClientRect"in l.documentElement?function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};b=f.body;f=ya(f);return{top:c.top+(f.pageYOffset||d.support.boxModel&&g.scrollTop||b.scrollTop)-(g.clientTop||
b.clientTop||0),left:c.left+(f.pageXOffset||d.support.boxModel&&g.scrollLeft||b.scrollLeft)-(g.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);var c,e=b.offsetParent,f=b.ownerDocument,g=f.documentElement,h=f.body;c=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;for(var i=b.offsetTop,j=b.offsetLeft;(b=b.parentNode)&&b!==
h&&b!==g;){if(d.support.fixedPosition&&c.position==="fixed")break;c=f?f.getComputedStyle(b,null):b.currentStyle;i=i-b.scrollTop;j=j-b.scrollLeft;if(b===e){i=i+b.offsetTop;j=j+b.offsetLeft;if(d.support.doesNotAddBorder&&(!d.support.doesAddBorderForTableAndCells||!ld.test(b.nodeName))){i=i+(parseFloat(c.borderTopWidth)||0);j=j+(parseFloat(c.borderLeftWidth)||0)}e=b.offsetParent}if(d.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"){i=i+(parseFloat(c.borderTopWidth)||0);j=j+(parseFloat(c.borderLeftWidth)||
0)}}if(c.position==="relative"||c.position==="static"){i=i+h.offsetTop;j=j+h.offsetLeft}if(d.support.fixedPosition&&c.position==="fixed"){i=i+Math.max(g.scrollTop,h.scrollTop);j=j+Math.max(g.scrollLeft,h.scrollLeft)}return{top:i,left:j}};d.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;if(d.support.doesNotIncludeMarginInBodyOffset){b=b+(parseFloat(d.css(a,"marginTop"))||0);c=c+(parseFloat(d.css(a,"marginLeft"))||0)}return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");
if(e==="static")a.style.position="relative";var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j={},k={};if((e==="absolute"||e==="fixed")&&d.inArray("auto",[h,i])>-1){k=f.position();e=k.top;i=k.left}else{e=parseFloat(h)||0;i=parseFloat(i)||0}d.isFunction(b)&&(b=b.call(a,c,g));if(b.top!=null)j.top=b.top-g.top+e;if(b.left!=null)j.left=b.left-g.left+i;"using"in b?b.using.call(a,j):f.css(j)}};d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),
e=Ub.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top=c.top-(parseFloat(d.css(a,"marginTop"))||0);c.left=c.left-(parseFloat(d.css(a,"marginLeft"))||0);e.top=e.top+(parseFloat(d.css(b[0],"borderTopWidth"))||0);e.left=e.left+(parseFloat(d.css(b[0],"borderLeftWidth"))||0);return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||l.body;a&&!Ub.test(a.nodeName)&&d.css(a,"position")==="static";)a=a.offsetParent;return a})}});d.each(["Left",
"Top"],function(a,b){var c="scroll"+b;d.fn[c]=function(b){var f,g;if(b===n){f=this[0];if(!f)return null;return(g=ya(f))?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[c]||g.document.body[c]:f[c]}return this.each(function(){(g=ya(this))?g.scrollTo(!a?b:d(g).scrollLeft(),a?b:d(g).scrollTop()):this[c]=b})}});d.each(["Height","Width"],function(a,b){var c=b.toLowerCase();d.fn["inner"+b]=function(){var a=this[0];return a?a.style?parseFloat(d.css(a,c,"padding")):
this[c]():null};d.fn["outer"+b]=function(a){var b=this[0];return b?b.style?parseFloat(d.css(b,c,a?"margin":"border")):this[c]():null};d.fn[c]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var f=d(this);f[c](a.call(this,b,f[c]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+b],h=f.document.body;return f.document.compatMode==="CSS1Compat"&&g||h&&h["client"+b]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+
b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);if(a===n){f=d.css(f,c);g=parseFloat(f);return d.isNumeric(g)?g:f}return this.css(c,typeof a==="string"?a:a+"px")}});r.jQuery=r.$=d;"function"===typeof define&&(define.amd&&define.amd.jQuery)&&define("jquery",[],function(){return d})})(window);
	dmj = jQuery.noConflict();	
	
	$ = old$;
	jQuery = oldjQuery;
} catch (E) {
(function(r,n){function Qa(a,b,c){if(c===n&&1===a.nodeType)if(c="data-"+b.replace(Vb,"-$1").toLowerCase(),c=a.getAttribute(c),"string"===typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:d.isNumeric(c)?parseFloat(c):Wb.test(c)?d.parseJSON(c):c}catch(e){}d.data(a,b,c)}else c=n;return c}function ua(a){for(var b in a)if(!("data"===b&&d.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Ra(a,b,c){var e=b+"defer",f=b+"queue",g=b+"mark",h=d._data(a,e);h&&(("queue"===c||!d._data(a,
f))&&("mark"===c||!d._data(a,g)))&&setTimeout(function(){!d._data(a,f)&&!d._data(a,g)&&(d.removeData(a,e,!0),h.fire())},0)}function L(){return!1}function aa(){return!0}function Sa(a,b,c){b=b||0;if(d.isFunction(b))return d.grep(a,function(a,e){return!!b.call(a,e,a)===c});if(b.nodeType)return d.grep(a,function(a){return a===b===c});if("string"===typeof b){var e=d.grep(a,function(a){return 1===a.nodeType});if(Xb.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a){return 0<=d.inArray(a,
b)===c})}function Ta(a){var b=Ua.split("|"),a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function Va(a,b){if(1===b.nodeType&&d.hasData(a)){var c,e,f;e=d._data(a);var g=d._data(b,e),h=e.events;if(h)for(c in delete g.handle,g.events={},h){e=0;for(f=h[c].length;e<f;e++)d.event.add(b,c+(h[c][e].namespace?".":"")+h[c][e].namespace,h[c][e],h[c][e].data)}g.data&&(g.data=d.extend({},g.data))}}function Wa(a,b){var c;if(1===b.nodeType){b.clearAttributes&&
b.clearAttributes();b.mergeAttributes&&b.mergeAttributes(a);c=b.nodeName.toLowerCase();if("object"===c)b.outerHTML=a.outerHTML;else if("input"===c&&("checkbox"===a.type||"radio"===a.type)){if(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value)b.value=a.value}else if("option"===c)b.selected=a.defaultSelected;else if("input"===c||"textarea"===c)b.defaultValue=a.defaultValue;b.removeAttribute(d.expando)}}function ba(a){return"undefined"!==typeof a.getElementsByTagName?a.getElementsByTagName("*"):
"undefined"!==typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function Xa(a){if("checkbox"===a.type||"radio"===a.type)a.defaultChecked=a.checked}function Ya(a){var b=(a.nodeName||"").toLowerCase();"input"===b?Xa(a):"script"!==b&&"undefined"!==typeof a.getElementsByTagName&&d.grep(a.getElementsByTagName("input"),Xa)}function Yb(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Zb,"/*$0*/"));b.parentNode&&b.parentNode.removeChild(b)}
function Za(a,b,c){var e="width"===b?a.offsetWidth:a.offsetHeight,f="width"===b?$b:ac,g=0,h=f.length;if(0<e){if("border"!==c)for(;g<h;g++)c||(e-=parseFloat(d.css(a,"padding"+f[g]))||0),e="margin"===c?e+(parseFloat(d.css(a,c+f[g]))||0):e-(parseFloat(d.css(a,"border"+f[g]+"Width"))||0);return e+"px"}e=G(a,b,b);if(0>e||null==e)e=a.style[b]||0;e=parseFloat(e)||0;if(c)for(;g<h;g++)e+=parseFloat(d.css(a,"padding"+f[g]))||0,"padding"!==c&&(e+=parseFloat(d.css(a,"border"+f[g]+"Width"))||0),"margin"===c&&
(e+=parseFloat(d.css(a,c+f[g]))||0);return e+"px"}function $a(a){return function(b,c){"string"!==typeof b&&(c=b,b="*");if(d.isFunction(c))for(var e=b.toLowerCase().split(ab),f=0,g=e.length,h,i;f<g;f++)h=e[f],(i=/^\+/.test(h))&&(h=h.substr(1)||"*"),h=a[h]=a[h]||[],h[i?"unshift":"push"](c)}}function ca(a,b,c,e,d,g){d=d||b.dataTypes[0];g=g||{};g[d]=!0;for(var d=a[d],h=0,i=d?d.length:0,j=a===va,o;h<i&&(j||!o);h++)o=d[h](b,c,e),"string"===typeof o&&(!j||g[o]?o=n:(b.dataTypes.unshift(o),o=ca(a,b,c,e,o,
g)));if((j||!o)&&!g["*"])o=ca(a,b,c,e,"*",g);return o}function bb(a,b){var c,e,f=d.ajaxSettings.flatOptions||{};for(c in b)b[c]!==n&&((f[c]?a:e||(e={}))[c]=b[c]);e&&d.extend(!0,a,e)}function wa(a,b,c,e){if(d.isArray(b))d.each(b,function(b,f){c||bc.test(a)?e(a,f):wa(a+"["+("object"===typeof f||d.isArray(f)?b:"")+"]",f,c,e)});else if(!c&&null!=b&&"object"===typeof b)for(var f in b)wa(a+"["+f+"]",b[f],c,e);else e(a,b)}function cb(){try{return new r.XMLHttpRequest}catch(a){}}function db(){setTimeout(cc,
0);return da=d.now()}function cc(){da=n}function B(a,b){var c={};d.each(eb.concat.apply([],eb.slice(0,b)),function(){c[this]=a});return c}function fb(a){if(!xa[a]){var b=l.body,c=d("<"+a+">").appendTo(b),e=c.css("display");c.remove();if("none"===e||""===e){v||(v=l.createElement("iframe"),v.frameBorder=v.width=v.height=0);b.appendChild(v);if(!K||!v.createElement)K=(v.contentWindow||v.contentDocument).document,K.write(("CSS1Compat"===l.compatMode?"<!doctype html>":"")+"<html><body>"),K.close();c=K.createElement(a);
K.body.appendChild(c);e=d.css(c,"display");b.removeChild(v)}xa[a]=e}return xa[a]}function ya(a){return d.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var l=r.document,dc=r.location,d,gb=function(){if(!k.isReady){try{l.documentElement.doScroll("left")}catch(a){setTimeout(gb,1);return}k.ready()}},k=function(a,b){return new k.fn.init(a,b,hb)},ec=r.jQuery,fc=r.$,hb,gc=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,ib=/\S/,jb=/^\s+/,kb=/\s+$/,hc=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,ic=/^[\],:{}\s]*$/,
jc=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,kc=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,lc=/(?:^|:|,)(?:\s*\[)+/g,mc=/(webkit)[ \/]([\w.]+)/,nc=/(opera)(?:.*version)?[ \/]([\w.]+)/,oc=/(msie) ([\w.]+)/,pc=/(mozilla)(?:.*? rv:([\w.]+))?/,qc=/-([a-z]|[0-9])/ig,rc=/^-ms-/,sc=function(a,b){return(b+"").toUpperCase()},tc=r.navigator.userAgent,ea,fa,C,uc=Object.prototype.toString,za=Object.prototype.hasOwnProperty,Aa=Array.prototype.push,X=Array.prototype.slice,lb=String.prototype.trim,
mb=Array.prototype.indexOf,nb={};k.fn=k.prototype={constructor:k,init:function(a,b,c){var e;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("body"===a&&!b&&l.body)return this.context=l,this[0]=l.body,this.selector=a,this.length=1,this;if("string"===typeof a){if((e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&3<=a.length?[null,a,null]:gc.exec(a))&&(e[1]||!b)){if(e[1])return c=(b=b instanceof k?b[0]:b)?b.ownerDocument||b:l,(a=hc.exec(a))?k.isPlainObject(b)?(a=[l.createElement(a[1])],
k.fn.attr.call(a,b,!0)):a=[c.createElement(a[1])]:(a=k.buildFragment([e[1]],[c]),a=(a.cacheable?k.clone(a.fragment):a.fragment).childNodes),k.merge(this,a);if((b=l.getElementById(e[2]))&&b.parentNode){if(b.id!==e[2])return c.find(a);this.length=1;this[0]=b}this.context=l;this.selector=a;return this}return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a)}if(k.isFunction(a))return c.ready(a);a.selector!==n&&(this.selector=a.selector,this.context=a.context);return k.makeArray(a,this)},selector:"",
jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return X.call(this,0)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();k.isArray(a)?Aa.apply(e,a):k.merge(e,a);e.prevObject=this;e.context=this.context;"find"===b?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return k.each(this,a,b)},ready:function(a){k.bindReady();
fa.add(a);return this},eq:function(a){a=+a;return-1===a?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(X.apply(this,arguments),"slice",X.call(arguments).join(","))},map:function(a){return this.pushStack(k.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:Aa,sort:[].sort,splice:[].splice};k.fn.init.prototype=k.fn;k.extend=k.fn.extend=function(){var a,
b,c,e,d,g=arguments[0]||{},h=1,i=arguments.length,j=!1;"boolean"===typeof g&&(j=g,g=arguments[1]||{},h=2);"object"!==typeof g&&!k.isFunction(g)&&(g={});i===h&&(g=this,--h);for(;h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],e=a[b],g!==e&&(j&&e&&(k.isPlainObject(e)||(d=k.isArray(e)))?(d?(d=!1,c=c&&k.isArray(c)?c:[]):c=c&&k.isPlainObject(c)?c:{},g[b]=k.extend(j,c,e)):e!==n&&(g[b]=e));return g};k.extend({noConflict:function(a){r.$===k&&(r.$=fc);a&&r.jQuery===k&&(r.jQuery=ec);return k},isReady:!1,
readyWait:1,holdReady:function(a){a?k.readyWait++:k.ready(!0)},ready:function(a){if(!0===a&&!--k.readyWait||!0!==a&&!k.isReady){if(!l.body)return setTimeout(k.ready,1);k.isReady=!0;!0!==a&&0<--k.readyWait||(fa.fireWith(l,[k]),k.fn.trigger&&k(l).trigger("ready").off("ready"))}},bindReady:function(){if(!fa){fa=k.Callbacks("once memory");if("complete"===l.readyState)return setTimeout(k.ready,1);if(l.addEventListener)l.addEventListener("DOMContentLoaded",C,!1),r.addEventListener("load",k.ready,!1);else if(l.attachEvent){l.attachEvent("onreadystatechange",
C);r.attachEvent("onload",k.ready);var a=!1;try{a=null==r.frameElement}catch(b){}l.documentElement.doScroll&&a&&gb()}}},isFunction:function(a){return"function"===k.type(a)},isArray:Array.isArray||function(a){return"array"===k.type(a)},isWindow:function(a){return a&&"object"===typeof a&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):nb[uc.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==k.type(a)||a.nodeType||
k.isWindow(a))return!1;try{if(a.constructor&&!za.call(a,"constructor")&&!za.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);return c===n||za.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw Error(a);},parseJSON:function(a){if("string"!==typeof a||!a)return null;a=k.trim(a);if(r.JSON&&r.JSON.parse)return r.JSON.parse(a);if(ic.test(a.replace(jc,"@").replace(kc,"]").replace(lc,"")))return(new Function("return "+a))();
k.error("Invalid JSON: "+a)},parseXML:function(a){var b,c;try{r.DOMParser?(c=new DOMParser,b=c.parseFromString(a,"text/xml")):(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a))}catch(e){b=n}(!b||!b.documentElement||b.getElementsByTagName("parsererror").length)&&k.error("Invalid XML: "+a);return b},noop:function(){},globalEval:function(a){a&&ib.test(a)&&(r.execScript||function(a){r.eval.call(r,a)})(a)},camelCase:function(a){return a.replace(rc,"ms-").replace(qc,sc)},nodeName:function(a,
b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,c){var e,d=0,g=a.length,h=g===n||k.isFunction(a);if(c)if(h)for(e in a){if(!1===b.apply(a[e],c))break}else for(;d<g&&!1!==b.apply(a[d++],c););else if(h)for(e in a){if(!1===b.call(a[e],e,a[e]))break}else for(;d<g&&!1!==b.call(a[d],d,a[d++]););return a},trim:lb?function(a){return null==a?"":lb.call(a)}:function(a){return null==a?"":a.toString().replace(jb,"").replace(kb,"")},makeArray:function(a,b){var c=b||[];if(null!=
a){var e=k.type(a);null==a.length||"string"===e||"function"===e||"regexp"===e||k.isWindow(a)?Aa.call(c,a):k.merge(c,a)}return c},inArray:function(a,b,c){var e;if(b){if(mb)return mb.call(b,a,c);e=b.length;for(c=c?0>c?Math.max(0,e+c):c:0;c<e;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=a.length,e=0;if("number"===typeof b.length)for(var d=b.length;e<d;e++)a[c++]=b[e];else for(;b[e]!==n;)a[c++]=b[e++];a.length=c;return a},grep:function(a,b,c){for(var e=[],d,c=!!c,g=0,h=a.length;g<
h;g++)d=!!b(a[g],g),c!==d&&e.push(a[g]);return e},map:function(a,b,c){var e,d,g=[],h=0,i=a.length;if(a instanceof k||i!==n&&"number"===typeof i&&(0<i&&a[0]&&a[i-1]||0===i||k.isArray(a)))for(;h<i;h++)e=b(a[h],h,c),null!=e&&(g[g.length]=e);else for(d in a)e=b(a[d],d,c),null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,b){if("string"===typeof b)var c=a[b],b=a,a=c;if(!k.isFunction(a))return n;var e=X.call(arguments,2),c=function(){return a.apply(b,e.concat(X.call(arguments)))};
c.guid=a.guid=a.guid||c.guid||k.guid++;return c},access:function(a,b,c,e,d,g){var h=a.length;if("object"===typeof b){for(var i in b)k.access(a,i,b[i],e,d,c);return a}if(c!==n){e=!g&&e&&k.isFunction(c);for(i=0;i<h;i++)d(a[i],b,e?c.call(a[i],i,d(a[i],b)):c,g);return a}return h?d(a[0],b):n},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();a=mc.exec(a)||nc.exec(a)||oc.exec(a)||0>a.indexOf("compatible")&&pc.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(b,
e){return new a.fn.init(b,e)}k.extend(!0,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(c,e){e&&(e instanceof k&&!(e instanceof a))&&(e=a(e));return k.fn.init.call(this,c,e,b)};a.fn.init.prototype=a.fn;var b=a(l);return a},browser:{}});k.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){nb["[object "+b+"]"]=b.toLowerCase()});ea=k.uaMatch(tc);ea.browser&&(k.browser[ea.browser]=!0,k.browser.version=ea.version);
k.browser.webkit&&(k.browser.safari=!0);ib.test("\u00a0")&&(jb=/^[\s\xA0]+/,kb=/[\s\xA0]+$/);hb=k(l);l.addEventListener?C=function(){l.removeEventListener("DOMContentLoaded",C,false);k.ready()}:l.attachEvent&&(C=function(){if(l.readyState==="complete"){l.detachEvent("onreadystatechange",C);k.ready()}});d=k;var ob={};d.Callbacks=function(a){var b;if(a){if(!(b=ob[a])){b=a;var c=ob[b]={},e,f;b=b.split(/\s+/);e=0;for(f=b.length;e<f;e++)c[b[e]]=true;b=c}}else b={};var a=b,g=[],h=[],i,j,o,H,l,k=function(b){var c,
e,f,h;c=0;for(e=b.length;c<e;c++){f=b[c];h=d.type(f);h==="array"?k(f):h==="function"&&(!a.unique||!m.has(f))&&g.push(f)}},p=function(b,c){c=c||[];i=!a.memory||[b,c];j=true;l=o||0;o=0;for(H=g.length;g&&l<H;l++)if(g[l].apply(b,c)===false&&a.stopOnFalse){i=true;break}j=false;if(g)if(a.once)i===true?m.disable():g=[];else if(h&&h.length){i=h.shift();m.fireWith(i[0],i[1])}},m={add:function(){if(g){var a=g.length;k(arguments);if(j)H=g.length;else if(i&&i!==true){o=a;p(i[0],i[1])}}return this},remove:function(){if(g)for(var b=
arguments,c=0,e=b.length;c<e;c++)for(var d=0;d<g.length;d++)if(b[c]===g[d]){if(j&&d<=H){H--;d<=l&&l--}g.splice(d--,1);if(a.unique)break}return this},has:function(a){if(g)for(var b=0,c=g.length;b<c;b++)if(a===g[b])return true;return false},empty:function(){g=[];return this},disable:function(){g=h=i=n;return this},disabled:function(){return!g},lock:function(){h=n;(!i||i===true)&&m.disable();return this},locked:function(){return!h},fireWith:function(b,c){h&&(j?a.once||h.push([b,c]):(!a.once||!i)&&p(b,
c));return this},fire:function(){m.fireWith(this,arguments);return this},fired:function(){return!!i}};return m};var Ca=[].slice;d.extend({Deferred:function(a){var b=d.Callbacks("once memory"),c=d.Callbacks("once memory"),e=d.Callbacks("memory"),f="pending",g={resolve:b,reject:c,notify:e},h={done:b.add,fail:c.add,progress:e.add,state:function(){return f},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,
arguments);return this},pipe:function(a,b,c){return d.Deferred(function(e){d.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],f=b[1],g;if(d.isFunction(c))i[a](function(){if((g=c.apply(this,arguments))&&d.isFunction(g.promise))g.promise().then(e.resolve,e.reject,e.notify);else e[f+"With"](this===i?e:this,[g])});else i[a](e[f])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g){i[j]=g[j].fire;
i[j+"With"]=g[j].fireWith}i.done(function(){f="resolved"},c.disable,e.lock).fail(function(){f="rejected"},b.disable,e.lock);a&&a.call(i,i);return i},when:function(a){function b(a){return function(b){e[a]=arguments.length>1?Ca.call(arguments,0):b;--i||j.resolveWith(j,e)}}function c(a){return function(b){h[a]=arguments.length>1?Ca.call(arguments,0):b;j.notifyWith(o,h)}}var e=Ca.call(arguments,0),f=0,g=e.length,h=Array(g),i=g,j=g<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),o=j.promise();if(g>1){for(;f<
g;f++)e[f]&&e[f].promise&&d.isFunction(e[f].promise)?e[f].promise().then(b(f),j.reject,c(f)):--i;i||j.resolveWith(j,e)}else j!==a&&j.resolveWith(j,g?[a]:[]);return o}});var vc=d,Da;var s,Ea,M,ga,ha,u,R,I,Y,ia,Fa,S,m=l.createElement("div");m.setAttribute("className","t");m.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";Ea=m.getElementsByTagName("*");M=m.getElementsByTagName("a")[0];if(!Ea||!Ea.length||!M)Da={};else{ga=l.createElement("select");
ha=ga.appendChild(l.createElement("option"));u=m.getElementsByTagName("input")[0];s={leadingWhitespace:3===m.firstChild.nodeType,tbody:!m.getElementsByTagName("tbody").length,htmlSerialize:!!m.getElementsByTagName("link").length,style:/top/.test(M.getAttribute("style")),hrefNormalized:"/a"===M.getAttribute("href"),opacity:/^0.55/.test(M.style.opacity),cssFloat:!!M.style.cssFloat,checkOn:"on"===u.value,optSelected:ha.selected,getSetAttribute:"t"!==m.className,enctype:!!l.createElement("form").enctype,
html5Clone:"<:nav></:nav>"!==l.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0};u.checked=!0;s.noCloneChecked=u.cloneNode(!0).checked;ga.disabled=!0;s.optDisabled=!ha.disabled;try{delete m.test}catch(md){s.deleteExpando=!1}!m.addEventListener&&(m.attachEvent&&m.fireEvent)&&(m.attachEvent("onclick",function(){s.noCloneEvent=false}),m.cloneNode(!0).fireEvent("onclick"));
u=l.createElement("input");u.value="t";u.setAttribute("type","radio");s.radioValue="t"===u.value;u.setAttribute("checked","checked");m.appendChild(u);I=l.createDocumentFragment();I.appendChild(m.lastChild);s.checkClone=I.cloneNode(!0).cloneNode(!0).lastChild.checked;s.appendChecked=u.checked;I.removeChild(u);I.appendChild(m);m.innerHTML="";r.getComputedStyle&&(R=l.createElement("div"),R.style.width="0",R.style.marginRight="0",m.style.width="2px",m.appendChild(R),s.reliableMarginRight=0===(parseInt((r.getComputedStyle(R,
null)||{marginRight:0}).marginRight,10)||0));if(m.attachEvent)for(Fa in{submit:1,change:1,focusin:1})ia="on"+Fa,S=ia in m,S||(m.setAttribute(ia,"return;"),S="function"===typeof m[ia]),s[Fa+"Bubbles"]=S;I.removeChild(m);I=ga=ha=R=m=u=null;d(function(){var a,b,c,e,f=l.getElementsByTagName("body")[0];if(f){a=l.createElement("div");a.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";f.insertBefore(a,f.firstChild);m=l.createElement("div");a.appendChild(m);
m.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";Y=m.getElementsByTagName("td");S=Y[0].offsetHeight===0;Y[0].style.display="";Y[1].style.display="none";s.reliableHiddenOffsets=S&&Y[0].offsetHeight===0;m.innerHTML="";m.style.width=m.style.paddingLeft="1px";d.boxModel=s.boxModel=m.offsetWidth===2;if(typeof m.style.zoom!=="undefined"){m.style.display="inline";m.style.zoom=1;s.inlineBlockNeedsLayout=m.offsetWidth===2;m.style.display="";m.innerHTML="<div style='width:4px;'></div>";
s.shrinkWrapBlocks=m.offsetWidth!==2}m.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;";m.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";b=m.firstChild;c=b.firstChild;e=b.nextSibling.firstChild.firstChild;
e={doesNotAddBorder:c.offsetTop!==5,doesAddBorderForTableAndCells:e.offsetTop===5};c.style.position="fixed";c.style.top="20px";e.fixedPosition=c.offsetTop===20||c.offsetTop===15;c.style.position=c.style.top="";b.style.overflow="hidden";b.style.position="relative";e.subtractsBorderForOverflowNotVisible=c.offsetTop===-5;e.doesNotIncludeMarginInBodyOffset=f.offsetTop!==1;f.removeChild(a);m=null;d.extend(s,e)}});Da=s}vc.support=Da;var Wb=/^(?:\{.*\}|\[.*\])$/,Vb=/([A-Z])/g;d.extend({cache:{},uuid:0,expando:"jQuery"+
(d.fn.jquery+(new Date).getTime().toString().replace(/\D/g,"")),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!ua(a)},data:function(a,b,c,e){if(d.acceptData(a)){var f;f=d.expando;var g=typeof b==="string",h=a.nodeType,i=h?d.cache:a,j=h?a[f]:a[f]&&f,o=b==="events";if(j&&i[j]&&(o||e||i[j].data)||!(g&&c===n)){j||(h?a[f]=j=++d.uuid:j=f);if(!i[j]){i[j]={};if(!h)i[j].toJSON=d.noop}if(typeof b===
"object"||typeof b==="function")e?i[j]=d.extend(i[j],b):i[j].data=d.extend(i[j].data,b);f=a=i[j];if(!e){if(!a.data)a.data={};a=a.data}c!==n&&(a[d.camelCase(b)]=c);if(o&&!a[b])return f.events;if(g){c=a[b];c==null&&(c=a[d.camelCase(b)])}else c=a;return c}}},removeData:function(a,b,c){if(d.acceptData(a)){var e,f,g,h=d.expando,i=a.nodeType,j=i?d.cache:a,o=i?a[h]:h;if(j[o]){if(b)if(e=c?j[o]:j[o].data){if(!d.isArray(b))if(b in e)b=[b];else{b=d.camelCase(b);b=b in e?[b]:b.split(" ")}f=0;for(g=b.length;f<
g;f++)delete e[b[f]];if(!(c?ua:d.isEmptyObject)(e))return}if(!c){delete j[o].data;if(!ua(j[o]))return}d.support.deleteExpando||!j.setInterval?delete j[o]:j[o]=null;i&&(d.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}}},_data:function(a,b,c){return d.data(a,b,c,true)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});d.fn.extend({data:function(a,b){var c,e,f,g=null;
if(typeof a==="undefined"){if(this.length){g=d.data(this[0]);if(this[0].nodeType===1&&!d._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var h=0,i=e.length;h<i;h++){f=e[h].name;if(f.indexOf("data-")===0){f=d.camelCase(f.substring(5));Qa(this[0],f,g[f])}}d._data(this[0],"parsedAttrs",true)}}return g}if(typeof a==="object")return this.each(function(){d.data(this,a)});c=a.split(".");c[1]=c[1]?"."+c[1]:"";if(b===n){g=this.triggerHandler("getData"+c[1]+"!",[c[0]]);if(g===n&&this.length){g=d.data(this[0],
a);g=Qa(this[0],a,g)}return g===n&&c[1]?this.data(c[0]):g}return this.each(function(){var e=d(this),f=[c[0],b];e.triggerHandler("setData"+c[1]+"!",f);d.data(this,a,b);e.triggerHandler("changeData"+c[1]+"!",f)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}});d.extend({_mark:function(a,b){if(a){b=(b||"fx")+"mark";d._data(a,b,(d._data(a,b)||0)+1)}},_unmark:function(a,b,c){if(a!==true){c=b;b=a;a=false}if(b){var c=c||"fx",e=c+"mark";if(a=a?0:(d._data(b,e)||1)-1)d._data(b,
e,a);else{d.removeData(b,e,true);Ra(b,c,"mark")}}},queue:function(a,b,c){var e;if(a){b=(b||"fx")+"queue";e=d._data(a,b);c&&(!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c));return e||[]}},dequeue:function(a,b){var b=b||"fx",c=d.queue(a,b),e=c.shift(),f={};e==="inprogress"&&(e=c.shift());if(e){b==="fx"&&c.unshift("inprogress");d._data(a,b+".run",f);e.call(a,function(){d.dequeue(a,b)},f)}if(!c.length){d.removeData(a,b+"queue "+b+".run",true);Ra(a,b,"queue")}}});d.fn.extend({queue:function(a,
b){if(typeof a!=="string"){b=a;a="fx"}return b===n?d.queue(this[0],a):this.each(function(){var c=d.queue(this,a,b);a==="fx"&&c[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a;return this.queue(b||"fx",function(b,e){var d=setTimeout(b,a);e.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a){function b(){--g||c.resolveWith(e,[e])}typeof a!==
"string"&&(a=n);for(var a=a||"fx",c=d.Deferred(),e=this,f=e.length,g=1,h=a+"defer",i=a+"queue",a=a+"mark",j;f--;)if(j=d.data(e[f],h,n,true)||(d.data(e[f],i,n,true)||d.data(e[f],a,n,true))&&d.data(e[f],h,d.Callbacks("once memory"),true)){g++;j.add(b)}b();return c.promise()}});var qb=/[\n\t\r]/g,ja=/\s+/,wc=/\r/g,xc=/^(?:button|input)$/i,yc=/^(?:button|input|object|select|textarea)$/i,zc=/^a(?:rea)?$/i,rb=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
sb=d.support.getSetAttribute,w,tb,ub;d.fn.extend({attr:function(a,b){return d.access(this,a,b,true,d.attr)},removeAttr:function(a){return this.each(function(){d.removeAttr(this,a)})},prop:function(a,b){return d.access(this,a,b,true,d.prop)},removeProp:function(a){a=d.propFix[a]||a;return this.each(function(){try{this[a]=n;delete this[a]}catch(b){}})},addClass:function(a){var b,c,e,f,g,h,i;if(d.isFunction(a))return this.each(function(b){d(this).addClass(a.call(this,b,this.className))});if(a&&typeof a===
"string"){b=a.split(ja);c=0;for(e=this.length;c<e;c++){f=this[c];if(f.nodeType===1)if(!f.className&&b.length===1)f.className=a;else{g=" "+f.className+" ";h=0;for(i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g=g+(b[h]+" "));f.className=d.trim(g)}}}return this},removeClass:function(a){var b,c,e,f,g,h,i;if(d.isFunction(a))return this.each(function(b){d(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a==="string"||a===n){b=(a||"").split(ja);c=0;for(e=this.length;c<e;c++){f=this[c];if(f.nodeType===
1&&f.className)if(a){g=(" "+f.className+" ").replace(qb," ");h=0;for(i=b.length;h<i;h++)g=g.replace(" "+b[h]+" "," ");f.className=d.trim(g)}else f.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";return d.isFunction(a)?this.each(function(c){d(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string")for(var f,g=0,h=d(this),i=b,j=a.split(ja);f=j[g++];){i=e?i:!h.hasClass(f);h[i?"addClass":"removeClass"](f)}else if(c==="undefined"||
c==="boolean"){this.className&&d._data(this,"__className__",this.className);this.className=this.className||a===false?"":d._data(this,"__className__")||""}})},hasClass:function(a){for(var a=" "+a+" ",b=0,c=this.length;b<c;b++)if(this[b].nodeType===1&&(" "+this[b].className+" ").replace(qb," ").indexOf(a)>-1)return true;return false},val:function(a){var b,c,e,f=this[0];if(arguments.length){e=d.isFunction(a);return this.each(function(c){var f=d(this);if(this.nodeType===1){c=e?a.call(this,c,f.val()):
a;c==null?c="":typeof c==="number"?c=c+"":d.isArray(c)&&(c=d.map(c,function(a){return a==null?"":a+""}));b=d.valHooks[this.nodeName.toLowerCase()]||d.valHooks[this.type];if(!b||!("set"in b)||b.set(this,c,"value")===n)this.value=c}})}if(f){if((b=d.valHooks[f.nodeName.toLowerCase()]||d.valHooks[f.type])&&"get"in b&&(c=b.get(f,"value"))!==n)return c;c=f.value;return typeof c==="string"?c.replace(wc,""):c==null?"":c}}});d.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?
a.value:a.text}},select:{get:function(a){var b,c,e=a.selectedIndex,f=[],g=a.options,h=a.type==="select-one";if(e<0)return null;a=h?e:0;for(c=h?e+1:g.length;a<c;a++){b=g[a];if(b.selected&&(d.support.optDisabled?!b.disabled:b.getAttribute("disabled")===null)&&(!b.parentNode.disabled||!d.nodeName(b.parentNode,"optgroup"))){b=d(b).val();if(h)return b;f.push(b)}}return h&&!f.length&&g.length?d(g[e]).val():f},set:function(a,b){var c=d.makeArray(b);d(a).find("option").each(function(){this.selected=d.inArray(d(this).val(),
c)>=0});if(!c.length)a.selectedIndex=-1;return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,b,c,e){var f,g,h=a.nodeType;if(a&&!(h===3||h===8||h===2)){if(e&&b in d.attrFn)return d(a)[b](c);if(typeof a.getAttribute==="undefined")return d.prop(a,b,c);if(e=h!==1||!d.isXMLDoc(a)){b=b.toLowerCase();g=d.attrHooks[b]||(rb.test(b)?tb:w)}if(c!==n)if(c===null)d.removeAttr(a,b);else{if(g&&"set"in g&&e&&(f=g.set(a,c,b))!==n)return f;a.setAttribute(b,""+c);return c}else{if(g&&
"get"in g&&e&&(f=g.get(a,b))!==null)return f;f=a.getAttribute(b);return f===null?n:f}}},removeAttr:function(a,b){var c,e,f,g,h=0;if(b&&a.nodeType===1){e=b.toLowerCase().split(ja);for(g=e.length;h<g;h++)if(f=e[h]){c=d.propFix[f]||f;d.attr(a,f,"");a.removeAttribute(sb?f:c);rb.test(f)&&c in a&&(a[c]=false)}}},attrHooks:{type:{set:function(a,b){if(xc.test(a.nodeName)&&a.parentNode)d.error("type property can't be changed");else if(!d.support.radioValue&&b==="radio"&&d.nodeName(a,"input")){var c=a.value;
a.setAttribute("type",b);if(c)a.value=c;return b}}},value:{get:function(a,b){return w&&d.nodeName(a,"button")?w.get(a,b):b in a?a.value:null},set:function(a,b,c){if(w&&d.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,
b,c){var e,f,g;g=a.nodeType;if(a&&!(g===3||g===8||g===2)){if(g=g!==1||!d.isXMLDoc(a)){b=d.propFix[b]||b;f=d.propHooks[b]}return c!==n?f&&"set"in f&&(e=f.set(a,c,b))!==n?e:a[b]=c:f&&"get"in f&&(e=f.get(a,b))!==null?e:a[b]}},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?parseInt(b.value,10):yc.test(a.nodeName)||zc.test(a.nodeName)&&a.href?0:n}}}});d.attrHooks.tabindex=d.propHooks.tabIndex;tb={get:function(a,b){var c,e=d.prop(a,b);return e===true||typeof e!==
"boolean"&&(c=a.getAttributeNode(b))&&c.nodeValue!==false?b.toLowerCase():n},set:function(a,b,c){if(b===false)d.removeAttr(a,c);else{b=d.propFix[c]||c;b in a&&(a[b]=true);a.setAttribute(c,c.toLowerCase())}return c}};sb||(ub={name:!0,id:!0},w=d.valHooks.button={get:function(a,b){var c;return(c=a.getAttributeNode(b))&&(ub[b]?c.nodeValue!=="":c.specified)?c.nodeValue:n},set:function(a,b,c){var e=a.getAttributeNode(c);if(!e){e=l.createAttribute(c);a.setAttributeNode(e)}return e.nodeValue=b+""}},d.attrHooks.tabindex.set=
w.set,d.each(["width","height"],function(a,b){d.attrHooks[b]=d.extend(d.attrHooks[b],{set:function(a,e){if(e===""){a.setAttribute(b,"auto");return e}}})}),d.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false");w.set(a,b,c)}});d.support.hrefNormalized||d.each(["href","src","width","height"],function(a,b){d.attrHooks[b]=d.extend(d.attrHooks[b],{get:function(a){a=a.getAttribute(b,2);return a===null?n:a}})});d.support.style||(d.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||
n},set:function(a,b){return a.style.cssText=""+b}});d.support.optSelected||(d.propHooks.selected=d.extend(d.propHooks.selected,{get:function(a){if(a=a.parentNode){a.selectedIndex;a.parentNode&&a.parentNode.selectedIndex}return null}}));d.support.enctype||(d.propFix.enctype="encoding");d.support.checkOn||d.each(["radio","checkbox"],function(){d.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}});d.each(["radio","checkbox"],function(){d.valHooks[this]=d.extend(d.valHooks[this],
{set:function(a,b){if(d.isArray(b))return a.checked=d.inArray(d(a).val(),b)>=0}})});var Ga=/^(?:textarea|input|select)$/i,vb=/^([^\.]*)?(?:\.(.+))?$/,Ac=/\bhover(\.\S+)?\b/,Bc=/^key/,Cc=/^(?:mouse|contextmenu)|click/,wb=/^(?:focusinfocus|focusoutblur)$/,Dc=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Ec=function(a){if(a=Dc.exec(a)){a[1]=(a[1]||"").toLowerCase();a[3]=a[3]&&RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)")}return a},xb=function(a){return d.event.special.hover?a:a.replace(Ac,"mouseenter$1 mouseleave$1")};
d.event={add:function(a,b,c,e,f){var g,h,i,j,o,l,k,P,p;if(!(a.nodeType===3||a.nodeType===8||!b||!c||!(g=d._data(a)))){if(c.handler){k=c;c=k.handler}if(!c.guid)c.guid=d.guid++;i=g.events;if(!i)g.events=i={};h=g.handle;if(!h){g.handle=h=function(a){return typeof d!=="undefined"&&(!a||d.event.triggered!==a.type)?d.event.dispatch.apply(h.elem,arguments):n};h.elem=a}b=d.trim(xb(b)).split(" ");for(g=0;g<b.length;g++){j=vb.exec(b[g])||[];o=j[1];l=(j[2]||"").split(".").sort();p=d.event.special[o]||{};o=(f?
p.delegateType:p.bindType)||o;p=d.event.special[o]||{};j=d.extend({type:o,origType:j[1],data:e,handler:c,guid:c.guid,selector:f,quick:Ec(f),namespace:l.join(".")},k);P=i[o];if(!P){P=i[o]=[];P.delegateCount=0;if(!p.setup||p.setup.call(a,e,l,h)===false)a.addEventListener?a.addEventListener(o,h,false):a.attachEvent&&a.attachEvent("on"+o,h)}if(p.add){p.add.call(a,j);if(!j.handler.guid)j.handler.guid=c.guid}f?P.splice(P.delegateCount++,0,j):P.push(j);d.event.global[o]=true}a=null}},global:{},remove:function(a,
b,c,e,f){var g=d.hasData(a)&&d._data(a),h,i,j,o,l,n,k,p,m,q;if(g&&(k=g.events)){b=d.trim(xb(b||"")).split(" ");for(h=0;h<b.length;h++){i=vb.exec(b[h])||[];j=o=i[1];i=i[2];if(j){p=d.event.special[j]||{};j=(e?p.delegateType:p.bindType)||j;m=k[j]||[];l=m.length;i=i?RegExp("(^|\\.)"+i.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<m.length;n++){q=m[n];if((f||o===q.origType)&&(!c||c.guid===q.guid)&&(!i||i.test(q.namespace))&&(!e||e===q.selector||e==="**"&&q.selector)){m.splice(n--,1);
q.selector&&m.delegateCount--;p.remove&&p.remove.call(a,q)}}if(m.length===0&&l!==m.length){(!p.teardown||p.teardown.call(a,i)===false)&&d.removeEvent(a,j,g.handle);delete k[j]}}else for(j in k)d.event.remove(a,j+b[h],c,e,true)}if(d.isEmptyObject(k)){if(b=g.handle)b.elem=null;d.removeData(a,["events","handle"],true)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(a,b,c,e){if(!c||!(c.nodeType===3||c.nodeType===8)){var f=a.type||a,g=[],h,i,j,o,l;if(!wb.test(f+d.event.triggered)){if(f.indexOf("!")>=
0){f=f.slice(0,-1);h=true}if(f.indexOf(".")>=0){g=f.split(".");f=g.shift();g.sort()}if(c&&!d.event.customEvent[f]||d.event.global[f]){a=typeof a==="object"?a[d.expando]?a:new d.Event(f,a):new d.Event(f);a.type=f;a.isTrigger=true;a.exclusive=h;a.namespace=g.join(".");a.namespace_re=a.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;h=f.indexOf(":")<0?"on"+f:"";if(c){a.result=n;if(!a.target)a.target=c;b=b!=null?d.makeArray(b):[];b.unshift(a);j=d.event.special[f]||{};if(!(j.trigger&&
j.trigger.apply(c,b)===false)){l=[[c,j.bindType||f]];if(!e&&!j.noBubble&&!d.isWindow(c)){o=j.delegateType||f;g=wb.test(o+f)?c:c.parentNode;for(i=null;g;g=g.parentNode){l.push([g,o]);i=g}i&&i===c.ownerDocument&&l.push([i.defaultView||i.parentWindow||r,o])}for(i=0;i<l.length&&!a.isPropagationStopped();i++){g=l[i][0];a.type=l[i][1];(o=(d._data(g,"events")||{})[a.type]&&d._data(g,"handle"))&&o.apply(g,b);(o=h&&g[h])&&(d.acceptData(g)&&o.apply(g,b)===false)&&a.preventDefault()}a.type=f;if(!e&&!a.isDefaultPrevented()&&
(!j._default||j._default.apply(c.ownerDocument,b)===false)&&!(f==="click"&&d.nodeName(c,"a"))&&d.acceptData(c))if(h&&c[f]&&(f!=="focus"&&f!=="blur"||a.target.offsetWidth!==0)&&!d.isWindow(c)){(i=c[h])&&(c[h]=null);d.event.triggered=f;c[f]();d.event.triggered=n;i&&(c[h]=i)}return a.result}}else{c=d.cache;for(i in c)c[i].events&&c[i].events[f]&&d.event.trigger(a,b,c[i].handle.elem,true)}}}}},dispatch:function(a){var a=d.event.fix(a||r.event),b=(d._data(this,"events")||{})[a.type]||[],c=b.delegateCount,
e=[].slice.call(arguments,0),f=!a.exclusive&&!a.namespace,g=[],h,i,j,o,l,k,p;e[0]=a;a.delegateTarget=this;if(c&&!a.target.disabled&&!(a.button&&a.type==="click")){j=d(this);j.context=this.ownerDocument||this;for(i=a.target;i!=this;i=i.parentNode||this){l={};k=[];j[0]=i;for(h=0;h<c;h++){o=b[h];p=o.selector;if(l[p]===n){var m=l,q=p,E;if(o.quick){E=o.quick;var s=i.attributes||{};E=(!E[1]||i.nodeName.toLowerCase()===E[1])&&(!E[2]||(s.id||{}).value===E[2])&&(!E[3]||E[3].test((s["class"]||{}).value))}else E=
j.is(p);m[q]=E}l[p]&&k.push(o)}k.length&&g.push({elem:i,matches:k})}}b.length>c&&g.push({elem:this,matches:b.slice(c)});for(h=0;h<g.length&&!a.isPropagationStopped();h++){c=g[h];a.currentTarget=c.elem;for(b=0;b<c.matches.length&&!a.isImmediatePropagationStopped();b++){o=c.matches[b];if(f||!a.namespace&&!o.namespace||a.namespace_re&&a.namespace_re.test(o.namespace)){a.data=o.data;a.handleObj=o;o=((d.event.special[o.origType]||{}).handle||o.handler).apply(c.elem,e);if(o!==n){a.result=o;if(o===false){a.preventDefault();
a.stopPropagation()}}}}}return a.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(a,b){if(a.which==null)a.which=b.charCode!=null?b.charCode:b.keyCode;return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(a,b){var c,e,d=b.button,g=b.fromElement;if(a.pageX==null&&b.clientX!=null){c=a.target.ownerDocument||l;e=c.documentElement;c=c.body;a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0);a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)}if(!a.relatedTarget&&g)a.relatedTarget=g===a.target?b.toElement:g;if(!a.which&&d!==n)a.which=d&1?1:d&2?3:d&4?2:0;return a}},fix:function(a){if(a[d.expando])return a;var b,
c,e=a,f=d.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props,a=d.Event(e);for(b=g.length;b;){c=g[--b];a[c]=e[c]}if(!a.target)a.target=e.srcElement||l;if(a.target.nodeType===3)a.target=a.target.parentNode;if(a.metaKey===n)a.metaKey=a.ctrlKey;return f.filter?f.filter(a,e):a},special:{ready:{setup:d.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){if(d.isWindow(this))this.onbeforeunload=c},teardown:function(a,
b){if(this.onbeforeunload===b)this.onbeforeunload=null}}},simulate:function(a,b,c,e){a=d.extend(new d.Event,c,{type:a,isSimulated:true,originalEvent:{}});e?d.event.trigger(a,null,b):d.event.dispatch.call(b,a);a.isDefaultPrevented()&&c.preventDefault()}};d.event.handle=d.event.dispatch;d.removeEvent=l.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,false)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)};d.Event=function(a,b){if(!(this instanceof d.Event))return new d.Event(a,
b);if(a&&a.type){this.originalEvent=a;this.type=a.type;this.isDefaultPrevented=a.defaultPrevented||a.returnValue===false||a.getPreventDefault&&a.getPreventDefault()?aa:L}else this.type=a;b&&d.extend(this,b);this.timeStamp=a&&a.timeStamp||d.now();this[d.expando]=true};d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=aa;var a=this.originalEvent;if(a)a.preventDefault?a.preventDefault():a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=aa;var a=this.originalEvent;
if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=aa;this.stopPropagation()},isDefaultPrevented:L,isPropagationStopped:L,isImmediatePropagationStopped:L};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={delegateType:b,bindType:b,handle:function(a){var e=a.relatedTarget,f=a.handleObj,g;if(!e||e!==this&&!d.contains(this,e)){a.type=f.origType;g=f.handler.apply(this,arguments);
a.type=b}return g}}});d.support.submitBubbles||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return false;d.event.add(this,"click._submit keypress._submit",function(a){a=a.target;if((a=d.nodeName(a,"input")||d.nodeName(a,"button")?a.form:n)&&!a._submit_attached){d.event.add(a,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&d.event.simulate("submit",this.parentNode,a,true)});a._submit_attached=true}})},teardown:function(){if(d.nodeName(this,"form"))return false;d.event.remove(this,
"._submit")}});d.support.changeBubbles||(d.event.special.change={setup:function(){if(Ga.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){d.event.add(this,"propertychange._change",function(a){if(a.originalEvent.propertyName==="checked")this._just_changed=true});d.event.add(this,"click._change",function(a){if(this._just_changed&&!a.isTrigger){this._just_changed=false;d.event.simulate("change",this,a,true)}})}return false}d.event.add(this,"beforeactivate._change",function(a){a=a.target;
if(Ga.test(a.nodeName)&&!a._change_attached){d.event.add(a,"change._change",function(a){this.parentNode&&(!a.isSimulated&&!a.isTrigger)&&d.event.simulate("change",this.parentNode,a,true)});a._change_attached=true}})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){d.event.remove(this,"._change");return Ga.test(this.nodeName)}});d.support.focusinBubbles||d.each({focus:"focusin",
blur:"focusout"},function(a,b){var c=0,e=function(a){d.event.simulate(b,a.target,d.event.fix(a),true)};d.event.special[b]={setup:function(){c++===0&&l.addEventListener(a,e,true)},teardown:function(){--c===0&&l.removeEventListener(a,e,true)}}});d.fn.extend({on:function(a,b,c,e,f){var g,h;if(typeof a==="object"){if(typeof b!=="string"){c=b;b=n}for(h in a)this.on(h,b,c,a[h],f);return this}if(c==null&&e==null){e=b;c=b=n}else if(e==null)if(typeof b==="string"){e=c;c=n}else{e=c;c=b;b=n}if(e===false)e=L;
else if(!e)return this;if(f===1){g=e;e=function(a){d().off(a);return g.apply(this,arguments)};e.guid=g.guid||(g.guid=d.guid++)}return this.each(function(){d.event.add(this,a,e,c,b)})},one:function(a,b,c,e){return this.on.call(this,a,b,c,e,1)},off:function(a,b,c){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;d(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a==="object"){for(e in a)this.off(e,b,a[e]);return this}if(b===false||typeof b===
"function"){c=b;b=n}c===false&&(c=L);return this.each(function(){d.event.remove(this,a,c,b)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){d(this.context).on(a,this.selector,b,c);return this},die:function(a,b){d(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,e){return this.on(b,a,c,e)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,
b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return d.event.trigger(a,b,this[0],true)},toggle:function(a){var b=arguments,c=a.guid||d.guid++,e=0,f=function(c){var f=(d._data(this,"lastToggle"+a.guid)||0)%e;d._data(this,"lastToggle"+a.guid,f+1);c.preventDefault();return b[f].apply(this,arguments)||false};for(f.guid=c;e<b.length;)b[e++].guid=c;return this.click(f)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
function(a,b){d.fn[b]=function(a,e){if(e==null){e=a;a=null}return arguments.length>0?this.on(b,null,a,e):this.trigger(b)};d.attrFn&&(d.attrFn[b]=true);if(Bc.test(b))d.event.fixHooks[b]=d.event.keyHooks;if(Cc.test(b))d.event.fixHooks[b]=d.event.mouseHooks});var yb=function(a,b,c,e,d,g){for(var d=0,h=e.length;d<h;d++){var i=e[d];if(i){for(var j=false,i=i[a];i;){if(i[T]===c){j=e[i.sizset];break}if(i.nodeType===1&&!g){i[T]=c;i.sizset=d}if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}e[d]=j}}},zb=function(a,
b,c,e,d,g){for(var d=0,h=e.length;d<h;d++){var i=e[d];if(i){for(var j=false,i=i[a];i;){if(i[T]===c){j=e[i.sizset];break}if(i.nodeType===1){if(!g){i[T]=c;i.sizset=d}if(typeof b!=="string"){if(i===b){j=true;break}}else if(p.filter(b,[i]).length>0){j=i;break}}i=i[a]}e[d]=j}}},Ha=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,T="sizcache"+((new Date).getTime()+"").replace(".",""),Ia=0,Ab=Object.prototype.toString,ka=
!1,Bb=!0,U=/\\/g,Fc=/\r\n/g,la=/\W/;[0,0].sort(function(){Bb=false;return 0});var p=function(a,b,c,e){var c=c||[],d=b=b||l;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return c;var g,h,i,j,o,k=true,n=p.isXML(b),m=[],r=a;do{Ha.exec("");if(g=Ha.exec(r)){r=g[3];m.push(g[1]);if(g[2]){j=g[3];break}}}while(g);if(m.length>1&&Gc.exec(a))if(m.length===2&&q.relative[m[0]])h=Cb(m[0]+m[1],b,e);else for(h=q.relative[m[0]]?[b]:p(m.shift(),b);m.length;){a=m.shift();q.relative[a]&&(a=a+m.shift());
h=Cb(a,h,e)}else{if(!e&&m.length>1&&b.nodeType===9&&!n&&q.match.ID.test(m[0])&&!q.match.ID.test(m[m.length-1])){g=p.find(m.shift(),b,n);b=g.expr?p.filter(g.expr,g.set)[0]:g.set[0]}if(b){g=e?{expr:m.pop(),set:x(e)}:p.find(m.pop(),m.length===1&&(m[0]==="~"||m[0]==="+")&&b.parentNode?b.parentNode:b,n);h=g.expr?p.filter(g.expr,g.set):g.set;for(m.length>0?i=x(h):k=false;m.length;){g=o=m.pop();q.relative[o]?g=m.pop():o="";g==null&&(g=b);q.relative[o](i,g,n)}}else i=[]}i||(i=h);i||p.error(o||a);if(Ab.call(i)===
"[object Array]")if(k)if(b&&b.nodeType===1)for(a=0;i[a]!=null;a++)i[a]&&(i[a]===true||i[a].nodeType===1&&p.contains(b,i[a]))&&c.push(h[a]);else for(a=0;i[a]!=null;a++)i[a]&&i[a].nodeType===1&&c.push(h[a]);else c.push.apply(c,i);else x(i,c);if(j){p(j,d,c,e);p.uniqueSort(c)}return c};p.uniqueSort=function(a){if(ma){ka=Bb;a.sort(ma);if(ka)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a};p.matches=function(a,b){return p(a,null,null,b)};p.matchesSelector=function(a,b){return p(b,null,
null,[a]).length>0};p.find=function(a,b,c){var e,d,g,h,i,j;if(!a)return[];d=0;for(g=q.order.length;d<g;d++){i=q.order[d];if(h=q.leftMatch[i].exec(a)){j=h[1];h.splice(1,1);if(j.substr(j.length-1)!=="\\"){h[1]=(h[1]||"").replace(U,"");e=q.find[i](h,b,c);if(e!=null){a=a.replace(q.match[i],"");break}}}}e||(e=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:e,expr:a}};p.filter=function(a,b,c,e){for(var d,g,h,i,j,o,l,k,m=a,r=[],s=b,E=b&&b[0]&&p.isXML(b[0]);a&&b.length;){for(h in q.filter)if((d=
q.leftMatch[h].exec(a))!=null&&d[2]){o=q.filter[h];j=d[1];g=false;d.splice(1,1);if(j.substr(j.length-1)!=="\\"){s===r&&(r=[]);if(q.preFilter[h])if(d=q.preFilter[h](d,s,c,r,e,E)){if(d===true)continue}else g=i=true;if(d)for(l=0;(j=s[l])!=null;l++)if(j){i=o(j,d,l,s);k=e^i;if(c&&i!=null)k?g=true:s[l]=false;else if(k){r.push(j);g=true}}if(i!==n){c||(s=r);a=a.replace(q.match[h],"");if(!g)return[];break}}}if(a===m)if(g==null)p.error(a);else break;m=a}return s};p.error=function(a){throw Error("Syntax error, unrecognized expression: "+
a);};var Ja=p.getText=function(a){var b,c;b=a.nodeType;var d="";if(b)if(b===1||b===9){if(typeof a.textContent==="string")return a.textContent;if(typeof a.innerText==="string")return a.innerText.replace(Fc,"");for(a=a.firstChild;a;a=a.nextSibling)d=d+Ja(a)}else{if(b===3||b===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(d=d+Ja(c));return d},q=p.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},
type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!la.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,f=a.length,g;d<f;d++)if(g=a[d]){for(;(g=g.previousSibling)&&g.nodeType!==1;);a[d]=c||g&&g.nodeName.toLowerCase()===b?g||false:g===b}c&&p.filter(b,a,true)},">":function(a,b){var c,d=typeof b==="string",f=0,g=a.length;if(d&&!la.test(b))for(b=b.toLowerCase();f<g;f++){if(c=a[f]){c=c.parentNode;a[f]=c.nodeName.toLowerCase()===b?c:false}}else{for(;f<
g;f++)(c=a[f])&&(a[f]=d?c.parentNode:c.parentNode===b);d&&p.filter(b,a,true)}},"":function(a,b,c){var d,f=Ia++,g=zb;if(typeof b==="string"&&!la.test(b)){d=b=b.toLowerCase();g=yb}g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=Ia++,g=zb;if(typeof b==="string"&&!la.test(b)){d=b=b.toLowerCase();g=yb}g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!==
"undefined"){for(var c=[],d=b.getElementsByName(a[1]),f=0,g=d.length;f<g;f++)d[f].getAttribute("name")===a[1]&&c.push(d[f]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,f,g){a=" "+a[1].replace(U,"")+" ";if(g)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(f^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=false));return false},ID:function(a){return a[1].replace(U,
"")},TAG:function(a){return a[1].replace(U,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||p.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}else a[2]&&p.error(a[0]);a[0]=Ia++;return a},ATTR:function(a,b,c,d,f,g){b=a[1]=a[1].replace(U,"");!g&&q.attrMap[b]&&(a[1]=q.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(U,"");a[2]==="~="&&(a[4]=" "+a[4]+
" ");return a},PSEUDO:function(a,b,c,d,f){if(a[1]==="not")if((Ha.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=p(a[3],null,null,b);else{a=p.filter(a[3],b,c,1^f);c||d.push.apply(d,a);return false}else if(q.match.POS.test(a[0])||q.match.CHILD.test(a[0]))return true;return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){a.parentNode&&
a.parentNode.selectedIndex;return a.selected===true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!p(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&
"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();
return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,
b,c,d){var f=b[1],g=q.filters[f];if(g)return g(a,c,b,d);if(f==="contains")return(a.textContent||a.innerText||Ja([a])||"").indexOf(b[3])>=0;if(f==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return false;return true}p.error(f)},CHILD:function(a,b){var c,d,f,g,h,i;c=b[1];i=a;switch(c){case "only":case "first":for(;i=i.previousSibling;)if(i.nodeType===1)return false;if(c==="first")return true;i=a;case "last":for(;i=i.nextSibling;)if(i.nodeType===1)return false;return true;case "nth":c=b[2];
d=b[3];if(c===1&&d===0)return true;f=b[0];if((g=a.parentNode)&&(g[T]!==f||!a.nodeIndex)){h=0;for(i=g.firstChild;i;i=i.nextSibling)if(i.nodeType===1)i.nodeIndex=++h;g[T]=f}i=a.nodeIndex-d;return c===0?i===0:i%c===0&&i/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],
c=p.attr?p.attr(a,c):q.attrHandle[c]?q.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=c+"",f=b[2],g=b[4];return c==null?f==="!=":!f&&p.attr?c!=null:f==="="?d===g:f==="*="?d.indexOf(g)>=0:f==="~="?(" "+d+" ").indexOf(g)>=0:!g?d&&c!==false:f==="!="?d!==g:f==="^="?d.indexOf(g)===0:f==="$="?d.substr(d.length-g.length)===g:f==="|="?d===g||d.substr(0,g.length+1)===g+"-":false},POS:function(a,b,c,d){var f=q.setFilters[b[2]];if(f)return f(a,c,b,d)}}},Gc=q.match.POS,Hc=function(a,b){return"\\"+(b-0+
1)},Z;for(Z in q.match)q.match[Z]=RegExp(q.match[Z].source+/(?![^\[]*\])(?![^\(]*\))/.source),q.leftMatch[Z]=RegExp(/(^(?:.|\r|\n)*?)/.source+q.match[Z].source.replace(/\\(\d+)/g,Hc));var x=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(l.documentElement.childNodes,0)[0].nodeType}catch(nd){x=function(a,b){var c=0,d=b||[];if(Ab.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var f=
a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var ma,$;l.documentElement.compareDocumentPosition?ma=function(a,b){if(a===b){ka=true;return 0}return!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(ma=function(a,b){if(a===b){ka=true;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,f=[],g=[];c=a.parentNode;d=b.parentNode;var h=c;if(c===d)return $(a,b);if(c){if(!d)return 1}else return-1;
for(;h;){f.unshift(h);h=h.parentNode}for(h=d;h;){g.unshift(h);h=h.parentNode}c=f.length;d=g.length;for(h=0;h<c&&h<d;h++)if(f[h]!==g[h])return $(f[h],g[h]);return h===c?$(a,g[h],-1):$(f[h],b,1)},$=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});var na=l.createElement("div"),Db="script"+(new Date).getTime(),oa=l.documentElement;na.innerHTML="<a name='"+Db+"'/>";oa.insertBefore(na,oa.firstChild);l.getElementById(Db)&&(q.find.ID=function(a,b,c){if(typeof b.getElementById!==
"undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:n:[]},q.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b});oa.removeChild(na);var oa=na=null,J=l.createElement("div");J.appendChild(l.createComment(""));0<J.getElementsByTagName("*").length&&(q.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){for(var d=
[],f=0;c[f];f++)c[f].nodeType===1&&d.push(c[f]);c=d}return c});J.innerHTML="<a href='#'></a>";J.firstChild&&("undefined"!==typeof J.firstChild.getAttribute&&"#"!==J.firstChild.getAttribute("href"))&&(q.attrHandle.href=function(a){return a.getAttribute("href",2)});J=null;if(l.querySelectorAll){var Ka=p,pa=l.createElement("div");pa.innerHTML="<p class='TEST'></p>";if(!(pa.querySelectorAll&&0===pa.querySelectorAll(".TEST").length)){var p=function(a,b,c,d){b=b||l;if(!d&&!p.isXML(b)){var f=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
if(f&&(b.nodeType===1||b.nodeType===9)){if(f[1])return x(b.getElementsByTagName(a),c);if(f[2]&&q.find.CLASS&&b.getElementsByClassName)return x(b.getElementsByClassName(f[2]),c)}if(b.nodeType===9){if(a==="body"&&b.body)return x([b.body],c);if(f&&f[3]){var g=b.getElementById(f[3]);if(g&&g.parentNode){if(g.id===f[3])return x([g],c)}else return x([],c)}try{return x(b.querySelectorAll(a),c)}catch(h){}}else if(b.nodeType===1&&b.nodeName.toLowerCase()!=="object"){var f=b,i=(g=b.getAttribute("id"))||"__sizzle__",
j=b.parentNode,o=/^\s*[+~]/.test(a);g?i=i.replace(/'/g,"\\$&"):b.setAttribute("id",i);if(o&&j)b=b.parentNode;try{if(!o||j)return x(b.querySelectorAll("[id='"+i+"'] "+a),c)}catch(k){}finally{g||f.removeAttribute("id")}}}return Ka(a,b,c,d)},La;for(La in Ka)p[La]=Ka[La];pa=null}}var qa=l.documentElement,ra=qa.matchesSelector||qa.mozMatchesSelector||qa.webkitMatchesSelector||qa.msMatchesSelector;if(ra){var Ic=!ra.call(l.createElement("div"),"div"),Eb=!1;try{ra.call(l.documentElement,"[test!='']:sizzle")}catch(od){Eb=
!0}p.matchesSelector=function(a,b){b=b.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!p.isXML(a))try{if(Eb||!q.match.PSEUDO.test(b)&&!/!=/.test(b)){var c=ra.call(a,b);if(c||!Ic||a.document&&a.document.nodeType!==11)return c}}catch(d){}return p(b,null,null,[a]).length>0}}var V=l.createElement("div");V.innerHTML="<div class='test e'></div><div class='test'></div>";V.getElementsByClassName&&0!==V.getElementsByClassName("e").length&&(V.lastChild.className="e",1!==V.getElementsByClassName("e").length&&
(q.order.splice(1,0,"CLASS"),q.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},V=null));p.contains=l.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):true)}:l.documentElement.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(){return false};p.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":false};var Cb=function(a,b,c){for(var d,
f=[],g="",b=b.nodeType?[b]:b;d=q.match.PSEUDO.exec(a);){g=g+d[0];a=a.replace(q.match.PSEUDO,"")}a=q.relative[a]?a+"*":a;d=0;for(var h=b.length;d<h;d++)p(a,b[d],f,c);return p.filter(g,f)};p.attr=d.attr;p.selectors.attrMap={};d.find=p;d.expr=p.selectors;d.expr[":"]=d.expr.filters;d.unique=p.uniqueSort;d.text=p.getText;d.isXMLDoc=p.isXML;d.contains=p.contains;var Jc=/Until$/,Kc=/^(?:parents|prevUntil|prevAll)/,Lc=/,/,Xb=/^.[^:#\[\.,]*$/,Mc=Array.prototype.slice,Fb=d.expr.match.POS,Nc={children:!0,contents:!0,
next:!0,prev:!0};d.fn.extend({find:function(a){var b=this,c,e;if(typeof a!=="string")return d(a).filter(function(){c=0;for(e=b.length;c<e;c++)if(d.contains(b[c],this))return true});var f=this.pushStack("","find",a),g,h,i;c=0;for(e=this.length;c<e;c++){g=f.length;d.find(a,this[c],f);if(c>0)for(h=g;h<f.length;h++)for(i=0;i<g;i++)if(f[i]===f[h]){f.splice(h--,1);break}}return f},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,e=b.length;a<e;a++)if(d.contains(this,b[a]))return true})},
not:function(a){return this.pushStack(Sa(this,a,false),"not",a)},filter:function(a){return this.pushStack(Sa(this,a,true),"filter",a)},is:function(a){return!!a&&(typeof a==="string"?Fb.test(a)?d(a,this.context).index(this[0])>=0:d.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){for(f=1;g&&g.ownerDocument&&g!==b;){for(e=0;e<a.length;e++)d(g).is(a[e])&&c.push({selector:a[e],elem:g,level:f});g=g.parentNode;f++}return c}var h=Fb.test(a)||
typeof a!=="string"?d(a,b||this.context):0;e=0;for(f=this.length;e<f;e++)for(g=this[e];g;)if(h?h.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}else{g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){return!a?this[0]&&this[0].parentNode?this.prevAll().length:-1:typeof a==="string"?d.inArray(this[0],d(a)):d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):
d.makeArray(a&&a.nodeType?[a]:a),e=d.merge(this.get(),c);return this.pushStack(!c[0]||!c[0].parentNode||c[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}});d.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,
2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,
b){d.fn[a]=function(c,e){var f=d.map(this,b,c);Jc.test(a)||(e=c);e&&typeof e==="string"&&(f=d.filter(e,f));f=this.length>1&&!Nc[a]?d.unique(f):f;if((this.length>1||Lc.test(e))&&Kc.test(a))f=f.reverse();return this.pushStack(f,a,Mc.call(arguments).join(","))}});d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,b,c){for(var e=[],a=a[b];a&&a.nodeType!==9&&(c===n||a.nodeType!==1||!d(a).is(c));){a.nodeType===
1&&e.push(a);a=a[b]}return e},nth:function(a,b,c){for(var b=b||1,d=0;a;a=a[c])if(a.nodeType===1&&++d===b)break;return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Ua="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Oc=/ jQuery\d+="(?:\d+|null)"/g,Ma=/^\s+/,Gb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Hb=/<([\w:]+)/,
Pc=/<tbody/i,Qc=/<|&#?\w+;/,Rc=/<(?:script|style)/i,Sc=/<(?:script|object|embed|option|style)/i,Ib=RegExp("<(?:"+Ua+")","i"),Jb=/checked\s*(?:[^=]|=\s*.checked.)/i,Tc=/\/(java|ecma)script/i,Zb=/^\s*<!(?:\[CDATA\[|\-\-)/,y={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
area:[1,"<map>","</map>"],_default:[0,"",""]},Kb=Ta(l);y.optgroup=y.option;y.tbody=y.tfoot=y.colgroup=y.caption=y.thead;y.th=y.td;d.support.htmlSerialize||(y._default=[1,"div<div>","</div>"]);d.fn.extend({text:function(a){return d.isFunction(a)?this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))}):typeof a!=="object"&&a!==n?this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(a)):d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,
b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&a.firstChild.nodeType===1;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return d.isFunction(a)?this.each(function(b){d(this).wrapInner(a.call(this,b))}):this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=d.isFunction(a);return this.each(function(c){d(this).wrapAll(b?
a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,
this)});if(arguments.length){var a=d.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d.clean(arguments));return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length){if(!b&&e.nodeType===1){d.cleanData(e.getElementsByTagName("*"));
d.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a,b){a=a==null?false:a;b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===n)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Oc,""):null;if(typeof a==="string"&&!Rc.test(a)&&(d.support.leadingWhitespace||
!Ma.test(a))&&!y[(Hb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Gb,"<$1></$2>");try{for(var b=0,c=this.length;b<c;b++)if(this[b].nodeType===1){d.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();
c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove();b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,true)},domManip:function(a,b,c){var e,f,g,h=a[0],i=[];if(!d.support.checkClone&&arguments.length===3&&typeof h==="string"&&Jb.test(h))return this.each(function(){d(this).domManip(a,b,c,true)});
if(d.isFunction(h))return this.each(function(e){var f=d(this);a[0]=h.call(this,e,b?f.html():n);f.domManip(a,b,c)});if(this[0]){e=h&&h.parentNode;e=d.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:d.buildFragment(a,this,i);g=e.fragment;if(f=g.childNodes.length===1?g=g.firstChild:g.firstChild){b=b&&d.nodeName(f,"tr");f=0;for(var j=this.length,o=j-1;f<j;f++)c.call(b?d.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):
this[f]:this[f],e.cacheable||j>1&&f<o?d.clone(g,true,true):g)}i.length&&d.each(i,Yb)}return this}});d.buildFragment=function(a,b,c){var e,f,g,h,i=a[0];b&&b[0]&&(h=b[0].ownerDocument||b[0]);h.createDocumentFragment||(h=l);if(a.length===1&&typeof i==="string"&&i.length<512&&h===l&&i.charAt(0)==="<"&&!Sc.test(i)&&(d.support.checkClone||!Jb.test(i))&&(d.support.html5Clone||!Ib.test(i))){f=true;(g=d.fragments[i])&&g!==1&&(e=g)}if(!e){e=h.createDocumentFragment();d.clean(a,h,e,c)}f&&(d.fragments[i]=g?e:
1);return{fragment:e,cacheable:f}};d.fragments={};d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],c=d(c),f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&c.length===1){c[b](this[0]);return this}for(var f=0,g=c.length;f<g;f++){var h=(f>0?this.clone(true):this).get();d(c[f])[b](h);e=e.concat(h)}return this.pushStack(e,a,c.selector)}});d.extend({clone:function(a,
b,c){var e,f,g;if(d.support.html5Clone||!Ib.test("<"+a.nodeName))e=a.cloneNode(true);else{e=l.createElement("div");Kb.appendChild(e);e.innerHTML=a.outerHTML;e=e.firstChild}var h=e;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){Wa(a,h);e=ba(a);f=ba(h);for(g=0;e[g];++g)f[g]&&Wa(e[g],f[g])}if(b){Va(a,h);if(c){e=ba(a);f=ba(h);for(g=0;e[g];++g)Va(e[g],f[g])}}return h},clean:function(a,b,c,e){b=b||l;typeof b.createElement==="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||l);for(var f=[],g,h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i=i+"");if(i){if(typeof i==="string")if(Qc.test(i)){i=i.replace(Gb,"<$1></$2>");g=(Hb.exec(i)||["",""])[1].toLowerCase();var j=y[g]||y._default,o=j[0],k=b.createElement("div");b===l?Kb.appendChild(k):Ta(b).appendChild(k);for(k.innerHTML=j[1]+i+j[2];o--;)k=k.lastChild;if(!d.support.tbody){o=Pc.test(i);j=g==="table"&&!o?k.firstChild&&k.firstChild.childNodes:j[1]==="<table>"&&!o?k.childNodes:[];for(g=j.length-
1;g>=0;--g)d.nodeName(j[g],"tbody")&&!j[g].childNodes.length&&j[g].parentNode.removeChild(j[g])}!d.support.leadingWhitespace&&Ma.test(i)&&k.insertBefore(b.createTextNode(Ma.exec(i)[0]),k.firstChild);i=k.childNodes}else i=b.createTextNode(i);var n;if(!d.support.appendChecked)if(i[0]&&typeof(n=i.length)==="number")for(g=0;g<n;g++)Ya(i[g]);else Ya(i);i.nodeType?f.push(i):f=d.merge(f,i)}}if(c){a=function(a){return!a.type||Tc.test(a.type)};for(h=0;f[h];h++)if(e&&d.nodeName(f[h],"script")&&(!f[h].type||
f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{if(f[h].nodeType===1){b=d.grep(f[h].getElementsByTagName("script"),a);f.splice.apply(f,[h+1,0].concat(b))}c.appendChild(f[h])}}return f},cleanData:function(a){for(var b,c,e=d.cache,f=d.event.special,g=d.support.deleteExpando,h=0,i;(i=a[h])!=null;h++)if(!i.nodeName||!d.noData[i.nodeName.toLowerCase()])if(c=i[d.expando]){if((b=e[c])&&b.events){for(var j in b.events)f[j]?d.event.remove(i,
j):d.removeEvent(i,j,b.handle);if(b.handle)b.handle.elem=null}g?delete i[d.expando]:i.removeAttribute&&i.removeAttribute(d.expando);delete e[c]}}});var Na=/alpha\([^)]*\)/i,Uc=/opacity=([^)]*)/,Vc=/([A-Z]|^ms)/g,Lb=/^-?\d+(?:px)?$/i,Wc=/^-?\d/,Xc=/^([\-+])=([\-+.\de]+)/,Yc={position:"absolute",visibility:"hidden",display:"block"},$b=["Left","Right"],ac=["Top","Bottom"],G,Mb,Nb;d.fn.css=function(a,b){return arguments.length===2&&b===n?this:d.access(this,a,b,true,function(a,b,f){return f!==n?d.style(a,
b,f):d.css(a,b)})};d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=G(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,e){if(a&&!(a.nodeType===3||a.nodeType===8||!a.style)){var f,g=d.camelCase(b),h=a.style,i=d.cssHooks[g],b=d.cssProps[g]||g;if(c!==n){e=typeof c;if(e==="string"&&(f=Xc.exec(c))){c=
+(f[1]+1)*+f[2]+parseFloat(d.css(a,b));e="number"}if(!(c==null||e==="number"&&isNaN(c))){e==="number"&&!d.cssNumber[g]&&(c=c+"px");if(!i||!("set"in i)||(c=i.set(a,c))!==n)try{h[b]=c}catch(j){}}}else return i&&"get"in i&&(f=i.get(a,false,e))!==n?f:h[b]}},css:function(a,b,c){var e,f,b=d.camelCase(b);f=d.cssHooks[b];b=d.cssProps[b]||b;b==="cssFloat"&&(b="float");if(f&&"get"in f&&(e=f.get(a,true,c))!==n)return e;if(G)return G(a,b)},swap:function(a,b,c){var d={},f;for(f in b){d[f]=a.style[f];a.style[f]=
b[f]}c.call(a);for(f in b)a.style[f]=d[f]}});d.curCSS=d.css;d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,e,f){var g;if(e){if(a.offsetWidth!==0)return Za(a,b,f);d.swap(a,Yc,function(){g=Za(a,b,f)});return g}},set:function(a,b){if(Lb.test(b)){b=parseFloat(b);if(b>=0)return b+"px"}else return b}}});d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return Uc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,
b){var c=a.style,e=a.currentStyle,f=d.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=e&&e.filter||c.filter||"";c.zoom=1;if(b>=1&&d.trim(g.replace(Na,""))===""){c.removeAttribute("filter");if(e&&!e.filter)return}c.filter=Na.test(g)?g.replace(Na,f):g+" "+f}});d(function(){if(!d.support.reliableMarginRight)d.cssHooks.marginRight={get:function(a,b){var c;d.swap(a,{display:"inline-block"},function(){c=b?G(a,"margin-right","marginRight"):a.style.marginRight});return c}}});l.defaultView&&l.defaultView.getComputedStyle&&
(Mb=function(a,b){var c,e,f,b=b.replace(Vc,"-$1").toLowerCase();if((e=a.ownerDocument.defaultView)&&(f=e.getComputedStyle(a,null))){c=f.getPropertyValue(b);c===""&&!d.contains(a.ownerDocument.documentElement,a)&&(c=d.style(a,b))}return c});l.documentElement.currentStyle&&(Nb=function(a,b){var c,d,f=a.currentStyle&&a.currentStyle[b],g=a.style;if(f===null&&g&&(c=g[b]))f=c;if(!Lb.test(f)&&Wc.test(f)){c=g.left;if(d=a.runtimeStyle&&a.runtimeStyle.left)a.runtimeStyle.left=a.currentStyle.left;g.left=b===
"fontSize"?"1em":f||0;f=g.pixelLeft+"px";g.left=c;if(d)a.runtimeStyle.left=d}return f===""?"auto":f});G=Mb||Nb;d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!d.support.reliableHiddenOffsets&&(a.style&&a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var Zc=/%20/g,bc=/\[\]$/,Ob=/\r?\n/g,$c=/#.*$/,ad=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bd=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
cd=/^(?:GET|HEAD)$/,dd=/^\/\//,Pb=/\?/,ed=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,fd=/^(?:select|textarea)/i,ab=/\s+/,gd=/([?&])_=[^&]*/,Qb=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Rb=d.fn.load,va={},Sb={},D,F,Tb=["*/"]+["*"];try{D=dc.href}catch(pd){D=l.createElement("a"),D.href="",D=D.href}F=Qb.exec(D.toLowerCase())||[];d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&Rb)return Rb.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0)var f=
a.slice(e,a.length),a=a.slice(0,e);e="GET";if(b)if(d.isFunction(b)){c=b;b=n}else if(typeof b==="object"){b=d.param(b,d.ajaxSettings.traditional);e="POST"}var g=this;d.ajax({url:a,type:e,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText;if(a.isResolved()){a.done(function(a){e=a});g.html(f?d("<div>").append(e.replace(ed,"")).find(f):e)}c&&g.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?
d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||fd.test(this.nodeName)||bd.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a){return{name:b.name,value:a.replace(Ob,"\r\n")}}):{name:b.name,value:c.replace(Ob,"\r\n")}}).get()}});d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.on(b,a)}});d.each(["get","post"],
function(a,b){d[b]=function(a,e,f,g){if(d.isFunction(e)){g=g||f;f=e;e=n}return d.ajax({type:b,url:a,data:e,success:f,dataType:g})}});d.extend({getScript:function(a,b){return d.get(a,n,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){if(b)bb(a,d.ajaxSettings);else{b=a;a=d.ajaxSettings}bb(a,b);return a},ajaxSettings:{url:D,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(F[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",
processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tb},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":r.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:$a(va),ajaxTransport:$a(Sb),ajax:function(a,b){function c(a,b,c,k){if(u!==2){u=2;r&&clearTimeout(r);q=n;m=k||"";t.readyState=
a>0?4:0;var l,p,s,k=b;if(c){var H=e,x=t,Ba=H.contents,v=H.dataTypes,pb=H.responseFields,A,z,w,I;for(z in pb)z in c&&(x[pb[z]]=c[z]);for(;v[0]==="*";){v.shift();A===n&&(A=H.mimeType||x.getResponseHeader("content-type"))}if(A)for(z in Ba)if(Ba[z]&&Ba[z].test(A)){v.unshift(z);break}if(v[0]in c)w=v[0];else{for(z in c){if(!v[0]||H.converters[z+" "+v[0]]){w=z;break}I||(I=z)}w=w||I}if(w){w!==v[0]&&v.unshift(w);c=c[w]}else c=void 0}else c=n;if(a>=200&&a<300||a===304){if(e.ifModified){if(A=t.getResponseHeader("Last-Modified"))d.lastModified[o]=
A;if(A=t.getResponseHeader("Etag"))d.etag[o]=A}if(a===304){k="notmodified";l=true}else try{A=e;A.dataFilter&&(c=A.dataFilter(c,A.dataType));var J=A.dataTypes;z={};var D,F,L=J.length,G,N=J[0],B,K,O,Q,C;for(D=1;D<L;D++){if(D===1)for(F in A.converters)typeof F==="string"&&(z[F.toLowerCase()]=A.converters[F]);B=N;N=J[D];if(N==="*")N=B;else if(B!=="*"&&B!==N){K=B+" "+N;O=z[K]||z["* "+N];if(!O){C=n;for(Q in z){G=Q.split(" ");if(G[0]===B||G[0]==="*")if(C=z[G[1]+" "+N]){Q=z[Q];Q===true?O=C:C===true&&(O=Q);
break}}}!O&&!C&&d.error("No conversion from "+K.replace(" "," to "));O!==true&&(c=O?O(c):C(Q(c)))}}p=c;k="success";l=true}catch(M){k="parsererror";s=M}}else{s=k;if(!k||a){k="error";a<0&&(a=0)}}t.status=a;t.statusText=""+(b||k);l?h.resolveWith(f,[p,k,t]):h.rejectWith(f,[t,k,s]);t.statusCode(j);j=n;y&&g.trigger("ajax"+(l?"Success":"Error"),[t,e,l?p:s]);i.fireWith(f,[t,k]);if(y){g.trigger("ajaxComplete",[t,e]);--d.active||d.event.trigger("ajaxStop")}}}if(typeof a==="object"){b=a;a=n}var b=b||{},e=d.ajaxSetup({},
b),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d.Callbacks("once memory"),j=e.statusCode||{},o,k={},l={},m,p,q,r,s,u=0,y,x,t={readyState:0,setRequestHeader:function(a,b){if(!u){var c=a.toLowerCase(),a=l[c]=l[c]||a;k[a]=b}return this},getAllResponseHeaders:function(){return u===2?m:null},getResponseHeader:function(a){var b;if(u===2){if(!p)for(p={};b=ad.exec(m);)p[b[1].toLowerCase()]=b[2];b=p[a.toLowerCase()]}return b===n?null:b},overrideMimeType:function(a){if(!u)e.mimeType=
a;return this},abort:function(a){a=a||"abort";q&&q.abort(a);c(0,a);return this}};h.promise(t);t.success=t.done;t.error=t.fail;t.complete=i.add;t.statusCode=function(a){if(a){var b;if(u<2)for(b in a)j[b]=[j[b],a[b]];else{b=a[t.status];t.then(b,b)}}return this};e.url=((a||e.url)+"").replace($c,"").replace(dd,F[1]+"//");e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(ab);if(e.crossDomain==null){s=Qb.exec(e.url.toLowerCase());e.crossDomain=!(!s||!(s[1]!=F[1]||s[2]!=F[2]||(s[3]||(s[1]==="http:"?
80:443))!=(F[3]||(F[1]==="http:"?80:443))))}if(e.data&&e.processData&&typeof e.data!=="string")e.data=d.param(e.data,e.traditional);ca(va,e,b,t);if(u===2)return false;y=e.global;e.type=e.type.toUpperCase();e.hasContent=!cd.test(e.type);y&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){if(e.data){e.url=e.url+((Pb.test(e.url)?"&":"?")+e.data);delete e.data}o=e.url;if(e.cache===false){s=d.now();var v=e.url.replace(gd,"$1_="+s);e.url=v+(v===e.url?(Pb.test(e.url)?"&":"?")+"_="+s:"")}}(e.data&&
e.hasContent&&e.contentType!==false||b.contentType)&&t.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){o=o||e.url;d.lastModified[o]&&t.setRequestHeader("If-Modified-Since",d.lastModified[o]);d.etag[o]&&t.setRequestHeader("If-None-Match",d.etag[o])}t.setRequestHeader("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", "+Tb+"; q=0.01":""):e.accepts["*"]);for(x in e.headers)t.setRequestHeader(x,e.headers[x]);if(e.beforeSend&&(e.beforeSend.call(f,
t,e)===false||u===2)){t.abort();return false}for(x in{success:1,error:1,complete:1})t[x](e[x]);if(q=ca(Sb,e,b,t)){t.readyState=1;y&&g.trigger("ajaxSend",[t,e]);e.async&&e.timeout>0&&(r=setTimeout(function(){t.abort("timeout")},e.timeout));try{u=1;q.send(k,c)}catch(w){if(u<2)c(-1,w);else throw w;}}else c(-1,"No Transport");return t},param:function(a,b){var c=[],e=function(a,b){b=d.isFunction(b)?b():b;c[c.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(b===n)b=d.ajaxSettings.traditional;
if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){e(this.name,this.value)});else for(var f in a)wa(f,a[f],b,e);return c.join("&").replace(Zc,"+")}});d.extend({active:0,lastModified:{},etag:{}});var hd=d.now(),sa=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+hd++}});d.ajaxPrefilter("json jsonp",function(a,b,c){b=a.contentType==="application/x-www-form-urlencoded"&&typeof a.data==="string";if(a.dataTypes[0]==="jsonp"||a.jsonp!==false&&
(sa.test(a.url)||b&&sa.test(a.data))){var e,f=a.jsonpCallback=d.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,g=r[f],h=a.url,i=a.data,j="$1"+f+"$2";if(a.jsonp!==false){h=h.replace(sa,j);if(a.url===h){b&&(i=i.replace(sa,j));a.data===i&&(h=h+((/\?/.test(h)?"&":"?")+a.jsonp+"="+f))}}a.url=h;a.data=i;r[f]=function(a){e=[a]};c.always(function(){r[f]=g;if(e&&d.isFunction(g))r[f](e[0])});a.converters["script json"]=function(){e||d.error(f+" was not called");return e[0]};a.dataTypes[0]="json";
return"script"}});d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}});d.ajaxPrefilter("script",function(a){if(a.cache===n)a.cache=false;if(a.crossDomain){a.type="GET";a.global=false}});d.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=l.head||l.getElementsByTagName("head")[0]||l.documentElement;return{send:function(d,
f){b=l.createElement("script");b.async="async";if(a.scriptCharset)b.charset=a.scriptCharset;b.src=a.url;b.onload=b.onreadystatechange=function(a,d){if(d||!b.readyState||/loaded|complete/.test(b.readyState)){b.onload=b.onreadystatechange=null;c&&b.parentNode&&c.removeChild(b);b=n;d||f(200,"success")}};c.insertBefore(b,c.firstChild)},abort:function(){if(b)b.onload(0,1)}}}});var Oa=r.ActiveXObject?function(){for(var a in W)W[a](0,1)}:!1,id=0,W;d.ajaxSettings.xhr=r.ActiveXObject?function(){var a;if(!(a=
!this.isLocal&&cb()))a:{try{a=new r.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:cb;var Pa=d.ajaxSettings.xhr();d.extend(d.support,{ajax:!!Pa,cors:!!Pa&&"withCredentials"in Pa});d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var b;return{send:function(c,e){var f=a.xhr(),g,h;a.username?f.open(a.type,a.url,a.async,a.username,a.password):f.open(a.type,a.url,a.async);if(a.xhrFields)for(h in a.xhrFields)f[h]=a.xhrFields[h];a.mimeType&&f.overrideMimeType&&
f.overrideMimeType(a.mimeType);!a.crossDomain&&!c["X-Requested-With"]&&(c["X-Requested-With"]="XMLHttpRequest");try{for(h in c)f.setRequestHeader(h,c[h])}catch(i){}f.send(a.hasContent&&a.data||null);b=function(c,h){var i,k,l,m,p;try{if(b&&(h||f.readyState===4)){b=n;if(g){f.onreadystatechange=d.noop;Oa&&delete W[g]}if(h)f.readyState!==4&&f.abort();else{i=f.status;l=f.getAllResponseHeaders();m={};if((p=f.responseXML)&&p.documentElement)m.xml=p;m.text=f.responseText;try{k=f.statusText}catch(q){k=""}!i&&
a.isLocal&&!a.crossDomain?i=m.text?200:404:i===1223&&(i=204)}}}catch(r){h||e(-1,r)}m&&e(i,k,m,l)};if(!a.async||f.readyState===4)b();else{g=++id;if(Oa){if(!W){W={};d(r).unload(Oa)}W[g]=b}f.onreadystatechange=b}},abort:function(){b&&b(0,1)}}}});var xa={},v,K,jd=/^(?:toggle|show|hide)$/,kd=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ta,eb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],da;d.fn.extend({show:function(a,
b,c){if(a||a===0)return this.animate(B("show",3),a,b,c);for(var c=0,e=this.length;c<e;c++){a=this[c];if(a.style){b=a.style.display;if(!d._data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&d.css(a,"display")==="none"&&d._data(a,"olddisplay",fb(a.nodeName))}}for(c=0;c<e;c++){a=this[c];if(a.style){b=a.style.display;if(b===""||b==="none")a.style.display=d._data(a,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(B("hide",3),a,b,c);for(var c=0,e=this.length;c<
e;c++){a=this[c];if(a.style){b=d.css(a,"display");b!=="none"&&!d._data(a,"olddisplay")&&d._data(a,"olddisplay",b)}}for(c=0;c<e;c++)if(this[c].style)this[c].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(B("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",
0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){function f(){g.queue===false&&d._mark(this);var b=d.extend({},g),c=this.nodeType===1,e=c&&d(this).is(":hidden"),f,k,l,m,n;b.animatedProperties={};for(l in a){f=d.camelCase(l);if(l!==f){a[f]=a[l];delete a[l]}k=a[f];if(d.isArray(k)){b.animatedProperties[f]=k[1];k=a[f]=k[0]}else b.animatedProperties[f]=b.specialEasing&&b.specialEasing[f]||b.easing||"swing";if(k==="hide"&&e||k==="show"&&!e)return b.complete.call(this);if(c&&(f==="height"||
f==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")!d.support.inlineBlockNeedsLayout||fb(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1}}if(b.overflow!=null)this.style.overflow="hidden";for(l in a){c=new d.fx(this,b,l);k=a[l];if(jd.test(k))if(f=d._data(this,"toggle"+l)||(k==="toggle"?e?"show":"hide":0)){d._data(this,"toggle"+l,f==="show"?"hide":"show");c[f]()}else c[k]();
else{f=kd.exec(k);m=c.cur();if(f){k=parseFloat(f[2]);n=f[3]||(d.cssNumber[l]?"":"px");if(n!=="px"){d.style(this,l,(k||1)+n);m=(k||1)/c.cur()*m;d.style(this,l,m+n)}f[1]&&(k=(f[1]==="-="?-1:1)*k+m);c.custom(m,k,n)}else c.custom(m,k,"")}}return true}var g=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(g.complete,[false]);a=d.extend({},a);return g.queue===false?this.each(f):this.queue(g.queue,f)},stop:function(a,b,c){if(typeof a!=="string"){c=b;b=a;a=n}b&&a!==false&&this.queue(a||"fx",[]);return this.each(function(){var b,
f=false,g=d.timers,h=d._data(this);c||d._unmark(true,this);if(a==null)for(b in h){if(h[b]&&h[b].stop&&b.indexOf(".run")===b.length-4){var i=h[b];d.removeData(this,b,true);i.stop(c)}}else if(h[b=a+".run"]&&h[b].stop){h=h[b];d.removeData(this,b,true);h.stop(c)}for(b=g.length;b--;)if(g[b].elem===this&&(a==null||g[b].queue===a)){if(c)g[b](true);else g[b].saveState();f=true;g.splice(b,1)}(!c||!f)&&d.dequeue(this,a)})}});d.each({slideDown:B("show",1),slideUp:B("hide",1),slideToggle:B("toggle",1),fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,d,f){return this.animate(b,a,d,f)}});d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default;if(e.queue==null||e.queue===true)e.queue="fx";e.old=e.complete;e.complete=function(a){d.isFunction(e.old)&&
e.old.call(this);e.queue?d.dequeue(this,e.queue):a!==false&&d._unmark(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+0.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;b.orig=b.orig||{}}});d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||
this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function e(a){return f.step(a)}var f=this,g=d.fx;this.startTime=da||db();this.end=b;this.now=this.start=a;this.pos=this.state=0;this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px");e.queue=this.options.queue;e.elem=this.elem;e.saveState=function(){f.options.hide&&d._data(f.elem,"fxshow"+f.prop)===n&&d._data(f.elem,"fxshow"+
f.prop,f.start)};e()&&(d.timers.push(e)&&!ta)&&(ta=setInterval(g.tick,g.interval))},show:function(){var a=d._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||d.style(this.elem,this.prop);this.options.show=true;a!==n?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d._data(this.elem,"fxshow"+this.prop)||d.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),
0)},step:function(a){var b,c=da||db(),e=true,f=this.elem,g=this.options;if(a||c>=g.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();g.animatedProperties[this.prop]=true;for(b in g.animatedProperties)g.animatedProperties[b]!==true&&(e=false);if(e){g.overflow!=null&&!d.support.shrinkWrapBlocks&&d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]});g.hide&&d(f).hide();if(g.hide||g.show)for(b in g.animatedProperties){d.style(f,b,g.orig[b]);d.removeData(f,
"fxshow"+b,true);d.removeData(f,"toggle"+b,true)}if(a=g.complete){g.complete=false;a.call(f)}}return false}if(g.duration==Infinity)this.now=c;else{a=c-this.startTime;this.state=a/g.duration;this.pos=d.easing[g.animatedProperties[this.prop]](this.state,a,0,1,g.duration);this.now=this.start+(this.end-this.start)*this.pos}this.update();return true}};d.extend(d.fx,{tick:function(){for(var a,b=d.timers,c=0;c<b.length;c++){a=b[c];!a()&&b[c]===a&&b.splice(c--,1)}b.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ta);
ta=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}});d.each(["width","height"],function(a,b){d.fx.step[b]=function(a){d.style(a.elem,b,Math.max(0,a.now)+a.unit)}});d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var ld=/^t(?:able|d|h)$/i,Ub=/^(?:body|html)$/i;
d.fn.offset="getBoundingClientRect"in l.documentElement?function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};b=f.body;f=ya(f);return{top:c.top+(f.pageYOffset||d.support.boxModel&&g.scrollTop||b.scrollTop)-(g.clientTop||
b.clientTop||0),left:c.left+(f.pageXOffset||d.support.boxModel&&g.scrollLeft||b.scrollLeft)-(g.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);var c,e=b.offsetParent,f=b.ownerDocument,g=f.documentElement,h=f.body;c=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;for(var i=b.offsetTop,j=b.offsetLeft;(b=b.parentNode)&&b!==
h&&b!==g;){if(d.support.fixedPosition&&c.position==="fixed")break;c=f?f.getComputedStyle(b,null):b.currentStyle;i=i-b.scrollTop;j=j-b.scrollLeft;if(b===e){i=i+b.offsetTop;j=j+b.offsetLeft;if(d.support.doesNotAddBorder&&(!d.support.doesAddBorderForTableAndCells||!ld.test(b.nodeName))){i=i+(parseFloat(c.borderTopWidth)||0);j=j+(parseFloat(c.borderLeftWidth)||0)}e=b.offsetParent}if(d.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"){i=i+(parseFloat(c.borderTopWidth)||0);j=j+(parseFloat(c.borderLeftWidth)||
0)}}if(c.position==="relative"||c.position==="static"){i=i+h.offsetTop;j=j+h.offsetLeft}if(d.support.fixedPosition&&c.position==="fixed"){i=i+Math.max(g.scrollTop,h.scrollTop);j=j+Math.max(g.scrollLeft,h.scrollLeft)}return{top:i,left:j}};d.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;if(d.support.doesNotIncludeMarginInBodyOffset){b=b+(parseFloat(d.css(a,"marginTop"))||0);c=c+(parseFloat(d.css(a,"marginLeft"))||0)}return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");
if(e==="static")a.style.position="relative";var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j={},k={};if((e==="absolute"||e==="fixed")&&d.inArray("auto",[h,i])>-1){k=f.position();e=k.top;i=k.left}else{e=parseFloat(h)||0;i=parseFloat(i)||0}d.isFunction(b)&&(b=b.call(a,c,g));if(b.top!=null)j.top=b.top-g.top+e;if(b.left!=null)j.left=b.left-g.left+i;"using"in b?b.using.call(a,j):f.css(j)}};d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),
e=Ub.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top=c.top-(parseFloat(d.css(a,"marginTop"))||0);c.left=c.left-(parseFloat(d.css(a,"marginLeft"))||0);e.top=e.top+(parseFloat(d.css(b[0],"borderTopWidth"))||0);e.left=e.left+(parseFloat(d.css(b[0],"borderLeftWidth"))||0);return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||l.body;a&&!Ub.test(a.nodeName)&&d.css(a,"position")==="static";)a=a.offsetParent;return a})}});d.each(["Left",
"Top"],function(a,b){var c="scroll"+b;d.fn[c]=function(b){var f,g;if(b===n){f=this[0];if(!f)return null;return(g=ya(f))?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[c]||g.document.body[c]:f[c]}return this.each(function(){(g=ya(this))?g.scrollTo(!a?b:d(g).scrollLeft(),a?b:d(g).scrollTop()):this[c]=b})}});d.each(["Height","Width"],function(a,b){var c=b.toLowerCase();d.fn["inner"+b]=function(){var a=this[0];return a?a.style?parseFloat(d.css(a,c,"padding")):
this[c]():null};d.fn["outer"+b]=function(a){var b=this[0];return b?b.style?parseFloat(d.css(b,c,a?"margin":"border")):this[c]():null};d.fn[c]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var f=d(this);f[c](a.call(this,b,f[c]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+b],h=f.document.body;return f.document.compatMode==="CSS1Compat"&&g||h&&h["client"+b]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+
b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);if(a===n){f=d.css(f,c);g=parseFloat(f);return d.isNumeric(g)?g:f}return this.css(c,typeof a==="string"?a:a+"px")}});r.jQuery=r.$=d;"function"===typeof define&&(define.amd&&define.amd.jQuery)&&define("jquery",[],function(){return d})})(window);
	dmj = jQuery.noConflict();	
}


/*
http://www.JSON.org/json2.js
2011-02-23

Public Domain.

NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

See http://www.JSON.org/js.html


This code should be minified before deployment.
See http://javascript.crockford.com/jsmin.html

USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
NOT CONTROL.


This file creates a global JSON object containing two methods: stringify
and parse.

JSON.stringify(value, replacer, space)
value       any JavaScript value, usually an object or array.

replacer    an optional parameter that determines how object
      values are stringified for objects. It can be a
      function or an array of strings.

space       an optional parameter that specifies the indentation
      of nested structures. If it is omitted, the text will
      be packed without extra whitespace. If it is a number,
      it will specify the number of spaces to indent at each
      level. If it is a string (such as '\t' or '&nbsp;'),
      it contains the characters used to indent at each level.

This method produces a JSON text from a JavaScript value.

When an object value is found, if the object contains a toJSON
method, its toJSON method will be called and the result will be
stringified. A toJSON method does not serialize: it returns the
value represented by the name/value pair that should be serialized,
or undefined if nothing should be serialized. The toJSON method
will be passed the key associated with the value, and this will be
bound to the value

For example, this would serialize Dates as ISO strings.

Date.prototype.toJSON = function (key) {
  function f(n) {
      // Format integers to have at least two digits.
      return n < 10 ? '0' + n : n;
  }

  return this.getUTCFullYear()   + '-' +
       f(this.getUTCMonth() + 1) + '-' +
       f(this.getUTCDate())      + 'T' +
       f(this.getUTCHours())     + ':' +
       f(this.getUTCMinutes())   + ':' +
       f(this.getUTCSeconds())   + 'Z';
};

You can provide an optional replacer method. It will be passed the
key and value of each member, with this bound to the containing
object. The value that is returned from your method will be
serialized. If your method returns undefined, then the member will
be excluded from the serialization.

If the replacer parameter is an array of strings, then it will be
used to select the members to be serialized. It filters the results
such that only members with keys listed in the replacer array are
stringified.

Values that do not have JSON representations, such as undefined or
functions, will not be serialized. Such values in objects will be
dropped; in arrays they will be replaced with null. You can use
a replacer function to replace those with JSON values.
JSON.stringify(undefined) returns undefined.

The optional space parameter produces a stringification of the
value that is filled with line breaks and indentation to make it
easier to read.

If the space parameter is a non-empty string, then that string will
be used for indentation. If the space parameter is a number, then
the indentation will be that many spaces.

Example:

text = JSON.stringify(['e', {pluribus: 'unum'}]);
//text is '["e",{"pluribus":"unum"}]'


text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
//text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

text = JSON.stringify([new Date()], function (key, value) {
return this[key] instanceof Date ?
  'Date(' + this[key] + ')' : value;
});
//text is '["Date(---current time---)"]'


JSON.parse(text, reviver)
This method parses a JSON text to produce an object or array.
It can throw a SyntaxError exception.

The optional reviver parameter is a function that can filter and
transform the results. It receives each of the keys and values,
and its return value is used instead of the original value.
If it returns what it received, then the structure is not modified.
If it returns undefined then the member is deleted.

Example:

//Parse the text. Values that look like ISO date strings will
//be converted to Date objects.

myData = JSON.parse(text, function (key, value) {
var a;
if (typeof value === 'string') {
  a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
  if (a) {
      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
          +a[5], +a[6]));
  }
}
return value;
});

myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
var d;
if (typeof value === 'string' &&
      value.slice(0, 5) === 'Date(' &&
      value.slice(-1) === ')') {
  d = new Date(value.slice(5, -1));
  if (d) {
      return d;
  }
}
return value;
});


This is a reference implementation. You are free to copy, modify, or
redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
lastIndex, length, parse, prototype, push, replace, slice, stringify,
test, toJSON, toString, valueOf
*/


//Create a JSON object only if one does not already exist. We create the
//methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
	JSON = {};
}

(function () {
	"use strict";

	function f(n) {
//		Format integers to have at least two digits.
		return n < 10 ? '0' + n : n;
	}

	if (typeof Date.prototype.toJSON !== 'function') {

		Date.prototype.toJSON = function (key) {

			return isFinite(this.valueOf()) ?
					this.getUTCFullYear()     + '-' +
					f(this.getUTCMonth() + 1) + '-' +
					f(this.getUTCDate())      + 'T' +
					f(this.getUTCHours())     + ':' +
					f(this.getUTCMinutes())   + ':' +
					f(this.getUTCSeconds())   + 'Z' : null;
		};

		String.prototype.toJSON      =
			Number.prototype.toJSON  =
				Boolean.prototype.toJSON = function (key) {
			return this.valueOf();
		};
	}

	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	gap,
	indent,
	meta = {    // table of character substitutions
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"' : '\\"',
			'\\': '\\\\'
	},
	rep;


	function quote(string) {

//		If the string contains no control characters, no quote characters, and no
//		backslash characters, then we can safely slap some quotes around it.
//		Otherwise we must also replace the offending characters with safe escape
//		sequences.

		escapable.lastIndex = 0;
		return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
			var c = meta[a];
			return typeof c === 'string' ? c :
				'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		}) + '"' : '"' + string + '"';
	}


	function str(key, holder) {

//		Produce a string from holder[key].

		var i,          // The loop counter.
		k,          // The member key.
		v,          // The member value.
		length,
		mind = gap,
		partial,
		value = holder[key];

//		If the value has a toJSON method, call it to obtain a replacement value.

		if (value && typeof value === 'object' &&
				typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}

//		If we were called with a replacer function, then call the replacer to
//		obtain a replacement value.

		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}

//		What happens next depends on the value's type.

		switch (typeof value) {
		case 'string':
			return quote(value);

		case 'number':

//			JSON numbers must be finite. Encode non-finite numbers as null.

			return isFinite(value) ? String(value) : 'null';

		case 'boolean':
		case 'null':

//			If the value is a boolean or null, convert it to a string. Note:
//			typeof null does not produce 'null'. The case is included here in
//			the remote chance that this gets fixed someday.

			return String(value);

//			If the type is 'object', we might be dealing with an object or an array or
//			null.

		case 'object':

//			Due to a specification blunder in ECMAScript, typeof null is 'object',
//			so watch out for that case.

			if (!value) {
				return 'null';
			}

//			Make an array to hold the partial results of stringifying this object value.

			gap += indent;
			partial = [];

//			Is the value an array?

			if (Object.prototype.toString.apply(value) === '[object Array]') {

//				The value is an array. Stringify every element. Use null as a placeholder
//				for non-JSON values.

				length = value.length;
				for (i = 0; i < length; i += 1) {
					partial[i] = str(i, value) || 'null';
				}

//				Join all of the elements together, separated with commas, and wrap them in
//				brackets.

				v = partial.length === 0 ? '[]' : gap ?
						'[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
							'[' + partial.join(',') + ']';
						gap = mind;
						return v;
			}

//			If the replacer is an array, use it to select the members to be stringified.

			if (rep && typeof rep === 'object') {
				length = rep.length;
				for (i = 0; i < length; i += 1) {
					if (typeof rep[i] === 'string') {
						k = rep[i];
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			} else {

//				Otherwise, iterate through all of the keys in the object.

				for (k in value) {
					if (Object.prototype.hasOwnProperty.call(value, k)) {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			}

//			Join all of the member texts together, separated with commas,
//			and wrap them in braces.

			v = partial.length === 0 ? '{}' : gap ?
					'{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
						'{' + partial.join(',') + '}';
					gap = mind;
					return v;
		}
	}

//	If the JSON object does not yet have a stringify method, give it one.

	if (typeof JSON.stringify !== 'function') {
		JSON.stringify = function (value, replacer, space) {

//			The stringify method takes a value and an optional replacer, and an optional
//			space parameter, and returns a JSON text. The replacer can be a function
//			that can replace values, or an array of strings that will select the keys.
//			A default replacer method can be provided. Use of the space parameter can
//			produce text that is more easily readable.

			var i;
			gap = '';
			indent = '';

//			If the space parameter is a number, make an indent string containing that
//			many spaces.

			if (typeof space === 'number') {
				for (i = 0; i < space; i += 1) {
					indent += ' ';
				}

//				If the space parameter is a string, it will be used as the indent string.

			} else if (typeof space === 'string') {
				indent = space;
			}

//			If there is a replacer, it must be a function or an array.
//			Otherwise, throw an error.

			rep = replacer;
			if (replacer && typeof replacer !== 'function' &&
					(typeof replacer !== 'object' ||
							typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}

//			Make a fake root object containing our value under the key of ''.
//			Return the result of stringifying the value.

			return str('', {'': value});
		};
	}


//	If the JSON object does not yet have a parse method, give it one.

	if (typeof JSON.parse !== 'function') {
		JSON.parse = function (text, reviver) {

//			The parse method takes a text and an optional reviver function, and returns
//			a JavaScript value if the text is a valid JSON text.

			var j;

			function walk(holder, key) {

//				The walk method is used to recursively walk the resulting structure so
//				that modifications can be made.

				var k, v, value = holder[key];
				if (value && typeof value === 'object') {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}


//			Parsing happens in four stages. In the first stage, we replace certain
//			Unicode characters with escape sequences. JavaScript handles many characters
//			incorrectly, either silently deleting them, or treating them as line endings.

			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function (a) {
					return '\\u' +
					('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}

//			In the second stage, we run the text against regular expressions that look
//			for non-JSON patterns. We are especially concerned with '()' and 'new'
//			because they can cause invocation, and '=' because it can cause mutation.
//			But just to be safe, we want to reject all unexpected forms.

//			We split the second stage into 4 regexp operations in order to work around
//			crippling inefficiencies in IE's and Safari's regexp engines. First we
//			replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
//			replace all simple value tokens with ']' characters. Third, we delete all
//			open brackets that follow a colon or comma or that begin the text. Finally,
//			we look to see that the remaining characters are only whitespace or ']' or
//			',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

			if (/^[\],:{}\s]*$/
					.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
							.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
							.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

//				In the third stage we use the eval function to compile the text into a
//				JavaScript structure. The '{' operator is subject to a syntactic ambiguity
//				in JavaScript: it can begin a block or an object literal. We wrap the text
//				in parens to eliminate the ambiguity.

				j = eval('(' + text + ')');

//				In the optional fourth stage, we recursively walk the new structure, passing
//				each name/value pair to a reviver function for possible transformation.

				return typeof reviver === 'function' ?
						walk({'': j}, '') : j;
			}

//			If the text is not JSON parseable, then a SyntaxError is thrown.

			throw new SyntaxError('JSON.parse');
		};
	}
}());
///////////////////////////////
//Soo Framework (Singleton)////
///////////////////////////////
var Soo = {
		Extend:{},
		Helper:{},
		URL:{},
		Class:{},
		Cookie:{},
		Util:{}
};

/*//////////////////////////////
//Soo Extend
//다른 오브젝트들을 확장할 수 있게 해준다.
//////////////////////////////*/
Soo.Extend = function(destination,source){
	for(property in source){
		destination[property] = source[property];
	}
	return destination;
};




Soo.Extend(Soo.Util, {
	CheckCrossDomain : function(framewin) {
		try
		{
			var document_test = framewin.document;

			if (document_test == undefined || document_test.getElementById == undefined) {
				return true;
			}
			else {
				return false;
			}	
		}
		catch (e) {
			return true;
		}
	},
	FindFrame : function (frame, id) {
		if (this.CheckCrossDomain(frame) == true)
		{
			return null;
		}
		//여기선 id로 체크 - IE의 경우 frame.name과 id과 호환이 안된다.
		if (frame.document.getElementById(id) != null) {
			return frame.document.getElementById(id).contentWindow;
		}
		if (frame.frames == null)
			return null;

		for (var i = 0; i < frame.frames.length; i++) {

			//여기선 name으로 체크
			if(frame.frames[i].name == id){
				return frame.frames[i];
			}

			result = this.FindFrame(frame.frames[i], id);
			if (result != null) {
				return result;
			}
		}

		return null; 
	},
	FindFrameWithIndex : function ( start_frame, index ) {
		var 
		index_str = '', index_arr, frm;

		index_str = index.toString();
		index_arr = index_str.split('.');
		index_arr[0] = parseInt(index_str.substring(1));
		frm = start_frame;

		for ( var i = 0; i < index_arr.length; i++ ) {
			if ( frm.frames.length == 0 )
				return '해당 위치에 프레임이 존재하지 않습니다.';

			frm = frm.frames[index_arr[i]];

			if ( frm == undefined )
				return '해당 위치에 프레임이 존재하지 않습니다.';

			if ( this.CheckCrossDomain(frm) == true ) {
				return '해당 프레임은 크로스 도메인입니다.';
			}
		}

		return frm;
	}
});

/*//////////////////////////////
//Soo Helper
//유용한 함수들
//////////////////////////////*/
Soo.Extend(Soo.Helper,{	
	//arguments 를 Array 객체로 변경해줌
	toArray:function(p_arguments){
		var result = [];
		for(var i = 0; i < p_arguments.length; i++){
			result.push(p_arguments[i]);
		}
		return result;
	}
});
/*//////////////////////////////
//Soo URL
//URL 관련 함수들
//////////////////////////////*/
Soo.Extend(Soo.URL,{		// Do : http://www.bugs.co.kr/player/download/index.html -> http://www.bugs.co.kr/player/download
	getStaticPath:function(url){
		var url_str = url.toString();
		url_str = url_str.substr(0, url_str.indexOf("?"));
		var regex = /[\w:\/\/]+.*\//;
		//		var regex = /[\w:\/\/\.%]+\//;
		var result = (""+url_str).match(regex);
		return result;
	}
});


/*////////////
//Do Cookie
//////////////
//*/
Soo.Extend(Soo.Cookie, {
	setCookie: function(cName, cValue, cDay){  // Do : create, update or remove cookie. Remove when cDay == -1 
		var expire = new Date();
		expire.setDate(expire.getDate() + cDay);
		cookies = cName + '=' + escape(cValue) + '; path=/ '; 
		if (typeof cDay != 'undefined') 
			cookies += ';expires=' + expire.toGMTString() + ';';

		document.cookie = cookies;
	},
	getCookie: function(cName){ 
		// How to use : var result = SooFramework.getCookie('cookiename');
		// Do : get information about cookies. (name, value, path, domain)
		var name, value, path, domain;
		if (document.cookie && document.cookie != "") {
			var cookies = document.cookie.split(';');
			var cookiearr = new Array(cookies.length);
			var url = "" + document.location;
			url = "" + Soo.URL.getStaticPath(url);
			var start = url.indexOf("//");
			var sub = url.substring(start + 2);

			var sub_start = sub.indexOf(".");
			var sub_finish = sub.indexOf("/");
			domain = sub.substring(sub_start, sub_finish);
			for (var i = 0; i < cookies.length; i++) {
				cookiearr[i] = cookies[i].split('=');
			}
			for (var i = 0; i < cookies.length; i++) {
				name = unescape(cookiearr[i][0]);
				value = unescape(cookiearr[i][1]);
				path = '/'
					//	PrintmadePlugin.setCookie(name, value, path, domain);
					//	alert(name + ", " + value + ", " + path + ", " + domain);
					if(name.indexOf(cName) != -1)
						return value;
			}
			return null;
		}
		else 
			alert("Empty Cookie");
	}
});



/*//////////////////////////////
//[Object] 확장
//////////////////////////////*/
Soo.Extend(Object,{
	isFunction: function(object) {
		return typeof object == "function";
	},
	isUndefined: function(object) {
		return typeof object == "undefined";
	},
	keys: function(object) {
		var keys = [];
		for (var property in object) {
			keys.push(property);
		}
		return keys;
	}
});
/*//////////////////////////////
//[Function] 확장
//////////////////////////////*/
Soo.Extend(Function.prototype, {
	//function
	argumentNames: function() {
		var names = this.toString().match(/^[\s\(]*function[^(]*\(([^\)]*)\)/)[1].replace(/\s+/g, '').split(',');
		return names.length == 1 && !names[0] ? [] : names;
	},
	bind: function() {
		if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
		var __method = this, args = Soo.Helper.toArray(arguments), object = args.shift();
		return function() {
			return __method.apply(object, args.concat(Soo.Helper.toArray(arguments)));
		}
	},
	wrap: function(wrapper) {
		var __method = this;
		return function() {
			return wrapper.apply(this, [__method.bind(this)].concat(Soo.Helper.toArray(arguments)));
		}
	}
});

/*//////////////////////////////
//Soo Class
//
//////////////////////////////*/

Soo.Class = {
		create: function(){
			//Class.create 
			var parent = null, properties = Soo.Helper.toArray(arguments);

			if (Object.isFunction(properties[0])) 
				parent = properties.shift();
			//
			function klass(){
				this.__init__.apply(this,arguments);
			}
			Soo.Extend(klass, Soo.Class.Methods);
			//
			klass.superclass = parent;
			klass.subclasses = [];
			//
			if(parent){
				//
				var subclass = function(){};
				subclass.prototype = parent.prototype;
				klass.prototype = new subclass;
				parent.subclasses.push(klass);
			}
			for(var i =0 ; i < properties.length; i++){
				klass.addMethods(properties[i]);
			}
			if (!klass.prototype.__init__)
				klass.prototype.__init__ = function(){ alert('__init__');};

				klass.prototype.constructor = klass;

				return klass;	
		},
		createSingleton:function(methods){
			var result = {};
			Soo.Extend(result,methods);
			return result;
		}
};
Soo.Class.Methods = {
		//
		addMethods: function(source){
			//superclass
			var ancestor = this.superclass && this.superclass.prototype;
			//
			var properties = Object.keys(source);

			//????
			if(!Object.keys({toString:true}).length)
				properties.push("toString","valueOf");
			for(var i = 0, length = properties.length; i < length; i++){
				//
				var property = properties[i], value = source[property];
				//
				if(ancestor && Object.isFunction(value) && value.argumentNames()[0] == "$super"){
					//
					var method = value;
					//
					value = (function(m) {
						return function(){return ancestor[m].apply(this,arguments)};
					})(property).wrap(method);

					value.valueOf = method.valueOf.bind(method);
					value.toString = method.toString.bind(method);
				}
				this.prototype[property] = value;

			}
			return this;
		}
};


var PTMOptionObject = Soo.Class.create({
	__init__:function(){
		this._frameid =  'NOID';
		this._elementid = '';
		this._dialogmode = 1;

		this._alignment = 'left';

		this._dialog = '0,0,0,0';
		this._cut = '0,0,0,0';

		this._tag_pagebreak = [];
		this._manual_pagebreak = '';
		this._pagebreaks = ''

			this._originalurl = '';
		this._license = '';
		this._formurl = '';

		this._renderingtype = 'image'; // image | webobject;

		this._parameters = '';
		this._frameindex = 1;

		this._executestring = '';
		this._captureenabled = false;

		this._orientation = 'portrait';

		this._formvar = '';

		this._pagemargin = '';
		this._userpreference = 0;

		this._customer = '';
		this._logoimg = '';
		this._icon = '';
		this._pagesize = '';
		this._onepage = 0;		

		this._memo = '';
		this._pagewidth = '';

		this._fullcapture = false;
	},
	_FindFrame : function (frame, id) {
		if (frame.document.getElementById(id) != null) {
			return frame;
		}
		else {
			if (frame.frames == null)
				return null;
			for (var i = 0; i < frame.frames.length; i++) {
				result = this._FindFrame(frame.frames[i], id);
				if (result != null) {
					return result;
				}
			}
		}
		return null; 
	},
	_GetElementForFrame : function (frame) {
		if (frame == GPrintmade.top)
		{
			return GPrintmade.top;
		}

		var parent = frame.parent;
		var frm = parent.document.getElementsByTagName('frame');
		var ifrm = parent.document.getElementsByTagName('iframe');

		for (i = 0; i < frm.length; i++)
		{
			if (frm[i].contentDocument == frame.document) 
			{
				return frm[i];
			}
		}

		for (i = 0; i < ifrm.length; i++)
		{
			if (ifrm[i].contentDocument == frame.document)
			{
				return ifrm[i];
			}
		}
	},
	GetPageMargin:function(){
		return this._pagemargin;
	},
	SetPageMargin:function(val){
		this._pagemargin = val;
	},
	GetUserPreference:function(){
		return this._userpreference;
	},
	SetUserPreference:function(val){
		this._userpreference = val;
	},
	GetFormVariables : function() {
		return this._formvar;
	},
	SetFormVariables : function(formvar) {
		this._formvar = formvar;
	},
	GetCaptureEnabled : function() {
		return this._captureenabled;
	},
	SetCaptureEnabled : function(enabled) {
		this._captureenabled = enabled;
	},
	GetExecuteString : function() {
		return this._executestring;
	},
	SetExecuteString : function(string) {
		this._executestring = string;
	},
	SetFrameId : function(id) {
		this._frameid = id;
	},
	GetElementId : function() {
		return this._elementid.substring(1);
	},
	SetElementId : function(id) {
		this._elementid = id;
	},
	GetFullCapture : function() {
		return this._fullcapture;
	},
	SetFullCapture : function( capture ) {
		this._fullcapture = capture;
	},		
	SetFrameIdWithElementId : function(id) {
		if (id == '')
			return;

		var frame = this._FindFrame(GPrintmade.top, id);

		if (frame == top) {
			this.SetFrameId('NOID');
			return;
		}
		else {
			var frame_element = frame.frameElement;
			/*
if(frame_element == undefined)
			{
				;
			}
			 */

			if (frame_element.id == '' || frame_element.id == null)
			{
				frame_element.id = 'ptm_frm' + this._frameindex;
				this.frameindex = this._frameindex + 1;
			}
			this.SetFrameId(frame_element.id);
			return;
		}
	},
	SetOrientation : function(mode) {
		this._orientation = mode;
	},
	SetDialogMode : function(mode) {
		this._dialogmode = mode;
	},
	SetDialogRect : function(dialog) {
		this._dialog = dialog;
	},	
	SetAlignment : function(alignment) {
		this._alignment= alignment.toLowerCase();
	},
	SetCutRect : function(cut) {
		this._cut = cut;
	},
	SetCustomer : function(customer) {
		this._customer = customer;
	},
	SetLogoImage : function(logoimg) {
		this._logoimage = logoimg;
	},
	SetIcon : function(icon) {
		this._icon = icon;
	},
	SetPageSize : function(pagesize) {
		this._pagesize = pagesize;
	},		
	AddPagebreak : function(height) {
		this._tag_pagebreak.push(parseInt(height));
	},
	SetPagebreak : function(pagebreak) {
		this._manual_pagebreak = pagebreak;
	},
	_GetPagebreak : function() {
		var all_pagebreak = this._tag_pagebreak;

		if (this._manual_pagebreak != '')
		{
			var tmp = this._manual_pagebreak.split(',');
			for (var i = 0; i < tmp.length; i++)
			{
				all_pagebreak.push(parseInt(tmp[i]));
			}
		}

		for (var i = 0; i < all_pagebreak.length - 1; i++)
		{
			for (var j = i + 1; j < all_pagebreak.length; j++)
			{
				if (parseInt(all_pagebreak[i]) > parseInt(all_pagebreak[j]))
				{
					var tmp = all_pagebreak[i];
					all_pagebreak[i] = all_pagebreak[j];
					all_pagebreak[j] = tmp;
				}
			}
		}

		return all_pagebreak.toString();
	},
	SetLicense : function(lic_code) {
		this._license = lic_code;
	},
	SetRenderingType : function(type) {
		this._renderingtype = type;
	},
	SetFormURL : function(url) {
		this._formurl = url;
	},
	SetOriginalURL : function(baseURI) {
		this._originalurl = baseURI;
	},
	SetMemo : function( memo ) {
		this._memo = memo;	
	},
	SetPageWidth : function( width ) {
		this._pagewidth = width;
	},
	_AddParameter : function(name, value) {
		if (this._parameters == '')
			this._parameters = name + ':' + value;
		else
			this._parameters = this._parameters + '|' + name + ':' + value;
	},
	GetParameterString : function() {
		// Parameter Sample 
		// FRAMEID:main|ELEMENTID:divid|DIALOGMODE:1|DIALOGRECT:0,0,NULL,NULL|ALIGNMENT:left|CUTRECT:NULL,NULL,10,10|PAGEBREAKS:100,200,300|LICENSE:base64encoding|RENDERINGTYPE:'image|webobject|FORMURL:http://www.printmade.co.kr/yangsic/form.txt'

		if (this._frameid != '')
			this._AddParameter('FRAMEID', this._frameid);

		if (this._elementid != '')
			this._AddParameter('ELEMENTID', this._elementid);

		this._AddParameter('DIALOGMODE', this._dialogmode);

		if (this._dialogmode == 1 && this._dialog != '0,0,0,0')
			this._AddParameter('DIALOGRECT', this._dialog);

		this._AddParameter('ALIGNMENT', this._alignment);

		this._AddParameter('CUTRECT', this._cut);

		this._pagebreaks = this._GetPagebreak();

		if (this._pagebreaks != '')
			this._AddParameter('PAGEBREAKS', this._pagebreaks);

		this._AddParameter('LICENSE', this._license);

		this._AddParameter('RENDERINGTYPE', this._renderingtype);

		this._AddParameter('FORMURL', this._formurl);

		this._AddParameter('ORIGINALURL', this._originalurl);

		this._AddParameter('ORIENTATION', this._orientation);

		this._AddParameter('FORMVAR', this._formvar);

		this._AddParameter('PAGEMARGIN', this._pagemargin);

		this._AddParameter('USERPREFERENCE', this._userpreference);

		this._AddParameter('CUSTOMER', this._customer);
		this._AddParameter('LOGOIMG', this._logoimg);
		this._AddParameter('ICON', this._icon);
		this._AddParameter('PAGESIZE', this._pagesize);
		this._AddParameter('ONEPAGE', this._onepage);		

		this._AddParameter('MEMO', this._memo);
		this._AddParameter('PAGEWIDTH', this._pagewidth);

		return this._parameters;
	}

});


var PTMInstaller = Soo.Class.create({
	__init__:function(isIE,frame){
//		this._frame = frame;
		this._isIE = isIE;
		this._exepath = '';
		this._viewerpath = '';
		this._PRINT_URL = '';
		this._LIC_CODE = '';
		this._axversion = '0,0,0,0';
	},
	CheckInstall : function () {
		if (this._isIE == true)
		{	        
			try {
				plugin = new ActiveXObject('Printmade2.Printmade2ActiveX');
				plugin = null;
				return true;
			} 
			catch (e) {
				if (e.message != "Object doesn't support this property or method") {
					// Couldn't create the plugin; return false
					plugin = null;
					PTM_DownloadDialog();
					return false;
				}
			}	
		}
		else
		{
			var mimetype = navigator.mimeTypes["application/designmade-printmade"];

			if (mimetype == undefined)
			{
				PTM_DownloadDialog();
				return false;
			}

			if (!mimetype.enabledPlugin)
			{
				PTM_DownloadDialog();
				return false;
			}
			return true;
		}
	},
	CheckVersion : function(plugin) {
		try{
			var appdatapath = plugin.getAppDataPath();
		}catch(e){
			alert('Printmade 2 : ' + e.description);
		}
		if(GPrintmade.isWindows){
			appdatapath = plugin.getRunPath();
		}
		var current_viewer_version = "2.0.0.0";
		try{
			if(GPrintmade.isWindows) {
				current_viewer_version = plugin.getFileVersion(appdatapath + '/Printmade2/Viewer.exe\0');		
			}
			else if(GPrintmade.isLinux){
				return true;
				current_viewer_version = plugin.getFileVersion('Viewer');
			} else if(GPrintmade.isMac) {
				current_viewer_version = plugin.getFileVersion(appdatapath + '/Printmade2/Viewer.app/Contents/Info.plist\0');					    
			}
		}catch(e){
			alert(UPDATE_ERROR_MSG);
			PTM_DownloadDialog();
			return false;
		}
		
		try {
			if (this._CompareVersion(current_viewer_version.toString(), VIEWER_VERSION) == false) {
				PTM_DownloadDialog();
				return false;
			} else
				return true;
		} catch (e) {
			true;
		}

	},
	_CompareVersion: function(current_version, new_version) {
		var current_arr = current_version.split('.');
		var new_arr = new_version.split('.'); 
		for (var i = 0; i < 4 ; i++)
		{
			current_arr[i] = parseInt(current_arr[i]);
			new_arr[i] = parseInt(new_arr[i]);
		}

		if (current_arr[0] < new_arr[0])
			return false;
		else if(current_arr[0] > new_arr[0])
			return true;
		else if (current_arr[1] < new_arr[1])
			return false;
		else if (current_arr[1] > new_arr[1])
			return true;
		else if (current_arr[2] < new_arr[2])
			return false;
		else if (current_arr[2] > new_arr[2])
			return true;
		else if (current_arr[3] < new_arr[3])
			return false;
		else if (current_arr[3] > new_arr[3])
			return true;

		return true;
	},
	_Download : function (pframe) {
//		this._frame = pframe;
		var frame = pframe;//GPrintmade_NonCrossTop;
		var dialog_width = 455;
		var dialog_height = 295;
		var downloaddiv = frame.document.createElement('div');
		var scrollLeft = frame.document.body.scrollLeft;
		var scrollTop = frame.document.body.scrollTop;
		var clientWidth = frame.document.body.clientWidth;
		var clientHeight =frame.document.body.clientHeight; 
		if(frame.document.documentElement.clientHeight > 0){
			//IE의 Quirks Mode가 아닌 7,8 모드
			if (GPrintmade.isIE) {
				scrollLeft = frame.document.documentElement.scrollLeft;
				scrollTop = frame.document.documentElement.scrollTop;
			}

			clientWidth = frame.document.documentElement.clientWidth;
			clientHeight = frame.document.documentElement.clientHeight;

		}
		var download_div_left = scrollLeft + (clientWidth - dialog_width) / 2 ;
		var download_div_top = scrollTop + (clientHeight - dialog_height) / 2 ;


		if (download_div_left < 0)
			download_div_left = 0;
		if (download_div_top < 0)
			download_div_top = 0;

		dmj(frame.document.body).append('<div id = "down" align = center style="position:absolute;top:' + download_div_top + 'px;left:' + download_div_left + 'px;width:'+dialog_width+'px;height:'+dialog_height+'px;background-image:url(\'' + INSTALL_IMG_URL + 'setup.jpg\');z-index:5001;display:block"></div>');
		var down_div = frame.document.getElementById('down');
		var $down_div = dmj(down_div);
		$down_div.append('<div style="height:160px"></div>');
		$down_div.append('<p>'+INSTALL_DIV_MSG+'</p>');

		var download_url = '';

		if (GPrintmade.isWindows == true) {
			download_url = WIN_DOWNLOAD_URL;
			$down_div.append('<a href = "' + download_url + '" id = "ptm_download" ><img src = "' + INSTALL_IMG_URL + 'download.jpg" style = "border:0"></a>');			
		}
		else if (GPrintmade.isMac == true) {
			download_url = MAC_DOWNLOAD_URL;
			$down_div.append('<a href = "' + download_url + '" id = "ptm_download" ><img src = "' + INSTALL_IMG_URL + 'download.jpg" style = "border:0"></a>');
		}
		else if (GPrintmade.isLinux == true) {
			var os_bit, os_type;
			var ubuntu_url = '';
			var fedora_url = '';

			if (navigator.platform.indexOf('64') > -1) {
				fedora_url = FEDORA_64BIT_URL;
				ubuntu_url = UBUNTU_64BIT_URL;
			}
			else {
				fedora_url = FEDORA_32BIT_URL;
				ubuntu_url = UBUNTU_32BIT_URL;
			}
			var installmessage = '';
			if(INSTALL_LINUX_MSG != '')
				installmessage = 'onClick="alert(\''+INSTALL_LINUX_MSG+'\');"';

			$down_div.append('<a href = "' + fedora_url + '" id = "ptm_fedora_download" '+installmessage+'><img src = "' + INSTALL_IMG_URL + 'download_fedora.jpg" style = "border:0"></a>&nbsp;');
			$down_div.append('<a href = "' + ubuntu_url + '" id = "ptm_ubuntu_download" '+installmessage+'><img src = "' + INSTALL_IMG_URL + 'download_ubuntu.jpg" style = "border:0"></a>&nbsp;');		                
		}

		$down_div.append('<a href = "#" id = "ptm_cancel"><img src = "' + INSTALL_IMG_URL + 'cancel.jpg" style = "border:0"></a>');
		dmj(frame.document.body).append('<div id = "bg" style = "filter:alpha(opacity=50);opacity:0.5;position:absolute;top:0;left:0;background-color:#000000;z-index:5000;display:block;width:' + frame.document.body.scrollWidth + 'px;height:' + frame.document.body.scrollHeight + 'px"></div>');


		if (frame.document.getElementById('ptm_download') != null) {
			dmj(frame.document.getElementById('ptm_download')).click(function(e) { 
				var targ;

				if (e.target) 
					targ = e.target;
				else if (e.srcElement) 
					targ = e.srcElement;
				if (targ.nodeType == 3) // defeat Safari bug
					targ = targ.parentNode;

				var element = targ;
				var background = element.ownerDocument.getElementById('bg');
				background.parentNode.removeChild(background);

				var download_div = element.parentNode.parentNode;
				download_div.parentNode.removeChild(download_div);		
			});
		}
		else {
			dmj(frame.document.getElementById('ptm_fedora_download')).click(function(e) { 
				var targ;

				if (e.target) 
					targ = e.target;
				else if (e.srcElement) 
					targ = e.srcElement;
				if (targ.nodeType == 3) // defeat Safari bug
					targ = targ.parentNode;

				var element = targ;
				var background = element.ownerDocument.getElementById('bg');
				background.parentNode.removeChild(background);

				var download_div = element.parentNode.parentNode;
				download_div.parentNode.removeChild(download_div);		
			});

			dmj(frame.document.getElementById('ptm_ubuntu_download')).click(function(e) { 
				var targ;

				if (e.target) 
					targ = e.target;
				else if (e.srcElement) 
					targ = e.srcElement;
				if (targ.nodeType == 3) // defeat Safari bug
					targ = targ.parentNode;

				var element = targ;
				var background = element.ownerDocument.getElementById('bg');
				background.parentNode.removeChild(background);

				var download_div = element.parentNode.parentNode;
				download_div.parentNode.removeChild(download_div);		
			});    				    
		}


		dmj(frame.document.getElementById('ptm_cancel')).click(function(e) { 
			var targ;

			if (e.target) 
				targ = e.target;
			else if (e.srcElement) 
				targ = e.srcElement;
			if (targ.nodeType == 3) // defeat Safari bug
				targ = targ.parentNode;

			var element = targ;
			var background = element.ownerDocument.getElementById('bg');
			background.parentNode.removeChild(background);

			var download_div = element.parentNode.parentNode;
			download_div.parentNode.removeChild(download_div);		
		});
	},
	_RemoveDownload : function (frame) {
		var deletediv = frame.document.getElementById('bg');
		deletediv.parentNode.removeChild(deletediv);

		deletediv = frame.document.getElementById('down');
		deletediv.parentNode.removeChild(deletediv);	
	}
})


/*
* Name : PluginCapture
* Responsibility : 
*/

var PTMCaptureController = Soo.Class.create({
	__init__ : function ( plugin, frame ) {
		this.data = null;
		this._plugin = plugin;
		this._element = null;
		this.callback = null;
		this._targetframe = frame;
		if ( GPrintmade.isLinux ) {
			this._imagefilepath = this._plugin.getTempPath() + "/Printmade2/temp/img";
		} else {
			var appdatapath = this._plugin.getAppDataPath();
			this._imagefilepath = appdatapath.replace( /\\/g, '/' );
			this._imagefilepath = this._imagefilepath + "/Printmade2/temp/img";
		}

		this._uniqueimageid = 0;
	},
	_CheckCrossDomain : function ( framewin ) {
		try {
			var document_test = framewin.document;

			if ( document_test == undefined || document_test.getElementById == undefined ) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return true;
		}
	},
	_GetElementForFrame : function ( frame ) {
		/*
		 * frame : 찾고자 하는 프레임의 DOMWindow 오브젝트.
		 * frame에 해당하는 HTMLIFrameElement 또는 HTMLFrameElement를 찾아주는 함수.
		 */
		var
		parent, frm, ifrm;


		if (frame == GPrintmade.top) {
			return GPrintmade.top;
		}

		parent = frame.parent;
		frm = parent.document.getElementsByTagName('frame');
		ifrm = parent.document.getElementsByTagName('iframe');

		for ( var i = 0; i < frm.length; i++ ) {
			if ( frm[i].contentDocument == frame.document ) {
				return frm[i];
			}
		}

		for ( var i = 0; i < ifrm.length; i++ ) {
			if ( ifrm[i].contentDocument == frame.document ) {
				return ifrm[i];
			}
		}
	},
	/*
	 * 웹브라우저를 캡쳐하여 이미지로 생성하기 위한 함수.
	 * Event-Driven 방식이라 callback 함수로 알림.
	 */
	MakeImage : function ( callback ) {
		if ( this._HasData() ) 
			return;
		this.callback = callback;
		this._Capture();
	},
	_FindFrame : function ( frame, id ) {
		if ( this._CheckCrossDomain(frame) == true ) {
			return null;
		}

		if ( frame.document.getElementById(id) != null ) {
			return frame;
		}

		if ( frame.frames == null ) {
			return null;
		}

		for ( var i = 0; i < frame.frames.length; i++ ) {
			result = this._FindFrame( frame.frames[i], id );
			if ( result != null ) {
				return result;
			}
		}

		return null; 
	},
	CaptureWithElement : function ( id ) {
		if ( id == 'ptm_plugin' || id.indexOf('printmade')  != -1 || id == 'INIplugin' || id == 'AOSMGR') {
			return '';
		}

		var frm = this._FindFrame( GPrintmade.top, id );

		if ( frm == null ) {
			return '<div></div>';
		}

		var element = frm.document.getElementById( id );
		var $element = dmj( element );
		var left = 0, top = 0;

		if ( parseInt($element.attr('width')) == 0 || parseInt($element.attr('height')) == 0 ) {
			return '';    
		}


		// Object Tag 하위에 Embed Tag가 존재하는 경우, 브라우저와 운영체제에 따라 캡쳐 기준이 달라진다.
		if ( (GPrintmade.isIE == true || GPrintmade.isSafari == true) && GPrintmade.isWindows == true ) {
			/*
			 * Windows 운영체제의 IE, Safari에서는 Object Element가 실제 유저에게 보이는 영역을 차지하고 있다.
			 */

			var $element_offset = $element.offset();
			left = $element_offset.left;
			top = $element_offset.top;
		} else if ( (GPrintmade.isChrome == true || GPrintmade.isFirefox3 == true || GPrintmade.isFirefoxOver3 == true || GPrintmade.isOpera == true || GPrintmade.isSafariOver51 == true)
				&& GPrintmade.isWindows == true ) {
			/*
			 * 
			 *
			 */
			if ( $element.children("embed").length == 0 ) {
				var capture_div = document.createElement( 'div' );
				capture_div.id = 'test';
				capture_div.width = 0;
				capture_div.height = 0;
				var $capture_div = dmj( capture_div );
				$capture_div.insertBefore( element );

				if ( $element.css( 'display' ) == 'None' ) {
					return '';  
				}

				left = $capture_div.offset().left;
				top = $capture_div.offset().top;
				capture_div.parentNode.removeChild( capture_div );
			} else {
				left = $element.children( 'embed' ).offset().left;
				top = $element.children( 'embed' ).offset().top;
			}
		} else { // Mac
			if ( GPrintmade.isSafari == true && GPrintmade.isMac == true && GPrintmade.isSafariOver51 == true )	{
				left = $element.offset().left;
				top = $element.offset().top;
			} else {
				if ( $element.children("embed").length == 0 ) {
					var capture_div = document.createElement( 'div' );
					capture_div.id = 'test';
					capture_div.width = 0;
					capture_div.height = 0;

					var $capture_div = dmj(capture_div);
					$capture_div.insertBefore( element );

					if ( $element.css('display') == 'None' ) {
						return '';  
					}

					//		var temp = this._GetWidthAndHeight(element);

					left = $capture_div.offset().left;
					top = $capture_div.offset().top;
					capture_div.parentNode.removeChild( capture_div );
				} else {
					left = $element.children( 'embed' ).offset().left;
					top = $element.children( 'embed' ).offset().top;
				}
			}
		}

		var width = element.width;
		if ( (width > 0) == false ) {
			if ( element.style.width != '' && element.style.width > 0 ) {
				width = parseInt(element.style.width);
			} else {
				width = $element.outerWidth(); //element.width;
			}
		}

		var height = element.height;
		if ( (height > 0) == false ) {
			if ( element.style.height != '' && element.style.width > 0 ) {
				height = parseInt(element.style.height);
			} else {
				height = $element.outerHeight();
			}
		}

		//var width = $element.outerWidth(); //element.width;
		//var height = $element.outerHeight(); //element.height;

		var tmpframe = frm;
//		while(tmpframe != GPrintmade_NonCrossTop){
		while(tmpframe != this._targetframe){
			left = left + dmj(tmpframe.frameElement).offset().left;
			top = top + dmj(tmpframe.frameElement).offset().top;
			tmpframe = tmpframe.parent.window;
		}

		//visibility이 hidden이면 눈엔 안보이지만 자리를 차지하고 있다.
		if ( $element.css('visibility') == 'hidden' ) {
			return "<span class = 'ptm_replace' style='height:" + height + "px;width:" + width + "px;margin:0px;padding:0px;display:inline-block;background-position:-" + left + "px -" + top + "px;'></>";
		}

		//공간을 차지하지 않는 것은 만들지 않는다.
		if ( width == 0 || height == 0 ) {
			return '';
		}

		//background-image에 넣기위한 경로
		var imagefilepath_background = 	this._imagefilepath+ this._uniqueimageid + ".png";
		try {
			if ( GPrintmade.isMac ) {
				var imagefilepath_mac = this._imagefilepath + this._uniqueimageid + ".png\0";
				this._plugin.saveImage( parseInt(top), parseInt(left), parseInt(width), parseInt(height), imagefilepath_mac );
				imagefilepath_background = "file://" + imagefilepath_background;
			} else if ( GPrintmade.isLinux ) {
				var imagefilepath_linux = this._imagefilepath + this._uniqueimageid + ".png";
				this._plugin.saveImage( parseInt(top), parseInt(left), parseInt(width), parseInt(height), encodeURI(imagefilepath_linux) );
				imagefilepath_background = "file://" + imagefilepath_background;
			} else if ( GPrintmade.isIE ) {
				var imagefilepath_ie = this._imagefilepath + this._uniqueimageid + ".png";
				this._plugin.saveImage( parseInt(top), parseInt(left), parseInt(width), parseInt(height),(imagefilepath_ie) );
			} else {
				var imagefilepath_windows = this._imagefilepath + this._uniqueimageid + ".png\0";
				this._plugin.saveImage( parseInt(top), parseInt(left), parseInt(width), parseInt(height), encodeURI(imagefilepath_windows) );
			}
		} catch ( e ) {
			alert( 'Printmade 2 : ' + e.description );
		}

		var element_style = '';
		var left_css = 'left:' + $element.css( 'left' ) +';';
		var top_css = 'top:' + $element.css( 'top' ) + ';';
		if ( left_css.indexOf('auto') != -1 ){
			left_css = '';
		}

		if ( top_css.indexOf('auto') != -1 ) {
			top_css = '';
		}

		var margin_top = 'margin-top:' + $element.css( 'margin-top' ) + ';';
		var margin_left = 'margin-left:' + $element.css( 'margin-left' ) + ';';
		var margin_right = 'margin-right:' + $element.css( 'margin-right' ) + ';';
		var margin_bottom = 'margin-bottom:' + $element.css( 'margin-bottom' ) + ';';

		var padding_top = 'padding-top:' + $element.css( 'padding-top' ) + ';';
		var padding_left = 'padding-left:' + $element.css( 'padding-left' ) + ';';
		var padding_right = 'padding-right:' + $element.css( 'padding-right' ) + ';';
		var padding_bottom = 'padding-bottom:' + $element.css( 'padding-bottom' ) + ';';

		var element_custom_style = 'display:inline-block;position:' + $element.css('position') + ';' + margin_top+margin_right+margin_left+margin_bottom+padding_top+padding_right+padding_left+padding_bottom+'width:' + width + 'px;height:' + height + 'px;background-position:0 0;background-image:url(\''+imagefilepath_background+'\');' + left_css+top_css;
		var element_class = '';
		var element_attributes = '';

		if ( $element.attr( 'class' ) != undefined ) {
			element_class = $element.attr( 'class' );
		}
		if ( $element.attr( 'style' ) != undefined ) {
			element_style = $element.attr( 'style' );
		}

		var divtext = '<span style="' + element_style + ';' + element_custom_style + '" class="ptm_replace ' + element_class + ' ' + element_attributes + '"></span>';

		this._uniqueimageid = this._uniqueimageid + 1;

		return divtext;
	},
	_Capture : function() {
		g_tmpcaptureclass = new PTMCaptureEngine( this._plugin, this._targetframe, this._imagefilepath );
		g_tmpcaptureclass.Calculate( this );
	},
	_HasData : function() {
		if ( this.data == null )
			return false;
		return true;
	},
	_GetLeftFromBody : function( id ) {
		var frm = this._FindFrame( GPrintmade.top, id );
		var element = frm.document.getElementById( id );
		var result = 0;

		while ( frm != GPrintmade.top ) {
			var frm_element = this._GetElementForFrame( frm );
			result = result + frm_element.offsetLeft;
			frm = frm.parent;
		}

		return result;
	},
	_GetTopFromBody : function( id ) {
		var frm = this._FindFrame( GPrintmade.top, id );
		var element = frm.document.getElementById( id );
		var result = 0;

		while ( frm != GPrintmade.top ) {
			var frm_element = this._GetElementForFrame( frm );
			result = result + frm_element.offsetTop;
			frm = frm.parent;
		}

		return result;
	}
});


/*
* Name : CaptureClass
* Responsibility : Capture the page with plugin 
*/
var g_tmpcaptureclass;
var PTMCaptureEngine = Soo.Class.create({
	__init__:function( plugin, frame, imagefilepath ) {
		this._frame = frame;
		this._plugincapture = null;
		this._imagefilepath = imagefilepath;
		var TBody = frame.document.body;
		this._original_left = TBody.scrollLeft; //document.body.scrollLeft;
		this._original_top = TBody.scrollTop; //document.body.scrollTop;

		var body_width = TBody.scrollWidth;

		//Linux - Firefox에는 document.documentElement에 scrollWidth가 존재한다.
		var documentElement_width = frame.document.documentElement.scrollWidth;
		if ( body_width > documentElement_width ) {
			this._body_width = body_width;
		} else {
			this._body_width = documentElement_width; 
		}

		this._body_height = TBody.scrollHeight;//document.body.scrollHeight;

		this._scroll_width = this._GetScrollerWidth();
		/*
		 * this.list 는 4가지의 값을 가지게 된다.
		 * [0],[1] - 실제 스크롤을 움직일 위치
		 * [2],[3] - 캔버스에 조합할때의 위치(scroll_width 때문에 조정을 하게 된다.)
		 */
		this._list = [];
		this._current_pos = 0;
		this._plugin = plugin;

		this._canvas = document.createElement( 'canvas' );
		this._canvas.width = this._body_width;
		this._canvas.height = this._body_height;

		this._browsercaptureoption = 0;

		if ( GPrintmade.isChrome )
			this._browsercaptureoption = 0;
		else if ( GPrintmade.isSafari )
			this._browsercaptureoption = 1;    
		else if ( GPrintmade.isSafariOver51 )
			this._browsercaptureoption = 1;    
		else if ( GPrintmade.isFirefox3 )
			this._browsercaptureoption = 2;
		else if ( GPrintmade.isFirefoxOver3 )
			this._browsercaptureoption = 3;
		else if ( GPrintmade.isOpera )
			this._browsercaptureoption = 4;

		try {
			if ( GPrintmade.isMac == true ) {
				this._plugin.initCapt( this._body_width, this._body_height, 1, GPrintmade_ToolbarHeight, GPrintmade_BrowserLeftEdge );
			} else if ( GPrintmade.isWindows == true ) {
				this._plugin.initCapt( this._body_width, this._body_height, this._browsercaptureoption );
			} else if( GPrintmade.isLinux == true ) {
				var window_left = top.screenX + GPrintmade_BrowserLeftEdge;
				var window_top = top.screenY +  GPrintmade_ToolbarHeight;
				this._plugin.initCapt( this._body_width, this._body_height, window_left, window_top );
			}
		} catch( e ) {
			alert( 'Printmade 2 : ' + e.description );
		}
	},
	Calculate : function ( plugincapture ) {
		var body_width = this._body_width;
		var body_height = this._body_height;

		var body_client_width;
		var body_client_height;

		//둘중에 작은값을 넣는다.		
		if ( this._frame.document.body.clientWidth <= this._frame.innerWidth ) {
			body_client_width = this._frame.document.body.clientWidth;
		} else {
			body_client_width = this._frame.innerWidth;
		}

		var hscroll = ( body_width> body_client_width ) ? 1 : 0;
		var hscroll_width = this._scroll_width * hscroll;

		if ( this._frame.document.body.clientHeight <= this._frame.innerHeight ) {
//			body_client_height = this._frame.document.body.clientHeight;
			body_client_height = this._frame.innerHeight;

		} else {
			body_client_height = this._frame.innerHeight;
		}

		var vscroll = ( body_height> body_client_height ) ? 1 : 0;
		var vscroll_width = this._scroll_width * vscroll;


		//inner 값들을 이용했다면 스크롤 존재여부에 따라서 값을 빼준다.
		if ( body_client_width == this._frame.innerWidth ) {
			body_client_width = body_client_width - vscroll_width;
		}

		if ( body_client_height == this._frame.innerHeight ) {
			body_client_height = body_client_height - hscroll_width;		
		}

		/*
		 * 12.03.30
		 * 실제 frame에 스크롤이 없는데 있다고 잘못 계산하는 경우
		 */

		if ( this._frame.document.body.scrollWidth == this._frame.innerWidth )
			body_client_width = this._frame.innerWidth;
		if ( this._frame.document.body.scrollHeight == this._frame.innerHeight )
			body_client_height = this._frame.innerHeight

			/*
			 * Body의 height와 width를 window의 innerHeight, innerWidth랑 비교하여 몇 장의 캡쳐를 할 것 인지 계산한다.
			 * i => y
			 * j => x
			 */

			/*
			 * 스크롤 존재 유무
			 */

			//var hscroll = (body_width> this._frame.innerWidth)?1:0;
			/*
	var hscroll = (body_width> body_client_width)?1:0;
		var hscroll_width = this._scroll_width * hscroll;

		//var vscroll = (body_height != this._frame.innerHeight)?1:0;
		var vscroll = (body_height != body_client_height )?1:0;
		var vscroll_width = this._scroll_width * vscroll; 

			 */			
			/*
			 * Body Height와 Window innerHeight을 비교하여 세로로 몇장의 스크롤을 할 것인가를 결정.
			 */

			var i = 0;
		for(i = 0; i < body_height - body_client_height; i = i + body_client_height) {
			//Width를 계산한다.
			for(var j = 0; j < body_width - body_client_width; j = j + body_client_width) {
				this._list.push([j,i,j,i]);
			}
			//위에서 계산하고 남은 Width 들(innerWidth 보다 작으면서 남은 애들)을 계산한다.
			if((body_width - j) >  0) {
				this._list.push([j,i,body_width - body_client_width,i]);
			}
		}
		if((body_height - i) > 0)
		{
			i = body_height - body_client_height;
			for(var j = 0; j < body_width - body_client_width; j = j + body_client_width) {
				this._list.push([j,i,j,i]);
			}
			if((body_width - j) >  0) {
				this._list.push([j,i,body_width - body_client_width,i]);
			}
		}
		this._plugincapture = plugincapture;
		this._Move();
	},
	_Move:function(){

		if(GPrintmade.isFirefox3 || GPrintmade.isFirefoxOver3){
			this._frame.scrollTo(this._list[this._current_pos][0],this._list[this._current_pos][1]);
		} 
		else if(GPrintmade.isOpera){   // 5.17 추가 부분. Opera에서는 document.body.scrollTop 동작하지 않음.
			this._frame.document.body.scrollLeft = this._list[this._current_pos][0]; 
			this._frame.document.body.scrollTop = this._list[this._current_pos][1];
			this._frame.document.documentElement.scrollLeft = this._list[this._current_pos][0]; 
			this._frame.document.documentElement.scrollTop = this._list[this._current_pos][1];
		}
		else{
			this._frame.document.body.scrollLeft = this._list[this._current_pos][0];
			this._frame.document.body.scrollTop = this._list[this._current_pos][1];
		}


		var x = this._list[this._current_pos][2];
		var y = this._list[this._current_pos][3];

		this._current_pos++;

		setTimeout(function(){
			g_tmpcaptureclass._Capture(x,y);	
		}, 100);

	},
	_Capture:function() {
		g_tmpcaptureclass._CaptureScreen(arguments[0],arguments[1]);

	},
	_CaptureScreen : function(x,y) {	


		/*
		var img = new Image();
		var base64string = g_tmpcaptureclass.plugin.getBase64Image();
		img.src = 'data:image/png;base64,' + base64string;
		img.onload = function(){
			var ctx = g_tmpcaptureclass.canvas.getContext('2d');
			ctx.drawImage(img, x, y);
			g_tmpcaptureclass.move();
		}
		 */
		try{
			if(GPrintmade.isLinux){
				g_tmpcaptureclass._plugin.capture(x,y);
			}
			else{
				g_tmpcaptureclass._plugin.capture(x,y,0,0);
			}
		}catch(e){
			alert('Printmade 2 : ' + e.description);
		}
		if (this._current_pos >= this._list.length){
			if(GPrintmade.isFirefox3 || GPrintmade.isFirefoxOver3){
				this._frame.scrollTo(this._original_left, this._original_top);
			}
			else if(GPrintmade.isOpera){   // 5.17 추가 부분. Opera에서는 document.body.scrollTop 동작하지 않음.
				this._frame.document.documentElement.scrollLeft = this._original_left;
				this._frame.document.documentElement.scrollTop = this._original_top;
			}else{
				this._frame.document.body.scrollLeft = this._original_left;
				this._frame.document.body.scrollTop = this._original_top;
			}
			try{
				g_tmpcaptureclass._plugin.endCapt(DEVELOPMENT_MODE);				
			}catch(e){
				alert('Printmade 2 : ' + e.description);
			}
			/* 			g_tmpcaptureclass._plugin.endCapt(encodeURI(g_tmpcaptureclass._imagefilepath),DEVELOPMENT_MODE); */
			//g_tmpcaptureclass._plugincapture.data = 'data:image/png;base64,' + g_tmpcaptureclass._plugin.endCapt(DEVELOPMENT_MODE);
			g_tmpcaptureclass._plugincapture.callback();
			return;
		}

		setTimeout(function(){
			g_tmpcaptureclass._Move();
		},100);
	},
	_GetScrollerWidth : function() {
		var scr = null;
		var inn = null;
		var wNoScroll = 0;
		var wScroll = 0;

		// Outer scrolling div
		scr = document.createElement('div');
		scr.style.position = 'absolute';
		scr.style.top = '-1000px';
		scr.style.left = '-1000px';
		scr.style.width = '100px';
		scr.style.height = '50px';

		// Start with no scrollbar
		scr.style.overflow = 'hidden';

		// Inner content div
		inn = document.createElement('div');
		inn.style.width = '100%';
		inn.style.height = '200px';

		// Put the inner div in the scrolling div
		scr.appendChild(inn);
		// Append the scrolling div to the doc
		document.body.appendChild(scr);

		// Width of the inner div sans scrollbar
		wNoScroll = inn.offsetWidth;
		// Add the scrollbar
		scr.style.overflow = 'auto';
		// Width of the inner div width scrollbar
		wScroll = inn.offsetWidth;

		// Remove the scrolling div from the doc
		document.body.removeChild(
				document.body.lastChild);

		// Pixel width of the scroller
		return (wNoScroll - wScroll);
	}

});

/**********************************************************************************************
*
* Utility
* 
**********************************************************************************************/

var GPrintmade=null;
var PTM_AFTERPRINTING = [];
var GPrintmade_ToolbarHeight = 0;
var GPrintmade_BrowserLeftEdge = 0;

dmj(document).ready(function(){
	if(!GPrintmade_NonCrossTop)
		GPrintmade_NonCrossTop = GetNonCrossTop(window).non_cross_top;

	if(!GPrintmade_MainFrame)
		GPrintmade_MainFrame = GetMainFrame();
	if (navigator.appVersion.indexOf("Win")!=-1){
		return;
	}
	dmj(GPrintmade_MainFrame.document).ready(function(){
		//Print 버튼이 내부 iframe에 적용 될 수 있기 때문에, 메인 frame의 event가 필요하다.
		dmj(GPrintmade_MainFrame.document).mousemove(function(event){		
			GPrintmade_ToolbarHeight = event.screenY - event.clientY - GPrintmade_MainFrame.screenY;
			GPrintmade_BrowserLeftEdge = event.screenX - event.clientX - GPrintmade_MainFrame.screenX;
		});
	});
});

function FindFrameByName(frame, name) {
	try {
		if (frame.name == name) {
			return frame;
		}
		else {
			if (frame.frames == null)
				return null;
			for (var i = 0; i < frame.frames.length; i++) {
				result = FindDownloadDivFrame(frame.frames[i], name);
				if (result != null) {
					return result;
				}
			}
		}
		return null; 
	} catch(e) {
		return null;
	}
}



function GetNonCrossTop(frm) {
	var result = [];
	result.non_cross_top = frm;
	result.top_frame_with_body = frm;

	while (frm != window.top) {
		try {
			var parent_body = frm.parent.document.body;

			if (frm.parent.document.getElementsByTagName('body').length > 0) {
				result.top_frame_with_body = frm.parent;
			}

			frm = frm.parent;            
		} catch (e) {
			result.non_cross_top = frm;
			return result;
		}
	}

	result.non_cross_top = window.top;    
	return result;
}

function GetMainFrame(){
	//DFS Algorithm
	var frame_basket = [];
	var frame_answer = null;
	if(GPrintmade_NonCrossTop.document.body.getElementsByTagName('frame').length == 0){
		frame_answer = GPrintmade_NonCrossTop;
	}
	for(var tmpframe = GPrintmade_NonCrossTop; tmpframe;){
		if(tmpframe.frames.length == 0)
			break;

		//tmpframe 이 Frameset 으로 구성되면
		if(tmpframe.document.body.getElementsByTagName('frame').length > 0){
			var heights = tmpframe.document.body.rows.split(',');
			var tmp_frame_answer = null;
			if(heights.length > 0){
				for(var i = 0 ; i < heights.length; i++){
					if(heights[i] == '*')
						tmp_frame_answer = tmpframe.frames[i];
				}
				if(tmp_frame_answer == null)
					tmp_frame_answer = tmpframe;

				frame_answer = tmp_frame_answer;
			}
		}
		//iFrame으로 구성되면
		else{
			for(var i = 0 ; i < tmpframe.frames.length; i++){
				try{
					if(tmpframe.frames[i].frameElement && tmpframe.frames[i].frameElement.width == "100%" && tmpframe.frames[i].frameElement.height == "100%")
						frame_answer = tmpframe.frames[i];
				}catch(e){

				}
			}
		}

		for(var i =0; i < tmpframe.frames.length; i++){
			frame_basket.push(tmpframe.frames[i]);
		}
		tmpframe = frame_basket.pop();
	}
	if(frame_answer == null){
		alert('frame_answer is error');
		return GPrintmade_NonCrossTop;
	}
	return frame_answer;
}



//JavaScript 검증 함수. 웹페이지에 제대로 로드되었는지 확인한다.
function validateJavaScript() {
	var list = [];

	if (typeof PTMMainController  == 'undefined')
		list.push('PTMMainController');

	if (typeof PTMInstaller  == 'undefined')
		list.push('PTMInstaller');

	if (typeof PTMCaptureController  == 'undefined')
		list.push('PTMCaptureController');

	if (typeof PTMCaptureEngine  == 'undefined')
		list.push('PTMCaptureEngine');

	if (typeof PTMFrameObject  == 'undefined')
		list.push('PTMFrameObject');

	if (typeof PTMDOMParser  == 'undefined')
		list.push('PTMDOMParser');

	if (typeof PTMOptionObject  == 'undefined')
		list.push('PTMOptionObject');

	if (list.length == 0)
		return true;
	else {
		alert(VALIDATECLASS_MSG + list.toString().replace(/,/g, '\n'));
		return false;
	}
}
/**********************************************************************************************
*
* PTMMainController
* 
**********************************************************************************************/
var PTMMainController = Soo.Class.create({
	__init__ : function(){
		this._plugin = null;
		this.target = null;
		this.plugincapture = null;
		this.isObjectTagExist = null;
		this.isEmbedTagExist = null;
		this.isMarqueeTagExist = null;
		this.isExist = null;

		this.isIE = false;
		this.isSafari = false;
		this.isSafariOver51 = false;
		this.isFirefoxOver3 = false;
		this.isFirefox3 = false;
		this.isChrome = false;
		this.isOpera = false;

		this.isWindows = false;
		this.isMac = false;
		this.isUnix = false;
		this.isLinux = false;

		this.maxBodyWidth = 1500;
		this.top = top;
		this._make_id_index = 0;

		this.option = new PTMOptionObject();
		this._install = null;	
	},
	Run:function(target){
		//브라우저 종류를 검색한다.
		if(this._CheckKindOfBrowser() == false){
			alert(UNDEFINED_WEBBROWSER_MSG);
			window.print();
			return;
		}
		//OS종류 검색
		if(this._CheckOS() == false){
			alert(UNDEFINED_OS_MSG);
			window.print();
			return;	
		}
		//인스톨 체크
		this._install = new PTMInstaller(this.isIE,target);
		// IE의 경우 ActiveX, 기타 브라우저의 경우 npPlugin이 제대로 설치 되어 있는지 확인한다.
		if (this._install.CheckInstall() == false)
			return;
		//target은 인쇄를 원하는 프레임을 넣어준다.
		this.target = target;
		//플러그인을 넣는다.
		var inserted_plugin = this._InsertPlugin();
		this._plugin = inserted_plugin;
		//파일 버전 체크
		if (this._install.CheckVersion(this._plugin) == false)
			return;

		this._install = null;
		//플러그인이 들어갈 시간을 위해서 setTimeout 을 함
		setTimeout(function(){ GPrintmade.Initialize();}, 50);
	},
	_CheckOS:function(){
		if (navigator.appVersion.indexOf("Win")!=-1){
			this.isWindows = true;
			return true;
		}
		if (navigator.appVersion.indexOf("Mac")!=-1){
			this.isMac = true;
			return true;
		}
		if (navigator.appVersion.indexOf("X11")!=-1){
			this.isLinux = true;
			return true;
		}
		return false;

		/*         if (navigator.appVersion.indexOf("Linux")!=-1) this.isLinux = true; */
	},
	_CheckKindOfBrowser : function(){
		var browser = navigator.appName;
		var useragent = navigator.userAgent;
		switch (browser){
		case 'Microsoft Internet Explorer':
			browser = "MSIE";
			this.isIE = true;
			break;
		case 'Netscape':
			if (useragent.lastIndexOf('Chrome/') > 0) {
				browser = "Chrome";
				this.isChrome = true;
				break;
			}
			else if (useragent.lastIndexOf('Firefox/') > 0) {
				browser = "Firefox";
				if(useragent.lastIndexOf('Firefox/3.') > 0){
					this.isFirefox3 = true;
					break;
				} else {
					this.isFirefoxOver3 = true;
					break;
				}
			}
			else if (useragent.lastIndexOf('Safari/') > 0) {
				browser = "Safari";			        

				// Maxthon 브라우저의 경우에도 Object-Embed 중첩된 경우 Embed 따르므로 SafariOver51과 같이 처리
				if (useragent.indexOf('Maxthon') > 0) {
					this.isSafariOver51 = true;
					break;
				}

				var regex = /version\/([0-9]+)\.([0-9]+)/i
					var result = useragent.match(regex);
				var major = parseInt(result[1]);
				var minor = parseInt(result[2]); 
				if(major >= 5){
					if(minor ==0 )
						this.isSafari=true;
					else if(minor >= 1)
						this.isSafariOver51 = true;
				}
				break;
			}
			else{
				this.isChrome = true;
			}
			break;
		case 'Opera':
			browser = "Opera";
			this.isOpera = true;
			break;
		default:
			return false;
		break;
		}
		return true;
	},
	_InsertPlugin :function(){
		var inserted_plugin = null;
		for (var i = 0; i < 10000; i++) {
			if (inserted_plugin != null){
				return inserted_plugin;
			}
			else
			{
				//IE는 ActiveX를 넣고, 나머지 브라우저들은 NPPlugin을 넣는다.
				if (this.isIE == true)  {
					dmj(this.target.document.body).append('<OBJECT id = "ptm_plugin" classid="clsid:8C4D012A-9B6C-4B87-A7CB-724BD7A9727C" codebase = "' + OCX_CODEBASE + '" width=1 height=1 align=center declare=fal hspace=0 vspace=0 style = "display:none"></OBJECT>');
					inserted_plugin = this.target.document.getElementById('ptm_plugin');
				}
				else {					
					var left = this.target.document.body.scrollLeft;
					var top = this.target.document.body.scrollTop;
					var zindex = -999;
					if(this.isWindows == true && this.isOpera == true){
						zindex = 999;
					}
					dmj(this.target.document.body).prepend('<embed id="ptm_plugin" type="application/designmade-printmade" width=1 height=1 style="opacity:0.1;position:absolute;z-index:' + zindex + ';left:' + left + 'px;top:' + top + 'px;"></embed>');
					inserted_plugin = this.target.document.getElementById('ptm_plugin');
				}
			}
		}
	},
	Initialize:function() {
		//object, marquee,embed 등 스크롤 캡쳐 기능이 필요한 곳이 있는지 확인 한다.
		this.isExist = this._FindReplaceTag();

		if (GPrintmade.option.GetCaptureEnabled() == true) {
			var fullcapture = GPrintmade.option.GetFullCapture();

			if (this.plugincapture == null) {
				this.plugincapture = new PTMCaptureController(this._plugin, this.target);
			}

			if (this.isIE == true) {
				// 권한 상승이 제대로 일어난 경우에는 Object, 실패한 경우에는 '' (문자열)
				// 권한 상승이 이미 되어 있어 필요 없는 경우엔 undefined 를 리턴함.

				//ActiveX에서 캡쳐할 element를 찾기 위한 임시 객체를 만든다.
				var dmjtmpelement = dmj(this.target.document.body).append('<div id = "ptm_ie_help"></div>');
				var tmpElement = this.target.document.getElementById('ptm_ie_help');

				this.plugincapture.data = this._plugin.MakeImage(tmpElement,DEVELOPMENT_MODE);		
				tmpElement.parentNode.removeChild(tmpElement);
				var result = this._plugin.UACElevation();

				if ( fullcapture == true ) {
					this._FullCapture();	
					return;
				}

				GPrintmade.CallDOMParser();
			}else {
				if ( fullcapture == true ) {
					this.plugincapture.MakeImage( this._FullCapture );
				} else {
					var tmp = this.plugincapture.MakeImage(GPrintmade.CallDOMParser);
				}
			}
		}else{
			if(this.isIE == true){
				var result = this._plugin.UACElevation();
			}
			GPrintmade.CallDOMParser();
		}
	},
	_FullCapture : function() {
		var 
		appdatapath, imagefilepath, imagefilepath_ie, width, height, result, path;

		appdatapath = this._plugin.getAppDataPath();
		safaripath = appdatapath.toLowerCase();

		width = GPrintmade.target.document.body.scrollWidth;
		height = GPrintmade.target.document.body.scrollHeight;

		if ( GPrintmade.isLinux ) {
			imagefilepath = this._plugin.getTempPath() + "/Printmade2/temp/img01.png";
		} else {
			imagefilepath = appdatapath.replace( /\\/g, '/' );
			imagefilepath = imagefilepath + "/Printmade2/temp/img01.png";
		}

		var imagefilepath_background = 	imagefilepath;

		try {		
			if ( GPrintmade.isMac ) {
				var imagefilepath_mac = imagefilepath + "\0";
				this._plugin.saveImage( 0, 0, parseInt(width), parseInt(height),imagefilepath_mac);
				imagefilepath_background = "file://" + imagefilepath_background;
			}
			else if(GPrintmade.isLinux){
				var imagefilepath_linux = imagefilepath;
				this._plugin.saveImage( 0, 0, parseInt(width), parseInt(height), encodeURI(imagefilepath_linux) );
				imagefilepath_background = "file://" + imagefilepath_background;
			}
			else if(GPrintmade.isIE){
				var imagefilepath_ie = imagefilepath;
				this._plugin.saveImage( 0, 0, parseInt(width), parseInt(height),imagefilepath_ie);				
			} else {
				var imagefilepath_windows = imagefilepath + '\0';
				this._plugin.saveImage( 0, 0, parseInt(width), parseInt(height), encodeURI(imagefilepath_windows) );
			}
		} catch ( e ) {
			alert( 'Printmade 2 : ' + e.description );
		}

		var spantext = '<span style="display:inline-block;width:' + width + 'px;height:' + height + 'px;background-image:url(\'' + imagefilepath_background + '\')"></span>';
		result = '<html><head></head><body style="width:auto;height:auto">' + spantext + '</body></html>';

		// WriteFile
		try{
			if( GPrintmade.isLinux ) {
				var path = encodeURI( this._plugin.getTempPath() + '/Printmade2/temp/1.html' );
				result = dmj.trim( result );
				this._plugin.writeFile( result, path );		
			} else if( GPrintmade.isMac ) {
				var path = encodeURI( this._appdatapath + '/Printmade2/temp/1.html\0' );
				result = dmj.trim( result + '\0' );
				this._plugin.writeFile( result, path );

			} else {
				if( GPrintmade.isSafari == true || GPrintmade.isSafariOver51 == true ) {
					var path = safaripath + '/Printmade2/temp/1.html\0';
					this._plugin.writeFile( result + '\0', path );
				} else if ( GPrintmade.isOpera == true ) { 
					var path = safaripath + '/printmade2/temp/1.html\0'
					path = encodeURI( path );
					this._plugin.writeFile( result, path );
				} else {
					this._plugin.writeFile( result, appdatapath + '/Printmade2/temp/1.html' );
				} 
			}
		} catch(e){
			alert( 'Printmade 2 : ' + e.description );
		}		




		try {
			if ( GPrintmade.isMac ) {
				var path = encodeURI( appdatapath + "/Printmade2/Viewer.app\0" );
				var filename = encodeURI( "file://" + appdatapath + "/Printmade2/temp/1.html\0" );
				var parameters = encodeURI( GPrintmade.option.GetParameterString() + "\0" );
				this._plugin.runViewer( path, filename, parameters );
			} else if(GPrintmade.isLinux){
				var path = encodeURI( appdatapath + "/Printmade2/Viewer" );
				var filename = encodeURI( this._plugin.getTempPath() + "/Printmade2/temp/1.html" );
				var parameters = encodeURI( GPrintmade.option.GetParameterString() );
				this._plugin.runViewer( path, filename, parameters );
			} else {
				if (GPrintmade.isIE == true) {
					var path = this._appdatapath + '/Printmade2/Viewer.exe';
					if(this._plugin.getRunPath()){
						path = this._plugin.getRunPath();
						path = path.replace(/\\/g, '/');
						path = path + '/Printmade2/Viewer.exe';
					}
					this._plugin.runViewer(path, '\"' + appdatapath + '/Printmade2/temp/1.html\" \"' + GPrintmade.option.GetParameterString() + '\"',PMVIEWERMODAL);
					if (this._iezoomsize != 0 && this._iezoomsize != 100)           
						this._plugin.setIEZoomSize(this._iezoomsize, this._iwebbrowser);					
				} else {
					var path = appdatapath + '/Printmade2/Viewer.exe\0';
					if(this._plugin.getRunPath()){
						path = this._plugin.getRunPath();
						path = path.replace(/\\/g, '/');
						path = path + '/Printmade2/Viewer.exe\0';
					}
					path = encodeURI(path);
					var parameter = encodeURI('\"' + appdatapath + '/Printmade2/temp/1.html\" \"' + GPrintmade.option.GetParameterString() + '\"\0');
					this._plugin.runViewer(path,parameter);
				}
			}
		} catch ( e ) {
			alert('Printmade2 RunViewer Error : ' + e.description);
		}

		try {
			if( GPrintmade.isIE )
				this._plugin.releaseUAC();
		} catch ( e ) {
			alert('Printmade 2 : ' + e.description);
		}	

		GPrintmade.plugincapture = null;
		GPrintmade.option = null;
		GPrintmade = null;

		return;
	},
	_FindReplaceTag : function() {
		var result = false;
		this.isObjectTagExist = this._FindTag(this.target, 'object');
		this.isMarqueeTagExist = this._FindTag(this.target, 'marquee');
		this.isEmbedTagExist = this._FindTag(this.target, 'embed');

		result = this.isObjectTagExist || this.isEmbedTagExist || this.isMarqueeTagExist;
		return result;
	},
	_FindTag : function (frame, tag) {
		try{
			if(frame.document != undefined){
				var elements = frame.document.getElementsByTagName(tag);
				for(var i=0; i < elements.length; i++){
					if(dmj(elements[i]).css('display') != 'none'){
						return true;
					}
				}
			}
			for (var i = 0; i < frame.frames.length; i++) {
				result = this._FindTag(frame.frames[i], tag);
				if (result == true) {
					return true;
				}
			}
			return false; 
		}
		catch(e){
			return false;
		}
	},
	CallDOMParser : function(){
		var domparser = new PTMDOMParser(this._plugin);
		var frame = GPrintmade.target;
		domparser.Run(frame,GPrintmade.plugincapture);
		for(var i=0; i < PTM_AFTERPRINTING.length; i++) {
			PTM_AFTERPRINTING[i][0]( PTM_AFTERPRINTING[i][1], PTM_AFTERPRINTING[i][2] );
		}
		domparser = null;
	}
}); 


var PTMFrameObject = Soo.Class.create({
	__init__:function(framewin){
		this.framewin = framewin;
		this._framewin_document = framewin.document;
		this._mode = 0;   // 0 is Body, 1 is Frameset

		//this._getFramewinDocument();
		this._SelectMode();
	},
	_GetFramewinDocument : function(){
		if (GPrintmade.isIE)
			this._framewin_document = this.framewin.document;
		else
			this._framewin_document = this.framewin.document;
	},
	_SelectMode:function(){
		var $tmp_obj = dmj('frameset',this.framewin.document);
		if($tmp_obj[0] == undefined){
			this._mode = 0;
			return;
		} 
		this._mode = 1;
	},
	_Get_jQueryObject:function(){
		if(this._mode == 0){
			var $body = dmj('body',this.framewin.document);
			if($body[0] == undefined){
				return null;
			}
			return dmj('body',this._framewin_document);
		}	

		return dmj('frameset',this._framewin_document);
	},
	/*
	 * body -> iframe, frameset -> frame
	 */ 
	GetEmbededFrame:function(index){
		if(this._mode == 0){
			return dmj('iframe:eq(' + index + ')',this._framewin_document);
		}

		return dmj('frame:eq(' + index + ')',this._framewin_document);
	},
	_ReplaceSRC : function(){
		var str = this._Get_jQueryObject().html();

		str = jQuery.trim(str);
		var regex = /<\S?frame.*?src_local_ptm\s*=[\"|\'](\S*)[\"|\'].*?>/gi
			var result = str.replace(regex, function(word){ 
				var result = word.replace(/src\s*=[\"|\'](\S*)[\"|\']/gi,"");
				result = result.replace(/src_local_ptm/gi,'src');

				return result;
			});

		regex = /<[^<]*?id_ptm\s*=[\"|\'](\S*)[\"|\'].*?>/gi
			result = result.replace(regex,function(word){

				var result = word.replace(/id\s*=[\"|\'](\S*)[\"|\']/gi,"");
				result = result.replace(/id_ptm/gi,'id');

				return result; 
			});		

		regex = /<[^<]*?src_ptm\s*=[\"|\'](\S*)[\"|\'].*?>/gi
			result = result.replace(regex,function(word){

				var result = word.replace(/src\s*=[\"|\'](\S*)[\"|\']/gi,"");
				result = result.replace(/src_ptm/gi,'src');

				return result; 
			});

		regex = /<[^<]*?href_ptm\s*=[\"|\'](\S*)[\"|\'].*?>/gi
			result = result.replace(regex,function(word){
				var result = word.replace(/href\s*=[\"|\'](\S*)[\"|\']/gi,"");
				result = result.replace(/href_ptm/gi,'href');
				return result;
			});


		regex = /<[^<]*?background_ptm\s*=[\"|\'](\S*)[\"|\'].*?>/gi
			result = result.replace(regex,function(word){
				var result = word.replace(/background\s*=([\"|\'])*(\S*)([\"|\'])*/gi,"");
				result = result.replace(/background_ptm/gi,'background');
				return result;
			});

		return result;
	},
	/*
	 * Body 또는 Frameset의 HTML을 리턴한다
	 */
	GetFullHtml : function(){
		var result = '';
		if(this._Get_jQueryObject() == null)
			return '';

		//src_ptm 을 src로 변환
		var html = this._ReplaceSRC();

		//원래 세팅값을 가져옴
		var str_attributes = this._GetAllAttributesStr();
		/*
		if(str_attributes == '')
		{

		  return "";
		}
		 */
		if(this._mode == 0){
//			result = str_attributes + html + '</body>';
			result = '<body ' + str_attributes + '>' + html + '</body>';
		}
		else{
//			result = str_attributes + html + '</frameset>';
			result = '<frameset ' + str_attributes  + '>' + html + '</frameset>';
		}
		result = jQuery.trim(result);
		return result;
	},
	/*
	 * Body 또는 Frameset 에 있는 Attribute를 가져온다.
	 */
	_GetAllAttributesStr : function(){
		var $object = this._Get_jQueryObject();
		var isBackgroundPTMExist = false;

//		var finishindex = $object[0].outerHTML.indexOf($object[0].innerHTML);
//		var html = $object[0].outerHTML.substring(0, finishindex);

//		if (html.indexOf('background_ptm') != -1)
//		{
//		var regex = /<[^<]*?background_ptm\s*=[\"|\'](\S*)[\"|\'].*?>/gi
//		html = html.replace(regex,function(word){
//		var result = word.replace(/background\s*=([\"|\'])*(\S*)([\"|\'])*/gi,"");
//		result = result.replace(/background_ptm/gi,'background');
//		return result;
//		});
//		}
//		return html;
		var result = ' ';
		var tmp_dom_attributes = $object[0].attributes;
		if(tmp_dom_attributes.length) {


			if (tmp_dom_attributes['background_ptm'] != undefined)
				isBackgroundPTMExist = true;


			for(var i =0; i < tmp_dom_attributes.length; i++){
				var name = tmp_dom_attributes[i].name;
				var value = tmp_dom_attributes[i].value;

				if (isBackgroundPTMExist == true && name.toLowerCase() == 'background')
					continue;

				if (value != 'null' && value != '') {
					if (name.toLowerCase() == 'background' && value.toString().toLowerCase().indexOf('http://') == -1)
					{
						var static_path = Soo.URL.getStaticPath(this.framewin.document.location);
						value = static_path + value;
					}
					else if (name.toLowerCase() == 'background_ptm')
					{
						name = 'background';
					}

					result += name + '="' + value +'" ';	
				}
			}

			if (tmp_dom_attributes['style'] == null || tmp_dom_attributes['style'].value == null) {
				var styletext = $object[0].style.cssText;
				if (styletext != "")
					result = result + 'style="' + styletext + '"';
			}
		}
		else {
			var styletext = $object[0].style.cssText;
			if (styletext != "")
				result = result + 'style="' + styletext + '"';
		}

		return result; 
	}
})

var PTMDOMParser = Soo.Class.create({
	/*
	 * 클래스 생성자 - 초기 세팅
	 */
	__init__: function(plugin){
		this._unique_id = 0;
		this._plugin = plugin;
		this._iwebbrowser = null;
		this._iezoomsize = 0;

		if (GPrintmade.isIE == true){
			try{
				this._iezoomsize = this._plugin.getIEZoomSize();      
				this._iwebbrowser = this._plugin.getIWebbrowser();
			}catch(e){
				alert('Printmade Error : ' + e.description);
			}

		}

		this._isExist = false;
		this._plugincapture = null;
		this._isObjectTagExist = false;
		this._isEmbedTagExist = false;
		this._isMarqueeTagExist = false;
		this._appdatapath = '';
		this._idindex = 1;
		this._target = null;
	},
	/*
	 * 실행 함수 - parseFrame을 바로 호출하지 않고 run을 거쳐서 호출
	 * Call back 방식 사용하므로 편집 필요함.
	 */
	Run:function(target,plugincapture){
		this._target = target;
		this._plugincapture = plugincapture;
		this._appdatapath = this._plugin.getAppDataPath();
		this._appdatapath = this._appdatapath.replace(/\\/g, '/');
		this._safaripath = this._appdatapath.toLowerCase();
		this._ParseFrame(target,this._GetUniqueId());

		/* 		this._RemovePrintmade2(); */
	},
	_RemovePrintmade2 : function() {
		var ptm_plugin = this._target.document.getElementById('ptm_plugin');
		ptm_plugin.style.display = 'none';
		//alert(ptm_plugin);
		/* 		dmj("#ptm_plugin",this._target.document).remove(); */
		/* 		alert(ptm_plugin); */
		/* 		$(ptm_plugin).remove(); */
		/* 		alert(this._plugin); */
		/* 		ptm_plugin.parentNode.removeChild(ptm_plugin); */
	},
	_IsCrossDomain : function(framewin) {
		/*
		 * framewin이 Cross-domain의 window일 때 framewin.document의 값
		 * 크롬, 사파리 : undefined
		 * IE, 파이어폭스, 오페라 : Exception 발생
		 */
		try
		{
			var frmdocument = framewin.document;

			if (frmdocument == undefined || frmdocument.getElementById == undefined)
			{
				return true;
			}
			else
				return false;

		}
		catch (e)
		{
			return true;
		}
	},
	/*
	 * Frame 마다 실행될 함수
	 * 기본 개념 - 각 프레임은 window 포인터가 root 이고, head, body(or frameset)이 하위 노드
	 */
	_ParseFrame:function(framewin,unique_id){
		//framewin == IHTMLWindow
		var head_object;
		//크로스도메인 체크. 크로스도메인이면 parseFrame을 빠져나감.
//		if (this._IsCrossDomain(framewin) == true)
//		{
//		return;
//		}		

		// head를 반드시 framewin.document 로 지정해주어야 한다.
		head_object = dmj('head',framewin.document);

		//PTMFrameObj 는 framewin의 body 또는 frameset 을 원활하게 스위칭하기 위한 클래스
		var PTMFrameObj = null;
		PTMFrameObj = new PTMFrameObject(framewin);

		/*
		 * 하위 Frame 검색 및 recursive call
		 */

		var tmp_frames = framewin.frames;

		for(var i=0; i < tmp_frames.length; i++){
			var tmp_framewin = tmp_frames[i];

			var frame_unique_id = this._GetUniqueId();
			//현재 컨트롤하고 있는 frame의 jQuery Object를 가져온다 
			var tmp_frame_object = PTMFrameObj.GetEmbededFrame(i);

			if (this._IsCrossDomain(tmp_framewin) == true)
			{
				tmp_frame_object.attr('src_local_ptm',tmp_frame_object.attr('src'));				
				continue;
			}

			//그 frame의 Attribute에다가 frame_unique_id를 붙인다. 나중에 수정하기 위해서 
			tmp_frame_object.attr('src_local_ptm',frame_unique_id +'.html');
			this._ParseFrame(tmp_framewin,frame_unique_id);
		}

		//Change relative address2 to static address
		//Background URL 처리도 필요하다 
		this._RelativeToStaticOfAddress(head_object, framewin.document.location);
		/*
		 * Problem : 오페라의 경우 jquery('body') 오브젝트를 Sizzle안에 넣을 때
		 * 			오브젝트를 제대로 못 가지는 버그가 존재함. 그래서 framewin 원본을 전송함
		 */	

		this._RelativeToStaticOfAddress(PTMFrameObj.framewin.document, framewin.document.location);

		//캡쳐를 해야되며 아이디가 없는 엘리멘트에 강제로 지정해 준다.
		//embed, object, input, select, textarea
		dmj('canvas, embed:not(#ptm_plugin), object',framewin.document).each(function(index,Element){
			try {
				if(dmj(this).attr('id') == undefined || dmj(this).attr('id') == ''){
					dmj(this).attr('id','ptm_object_'+unique_id+'_'+index);
				}
			} catch (e) {
				return;
			}
		});
		//inut, select, textarea 등의 크기를 지정해준다.

		/*
		dmj('input, select, textarea',framewin.document).each(function(index,Element){
			if(this.style.width == ''){
				dmj(this).css({'width':this.offsetWidth});
			}
			if(this.style.height == ''){
				dmj(this).css({'height':this.offsetHeight});
			}
		});
		 */
		/*
		산업은행의 경우 해당케이스가 없어서 제외
		//img 중에 png, jpg, jpeg, gif, tif,  tiff, bmp 가 아닌 경우 캡쳐를 한다.
		dmj('img:not([src$=".png"]):not([src$=".jpg"]):not([src$=".jpeg"]):not([src$=".bmp"]):not([src$=".tiff"]):not([src$=".tif"]):not([src$=".gif"])',framewin.document).attr("ptm_object_target","true").each(function(index,Element){
			var $obj = dmj(this).attr('id');
			if($obj == undefined || $obj == ''){
			  dmj(this).attr('id','ptm_object_img_'+unique_id+'_'+index);
			}
		});
		 */				
		//2.0.1.0
		if(PTM_WorkAt != undefined && PTM_WorkAt != null){
			PTM_WorkAt(framewin.document);
		}

		this._MakeFile(head_object,PTMFrameObj, unique_id, framewin);

		//2.0.1.0
		if(PTM_AfterWorkingAt != undefined && PTM_AfterWorkingAt != null){
			PTM_AfterWorkingAt(framewin.document);
		}		
		PTMFrameObj = null;
	},
	_RemovePTMAttr : function(obj) {
		dmj(obj).find('*[id_ptm]').each(function(){
			dmj(this).removeAttr('id_ptm');
		});

		dmj(obj).find('*[src_ptm]').each(function(){
			dmj(this).removeAttr('src_ptm');
		});

		dmj(obj).find('*[href_ptm]').each(function(){
			dmj(this).removeAttr('href_ptm');
		});

		dmj(obj).find('*[src_local_ptm]').each(function(){
			dmj(this).removeAttr('src_local_ptm');
		});

	},
	_ReplaceURL : function(str, PTMFrameObj) {
		var static_path = Soo.URL.getStaticPath(PTMFrameObj.framewin.document.location);
		var result = str;
		var appdatapath = this._appdatapath;
		result = str.replace(/url\((\'|\")*.*?\)/gi, function(word) {
			//전체 경로를 가지고 있는 경우. 그냥 넘긴다.
			if(word.indexOf(appdatapath) != -1 || word.indexOf('http') != -1 || word.indexOf('file://') != -1){
				return word;
			}
			var result = word.match(/url\((\'|\")*(.*?)(\1)*\)/i);
			if(result == null)
				return word;
			var url = result[2];
			if(url.indexOf(appdatapath) != -1 || url.indexOf('http') != -1 || word.indexOf('file://') != -1){
				return word;
			}
			if (url.indexOf('http') == -1)
			{
				if(url.charAt(0) == '/'){
					url = location.protocal + '//'  + location.host + url;
				}else{
					url = static_path + url;
				}
			}
			return 'url(' + url + ')';

		});
		return result;
	},
	_FindPagebreakTag : function (frame) {
		var pagebreaks;

		try
		{
			pagebreaks = frame.document.getElementsByTagName('pagebreak');	
		}
		catch (e)
		{
			return;
		}

		if (pagebreaks.length == 0) {
			return;
		}
		else {
			for (var i = 0; i < pagebreaks.length; i++)
			{
				/*				var capture_div = document.createElement('div');
				capture_div.id = 'test';
				capture_div.width = 0;
				capture_div.height = 0;

				dmj(capture_div).insertBefore(pagebreaks[i]);
				 */
				var top = 0;
				var element = dmj(pagebreaks[i]).next()[0];
				var tmpelement = element;


				// IE8.0 MS 테스트 페이지의 경우 tmpelement의 offsetParent를 찾다보면 BODY가 없음
				while (tmpelement != element.ownerDocument.body && tmpelement != null)
				{
					top = top + tmpelement.offsetTop;
					tmpelement = tmpelement.offsetParent;
				}

				var tmpframe = frame;

				while(tmpframe != GPrintmade_NonCrossTop){
					top = top + dmj(tmpframe.frameElement).offset().top;
					tmpframe = tmpframe.parent.window;
				}				

//				capture_div.parentNode.removeChild(capture_div);
				GPrintmade.option.AddPagebreak(top);

			}
		}

		if (frame.frames == null)
			return;

		for (var i = 0; i < frame.frames.length; i++) {
			this._FindPagebreakTag(frame.frames[i]);
		}
		return;


	},
	_MakeFile: function(head_object, PTMFrameObj, unique_id, framewin){
		var first_id_index = this._idindex;
		/* 		this._insertID(framewin); */
		var last_id_index = this._index;

		var result_head = head_object.html();
		if (result_head == null)
		{
			result_head = '';
		}
		else 
		{
			result_head = this._RemoveScriptTag(result_head);
			result_head = jQuery.trim(result_head);	
			result_head = this._ChangeCharset(result_head);

			var regex = /<[^>]*href_ptm\s*=[\"|\']*(\S*)[\"|\']*.*>/gi
				result_head = result_head.replace(regex,function(word){
					var result = word.replace(/href\s*=\s*([\"|\']*)(\S*)\1/gi,"");
					result = result.replace(/href_ptm/gi,'href');

					return result;
				});
		}	

		var result_body = PTMFrameObj.GetFullHtml();

		result_body = this._RemoveScriptTag(result_body);
		//result_body = this._RemoveComment(result_body);
		result_body = jQuery.trim(result_body);

		if (GPrintmade.option.GetCaptureEnabled() == true)
		{
			//if (GPrintmade.isExist == true) {
			result_body = this._ReplaceToCapturedImage(result_body, this._plugincapture);
			result_body = jQuery.trim(result_body);
			//} 
		}

		// 해당 HTML 문서의 DOCTYPE 추가
		var result = this._GetDoctype();

		var html_attributes = this._GetHTMLTagAttributes();

		result = result + '<html ' + html_attributes + '>';
		result = result + '<head>' + result_head + '</head>';
		result = result + result_body;
		/*  		result = result + "<script type = \"text/javascript\">" + this._AddScript(framewin) + "</script>"; */

		result = this._ReplaceURL(result, PTMFrameObj);  
		PTMFrameObj = null;
		/* 		this._removeID(framewin, first_id_index, last_id_index); */

//		if (unique_id == 1) {
//		GPrintmade.option.SetOriginalURL(location.hostname);
//		}

		/*
var id = GPrintmade.option.GetElementId();

		//임의의 엘리먼트 스크립트 실행
		if (framewin.document.getElementById(id) != null)
		{
			var script = this._AddExecuteString();
			result = result + script;
		}
		 */

		result = result + '</html>';
		result = jQuery.trim(result);		

		//2.0.0.4 - pagebreak 위치 검색을 뷰어에서 찾는다.
		/* 		this._FindPagebreakTag(window.top); */

		/* 테스트용으로 pagebreak 수동 삽입(MS 페이지)

		GPrintmade.option.add agebreak(689);
		GPrintmade.option.addPagebreak(1562);
		GPrintmade.option.addPagebreak(2697);

		 */
		try{
			if(GPrintmade.isLinux){
				var path = encodeURI(this._plugin.getTempPath() + '/Printmade2/temp/' + unique_id + ".html");
				result = dmj.trim(result);
				this._plugin.writeFile(result, path);		
			}
			else if(GPrintmade.isMac){
				var path = encodeURI(this._appdatapath + '/Printmade2/temp/' + unique_id + ".html\0");
				result = dmj.trim(result + '\0');
				this._plugin.writeFile(result, path);

			}
			else{
				if(GPrintmade.isSafari == true || GPrintmade.isSafariOver51 == true) {
					var path = this._safaripath + '/Printmade2/temp/' + unique_id.toString() + '.html\0';
					this._plugin.writeFile(result + '\0', path);
				} 
				else if (GPrintmade.isOpera == true) { 

					/* 실패 목록
					 * this._safaripath + '/Printmade2/temp/' + (new String(unique_id)) + '.html\0' : 저장 안됨.
					 * this._safaripath + '/Printmade2/temp/' + unique_id.toString() + '.html\0' : 폴더는 생성 되는데 저장 안 됨.
					 * new String(this._safaripath + '/Printmade2/temp/' + unique_id.toString() + '.html') : 저장 안 됨.
					 */
					var path = this._safaripath + '/printmade2/temp/';
					var filename = unique_id.toString() + '.html\0'
					path = encodeURI(path + filename);
					this._plugin.writeFile(result, path);
				}
				else {
					this._plugin.writeFile(result, this._appdatapath + '/Printmade2/temp/' + unique_id + '.html');
				} 
			}
		}catch(e){
			alert('Printmade 2 : ' + e.description);
		}		
		//this._RemovePTMAttr(framewin.document);

		if (unique_id == 1)
		{
			if(DEVELOPMENT_MODE){
				alert(GPrintmade.option.GetParameterString());
			}
			try{


				if(GPrintmade.isMac){

					var path = encodeURI(this._appdatapath + "/Printmade2/Viewer.app\0");
					var filename = encodeURI("file://" +this._appdatapath + "/Printmade2/temp/1.html\0");
					var parameters = encodeURI(GPrintmade.option.GetParameterString() + "\0");
					this._plugin.runViewer(path, filename, parameters);
				}
				else if(GPrintmade.isLinux){
					var path = encodeURI(this._appdatapath + "/Printmade2/Viewer");
					var filename = encodeURI(this._plugin.getTempPath() + "/Printmade2/temp/1.html");
					var parameters = encodeURI(GPrintmade.option.GetParameterString());
					this._plugin.runViewer(path, filename, parameters);
				}
				else {
					if (GPrintmade.isIE == true)
					{
						var path = this._appdatapath + '/Printmade2/Viewer.exe';
						if(this._plugin.getRunPath()){
							path = this._plugin.getRunPath();
							path = path.replace(/\\/g, '/');
							path = path + '/Printmade2/Viewer.exe';
						}
						this._plugin.runViewer(path, '\"' + this._appdatapath + '/Printmade2/temp/1.html\" \"' + GPrintmade.option.GetParameterString() + '\"',PMVIEWERMODAL);
						if (this._iezoomsize != 0 && this._iezoomsize != 100)           
							this._plugin.setIEZoomSize(this._iezoomsize, this._iwebbrowser);					
					}else{
						var path = this._appdatapath + '/Printmade2/Viewer.exe\0';
						if(this._plugin.getRunPath()){
							path = this._plugin.getRunPath();
							path = path.replace(/\\/g, '/');
							path = path + '/Printmade2/Viewer.exe\0';
						}
						path = encodeURI(path);
						var parameter = encodeURI('\"' + this._appdatapath + '/Printmade2/temp/1.html\" \"' + GPrintmade.option.GetParameterString() + '\"\0');
						this._plugin.runViewer(path,parameter);
					}
				}
				/* 			GPrintmade._RemovePTMAttr(PTMFrameObj.framewin.document); */
			}catch(e){
				alert('Printmade2 RunViewer Error : ' + e.description);
			}

			try{
				if(GPrintmade.isIE)
					this._plugin.releaseUAC();
			}catch(e){
				alert('Printmade 2 : ' + e.description);
			}			

			/* 			alert(this._plugin); */
			//dmj(this._plugin).remove();
			GPrintmade.plugincapture = null;
			GPrintmade.option = null;
			GPrintmade = null;
		}

	},
	_insertID : function(framewin) {
		var objects = framewin.document.getElementsByTagName('object');
		var embeds = framewin.document.getElementsByTagName('embed');
		var inputs = framewin.document.getElementsByTagName('input');
		var selects = framewin.document.getElementsByTagName('select');					
		var textareas = framewin.document.getElementsByTagName('textarea');

		for (var i = 0; i < objects.length; i++) {			
			if (objects[i].id == '') {
				this._idindex++;
				objects[i].id = 'ptm_copy_' + this._idindex;
			}
		}	

		for (var i = 0; i < embeds.length; i++) {			
			if (embeds[i].id == '') {
				this._idindex++;
				embeds[i].id = 'ptm_copy_' + this._idindex;
			}
		}	


		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].type == 'text') {			
				if (inputs[i].id == '') {
					this._idindex++;
					inputs[i].id = 'ptm_copy_' + this._idindex;
				}
			}

			if (inputs[i].type == 'radio' || inputs[i].type == 'checkbox'){			
				if (inputs[i].id == '') {
					this._idindex++;
					inputs[i].id = 'ptm_copy_' + this._idindex;
				}
			}
		}

		for (var i = 0; i < selects.length; i++) {	
			if (selects[i].id == '') {
				this._idindex++;
				selects[i].id = 'ptm_copy_' + this._idindex;
			}
		}	

		for (var i = 0; i < textareas.length; i++) {			
			if (textareas[i].id == '') {
				this._idindex++;
				textareas[i].id = 'ptm_copy_' + this._idindex;
			}
		}
	},
	_removeID : function(framewin, first, last) {
		for (var i = first; i <= last; i++)
			framewin.document.getElementById('ptm_copy_' + i).removeAttribute('id');
	},
	_AddExecuteString : function() {
		var script = '';
		script = script + "<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js'></script>\n\n";

		var add_readyEvent = '<script type="text/javascript"> $(document).ready(function(){' + GPrintmade.option.GetExecuteString() + '}); </script>\n\n';
		script = script + add_readyEvent;
		return script;
	},
	_GetUniqueId:function(){
		this._unique_id = this._unique_id + 1;
		return this._unique_id;
	},	
	_CopyTextData : function (id, framewin) {
		var data = framewin.document.getElementById(id);
		var script = '';

		script = script + '\nvar text = document.getElementById("' + id + '");';
		script = script + '\ntext.value = "' + data['value'] + '";';
		script = script + '\ntext.scrollLeft = ' + data.scrollLeft + ';';

		return script;		
	},
	_CopyCheckedData : function (id, framewin) {
		var data = framewin.document.getElementById(id);
		var script = '';

		script = script + '\nvar check = document.getElementById("' + id + '");';
		script = script + '\ncheck.checked = ' + data.checked;

		return script;
	},
	_CopySelectedData : function (id, framewin) {
		var data = framewin.document.getElementById(id);
		var script = '';

		script = script + '\nvar select = document.getElementById("' + id + '");';

		for (var i = 0; i < data.length; i++) {
			script = script + '\nselect[' + i + '].selected = ' + data[i].selected + ';';
		}

		return script;		
	},
	_CopyTextareaData : function (id, framewin) {
		var data = framewin.document.getElementById(id);
		var script = '';
		var content = data.value;
		var scrolltop = data.scrollTop;
		var scrollleft = data.scrollLeft;

		content = content.replace(/\t/gi, '\\t');
		content = content.replace(/\n/gi, '\\n');

		script = script + '\nvar textarea = document.getElementById("' + id + '");';
		script = script + '\ntextarea.value = "' + content + '";';
		script = script + '\ntextarea.scrollLeft = ' + scrollleft + ';';
		script = script + '\ntextarea.scrollTop = ' + scrolltop + ';';

		return script;			
	},
	_ResizeBody : function() {
		if (parseInt(document.body.style.width) > GPrintmade.maxBodyWidth)
			return '\ndocument.body.style.width = \"' + GPrintmade.maxBodyWidth + 'px\";';
		else
			return '';
	},
	_AddScript : function (framewin) {
		var inputs = framewin.document.getElementsByTagName('input');	
		var result = '';
		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].type == 'text')
				result = result + this._CopyTextData(inputs[i].id, framewin);

			if (inputs[i].type == 'radio' || inputs[i].type == 'checkbox')
				result = result + this._CopyCheckedData(inputs[i].id, framewin);
		}

		var selects = framewin.document.getElementsByTagName('select');
		for (var i = 0; i < selects.length; i++) {
			result = result + this._CopySelectedData(selects[i].id, framewin);			
		}

		var textareas = framewin.document.getElementsByTagName('textarea');
		for (var i = 0; i < textareas.length; i++) {
			result = result + this._CopyTextareaData(textareas[i].id, framewin);
		}

		//result = result + this._ResizeBody();

		return result;
	},
	_GetDoctype : function() {
		var result = '';

		if (GPrintmade.isIE) {
			if (document.all[0].text != undefined)
				result = document.all[0].text;	
		}
		else {
			if (document.doctype != null)
				result = '<!DOCTYPE ' + document.doctype.name + ' PUBLIC \"' +  document.doctype.publicId + '\"' + (document.doctype.systemId ? ' \"' + document.doctype.systemId + '\"' : '') + '>';			
		}			
		return result;
	},
	_RemoveComment : function(string) {
		var str = string;
		var regex = /\<!--(.|\n)*?--\>/gi
			var result = str.replace(regex, function(word) {
				var result = word.replace(/\<!--(.|\n)*?--\>/, '');
				return result;
			});		

		return result;
	},
	_ReplaceToCapturedImage : function(string, plugincapture) {
		var str = string, index;	
		var result = str;

		/* 
		 * Object 태그 제거를 위한 스크립트
		 * Object 태그 안에 Object 태그가 중복해서 들어있는 경우를 고려해야 하므로
		 * 정규식으로 제거할 수가 없어서 별도의 함수를 만듦.
		 */

		if (GPrintmade.isObjectTagExist) {
			var match = str.match(/<object/i);
			while (match != null) {
				str = this._RemoveObjectTag(str, match.index, plugincapture);
				match = str.match(/<object/i);
			}
			result = str;
		}
		else {
			result = str;
		}

		if (GPrintmade.isMarqueeTagExist) {
			var regex  = /<marquee\s*([^\>])*?\sid\s*=\s*(\"|\')*\w*(\2)*\s*(.|\n)*?>(.|\n)*?<\/marquee>/gi 

				result = result.replace(regex, function(word) {
					var result = word.match(/<marquee\s*([^\>])*?\sid\s*=\s*(\"|\')*(\w*)(\2)*\s*(.|\n)*?>(.|\n)*?<\/marquee>/i);
					var id = result[3];
					return plugincapture.CaptureWithElement(id);
				});
		}

		/* 
		 * Embed 태그 제거를 위한 스크립트
		 * Embed 태그의 경우 HTML 파일에서 </embed>를 인식하지 못하기 때문에 
		 * Object, Marquee 태그와 함께 처리할 수 없다. 
		 * 그러므로 닫는 태그가 없는 정규식을 이용하여 따로 처리해주어야 한다.
		 */

		if (GPrintmade.isEmbedTagExist == true) {
			var regex2 = /<embed\s*([^\>])*?\sid\s*=\s*(\"|\')*\w*\2\s*(.|\n)*?>/gi
				result = result.replace(regex2, function(word) {
					var result = word.match(/<embed\s*([^\>])*?\sid\s*=\s*(\"|\')*(\w*)\2\s*(.|\n)*?>/i);
					var id = result[3];
					var tmp = plugincapture.CaptureWithElement(id);

					return tmp;
				});
		}

		/*
		 * Img 태그 제거를 위한 스크립트
		 * Img 태그 중 src에 png,gif,jpg 등 이미지가 아닌 스크립트로 연결되어 있는 경우 오브젝트 캡쳐를 한다.
		 *
		 */
		var regex3 = /<canvas\s*([^\>])*?\sid\s*=\s*(\"|\')*\w*\2\s*(.|\n)*?>/gi
			result = result.replace(regex3, function(word) { 
				var result = word.match(/<canvas\s*([^\>])*?\sid\s*=\s*(\"|\')*(\w*)\2\s*(.|\n)*?>/i);
				var id = result[3];
				var tmp = plugincapture.CaptureWithElement(id);
				return tmp;
			});
			
		return result;
	},
	_RemoveObjectTag : function (str, index, plugincapture) {
		var startindex = index;
		var tmpindex = index;

		var openregex = /<object/i
			var closeregex = /<\/object>/i

				var	remainstr = str.substring(index + 1);

		var openindex, closeindex;

		var findIndexOfTag = function(regex, index) {
			var remainstr = str.substring(index + 1);
			var match = remainstr.match(regex);

			if (match != null)
				return match.index + index;
			else
				return -1;
		};

		openindex = findIndexOfTag(openregex, tmpindex);
		closeindex = findIndexOfTag(closeregex, tmpindex);

		if (openindex != -1 && openindex < closeindex) {	

			/*
			 * openindex : 현재 이후로 가장 먼저 나오는 <object> 태그의 위치
			 * closeindex : 현재 이후로 가장 먼저 나오는 </object> 태그의 위치
			 * openindex가 더 작다는 말은 기존의 object 태그가 닫히기 전 새로운 object 태그가 열렸다는 것을 의미한다.
			 * 그러므로 2개의 </object>가 나타나야 한다.
			 * closeindex가 더 작은 경우는 </object> 태그가 먼저 나온다는 뜻이고
			 * openindex가 -1인 경우는 더 이상 새로운 object 태그가 열리지 않는다는 말이기 때문에
			 * 기존의 object 태그를 가장 먼저 나오는 </object> 태그와 매치시키면 된다.
			 */

			var count = 2;
			var i_openindex, i_closeindex, index = openindex;
			while (count != 0) {
				i_openindex = findIndexOfTag(openregex, index + 1);
				i_closeindex = findIndexOfTag(closeregex, index + 1);

				if (i_openindex != -1) {
					if (i_openindex < i_closeindex) {
						count = count + 1;
						index = i_openindex;
					}
					else {
						count = count - 1;
						index = i_closeindex;
					}
				}
				else
					count = 0;
			}
			closeindex = i_closeindex;
		}

		/*
		 *  여기에 captureForTest 호출하기.
		 *  
		 */

		var objectstring = str.substring(startindex, closeindex + 10);
		var regex = /<object([^>])*?\s+id\s*=\s*(\"|\')*((\w|-|_)*)(\2)*[^>]*\>/i
			var match = objectstring.match(regex);
		if(match.length < 3)
			return front + objectstring + rear;
		var id = match[3];
		var replacestring = plugincapture.CaptureWithElement(id);
		var front = str.substring(0, startindex);
		var rear = str.substring(closeindex + 10);

		var result = front + replacestring + rear;
		return result;
	},
	_ChangeCharset : function(string) {
		var str = string;

		var regex = /(\<meta.*charset\s*=\s*(\"|\')*)([^(\'|\"|\s|\;|\>)]*)(.*)/gi

			var isCharsetExist = str.match(regex);
		if (isCharsetExist == null) {
			return str + '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';		            
		}

		var result = str.replace(regex, function(word) {
			var result = word.replace(/(\<meta.*charset\s*=\s*(\"|\')*)([^(\'|\"|\s|\;|\>)]*)(.*)/gi, '$1utf-8$4');
			return result;
		});

		return result;
	},
	_GetHTMLTagAttributes : function () {
		var html = dmj('html');
		var html_attributes = html[0].attributes;
		var result = '';
		if (html_attributes.length) {


			for (var i = 0; i < html_attributes.length; i++) {

				if (html_attributes[i].value != '' && html_attributes[i].value != 'null') {
					result += html_attributes[i].name + '="' + html_attributes[i].value + '" ';
				}	
			}
		}	
		return result;
	},
	_RelativeToStaticOfAddress : function(obj, currentURL){
		/*
		 * 그냥 dom의 src를 잡으면 절대 경로를 가져오게 된다.
		 * 하지만 jQuery의 attr로 가져오면 현재 설정된 상태를 가져온다.
		 */

		var static_path = Soo.URL.getStaticPath(currentURL);
		var current_protocol = location.protocol;
		//SRC
		dmj(obj).find('img').each(function(){
			if ( dmj(this).attr( 'src' ) == undefined) {
				return;
			}
			if ((new String(dmj(this).attr('src'))).indexOf(current_protocol) == -1 && (new String(dmj(this).attr('src'))).indexOf('http://') == -1) {
				var src_string = new String(this.src);
				if(src_string.indexOf(current_protocol) == -1){
					if(src_string.indexOf('/') == 0){
						//Root relative path
						dmj(this).attr('src_ptm', current_protocol + '//'+location.host+'/' + (new String(dmj(this).attr('src'))));	
					}else{
						//Document relative path
						dmj(this).attr('src_ptm', static_path + (new String(dmj(this).attr('src'))));
					}
				} else {				
					//absolute path가 있으면 바로 적용.
					dmj(this).attr('src_ptm',src_string);
				}
			}
		});

		// 모든 href 를 상대 경로에서 절대 경로로 바꾼다.


		// a, link
		dmj(obj).find('link').each(function(){
			if ( dmj(this).attr( 'href' ) == undefined) {
				return; 
			}

			if ((new String(dmj(this).attr('href'))).indexOf(current_protocol) == -1) {
				var href_string = new String(this.href);

				if(href_string.indexOf(current_protocol) == -1 && href_string.indexOf('javascript') == -1){
					if(href_string.indexOf('/') == 0){
						//Root relative path
						dmj(this).attr('href_ptm', current_protocol+'//'+location.host+'/' + (new String(dmj(this).attr('href'))));	
					}else{
						//Document relative path
						dmj(this).attr('href_ptm', static_path + (new String(dmj(this).attr('href'))));
					}
				}else{				
					//absolute path가 있으면 바로 적용.
					dmj(this).attr('href_ptm',href_string);
				}			
			}else{
				dmj(this).attr('href_ptm',dmj(this).attr('href'));
			}
		});

		dmj(obj).find('*[background]').each(function(){
			if ((new String(dmj(this).attr('background'))).indexOf(current_protocol) == -1) {
				var background_string = new String(this.background);
				if(background_string.indexOf(current_protocol) == -1){
					if(background_string.indexOf('/') == 0){
						//Root relative path
						dmj(this).attr('background_ptm', current_protocol+'//'+location.host+'/' + (new String(dmj(this).attr('background'))));	
					}else{
						//Document relative path
						dmj(this).attr('background_ptm', static_path + (new String(dmj(this).attr('background'))));
					}
				}else{				
					//absolute path가 있으면 바로 적용.
					dmj(this).attr('background_ptm',background_string);
				}

			}
		});
		/*
		 * Path는 총 3가지로 이루어져 있다.
		 * Absolute Path - http://
		 * Root Relative Path - forward-slash
		 * Document Relative Path
		 * 
		 * IE 6,7,8(모드전환)를 제외한 나머지 브라우저는 DOM.src가 absolute path를 나타낸다.
		 */
		/*
		 * 원래버전 : *[src]:not(frame,iframe)
		 * 수정된 버전 : *[src]:not(frame),*[src]:not(iframe)
		 * 이유 : Opera(10.62) 에서 jquery Sizzle 클래스가 not 안에 있는 multiple selector 작동이 되지
		 * 않는다. 임시 조치이며 추후 Sizzle 클래스를 수정하던가, 속도에 문제없다면 그대로 써야 한다.
		 */

		//dmj(obj).find("*[src]:not(frame,iframe)").each(function(){
		//*[src]:not(frame),*[src]:not(iframe),
		/*
if(GPrintmade.isOpera){
			dmj(obj).find('iframe:not(src_local_ptm)').each(function() {
				if ((new String(dmj(this).attr('src'))).indexOf('http://') == -1) {
					dmj(this).attr('src_local_ptm', static_path + (new String(dmj(this).attr('src'))));
				}
			});

			dmj(obj).find('frame:not(src_local_ptm)').each(function() {
				if ((new String(dmj(this).attr('src'))).indexOf('http://') == -1) {
					dmj(this).attr('src_local_ptm', static_path + (new String(dmj(this).attr('src'))));
				}
			});

			dmj(obj).find('*[src]:not(frame)').each(function(){
			if ((new String(dmj(this).attr('src'))).indexOf('http://') == -1) {

				dmj(this).attr('src_ptm', static_path + (new String(dmj(this).attr('src'))));
				}
			});

			dmj(obj).find('*[src]:not(iframe)').each(function(){
			if ((new String(dmj(this).attr('src'))).indexOf('http://') == -1) {

				dmj(this).attr('src_ptm', static_path + (new String(dmj(this).attr('src'))));
				}
			});
		}else{	
			dmj(obj).find('*[src]:not(frame):not(iframe)').each(function(){
			if ((new String(dmj(this).attr('src'))).indexOf('http://') == -1) {
				var src_string = new String(this.src);
				if(src_string.indexOf('http://') == -1){
					if(src_string.indexOf('/') == 0){
						//Root relative path
						dmj(this).attr('src_ptm', 'http://'+location.host+'/' + (new String(dmj(this).attr('src'))));	
					}else{
						//Document relative path
						dmj(this).attr('src_ptm', static_path + (new String(dmj(this).attr('src'))));
					}
				}else{				
					//absolute path가 있으면 바로 적용.
					dmj(this).attr('src_ptm',src_string);
				}
			}
			});
		}
		// 모든 href 를 상대 경로에서 절대 경로로 바꾼다.
		dmj(obj).find('*[href]').each(function(){
			if ((new String(dmj(this).attr('href'))).indexOf('http://') == -1) {
				var href_string = new String(this.href);
				if(href_string.indexOf('http://') == -1){
					if(href_string.indexOf('/') == 0){
						//Root relative path
						dmj(this).attr('href_ptm', 'http://'+location.host+'/' + (new String(dmj(this).attr('href'))));	
					}else{
						//Document relative path
						dmj(this).attr('href_ptm', static_path + (new String(dmj(this).attr('href'))));
					}
				}else{				
					//absolute path가 있으면 바로 적용.
					dmj(this).attr('href_ptm',href_string);
				}			
			}
		});

		// 모든 href 를 상대 경로에서 절대 경로로 바꾼다.
		dmj(obj).find('*[background]').each(function(){
			if ((new String(dmj(this).attr('background'))).indexOf('http://') == -1) {

				var background_string = new String(this.background);
				if(background_string.indexOf('http://') == -1){
					if(background_string.indexOf('/') == 0){
						//Root relative path
						dmj(this).attr('background_ptm', 'http://'+location.host+'/' + (new String(dmj(this).attr('background'))));	
					}else{
						//Document relative path
						dmj(this).attr('background_ptm', static_path + (new String(dmj(this).attr('background'))));
					}
				}else{				
					//absolute path가 있으면 바로 적용.
					dmj(this).attr('background_ptm',background_string);
				}

			}
		});
		 */
	},
	_RemoveScriptTag : function(string){
		var str = string;
		var result = str;

		/*
		 *  script 태그 중 실제 script 코드 없이 src 링크로 끝나는 경우를 제거하는 정규식
		 *  예1) <script type="text/javascript" src="natead_v20100320.js?v=20100320">
		 *  예2) <script type="text/javascript" src="natead_v20100320.js?v=20100320"></script>
		 *  <script 이후 src가 있는지 없는지 확인하고 만약 </script>가 바로 뒤에 붙어 있으면 없애기 
		 */


//		예1의 경우가 없는 경우 아래의 스크립트만으로도 충분히 동작하므로 우선 주석 처리

//		var regex = /\<script([^>])*?\s*src\s*=\s*(.|\n)*?\>(\s|\n)*(\<\/script\>)*/gi
//		result = str.replace(regex, function(word) {
//		var result = word.replace(/\<script([^\>])*?\s*src\s*=\s*(.|\n)*?\>(\s|\n)*(\<\/script\>)*/gi, '');
//		return result;
//		});


		/*
		 * ?가 없는 정규식을 쓰는 경우 가장 넓은 범위를 매칭시키므로 
		 * <script> abc </script> 123 <script> def </script>와 같은 경우 123까지 모두 포함하여 하나로 매칭된다.
		 * (.|\n) 뒤에 ?를 붙여주면 가장 좁은 범위를 매칭시키므로 
		 * <script> abc </script>와 <script> def </script>가 각각 따로 매칭된다. 
		 */
		regex = /\<script(.|\n)*?\<\/script\>/gi  
			result = result.replace(regex,function(word){
				var result = word.replace(/\<script(.|\n)*?\<\/script\>/gi, '');
				return result;
			});

		return result;
	}
});


//easy print
//serverPath

var cml;
var param;
var printWin;
var printFrame;
var content;
var isTitle = true;


function Chameleon(){
	this.Contents = Chameleon.Contents;
	this.Renderer = Chameleon.Renderer(this);
	this.Viewer = Chameleon.Viewer(this);
	this.Controller = Chameleon.Controller(this);

}

Chameleon.Contents = (function(){

	this.cnt=0;
	this.firstPointX = 0;
	this.firstPointY = 0;
	this.lastPointX = 0;
	this.lastPointY = 0;
	this.isCrop = 0;
	this.productid = 'ptmcolor';
	this.targetframe;
	this.viewerFrame;
	this.viewerWindow;
	this.currentZoomValue = 1;
	this.headdata;
	this.bodyObject;
	this.bodydata;

	return this;


})();

Chameleon.Renderer = function(obj){
	var cml = obj;
	this.renderHTML = function(){
		var bodyObject = cml.Contents.bodyObject;

		bodyObject.find("a").each(function(){
			dmj(this).removeAttr("href");
		})

	}
	return this;

}



function customizedCwgrid(){
	if(dmj("div[class*='cwgrid']").length > 0){


		var gridstyle = '';
		var text = '';

		dmj("div[class*='cwgrid']").each(function(){

				var target_class_name = dmj(this).attr('class').split(' ')[1];

				text += " ."+target_class_name+" .slick-header-column{LEFT:"+dmj('.'+target_class_name+' .slick-header-column').css('left')+"}";
				text += " ."+target_class_name+" .slick-top-panel{HEIGHT:"+dmj('.'+target_class_name+' .slick-top-panel').css('height')+"}";
				text += " ."+target_class_name+" .slick-headerrow-columns{HEIGHT:"+dmj('.'+target_class_name+' .slick-headerrow-columns').css('height')+"}";
				text += " ."+target_class_name+" .slick-cell{HEIGHT:"+dmj('.'+target_class_name+' .slick-cell').css('height')+"}";
				text += " ."+target_class_name+" .slick-row{HEIGHT:"+dmj('.'+target_class_name+' .slick-row').css('height')+"}";
				text += " ."+target_class_name+" .slick-footer-columns{HEIGHT:"+dmj('.'+target_class_name+' .slick-footer-columns').css('height')+"}";

				var llength = 0;
				while(dmj('.'+target_class_name+' .l'+llength).length >0){
					llength++;
				}

				var rlength = 0;
				while(dmj('.'+target_class_name+' .r'+rlength).length >0){
					rlength++;
				}

				for(i=0;i<llength;i++){
					text += " ."+target_class_name+" .l"+i+"{LEFT:"+dmj("."+target_class_name+" .l" + i).css('left')+"}";
				}

				for(i=0;i<rlength;i++){
					text += " ."+target_class_name+" .r"+i+"{RIGHT:"+dmj("."+target_class_name+" .r"+i).css('right')+"}";
				}

				// START::20130902-그리드 관련 class추가
				var llength2 = 0;
				while(dmj('.'+target_class_name+' .cell_l'+llength2).length >0){
					  llength2++;
				}

				var rlength2 = 0;
				while(dmj('.'+target_class_name+' .cell_r'+rlength2).length >0){
					  rlength2++;
				}

				for(i=0;i<llength2;i++){
					  text += " ."+target_class_name+" .cell_l"+i+"{LEFT:"+dmj("."+target_class_name+" .cell_l" + i).css('left')+"}";
				}

				for(i=0;i<rlength2;i++){
					  text += " ."+target_class_name+" .cell_r"+i+"{RIGHT:"+dmj("."+target_class_name+" .cell_r"+i).css('right')+"}";
				}
				// END::20130902-그리드 관련 class추가

			})



		return "<style type='text/css' rel='stylesheet'>"+text+"</style>";

	}else{
		return "";
	}
}

function doAddress(obj){
	var current_protocol = location.protocol;

	dmj(obj).find('img').each(function(){
		if ( dmj(this).attr( 'src' ) == undefined) {
			return;
		}
		var src_string = new String(this.src);
		if(src_string.indexOf(current_protocol) == -1 && src_string.indexOf("http://") == -1 && src_string.indexOf("https://") == -1){
				dmj(this).attr('src', current_protocol + '//'+location.host+'/' + (new String(dmj(this).attr('src'))));

		} else {
			dmj(this).attr('src',src_string);
		}
	});


	dmj(obj).find('*[background]').each(function(){
		if ((new String(dmj(this).attr('background'))).indexOf(current_protocol) == -1) {
			var background_string = new String(this.background);
			if(background_string.indexOf(current_protocol) == -1 && background_string.indexOf("http://") == -1 && background_string.indexOf("https://") == -1){
				dmj(this).css('background-image', 'url('+current_protocol+'//'+location.host+'/' + (new String(dmj(this).attr('background')))+')');
			}else{
				dmj(this).attr('background_ptm',background_string);
			}

		}
	});
}
Chameleon.Controller = function(obj){
	var cml = obj;
	var bodyclone;
	var PTM_WorkAt = function(context){
		//2. Input
		dmj('input:checked').attr('PTMChecked',true);
		dmj('body input[type!="hidden"]',context).each(function(){
			dmj(this).attr('value',dmj(this).val());
		});
		//3. Select
		dmj('body select',context).each(function(){
			var selectedIndex = this.selectedIndex;
			dmj('option[selected]',this).removeAttr('selected');
			dmj('option:eq('+selectedIndex+')',this).attr('selected','selected');
		});
	};
	this.setHtmlCode = function(){
		dmj('*[PTMViewFirst]').removeAttr('PTMViewFirst');
		dmj('*[PTMscrollLeft]').removeAttr('PTMscrollLeft');
		try{
			var scrollTop = dmj('.slick-viewport-top').scrollTop();
			var scrollLeft = dmj('.slick-viewport-top').scrollLeft();
			var tempHeight = dmj('.slick-row').height();
			try{
				dmj('.slick-row').each(function(){
					var temp = dmj(this).get(0).style.top.replace("px","")*1;
					if(temp <= scrollTop && temp + tempHeight >= scrollTop){
						dmj(this).attr('PTMViewFirst',scrollTop+'');
						dmj(this).attr('PTMscrollLeft',scrollLeft+'');
					}
				});
			}catch(e){}
		}catch(e){}
		dmj('*[PTMChecked]').removeAttr('PTMChecked');
		var headClone = dmj("head").clone();
		dmj('script',headClone).remove();
		if(dmj("title",headClone).text() == ""){
			isTitle = false;
			dmj("title",headClone).remove();
		}
		var bodyLinkTag = '';
		dmj('link','body').each(function(){bodyLinkTag += this.outerHTML});
		this.Data.headdata = headClone.html() + bodyLinkTag + customizedCwgrid();
		PTM_WorkAt(document);


		bodyclone = dmj(param.elementid).clone();
		dmj('script',bodyclone).remove();

		this.Data.bodyObject = bodyclone;

		var optionSelect = [];
		var test = dmj('option');

		for(var i=0; i<test.length;i++){
			if(test[i].selected) optionSelect.push(i);
		}


		var test2 = dmj('option',bodyclone);

		for(var i=0; i<test2.length;i++){
			for(var j=0; j<optionSelect.length;j++){
				if(i==optionSelect[j])  {
					//test2[0].text = test2[i].text;
					test2[i].defaultSelected = true;
				}
			}
		}

		dmj("body").append(this.Data.bodyObject);

		this.Chameleon.Renderer.renderHTML();
		var styleWidth = dmj(param.elementid).outerWidth();
		styleWidth = styleWidth+ "px";
		doAddress(bodyclone);

		if(param.elementid != 'body'){
			this.Data.bodydata = "<div ptmid='ptmv' id='"+dmj(param.elementid).attr('id')+"' class='"+dmj(param.elementid).attr('class')+"' style='width:"+styleWidth+";'>"+bodyclone.html() + "</div>";
		}else{
			this.Data.bodydata ="<div ptmid='ptmv' style='width:"+styleWidth+";'>"+bodyclone.html() + "</div>";
		}
		bodyclone.remove();

	}
	this.setDOMFrame = function(){
		this.Data.targetframe = document.body;
		this.Data.viewerFrame = document.createElement("iframe");
	}
	this.modifyViewerSize = function(){
		var cameltempFrame = this.Data.viewerFrame;
		cameltempFrame.id = 'itest'
		cameltempFrame.width = dmj(window).width();
		cameltempFrame.height = "800px";
	}
	this.drawViewer = function(){
		var painter = cml.Viewer;
		dmj("#printbutton").hide();


		this.modifyViewerSize();

		painter.drawHeader();
		painter.drawBtn({"sclass":"menu01","caption":"인쇄","func":"printall()","funcName":"인쇄하기"});
		painter.drawBtn({"sclass":"menu04","caption":"저장","func":"saveTextAsFile();","funcName":"저장"});
		painter.drawBtn({"sclass":"menu05","caption":"선택영역","func":"dmj('#itest')[0].contentWindow.doCrop()","funcName":"선택영역"});
		painter.drawBtn({"sclass":"menu07","caption":"화면확대","func":"viewZoomIn()","funcName":"화면확대"});
		painter.drawBtn({"sclass":"menu08","caption":"화면축소","func":"viewZoomOut()","funcName":"화면축소"});
		//dmj("#ptmmain .menu12").append('<div class="zoom"><ul><li class="menu07"><a title="화면확대" href="javascript:viewZoomIn();">화면확대</a></li><li class="menu08"><a title="화면축소" href="javascript:viewZoomOut();">화면축소</a></li></ul></div>');
		painter.drawETC();

	}



	this.Chameleon = cml;
	this.Data = cml.Contents;
	this.setDOMFrame();
	this.setHtmlCode();
	this.drawViewer();

	return this;
}

Chameleon.Viewer = function(obj){
	var cml = obj;

	this.drawButton = function(text){
		dmj("#ptmheader .main").append(text);
	}
	this.drawBtn = function(param){

		var parameterData = {"sclass":param.sclass,"caption":param.caption,"func":param.func,"funcName":param.funcName};

		var source = '<li class="'+parameterData["sclass"]+'"><a href="javascript:'+param["func"]+';" title="'+parameterData["caption"]+'">'+parameterData["caption"]+'</a></li>';

		dmj("#ptmmain").append(source);
	}

	this.drawHeader = function(){

		dmj(cml.Contents.targetframe).prepend("<div id='ptmwrap'></div>");
		dmj('#ptmwrap').prepend("<div id='ptmheader'><div><div id='ptmhead'></div></div></div>");
		
		//dmj("#ptmhead").append('<h1 id="logo"><img alt="로고" src="'+serverPath+'/img/logo.gif"></h1>');
		dmj("#ptmhead").append("<ul class='main' id='ptmmain'></ul>");
		//dmj("#ptmhead").append('<ul id="onoff"><li class="menu10"><a title="도움말" href="javascript:;">도움말</a></li><li class="menu11"><a title="종료" href="javascript:window.close();">종료</a>	</li></ul>');
		dmj("#ptmhead").append('<ul id="onoff"><li class="menu11"><a title="종료" href="javascript:window.close();">종료</a>	</li></ul>');
		dmj("#ptmwrap").append('<div id="ptmcontainer"><div id="ptmcontent"></div>');

	}

	this.drawETC = function(){


		dmj("#ptmcontent").append(cml.Contents.viewerFrame);

		dmj("#itest").width(dmj(window).width() - 25);
		dmj("#itest").height(dmj(window).height() - 135);

		dmj( window ).resize(function(){
			dmj("#itest").width(dmj(window).width() - 25);
			dmj("#itest").height(dmj(window).height() - 130);
		}).resize();
			dmj("#ptmwrap").hide();
			setTimeout(appendIE,1);
		}

	return this;
}
function isChrome(){

	return (navigator.userAgent.match(/Chrome\/(\d.\d)/i) != null);
}
function popupViewer(){

	var width;
	dmj("#itest").height(800);
	dmj("#itest").css("height","800px");


		setTimeout(function(){
			var serverPath = serverPath;
			try{
				var printFrame = dmj("#itest",window.document)[0].contentWindow.document;
				var url3=serverPath+"/viewer.js";
				var url2=serverPath+"/PTMhtmlcanvas.js";
				var url=serverPath+"/PTMScript.js";
				var script3=printFrame.createElement('script');
				var script2=printFrame.createElement('script');
				var script=printFrame.createElement('script');
				script3.src=url3;
				script3.type='text/javascript';
				script2.src=url2;
				script2.type='text/javascript';
				script.src=url;
				script.type='text/javascript';
				printFrame.getElementsByTagName('head')[0].appendChild(script2);
				printFrame.getElementsByTagName('head')[0].appendChild(script);
				printFrame.getElementsByTagName('head')[0].appendChild(script3);
			}catch(e){

			}

		},3000);

	width = dmj(param.elementid).outerWidth();
	var plusWidth = 70;
	content = "<!DOCTYPE html>";
	content += "<html>";
	content += "<head>";
	content += "<title>print</title>";
	content += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">"
	content += "<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>"
	content += "<link rel='stylesheet' href='"+serverPath+"/css/PTMStyle.css'>";
	content += "<script src='"+serverPath+"/PTMChameleon.js'></script>";
	content += "<script src='"+serverPath+"/PTMFunction.js'></script>";
	content += "<script src='"+serverPath+"/viewer.js'></script>";

	if(localStorage.getItem("PTMScriptPath")){
		content += '<script>(function(){setTimeout(function(){'+
				'var printFrame = dmj("#itest",window.document)[0].contentWindow.document;'+
				'var url="'+localStorage.getItem("PTMScriptPath")+'";'+
				'var script=printFrame.createElement("script");'+
				'script.src=url;'+
				'script.type="text/javascript";'+
				'printFrame.getElementsByTagName("head")[0].appendChild(script);},300)})()</script>';
	}
	//수정수정
	content += '<script>(function(){setTimeout(function(){var serverPath = "'+serverPath+'";'+
				'var printFrame = dmj("#itest",window.document)[0].contentWindow.document;'+
				'dmj("head",printFrame).append(localStorage.getItem("PTMHead"));'+
				'dmj("body",printFrame).append(localStorage.getItem("PTMBody"));'+
				'var url3=serverPath+"/viewer.js";'+
				'var url2=serverPath+"/PTMhtmlcanvas.js";'+
				'var url=serverPath+"/PTMScript.js";'+
				'var script3=printFrame.createElement("script");'+
				'var script2=printFrame.createElement("script");'+
				'var script=printFrame.createElement("script");'+
				'script3.src=url3;'+
				'script3.type="text/javascript";'+
				'script2.src=url2;'+
				'script2.type="text/javascript";'+
				'script.src=url;'+
				'script.type="text/javascript";'+
//				'alert("TEST2");'+
				'printFrame.getElementsByTagName("head")[0].appendChild(script3);'+
				'printFrame.getElementsByTagName("head")[0].appendChild(script2);'+
				'printFrame.getElementsByTagName("head")[0].appendChild(script);},1000)})()</script>';
	content += "<script type='text/javascript'>var width = "+width+"</script>";
	content += "<script type=\'text/javascript\'>function loadElements() {opener.printWinOpen();}</script>";
//	content += "<script type='text/javascript'>(function(){setTimeout(function(){loadElements();},3000)})()</script>";
	content += "</head>";
	content += "<body>";
	content += "<div id='ptm-loading' style='position:absolute;z-index:1000;top:60px;left:0px;width:"+(width+plusWidth+20)+"px;height:"+dmj(window).height()+"px;background-color:#ffffff'></div>";
	content += "<div id='PTMLoadImage' style='display:none;opacity:1;position:absolute;z-index:2000;top:"+(dmj(window).height()/2-63)+"px;left:"+((width+plusWidth)/2-108)+"px;width:216px;height:127px;background-image:url(\""+serverPath+"/img/printmade_loading2.gif\");margin:0px auto;'>"
	content += "</div>"
	content += dmj("#ptmwrap")[0].innerHTML;
	content += "</body>";
	content += "</html>";
	printWin = window.open(serverPath+"/kdb/1.html",'','left=0,top=0,width='+(width+plusWidth)+',height='+dmj(window).height()+',toolbar=0,scrollbars=1,status =0,resizable=yes,scrollbars=no,location=no,directories=no');

  var PTMKDBTYPE = "";
  if(dmj("#wrapSub").length >0){
	  PTMKDBTYPE = dmj("#wrapSub").attr("class");
  }else{
	  PTMKDBTYPE = dmj("body").children().filter(function(){return dmj(this).prop("tagName") == "DIV"}).attr("class");
  }
  var PTMSCRIPT = "<div id='PTMTYPE' ptmvalue='"+PTMKDBTYPE+"' style='display:none;'></div>"
  
  try{
	localStorage.setItem("PTMData",content);
	if(isTitle)
		localStorage.setItem("PTMHead","<link rel='stylesheet' href='"+serverPath+"/css/style.css'/>"+cml.Contents.headdata);
	else
		localStorage.setItem("PTMHead","<TITLE>title</TITLE><link rel='stylesheet' href='"+serverPath+"/css/style.css'/>"+cml.Contents.headdata);
	if((navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1))
		var body = cml.Contents.bodydata + "<canvas id='breaks'width='"+width+"'; height='"+dmj(param.elementid).outerHeight()+"'; style='top:0;left:0;position:absolute;z-index:100;'></canvas>";
	else
		var body = cml.Contents.bodydata + "<div id='canvases' style=position:relative><canvas id='breaks' width='"+dmj(param.elementid).outerWidth()+"' height='"+dmj(param.elementid).outerHeight()+"' style='top:0;left:0;position:absolute;z-index:10;'></canvas></div>";
	localStorage.setItem("PTMBody",body+PTMSCRIPT)
	localStorage.setItem("PTMReload",true);
  }catch(e){
	localStorage.setItem("PTMData",content);
	localStorage.setItem("PTMHead","<link rel='stylesheet' href='"+serverPath+"/css/style.css'/>"+cml.Contents.headdata);
	if((navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1))
		var body = cml.Contents.bodydata + "<canvas id='breaks'width='"+width+"'; height='"+dmj(param.elementid).outerHeight()+"'; style='top:0;left:0;position:absolute;z-index:100;'></canvas>";
	else
		var body = cml.Contents.bodydata + "<div id='canvases' style=position:relative><canvas id='breaks' width='"+dmj(param.elementid).outerWidth()+"' height='"+dmj(param.elementid).outerHeight()+"' style='top:0;left:0;position:absolute;z-index:10;'></canvas></div>";
	localStorage.setItem("PTMBody",body+PTMSCRIPT)
	localStorage.setItem("PTMReload",true);
  }
	dmj("#ptmwrap").remove();

}
function printWinOpen(){
	if(isChrome()){
		try{
			if(dmj("#itest",printWin.document)[0].contentWindow.document){
				drawViewer(content);
			}
		}catch(e){

		}
	}else{
		try{
			if(dmj("#itest",printWin.document)[0].contentWindow){
				drawViewer(content);
			}
		}catch(e){
			console.log(e);
		}
	}
}
function drawViewer(content){
	try{

	printFrame = dmj("#itest",printWin.document)[0].contentWindow.document;


	var width;
	if(dmj(param.elementid).outerWidth() > 980){
		width = 980;
	}else{
		width = dmj(param.elementid).outerWidth();
	}

	dmj("head",printFrame).append("<link rel='stylesheet' href='"+serverPath+"/css/style.css'>");
	dmj("head",printFrame).append(cml.Contents.headdata);
	dmj("body",printFrame).append(cml.Contents.bodydata);
	dmj("body",printFrame).css('width',width+'px');
	if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
		dmj("body",printFrame).append("<canvas id='breaks'width='"+width+"px'; height='"+dmj(param.elementid).outerHeight()+"px'; style='top:0;left:0;position:absolute;z-index:10;'></canvas>");
	}else{
		dmj("body",printFrame).append("<div id='canvases' style=position:relative></div>");
		dmj("#canvases",printFrame).append("<canvas id='breaks'width='"+width+"'; height='"+dmj(param.elementid).outerHeight()+"'; style='top:0;left:0;position:absolute;z-index:10;'></canvas>");
	}
	headDonutAdd(printFrame);
	}catch(e){
		console.log(e);
	}
}
function headDonutAdd(printFrame){var url2=serverPath+"/PTMhtmlcanvas.js";var url=serverPath+"/PTMScript.js";var script2=printFrame.createElement('script');var script=printFrame.createElement('script');script2.src=url2;script2.type='text/javascript';script.src=url;script.type='text/javascript';printFrame.getElementsByTagName('head')[0].appendChild(script2);printFrame.getElementsByTagName('head')[0].appendChild(script)}


function appendIE(){

	popupViewer();
}


var Utility = function(obj){
	this.initzoom = function(){

	}
}

function EPrintWebPage(options){
	eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2(1.3==d)1.3=\'c\';b=1;f{2(5){2(g(5)){j=0 i()}7 4 0 6(\'8 9\')}7{4 0 6(\'8 9\')}}l(e){k(e.a+": "+e.h)}',22,22,'new|options|if|elementid|throw|ptmLicense|Error|else|license|error|name|param|body|undefined||try|unEncrypt|message|Chameleon|cml|alert|catch'.split('|'),0,{}))
}
