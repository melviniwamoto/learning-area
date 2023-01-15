// The main object that javascript references
const canvas = document.querySelector(".myCanvas");

// Display dimensions
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// The object that javascript draws to
const ctx = canvas.getContext("2d");
