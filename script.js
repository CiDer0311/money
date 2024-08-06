const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
    input.addEventListener('input', handleInput);
});

function handleInput(event) {
    const input = event.target;
    if (input.value < 0) {
        input.value = 0; // マイナス値を0にリセット
    }
    calculateTotal();
}

function calculateTotal() {
    const total =
        (document.getElementById('yen10000').value * 10000) +
        (document.getElementById('yen5000').value * 5000) +
        (document.getElementById('yen1000').value * 1000) +
        (document.getElementById('yen500').value * 500) +
        (document.getElementById('yen100').value * 100) +
        (document.getElementById('yen50').value * 50) +
        (document.getElementById('yen10').value * 10) +
        (document.getElementById('yen5').value * 5) +
        (document.getElementById('yen1').value * 1);

    document.getElementById('totalAmount').value = total.toLocaleString();
}
