onRealLoadCallbacks.push(function() {
    
    var qContainer = document.querySelector("#questionsContainer");
    function qMark() {
        return {
            x:randomRange(40,60),
            y:100,
            size:randomRange(80,300),
            opacity:randomRange(50,85),
            upSpeed:randomRange(15,30),
            sideSpeed:randomRange(-30,30),
            htmlObj:null,
            alive:true,
            create:function() {
                this.htmlObj = document.createElement("img")
                this.htmlObj.setAttribute("src","../img/question-mark.svg");
                this.htmlObj.setAttribute("class","qMark");
                this.draw();
                qContainer.appendChild(this.htmlObj);
                this.htmlObj.style.transform = "rotate("+this.sideSpeed+"deg)scale("+(this.size/100)+")";
            },
            destroy:function() {
                this.alive = false;
                qContainer.removeChild(this.htmlObj);
            },
            draw:function() {
                this.htmlObj.style.opacity = this.opacity/1000;
                this.htmlObj.style.left = this.x+"%";
                this.htmlObj.style.top = this.y+"%";
            },
            update:function() {
                if (!this.alive) return;
                this.x += this.sideSpeed/15;
                this.y -= this.upSpeed/15;
                this.opacity -= 1;
                this.draw();
                if (this.opacity < 0) {
                    this.destroy();
                }
            }
        }
    }
    
    var qMarks = [];
    
    setInterval(function() {
        if (randomRange(1,4) == 2 && qMark.length < 7) {
            var newQM = qMark();
            newQM.create();
            qMarks.push(newQM);
        }
        
        for (let qMark of qMarks) {
            qMark.update();
        }
        
    },27)
    
    setInterval(function() {
        for (let qMarkIndex in qMarks) {
            if (qMarks[qMarkIndex].alive == false) {
                qMarks.splice(qMarkIndex, 1);
            }
        }
        showHideEmail();
    },500)
    
    
    // -----------
    
    var inputNome = document.querySelector(".input-nome");
    var inputEmail = document.querySelector(".input-email");
    var submitBtn = document.querySelector(".send-btn");
    
    inputEmail.classList.add("hidden");
    
    var showHideEmail = function() {
        if (inputNome.value != null && inputNome.value.length > 0) {
            submitBtn.classList.add("godown");
            inputEmail.classList.remove("hidden");
        } else {
            submitBtn.classList.remove("godown");
            inputEmail.classList.add("hidden");
        }
    }
    
    inputNome.onchange = inputNome.onkeydown = inputNome.onfocus = inputNome.onblur = showHideEmail;
    
})
