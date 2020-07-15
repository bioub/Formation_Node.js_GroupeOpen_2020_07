setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');


// pile d'appel
// ^
// |
// |                               lg      lg  lg        lg
// |st - st - st - st - lg   ⟳    cbB  ⟳  cbA cbD   ⟳  cbC
// +-----0-------------------------4-------500-501-------1000-------------> temps
//                      E          B       A   D         C

// file d'attente (0ms) : cbB
// file d'attente (4ms) :
// file d'attente (500ms) : cbA cbD
// file d'attente (501ms) :  cbD
// file d'attente (502ms) :
// file d'attente (1000ms) :  cbC
// file d'attente (1001ms) :

// Jake Archibald : In the loop (30 min)
// Jsconf Asia 2018
// -> Youtube
