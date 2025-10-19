// Base price of the van
const BASE_PRICE = 30999;

// Get the element where the total price will be displayed
const totalPriceElement = document.getElementById('total-price');

// Select all interactive elements that affect the price
const options = document.querySelectorAll(
    'input[type="checkbox"], input[type="radio"], select'
);

// Function to calculate and update the total price
function updatePrice() {
    let currentPrice = BASE_PRICE;

    // Iterate over all options to see which ones are selected
    options.forEach(option => {
        const cost = parseInt(option.getAttribute('data-cost'));

        if (option.type === 'checkbox') {
            // Add cost if checkbox is checked
            if (option.checked) {
                currentPrice += cost;
            }
        } else if (option.type === 'radio') {
            // Add cost if radio button is selected
            if (option.checked) {
                currentPrice += cost;
            }
        } else if (option.tagName === 'SELECT') {
            // Add cost from the currently selected option in the dropdown
            const selectedOption = option.options[option.selectedIndex];
            const selectCost = parseInt(selectedOption.getAttribute('data-cost'));
            currentPrice += selectCost;
        }
    });

    // Format the price and update the display
    totalPriceElement.textContent = '$' + currentPrice.toLocaleString('en-US');
}

// Attach the updatePrice function to the 'change' event of all options
options.forEach(option => {
    option.addEventListener('change', updatePrice);
});

// Initial price calculation on page load
updatePrice();
