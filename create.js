//  banner section two button one click after another click
function toggleInfo(infoId) {
    const info1 = document.getElementById('info1');
    const info2 = document.getElementById('info2');

    if (infoId === 'info1') {
        info1.style.display = 'block';
        info2.style.display = 'none';
    } else {
        info1.style.display = 'none';
        info2.style.display = 'block';
    }
}


// // for button color change (it for the donation button)
document.getElementById('colorButton1').addEventListener('click', function() {
    this.classList.remove('btn-warning');
    this.classList.add('bg-red-500');
});
document.getElementById('colorButton2').addEventListener('click', function() {
    this.classList.remove('btn-warning');
    this.classList.add('bg-red-500');
});
