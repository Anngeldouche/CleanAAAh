let currentPage = 1;
const totalPages = 4;

function showPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById(`page${i}`).classList.remove('active');
    }
    document.getElementById(`page${pageNumber}`).classList.add('active');
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Afficher la première page au chargement
showPage(currentPage);

function updatePoints() {
    let total = 0;
    for (let i = 2; i <= totalPages; i++) {
        document.querySelectorAll(`#page${i} input[type=checkbox]`).forEach(cb => {
            if(cb.checked) total += parseInt(cb.dataset.points);
        });
    }
    document.getElementById('resume').innerHTML = `Total : ${total} pts`;
}
