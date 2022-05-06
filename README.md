### Lap 3 project: Quiz Game

## Project Description

We had to make an online quiz game. Players can start the quiz and choose the number of questions, difficulty level and a topic of their choice. After the game is finished, players can see their results of the game, as well as overall scores on the leaderboard

## Installation & usage

- For the client side cd into client folder and run `npm i` and `npm start`
- To run the server and database, run `docker compose up` in the root directory. To close the server and database run `docker compose down --volumes --remove-orphans` in the terminal

## Technologies

### Front End

- JavaScript
- React
- React Redux

### Back End

- postgreSQL
- JavaScript
- Docker

### Wins

- Leaderboard page fetches data from our API and displays it on the page
- Added a themed favicon
- Displaying and fetching the questions to be specific for the topic that was selected previously

### Challenges

- Deploying db to heroku
- Fetching from the open trivia api and having it display onto the site. This was fixed by comparing code and fixing the fetch links as a group
- Implementing a timer count down for each question.

### Future Features

- Multiplayer support with socket.io
- Marking correct answers as green when it is selected and marking the incorrect answers as red
- Login/Register functionality
- More interactivity with a lobby and chat window using socket.io

### Contributors

- [Peter Ly](https://github.com/peterlydev)
- [Anwar Elmi](https://github.com/aelmi123)
- [Anisha Deol](https://github.com/anishakdeol)
- [Bethan Evans](https://github.com/beth98an)
- [Sarushan Thiyakumar](https://github.com/SarushanThiy)

## Licence

[MIT license](https://opensource.org/licenses/mit-license.php)
