import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Container from 'react-bootstrap/Container';
import '../CSSFiles/Results.css';
import { getData } from "../Communitcation/api";
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Rows from "./Rows";

function Results() {
    // grabs the book searched from the parameters 
    const { book } = useParams();
    //const [bookData, setBookData] = useState(true);
    const [bData, setbData] = useState([] as any[]);
    const [spin, setSpin] = useState(true);
    // how im thinking this will work is Container will be empty at start. There will be loading animation
    // and maybe using useeffect hook to gather the data async. so it will have loading animation until
    // book data is gathered and displayed to the screen. Maybe make a useState that starts empty then changes once updated by the gathered
    // data

    useEffect(() => {
        console.log("here")
        getData(book).then(x => setbData(x)).then(z => setSpin(false)).catch(e => console.log(e));
        //empty array allows useEffect to only run on the first render.
    }, []);

    return (
        <>
            <NavBar />
            <div id="parentDiv">
                <Container fluid id="resultContainer">
                    {spin ? (<Spinner animation="border" />)
                        : (<Rows bArr={bData} />)
                    }
                </Container>
            </div>
        </>
    );
}

export default Results;