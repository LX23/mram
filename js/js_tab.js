/**
 * Created by hxsd on 2016/8/16.
 */
function js_tab(div){
    var oBox=document.getElementById(div);
    var abtn=oBox.getElementsByClassName("_btn_");
    var aimg=oBox.getElementsByClassName("_pic_");
    for(var i=0;i<abtn.length;i++){
        abtn[i].inner=i;
        abtn[i].onmouseover=function(){
            for(var j=0;j<abtn.length;j++){
                abtn[j].className='_btn_';
                aimg[j].style.display="none";
            }
            this.className='_btn_ ac';
            aimg[this.inner].style.display='block';
        }
    }
}

