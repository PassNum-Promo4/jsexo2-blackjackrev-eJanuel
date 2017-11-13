function blackJack(){
  var randomValue = Math.floor(Math.random()*11);
  var userValue = document.getElementById('userValue').value;
  console.log(userValue);
  console.log(randomValue);

  if (randomValue < userValue){
    document.getElementById('result').innerHTML = 'Vous avez gagné';
  } else {
    document.getElementById('result').innerHTML = 'Vous avez perdu';
  }

}
