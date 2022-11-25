function myFunction_1()
{
  var table = document.getElementById("table");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  cell1.innerHTML = document.getElementById("user_input_1").value;
  cell2.innerHTML = document.getElementById("user_input_2").value;
  cell3.innerHTML = document.getElementById("user_input_3").value;
  document.getElementById("user_input_1").value="";
  document.getElementById("user_input_2").value="";
  document.getElementById("user_input_3").value="";
}