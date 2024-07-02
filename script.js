$(document).ready(function () {
    // Adicionar tarefa ao enviar o formulário
    $('#taskForm').submit(function (event) {
        event.preventDefault();
        var taskName = $('#taskInput').val();
        if (taskName.trim() !== '') {
            $('#taskList').append('<li>' + taskName + '</li>');
            $('#taskInput').val('');
        }
    });

    // Marcar tarefa como concluída
    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});
