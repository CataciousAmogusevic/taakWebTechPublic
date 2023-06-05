document.addEventListener("DOMContentLoaded", () => {

    gemeente = {"gemeente": [
        {"gepast": "Boortmeerbeek", "postcodes": ["3190", "3191"]},
        {"gepast": "Leuven", "postcodes": ["3000", "3001", "3010", "3012", "3018", "3050"]},
        {"gepast": "Mechelen", "postcodes": ["2800", "2801", "2811", "2812"]},
    ]};


    function winkel(codePost) {
        return gemeente["gemeente"].filter(
            
            function(data){ return data.postcodes.includes(codePost) }
        );
    }

    const postcode = document.getElementById("postcode");


  
    postcode.addEventListener('input', function () {
        let codePost = postcode.value;

        let resultaat = winkel(codePost);

        if (resultaat.length === 0) {
            document.getElementById("winkel").innerHTML = "";
        } 

       for (let i = 0; i < resultaat.length; i++) {
        document.getElementById("winkel").innerHTML += "<li>" + resultaat[i].gepast + "</li>";
       }
       


        
    });


});                           