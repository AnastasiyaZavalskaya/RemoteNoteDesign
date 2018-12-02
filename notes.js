var save = function () {
    var elem = document.getElementById('createNoteForm');
    elem.style.display = 'none';
};

var edit = function () {

};

window.onload = function () {
    var date = new Date();
    var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    document.getElementById('currentTime').innerHTML = time;
    window.setTimeout(arguments.callee, 1000);
};

var toNotes = function () {
    var first = document.getElementById('createNoteForm');
    var second = document.getElementById('profileBlock');
    var third = document.getElementById('noteBody');
    first.style.display = 'none';
    second.style.display = 'none';
    if (third.style.display = 'none') {
        third.style.display = 'inline';
    }
    else third.style.display = 'none';

};

var createNote = function () {
    var first = document.getElementById('profileBlock');
    var second = document.getElementById('noteBody');
    first.style.display = 'none';
    second.style.display = 'none';
};

var goBack = function () {
    var first = document.getElementById('profileBlock');
    first.style.display = 'inline';
};


