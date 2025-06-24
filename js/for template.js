fetch('../templates/header.html')
    .then(response => response.text())
    .then(html => {
      document.querySelector('header').innerHTML = html;
    })
    .catch(error => console.error('Ошибка загрузки навигации:', error));