document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const cloneContainer = container.cloneNode(true);
    cloneContainer.id = 'dark-container';
    cloneContainer.classList.remove('active');
    document.body.appendChild(cloneContainer);

    const toggleIcon = document.querySelectorAll('.toggle-icon');
    const icon = document.querySelectorAll('.toggle-icon i');
    const darkContainer = document.querySelector('#dark-container');

    const darkContainerImage = darkContainer.querySelector('.home-image img');
    darkContainerImage.src = 'whitemode.jpg';

    toggleIcon.forEach(toggle => {
        toggle.addEventListener('click', () => {
            icon.forEach(i => {
                i.classList.toggle('bx-sun');
                i.classList.toggle('bx-moon');
            });
            container.classList.toggle('active');
            darkContainer.classList.toggle('active');
        });
    });
});



