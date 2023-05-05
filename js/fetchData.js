$(document).ready(function(){

    $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f3a571c250mshe47e2d3019976e4p11842ajsn8a5b46a6a95a',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        },
        type: "GET",
        success: function(data){
            $('#fetchData').empty()
            console.log(data);
            for(i = 0; i < 4; i++){
                $('#fetchData').append(`<div class="" style="width:25%; float: left;">
                <h2>${data[i].name}</h2>
                <img src="${data[i].imgSrc.img}" alt="${data[i].imgSrc.imgDescription}" style="height: 300px; width: 300px;" class="img-responsive img-thumbnail"/>
                <p style="text-align: justify; margin: 3%;">${data[i].description}</p>
                <a href="${data[i].wikiLink}">Read More</a>
              </div>`)
            }
        },
        error: function(e){
            console.log(e)
            $('#fetchData').empty().append("We encountered an error. Please refresh and try again.")
        }
    })

})