const galleryItems = document.querySelectorAll('.gallery-item');
const popup = document.querySelector('#popup');
const popupVideo = document.querySelector('#popup-video');

// Обработка событий элементов галереи
galleryItems.forEach(item => {
    const video = item.querySelector('video');

    item.addEventListener('mouseenter', () => {
        video.play(); // воспроизводит видео при наведении мыши
    })
    item.addEventListener('mouseleave', () => {
        video.pause();// приостанавливает воспроизведение видео при покидании мыши
    })

    item.addEventListener('click', () => {
        popupVideo.querySelector('source').src = item.getAttribute('data-video');
        // получает путь к видео
        popupVideo.load(); // загружает видео
        popup.classList.add('active'); // выводит модальное окно плеера
        popupVideo.play(); // начинает воспроизведение
    })
})

// Обработка событий модального окна плеера
popup.addEventListener('click', (e) => {
    if (!e.target.classList.contains('video')) {
        // обрабатывает клик в любую область модального окна плеера, кроме самого видео
        popup.classList.remove('active'); // прячет модальное окно
        popupVideo.pause(); // приостанавливает воспроизведение видео
        popupVideo.currentTime = 0; // сбрасывает видео на начало
        popupVideo.querySelector('source').src = ''; // очищает путь
    }
})