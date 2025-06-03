document.getElementById('payment-form').addEventListener('input', refreshCardDisplay);
document.getElementById('payment-form').addEventListener('submit', storeCardData);

function refreshCardDisplay() {
    const institution = document.getElementById('financial-institution').value;
    const network = document.getElementById('card-network').value;
    const number = document.getElementById('account-number').value;
    const owner = document.getElementById('customer-name').value;
    const expiry = document.getElementById('valid-until').value;

    document.getElementById('display-bank').textContent = institution || 'Название банка';
    document.getElementById('display-network').textContent = network || 'ПЛАТ.СИСТЕМА';
    document.getElementById('display-number').textContent = formatAccountNumber(number) || '•••• •••• •••• ••••';
    document.getElementById('display-owner').textContent = owner || 'Фамилия Имя';
    document.getElementById('display-expiry').textContent = expiry || 'ММ/ГГ';
}

function formatAccountNumber(num) {
    return num.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
}

function storeCardData(event) {
    event.preventDefault();

    if (!validateInputs()) {
        return;
    }

    const institution = document.getElementById('financial-institution').value;
    const network = document.getElementById('card-network').value;
    const number = document.getElementById('account-number').value;
    const owner = document.getElementById('customer-name').value;
    const expiry = document.getElementById('valid-until').value;

    const tableBody = document.querySelector('#records-table tbody');
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = institution;
    newRow.insertCell(1).textContent = network;
    newRow.insertCell(2).textContent = formatAccountNumber(number);
    newRow.insertCell(3).textContent = owner;
    newRow.insertCell(4).textContent = expiry;

    document.getElementById('payment-form').reset();
    refreshCardDisplay();
}

function validateInputs() {
    const number = document.getElementById('account-number').value;
    const owner = document.getElementById('customer-name').value;
    const expiry = document.getElementById('valid-until').value;

    const isNumberValid = /^\d{16}$/.test(number.replace(/\s+/g, ''));
    const isOwnerValid = /^[A-Za-zА-Яа-я\s]+$/.test(owner);
    const isExpiryValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);

    document.getElementById('number-error').textContent = isNumberValid ? '' : 'Требуется 16 цифр без пробелов.';
    document.getElementById('name-error').textContent = isOwnerValid ? '' : 'Допустимы только буквы и пробелы.';
    document.getElementById('date-error').textContent = isExpiryValid ? '' : 'Формат: ММ/ГГ (например 05/25).';

    return isNumberValid && isOwnerValid && isExpiryValid;
}