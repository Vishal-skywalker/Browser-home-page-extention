const data = localStorage.getItem('displayText');
const displayText = document.getElementById('displayText');
displayText.innerHTML = data === '' || data === null || data === undefined ? displayText.innerHTML : data;