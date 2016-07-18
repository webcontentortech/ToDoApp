$(document).ready(function() {
    var clone;
    var items = [];
    var adddata={date:"",title:"",descrip:""};
    var obj;
    $("#main").hide();
    $("#main1").hide();
    $("#date").datepicker({
        yearRange: "2016:2020",
        minDate: '0',
        changeMonth: true,
        changeYear: true,
    });
    $("#date1").datepicker({
        yearRange: "2016:2020",
        minDate: '0',
        changeMonth: true,
        changeYear: true,
    });
    $("#add").click(function() {
        $("#date").val('');
        $("#title").val('');
        $("#description").val('');
        $.ui.dialog.prototype._focusTabbable = function() {};
        $("#main").dialog({
            modal: true,
            buttons: {
                SAVE: function() {
                    var date=$("#date").val();
                    var title=$("#title").val();
                    var descrip=$("#description").val();
                    adddata.date = date;
                    adddata.title = title;
                    adddata.descrip = descrip;
                    console.log(adddata);
                    items.push(adddata);
                    $(this).dialog("close");
                    loadDataInDiv(items);
                }
            }
        });
    });
    $("#edit").click(function() {
        $.ui.dialog.prototype._focusTabbable = function() {};
        $("#main1").dialog();
    });

    var loadDataInDiv = function(items){
        var div = '';
        $.each(items, function(key, value){
            div += '<tr><td><div style="color:red;width:100px;height:auto; padding: auto;border-style:solid;border-color:red;" id="div1">'+value.date+'<br>'+value.title+'<br>'+value.descrip+'<div><td><tr>';
        });
        $('.box1').append(div);
        $("#div1").draggable();
    }
});