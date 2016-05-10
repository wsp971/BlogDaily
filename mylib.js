
/*扩展XMLHttpRequest 对象*/
(function(window){
    if(window.XMLHttpRequest===undefined){
        window.XMLHttpRequest=function(){
            try{
                return new XMLHttpRequest();
            }catch(e1){
                try{
                    return new ActiveXObject("mircrosoft object support");

                }catch(e2){
                    throw new Error("XMLHttpRequest is not support");
                }
            }
        }
    }

function getMessage(){
    var xhr=new XMLHttpRequest();
    xhr.setRequestHeader("Content-type","text/plain");
    xhr.open("get",url,true);
    xhr.send(null);
}
function postMessage(url,msg){
    var xhr=new XMLHttpRequest();
    xhr.setRequestHeader("Content-type","text/html;charset=UTF-8");
    xhr.open("post",url,true);
    xhr.send(msg);
}

function getText(url,callback){
    var xhr=new XMLHttpRequest();
    xhr.setRequestHeader("Content-type","text/html;charset=UTF-8");
    xhr.open("get",url,true);
    xhr.onreadystatechange=function(){
        if(xhr.status===200&&xhr.readyState===4){
            var type=xhr.getResponseHeader("Content-type");
            if(type.indexOf("xml")!== -1&&xhr.responseXML){
                callback(xhr.responseXML);
            }else if(type=="application/json"){
                callback(JSON.parse(xhr.responseText));
            }else{
                callback(xhr.responseText);
            }
        }
    }
    xhr.overrideMimeType("text/plain; charset=utf-8");
    xhr.send(null);
}

})(window)




