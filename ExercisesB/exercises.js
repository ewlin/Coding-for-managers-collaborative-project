/**
    In class:

    BACKGROUND:

    Part A:
    Set-up
    -- Go to https://www.omdbapi.com/ and https://www.omdbapi.com/apikey.aspx to set up your API key

    -- Once you're done, try copy and pasting this into your browser url:
    https://www.omdbapi.com/?i=tt1825683&apikey=[REPLACE Brackets and text WITH YOUR KEY]

    -- What does the data look like?

    Part B:
    How do we work with REST API data programmatically?

    --Make a request using AJAX:
    jQuery makes this easy with the built-in $.ajax method.
    http://api.jquery.com/jquery.ajax/

    The documentation is pretty dense. The easiest way to use $.ajax is:

    $.ajax(URL).done(What to do with data when you receive it)

    URL == API endpoint. Basically, where the domain address the API service is set up with
    What to do with data when you receive it == A function you write

    Pass in a url, and then from that, call a 'done' method which takes a callback function

    You can be more explicit about the REST method you'll be using, though it usually defaults to GET

    $.ajax({
        url: 'https://www.omdbapi.com/?i=PICK_A_MOVIE_FROM_IMDB&apikey=YOUR_API_KEY',
        method: 'GET'
    }).done(function(data) {
        console.log(data);
    });

    See what happens!

    What's printed to the console? 

**/

//Code goes here
