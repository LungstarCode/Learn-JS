const users = [
    { name: 'John Doe', card: '123456789', pin: '1234', balance: 500, loan: 0 },
    { name: 'Jane Smith', card: '987654321', pin: '5678', balance: 1000, loan: 0 },
    { name: 'Alice Brown', card: '456789123', pin: '0000', balance: 300, loan: 0 },
];
let currentUser = null;

function showElement(id) {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function login() {
    const card = document.getElementById('login-card').value;
    const pin = document.getElementById('login-pin').value;

    const user = users.find(user => user.card === card && user.pin === pin);
    if (!user) {
        alert('Invalid card number or PIN');
        return;
    }

    currentUser = user;
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-card').textContent = user.card;
    document.getElementById('user-balance').textContent = user.balance;
    showElement('dashboard');
}

function deposit() {
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Enter a valid amount');
        return;
    }

    currentUser.balance += amount;
    document.getElementById('user-balance').textContent = currentUser.balance;
    alert('Deposit successful!');
}

function withdraw() {
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Enter a valid amount');
        return;
    }

    if (currentUser.balance < amount) {
        alert('Insufficient balance');
        return;
    }

    currentUser.balance -= amount;
    document.getElementById('user-balance').textContent = currentUser.balance;
    alert('Withdrawal successful!');
}

function loan() {
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Enter a valid amount');
        return;
    }

    currentUser.loan += amount;
    currentUser.balance += amount;
    document.getElementById('user-balance').textContent = currentUser.balance;
    alert(`Loan of $${amount} granted!`);
}

function logout() {
    currentUser = null;
    showElement('login-container');
}
