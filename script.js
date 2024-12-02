const checkbox = document.getElementById('checkbox');
const image = document.getElementById('burger-menu-img');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        image.src = 'assets/images/vector/close.svg';
    } else {
        image.src = 'assets/images/vector/menu.svg';
    }
});