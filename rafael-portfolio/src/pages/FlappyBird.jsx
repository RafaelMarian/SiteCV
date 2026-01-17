// src/pages/FlappyBird.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './FlappyBird.css';

const BIRD_WIDTH = 50;
const BIRD_HEIGHT = 35;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 100;
const PIPE_WIDTH = 60;
const PIPE_GAP = 200;
const INITIAL_SPEED = 5;
const SPEED_INCREASE = 0.5;

const FlappyBird = () => {
    const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'over'
    const [birdPosition, setBirdPosition] = useState(250);
    const [pipeHeight, setPipeHeight] = useState(200);
    const [pipeLeft, setPipeLeft] = useState(GAME_WIDTH);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(INITIAL_SPEED);
    const [birdRotation, setBirdRotation] = useState(0);
    const gameContainerRef = useRef(null);

    const handleStartGame = () => {
        setBirdPosition(250);
        setPipeHeight(200);
        setPipeLeft(GAME_WIDTH);
        setScore(0);
        setSpeed(INITIAL_SPEED);
        setBirdRotation(0);
        setGameState('playing');
    };

    const handleJump = useCallback(() => {
        if (gameState === 'playing') {
            let newBirdPosition = birdPosition - JUMP_HEIGHT;
            if (newBirdPosition < 0) {
                setBirdPosition(0);
            } else {
                setBirdPosition(newBirdPosition);
            }
            setBirdRotation(-20);
        } else if (gameState === 'menu' || gameState === 'over') {
            handleStartGame();
        }
    }, [birdPosition, gameState]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space') {
                handleJump();
            }
        };
        const handleGameClick = (e) => {
            e.stopPropagation();
            handleJump();
        }

        const gameEl = gameContainerRef.current;

        window.addEventListener('keydown', handleKeyPress);
        gameEl.addEventListener('click', handleGameClick);
        gameEl.addEventListener('touchstart', handleGameClick);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            if (gameEl) {
                gameEl.removeEventListener('click', handleGameClick);
                gameEl.removeEventListener('touchstart', handleGameClick);
            }
        };
    }, [handleJump]);

    useEffect(() => {
        let gameLoop;
        if (gameState === 'playing' && birdPosition < GAME_HEIGHT - BIRD_HEIGHT) {
            gameLoop = setInterval(() => {
                setBirdPosition(birdPosition => birdPosition + GRAVITY);
                setBirdRotation(rotation => Math.min(rotation + GRAVITY / 2, 90));
            }, 24);
        } else if (birdPosition >= GAME_HEIGHT - BIRD_HEIGHT) {
            setGameState('over');
        }
        return () => {
            clearInterval(gameLoop);
        };
    }, [birdPosition, gameState]);

    useEffect(() => {
        let pipeLoop;
        if (gameState === 'playing') {
            pipeLoop = setInterval(() => {
                setPipeLeft(pipeLeft => {
                    if (pipeLeft < -PIPE_WIDTH) {
                        setPipeLeft(GAME_WIDTH);
                        setPipeHeight(Math.floor(Math.random() * (GAME_HEIGHT - PIPE_GAP)));
                        setScore(score => {
                            const newScore = score + 1;
                            setSpeed(INITIAL_SPEED + Math.floor(newScore / 5) * SPEED_INCREASE);
                            return newScore;
                        });
                    }
                    return pipeLeft - speed;
                });
            }, 24);
        }
        return () => {
            clearInterval(pipeLoop);
        };
    }, [gameState, speed]);

    useEffect(() => {
        if (gameState !== 'playing') return;

        const birdLeft = 100;
        const birdRight = birdLeft + BIRD_WIDTH;
        const pipeRight = pipeLeft + PIPE_WIDTH;

        const isBirdHorizontallyInsidePipe = birdRight > pipeLeft && birdLeft < pipeRight;

        if (isBirdHorizontallyInsidePipe) {
            const birdTop = birdPosition;
            const birdBottom = birdPosition + BIRD_HEIGHT;
            const topPipeBottom = pipeHeight;
            const bottomPipeTop = pipeHeight + PIPE_GAP;
            const collidesWithTop = birdTop < topPipeBottom;
            const collidesWithBottom = birdBottom > bottomPipeTop;

            if (collidesWithTop || collidesWithBottom) {
                setGameState('over');
            }
        }
    }, [birdPosition, pipeHeight, pipeLeft, gameState]);

    return (
        <div className="flappy-bird-container" ref={gameContainerRef}>
            <div className="score">{score}</div>
            {gameState === 'menu' && (
                <div className="start-screen">
                    <h1>Flappy Bird</h1>
                    <button onClick={handleStartGame}>Start</button>
                </div>
            )}
            <div className="bird" style={{ top: birdPosition, left: 100, transform: `rotate(${birdRotation}deg)` }} />
            <div className="pipe pipe-top" style={{ height: pipeHeight, left: pipeLeft, width: PIPE_WIDTH }} />
            <div className="pipe pipe-bottom" style={{ height: GAME_HEIGHT - pipeHeight - PIPE_GAP, left: pipeLeft, top: pipeHeight + PIPE_GAP, width: PIPE_WIDTH }} />
            { gameState === 'over' && (
                 <div className="game-over-screen">
                    <h2>Game Over</h2>
                    <p>Score: {score}</p>
                    <button onClick={handleStartGame}>Restart</button>
                </div>
            )}
        </div>
    );
};

export default FlappyBird;