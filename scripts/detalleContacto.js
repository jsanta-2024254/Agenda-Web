const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (id) {
    if (id == 1) {
        document.getElementById('contactName').textContent = 'vegata';
        document.getElementById('contactEmail').textContent = 'vegata@email.com';
        document.getElementById('contactPhone').textContent = '+502 6122 7812';
        document.getElementById('contactAddress').textContent = 'Dirección 1';
        document.getElementById('contactNotes').textContent = 'Notas 1';
        document.getElementById('contactFavorite').textContent = 'No';
    } else if (id == 2) {
        document.getElementById('contactName').textContent = 'son goku';
        document.getElementById('contactEmail').textContent = 'son.goku@email.com';
        document.getElementById('contactPhone').textContent = '+502 6233 7898';
        document.getElementById('contactAddress').textContent = 'Dirección 2';
        document.getElementById('contactNotes').textContent = 'Notas 2';
        document.getElementById('contactFavorite').textContent = 'Sí';
    } else if (id == 3) {
        document.getElementById('contactName').textContent = 'Jeffrey Epstein';
        document.getElementById('contactEmail').textContent = 'Jeffrey.Epstein@email.com';
        document.getElementById('contactPhone').textContent = '+502 6345 7892';
        document.getElementById('contactAddress').textContent = 'Dirección 3';
        document.getElementById('contactNotes').textContent = 'Notas 3';
        document.getElementById('contactFavorite').textContent = 'No';
    }
}
