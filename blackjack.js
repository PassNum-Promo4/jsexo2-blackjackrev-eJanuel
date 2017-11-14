function blackJack(){
  var computerValue = Math.floor(Math.random()*11);
  var userValue = document.getElementById('userValue').value;
  console.log(userValue);
  console.log(computerValue);

  var pushUserValueIntoTable = '<td class="border border-dark">' + userValue + '</td>';
  var pushComputerValueIntoTable = '<td class="border border-dark">'+ computerValue + '</td>';
  document.getElementById('stats').innerHTML += pushUserValueIntoTable;
  document.getElementById('stats').innerHTML += pushComputerValueIntoTable;
console.log(pushUserValueIntoTable);
  if (computerValue < userValue){
    document.getElementById('result').innerHTML = 'Vous avez gagné';
  } else {
    document.getElementById('result').innerHTML = 'Vous avez perdu';
  }

}
