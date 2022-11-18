function hello() {
    return "Hello World!";
}
function colorMode() {
    if (document != null) {
        var c = document.getElementById("func").style.backgroundColor;
        if (c === 'white') {
            document.getElementById("func").style.backgroundColor = "black";
            document.getElementById("func").style.color = "white";
        }
        else {
            document.getElementById("func").style.backgroundColor = "white";
            document.getElementById("func").style.color = "black";
        }
    }
}

function createEntry() {
    document.getElementById("form").style.display = "block";
  }
  
  function submitEntry() {
    document.getElementById("form").style.display = "none";
  }
  

export { hello, colorMode, submitEntry, createEntry };