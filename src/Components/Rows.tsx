import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import '../CSSFiles/Results.css';
import { Container } from 'react-bootstrap';

function Rows(props: any) {
    const books: any[] = props.bArr;
    // left off here.
    return (
        <Container>
            {books.map(cur_book =>
                <Row id="myRow">
                    <div id="imgContainer">
                        <Image id="img" src={cur_book.cover} rounded />
                        <div id="text">
                            {cur_book.book_id}
                            <br />
                            rating and stock status go here
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