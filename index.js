/*      Abdullah Khan
        Roll no 558
        Internet Programming
        Assignment # 1*/
function takeValue() {
    //storing input values
    //fieldset 1 values
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var phone = document.getElementById("phone").value;
    //fieldset 2 values
    var iname = document.getElementById("iname").value;
    var _class = document.getElementById("class").value;
    var sem = document.getElementById("sem").value;
    var rollno = document.getElementById("roll_number").value;
    //fieldset 3 values
    var board = document.getElementById("board").value;
    var passyear = document.getElementById("passyear").value;
    var dg = document.getElementById("degree").value;
    //fieldset 4 values
    var subName1 = document.getElementById("subName1").value;
    var subName2 = document.getElementById("subName2").value;
    var subName3 = document.getElementById("subName3").value;
    var subName4 = document.getElementById("subName4").value;
    var totalmarks1 = document.getElementById("tm1").value;
    var totalmarks2 = document.getElementById("tm2").value;
    var totalamrks3 = document.getElementById("tm3").value;
    var totalmarks4 = document.getElementById("tm4").value;
    //Condition for obtained marks to not exceed total marks
    if (document.getElementById('om1').value <= tm1) {
        var obtainedmarks1 = document.getElementById("om1").value;
    }
    else { alert('Value cannot exceed Total Marks') }
    if (document.getElementById('om2').value <= tm2) {
        var obtainedmarks2 = document.getElementById("om2").value;
    }
    else { alert('Value cannot exceed Total Marks') }
    if (document.getElementById('om3').value <= tm3) {
        var obtainedmarks3 = document.getElementById("om3").value;
    }
    else { alert('Value cannot exceed Total Marks') }
    if (document.getElementById('om4').value <= tm4) {
        var obtainedmarks4 = document.getElementById("om4").value;
    }
    else { alert('Value cannot exceed Total Marks') }
    //output Subject Table
    document.write("<b>INFO SUBMIT SUCCESSFULLY--</b><br><br><br>");
    document.write("<b>Name: </b>" + name + "<br>")
    document.write("<b>Father's Name: </b>" + fname + "<br>");
    document.write("<b>Contact Info: </b>" + phone + "<br>");
    document.write("<b>Institution: </b>" + iname + "<br>");
    document.write("<b>Class: </b>" + _class + "<br>");
    document.write("<b>Semester: </b>" + sem + "<br>");
    document.write("<b>Roll Number: </b>" + rollno + "<br>");
    document.write("<b>Board: </b>" + board + "<br>");
    document.write("<b>Passing Year: </b>" + passyear + "<br>");
    document.write("<b>Degree: </b>" + dg + "<br>");
    //subject table
    document.write('<table border="1">');
    document.write('<thead>');
    document.write('<th>' + 'Subject' + '</th>');
    document.write('<th>' + 'Total Marks' + '</th>');
    document.write('<th>' + 'Obtained Marks' + '</th>');
    document.write('</thead>');
    document.write('<tbody>');
    document.write('<tr>');
    document.write('<td>' + subName1 + '</td>');
    document.write('<td>' + totalmarks1 + '</td>');
    document.write('<td>' + obtainedmarks1 + '</td>');
    document.write('</tr>');
    document.write('<tr>');
    document.write('<td>' + subName2 + '</td>');
    document.write('<td>' + totalmarks2 + '</td>');
    document.write('<td>' + obtainedmarks2 + '</td>');
    document.write('</tr>');
    document.write('<tr>');
    document.write('<td>' + subName3 + '</td>');
    document.write('<td>' + totalamrks3 + '</td>');
    document.write('<td>' + obtainedmarks3 + '</td>');
    document.write('</tr>');
    document.write('<tr>');
    document.write('<td>' + subName4 + '</td>');
    document.write('<td>' + totalmarks4 + '</td>');
    document.write('<td>' + obtainedmarks4 + '</td>');
    document.write('</tr>');
    document.write('</tbody>');
    document.write('</table>');
}

