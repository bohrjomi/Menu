function run(index){
    switch (index){
        case 1:
            document.getElementById('img').src = 'cattouchret.png'
            break
        case 2:
            document.getElementById('img').src = 'wold.png'
            break
        case 3:
            document.getElementById('img').src = 'cat.png'
            break
        case 4:
            document.getElementById('img').src = 'euro.png'
            break
    }
}
 function menu1() {
    const panel = document.getElementById("panel");
    if (panel.style.visibility === "hidden") {

        panel.style.visibility = "visible";
    } else {
        panel.style.visibility = "hidden";
    }
};
function menu2() {
    const panel = document.getElementById("panel2");
    if (panel.style.visibility === "hidden") {

        panel.style.visibility = "visible";
    } else {
        panel.style.visibility = "hidden";
    }
};