import React, { useState, useEffect, useRef } from 'react';
import './NewFlappyBird.css';

// --- Constants ---
const GROUND_HEIGHT = 110;
const GAME_WIDTH = 384;
const GAME_HEIGHT = 512;
const GAME_SPEED = 120;
const PIPE_INTERVAL = 1.8;
const BIRD_VELOCITY = 250;
const BIRD_JUMP_VELOCITY = -200;
const BIRD_WIDTH = 50;
const BIRD_HEIGHT = 40;
const PIPE_WIDTH = 60;
const PIPE_GAP = 150;

const Game = () => {
    const [birdPosition, setBirdPosition] = useState({ x: 50, y: 250 });
    const [birdVelocityY, setBirdVelocityY] = useState(0);
    const [pipes, setPipes] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const gameLoopRef = useRef();
    const lastTimeRef = useRef();
    const pipeTimerRef = useRef();

    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const gameLoop = (currentTime) => {
            if (!lastTimeRef.current) {
                lastTimeRef.current = currentTime;
            }
            const deltaTime = (currentTime - lastTimeRef.current) / 1000;
            lastTimeRef.current = currentTime;

            // --- Bird physics ---
            const newVelocityY = birdVelocityY + (BIRD_VELOCITY * deltaTime);
            let newBirdY = birdPosition.y + newVelocityY * deltaTime;
            setBirdVelocityY(newVelocityY);

            // --- Ground collision ---
            if (newBirdY > GAME_HEIGHT - GROUND_HEIGHT - BIRD_HEIGHT) {
                newBirdY = GAME_HEIGHT - GROUND_HEIGHT - BIRD_HEIGHT;
                setGameOver(true);
            }

            // --- Ceiling collision ---
            if (newBirdY < 0) {
                newBirdY = 0;
                setGameOver(true);
            }
            
            setBirdPosition({ ...birdPosition, y: newBirdY });
            
            // --- Pipe movement and removal ---
            let scored = false;
            const newPipes = pipes.map(pipe => {
                const newX = pipe.x - GAME_SPEED * deltaTime;
                // --- Score ---
                if (!pipe.scored && newX + PIPE_WIDTH < birdPosition.x) {
                    setScore(s => s + 1);
                    scored = true;
                    return { ...pipe, x: newX, scored: true };
                }
                return { ...pipe, x: newX };
            }).filter(pipe => pipe.x > -PIPE_WIDTH);
            
            setPipes(newPipes);

            // --- Pipe collision ---
            for (let pipe of pipes) {
                const birdRight = birdPosition.x + BIRD_WIDTH;
                const birdBottom = birdPosition.y + BIRD_HEIGHT;
                const pipeRight = pipe.x + PIPE_WIDTH;

                const inX = birdRight > pipe.x && birdPosition.x < pipeRight;
                const inY = birdBottom > pipe.topPipe.y + pipe.topPipe.height || birdPosition.y < pipe.bottomPipe.y;

                if (inX && inY) {
                    setGameOver(true);
                }
            }

            gameLoopRef.current = requestAnimationFrame(gameLoop);
        };

        gameLoopRef.current = requestAnimationFrame(gameLoop);
        
        return () => {
            cancelAnimationFrame(gameLoopRef.current);
        };

    }, [gameStarted, gameOver, birdPosition, birdVelocityY, pipes]);

    // --- Pipe generation ---
    useEffect(() => {
        if (!gameStarted || gameOver) return;

        pipeTimerRef.current = setInterval(() => {
            const topPipeHeight = Math.random() * (GAME_HEIGHT - GROUND_HEIGHT - PIPE_GAP - 100) + 50;
            const bottomPipeY = topPipeHeight + PIPE_GAP;

            setPipes(p => [...p, {
                x: GAME_WIDTH,
                scored: false,
                topPipe: {
                    y: 0,
                    height: topPipeHeight,
                },
                bottomPipe: {
                    y: bottomPipeY,
                    height: GAME_HEIGHT - bottomPipeY - GROUND_HEIGHT,
                }
            }]);

        }, PIPE_INTERVAL * 1000);

        return () => {
            clearInterval(pipeTimerRef.current);
        };
    }, [gameStarted, gameOver]);

    const startGame = () => {
        setBirdPosition({ x: 50, y: 250 });
        setBirdVelocityY(0);
        setPipes([]);
        setScore(0);
        setGameOver(false);
        setGameStarted(true);
        lastTimeRef.current = null;
    };

    const jump = () => {
        if (!gameOver) {
            setBirdVelocityY(BIRD_JUMP_VELOCITY);
        }
    };

    return (
        <div className="game-container" onClick={gameStarted && !gameOver ? jump : startGame}>
            {(!gameStarted || gameOver) && (
                 <div className="start-screen">
                    {gameOver ? (
                        <div>
                            <h1>Game Over</h1>
                            <p>Score: {score}</p>
                            <button onClick={startGame}>Restart</button>
                        </div>
                    ) : (
                        "Click to Start"
                    )}
                </div>
            )}
            <div className="game-area">
                <div 
                    className="bird" 
                    style={{ top: birdPosition.y, left: birdPosition.x, width: BIRD_WIDTH, height: BIRD_HEIGHT }}
                ></div>
                {pipes.map((pipe, index) => (
                    <div key={index}>
                        <div className="pipe" style={{ left: pipe.x, top: pipe.topPipe.y, width: PIPE_WIDTH, height: pipe.topPipe.height }}></div>
                        <div className="pipe" style={{ left: pipe.x, top: pipe.bottomPipe.y, width: PIPE_WIDTH, height: pipe.bottomPipe.height }}></div>
                    </div>
                ))}
            </div>
            <div className="score-display">Score: {score}</div>
            <div className="ground"></div>
        </div>
    );
};

const NewFlappyBird = () => {
    return (
        <div className="flappy-bird-container">
            <Game />
        </div>
    );
};

export default NewFlappyBird;
