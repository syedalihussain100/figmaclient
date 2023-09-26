/*<![CDATA[*/ 
var TW_box=document.querySelector("#TW_box"),Cookie_btn=document.querySelector("#Cookie_btn"),ckErrMes="Cookie can't be set! Please unblock this site from the cookie setting of your browser.";if(null!=TW_box){Cookie_btn.onclick=()=>{document.cookie="CookieConsentByFineshop=Accepted; max-age=2592000; path=/",document.cookie?TW_box.classList.add("acptd"):alert(ckErrMes)};let e=document.cookie.indexOf("CookieConsentByFineshop=Accepted");-1!=e?TW_box.classList.add("TWhide"):TW_box.classList.remove("TWhide")} 
/*]]>*/
