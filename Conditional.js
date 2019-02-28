var val = 50;
var vals = 20;
var q = 11;
var w = 44;
var e = 55;
var r = 26;
var t = 54;
var y = 53;
var u = 54;
var i = 20;
var o = 20;
var p = 10;
var a = 10;
if (val== 50) {
   console.log('True');
//-->True
}
if (vals == 21) {
    console.log('True');
//-->Nothing appears
}
console.log('False');
//After adding this False appeared because we add it not because it read it wrong

if (q == 2) {
    console.log('True');
} else {console.log ('False');
//---> False
}

if (w == 44) {
    console.log ('True');
} else {console.log('False');
//--> True
} 

if (e == 50) {
    console.log('True');
} else if (e >22 && e < 100) {
    console.log('between 50 and 100');
} else {console.log('False');
//--> between 50 and 100
}

if (r == 26) {
    console.log('True');
} else if (r > 2 && r < 100) {
    console.log('between 2 and 100');
} else {console.log('False');
//--> True
}
if (t  == 55 || t < 56) {
     console.log('True');
     //--> True
}
if (t == 55 && t < 56) {
    console.log('True');
//--> Nothing appears because both conditions are not true
}
switch (u) {
    case 54:
        console.log('54');
        break;
    default:
        console.log('default')
        break;
//--> 54 
}
switch (y) {
    case 20:
    case 54:
        console.log('54')
        break;

    default:
        console.log ('default')
        break;
//--> default 
}
switch (i) {
    case 20:
    case 54:
        console.log ('54');
        break;
    default:
        console.log('default');
        break;
}
switch (o) {
    case 20:
        case 10:
        case 20:
        case 54:
        console.log('Less than 55');
        break;
    default:
        console.log('default');
        break;
//--> Less than 55
}
switch (p) {
    case 10:
        console.log('10');
    case 20: 
    case 54:
        console.log('Less than 55');
        break;
    default:
        console.log('default');
        break;
//--> 10 & Less than 55 because no break was added inbetween the two consoles
}
switch (a) {
    case 10:
        console.log ('10');
        break
    case 20:
    case 54:
        console.log('Less than 55');
    break;
    default:
        console.log ('default');
        break;
//--> 10
    }
console.log('Ended Program');