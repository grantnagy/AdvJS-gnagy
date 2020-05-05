# Project 2 / Final Project
For project 2 I created a slot machine game.
This project is hosted on my website [here.](https://grantnagy.github.io/pr2.html)
This project utilizes html, css, bootstrap 4.0.0, javascript, and jQuery.
The game is responsive/mobile friendly, and all images were designed by myself with the psd files included.


## How the game is contructed
When the spin button is pressed, there is a random generation of three numbers whose values range from 1-5 (using javascript). There is a timer on the spin button to disable it so you cannot spin while it is already spinning. Depending on the value generated, and image is assigned to the value as a representation of it. The image is assigned by changing the source of the image. There is a series of conditional statements that determines whether the values are the same and decides whether you have won or not. The rules are listed below the game. The animation for the spinning of the slots is a gif image that runs for a specific length of time (900ms) using javascript. After the rolling animation the values chosen will show and it will alert you of a win/loss/jackpot. You are given 10 credits to start with, and if you get to zero credits you are no longer able to play the game and it will alert you that you are out of credits and must restart the game. This a general brief summary of the construction of the game.


### Rules of the Game
To start, you get 10 credits.
Each spin costs 1 credit.
To win, get three like values. Win is 20 credits.
To push, get two like values next to eachother.
Easter Egg: Get three stimulus checks and win 1200 credits.
There are 5 different values.
A green check symbolizes a win or push. Red X symbolizes a loss. Three $$$ symbolizes a jackpot.
