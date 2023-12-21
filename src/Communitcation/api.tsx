
// for now set up for title search only. 
// will update to do different types once completed
const url = 'https://hapi-books.p.rapidapi.com';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a122f83c62msh9cc7775d532a038p19b977jsn86ba7194c4da',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
};


async function getData(userInput: any) {

    try {
        const response = await fetch(url + "/search/" + userInput, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

async function getBook(id: any) {

    try {
        const response = await fetch(url + "/book/" + id, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}


export { getData, getBook };