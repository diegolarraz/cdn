(function (window) {
    console.log("sjfbakjbsfsajbdkabdkajsbdkasjbdkb");
    // declare
    var myApp = {};

    // your sdk init function
    myApp.init = function (apiKey, userId) {
        console.log("CONNECTED TO GS_SDK" + " " + "hello" + userId);
    };

    myApp.playStarted = function () {
        alert("THIS GAME HAS STARTED")
    };

    myApp.playFinished = function () {
        alert("THIS GAME HAS FINISHED")
    };

    // define your namespace myApp
    window.myApp = myApp;

})(window, undefined);

