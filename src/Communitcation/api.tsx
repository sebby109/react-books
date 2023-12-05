
async function getData(userInput: any) {
    // for new set up for title search only. 
    // will update to do different types once completed
    const url = 'https://book-finder1.p.rapidapi.com/api/search?title=' + userInput + '&lexile_min=600&lexile_max=800&results_per_page=10';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a122f83c62msh9cc7775d532a038p19b977jsn86ba7194c4da',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export { getData };