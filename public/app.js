document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded');

    // Anti-bot math question
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    document.getElementById('math-question').textContent = `${num1} + ${num2}`;

    document.getElementById('register-form').addEventListener('submit', function(e) {
        const answer = parseInt(document.getElementById('math-answer').value);
        if (answer !== num1 + num2) {
            e.preventDefault();
            alert('Incorrect math answer. Please try again.');
        }
    });

    // Admin key check
    window.checkAdminKey = function() {
        const key = document.getElementById('admin-key').value;
        if (key === 'mega123') {
            document.getElementById('admin').style.display = 'block';
        } else {
            alert('Incorrect admin key');
        }
    };

    // Sample community list
    const communities = [
        { name: "Wolf Traders", description: "Trade Wolf Coins and ghost stocks." },
        { name: "GT Growtopia", description: "Simulate Growtopia item trading." },
        { name: "Crypto Sim", description: "Speculate with imaginary crypto assets." }
    ];

    const listContainer = document.getElementById('community-list');
    communities.forEach(c => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${c.name}</strong><p>${c.description}</p>`;
        listContainer.appendChild(div);
    });
});
