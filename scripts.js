$(document).ready(function(){
    const $quotesContainer = $('#quotesContainer');
    const $tutorialsCarousel = $('#tutorialsCarousel');
    const $carouselExample = $('#carouselExample');
    const $latestCarousel = $('#latestCarousel');
    const $CarouselLatestVideos = $('#CarouselLatestVideos');

    // Function to render quotes
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

    // Template quotes
    let template =  '<div class="carousel-item ">' +
                        '<div>' +
                            '<img class="d-block w-25 float-center w-sm-50 rounded-circle float-sm-left p-sm-1 px-md-5 m-sm-5 mx-auto my-3 p-0" src=":img:" alt=":img alt:" >' +
                        '</div>' +
                        '<div class="mx-md-3 mb-md-3 mt-md-1 mx-sm-1 m-1">' +
                            '<p class="text-white mx-sm-2 mt-sm-2 pt-sm-5 px-sm-5 mx-4 my-1 p-2">:quote:</p>' +
                            '<p class="text-white font-weight-bold mx-sm-5 mx-4 my-0 px-2 py-0">:name:</p>' +
                            '<p class="text-white font-italic mx-sm-5 mx-4 my-0 px-2 py-0">:job title:</p>' +
                        '</div>' +
                    '</div>';

    // Function to get Quotes
    function getQuotes() {
        $.ajax ({
            url: 'https://smileschool-api.hbtn.info/quotes',
            success: function(data, textStatus, xhr) {
                if ($quotesContainer[0].id == 'quotesContainer') {
                    $quotesContainer.find('.loader').remove()
                    renderQuotes(data);
                }
            }
        })
    }

    // Template tutorial videos
    let TutorialTemplate = '<div class="carousel-item col-12 col-md-6 col-lg-3 >' +
                                '<div class="card my-2 border-0 ">' +
                                    '<div class="video-element">' +
                                        '<div class="video-background">' +
                                            '<img class="img-fluid w-100 mx-auto d-block" src=":img:" alt=":img alt:">' +
                                            '<div class="video-overlay">' +
                                                '<img  class="w-75" src="./images/play.png" alt="Play">' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="card-body p-1">' +
                                        '<p class="card-title text-black font-weight-bold">:title:</p>' +
                                        '<p class="">:sub title:</p>' +
                                        '<div class="d-flex align-items-center">' +
                                            '<img class="rounded-circle w-25 text-left" src=":img author:" alt=":author alt:">' +
                                            '<p class="text-primary-color text-right ml-3">:author name:</p>' +
                                        '</div>' +
                                        '<div class="d-flex align-items-center">' +
                                            '<img src=":star1:" alt="Start">' +
                                            '<img src=":star2:" alt="Start">' +
                                            '<img src=":star3:" alt="Start">' +
                                            '<img src=":star4:" alt="Start">' +
                                            '<img src=":star5:" alt="Start">' +
                                            '<p class="text-primary-color small text-center ml-auto">:duration:</p>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';

    // Template latest videos
    let videosTemplate = '<div class="carousel-item col-12 col-md-6 col-lg-3 >' +
        '<div class="card my-2 border-0 ">' +
            '<div class="video-element">' +
                '<div class="video-background">' +
                    '<img class="img-fluid w-100 mx-auto d-block" src=":img:" alt=":img alt:">' +
                    '<div class="video-overlay">' +
                        '<img  class="w-75" src="./images/play.png" alt="Play">' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="card-body p-1">' +
                '<p class="card-title text-black font-weight-bold">:title:</p>' +
                '<p class="">:sub title:</p>' +
                '<div class="d-flex align-items-center">' +
                    '<img class="rounded-circle w-25 text-left" src=":img author:" alt=":author alt:">' +
                    '<p class="text-primary-color text-right ml-3">:author name:</p>' +
                '</div>' +
                '<div class="d-flex align-items-center">' +
                    '<img src=":star1:" alt="Start">' +
                    '<img src=":star2:" alt="Start">' +
                    '<img src=":star3:" alt="Start">' +
                    '<img src=":star4:" alt="Start">' +
                    '<img src=":star5:" alt="Start">' +
                    '<p class="text-primary-color small text-center ml-auto">:duration:</p>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

    // Function to render tutorial videos
    function renderTutorials(tutorials) {
        tutorials.forEach(tutorial => {
            let star = tutorial.star;
            let article = TutorialTemplate.replace(':img:', tutorial.thumb_url)
                .replace(':img alt:', "Image" + tutorial.id)
                .replace(':title:', tutorial.title)
                .replace(':sub title:', tutorial["sub-title"])
                .replace(':img author:', tutorial.author_pic_url)
                .replace(':author alt:', tutorial.author + "Picture")
                .replace(':author name:', tutorial.author)
                .replace(':star1:', function() {
                    if (star >= 1) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star2:', function() {
                    if (star >= 2) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star3:', function() {
                    if (star >= 3) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star4:', function() {
                    if (star >= 4) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star5:', function() {
                    if (star >= 5) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':duration:', tutorial.duration);
                $tutorialsCarousel.append($(article));
        })
        if ($carouselExample[0].id == 'carouselExample') {
            $('#carouselExample .carousel-item').eq(0).attr('class', 'carousel-item col-12 col-md-6 col-lg-3 active');
        }
    }

    // Function to render Latest videos
    function renderLatestVideos(videos) {
        videos.forEach(video => {
            let star = video.star;
            let article = videosTemplate.replace(':img:', video.thumb_url)
                .replace(':img alt:', "Image" + video.id)
                .replace(':title:', video.title)
                .replace(':sub title:', video["sub-title"])
                .replace(':img author:', video.author_pic_url)
                .replace(':author alt:', video.author + "Picture")
                .replace(':author name:', video.author)
                .replace(':star1:', function() {
                    if (star >= 1) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star2:', function() {
                    if (star >= 2) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star3:', function() {
                    if (star >= 3) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star4:', function() {
                    if (star >= 4) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star5:', function() {
                    if (star >= 5) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':duration:', video.duration);
                $latestCarousel.append($(article));
        })
        console.log($CarouselLatestVideos[0].id == 'CarouselLatestVideos')
        if ($CarouselLatestVideos[0].id == 'CarouselLatestVideos') {
            $('#CarouselLatestVideos .carousel-item').eq(0).attr('class', 'carousel-item col-12 col-md-6 col-lg-3 active');
        }
    }

    // Function to get Tutorials videos
    function getTutorials() {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/popular-tutorials',
            success: function(data, textStatus, xhr) {
                if ($tutorialsCarousel[0].id == 'tutorialsCarousel') {
                    $tutorialsCarousel.find('.loader').remove();
                    renderTutorials(data);
                }
            }
        })
    };

    // Function to display carousel
    function carousel(){
        if ($carouselExample[0].id == 'carouselExample') {
            $('#carouselExample').on('slide.bs.carousel', function (e) {
                var $e = $(e.relatedTarget);
                var idx = $e.index();
                var itemsPerSlide = 5;
                var totalItems = $('.carousel-item').length;
                // console.log('index' + idx);
                // console.log('ItemsXslide' + itemsPerSlide);
                // console.log('Total Items' + totalItems)
                if (idx >= totalItems-(itemsPerSlide-1)) {
                    var it = itemsPerSlide - (totalItems - idx);
                    for (let i = 0; i < it; i++) {

                        if (e.direction=="left") {
                            $('.carousel-item').eq(i).appendTo('.carousel-inner');
                        }
                        else {
                            $('.carousel-item').eq(0).appendTo('.carousel-inner');
                        }
                    }
                }
            });
        }
    };

    // Function to get Latest Videos
    function getLatest() {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/latest-videos',
            success: function(data, textStatus, xhr) {
                console.log($latestCarousel[0].id == 'latestCarousel')
                if ($latestCarousel[0].id == 'latestCarousel') {
                    $latestCarousel.find('.loader').remove();
                    renderLatestVideos(data);
                }
            }
        })
    };
    // Function to render carousel
    function carousel2(){
        console.log($CarouselLatestVideos[0].id == 'CarouselLatestVideos')
        if ($CarouselLatestVideos[0].id == 'CarouselLatestVideos') {
            $('#CarouselLatestVideos').on('slide.bs.carousel', function (e) {
                var $e = $(e.relatedTarget);
                var idx = $e.index();
                var itemsPerSlide = 5;
                var totalItems = $('.carousel-item').length;
                // console.log('index' + idx);
                // console.log('ItemsXslide' + itemsPerSlide);
                // console.log('Total Items' + totalItems)
                if (idx >= totalItems-(itemsPerSlide-1)) {
                    var it = itemsPerSlide - (totalItems - idx);
                    for (let i = 0; i < it; i++) {

                        if (e.direction=="left") {
                            $('.carousel-item').eq(i).appendTo('.carousel-inner');
                        }
                        else {
                            $('.carousel-item').eq(0).appendTo('.carousel-inner');
                        }
                    }
                }
            });
        }
    };

    // Function to get courses data
    function getCoursesInfo() {
        $('#SearchVideos').find('.loader').remove();
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/courses',
            success: function(data, textStatus, xhr) {
                renderTopic(data.topic, data.topics);
                renderSort(data.sort, data.sorts);
                renderSearchVideos(data.courses)
            }
        })
    };

    let ItemsTemplate = '<option class="dropdown-item shadow-none" value=":val:">:item:</option>'

    //Function to render Topic in dropdown
    function renderTopic(name, topics) {
        $('#topics').html(name);
        topics.forEach(topic => {
            let article = ItemsTemplate.replace(':item:', topic).replace(':val:', topic)
            $('#topics').append($(article));
        });
    }
    let selectedTopic = 'all';
    let selectedSort = 'most_popular';

    // Function to render Sort in dropdown
    function renderSort(name, sorts) {
        $('#sortItems').html(name);
        sorts.forEach(e => {
            let article = ItemsTemplate.replace(':item:', e).replace(':val:', e);
            $('#sortItems').append($(article));
        });
    }

    // Funcion to change topic option
    $('#topics').change(function(){
        selectedTopic = $(this).children("option:selected").val();
        keyword = $('#keyword').val();
        selectedSort = $('#sortItems').children("option:selected").val();
        let $loader = $('<div class="loader my-5"></div>');
        $('#SearchVideos').append($loader);
        callData(keyword, selectedTopic, selectedSort);
    });

    // Function to change sort option
    $('#sortItems').change(function(){
        selectedSort = $(this).children("option:selected").val();
        keyword = $('#keyword').val();
        selectedTopic = $('#topics').children("option:selected").val();
        let $loader = $('<div class="loader my-5"></div>');
        $('#SearchVideos').append($loader);
        callData(keyword, selectedTopic, selectedSort);
    });

    // Function to get keyword-input
    $(document).on('keypress', '#keyword', function(e) {
        if (e.which === 13) {
          var input = $(this);
          var keyword = input.val();
          selectedTopic = $('#topics').children("option:selected").val();
          selectedSort = $('#sortItems').children("option:selected").val();
          let $loader = $('<div class="loader my-5"></div>');
          $('#SearchVideos').append($loader);
          callData(keyword, selectedTopic, selectedSort);
        }
    });

    // Function to call data
    function callData(keyword, selectedTopic, selectedSort) {
        //console.log(keyword, selectedTopic, selectedSort)
        $('#SearchVideos').find('.loader').remove();
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/courses?',
            data: { q: keyword,
                    topic: selectedTopic,
                    sort: selectedSort},
            success: function(res, textStatus, xhr) {
                renderSearchVideos(res.courses);
            }
        })
    }

    // Template to render video search
    let SearchItems = '<div class="col-12 col-md-4 col-lg-3">' +
                        '<div class="card my-2 border-0 ">' +
                            '<div class="video-element">' +
                                '<div class="video-background">' +
                                    '<img class="img-fluid w-100" src=":img:" alt=":img alt:">' +
                                    '<div class="video-overlay">' +
                                        '<img  class="w-75" src="./images/play.png" alt="Play">' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="card-body p-1">' +
                                '<p class="card-title text-black font-weight-bold">:title:</p>' +
                                '<p class="">:sub title:</p>' +
                                '<div class="d-flex align-items-center">'+
                                    '<img class="rounded-circle w-25 text-left" src=":img author:" alt=":author alt:">' +
                                    '<p class="text-primary-color text-right ml-3">:author name:</p>' +
                                '</div>' +
                                '<div class="d-flex align-items-center">' +
                                    '<img src=":star1:" alt="Start">' +
                                    '<img src=":star2:" alt="Start">' +
                                    '<img src=":star3:" alt="Start">' +
                                    '<img src=":star4:" alt="Start">' +
                                    '<img src=":star5:" alt="Start">' +
                                    '<p class="text-primary-color pt-3 ml-auto">8 min</p>' +
                                '</div>' +
                            '</div>' +
                        '</div>'+
                    '</div>'

    // Function to render search videos
    function renderSearchVideos(videos) {
        $('#SearchVideos').find('#foundVideos').remove();
        $('#numVideos').html(videos.length + ' videos');
        let $found = $('<div class="row" id="foundVideos"></div>');
        $('#SearchVideos').append($found);
        videos.forEach(video=> {
            let star = video.star;
            let article = SearchItems.replace(':img:', video.thumb_url)
                .replace(':img alt:', "Image" + video.id)
                .replace(':title:', video.title)
                .replace(':sub title:', video["sub-title"])
                .replace(':img author:', video.author_pic_url)
                .replace(':author alt:', video.author + "Picture")
                .replace(':author name:', video.author)
                .replace(':star1:', function() {
                    if (star >= 1) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star2:', function() {
                    if (star >= 2) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star3:', function() {
                    if (star >= 3) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star4:', function() {
                    if (star >= 4) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':star5:', function() {
                    if (star >= 5) {
                        return './images/star_on.png';
                    } else
                        return './images/star_off.png';})
                .replace(':duration:', video.duration);
                $('#foundVideos').append($(article));
        })
    }

    if (document.getElementById('quotesContainer')) {
        getQuotes();
    }

    if (document.getElementById('carouselExample')) {
        getTutorials();
        carousel();
    }
    if(document.getElementById('CarouselLatestVideos')) {
        getLatest();
        carousel2();
    }

    if (document.getElementById('topicItem')) {
        getCoursesInfo();
    }

})

