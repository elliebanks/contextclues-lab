/*var accusation = 1;

var createHeading = function() {
    var heading = $("<h3></h3>").text("Accusation " + accusation);
    $('body').append(heading);
    accusation++;
    
    if(accusation > 100) {
        console.log('reached 100');
    } else {
        createHeading();
    }
};
$(document).ready(function() {
    createHeading();*/

for (var i = 1; i <= 100; i++) {
    createAccusation(i);

};

function createAccusation(i) {
    var friends = ['Liz', 'Bethany', 'Taylor', 'Bethany', 'Devon'];

    var location = ['hot tub', 'BJCC', 'casino', 'Chevron', 'church', 'Brown Derby parking lot', 'old ladys house next door', 'vape shop', 'bathroom at the Plaza', 'shed'];

    var weapon = ['slingshot', 'cigarette', 'dog leash', 'lint roller', 'box of limited edition pokemon cards', 'Febreeze', 'Juul', 'banjo', 'samurai sword', 'can of baked beans', 'Frozen 2 Dvd', 'Shrek soundtrack', 'selfie stick', 'chia pet', 'beta fish', 'litter box', 'Whiteclaw', 'Big Bang Theory DVD collection', 'opposum', 'Bop-It'];

    var f = i % friends.length;
    var l = i % location.length;
    var w = i % weapon.length;

    var h3 = document.createElement('h3');
    h3.textContent = 'Accusation ' + (i);
    document.body.appendChild(h3);


    return h3.addEventListener('click', function () {
        alert('I accuse ' + friends[f] + ' with the ' + weapon[w] + ' in the ' + location[l] + '!!');
    });

};





