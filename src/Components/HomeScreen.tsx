import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../CSSFiles/HomeScreen.css';
import '../Images/different-colours-books.jpg'

function HomeScreen(){
    return (
        <div id="hsDiv">
        <Form id="mainForm">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        </Form>
        <img id="hsImg" src="../Images/different-colours-books.jpg" />
        </div>
    );
  }

export default HomeScreen;