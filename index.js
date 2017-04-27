// veto — returns NO!
// passBill — returns You can do that!
// doCharity — returns I like to help people.
// conductPressInterview — returns I am proud to be an American.
// sayHi — returns Hi, my name is <name>. I am from <homestate>. I represent the <politcalParty>s, and was in office <yearsInOffice>.
// George Washington, Abraham Lincoln, Richard Nixon, and Jimmy Carter.
function President(name, politicalParty, yearsInOffice, homeState){
  this.name = name;
  this.politicalParty = politicalParty;
  this.yearsInOffice = yearsInOffice;
  this.homeState = homeState;
}

President.prototype.veto = function(){
  return "NO!";
};

President.prototype.passBill = function(){
  return "You can do that!";
};

President.prototype.doCharity = function(){
  return "I like to help people.";
};

President.prototype.conductPressInterview = function(){
  return "I am proud to be an American."
}

President.prototype.sayHi = function(){
  return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + "."
}

var georgeWashington = new President();
var abrahamLincoln = new President();
var richardNixon = new President();
var jimmyCarter = new President();
