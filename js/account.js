$(document).ready(function () {
    let waveAni = gsap.timeline();
    waveAni.to("#wave", { scale: 3, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { waveAni.pause(); }, })
        .to("#wave", { scale: 5, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { waveAni.pause(); }, })
        .to("#wave", { scale: 7, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { waveAni.pause(); }, })
        .to("#wave", { scale: 12, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { waveAni.pause(); }, });

    waveAni.pause();

    let account;
    
    fetch('js/account.json')
        .then(response => response.json())
        .then(data => {
            account = data;
    });

    gsap.from(".form-container", {
        scale: 0,
        duration: 0.8,
        ease: Bounce.easeOut
    });

    let infowaveAni = gsap.timeline({
        scrollTrigger: {
            trigger: '.info-container',
        }
    });

    infowaveAni.from(".info-container", { x: -200, opacity: 0, duration: 1 })
        .from(".input-container", { x: -200, opacity: 0, duration: 1 }, "-=0.5");

    let pwpass = false;

    $(":password").focus(function () {
        $(".check-password").slideDown(300);
    })

    let stack2 = [];
    $(":password").keyup(function () {
        let lowerCase = /[a-z]/g;
        let upperCase = /[A-Z]/g;
        let num = /[0-9]/g;
        let stack = [];

        if ($("#pw").val().length > 0) {
            $(".check-password").show();
        }
        if ($("#pw").val().match(lowerCase)) {
            $("#1low").attr("src", "assets/tick.png");
            stack.push(1);
        }
        else {
            $("#1low").attr("src", "assets/cross.png");
            if (stack[0] == 1) {
                console.log(stack.pop());
            }
        }
        if ($("#pw").val().match(upperCase)) {
            $("#1up").attr("src", "assets/tick.png");
            stack.push(2);
        }
        else {
            $("#1up").attr("src", "assets/cross.png");
            if (stack[1] == 2)
                console.log(stack.pop());
        }
        if ($("#pw").val().match(num)) {
            $("#1num").attr("src", "assets/tick.png");
            stack.push(3);
        }
        else {
            $("#1num").attr("src", "assets/cross.png");
            if (stack[2] == 3)
                console.log(stack.pop());
        }
        if ($("#pw").val().length >= 8) {
            $("#8char").attr("src", "assets/tick.png");
            stack.push(4);
        }
        else {
            $("#8char").attr("src", "assets/cross.png");
            if (stack[3] == 4)
                console.log(stack.pop());
        }
        if (stack.length > stack2.length) {
            for (let i = 0; i < 4; i++) {
                if (stack.length == i + 1)
                    waveAni.play(i * 0.5);
            }
        }
        if (stack.length < stack2.length) {
            waveAni.timeScale(2).tweenFromTo(waveAni.time(), stack.length * 0.5);
        }
        stack2 = stack;
    });
    $(".register-submit").click(function (e) {
        // e.preventDefault();
        if ($("#cpw").val() == $("#pw").val() && stack2.length == 4) {
            pwpass = true;
            account.user.push({ "email": $("#email").val(), "name": $("#name").val(), "pw": $("#pw").val(), "role": "user" });
            $("#cpw").css("border", "none");
            $("#warning-msg").slideUp();
            $("#success-msg").slideDown();
        } else {
            pwpass = false;
            $("#cpw").css("border", "1px solid red");
            $("#success-msg").slideUp();
            $("#warning-msg").slideDown();
        }

        var result = account["user"].find(function (item, index, array) {
            console.log(item.email);
            return item.email == $("#loginEmail").val() && item.pw == $("#loginPw").val();
        });
        console.log(result);
        if (typeof result === 'undefined') {
            if (waveAni.time() == 2)
                waveAni.tweenFromTo(2, 0).timeScale(2);
            else
                waveAni.pause(0);
            $("#loginEmail").css("background-color", "rgb(255, 197, 197)");
            $("#loginPw").css("background-color", "rgb(255, 197, 197)");
            $("#warning-msg2").slideDown();
            $("#success-msg2").slideUp();
        } else {
            waveAni.tweenFromTo(0, 2).timeScale(2);
            $("#loginEmail").css("background-color", "white");
            $("#loginPw").css("background-color", "white");
            $("#warning-msg2").slideUp();
            $("#success-msg2").slideDown();
            setTimeout(function () {
                if(result.role == "customer")
                    window.location.replace("indexCustomer.html");
                if(result.role == "agent")
                    window.location.replace("indexAgent.html");
                if(result.role == "manager")
                    window.location.replace("indexManager.html");
            }, 3000);
        }
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#card-img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }

    $("#agentcard").change(function () {
        readURL(this);
    });

    $("#agentcb").click(function () {
        if ($(this).prop("checked") == true) {
            $("#agent-container").slideDown();
            $("#agent-container").css("display", "flex");
        } else if ($(this).prop("checked") == false) {
            $("#agent-container").slideUp();
        }
    });

    $("#drop-area").on('dragenter', function (e) {
        e.preventDefault();
        $(this).css('background', '#BBD5B8');
    });

    $("#drop-area").on('dragover', function (e) {
        e.preventDefault();
    });

    $("#drop-area").on('drop', function (e) {
        $(this).css('background', 'transparent');
        e.preventDefault();
        var image = e.originalEvent.dataTransfer.files;
        console.log(e);
        if (image.length > 0) {
            var file = image[0];
            $("#card-img").attr('src', "assets/" + file.name);
        }
    });

    $("#forgetpw").click(function () {
        gsap.to("#forgetpw-section", { height: "100vh", duration: 1, ease: Bounce.easeOut });
    });

    $("#closeForgetPw").click(function () {
        gsap.to("#forgetpw-section", { height: "0vh", duration: 1, ease: Power2.easeOut });
    });

    $("#forgetpwSend").click(function () {
        if ($("#loginEmail2").val() != "")
            $("#success-msg3").slideDown();
    });
});

