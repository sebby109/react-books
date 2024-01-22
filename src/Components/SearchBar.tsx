import Button from 'react-bootstrap/Button';
import '../CSSFiles/SearchB.css';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function SearchBar() {
    const navigate = useNavigate();

    const handleEntry = (e: any) => {
        // prevents page from refreshing
        e.preventDefault();

        const input = document.getElementById('mySearch') as HTMLInputElement | null;
        // input has type HTMLInputElement or null here

        if (input != null) {
            //cleans string and makes sure no special characters are entered
            // to avoid sql injections
            let inputStr: string = input.value.replace(/[^a-zA-Z ]/g, "");

            if (inputStr == "") {
                alert("Must enter a value")
            }
            else {
                navigate("/Results/" + inputStr);
            }
        }

        else {
            alert("Invalid entry");
        }

    }

    return (
        <>
            <Form onSubmit={handleEntry}>
                <Form.Control
                    type="text"
                    id="mySearch"
                />
                <Button variant="danger" id="sbBt" type='submit'>Submit</Button>{' '}
            </Form>
        </>
    );
}

export default SearchBar;