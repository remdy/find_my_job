(($) => {
    const listItem = $('#list-item');
    const list = $('#list');
    let noteValue = null;
    $('#button').on('click', function (event) {
        event.preventDefault();

        if (noteValue.trim().length <= 0) {
            alert('Заполните поле');
            return;
        }
        window.axios.post('/list', {
            note: noteValue
        }).then(function (response) {
            if (response.data == 1) {
                list.prepend('<li>' + noteValue + '</li>');
                noteValue = null;
                listItem.value = null;
            }
        })
    });

    listItem.on('keypress', function (event) {
        noteValue = event.target.value;
        console.log(noteValue);
    })
})(jQuery);
