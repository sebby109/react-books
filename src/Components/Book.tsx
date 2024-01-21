import { getBook } from '../Communitcation/api';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import '../CSSFiles/Results.css';
import Image from 'react-bootstrap/Image';

function Book() {
    //getBook(id).then(x => setbData(x)).then(z => setSpin(false)).catch(e => console.log(e));
    const { id } = useParams() as any;
    const [bData, setbData] = useState([] as any[]);
    const [spin, setSpin] = useState(true);

    useEffect(() => {
        console.log(id)
        getBook(id).then(x => setbData(x)).then(z => setSpin(false)).catch(e => console.log(e));
        //empty array allows useEffect to only run on the first render.
    }, []);

    return (
        <>
            <NavBar />
            <Container fluid id="resultContainer">
                {spin ? (<Spinner animation="border" />)
                    : (
                        <div className="bCenter">
                            <Image id="imgB" src={bData.cover} />
                            <ul id="ulB">
                                <li>Author: {bData.authors}</li>
                                <li>Published: {bData.published_date}</li>
                                <li>Rating: {bData.rating} / 5</li>
                                <li><a href={bData.url}>Purchase here</a></li>
                            </ul>
                            <p>{bData.synopsis}</p>
                        </div>
                    )
                }
            </Container>
        </>
    );
}
export default Book;