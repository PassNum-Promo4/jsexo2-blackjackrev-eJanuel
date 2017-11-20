function blackJackRev(){

  var computerValueRev = Math.floor(Math.random()*11);
  var userValueRev = document.getElementById('userValueRev').value;

  console.log('userValueRev : ' + userValueRev);
  console.log('computerValueRev : ' + computerValueRev);


  if (computerValueRev < userValueRev){
    var result = 'Victoire';
    document.getElementById('result').innerHTML = 'Vous avez gagné';
  } else {
    var result = 'Défaite'
    document.getElementById('result').innerHTML = 'Vous avez perdu';
  }

  var pushStartTableLine = '<tr class="border border-dark">';
  var pushuserValueRevIntoTable = '<td class="border border-dark p-1">' + userValueRev + '</td>';
  var pushcomputerValueRevIntoTable = '<td class="border border-dark p-1">' + computerValueRev + '</td>';
  var pushResult = '<td class="border border-dark p-1">' + result + '</td>';
  var pushEndTableLine = '</tr>';

  //console.log(pushStartTableLine);
  //console.log(pushuserValueRevIntoTable);
  //console.log(pushcomputerValueRevIntoTable);
  console.log('result : ' + result);
  //console.log(pushEndTableLine);

  document.getElementById('pushIntoTable').innerHTML += pushStartTableLine;
  document.getElementById('pushIntoTable').innerHTML += pushuserValueRevIntoTable + pushcomputerValueRevIntoTable + pushResult;
  document.getElementById('pushIntoTable').innerHTML += pushEndTableLine;


}

var userValue = Math.floor(Math.random()*11);
var computerValue = Math.floor(Math.random()*11);
var addUserValue = Math.floor(Math.random()*11);
var addComputerValue = Math.floor(Math.random()*11);
var totalUserValue = userValue + addUserValue;
var totalComputerValue = computerValue + addComputerValue;

function blackJack(){

  document.getElementById('userValue').innerHTML = 'Votre Chiffre : ' + userValue;

  var btnAdd = '<input class="mt-2" id="btnAdd" type="button" value="Ajouter" onClick="add(); return false;">';
  var btnStop = '<input class="mt-2 ml-2" id="btnStop" type="button" value="Arrêter" onClick="stop(); return false;">';

  document.getElementById('blackJack').innerHTML += btnAdd + btnStop;

}

function add(){

  console.log('userValue : ' + userValue);
  console.log('addUserValue : ' + addUserValue);
  console.log('totalUserValue : ' + totalUserValue);

  console.log('computerValue : ' + computerValue);
  console.log('addComputerValue : ' + addComputerValue);
  console.log('totalComputerValue : ' + totalComputerValue);

  document.getElementById('blackJack').innerHTML = '<span class="d-block mt-2" id="userValue"></span><span class="d-block mt-2" id="computerValue"></span><span class="d-block mt-2" id="result"></span>';

  document.getElementById('userValue').innerHTML = 'Votre Chiffre : ' + userValue;
  document.getElementById('userValue').innerHTML += ' | Valeur Ajoutée : ' + addUserValue + ' | Total : ' + totalUserValue + '\n';

  document.getElementById('computerValue').innerHTML += 'Son Chiffre : ' + computerValue;
  document.getElementById('computerValue').innerHTML += ' | Valeur Ajoutée : ' + addComputerValue + ' | Total : ' + totalComputerValue;

  if (totalUserValue > 21){
    var result = 'Défaite';}
  if (totalUserValue > totalComputerValue || totalUserValue < 21){
    var result = 'Victoire';}
  if (totalComputerValue > totalUserValue && totalComputerValue < 21){
    var result = 'Défaite';}

  console.log('result : ' + result);

  document.getElementById('result').innerHTML += 'Résultat : ' + result;

}

function stop(){

  document.getElementById('blackJack').innerHTML = '<span class="d-block mt-2" id="userValue"></span><span class="d-block mt-2" id="computerValue"></span><span class="d-block mt-2" id="result"></span>';

  console.log('userValue : ' + userValue);
  console.log('computerValue : ' + computerValue);

  document.getElementById('userValue').innerHTML = 'Votre Chiffre : ' + userValue;
  document.getElementById('computerValue').innerHTML += 'Son Chiffre : ' + computerValue;

  if (totalUserValue > 21){
    var result = 'Défaite';}
  if (totalUserValue > totalComputerValue || totalUserValue < 21){
    var result = 'Victoire';}
  if (totalComputerValue > totalUserValue && totalComputerValue < 21){
    var result = 'Défaite';}

  console.log('result : ' + result);

  document.getElementById('result').innerHTML += 'Résultat : ' + result;

}
