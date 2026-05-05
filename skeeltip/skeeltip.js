const tipSlider = document.getElementById('range');
const tipPercentage = document.getElementById('tip-percentage');

tipSlider.addEventListener('input', () => {
    const value = tipSlider.value;
    tipPercentage.textContent = value + '%';


});
function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercent = parseFloat(document.getElementById('range').value);
    const numPeople = parseInt(document.getElementById('people').value);

    const totalTip = (billAmount * tipPercent) / 100;
    const tipPerPerson = totalTip / numPeople;
    const totalPerPerson = (billAmount + totalTip) / numPeople;
    document.getElementById('results').innerHTML = `
        <p>Total Tip: $${totalTip.toFixed(2)}</p>
        <p>Tip Per Person: $${tipPerPerson.toFixed(2)}</p>
        <p>Total Per Person: $${totalPerPerson.toFixed(2)}</p>
    `;
}