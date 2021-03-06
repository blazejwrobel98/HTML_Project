﻿window.onload = function () {
    var todo_list = ['Strona internetowa z minimum 4 podstronami',
        'Struktura folderów i plików powinna być przejżysta i jasna',
        'Strona musi być responsywna',
        'W menu przy każdej pozycji powinien znajdować się odpowiedni obrazek w formacie svg',
        'Na jednej z podstron umieścić film przy pomocy tagu <b>video</b>',
        'Każda z pozycji menu powinna mieć odmienne stany w zależności od akcji',
        'a. wyjściowy', 'b. po najechaniu (animacja)', 'c. przebywanie na danej podstronie',
        'Na jednej z podstron powinna znajdować się lista ToDo do której będzie można dodawać elementy, usuwać dowolne elementy, modyfikować dowolne elementy'];
    var target = document.getElementById('todolist');
    todo_list.forEach(function (item) {
        var counter = document.getElementsByName('del').length;
        target.innerHTML += '<dt name="todolist_dt" id='+counter+'><input type="button" class="edit" value="EDIT" onclick="Edit(' + counter + ');"><input type="checkbox" name="del" value=' + counter + '>' + item + '</dt>';
        counter++;
    });
}
function Edit(val) {
    var items = document.querySelectorAll('dt[name="todolist_dt"]');
    let dels = [];
    items.forEach((checkbox) => {
        dels.push(checkbox.value);
    });
    var item = items[val].innerText;
    document.getElementById(val).innerHTML = '<dt name="todolist_dt" id=' + val + '><input type="text" id="edited" value="' + item + '"><input type="button" class="edit" value="SAVE" onclick="EditValue('+val+');"></dt>';
}
function EditValue(val) {
    var item = document.getElementById("edited").value;
    document.getElementById(val).innerHTML = '<dt name="todolist_dt" id=' + val + '><input type="button" class="edit" value="EDIT" onclick="Edit(' + val + ');"><input type="checkbox" name="del" value=' + val + '>' + item + '</dt>';
}
function AddItem() {
    var input = document.getElementById('add').value;
    var target = document.getElementById('todolist');
    var counter = document.getElementsByName('del').length;
    counter++;
    target.innerHTML += '<dt><input type="checkbox" name="del" value=' + counter + '>' + input + '</dt>';
    document.getElementById('add').value = '';
}
function RemoveItem() {
    const checkboxes = document.querySelectorAll('input[name="del"]:checked');
    let dels = [];
    checkboxes.forEach((checkbox) => {
        dels.push(checkbox.value);
    });
    dels.forEach(DelChild)
};
function DelChild(item) {
    let alls = [];
    const all = document.querySelectorAll('input[name="del"]');
    all.forEach((checkbox) => {
        alls.push(checkbox.value);
    });
    var num = item;
    alls.forEach(function (index) {
        var list = document.getElementById("todolist").children;
        console.log(index, num);
        console.log(list);
        if (index == num) {
            var correct = index;
            (list[correct]).remove();
            return true;
        }
    });
}