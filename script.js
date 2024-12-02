fetch('https://code.jquery.com/jquery-3.5.1.slim.min.js')
  .then(response => response.text())
  .then(script => {
    // Создаем новый тег <script> и вставляем код
    const scriptElement = document.createElement('script');
    scriptElement.text = script;
    document.head.appendChild(scriptElement);
  })
  .catch(error => console.error('Error loading external script:', error));

  fetch('https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js')
  .then(response => response.text())
  .then(script => {
    // Создаем новый тег <script> и вставляем код
    const scriptElement = document.createElement('script');
    scriptElement.text = script;
    document.head.appendChild(scriptElement);
  })
  .catch(error => console.error('Error loading external script:', error));

  fetch('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js')
  .then(response => response.text())
  .then(script => {
    // Создаем новый тег <script> и вставляем код
    const scriptElement = document.createElement('script');
    scriptElement.text = script;
    document.head.appendChild(scriptElement);
  })
  .catch(error => console.error('Error loading external script:', error));
