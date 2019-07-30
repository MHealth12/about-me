alert("Welcome to my javascript page! Were going to get interactive now!");

function makeImageBig(pic) {
    pic.style.width = "500px"
}

function makeImageOriginalSize(pic) {
    pic.style.width = "300px"

}

function showHideSection(section) {
    var x = document.getElementById(section);
    if (x.style.display == "none") {
        x.style.display = "block";
        document.getElementById("bragsButton").innerHTML = "HIDE RESUME";
    } else{
        x.style.dispaly = "none";
        document.getElementById("bragsButton").innerHTML = "SHOW RESUME";
    }
}