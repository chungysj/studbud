// "https://dictionaryapi.com/api/v3/references/collegiate/json/"+word+"?key=0f21b45e-307b-4c84-bdbf-aadcb1878967"
// let word = document.querySelector('#myword').value
var searchInput = document.getElementById("searchInput");
$.getJSON("https://dictionaryapi.com/api/v3/references/collegiate/json/"+searchInput+"?key=0f21b45e-307b-4c84-bdbf-aadcb1878967", 
    function(data) {
        console.log(data);
    });