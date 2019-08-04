
//增加
function createElement_DIV(){
    var div_ele=document.getElementById("divid");
    
    if(div_ele==null){
        //出现在内存里,还没有挂到文档树上
        div_ele=document.createElement("div");
        div_ele.id="divid";
        //在js中 font-size要转换成fontSize
        div_ele.style.fontSize="30px";
        div_ele.style.backgroundColor="pink";
        div_ele.style.width="200px";
        //出现在内存里,还没有挂到文档树上
        var txt_node=document.createTextNode("hello world");
        //把文本节点追加到div中
        div_ele.appendChild(txt_node);
        //把div追加到body中
        document.body.appendChild(div_ele);
    }else{
        div_ele.style.display="block";
    }
    
}

function hide_DIV(){
   var div_ele=document.getElementById("divid");
   if(div_ele!=null){
       div_ele.style.display="none";
   }
}

function span3or4_RegisterEvent_Click(){
    var span3_ele=document.getElementById("span3");
    var span4_ele=document.getElementById("span4");
    if(span3_ele!=null){
        span3_ele.onclick=function(){
            //id为span3的标记注册事件
            createElement_DIV();
        };
    }
    if(span4_ele!=null){
        span4_ele.onclick=hide_DIV;
    }
}
function createElement_span5(){
    var span_ele=document.createElement("span");
    span_ele.id="span5";
    span_ele.style.cursor="pointer";
    span_ele.onclick=createElement_DIV;
    var br_ele=document.createElement("br");
    var text_node=document.createTextNode("生成");
    span_ele.appendChild(text_node);
    document.body.appendChild(br_ele);
    document.body.appendChild(span_ele);
}
function createElement_span6(){
    var span_ele=document.createElement("span");
    span_ele.id="span6";
    span_ele.style.cursor="pointer";
    span_ele.onclick=hide_DIV;
    var text_node=document.createTextNode("隐藏");
    span_ele.appendChild(text_node);
    document.body.appendChild(span_ele);
}



//查询
//演示getElementById()
function testGetElementById(){
    var span_ele=document.getElementById("span7");
    if(span_ele!=null){
        span_ele.onclick=function(){
            alert(span_ele.nodeName);
            alert(span_ele.TypeName);
            alert(span_ele.firstChild.nodeValue);
            alert(span_ele.firstChild.nodeType);
            alert(span_ele.firstChild.nodeName);
        }
    }
}
function testGetElementById1(){
    var span_ele=document.getElementById("span8");
    if(span_ele!=null){
        span_ele.onclick=function(){
            var ul_ele=document.getElementById("ulid");
            if(ul_ele!=null){
                alert(ul_ele.nodeName+" "+ul_ele.nodeType+" "+ul_ele.nodeValue);
                var allLi=ul_ele.childNodes;
                alert(allLi.length)
                for(var i=0;i<allLi.length;i++){
                    if(allLi[i].nodeName=="LI"){
                        alert(allLi[i].firstChild.nodeValue);
                    }
                    
                }
            }
        };
    }
}
//演示getElementsByName 返回结果是一个数组
function testGetElementsByName1(){
    var span_ele=document.getElementById("span9");
    if(span_ele!=null){
        span_ele.onclick=function(){
            var ul_ele=document.getElementsByName("ulname");
            if(ul_ele!=null){
                alert(ul_ele[0].nodeName+" "+ul_ele[0].nodeType+" "+ul_ele[0].nodeValue);
                var allLi=ul_ele[0].childNodes;
                alert(allLi.length)
                for(var i=0;i<allLi.length;i++){
                    if(allLi[i].nodeName=="LI"){
                        alert(allLi[i].firstChild.nodeValue);
                    }
                    
                }
            }
        }
    }
}
function testGetElementsByName2(){
    var span_ele=document.getElementById("span10");
    if(span_ele!=null){
        span_ele.onclick=function(){
            var txts=document.getElementsByName("txt");
            for(var i=0;i<txts.length;i++){
                alert(txts[i].value);
            }
        };
    }
}
//对象.getElementsByTagName
function testElementByTagName(){
    var span_ele=document.getElementById("span11");
    if(span_ele!=null){
        span_ele.onclick=function(){
            var form_ele=document.getElementsByName("test_form");
            var inputs=form_ele[0].getElementsByTagName("input");
            for(var i=0;i<inputs.length;i++){
                if(inputs[i].type=="text"){
                    alert(inputs[i].value);
                }
            }

        };
    }
}
//window.表单名.表单元素名
//window.form[数字].表单控件名  数字从0开始
function testGetDocumentForm(){
    var span_ele=document.getElementById("span12");
    if(span_ele!=null){
        span_ele.onclick=function(){
            //var txts=document.test_form.txt;
            var txts=document.forms[0].txt;
            for(var i=0;i<txts.length;i++){
                alert(txts[i].value);
            }
        };
    }
}
//修改
function updateNode(){
    var span_ele=document.getElementById("span13");
    if(span_ele!=null){
        span_ele.onclick=function(){
            var a_ele=document.getElementById("aid");
            a_ele.href="http://www.zhaopin.com";
            a_ele.innerHTML="智联招聘";
        }
    }
}

//删除

function deleteNode(){
    var span_ele=document.getElementById("span14");
    if(span_ele!=null){
        span_ele.onclick=function(){
            var ul_ele=document.getElementById("ulid");
            if(ul_ele!=null){
                    //该方法不对
                    /*for(var i=0;i<ul_ele.childNodes.length;i++){
                    ul_ele.removeChild(ul_ele.childNodes[i]);*/
                    //会自动向前顶,效率不高,不建议
                    /* while(ul_ele.childNodes.length>0){
                        ul_ele.removeChild(ul_ele.childNodes[0]);
                    }*/
                    while(ul_ele.childNodes.length>0){
                        ul_ele.removeChild(ul_ele.childNodes[ul_ele.childNodes.length-1]);
                    }
                }
            }
        }
    }





window.onload=function(){
    span3or4_RegisterEvent_Click();
    createElement_span5();
    createElement_span6();
    testGetElementById();
    testGetElementById1();
    testGetElementsByName1();
    testGetElementsByName2();
    testElementByTagName();
    testGetDocumentForm();
    updateNode();
    deleteNode();
}