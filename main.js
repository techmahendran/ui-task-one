const firstName = document.querySelector('#send');
firstName.addEventListener('click', () => {
    document.getElementById('logo').textContent = 'Mahendran';
    document.getElementById('logo').style.color = 'green';
    document.querySelector('#link').style.color = 'blue';
    document.querySelector('#link').textContent = 'Front-end Developer'

    alert('see the first page');
});

