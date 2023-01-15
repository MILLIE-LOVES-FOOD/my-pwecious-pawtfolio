var container = document.getElementById('container');

var fd = document.getElementsByName("fd");
for(var i = 0; i < fd.length; i++){
    fd[i].onchange = function(){
        if(this.checked == true){
           if(this.id == "fd-rowrev"){
            container.style.flexDirection = "row-reverse"
           }
           if(this.id == "fd-row"){
            container.style.flexDirection = "row"
           }
           if(this.id == "fd-colrev"){
            container.style.flexDirection = "column-reverse"
           }
           if(this.id == "fd-col"){
            container.style.flexDirection = "column"
           }
        }
    }
}

var jc = document.getElementsByName("jc");
for(var i = 0; i < jc.length; i++){
    jc[i].onchange = function(){
        if(this.checked == true){
           if(this.id == "jc-fs"){
            container.style.justifyContent = "flex-start"
           }
           if(this.id == "jc-fe"){
            container.style.justifyContent = "flex-end"
           }
           if(this.id == "jc-c"){
            container.style.justifyContent = "center"
           }
           if(this.id == "jc-sb"){
            container.style.justifyContent = "space-between"
           }
           if(this.id == "jc-sa"){
            container.style.justifyContent = "space-around"
           }
           if(this.id == "jc-se"){
            container.style.justifyContent = "space-evenly"
           }
        }
    }
}
var ai = document.getElementsByName("ai");
for(var i = 0; i < ai.length; i++){
    ai[i].onchange = function(){
        if(this.checked == true){
           if(this.id == "ai-str"){
            container.style.alignItems = "stretch"
           }
           if(this.id == "ai-fs"){
            container.style.alignItems = "flex-start"
           }
           if(this.id == "ai-fe"){
            container.style.alignItems = "flex-end"
           }
           if(this.id == "ai-c"){
            container.style.alignItems = "center"
           }
           if(this.id == "ai-bl"){
            container.style.alignItems = "baseline"
           }
        
        }
    }
}