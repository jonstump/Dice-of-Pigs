# Pig Dice

## Description
* _Practice: Pig Dice_  
* allows two people to play a game of Pig Dice
* rules of the game appear at top of page
* first to reach or exceed 100 wins

### _This project was created solely for the education of the author(s) and is not in a complete or portfolio-ready state. It should not be considered representative of professional work._
\
[Epicodus](https://www.epicodus.com/) - [Intermediate JavaScript](https://www.learnhowtoprogram.com/intermediate-javascript) - [Week 4, Lessons 24](https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/score-of-choice-two-day-project)
\
Date created: 2021-01-27

## Specs / Tests

**Describe** Player()
<br/>
**Test 1** "It will return an instance of Player whose typeof is 'object.'"
<br/>
**Expect** typeof new Player().toEqual('object')
<br/>
**Test 2** "It will store a player name value as a string."
<br/>
**Expect** newPlayer.playerName("Jon").toEqual("Jon")
<br/>
**Test 3** "It will store an initial key for turns taken."
<br/>
**Expect** (newPlayer.turnsTaken).toEqual("0")
<br/>
**Test 4** "It will store an initial key for turn total."
<br/>
**Expect** (newPlayer.turnScore).toEqual("0")
<br/>
**Test 5** "It will store an initial key for score total."
<br/>
**Expect** (newPlayer.scoreTotal).toEqual("0")

**Describe** Player.prototype.rollDie()
<br/>
**Test 6** "It will generate an integer between 1 - 6 to simulate a six sided die."
<br/>
**Expect** rollDie().toEqual("min: 1, max:6")
<br/>
**Test 7** "It will check to see if a 1 is generated. If so it will end the player's turn." 
<br/>
**Expect** rollDie("1").toEqual(newPlayer.turnScore("0"))
<br/>
**Test 8** "It will check to see if a 1 is generated. If so it will increment by 1 turnsTaken." 
<br/>
**Expect** rollDie("1").toEqual(newPlayer.turnsTaken++)
<br/>
**Test 9** "It will check to see if a 2-6 is generated. If so it will add it to the player's turn total."
<br/>
**Expect** rollDie("!=1").toEqual(newPlayer.turnScore(++ rollDie()))

**Describe** winCheck()
<br/>
**Test 10** "It will check to see if player's scoreTotal summed with turnScore equals or exceeds 100. If so it will alert the player 'you have won!'"
<br/>
**Expect** winCheck(scoreTotal + turnScore >= 100).toEqual(alert(`${newPlayer.playerName}: You have won!`))

**Describe** Hold()
<br/>
**Test 11** "It will increase Player.scoreTotal by the value stored at Player.turnScore."
<br/>
**Expect** hold().toEqual(newPlayer.scoreTotal += newPlayer.turnScore)

## Setup/installation Requirements

* Copy the following link to your clipboard: https://github.com/
* Open a Bash Terminal
* In your terminal window, navigate to a directory that you would like to clone the repository to
* Within your git bash terminal type in 'git clone' and then paste in the link from your clipboard by right clicking and selecting 'paste' example below:
```bash
$ git clone https://github.com/
```
* After the page has been cloned to your chosen directory locate the folder and open it.
* After you have the folder open that you cloned from Github.com double click the file "index.html"
* The webpage should open in the default browser set by your machines settings

This game can be played via it's [gh-page](https://.github.io/)

## Authors and Contributors
Authored by: Tyler Sinks & Jon Stump

## Technologies Used
* JavaScript
* Bootstrap
* jQuery

## Stretch Goal
* display stylized dice in place of numerals during turn
* use CSS, html, and JavaScript only to accomplish above stretch goal -- not images
* a nice description of a technique to reach this stretch goal: [Create dice using CSS grid](https://dev.to/ekeijl/creating-dice-using-css-grid-j4)

## License
[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)\
Tyler Sinks, Jon Stump &copy; 2021

## Contact
Tyler Sinks   tyler.sinks@gmail.com
Jon Stump jmstump@gmail.com