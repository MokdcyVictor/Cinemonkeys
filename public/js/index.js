let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextimage();
}, 7000);

function nextimage() {
    count++;
    if(count > 3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}