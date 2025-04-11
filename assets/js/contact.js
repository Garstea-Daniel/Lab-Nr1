$('#contact-form').on('submit', function(e) {
    e.preventDefault(); 

    const email = $('input[name="email"]').val();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru)$/;

    if (!emailPattern.test(email)) {
        $('#raspuns').html('<p style="color: red;">Emailul trebuie să conțină @ și să se termine cu .com sau .ru.</p>');
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'contact_process.php',
        data: $(this).serialize(),
        success: function(response) {
            $('#raspuns').html('<p style="color: green;">' + response + '</p>');
            $('#contact-form')[0].reset();
        },
        error: function() {
            $('#raspuns').html('<p style="color: red;">Eroare la trimiterea formularului.</p>');
        }
    });
});