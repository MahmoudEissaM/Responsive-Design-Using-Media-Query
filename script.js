const mainBranchButton = document.querySelector('.main-branch');
const branchButton = document.querySelector('.branch');
const locations = document.querySelectorAll('.location');

function resetColors() {
    locations.forEach(location => {
        location.style.color = '#333';
        location.querySelector('i').style.color = '#000000';
    });
}

mainBranchButton.addEventListener('click', () => {
    resetColors();

    const firstLocation = locations[0];
    firstLocation.style.color = '#b71c1c';
    firstLocation.querySelector('i').style.color = '#b71c1c';
});

branchButton.addEventListener('click', () => {
    resetColors();

    locations.forEach((location, index) => {
        if (index !== 0) {
            location.style.color = '#0d47a1';
            location.querySelector('i').style.color = '#0d47a1';
        }
    });
});


const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});