function blackJack(){
  var computerValue = Math.floor(Math.random()*11);
  var userValue = document.getElementById('userValue').value;
  console.log(userValue);
  console.log(computerValue);



  console.log(pushStartTableLine);
  console.log(pushUserValueIntoTable);
  console.log(pushComputerValueIntoTable);
  console.log(pushEndTableLine);

  if (computerValue < userValue){
    var result = 'Victoire';
    document.getElementById('result').innerHTML = 'Vous avez gagné';
  } else {
    var result = 'Défaite'
    document.getElementById('result').innerHTML = 'Vous avez perdu';
  }

  var pushStartTableLine = '<tr class="border border-dark">';
  var pushUserValueIntoTable = '<td class="border border-dark p-1">' + userValue + '</td>';
  var pushComputerValueIntoTable = '<td class="border border-dark p-1">' + computerValue + '</td>';
  var pushResult = '<td class="border border-dark p-1">' + result + '</td>';
  var pushEndTableLine = '</tr>';
  document.getElementById('pushIntoTable').innerHTML += pushStartTableLine;
  document.getElementById('pushIntoTable').innerHTML += pushUserValueIntoTable + pushComputerValueIntoTable + pushResult;
  document.getElementById('pushIntoTable').innerHTML += pushEndTableLine;

}
