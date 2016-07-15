$(document).ready(function() {
    var clone;
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
        $.ui.dialog.prototype._focusTabbable = function() {};
        $("#main").dialog({
            modal: true,
            of: window,
            buttons: {
                SAVE: function() {
                    $(this).dialog("close");
                },
                ADD: function() {
                    $(this).dialog("add");
                }
            }
        });
    });
    $("#edit").click(function() {
        $.ui.dialog.prototype._focusTabbable = function() {};
        $("#main1").dialog();
    });

    /*$(function(){
    var click=[$('#add').click(function())];
    $("#add").click(function(){
    var a=$("#main").dialog().clone();
    var b=$("#main").dialog().clone();
    var c=$("#main").dialog().clone();
    var d=$("#main").dialog().clone();
    obj=[a,b,c,d];
    document.getElementById(obj[0]).innerHTML =("#span1");
    document.getElementById(obj[1]).innerHTML =("#span1");
    document.getElementById(obj[2]).innerHTML =("#span1");
    document.getElementById(obj[3]).innerHTML =("#span1");
    });
    });*/
});