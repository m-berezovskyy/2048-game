# 2048 Game

A browser-based implementation of the classic 2048 puzzle game, built with JavaScript, HTML, and Sass.

## Project Description

2048 Game is a single-player puzzle in which the player moves numbered tiles across a 4×4 board. Tiles with the same value merge when they collide, increasing the score and creating a tile with the next value. The objective is to combine tiles until a 2048 tile is created while keeping enough free space to continue playing.

The application includes automatic tile generation, score tracking, win and loss detection, and the ability to restart the game at any time.

## Technical Requirements

To run this project locally, you will need:

- **Node.js** (version 18 or newer): A JavaScript runtime used to run the development tools.
- **NPM** (version 9 or newer): A package manager used to install the project dependencies and run scripts.

## Installation and Setup

To install the project and run it locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/m-berezovskyy/2048-game.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd 2048-game
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the local development server:**

   ```bash
   npm start
   ```

## Usage

After starting the development server, open the local URL shown in the terminal. Click **Start** to begin the game, then use the arrow keys to move the tiles:

- **Arrow Up** — move tiles up.
- **Arrow Down** — move tiles down.
- **Arrow Left** — move tiles left.
- **Arrow Right** — move tiles right.

When two tiles with the same value meet, they merge and their value is added to the score. Create the 2048 tile to win. If the board is full and no moves remain, the game ends. Use the **Restart** button to start a new game.

## Features

- **Classic 2048 Gameplay:** Slide and merge tiles on a 4×4 board.
- **Random Tile Generation:** A new tile with a value of 2 or 4 appears after every valid move.
- **Score Tracking:** The score updates whenever matching tiles merge.
- **Game Status Detection:** The application identifies win and loss conditions and displays the appropriate message.
- **Restart Control:** Reset the board and begin a new game at any time.
- **Keyboard Controls:** Play using the four arrow keys.

## Demo

You can play the game here: [DEMO LINK](https://m-berezovskyy.github.io/2048-game/)

## Technologies Used

This project was built using the following technologies:

- **HTML5:** Provides the structure of the game interface.
- **Sass (SCSS):** Defines the layout, tile styles, colors, and interface states.
- **JavaScript (ES6):** Implements the game logic, keyboard controls, state management, and UI updates.
- **Node.js:** Runs the local development and build tools.
- **NPM:** Manages dependencies and project scripts.
- **Parcel:** Bundles the application and provides the local development server.
- **Jest:** Supports automated testing of the game logic.
- **ESLint and Stylelint:** Check JavaScript and SCSS code quality.
- **Git and GitHub:** Provide version control and repository hosting.

## Contribution Guidelines

If you would like to contribute to this project, follow these steps:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a separate branch for your feature or fix.
4. Make and test your changes.
5. Submit a pull request describing your changes.

## License

This project is licensed under the [GNU General Public License v3.0](https://github.com/m-berezovskyy/2048-game/blob/master/LICENSE).
