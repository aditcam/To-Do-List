var counter = 0;
function addTask()
{
    var task = document.getElementById("textBox1").value;
   // console.log(task);
    var table = document.getElementById("table1");
    var row = table.insertRow();
    var cell_1= row.insertCell(0);
    var cell_2= row.insertCell(1);
    cell_1.innerHTML = task;
    cell_2.innerHTML = "&nbsp;&nbsp;<input type =\"button\" id = \"btnDel\" value = \"Completed\"/> ";
    document.getElementById("textBox1").value = "";
    counter ++;
}

$(function() {  
    $(document).on('click','#table1 tr ', function() {
        taskDone(this.rowIndex);
    });
});

function taskDone(n)
{
    var table = document.getElementById("table1");
    var val = table.rows[n].cells;
    var temp = val[0].innerHTML;
    var op = temp.strike();
    val[0].innerHTML = op;
}

