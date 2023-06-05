document.addEventListener("DOMContentLoaded", () => {

    cats = {"cats": [
        {"ras": "abessijn", "eigenschappen": ["actief", "eigengereid", "extravert", "gehecht aan eigenaar"]},
        {"ras": "amerikaans korthaar", "eigenschappen": ["vriendelijk", "speels", "mensvriendelijk", ]},
        {"ras": "bengaals", "eigenschappen": ["zelfverzekerd", "spraakzaam", "mensvriendelijk"]},
        {"ras": "britse langhaar", "eigenschappen": ["rustig", "geduldig"]},
        {"ras": "britse korthaar", "eigenschappen": ["rustig", "geduldig"]},
        {"ras": "chartreux", "eigenschappen": ["intelligent", "rustig", "mensvriendelijk"]},
        {"ras": "perzisch", "eigenschappen": ["rustig", "lief", "vriendelijk"]},
        {"ras": "schout vouwkat", "eigenschappen": ["kalm", "rustig", "huiselijk", "introvert"]},
        {"ras": "siamees", "eigenschappen": ["actief", "eigengereid", "extravert", "gehecht aan eigenaar"]},
        {"ras": "Turkse van", "eigenschappen": ["actief", " speelt graag", "vrolijk", "gehecht aan eigenaar", "extravert"]}
     ]};


    function filterCats(eigenschap) {
        return cats["cats"].filter(
            
            function(data){ return data.eigenschappen.includes(eigenschap) }
        );
    }

    const zoekBalk = document.getElementById("zoekBalk");


  
    zoekBalk.addEventListener('input', function () {
        let eigenschap = zoekBalk.value;

        let resultaat = filterCats(eigenschap);

        // If no cats are found, clear the list
        if (resultaat.length === 0) {
            document.getElementById("filteredCats").innerHTML = "";
        } 

       // Log all cats with the given property
       for (let i = 0; i < resultaat.length; i++) {
        // Append cats to element with id "filteredCats"
        document.getElementById("filteredCats").innerHTML += "<li>" + resultaat[i].ras + "</li>";
       }
       


        
    });


});                           