import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../CSSFiles/HomeScreen.css';
import '../Images/colours-books.jpg'
import '../Images/long-row-colorful-books.jpg'

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
        <Button id="hsBt" variant="outline-success">Search</Button>
        </Form>
        <img id="hsImg" src='https://img.freepik.com/premium-photo/green-coffee-cup-glasses-office-supplies_522560-10729.jpg?w=1380' />
        <a id="imgRef" href="https://www.freepik.com/premium-photo/green-coffee-cup-glasses-office-supplies_39953511.htm#page=5&query=reading%20coffee%20white%20background&position=46&from_view=search&track=country_rows_v2">Image by kstudio on Freepik</a>
        </div>
    );
  }

export default HomeScreen;