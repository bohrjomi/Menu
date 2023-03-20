function run(){
    console.log('run', document.getElementById('img').src)
    document.getElementById('img').src = 'cattouchret.png'
}
function run2(){
    console.log('run2', document.getElementById('img').src)
    document.getElementById('img').src = 'wold.png'
}
function run3(){
    console.log('run3', document.getElementById('img').src)
    document.getElementById('img').src = 'cat.png'
}
function run4(){
    console.log('run3', document.getElementById('img').src)
    document.getElementById('img').src = 'euro.png'
}
 function menu1() {
    const panel = document.getElementById("panel");
    if (panel.style.display === "none") {

        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
};