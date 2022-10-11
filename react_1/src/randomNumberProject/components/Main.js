import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Main = () => {

    const [numberOfGuess, setNumberOfGuess] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [randomNumber, setRandomNumber] = useState(null)
    const [resultText, setResultText] = useState("");
    
    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100 + 1));
    }, []);

    useEffect(() => {

        if (numberOfGuess > 7) {
            setResultText("Bạn thua rồi");
            resetGame();
            return;
        }
        return () => {
            if (numberOfGuess === 7) {
                alert('ban da thua')
            }
        }
    }, [numberOfGuess]);

    const resetGame = () => {
        setNumberOfGuess(0);
        setInputValue(0);
        setRandomNumber(Math.floor(Math.random() * 100 + 1));
        setResultText("");
    };

    const checkRound = () => {
        setNumberOfGuess(numberOfGuess + 1);
        

        if (inputValue === randomNumber) {
            setResultText("Bạn đoán đúng rồi ");
            setNumberOfGuess(0);
            setInputValue(0);
            setRandomNumber(Math.floor(Math.random() * 100 + 1));
        } else if (inputValue > randomNumber) {
            setResultText("so lon qua");
        } else {
            setResultText("so be qua");
        }
    };

    const changeInput = (e) => {
        setInputValue(e.target.value ? parseInt(e.target.value) : null);
    };
    return (
        <div className="main">
            <Row>
                <Button variant="success" onClick={resetGame}>
                    new game {randomNumber}
                </Button>
            </Row>
            <Row>So lan doan cua ban la {numberOfGuess}</Row>
            <Row>
                <Col>
                    <div>
                        <Form.Control
                            onChange={changeInput}
                            value={inputValue}
                            type="number"
                            placeholder="Enter number"
                        />
                    </div>
                </Col>
                <Col>
                    <Button onClick={checkRound}>Check</Button>
                </Col>
            </Row>
            <p>{resultText}</p>
        </div>
    );
};

export default Main;
