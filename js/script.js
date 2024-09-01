document.addEventListener("DOMContentLoaded", function() {
    const categories = ['lunch', 'dinner', 'sushi']; 
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    const specialsLink = document.getElementById('specials-link');
    specialsLink.href = `${randomCategory}.html`;
});
