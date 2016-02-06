/* Funciones jQuery */
$(window).load(function () {
    list();
    loadRol();
});


function loadRol() {
    Execute(scanInfo('loadRol', true), 'General/CtlGeneral', '', 'buildSelect(info,"selRol");');
}

function save() {
    if (validateForm() === true) {
        Execute(scanInfo('save', true), 'Configuration/CtlUser', '', 'closeWindow();list();');
    }
}

function list() {
    Execute(scanInfo('list'), 'Configuration/CtlUser', '', 'buildPaginator(info);');
}


function search(id) {
    $("#txtId").val(id);
    Execute(scanInfo('search', true), 'Configuration/CtlUser', '', 'showData(info);');
}


function showData(info) {
    $("#txtId").val(info[0].id);
    $("#txtFirstName").val(info[0].primer_nombre);
    $("#txtSecondName").val(info[0].segundo_nombre);
    $("#txtFirstLastName").val(info[0].primer_apellido);
    $("#txtSecondLastName").val(info[0].segundo_apellido);
    $("#txtUser").val(info[0].usuario);
    refreshSelect("selRol", info[0].rol);
    $("#txtDescription").val(info[0].descripcion);
    openWindow();
    showButton(false);
}


function update() {
    if (validateForm() === true) {
        Execute(scanInfo('update', true), 'Configuration/CtlRol', '', 'closeWindow();list();');
    }
}


function deleteInfo() {
    if (validateForm() === true) {
        Execute(scanInfo('delete', true), 'Configuration/CtlRol', '', 'closeWindow();list();');
    }
}
