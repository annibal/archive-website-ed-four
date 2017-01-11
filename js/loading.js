
function doneAllPromises() {
    setTimeout(function() {
        document.getElementById("loading").classList.add("slow")
        document.getElementById("loading").classList.add("fade-out")
        setTimeout(function() {
            document.getElementById("loading").classList.add("hidden")
            
            if (onRealLoadCallbacks != null) {
                for (let callback of onRealLoadCallbacks) {
                    callback();
                }
            }
        },800)
    },300)
}
Promise.all(modularityPromises.concat([less.pageLoadFinished])).then(doneAllPromises,doneAllPromises)
