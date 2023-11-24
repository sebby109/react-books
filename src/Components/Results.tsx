import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import '../CSSFiles/Results.css';

function Results() {
    // grabs the book searched from the parameters 
    const { book } = useParams();
    // how im thinking this will work is Container will be empty at start. There will be loading animation
    // and maybe using useeffect hook to gather the data async. so it will have loading animation until
    // book data is gathered and displayed to the screen. Maybe make a useState that starts empty then changes once updated by the gathered
    // data
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <div id="imgContainer">
                        <Image id="img" src="https://img.freepik.com/premium-photo/stack-books-mug-cozy-reading-with-warm-drink_564702-31.jpg?w=826" rounded />
                        <div id="text">
                            {book}
                            <br />
                            rating and stock status go here
                        </div>
                    </div>
                </Row>

                <Row>
                    <Image id="img" src="https://img.freepik.com/premium-photo/stack-books-mug-cozy-reading-with-warm-drink_564702-31.jpg?w=826" rounded /> {book}
                </Row>
            </Container>

        </div>
    );
}

export default Results;