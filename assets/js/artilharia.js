$(document).ready(function () {
    $('#example').DataTable({
        // remove o campo de paginação
        "paging": false,
        // remove a filtragem por ordem
        // "ordering": false,
        "info": false,
        scrollY: '310px',
        scrollCollapse: true,
        paging: false,
        "language":{
            "search": "Buscar jogador",
            "zeroRecords": "Jogador não encontrado."
        },
        "order": [ 2, 'desc']
    });
});