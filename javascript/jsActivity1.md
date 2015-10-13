JavaScript Activity #1
======================

1. Write a JavaScript program that prompts the user twice – one for their first name, and one for their last name – and alerts a greeting with both names in the message.

2. Write a JavaScript program that prompts the user for a string and alerts that string in all uppercase letters.

3. Write a JavaScript program that prompts the user twice – one for their first name, and one for their last name – and alerts a greeting with both names in the message, with their last name in all uppercase.

4. Write a JavaScript program that prompts the user for a number:

* If the number is divisible by 7, alert a lucky message.
* If the number is even, alert that they are an even steven.
* HINT: try googling 'javascript check if number is even' and use the same technique you find for divisible by 7.

5. EXTENSION: Write a simplified restaurant reservation directory. See instructions below.

* Assign three variables to three different names (We'll call each of these a reservation).
* Prompt the user for a name.
* If the name is a reservation, welcome the user and mark the reservation as claimed.
* If the name is a claimed reservation, tell the user that reservation has already been taken.
* Otherwise, tell the user they need to make a reservation.
* Since we have not properly learned functions yet, you will use a while loop instead. Use the following for your program structure:

```js
/* All your reservation variables (feel free to change them) */
/* This is clearly not a great way to do this; we will learn a much better way later */
var reservation1 = 'Alice';
var reservation2 = 'Bob';
var reservation3 = 'Chris';

var reservation1_claimed = null;
var reservation2_claimed = null;
var reservation3_claimed = null;

while (true) {
  var name = prompt('CHANGE ME TO SOMETHING USEFUL');

  /* Do all your if statement logic here */

  if (name === 'exit') {
    // This breaks out of the while loop
    break;
  }
}
```