$(function() {
    $('#contact-form input[type=submit]').click(sendForm);
});

function sendForm(ev) {
    const form = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
                url: "https://formspree.io/doronin.andrii.lv@gmail.com",
                method: "POST",
                data: {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    feedback: $('#message').val()
                },
                dataType: "json"
            })
            .done(() => $('form').attr('class', 'invisible-form'), () => $('#invisible-thank-div').attr('id', 'visible-thank-div'))
            .fail(() => $('form').attr('class', 'invisible-form'), () => $('#invisible-error-div').attr('id', 'visible-error-div'));
    }
}
