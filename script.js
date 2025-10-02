let currentPage = 1;
const totalPages = 3;
const points = {
    "SDB": 0,
    "Cuisine": 0
};

function updatePoints() {
    // Reset points
    points["SDB"] = 0;
    points["Cuisine"] = 0;

    // SDB
    document.querySelectorAll('#page2 input[type=checkbox]').forEach(cb => {
        if(cb.checked) points["SDB"] += parseInt(cb.dataset.points);
    });
    // Cuisine
    document.querySelectorAll('#page3 input[type=checkbox]').forEach(cb => {
        if(cb.checked) points["Cuisine"] += parseInt(cb.dataset.points);
    });

    // Mettre à jour résumé
    document.getElementById('resume').innerHTML = `SDB: ${points["SDB"]} pts<br>Cuisine: ${points["Cuisine"]} pts`;
}

function nextPage() {
    if(currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
}

function prevPage() {
    if(currentPage > 1) {
        currentPage--;
        document.getElementById(`page${currentPage}`).style.transform = 'rotateY(0deg)';
    }
}
