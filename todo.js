$(document).ready(function(){
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
    var addData={date:"",title:"",descrip:"",hour:"",min:""};
    var latestData={Hour:"",Min:"",Date:"",Title:"",Descrip:""};
    var currentTime=new Date();
    var alarmTime;
    setInterval(alarm(),1000);
    startTime();
    alarm();
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
                    date=$("#date").val();
                    var title=$("#title").val();
                    var descrip=$("#description").val();
                    var hour=$("#addStartHours").val();
                    var min=$("#addStartMin").val();
                    console.log(hour,min);
                    addData.date = date;
                    addData.title = title;
                    addData.descrip = descrip;
                    addData.hour=hour;
                    addData.min=min;
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
            div='<body><table><tr><td style="color:red;width:100px;height:auto; padding:auto;border-style:solid;border-color:red;" title="Edit" id="div1"><input type="number" min="0" max="23" size="0.5" placeholder="H" id="editHours" value='+value.hour+'><input type="number" min="0" max="59" size="0.5" placeholder="M" id="editminute" value='+value.min+'><br><input type="text"  id="editDate" value='+value.date+'><br><input type="text" id="editTitle" value='+value.title+'><br><textarea rows="" cols="" id="editDescrip">'+value.descrip+'</textarea>';
        });
        $(".box1").append(div);
        $("#div1").draggable();
        $("#div1").click(function(){
            $(this).dialog({
                buttons:{
                    SAVE:function(){
                        editHours=document.getElementById('editHours').value;
                        editminute=document.getElementById('editminute').value;
                        editDate=document.getElementById('editDate').value;
                        editTitle=document.getElementById('editTitle').value;
                        editDescrip=document.getElementById('editDescrip').value;
                        latestData.Hour=editHours;
                        latestData.Min=editminute;
                        latestData.Date=editDate;
                        latestData.Title=editTitle;
                        latestData.Descrip=editDescrip;
                        console.log(latestData);
                        latestItems.push(latestData);
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
            newDiv='<body><table><tr><td style="color:red;width:100px;height:auto; padding:auto;border-style:solid;border-color:red;" title="Edit" id="div2"><input type="number" min="0" max="23" size="0.5" placeholder="H" id="editHours" value='+latestData.Hour+'><input type="number" min="0" max="59" size="0.5" placeholder="M" id="editminute" value='+latestData.Min+'><br><input type="text"  id="editDate" value='+latestData.Date+'><br><input type="text" id="editTitle" value='+latestData.Title+'><br><textarea rows="" cols="" id="editDescrip">'+latestData.Descrip+'</textarea>';
        });
        $(".box1").append(newDiv);
        $("#div2").draggable();
    }
    
    /*function editing(){
    if(edit){
        $("#div2").click(function(){
            $(this).dialog({
                buttons:{
                    SAVE:function(){
                        latestItems.push(latestData);
                        $(this).dialog("close");
                        loadNewInDiv(latestItems);
                    }
                }
            });
        });   
    }else{

    }
    }*/

    function startTime() {
        hours = currentTime.getHours();
        minutes = currentTime.getMinutes();
        ampm = hours>= 12 ? 'PM' : 'AM';
        var timeHour=$("#addStartHours").val(hours);
        var timeMin=$("#addStartMin").val(minutes);
        var AMPM=$("#ampm").val(ampm);
    }

    function alarm(){
        $.each(items, function(key, value){
            alarmTime={H:currentTime.getHours(),M:currentTime.getMinutes()};
            console.log(alarmTime);
            if(alarmTime==currentTime){
                console.log("hiii");
                alert("time is over");
            }
        });
    }
});