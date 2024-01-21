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
            <div id="resDiv">
                <NavBar />
                <div id="parentDiv">
                    <Container fluid id="resultContainer">
                        {spin ? (<Spinner animation="border" id="spin" />)
                            : (<Rows bArr={bData} />)
                        }
                    </Container>
                </div>
            </div>
            <div id="credits">
                <a href="https://www.freepik.com/free-photo/beautiful-arrangement-different-books_12892753.htm#query=books&position=34&from_view=search&track=sph&uuid=7bfbb436-7fac-46bf-830a-b8b580de80b5">
                    Image by Freepik
                </a>
            </div>
        </>
    );
}

export default Results;