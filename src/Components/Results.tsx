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
    const [bData, setbData] = useState([] as any[]);
    const [spin, setSpin] = useState(true);

    useEffect(() => {
        console.log(book);
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