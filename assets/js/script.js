$(document).ready(function () {
    $('#example').DataTable({
        // remove o campo de paginação
        "paging": false,
        // remove a filtragem por ordem
        "ordering": false,
        "info": false,
        "responsive": {
            "details": {
                "type": 'column'
            }
        },
        "columnDefs": [
            { targets: [0, 1], visible: true},
            {
            "className": 'dtr-control',
            "orderable": false,
            "targets":   0
        } ],
        "order": [ 0, 'asc']
    });
});