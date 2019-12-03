"use strict";

$(document).ready(init);

function init() {
  getStorage();
  if (!gQuestsTree) createQuestsTree();
  gCurrQuest = gQuestsTree;
}

function onStartGuessing() {
  $(".game-start").hide();
  $(".quest").show();
  renderQuest();
}

function renderQuest() {
  $("h2").text(`${gCurrQuest.txt}`);
}

function onUserResponse(res) {
  // If this node has no children
  if (isChildless(gCurrQuest)) {
    if (res === "yes") {
      alert("Yes, I knew it!");
      // TODO: improve UX
    } else {
      $(".quest").hide();
      $(".new-quest").show();

      // TODO: hide and show new-quest section
    }
  } else {
    setLastRes(res);
    moveToNextQuest(res);
    renderQuest();
  }
}

function onAddGuess() {
  var $newGuess = $("#newGuess").val();
  var $newQuest = $("#newQuest").val();
  addGuess($newGuess, $newQuest);
  onRestartGame();
}

function onRestartGame() {
  gCurrQuest = gQuestsTree;
  saveStorage();
  $(".new-quest").hide();
  $(".game-start").show();
  gLastRes = null;
  $("h2").text(``);
}
