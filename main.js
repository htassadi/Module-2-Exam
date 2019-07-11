'use strict'
document.getElementById('MBtn').addEventListener('click', marioBtn);
document.getElementById('LBtn').addEventListener('click', linkBtn);
document.getElementById('calc-attack').addEventListener('click', calculate);
document.getElementById('start-battle').addEventListener('click', battleLib);

function marioBtn () {
//When the Mario button is clicked:
    //Change the image to 'mario.png'
    document.getElementById('main-img').src ='images/mario.png';
    //Change the html background to 'red'
    document.getElementById('background').style.backgroundColor= 'red';
    //Change the body background to 'pink'
    document.getElementById('body-background').style.backgroundColor= 'pink';
    //1st bullet should read: Hero of: The Mushroom Kingdom
    document.getElementById('bullet1').innerHTML= 'The Mushroom Kingdom';
    //2nd bullet should read: Love interest: Princess Peach
    document.getElementById('bullet2').innerHTML= 'Princess Peach';
    //3rd bullet should read: Nemesis: King Bowser
    document.getElementById('bullet3').innerHTML= 'King Bowser';

}
 function linkBtn () {
    //When the Link button is clicked:
        //Change the image to 'link.png'
        document.getElementById('main-img').src ='images/link.png';
        // - Change the html background to 'green'
        document.getElementById('background').style.backgroundColor= 'green';
        //- Change the body background to 'lightgreen'
        document.getElementById('body-background').style.backgroundColor= 'lightgreen';
        //- 1st bullet should read: Hero of: Hyrule
        document.getElementById('bullet1').innerHTML= 'Hyrule';
        //- 2nd bullet should read: Love interest: Princess Zelda
        document.getElementById('bullet2').innerHTML= 'Princess Zelda';
        //- 3rd bullet should read: Nemesis: Ganon
        document.getElementById('bullet3').innerHTML= 'Ganon';

 }

function calculate () {
     //Part 2: Calculating the Hero Attack Values (30%)

     //input
         let Mstrength= Number(document.getElementById('MS').value);
         let Mdefence= Number(document.getElementById('MD').value);
         let Lstrength= Number(document.getElementById('LS').value);
         let Ldefence= Number(document.getElementById('LD').value);

    //process
         //Mario's attack formula: marioAttack = 2*marioStrength / linkDefense + 5
         let marioAttack = Math.floor( 2* Mstrength / Ldefence + 5);
         //Link's attack formula: linkAttack = (linkStrength + 15) / marioDefense
         let linkAttack = Math.floor( (Lstrength + 15) / Mdefence ) ;


    //Output - dispaly
        document.getElementById('MA').innerHTML = marioAttack ;
        document.getElementById('LA').innerHTML = linkAttack ;

}

function battleLib () {
    // Part 3: The Battle Royale (30%)
    let Mstrength= Number(document.getElementById('MS').value);
         let Mdefence= Number(document.getElementById('MD').value);
         let Lstrength= Number(document.getElementById('LS').value);
         let Ldefence= Number(document.getElementById('LD').value);
         let marioAttack = Math.floor( 2* Mstrength / Ldefence + 5);
         let linkAttack = Math.floor( (Lstrength + 15) / Mdefence );

//- When the "start the battle" button is clicked, use the 
    //input
        let I1 = (document.getElementById('input1').value);
        let I2 = (document.getElementById('input2').value);
        let I3 = (document.getElementById('input3').value);
        let battle = " ";
        let link = "Link made the first move, sprinting to cross the distance between himself and Mario, and swung his " + "<span id=\"I2\">" + I2 + "</span> " + "in a horizontal slash. His attack only hit air, though, as Mario jumped clean over his head. The minute Mario landed, Link followed up with another slash only to see Mario backflip out of its reach. Mario fought back and threw a solid punch aimed at Link's face only for his hand to hit the steel face of Link's Hylian Shield. He recoiled, clutching his hand, but quickly ducked under another slash aimed to take his head off. Mario jumped back a good distance, then reached into his pocket and pulled out a flower the color of open flame. His shirt and hat turned white while his trousers turned red. He pointed his finger at Link like he was holding a gun, then unleashed a barrage of fireballs at Link. " + "<span id=\"I3\"> " + I3 + "</span> " +"  Link rolled away from a few, then swapped out his Hylian Shield for a glossy, silvery shield with a red outline. When one fireball hit the face of this shield, the coat began to flash a bright red. Link's shield took the barrage of fireballs until about the tenth one. Link aimed the front of his shield at Mario just as the energy stored within the shield was at its limit and a worm of flames erupted from the surface. Mario jumped over the blast, landed behind Link, then seized him by the tunic, spun him around three times, then tossed him like a paper wad. Link positioned his sword behind him and, with a roar, spun in a full three-sixty-degree circle with his blade extended. A wave of " + " <span id=\"I1\"> " + I1 + "</span> " +" energy flew from the circle and knocked Mario flat on his back. Link acted swiftly and jumped after him before Mario could recuperate. In midair, he put both hands on the hilt and aimed the sword down. The Master Sword embedded itself right in Mario's abdomen, a dark stain appearing on his shirt and overalls. The plumber emitted a choked cry before finally slumping down to the ground and remaining motionless.";

        let mario = "Link made the first move, sprinting to cross the distance between himself and Mario, and swung his "+ "<span id=\"I2\"> " + I2 + "</span> " +" in a horizontal slash. His attack only hit air, though, as Mario jumped clean over his head. The minute Mario landed, Link followed up with another slash only to see Mario backflip out of its reach. Mario fought back and threw a solid punch aimed at Link's face only for his hand to hit the steel face of Link's Hylian Shield. He recoiled, clutching his hand, but quickly ducked under another slash aimed to take his head off. Mario jumped back a good distance, then reached into his pocket and pulled out a flower the color of open flame. His shirt and hat turned white while his trousers turned red. He pointed his finger at Link like he was holding a gun, then unleashed a barrage of fireballs at Link. Link rolled away from a few, then swapped out his Hylian Shield for a glossy, silvery shield with a red outline. When one fireball hit the face of this shield, the coat began to flash a bright "+ "<span id=\"I2\"> " + I1 + "</span> " +". Link's shield took the barrage of fireballs until about the tenth one. Link aimed the front of his shield at Mario just as the energy stored within the shield was at its limit and a worm of flames erupted from the surface. Mario jumped over the blast, landed behind Link, then seized him by the tunic, spun him around three times, then tossed him like a paper wad. He quickly closed the distance between himself and Link and hit him with a ball of ice. Link was encased in a block of ice, which Mario proceeded to pick up and toss like it was weightless. The block of ice slid across the ground until it ran into a tree, sending Link sprawling to the ground. "+ "<span id=\"I2\"> " + I3 + "</span>" +" Link passed out and Mario was able to take the victory home!"

    //process
        if ( marioAttack <= linkAttack || marioAttack == linkAttack) {
            battle += link 
        } else {
            battle += mario 
        }

    //Output - dispaly
        document.getElementById('battle-scene').innerHTML = battle ;



}
