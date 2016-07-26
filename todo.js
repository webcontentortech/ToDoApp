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
    var latestData={Hour:"",Min:"",Col:":",AMPM:"", Date:"",Title:"",Descrip:""};
    var today=new Date();
    startTime();
    $("#main").hide();
    $("#date").datepicker({
        defaultDate: new Date(),
        yearRange: "2016:2020",
        minDate: '0',
        changeMonth: true,
        changeYear: true,
    });
    $("#add").click(function() {
        $("#date").val("");
        $("#title").val("");
        $("#description").val("");
        $("#main").dialog({
            buttons: {
                SAVE: function() {
                    if(($('#title').val() == '')||($('#description').val()== '')){
                        items.push(addData);
                        alert("Please enter Task Title and Description.");
                    }else{
                        date=$("#date").val();
                        var title=$("#title").val();
                        var descrip=$("#description").val();
                        starthour=$("#addStartHours").val();
                        startmin=$("#addStartMin").val();
                        console.log(startmin)
                        var ampm=$("#ampm").val();
                        addData.date = date;
                        addData.title = title;
                        addData.descrip = descrip;
                        addData.hour=starthour;
                        addData.min=startmin;
                        addData.AMPM=ampm;
                        if(today.getMinutes() == startmin){
                            alert("alarm ringing");
                        }
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
                            +'<td style="color:red;width:100px;height:auto; padding:auto;border-style:solid;border-color:red;" title="EDIT TASK" id="latesttask">'
                                +'<input type="text" id="editTitle"  style="text-transform:uppercase" placeholder="Title" value='+value.title+'>'
                                +'<br>'
                                +'<input type="number" min="0" max="23" size="0.5" placeholder="H" id="editHours" value='+value.hour+'>'
                                +'<input type="number" min="0" max="59" size="0.5" placeholder="M" id="editminute" value='+value.min+'>'
                                +'<button id="alarm1">AON</button>'
                                +'<br>'
                                +'<input type="text"  id="editDate" placeholder="Date" value='+value.date+'>'
                                +'<br>'
                                +'<textarea rows="" cols="" placeholder="Description" id="editDescrip">'+value.descrip+'</textarea>'
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
                        if(today.getMinutes() == editMinute){
                            alert("alarm ringing");
                        }
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
                                    +'<span style="color:black;text-transform:uppercase; " id="editTitle"  placeholder="Title">'+latestData.Title+'</span>'
                                    +'<br>'
                                    +'<span id="editHours">'+latestData.Hour+latestData.Col+'</span>'
                                    +'<span id="editminute">'+latestData.Min+'</span>'
                                    +'<span id="ampm1" >'+latestData.AMPM+'</span>'
                                    +'<br>'
                                    +'<span id="editDate">'+latestData.Date+'</span>'
                                    +'<br>'
                                    +'<span id="editDescrip">'+latestData.Descrip+'</span>'
                                +'</td>';
        });
        $(".box1").append(newDiv);
        $("#edittask").draggable();
        //$('#edittask').html($('#edittask').data('old-state'));
        //$("#edittask").html(latesttask);
        /*var dataSave=latestItems[0];
        console.log(dataSave);
        $("#edittask").data(dataSave);*/
        //console.log(latestItems[0]);
    }

    function startTime() {
        hours = today.getHours();
        minutes = today.getMinutes();
        ampm = hours>= 12 ? 'PM' : 'AM';
        var timeHour=$("#addStartHours").val(hours);
        var timeMin=$("#addStartMin").val(minutes);
        var AMPM=$("#ampm").val(ampm);
    }

    /*$("#alarm").click(function(){
        alarm();
    });

    function alarm() {
        (today.getMinutes()==startmin)
            alert("alarm ringing");
            console.log("hiii");
        // }else if(today.getMinutes()==editminute){
        //     alert("alarm ringing");
        //     console.log("hello");
        // }else{
        //      console.log("hifi");
        // }
    }    
*/
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