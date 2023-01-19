var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function (e) {
    var offsetX = 0.5 - e.pageX / w, //cursor position X
        offsetY = 0.5 - e.pageY / h, //cursor position Y
        dy = e.pageY - h / 2, //@h/2 = center of poster
        dx = e.pageX - w / 2, //@w/2 = center of poster
        theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
        angle = theta * 180 / Math.PI - 90, //convert rad in degrees
        offsetPoster = $menu.data('offset'),
        transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

    //get angle between 0-360
    if (angle < 0) {
        angle = angle + 360;
    }

    //poster transform
    $menu.css('transform', transformPoster);

    //parallax for each layer
    $item.each(function () {
        var $this = $(this),
            offsetLayer = $this.data('offset') || 0,
            transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

        $this.css('transform', transformLayer);
    });
});

// SMTP JS EMAIL

let sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", handleFormSubmit);


function handleFormSubmit() {


    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let message = document.getElementById("message").value;



    // envoyer l'email avec la librairie SMTPJS 
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hmerniz.dev@proton.me",
        Password: "08840675C440E3C32B0DDC5174DBAB17214A",
        To: 'hmerniz.dev@proton.me',
        From: "hmerniz.dev@gmail.com",
        Subject: "After watching your portfolio ...",
        Body: email + phoneNumber + message
    }).then(
        message => alert(message)
    );
}