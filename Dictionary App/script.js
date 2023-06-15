// searchbtn
// searchinput
// wordHeading
// definition

const dictionary = (word) => {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '12d3a4203emsh072098560034438p10ed72jsnf5557bf07f9d',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    // try {
    //     const response = fetch(url, options);
    //     const result = response.json();
    //     console.log(result);
    //     wordHeading.innerHTML = result.word;
    //     definitionbox.innerHTML = result.definition;
    // } catch (error) {
    //     console.error(error);
    // }


    fetch(url, options)
        .then(response => response.json())
        .then((response) => {
            console.log(word, response.definition);
            wordHeading.innerHTML = "Meaning of: " + response.word;
            definitionbox.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.").replace("5.", "<br>5.").replace("6.", "<br>6.").replace("7.", "<br>7.").replace("8.", "<br>8.");
        })
        .catch(err => console.err(err));

}


searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchinput.value)
})


function visitLink(func){
    link = func.value;
    window.open(link);
}