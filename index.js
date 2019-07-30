function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

function sayHiToGrandma(string){
  var reply ="";

  
  
  if (string.toLowerCase === string) {reply = "I can\'t hear you!"}
  if (string.toUpperCase === string) {reply = "YES INDEED!"}
  if (string === "I love you, Grandma") {reply = "I love you, too."}
  return reply

}