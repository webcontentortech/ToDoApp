$(document).ready(function() {
    var item={date:"",title:"",descrip:"",hour:"",min:"",sec:""};
    var items = [];
    var newitems=[];
    var addData={date:"",title:"",descrip:"",hour:"",min:"",sec:""};
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    $("#main").hide();
    $("#date").datepicker({
        yearRange: "2016:2020",
        minDate: '0',
        changeMonth: true,
        changeYear: true,
    });
    $("#add").click(function() {
        $("#date").val("");
        $("#title").val("");
        $("#description").val("");
        $("#h").val("");
        $("#m").val("");
        $("#s").val("");
        $.ui.dialog.prototype._focusTabbable = function() {};
        $("#main").dialog({
            buttons: {
                SAVE: function() {
                    var date=$("#date").val();
                    var title=$("#title").val();
                    var descrip=$("#description").val();
                    var hour=$("#h").text(hours);
                    console.log(hour);
                    var min=$("#m").val();
                    var sec=$("#s").val();
                    console.log(hour)
                    addData.date = date;
                    addData.title = title;
                    addData.descrip = descrip;
                    addData.hour=hour;
                    addData.min=min;
                    addData.sec=sec;
                    console.log(addData);
                    items.push(addData);
                    $(this).dialog("close");
                    loadDataInDiv(items);
                }
            }
        });
    });

    var loadDataInDiv = function(items){
        var div = '';
        $.each(items, function(key, value){
            div='<body><table><tr><td style="color:red;width:100px;height:auto; padding:auto;border-style:solid;border-color:red;" title="Edit" id="div1"><input type="text" value='+value.date+'><br><input type="text" value='+value.title+'><br><textarea rows="" cols="">'+value.descrip+'</textarea>';
        });
        $(".box1").append(div);
        $("#div1").draggable();
        $("#div1").click(function(){
            $(this).dialog({
                buttons:{
                    SAVE:function(){
                        $(this).dialog("close");
                        loadDataInDiv(item);
                    }
                }
            });
        });
    }
});