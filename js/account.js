let tl = gsap.timeline();
tl.to("#wave", { scale: 3, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { tl.pause(); }, })
    .to("#wave", { scale: 5, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { tl.pause(); }, })
    .to("#wave", { scale: 7, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { tl.pause(); }, })
    .to("#wave", { scale: 12, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { tl.pause(); }, });

tl.pause();

let account = {
    customer: [
        { "email": "customer@email.com", "name": "Hugo", "pw": "Customer1" },
        { "email": "customer2@email.com", "name": "Clark", "pw": "Customer2" },
        { "email": "customer3@email.com", "name": "Thomas", "pw": "Customer3" }
    ],
    manager: [
        { "email": "manager@email.com", "name": "Manager So", "pw": "Manager1" },
        { "email": "manager2@email.com", "name": "Manager Chan", "pw": "Manager2" },
    ],
    agent: [
        { "email": "agent@email.com", "name": "Agent Hugo", "pw": "Agent123" },
        { "email": "agent2@email.com", "name": "Agent Clark", "pw": "Agent456" },
        { "email": "agent3@email.com", "name": "Agent Thomas", "pw": "Agent789" }
    ]
};

$(document).ready(function () {
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
                    tl.play(i * 0.5);
            }
        }
        if (stack.length < stack2.length) {
            tl.timeScale(2).tweenFromTo(tl.time(), stack.length * 0.5);
        }
        stack2 = stack;
    });
    $(":submit").click(function (e) {
        // e.preventDefault();
        if ($("#cpw").val() == $("#pw").val() && stack2.length == 4) {
            pwpass = true;
            account.customer.push({ "email": $("#email").val(), "name": $("#name").val(), "pw": $("#pw").val() });
            console.log(account);
            $("#cpw").css("border", "none");
            $("#warning-msg").slideUp();
            $("#success-msg").slideDown();
        } else {
            pwpass = false;
            $("#cpw").css("border", "1px solid red");
            $("#success-msg").slideUp();
            $("#warning-msg").slideDown();
        }

        for (i in account) {
            console.log(i);
            var result = account[i].find(function (item, index, array) {
                console.log(item.email);
                return item.email == $("#loginEmail").val() && item.pw == $("#loginPw").val();
            });
            if (typeof result === 'object')
                break;
        }
        console.log(result);
        if (typeof result === 'undefined') {
            if (tl.time() == 2)
                tl.tweenFromTo(2, 0).timeScale(2);
            else
                tl.pause(0);
            $("#loginEmail").css("background-color", "rgb(255, 197, 197)");
            $("#loginPw").css("background-color", "rgb(255, 197, 197)");
            $("#warning-msg2").slideDown();
            $("#success-msg2").slideUp();
        } else {
            tl.tweenFromTo(0, 2).timeScale(2);
            $("#loginEmail").css("background-color", "white");
            $("#loginPw").css("background-color", "white");
            $("#warning-msg2").slideUp();
            $("#success-msg2").slideDown();
            setTimeout(function () {
                window.location.replace("index.html");
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
        if(image.length>0){
            var file = image[0];
            $("#card-img").attr('src',"assets/"+file.name);
        }
    });
});

