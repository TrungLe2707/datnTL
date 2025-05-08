        const listImg = document.querySelector('.list-img');
     const images = document.querySelectorAll('.list-img img');
     const btnLeft = document.querySelector('.btn-left');
     const btnRight = document.querySelector('.btn-right');
 
     const imgCount = images.length;
     let currentIndex = 0;
 
     const changeSlide = () => {
         const slideWidth = document.querySelector('.slide-show').offsetWidth;
         listImg.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
     };
 
     let autoSlide = setInterval(() => {
         currentIndex = (currentIndex + 1) % imgCount;
         changeSlide();
     }, 2000);
 
     btnRight.addEventListener('click', () => {
         clearInterval(autoSlide);
         currentIndex = (currentIndex + 1) % imgCount;
         changeSlide();
         autoSlide = setInterval(() => {
             currentIndex = (currentIndex + 1) % imgCount;
             changeSlide();
         }, 2000);
     });
 
     btnLeft.addEventListener('click', () => {
         clearInterval(autoSlide);
         currentIndex = (currentIndex - 1 + imgCount) % imgCount;
         changeSlide();
         autoSlide = setInterval(() => {
             currentIndex = (currentIndex + 1) % imgCount;
             changeSlide();
         }, 2000);
     });
 
     window.addEventListener('resize', () => {
         changeSlide();
     });
 
     let startX = 0;
     let endX = 0;
 
     listImg.addEventListener('touchstart', (e) => {
         startX = e.touches[0].clientX;
         clearInterval(autoSlide); 
     });
 
     listImg.addEventListener('touchmove', (e) => {
         endX = e.touches[0].clientX;
     });
 
     listImg.addEventListener('touchend', () => {
         if (startX > endX + 50) {
             currentIndex = (currentIndex + 1) % imgCount;
         } else if (startX < endX - 50) {
             currentIndex = (currentIndex - 1 + imgCount) % imgCount;
         }
         changeSlide();
         autoSlide = setInterval(() => { 
             currentIndex = (currentIndex + 1) % imgCount;
             changeSlide();
         }, 2000);
     });
 
     let isMouseDown = false;
     let mouseStartX = 0;
 
     listImg.addEventListener('mousedown', (e) => {
         isMouseDown = true;
         mouseStartX = e.clientX;
         clearInterval(autoSlide); 
     });
 
     listImg.addEventListener('mousemove', (e) => {
         if (!isMouseDown) return;
         const mouseEndX = e.clientX;
         const diff = mouseStartX - mouseEndX;
         if (diff > 50) {
             currentIndex = (currentIndex + 1) % imgCount;
             isMouseDown = false;
         } else if (diff < -50) {
             currentIndex = (currentIndex - 1 + imgCount) % imgCount;
             isMouseDown = false;
         }
     });
 
     listImg.addEventListener('mouseup', () => {
         isMouseDown = false;
         autoSlide = setInterval(() => { 
             currentIndex = (currentIndex + 1) % imgCount;
             changeSlide();
         }, 2000);
     });
 
     listImg.addEventListener('dragstart', (e) => {
         e.preventDefault();
     });
 
// chuyen san pham

function showBox(boxNumber) {
    // Ẩn tất cả các box
    const boxes = document.querySelectorAll('.box-sanpham');
    boxes.forEach(box => box.classList.remove('active-sanpham'));

    // Hiển thị box được chọn
    const selectedBox = document.getElementById(`box${boxNumber}`);
    selectedBox.classList.add('active-sanpham');

    // Gỡ bỏ lớp active khỏi tất cả các nút
    const buttons = document.querySelectorAll('.box-sanpham button');
    buttons.forEach(button => button.classList.remove('active-sanpham'));

    // Thêm lớp active cho nút tương ứng
    const selectedButton = document.getElementById(`btn${boxNumber}-${boxNumber}`);
    selectedButton.classList.add('active-sanpham');
}

// Đảm bảo mặc định nút 1 có màu đỏ khi load trang
window.onload = function() {
    document.getElementById('btn1-1').classList.add('active-sanpham');
}



// 
// 
// 
const carouselList = document.querySelector('.carousel-list');
const carouselImages = document.querySelectorAll('.carousel-list img');
const carouselBtnLeft = document.querySelector('.carousel-btn-left');
const carouselBtnRight = document.querySelector('.carousel-btn-right');

const totalImages = carouselImages.length;
let currentImageIndex = 0;

const updateSlide = () => {
    const slideWidth = document.querySelector('.carousel-show').offsetWidth;
    carouselList.style.transform = `translateX(${-slideWidth * currentImageIndex}px)`;
};

let autoCarousel = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateSlide();
}, 2000);

carouselBtnRight.addEventListener('click', () => {
    clearInterval(autoCarousel);
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateSlide();
    autoCarousel = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateSlide();
    }, 2000);
});

carouselBtnLeft.addEventListener('click', () => {
    clearInterval(autoCarousel);
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateSlide();
    autoCarousel = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateSlide();
    }, 2000);
});

window.addEventListener('resize', updateSlide);

let startTouchX = 0;
let endTouchX = 0;

carouselList.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].clientX;
    clearInterval(autoCarousel);
});

carouselList.addEventListener('touchmove', (e) => {
    endTouchX = e.touches[0].clientX;
});

carouselList.addEventListener('touchend', () => {
    if (startTouchX > endTouchX + 50) {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
    } else if (startTouchX < endTouchX - 50) {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    }
    updateSlide();
    autoCarousel = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateSlide();
    }, 2000);
});

let isDragging = false;
let dragStartX = 0;

carouselList.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    clearInterval(autoCarousel);
});

carouselList.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dragEndX = e.clientX;
    const moveDiff = dragStartX - dragEndX;
    if (moveDiff > 50) {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        isDragging = false;
    } else if (moveDiff < -50) {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        isDragging = false;
    }
});

carouselList.addEventListener('mouseup', () => {
    isDragging = false;
    autoCarousel = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateSlide();
    }, 2000);
});

carouselList.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

// chuyen san pham

function showBox(boxNumber) {
    // Ẩn tất cả các box
    const boxes = document.querySelectorAll('.box-sanpham');
    boxes.forEach(box => box.classList.remove('active-sanpham'));

    // Hiển thị box được chọn
    const selectedBox = document.getElementById(`box${boxNumber}`);
    selectedBox.classList.add('active-sanpham');

    // Gỡ bỏ lớp active khỏi tất cả các nút
    const buttons = document.querySelectorAll('.box-sanpham button');
    buttons.forEach(button => button.classList.remove('active-sanpham'));

    // Thêm lớp active cho nút tương ứng
    const selectedButton = document.getElementById(`btn${boxNumber}-${boxNumber}`);
    selectedButton.classList.add('active-sanpham');
}

// Đảm bảo mặc định nút 1 có màu đỏ khi load trang
window.onload = function() {
    document.getElementById('btn1-1').classList.add('active-sanpham');
}