

    var areaEdit = document.getElementById("editor");
    var colorFont = document.querySelector(".color");
    var doAction = document.querySelectorAll(".tg-btn");


    // function all button click
        for (let index = 0; index < doAction.length; index++) {

        doAction[index].addEventListener("click",function () {
        var thisvalue = this.value;
        var toggle = this.getAttribute("toggle");

        if (doAction[index].value == "italic" && toggle == "1" ) {
        areaEdit.classList.add("italic");
        this.setAttribute("toggle", "2");
        } 
        else if (thisvalue == "underline" && toggle == "1" ) {
        areaEdit.classList.add("under-line")
        this.setAttribute("toggle", "2");
        }
        else if (thisvalue == "bold" && toggle == "1" ) {
        areaEdit.classList.add("bold")
        this.setAttribute("toggle", "2");
        }
        else if (thisvalue == "left" && toggle == "1" ) {
        areaEdit.classList.add("left")
        this.setAttribute("toggle", "2");
        }
        else if (thisvalue == "center" && toggle == "1" ) {
        areaEdit.classList.add("center")
        this.setAttribute("toggle", "2");
        }
        else if (thisvalue == "right" && toggle == "1" ) {
        areaEdit.classList.add("right")
        this.setAttribute("toggle", "2");
        }
        else {

        doAction[index].setAttribute("toggle", "1");
        areaEdit.classList.remove("italic");
        areaEdit.classList.remove("under-line");
        areaEdit.classList.remove("bold"); 
        areaEdit.classList.remove("right"); 
        areaEdit.classList.remove("center"); 
        areaEdit.classList.remove("left"); 

        }    
        }) 
        }

// function change text color
colorFont.addEventListener("change",color)

    function color() {
        areaEdit.style.color = colorFont.value;
    }




                // var selection = selection.toHtmlObject;              
                // selection.classList.add("bold")
                // selection.text("saasasas")
                // console.log(typeof selection);

//   function DoMore(action) {
//   if (DoAction[action].value === ("italic") && DoAction[action].getAttribute("toggle") === "1") {
//     areaEdit.classList.add("italic");
//     DoAction[action].setAttribute("toggle", "2");


//   } else if (DoAction[action].value === "underline" && DoAction[action].getAttribute("toggle") === "1") {
//     areaEdit.classList.add("under-line");
//     DoAction[action].setAttribute("toggle", "2");






