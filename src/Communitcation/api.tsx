
async function getData(userInput: any) {
    // for now set up for title search only. 
    // will update to do different types once completed
    const url = 'https://hapi-books.p.rapidapi.com/search/cats';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a122f83c62msh9cc7775d532a038p19b977jsn86ba7194c4da',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export { getData };