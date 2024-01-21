import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import '../CSSFiles/Results.css';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Rows(props: any) {
    const books: any[] = props.bArr;
    const navigate = useNavigate();

    const handleClick = (id: string) => (event: any) => {
        navigate("/book/" + id);
    };

    // left off here.
    return (
        <Container id="rContainer">
            {books.map(cur_book =>
                <Row id="myRow">
                    <div id="imgContainer">
                        <Image id="img" src={cur_book.cover} rounded />
                        <div id="text">
                            {cur_book.name}
                            <br />
                            Users rated this: {cur_book.rating} / 5
                            <br />
                            <Button variant='secondary' onClick={handleClick(cur_book.book_id)}> More info </Button>
                        </div>
                    </div>
                    <hr />
                </Row>
            )
            }
        </Container>
    );
}

export default Rows;