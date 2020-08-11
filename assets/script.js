$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
getTasks()

for(var i = 0; i < 9; i++) {
    var hour = $(".row")[i].id;
    var input = $(".row")[i].children[1];

    if (moment().hours() < hour) {
        input.setAttribute("class", "col-9 textarea future");
    } 
    else if (moment().hours() == hour) {
        input.setAttribute("class", "col-9 textarea present");
    }
    else {
        input.setAttribute("class", "col-9 textarea past");
    }
};

function getTasks() {
    // Get stored tasks from localStorage
    var task1 = localStorage.getItem("task1");
    var task2 = localStorage.getItem("task2");
    var task3 = localStorage.getItem("task3");
    var task4 = localStorage.getItem("task4");
    var task5 = localStorage.getItem("task5");
    var task6 = localStorage.getItem("task6");
    var task7 = localStorage.getItem("task7");
    var task8 = localStorage.getItem("task8");
    var task9 = localStorage.getItem("task9");
    
    $("#input1").val(task1);
    $("#input2").val(task2);
    $("#input3").val(task3);
    $("#input4").val(task4);
    $("#input5").val(task5);
    $("#input6").val(task6);
    $("#input7").val(task7);
    $("#input8").val(task8);
    $("#input9").val(task9);
    
    
};

$(".saveBtn").on("click", function storeTasks(){
    localStorage.setItem($(this).attr("id"), $(this).prev().val());
    getTasks()
});
  
