document.addEventListener('DOMContentLoaded', function() {
    if(!localStorage.getItem('firstVisit')) {
        localStorage.setItem('firstVisit', new Date());
        
        let uniqueVisits = localStorage.getItem('uniqueVisits') || 0;
        localStorage.setItem('uniqueVisits', ++uniqueVisits);
    }
    
    let totalVisits = localStorage.getItem('totalVisits') || 0;
    localStorage.setItem('totalVisits', ++totalVisits);
    
    document.getElementById('visit-counter').innerHTML = `
        Уникальных посещений: ${localStorage.getItem('uniqueVisits')}<br>
        Всего посещений: ${localStorage.getItem('totalVisits')}
    `;
});

