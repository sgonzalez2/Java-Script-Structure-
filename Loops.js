var friends = ['Matt','Will','Jack','David','Paul','Kim','Jio'];

for(var i = 0; i < 2 ; i++){
    console.log (i);
//--> Loop Ran 2 times..numbered console 1-100
}

for(var q = 0; q < friends.length; q++) {
    console.log (friends[q]);
//--> Loop Named all friends names
}

for(var w = 0; w <= friends.length; w++){
    console.log (w);

    if(friends[w] == 'David') {
        console.log('Found Him!')
    }
//--> Loop Named 0-3 Found Him! 4-7
}

for(var e = 0; e <= friends.length; e++){
    console.log (e);

    if(friends[e] == 'David') {
        console.log('Found Him')
        break;
    }
//--> Look listed 0-3 Found Him! and stopped running
}
var count = 0;
while(count < friends.length) {
    console.log(friends[count]);
    count ++;
//--> Loop listed all friends names
}

do {
    console.log('test');
} while(false)
//--> test
while(false) {
    console.log('Not going to happen!');
} //--> Nothing Happens