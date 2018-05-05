var firstFlag = false;
var secondFlag = false;
var thirdFlag = false;
var fourthFlag = false;

function goNext(page) {
    if (page == 1) {
        if (firstFlag) {
            $($(".firstpage")[0]).fadeToggle("fast", function () {
                $($(".secondpage")[0]).fadeToggle("slow");
            });
        } else {
            alert("Поле не может быть пустым");
        }

    } else {
        validate();
        if (secondFlag) {
            $($(".secondpage")[0]).fadeToggle("fast", function () {
                $($(".thirdpage")[0]).fadeToggle("slow");
            });
        } else {
            alert("Вы должны выбрать хотя бы один вариант из каждого списка");
        }

    }
}

function goBack(page) {
    if (page == 2) {
        $($(".secondpage")[0]).fadeToggle("fast", function () {
            $($(".firstpage")[0]).fadeToggle("slow");
        });

    } else {
        $($(".thirdpage")[0]).fadeToggle("fast", function () {
            $($(".secondpage")[0]).fadeToggle("slow");
        });
    }
}



$(function () {
    $("#brand").change(function () {
        if (this.value) {
            var val = $("#brand").val();
            var obj = $("#cars").find("option[value='" + val + "']");
            if (obj != null && obj.length > 0) { firstFlag = true; }
            else {
                firstFlag = false;
                alert("Вы не можете выбрать объект, который не пренадлежит к списку");
            }           
        }
        else {
            firstFlag = false;
        }
    });

});


function lastPageOC(){

    calendarValidate();
    TextBoxVal();

}

function calendarValidate() {

    var valueDate = document.getElementById('date').value;
    if(!valueDate){

        fourthFlag = false;
        alert("Введите дату,поле не может быть пустым");

    } else {

        fourthFlag = true;

    }

}

function TextBoxVal() {

    var txt = document.getElementById('text');
    if (txt.value == 0) {

        thirdFlag = false;
        alert("Поле с информацией не может быть пустым");

    } else {

        thirdFlag = true;

    }

}

function validate() {
    if ($("input[name = 'color']:checked").length != 0) {
        if ($("input[name = 'fuel']:checked").length != 0) {
            if ($("input[name = 'transmission']:checked").length != 0) {
                secondFlag = true;
            } else {
                secondFlag = false;
            }
        } else {
            secondFlag = false;
        }
        
    }
    else {
        secondFlag = false;
    }
}