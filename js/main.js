let insertionSort = new InsertionSort();

$().ready(function() {

    $('#insert').click(insertElement);
    $('#item').keydown(function(e) {
        //verifica se o 'enter' foi pressionado
        if (e.which == 13) insertElement();
    });
    $('#sort').click(sortElements);
    $('#clear').click(clearElements);
});
function insertElement() {
    let item = parseInt($('#item').val());
    if (item) {
        insertionSort.insert(item);
        $('#item').val('');
        showElements();
    }
}
function sortElements() {
    if (insertionSort.isEmpty()) {
        alert('Vazio');
    } else {
        insertionSort.sort();
        showElements();
    }
}
function clearElements() {
    insertionSort.clear();
    showElements();
}
function showElements() {
    $('#output').empty();
    $('#output').append('<span class="badge badge-warning" style="margin:5px;color:white;">' +
        insertionSort.print('</span><span class="badge badge-warning" style="margin:5px;color:white;">') + '</span></span>');
}
