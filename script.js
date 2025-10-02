function updateWeekHeader() {
    const now = new Date();
    const day = now.getDay(); // 0 = dimanche, 1 = lundi ...
    const diffToMonday = day === 0 ? -6 : 1 - day;
    const monday = new Date(now);
    monday.setDate(now.getDate() + diffToMonday);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const mondayStr = monday.toLocaleDateString('fr-FR', options);
    const sundayStr = sunday.toLocaleDateString('fr-FR', options);

    document.getElementById('week-range').innerText = `${mondayStr} to ${sundayStr}`;
}

// Appel au chargement
updateWeekHeader();
