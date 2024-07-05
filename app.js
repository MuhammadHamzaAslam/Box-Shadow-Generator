function generate() {
    let hShadow = document.getElementById('h-shadow').value
    let vShadow = document.getElementById('v-shadow').value
    let bRadius = document.getElementById('b-radius').value
    let sRadius = document.getElementById('s-radius').value
    let sColor = document.getElementById('s-color').value
    let sColorOpacity = document.getElementById('s-color-o').value
    console.log(hShadow);
    console.log(vShadow);
    console.log(bRadius);
    console.log(sRadius);
    console.log(sColor);
    console.log(sColorOpacity);
}
// generate()
document.getElementById('add').addEventListener('click',generate)