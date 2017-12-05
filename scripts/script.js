// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

module.exports = function(robot) {

  // Greeting
  robot.hear(/hi|hello|howdy|hola|aloha|hey/i, function(res) {
    return res.send("Hi there!");
  });


  // Random quote: Use an array to store a number of your favorite quotes. When you ping your bot, have it return a random quote from your list.
  quotes = [
    "Don't cry because it's over, smile because it happened. ― Dr. Seuss",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ― Albert Einstein",
    "Be the change that you wish to see in the world. ― Mahatma Gandhi",
    "If you tell the truth, you don't have to remember anything. ― Mark Twain"
  ]
  robot.hear(/Tell me the quote of the day/i, function(message) {
    message.send(message.random(quotes));
  });


  // Class today: Ask your bot whether we have class today or not. Use JavaScript to check today's date and then respond back with whether we have class or not. 
  robot.respond(/Do we have class today/i, function(msg) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    today = days[new Date().getDay()];
    if (today === 2 || today === 4) {
      msg.send("It's " + today + ", so yes we do have class!");
    } else {
      msg.send("No we don't have class because it's " + today + "!");
    }
  });

}

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/* Variables for random example */

// const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

// module.exports = function(robot) {
//   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
//   return robot.respond(/hi|hello/i, function(msg) {
//     return msg.send("Howdy!");
//   });

//   /* Random Example
//   If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
//   return robot.hear(/ship it/i, function(msg) {
//     return msg.send(msg.random(squirrels));
//   });
// };
