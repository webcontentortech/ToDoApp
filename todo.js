$(document).ready(function() {
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
        $("#main").dialog();
    });
    $("#edit").click(function() {
        $("#main1").dialog();
    });
    var a=$("#main").val();
    console.log(a);
});