const categories = ['Lunch', 'Dinner', 'Sushi', 'Desserts', 'Drinks'];

function getRandomCategory() {
    return categories[Math.floor(Math.random() * categories.length)];
}

function setSpecialsLink() {
    const specialsLink = document.querySelector('#specials-link');
    if (specialsLink) {
        const randomCategory = getRandomCategory();
        specialsLink.setAttribute('onclick', `loadMenuItems('${randomCategory}');`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setSpecialsLink();
});

// Dummy implementation for testing purposes
function loadMenuItems(category) {
    alert(`Loading menu items for: ${category}`);
    // Replace with your actual function logic
}
