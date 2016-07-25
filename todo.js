$(document).ready(function(){
    var starthour;
    var startmin;
    var date;
    var editHours;
    var editminute;
    var ampm;
    var editDate;
    var editTitle;
    var editDescrip;
    var hours;
    var minutes;
    var items = [];
    var latestItems=[];
    var addData={date:"",title:"",descrip:"",hour:"",min:"",AMPM:""};
    var latestData={Hour:"",Min:"",AMPM:"", Date:"",Title:"",Descrip:""};
    var today=new Date();
    var currentTime;
    var alarmTime;
    startTime();
    // alarm();
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
        $.ui.dialog.prototype._focusTabbable = function() {};
        $("#main").dialog({
            buttons: {
                SAVE: function() {
                    if($('#title').val() == ''){
                        items.push(addData);
                        alert("please first enter the title");
                    }else{
                        date=$("#date").val();
                        var title=$("#title").val();
                        var descrip=$("#description").val();
                        starthour=$("#addStartHours").val();
                        startmin=$("#addStartMin").val();
                        var ampm=$("#ampm").val();
                        addData.date = date;
                        addData.title = title;
                        addData.descrip = descrip;
                        addData.hour=starthour;
                        addData.min=startmin;
                        addData.AMPM=ampm;
                        console.log(addData);
                        items.push(addData);
                        $(this).dialog("close");
                        loadDataInDiv(items);
                    }
                }
            }
        });
    });

    var loadDataInDiv = function(items){
        var div = '';
        $.each(items, function(key, value){
            div='<body>'
                    +'<table>'
                        +'<tr>'
                            +'<td style="color:red;width:100px;height:auto; padding:auto;border-style:solid;border-color:red;" title="Edit" id="latesttask">'
                                +'<input type="number" min="0" max="23" size="0.5" placeholder="H" id="editHours" value='+value.hour+'>'
                                +'<input type="number" min="0" max="59" size="0.5" placeholder="M" id="editminute" value='+value.min+'>'
                                +'<button id="alarm1" >AON</button>'
                                +'<br>'
                                +'<input type="text"  id="editDate" value='+value.date+'>'
                                +'<br>'
                                +'<input type="text" id="editTitle" value='+value.title+'>'
                                +'<br>'
                                +'<textarea rows="" cols="" id="editDescrip">'+value.descrip+'</textarea>'
                            +'</td>';
        });
        $(".box1").append(div);
        $("#latesttask").draggable();
        $("#latesttask").click(function(){
            $(this).dialog({
                buttons:{
                    SAVE:function(){
                        latestItems.push(latestData);
                        editHours=document.getElementById('editHours').value;
                        editMinute=document.getElementById('editminute').value;
                        editDate=document.getElementById('editDate').value;
                        editTitle=document.getElementById('editTitle').value;
                        editDescrip=document.getElementById('editDescrip').value;
                        ampm=document.getElementById('ampm').value;
                        latestData.Hour=editHours;
                        latestData.Min=editMinute;
                        latestData.AMPM=ampm;
                        latestData.Date=editDate;
                        latestData.Title=editTitle;
                        latestData.Descrip=editDescrip;
                        if (today.getMinutes() == editMinute) {
            alert("alarm ringing");
        }
                        // alarm();
                        console.log(latestData);
                        $(this).dialog("close");
                        loadNewInDiv(latestItems);
                    }
                }
            });
        });
    }

    var loadNewInDiv=function(latestItems) {
        var newDiv='';
        $.each(items, function(key, value){
            newDiv='<body>'
            +'<table>'
            +'<tr>'
            +'<td style="color:red;width:100px;height:auto;padding:auto;border-style:solid;border-color:red;" title="Edit" id="edittask">'
                +'<input type="number" min="0" max="23" size="0.5" placeholder="H" size="0.5" id="editHours" value='+latestData.Hour+'>'
                +'<input type="number" min="0" max="59" size="0.5" placeholder="M" size="0.5" id="editminute" value='+latestData.Min+'>'
                +'<input type="text" size="4" onChange="setv()" id="ampm1" value='+latestData.AMPM+'>'
                +'<button id="alarm2" name="AOFF</button>'
                +'<br>'
                +'<input type="text"  id="editDate" value='+latestData.Date+'>'
                +'<br>'
                +'<input type="text" id="editTitle" value='+latestData.Title+'>'
                +'<br>'
                +'<textarea rows="" cols="" id="editDescrip">'+latestData.Descrip+'</textarea>'
            +'</td>';
        });
        $(".box1").append(newDiv);
        $("#edittask").draggable();
    }

    function startTime() {
        hours = today.getHours();
        minutes = today.getMinutes();
        ampm = hours>= 12 ? 'PM' : 'AM';
        var timeHour=$("#addStartHours").val(hours);
        var timeMin=$("#addStartMin").val(minutes);
        var AMPM=$("#ampm").val(ampm);
    }

    /*function alarm(){
        currentTime={H:today.getHours(),M:today.getMinutes(),ampm:addData.AMPM};
        if((today.getHours()==editHours)&&(today.getMinutes()==editMinute)){
                console.log("hiii");
                alert("time is over");
        }else{
                console.log("hello");
            }
    }*/
    // function alarm() {
    //     var todayMin = today.getMinutes();
    //     var newMin = parseInt(editminute);
    //     console.log(todayMin,newMin);
    //     if (todayMin == (newMin)) {
    //         alert("alarm ringing");
    //     }
    // }
});