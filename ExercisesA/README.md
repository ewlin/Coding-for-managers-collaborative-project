# Exercises (Feb 8, 2018) Week 3 

## NOTE: For this exercise, you should use your console in any web browser. To open the console, as a reminder: 
> option-command-i
Then click the 'console' tab

### The two slashes (//) before some text in JavaScript is the way of commenting in JavaScript
### Often, I'll indicate the result of a line of code right after the line as a comment

## 1: Similarities between Strings and Arrays
### REVIEW: 
* Recall that if you had a string "hello", you can store the string inside a variable like this: 
```javascript
var aString = "hello"; 
```
* Now, you can access or retrieve the different characters in the string using an index value and the variable name or reference. 
```javascript
aString[1] // "e"
aString[aString.length - 1] // "o"
aString[0] // "h"
```
* While we normally start counting with '1' in real life, in programming, you always count a sequence of items starting from 0, so the first character in a string is accessed with the index 0- e.g., "Eric"[0] is equal to "E"

### NEW CONCEPTS:
* We learned that in JavaScript, *strings* are objects. What that means is just that strings are like us. All strings may have a different **values** ("hello" vs. "Eric" vs. "ID=1828384ab" etc.), but they all share certain characterisitics. You can always ask it certain questions (access a property) like, *how many characters is in this string?* or perform an action on the string like *turn this string into another string that\'s all caps:
```javascript
aString // "hello"
aString.length // 5 (property access)
aString.toUpperCase() // "HELLO" (a string method)
```		

* *Arrays*, which are ordered, sequential lists of values are very similar to strings. Like the characters in any string, the values in an array are sequentially ordered, so you can ask an array a lot of the same questions

### Exercise: 
Given the following code: 
```javascript
var arrayOfSciFiBooks = ['Dune: Frank Herbert', 'The Left Hand of Darkness: Ursula K. LeGuin', 'Kindred: Octavia Butler', 'The Man in the High Castle: Philip K. Dick']; 
```
1. **What would you expect the value of the following to be?**
```javascript
arrayOfSciFiBooks[0]; // ??
arrayOfSciFiBooks.length; // ??
arrayOfSciFiBooks[2]; // ??
arrayOfSciFiBooks[arrayOfSciFiBooks.length]; // ??
```
2. **With strings, you can join two or more strings by using the '+' operator. So I can do this:**
```javascript
"Hello" + ", my name is: " + "Eric" // to get "Hello, my name is: Eric" as a result
```
   I could also use the *String*.concat() method: 
```javascript
"Hello".concat(", my name is: ", "Eric") // to get the same result 
```
It turns out, you can also join arrays together using concatenation: 
```javascript
//Try this in your console:
arrayOfSciFiBooks.concat(['American Gods: Neil Gaiman', 'Cloud Atlas: David Mitchell'])
```
*Question 1:* Does using .concat on an array change the original array? That is, if you join two arrays together, and you try to reference or access your original array (i.e., arrayofSciFiBooks), does that original reference update? *Try this out! How can you test your theory?*

*Question 2:* What happens if you try to concat two arrays together using the `+` operator? 


3. **Bonus Challenge: How to replace a part of a string.**
This one will require some Googling and struggling. 

Manipulating strings is a very common part of programming and software. Any time you have some product functionality like autocomplete, or autocorrect, or data cleaning, etc. there's probably some string manipulation that's underlying the software and code. Let's take our array of books and try something: 
	 Right now, each book entry looks like: 
```javascript
'Book Title: Author Name'
```
   What if we want to change the format to `'Book Title: by Author Name'` or `'Book Title by Author Name'`? 
	 If our input is `'The Man in the High Castle: Philip K. Dick'`, how would you turn this string into the new formats using different string functions? 
   *Hint:*
	 Using what you already know about strings and arrays (index access, arrays and strings, .concat and .length, etc.), try looking up these three JavaScript functions: 
	 *String.split(), String.replace(), and Array.join()*
	 You can write your code in any way you want, but here's a hint: 
```javascript
//Your function: 
function formatBookAndAuthor(originalString) {
	//your code
	//return formattedString; 
}

//Then, when you use your function: 
formatBookAndAuthor('The Man in the High Castle: Philip K. Dick') //should result in: 
// 'The Man in the High Castle: by Philip K. Dick'
```

If you're feeling extra adventurous (or want more practice), try writing a second function that gets you this!

```javascript
//Your function: 
function anotherWayToFormatBookAndAuthor(originalString) {
	//your code
	//return formattedString; 
}

//Then, when you use your function: 
anotherWayToFormatBookAndAuthor('The Man in the High Castle: Philip K. Dick') //should result in: 
// 'The Man in the High Castle is a novel by Philip K. Dick'
anotherWayToFormatBookAndAuthor('Cloud Atlas: David Mitchell') // should result in: 
// 'Cloud Atlas is a novel by David Mitchell'
```
