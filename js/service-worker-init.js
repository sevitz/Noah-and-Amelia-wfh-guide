if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(reg){
        }).catch(function(err) {
        console.log("No it didn't. This happened:", err)
    });
}
