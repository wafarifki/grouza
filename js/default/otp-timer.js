(function () {
    'use strict';

    var optcount = 60;
    var optcounter = setInterval(otptimer, 1000); //1000 will run it every 1 second

    function otptimer() {
        optcount = optcount - 1;
        if (optcount <= 0) {
            clearInterval(optcounter);
            document.getElementById("resendOTP").innerHTML = '<a class="resendOTP" href="">Resend OTP</a>';
        } else {
            document.getElementById("resendOTP").innerHTML = 'Wait ' + optcount + ' secs';
        }

        if (optcount <= 10) {
            document.getElementById("resendOTP").style.color = "red";
        }
    }

})();