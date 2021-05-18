let money = 0
let moneyPerClick = 1
let moneyPerSecond = 0
let carrotPrice = 20
let whipPrice = 100
let stablePrice = 250
let jockeyPrice = 500
let carrotCount = 0
let whipCount = 0
let stableCount = 0
let jockeyCount = 0


// FUNCTIONS
function clickMoney() {
  money += moneyPerClick;
  document.getElementById("win-money").innerHTML = "Won: $" + money;
  document.getElementById("money-mult").innerHTML = "Multiplier: x" + moneyPerClick
}

function carrotUpgrade() {
  if (money >= carrotPrice) {
    moneyPerClick += 0.25;
    money -= carrotPrice;
    carrotCount += 1
    carrotPrice = Math.round(carrotPrice * 1.1)
    document.getElementById("carrot-count").innerHTML = ": " + carrotCount;
    document.getElementById("carrot-price").innerHTML = "$" + carrotPrice + " - Buy  More Carrots!";
    document.getElementById("win-money").innerHTML = "Won: $" + money;
    document.getElementById("money-mult").innerHTML = "Multiplier: x" + moneyPerClick;
  } else {
    alert("You're Broke! Keep Gamblin'!")
  }
}

function whipUpgrade() {
  if (money >= whipPrice) {
    moneyPerClick += .5;
    money -= whipPrice;
    whipPrice = Math.round(whipPrice * 1.1)
    document.getElementById("whip-count").innerHTML = ": " + whipCount;
    document.getElementById("whip-price").innerHTML = "$" + whipPrice + " - Buy New Whip!";
    document.getElementById("win-money").innerHTML = "Won: $" + money;
    document.getElementById("money-mult").innerHTML = "Multiplier: x" + moneyPerClick;
  } else {
    alert("Whip yourself into shape! Need more cash!")
  }
}

function stableUpgrade() {
  if (money >= stablePrice) {
    money -= stablePrice;
    moneyPerSecond += 10;
    stablePrice = Math.round(stablePrice * 1.1)
    document.getElementById("stable-count").innerHTML = ": " + stableCount;
    document.getElementById("stable-price").innerHTML = "$" + stablePrice + " - Stable Repairs";
    document.getElementById("win-money").innerHTML = "Won: $" + money;
    document.getElementById("money-per-second").innerHTML = "x3 seconds: $" + moneyPerSecond
  } else {
    alert("Is your condition stable? You need more Money!")
  }
}

function jockeyUpgrade() {
  if (money >= jockeyPrice) {
    money -= jockeyPrice;
    moneyPerSecond += 20;
    jockeyPrice = Math.round(jockeyPrice * 1.1)
    document.getElementById("jockey-count").innerHTML = ": " + jockeyCount;
    document.getElementById("jockey-price").innerHTML = "$" + jockeyPrice + " - Befriend a Jockey";
    document.getElementById("win-money").innerHTML = "Won: $" + money;
    document.getElementById("money-per-second").innerHTML = "x3 seconds: $" + moneyPerSecond
  } else {
    alert("Sorry, you're Stuck with the Loser!")
  }
}

setInterval(function () {
  money += moneyPerSecond;
  document.getElementById("win-money").innerHTML = "Won: $" + money;
}, 3000)

