function saveStorage() {
  var str = JSON.stringify(gQuestsTree);
  localStorage.setItem("gQuests", str);
}

function getStorage() {
  if (!localStorage.getItem("gQuests", gQuestsTree)) {
  }
  var str = localStorage.getItem("gQuests", gQuestsTree);
  gQuestsTree = JSON.parse(str);
}
