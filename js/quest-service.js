var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;

function createQuestsTree() {
  gQuestsTree = createQuest("Male?");

  gQuestsTree.yes = createQuest("Gandhi");
  gQuestsTree.no = createQuest("Rita");
  gPrevQuest = null;
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null
  };
}

function isChildless(node) {
  return node.yes === null && node.no === null;
}

function moveToNextQuest(res) {
  gPrevQuest = gCurrQuest;
  switch (res) {
    case "yes":
      return (gCurrQuest = gCurrQuest.yes);
    default:
      return (gCurrQuest = gCurrQuest.no);
  }
}

function setLastRes(res) {
  gLastRes = res;
}

function addGuess(newGuess, newQuest) {
  if (!newGuess || !newQuest) return;
  switch (gLastRes) {
    case "yes":
      gPrevQuest.yes = createQuest(newQuest);
      var currQuest = gPrevQuest.yes;

    default:
      gPrevQuest.no = createQuest(newQuest);
      var currQuest = gPrevQuest.no;
  }
  currQuest.yes = createQuest(newGuess);
  currQuest.no = gCurrQuest;
}
