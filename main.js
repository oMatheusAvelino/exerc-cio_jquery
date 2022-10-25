$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nomeDaTarefa').val();
        const novaTarefa = $('<li></li>');
        $(`${nomeTarefa}`).appendTo(novaTarefa);
        
        $(novaTarefa).appendTo('ul');
        console.log;(nomeTarefa)
    })
})