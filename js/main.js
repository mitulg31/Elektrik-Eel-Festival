// Go back to home screen

document.addEventListener('DOMContentLoaded', function() {
    const headerLogo = document.getElementById('headerLogo');

    headerLogo.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const headerLogo = document.getElementById('footerLogo');

    headerLogo.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});


// Menu Button

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menuContent = document.getElementById('menuContent');
    let isMenuOpen = false;

    function closeMenu() {
        isMenuOpen = false;
        menuContent.style.display = 'none';
        menuButton.innerHTML = '<i class="fa-solid fa-bars" style="font-size: 24px"></i>';
        menuButton.classList.remove('clicked');
    }

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            menuContent.style.display = 'block';
            menuButton.innerHTML = '<i class="fa-solid fa-xmark menu-close" style="font-size: 24px"></i>';
            menuButton.classList.add('clicked');
        } else {
            closeMenu();
        }
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('#menuButton') && !target.closest('#menuContent')) {
            closeMenu();
        }
    });
});



// Toggle Top Menu

function toggleMenu() {
    const menuButton = document.getElementById('menuButton');
    const largeScreenMenuContent = document.getElementById('largeScreenMenuContent');

    if (window.innerWidth < 768) {
        menuButton.style.display = 'block';
        largeScreenMenuContent.style.display = 'none';
    } else {
        menuButton.style.display = 'none';
        largeScreenMenuContent.style.display = 'flex';
    }
}


// Toggle logo 

function toggleMenu() {
    const menuButton = document.getElementById('menuButton');
    const largeScreenMenuContent = document.getElementById('largeScreenMenuContent');

    if (window.innerWidth < 768) {
        menuButton.style.display = 'block';
        largeScreenMenuContent.style.display = 'none';
    } else {
        menuButton.style.display = 'none';
        largeScreenMenuContent.style.display = 'flex';
    }
}

toggleMenu();

window.addEventListener('resize', toggleMenu);


// Toggle Promo 

function adjustFontSize() {
    const promoAnimation = document.querySelector('.promo-animation');
    const ticketSales = document.querySelectorAll('.ticket-sale');

    const screenWidth = window.innerWidth;

    if (screenWidth >= 768 && screenWidth < 1024) {
        ticketSales.forEach(ticket => {
            ticket.style.fontSize = '16px'; // 
        });

    } else if (screenWidth >= 1024) {
        ticketSales.forEach(ticket => {
            ticket.style.fontSize = '16px';
        });

    } else {
        ticketSales.forEach(ticket => {
            ticket.style.fontSize = '12px';
        });
    }
}

adjustFontSize();

window.addEventListener('resize',adjustFontSize);

// Countdown clock


const countDownDate = new Date("Dec 19, 2023 23:59:59").getTime();


const countdownClock = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown-clock");
    countdownElement.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownClock);
        countdownElement.innerHTML = "EXPIRED";
    }
}, 1000);


// Adjust Tagline size

function adjustTagLineFontSize() {
    const tagLines = document.querySelectorAll('.tag-line');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768 && screenWidth < 1024) {
        tagLines.forEach(tagLine => {
            tagLine.style.fontSize = '40px';
        });

    } else if (screenWidth >= 1024) {
        tagLines.forEach(tagLine => {
            tagLine.style.fontSize = '40px';
        });

    } else {
        tagLines.forEach(tagLine => {
            tagLine.style.fontSize = '35px';
        });
    }
}

adjustTagLineFontSize();

window.addEventListener('resize', adjustTagLineFontSize);


// Genre Next/Prev Button

const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const genreBoxes = document.querySelectorAll('.genre-box');

let currentStartIndex = 0;
const visibleGenres = 2;

nextArrow.addEventListener('click', () => {
    currentStartIndex = (currentStartIndex + 1) % genreBoxes.length;
    updateGenreVisibility();
});

prevArrow.addEventListener('click', () => {
    currentStartIndex = (currentStartIndex - 1 + genreBoxes.length) % genreBoxes.length;
    updateGenreVisibility();
});

function updateGenreVisibility() {
    let nextIndex = currentStartIndex;
    for (let i = 0; i < genreBoxes.length; i++) {
        if (i < visibleGenres) {
            genreBoxes[nextIndex].classList.add('active');
        } else {
            genreBoxes[nextIndex].classList.remove('active');
        }
        nextIndex = (nextIndex + 1) % genreBoxes.length;
    }
}


// Return to top

window.addEventListener('scroll', function() {
    var returnToTopButton = document.getElementById('return-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    returnToTopButton.style.display = 'block';
    } else {
    returnToTopButton.style.display = 'none';
    }
});

document.getElementById('return-to-top').addEventListener('click', function() {
    scrollToTop();
});

function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}

//Input email

function validateForm() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailPattern)) {
    errorMessage.textContent = 'Please enter a valid email address';
    errorMessage.style.display = 'block';
    return false;
    } else {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    return true;
    }
}




