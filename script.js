let currentPage = 1;
const totalPages = 4;

// Afficher la première page au chargement
document.getElementById(`page${currentPage}`).classList.add('active');

function updatePoints() {
    let total = 0;
    for (let i = 2; i <= totalPages; i++) {
        document.querySelectorAll(`#page${i} input[type=checkbox]`).forEach(cb => {
            if(cb.checked) total += parseInt(cb.dataset.points);
        });
    }
    document.getElementById('resume').innerHTML = `Total : ${total} pts`;
}

function nextPage() {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage = currentPage % totalPages + 1; // boucle infinie
    document.getElementById(`page${currentPage}`).classList.add('active');
}

function prevPage() {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage = (currentPage - 2 + totalPages) % totalPages + 1; // boucle infinie
    document.getElementById(`page${currentPage}`).classList.add('active');
}
