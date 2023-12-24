
var srn = 1;
const AddRow = () => {
    var Name = document.getElementById('U_Name').value

    var Cont = document.getElementById('U_Cont').value

    var Add = document.getElementById('U_Add').value

    if ((Name != "") && (Cont != "") && (Add != "")) {
        document.getElementById('My_Table').innerHTML += "<tr><td>" + srn + "</td><td>" + Name + "</td><td>" + Cont + "</td><td>" + Add + "</td><td></td></tr>"
        srn++;
    }

}