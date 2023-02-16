function random_bg_color() {
  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  //document.body.style.background = bgColor;
  //document.getElementById("container").style.backgroundColor = "lightblue";
  document.getElementById("container").style.background = bgColor;
}
function mymy(){
  console.log("My My funtion hasbeen called");
}