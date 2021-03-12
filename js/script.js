//Release date and names of the games
var releaseDates = ["05/13/2016", "10/18/2005", "11/14/2017", "12/20/2001", "8/11/1999", "01/17/2020", "11/04/2008"];
var names = ["Doom", "Fear", "Lego marvel super heroes 2", "Sonic adventure 2", "System shock 2", "Tokyo mirage sessions #FE Encore", "Valkyria chronicles"];

for(var i = 0; i < releaseDates.length; i++){
    console.log(releaseDates[i]);
    document.getElementById('rd' + i).textContent = releaseDates[i];
    document.getElementById('name' + i).textContent = names[i];
}