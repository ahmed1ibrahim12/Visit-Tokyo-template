document.addEventListener('DOMContentLoaded', () => {
    const visitDiv = document.querySelector('.visit');
    const tripsDiv = document.querySelector('.trips');
    const foodDiv = document.querySelector('.food');
    const cards = document.querySelectorAll('.card-list');

    visitDiv.addEventListener('click', () => {
        toggleCard(visitDiv, 'card1');
    });
    tripsDiv.addEventListener('click', () => {
        toggleCard(tripsDiv, 'card2');
    });
    foodDiv.addEventListener('click', () => {
        toggleCard(foodDiv, 'card3');
    });

    function toggleCard(activeDiv, cardClass) {
        // Remove border from all divs and set color #ccc for non-active ones
        [visitDiv, tripsDiv, foodDiv].forEach(div => {
            if (div === activeDiv) {
                div.style.borderBottom = '3px solid #F05454'; // Active div
            } else {
                div.style.borderBottom = '3px solid #ccc'; // Inactive divs
            }
        });
        
        // Toggle card visibility
        cards.forEach(card => {
            if (card.classList.contains(cardClass)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
