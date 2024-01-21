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
            let inputStr: string = input.value;
            if (inputStr == "") {
                //if lets to empty string "" page does not responde to navigate.
                navigate("/Results/" + "ok");
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