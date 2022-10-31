$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nomeDaTarefa').val();
        const novaTarefa = $(`<li>${nomeTarefa}</li>`)
        
        $(novaTarefa).appendTo('ul');
    })
    /*$('.status').click(function() {
        if ($(this).hasClass('ativar')) {
            $(this).removeClass('ativar').addClass('desativar');
        }
        else {
            $(this).removeClass('desativar').addClass('ativar');
        }
    });*/
})

$('ul').on("click", "li", function (e) {
    e.preventDefault();
    var ativo = $(this).addClass('activate');
    /*$(this).html(ativo ? "Desativar" : "Ativar").toggleClass("activate deactivate");*/
});

/*$('ul').on("click", "li", function (e) {
    e.preventDefault();
    const subli = $(`<del></del>`)
        
    $(subli).appendTo('li');
});*/

