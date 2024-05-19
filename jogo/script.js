class Game {
    constructor() {
        this.gameArea = document.getElementById('gameArea');
        this.circle = document.getElementById('circle');
        this.scoreDisplay = document.getElementById('score');
        this.score = 0;

        console.log("Círculo:", this.circle);

        // Adicionando um ouvinte de evento para o clique no círculo
        this.circle.addEventListener('click', this.handleClick.bind(this));
        // Mover o círculo para uma posição inicial ao carregar a página
        this.moveCircle();
    }

    handleClick() {
        this.score++;
        console.log(`Pontos: ${this.score}`); 
        this.scoreDisplay.textContent = `Pontos: ${this.score}`;
        this.moveCircle();
    }

    moveCircle() {
        const gameAreaRect = this.gameArea.getBoundingClientRect();
        const maxLeft = gameAreaRect.width - this.circle.offsetWidth;
        const maxTop = gameAreaRect.height - this.circle.offsetHeight;

        const randomLeft = Math.floor(Math.random() * maxLeft);
        const randomTop = Math.floor(Math.random() * maxTop);

        this.circle.style.left = `${randomLeft}px`;
        this.circle.style.top = `${randomTop}px`;
    }
}

// Inicializar o jogo
document.addEventListener('DOMContentLoaded', () => {
    new Game();
});
