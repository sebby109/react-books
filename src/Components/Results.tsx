import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import '../CSSFiles/Results.css';
import { getData } from "../Communitcation/api";
import { useState, useEffect, useRef } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Results() {
    // grabs the book searched from the parameters 
    const { book } = useParams();
    //const [bookData, setBookData] = useState(true);
    const bData = useRef([]);
    const [t, setT] = useState(true);
    // how im thinking this will work is Container will be empty at start. There will be loading animation
    // and maybe using useeffect hook to gather the data async. so it will have loading animation until
    // book data is gathered and displayed to the screen. Maybe make a useState that starts empty then changes once updated by the gathered
    // data

    useEffect(() => {
        //bugged and making too many calls. figure out problem before testing api
        //getData(book).then(x => bData.current = (JSON.parse(x!))).catch(e => console.log(e));
        if (t) {
            console.log("here");
            setT(false);
        }
        addRow();

        //empty array allows useEffect to only run on the first render.
    }, []);

    function addRow() {
        const containerId = document.getElementById("resultContainer")!;
        // removes the spinner child from the container when data is loaded
        containerId.innerHTML = "";
        containerId.innerHTML += "hello"
    }

    return (
        <>
            <NavBar />
            <div id="parentDiv">
                <Container fluid id="resultContainer">
                    <Spinner animation="border" />
                </Container>

            </div>
        </>
    );
}

export default Results;