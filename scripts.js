$(document).ready(function(){
    let $quotesContainer = $('#quotesContainer');

    function renderQuotes(quotes) {
        quotes.forEach(quote => {
            let article = template.replace(':img:', quote.pic_url)
                .replace(':img alt:', quote.name + "Photo")
                .replace(':quote:', quote.text)
                .replace(':name:', quote.name)
                .replace(':job title:', quote.title);
                $quotesContainer.append($(article));
        });
        $('.carousel-item').eq(0).attr('class', 'carousel-item active');
    }

    let template =  '<div class="carousel-item ">' +
                        '<div>' +
                            '<img class="d-block w-25 float-center w-sm-50 rounded-circle float-sm-left p-sm-1 px-md-5 m-sm-5 mx-auto my-3 p-0" src=":img:" alt=":img alt:" >' +
                        '</div>' +
                        '<div class="mx-md-3 mb-md-3 mt-md-1 mx-sm-1 m-1">' +
                            '<p class="text-white mx-sm-2 mt-sm-2 pt-sm-5 px-sm-5 mx-4 my-1 p-2">:quote:</p>' +
                            '<p class="text-white font-weight-bold mx-sm-5 mx-4 my-0 px-2 py-0">:name:</p>' +
                            '<p class="text-white font-italic mx-sm-5 mx-4 my-0 px-2 py-0">:job title:</p>' +
                        '</div>' +
                    '</div>'

    function getQuotes() {
        $.ajax ({
            url: 'https://smileschool-api.hbtn.info/quotes',
            success: function(data, textStatus, xhr) {
                $quotesContainer.find('.loader').remove()
                renderQuotes(data);
            }
        })
    }
    getQuotes();
})