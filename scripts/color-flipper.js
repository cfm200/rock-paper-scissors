function changeColor(num) {
    let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    for (let i = 0; i <= num; i++) {
        let backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.background = backgroundColor;
        autoRefresh(num);
    }
};

function autoRefresh(time) {
    setTimeout('location.reload(true);', time);
}

changeColor(10000);
