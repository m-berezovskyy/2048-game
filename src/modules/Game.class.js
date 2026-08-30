'use strict';

class Game {
  constructor(initialState) {
    if (initialState) {
      this.board = initialState.map((row) => [...row]);
    } else {
      this.board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
    }

    this.score = 0;
    this.status = 'idle';
  }

  moveLeft() {
    let hasChanged = false;

    for (let r = 0; r < 4; r++) {
      const oldRow = this.board[r];
      const newRow = this.slideAndMergeRow(oldRow);

      if (oldRow.join(',') !== newRow.join(',')) {
        hasChanged = true;
        this.board[r] = newRow;
      }
    }

    if (hasChanged) {
      this.addRandomTile();
      this.checkStatus();
    }
  }

  moveRight() {
    let hasChanged = false;

    for (let r = 0; r < 4; r++) {
      const oldRow = this.board[r];

      const reversedRow = [...oldRow].reverse();
      const newReversedRow = this.slideAndMergeRow(reversedRow);
      const newRow = newReversedRow.reverse();

      if (oldRow.join(',') !== newRow.join(',')) {
        hasChanged = true;
        this.board[r] = newRow;
      }
    }

    if (hasChanged) {
      this.addRandomTile();
      this.checkStatus();
    }
  }

  moveUp() {
    let hasChanged = false;

    for (let c = 0; c < 4; c++) {
      const oldCol = [
        this.board[0][c],
        this.board[1][c],
        this.board[2][c],
        this.board[3][c],
      ];

      const newCol = this.slideAndMergeRow(oldCol);

      if (oldCol.join(',') !== newCol.join(',')) {
        hasChanged = true;

        for (let r = 0; r < 4; r++) {
          this.board[r][c] = newCol[r];
        }
      }
    }

    if (hasChanged) {
      this.addRandomTile();
      this.checkStatus();
    }
  }

  moveDown() {
    let hasChanged = false;

    for (let c = 0; c < 4; c++) {
      const oldCol = [
        this.board[0][c],
        this.board[1][c],
        this.board[2][c],
        this.board[3][c],
      ];

      const reversedCol = [...oldCol].reverse();

      const newReversedCol = this.slideAndMergeRow(reversedCol);
      const newCol = newReversedCol.reverse();

      if (oldCol.join(',') !== newCol.join(',')) {
        hasChanged = true;

        for (let r = 0; r < 4; r++) {
          this.board[r][c] = newCol[r];
        }
      }
    }

    if (hasChanged) {
      this.addRandomTile();
      this.checkStatus();
    }
  }

  getScore() {
    return this.score;
  }

  getState() {
    return this.board;
  }

  getStatus() {
    return this.status;
  }

  start() {
    this.status = 'playing';
    this.addRandomTile();
    this.addRandomTile();
  }

  restart() {
    this.board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.score = 0;
    this.start();
  }

  addRandomTile() {
    const emptyCells = [];

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c] === 0) {
          emptyCells.push({
            r,
            c,
          });
        }
      }
    }

    if (emptyCells.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomCell = emptyCells[randomIndex];

    const newValue = Math.random() < 0.9 ? 2 : 4;

    this.board[randomCell.r][randomCell.c] = newValue;
  }

  slideAndMergeRow(row) {
    let filteredRow = row.filter((cell) => cell !== 0);

    for (let i = 0; i < filteredRow.length - 1; i++) {
      if (filteredRow[i] !== 0 && filteredRow[i] === filteredRow[i + 1]) {
        filteredRow[i] = filteredRow[i] * 2;
        this.score += filteredRow[i];
        filteredRow[i + 1] = 0;
      }
    }

    filteredRow = filteredRow.filter((cell) => cell !== 0);

    while (filteredRow.length < 4) {
      filteredRow.push(0);
    }

    return filteredRow;
  }

  checkStatus() {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c] === 2048) {
          this.status = 'win';

          return;
        }
      }
    }

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c] === 0) {
          return;
        }
      }
    }

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const current = this.board[r][c];

        if (c < 3 && current === this.board[r][c + 1]) {
          return;
        }

        if (r < 3 && current === this.board[r + 1][c]) {
          return;
        }
      }
    }

    this.status = 'lose';
  }
}

module.exports = Game;
