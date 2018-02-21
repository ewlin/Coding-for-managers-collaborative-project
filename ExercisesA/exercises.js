//Collaborative Project Wed Feb 14-Wed Feb 21

/** Setup:
1) If you haven't for forked this project: https://github.com/ewlin/Coding-for-managers-collaborative-project
Fork it on your github

2) Once you've forked it, make sure you have an upstream pointed to the origin so you can pull new changes from the
original repo:
git remote add upstream https://github.com/ewlin/Coding-for-managers-collaborative-project.git

To check this is working, type:
git remote

to see if both origin and upstream are listed. Is so, you're good to go!

3) When you finish your assigned section, one of you (if you're working in pairs) should go ahead and
add/commit/push your own changes to your own forked repo (it doesn't matter which person does this). Then,
GO BACK TO MY ORIGIN REPO (https://github.com/ewlin/Coding-for-managers-collaborative-project) (NOT YOUR FORK!!!)
and create a pull request to merge your changes into the original forked repo.

!!! practice
    Everyone:
    Write your name in this list here under my name in your fork.

    Maintainers:
    Eric W. Lin
**/




var arrayOfSciFiBooks = ['Dune: Frank Herbert',
                         'The Left Hand of Darkness: Ursula K. LeGuin',
                         'Kindred: Octavia Butler',
                         'The Man in the High Castle: Philip K. Dick'];


/**
    Part 1A:
    Objective: Write some code that will print out each item in the array (all strings) into the console.
    A) Reminder: in the browser, the function to use to print text to the console is:
            console.log(STUFF YOU WANT TO PRINT)
            
            /**var arrayOfSciFiBooks = ["Dune: Frank Herbert",
                         "The Left Hand of Darkness: Ursula K. LeGuin",
                         "Kindred: Octavia Butler",
                         "The Man in the High Castle: Philip K. Dick"];

            for (var i = 0; i < arrayOfSciFiBooks.length; i++) {
            console.log(arrayOfSciFiBooks[i]);
            };
            
    B) To think about: How do you loop through an array? What is a "loop"? The array has 4 items,
    but what if it's an array with 500 items? e.g.: var arrayOfNumers = [1,2,3,4,...500]

    Part 1B:
    Objective: Loop through the above array, and format the array of strings to an array of objects (in JavaScript). You can write
    a function if you'd like, but it's not strictly required.
    Input: The array named arrayOfSciFiBooks
    Output: An array of objects that looks like this:

    var newArrayOfBooks = [
        {
            title: 'Dune',
            author: 'Frank Herbert'
        },
        {
            title: 'The Left Hand of Darkness',
            author: 'Ursula K. LeGuin'
        },
        //ETC.
    ];

    HINT: You can use some of the tools we used on Monday to reformat the string by itself (e.g., String.split(':'))

    Assigned to: Adrian & Matt

    Write your code below:

/**function newArray (test) {
var splitString = test.split(":");
var formated = "title:" + " " + splitString[0] + "," + " " + "author:" + " " + splitString[1];
return formated;
}


var arrayOfSciFiBooks = ['Dune: Frank Herbert',
                         'The Left Hand of Darkness: Ursula K. LeGuin',
                         'Kindred: Octavia Butler',
                         'The Man in the High Castle: Philip K. Dick'];

for (var i = 0; i < arrayOfSciFiBooks.length; i++) {
console.log(newArray(arrayOfSciFiBooks[i]));


/**
    Part 2:
    Objective: How to access properties on an object?
    If I Had an object...

    var book = {
        title: 'Dune',
        author: 'Frank Herbert'
    };

    A) Write code to return just the title. So...
    INPUT: book
    OUTPUT: "Dune"

    B) What about return the author?

    Assigned to: Maxwell
    Write your code below:

**/

//YOUR CODE GOES HERE


/**
    Part 3:
    Objective: Use jQuery's .append() method (function) and add new elements to the DOM
    (without changing the html file)

    In our html, we have:

    <body>
        <ul id="books">
            <li class="book">
                <h2>A Song of Ice and Fire: The Winds of Winter</h2>
                <p>George R.R. Martin</p>
            </li>
        </ul>
    </body>

    Add a <p> element with the text: 'hello' to the body, below the <ul> element, do get the rendered DOM to look
    like this:

    <body>
        <ul id="books">
            <li class="book">
                <h2>A Song of Ice and Fire: The Winds of Winter</h2>
                <p>George R.R. Martin</p>
            </li>
        </ul>
        <p>hello</p>
    </body>

    The trick is to NOT edit the html, but only add jquery code to this file!

    Assigned to: Liza & Diana
    Write your code below:
    (YOUR CODE WILL BE IN JAVASCRIPT. YOU ARE NOT WRITING ANY HTML...)

**/

//YOUR CODE GOES HERE
