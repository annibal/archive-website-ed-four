onRealLoadCallbacks.push(function() {
    
    var sidescrollers = document.querySelectorAll('.sidescroller-inner');
    
    window.sidescroll = {
        sidescrolling:false,
        htmlObj:null,
        lastX:null
    };
    
    function fnClearSidescroll() {
        window.sidescroll.sidescrolling = false;
        if (window.sidescroll.htmlObj != null) {
            window.sidescroll.htmlObj.classList.remove("scrolling");
        }
        window.sidescroll.htmlObj = null;
        window.sidescroll.lastX = null;
    }
    
    sidescrollers.forEach(function(ssObj) {
        ssObj.addEventListener("mousedown", function(evt) {
            window.sidescroll.htmlObj = this;
            window.sidescroll.htmlObj.classList.add("scrolling");
            window.sidescroll.lastX = evt.screenX;
            window.sidescroll.sidescrolling = true;
        });
        
        this.addEventListener("mouseup", fnClearSidescroll);
    })
    
    document.addEventListener("mouseup", fnClearSidescroll);
    document.addEventListener("mouseleave", fnClearSidescroll);
    // document.addEventListener("mouseout", fnClearSidescroll);
    
    document.addEventListener("mousemove", function(evt) {
        if (window.sidescroll.sidescrolling = true
            && window.sidescroll.htmlObj != null
            && window.sidescroll.lastX != null
        ) {
            var deltaX = (evt.screenX - window.sidescroll.lastX);
            window.sidescroll.htmlObj.scrollLeft += -deltaX;
            window.sidescroll.lastX = evt.screenX
        }
    }) 
    
    
    
    // ---- 
    
    var edmundoContainer = document.querySelector("#edmundo-container");
    for (let i=0; i<10; i++) {
        var edmundoItem = document.createElement("div");
        edmundoItem.classList.add("edmundo-item");
        edmundoItem.classList.add("box-container");
        var edmundoItemInner = document.createElement("div");
        edmundoItemInner.classList.add("box-inner");
        
        var width = randomRange(2,9)*80;
        var height = randomRange(2,9)*80;
        var imgProvider = ([
            "placecage.com",
            "placecage.com/g",
            "placecage.com/c",
            "placecage.com/gif",
            "fillmurray.com",
            "fillmurray.com/g",
            "stevensegallery.com",
            "stevensegallery.com/g",
        ])[randomRange(0,8)];
        var imgUrl = "http://www."+imgProvider+"/"+width+"/"+height;
        edmundoItemInner.style.backgroundImage = 'url('+imgUrl+')';
        
        edmundoItem.appendChild(edmundoItemInner);
        edmundoContainer.appendChild(edmundoItem)
    }
});
