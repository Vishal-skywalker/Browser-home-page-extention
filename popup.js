
const data = localStorage.getItem('displayText');
displayText.value = data;
displayText.addEventListener('input', e => submitButton.value = 'Save');
form.addEventListener('submit', e => {
    e.preventDefault();
    submit();
})
const submit = () => {
    const data = displayText.value;
    localStorage.setItem('displayText', data);
    submitButton.value = 'Saved'
}
