//Collaborative Project Wed Feb 14-Wed Feb 21

var arrayOfSciFiBooks = ['Dune: Frank Herbert',
                         'The Left Hand of Darkness: Ursula K. LeGuin',
                         'Kindred: Octavia Butler',
                         'The Man in the High Castle: Philip K. Dick'];


/**
    Part 1A:
    Objective: Write some code that will print out each item in the array (all strings) into the console.
    A) Reminder: in the browser, the function to use to print text to the console is:
            console.log(STUFF YOU WANT TO PRINT)
    B) How do you loop through an array? What is a "loop"? The array has 4 items, but what if it's an array
    with 500 items? e.g.: var arrayOfNumers = [1,2,3,4,...500]

    Part 1B:
    Objective: Loop through the above array, and format the array of strings to an array of objects (in JavaScript)
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

    Assigned to: 2 students

    Write your code below:

**/

//YOUR CODE GOES HERE


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

    Assigned to: 1 student
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

    Assigned to: 2 students
    Write your code below:

**/

//YOUR CODE GOES HERE
