// Go back to previous page

document.querySelector('.go-back').addEventListener('click', function() {
    window.history.back();
});

document.addEventListener('DOMContentLoaded', function() {
    const goBackButton = document.getElementById('goBackButton');

    goBackButton.addEventListener('mouseover', function() {
        const textNode = document.createTextNode('Go Back');
        const textElement = document.createElement('span');
        textElement.appendChild(textNode);
        textElement.classList.add('go-back-text');

        goBackButton.appendChild(textElement);
    });

    goBackButton.addEventListener('mouseout', function() {
        const textElement = goBackButton.querySelector('.go-back-text');
        if (textElement) {
            goBackButton.removeChild(textElement);
        }
    });
});


//

document.addEventListener('DOMContentLoaded', function() {
    const headerLogo = document.getElementById('headerLogo');

    headerLogo.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

