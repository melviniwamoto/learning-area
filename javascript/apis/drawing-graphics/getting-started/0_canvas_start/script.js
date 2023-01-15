// The main object that javascript references
const canvas = document.querySelector(".myCanvas");

// Display dimensions
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// The object that javascript draws with/to
const ctx = canvas.getContext("2d");

// Method to set fill style (color here)
ctx.fillStyle = "rgb(0, 0, 0)";

// Method specifying a rectangular fill area
ctx.fillRect(0, 0, width, height);
