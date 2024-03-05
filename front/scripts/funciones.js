function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

function restoreBackground() {
    document.body.style.backgroundImage = 'none';
}