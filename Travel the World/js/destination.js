function readMore() {
    let destination = document.getElementById('read-plitvicka');
    destination.style.display = 'block';
    document.getElementById('header').style.pointerEvents = 'none';
    document.getElementById('header').style.opacity = '0.5';

    document.getElementById('search').style.pointerEvents = 'none';
    document.getElementById('search').style.opacity = '0.5';

    document.getElementById('flex').style.pointerEvents = 'none';
    document.getElementById('flex').style.opacity = '0.5';

    document.getElementById('footer').style.pointerEvents = 'none';
    document.getElementById('footer').style.opacity = '0.5';

    document.body.style.overflow = 'hidden';
}

function closeMore() {
    let destination = document.getElementById('read-plitvicka');
    destination.style.display = 'none';

    document.getElementById('header').style.pointerEvents = 'auto';
    document.getElementById('header').style.opacity = '1';

    document.getElementById('search').style.pointerEvents = 'auto';
    document.getElementById('search').style.opacity = '1';

    document.getElementById('flex').style.pointerEvents = 'auto';
    document.getElementById('flex').style.opacity = '1';

    document.getElementById('footer').style.pointerEvents = 'auto';
    document.getElementById('footer').style.opacity = '1';

    document.body.style.overflow = 'auto';
}