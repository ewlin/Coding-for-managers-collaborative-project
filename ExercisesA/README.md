# Exercises (Feb 8, 2018) Week 3 

## NOTE: For this exercise, you should use your console in any web browser. To open the console, as a reminder: 
> option-command-i
Then click the 'console' tab

### The two slashes (//) before some text in JavaScript is the way of commenting in JavaScript
### Often, I'll indicate the result of a line of code right after the line as a comment

## 1: Similarities between Strings and Arrays
### REVIEW: 
* Recall that if you had a string "hello", you can store the string inside a variable like this: 
    var aString = "hello"; 
* Now, you can access or retrieve the different characters in the string using an index value and the variable name or reference. 
    aString[1] // "e"
		aString[aString.length - 1] // "o"
		aString[0] // "h"
* While we normally start counting with '1' in real life, in programming, you always count a sequence of items starting from 0, so the first character in a string is accessed with the index 0- e.g., "Eric"[0] is equal to "E"

### NEW CONCEPTS:
* We learned that in JavaScript, *strings* are objects. What that means is just that strings are like us. All strings may have a different **values** ("hello" vs. "Eric" vs. "ID=1828384ab" etc.), but they all share certain characterisitics. You can always ask it certain questions (access a property) like, *how many characters is in this string?* or perform an action on the string like *turn this string into another string that\'s all caps:
    aString // "hello"
    aString.length // 5 (property access)
		aString.toUpperCase() // "HELLO" (a string method)

* *Arrays*, which are ordered, sequential lists of values are very similar to 
