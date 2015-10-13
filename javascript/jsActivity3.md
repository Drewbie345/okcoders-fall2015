JavaScript Activity #3

1. Build a Number Guessing Game!

* Generate and store a secret, random number
* Prompt the user for a number between 1 and 100
* Respond to the user's number:
	* If higher, it says to pick lower
	* If lower, it says to pick higher
* Repeat steps 2 and 3 until the user picks the correct number
* Congratulate the user when they win!

TIP: Practice using functions! Don't use a 'while' or a 'for' loop for this activity!

NOTE: Use the code snippet below to generate the random number.

  ```js
  var secretNumber = parseInt(Math.random() * 100, 10) + 1;
  ```