const categories = ['Lunch', 'Dinner', 'Sushi', 'Desserts', 'Drinks'];

function getRandomCategory() {
    return categories[Math.floor(Math.random() * categories.length)];
}

function setSpecialsLink() {
    const specialsLink = document.querySelector('#specials-link');
    if (specialsLink) {
        const randomCategory = getRandomCategory();
        specialsLink.setAttribute('onclick', `$dc.loadMenuItems('${randomCategory}');`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setSpecialsLink();
});
