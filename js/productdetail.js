//danh mụcmục
document.addEventListener('DOMContentLoaded', function() {

    const lists = document.querySelectorAll('.pruductall-danhmuc ul');

    lists.forEach(ul => {
        const items = ul.getElementsByTagName('li');

        for (let item of items) {
            const link = item.querySelector('a');

        
            link.addEventListener('mouseenter', function() {
                if (!item.classList.contains('active')) {
           
                }
            });

            link.addEventListener('mouseleave', function() {
                if (!item.classList.contains('active')) {
                 
                }
            });

  
            item.addEventListener('click', function(e) {
                e.preventDefault(); 
                for (let sibling of items) {
                    sibling.classList.remove('active');
                  
                }
                this.classList.add('active');
          
            });
        }
    });
});

// lọc sấp xếp
document.addEventListener('DOMContentLoaded', function() {
    const sortContainer = document.querySelector('.product-loc-sx');
    const items = sortContainer.querySelectorAll('div');

    items.forEach(item => {
        const link = item.querySelector('a');


        link.addEventListener('mouseenter', function() {
            if (!item.classList.contains('active')) {
            }
        });

        link.addEventListener('mouseleave', function() {
            if (!item.classList.contains('active')) {

            }
        });

        item.addEventListener('click', function(e) {
            e.preventDefault(); 
            items.forEach(sibling => {
                sibling.classList.remove('active');
                const siblingLink = sibling.querySelector('a');
            });
        
            this.classList.add('active');
        });
    });
});
// chọn ở detail
document.addEventListener('DOMContentLoaded', function() {

    const variantsContainer = document.querySelector('.variants');
    const buttons = variantsContainer.querySelectorAll('button');

    buttons.forEach(button => {

        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '#b3e5fc';
            }
        });

        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = ''; 
            }
        });


        button.addEventListener('click', function() {
   
            buttons.forEach(sibling => {
                sibling.classList.remove('active');
                sibling.style.backgroundColor = '';
                sibling.style.color = '';
            });

            this.classList.add('active');
            this.style.backgroundColor = '#0288d1'; 
            this.style.color = 'white'; 
        });
    });
});


//đổi biểu tượng trái tim
document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('a .fa-heart');

    heartIcons.forEach(heartIcon => {
        heartIcon.parentElement.addEventListener('click', function(e) {
            e.preventDefault(); 
            heartIcon.classList.toggle('active');

            if (heartIcon.classList.contains('active')) {
                heartIcon.classList.remove('fa-regular');
                heartIcon.classList.add('fa-solid');
                heartIcon.style.color = '#ff0000';
            } else {
                heartIcon.classList.remove('fa-solid');
                heartIcon.classList.add('fa-regular');
                heartIcon.style.color = ''; 
            }
        });
    });
});
// số lượng
 
 const quantityInput = document.getElementById('quantity');
 const decreaseBtn = document.querySelector('.quantity-left');
 const increaseBtn = document.querySelector('.quantity-right');

 increaseBtn.addEventListener('click', () => {
     let currentValue = parseInt(quantityInput.value);
    if(currentValue < 30) {
        quantityInput.value = currentValue + 1;
     }
 });

 decreaseBtn.addEventListener('click', () => {
     let currentValue = parseInt(quantityInput.value);
     if (currentValue > 0) { 
         quantityInput.value = currentValue - 1;
     }
 });
 // thông tin sản phẩm
 