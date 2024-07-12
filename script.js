document.querySelectorAll('.group').forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let startTime;
    let moved = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        startTime = new Date().getTime();
        moved = false;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', (e) => {
        isDown = false;
        slider.classList.remove('active');

        const endTime = new Date().getTime();
        const timeDiff = endTime - startTime;
        const x = e.pageX - slider.offsetLeft;
        const walk = Math.abs(x - startX);
        if (timeDiff < 150 && walk < 10) {
            moved = false;
        } else {
            moved = true;
        }
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
        moved = true;
    });

    slider.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (moved) {
                e.preventDefault();
            }
        });
    });
});






