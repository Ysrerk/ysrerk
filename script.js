var button = document.querySelector("#button");
var satirs = document.querySelectorAll('.lvl1');

var satirs2 = document.querySelectorAll('.lvl2');

var elem = document.getElementById("level");

button.addEventListener("click", () => {
    //if (document.getElementById('level1').checked)
    //else if (document.getElementById('level1'))


    if (elem.options[elem.selectedIndex].innerHTML == "Level1") {

        for (var i = 0; i < satirs2.length; i++) {
            satirs2[i].style.display = 'none';
            satirs[i].style.display = '';

        }



    } else if (elem.options[elem.selectedIndex].innerHTML == "Level2") {
        for (var i = 0; i < satirs.length; i++) {

            satirs[i].style.display = 'none ';
            satirs2[i].style.display = '';
        }


    }

})

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        //[2] because the search will be based on course name
        td = tr[i].getElementsByTagName("td")[2]


        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }




        td = tr[i].getElementsByTagName("td")[2]


        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }





    }




}