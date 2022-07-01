import { update as updateSnake, draw as drawSnake, getSnakeHead, SnakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood } from './food.js';
import { outsiteGrid } from './grid.js';

let gameOver = false;
let lastRenderTime = 0;
const SNAKE_SPEED = 1/9;
export default function main(currentTime) {
    
    
    const gameboard = document.getElementById('game-board');
    
    
    if(gameOver){
        if (confirm('You lost!')){
            window.location.reload();
        }
        window.location.reload();
        return;
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    
    update();
    draw(gameboard);


    
}





function update() {
    updateFood();
    updateSnake();
    checkDeath();
}

function draw(gameBoard) {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);

}

function checkDeath() {
    gameOver = outsiteGrid(getSnakeHead()) || SnakeIntersection();
}