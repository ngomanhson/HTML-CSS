function copyText(){
  var copyData = document.getElementById("inputText");
  copyData.select();
  navigator.clipboard.writeText(copyData.value);
}