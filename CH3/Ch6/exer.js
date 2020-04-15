// let boats = 0; 
// if (boats === 3) {
//     window.alert('yes there are 3 boats');
// }
// else {
//     window.alert('you dont have the right amount')
// v

// let cookbook = 'yes',
//     meatloafrec = 'no';
// if (cookbook === 'yes') {
//     if (meatloafrec === 'yes') {
//     window.alert('recipe found');
// }
//     else {
//     window.alert('have the book but no recipe'); 
//     }
// }
// else {
//     window.alert('you need book'); 
// } 


// let thename = 'fred';
// switch(thename) {
//     case 'george' :
//         window.alert('george is an okay name');
//         break;
//     case 'fred' :
//         window.alert('fred is the coolest name');
//         window.alert('hi there fred');
//         break;
//     default :
//         window.alert('interesting name you have')
// }



// switch (name) {
//     case 'fred' : //fall through
//     case 'fredrick': //fall through
//     case 'freddie': 
//         window.alert('any version of fred is a cool name');
//         break;
//     default :
//         window.alert('i have heard that name before');
        
// }


// let name = 'freddie';
// switch (name) {
//     case 'fred':
//         window.alert('your name is fred') //fall through
//     case 'fredrick': //fall through
//     case 'freddie': 
//         window.alert('any version of fred is a cool name');
//         break;
//     default :
//         window.alert('i have not heard that name before');
        
// }


// let num1 = 17;
// switch(true) {
//     case (num1< 20) :
//         window.alert('the number is less than 20');
//         break;
//     case ( (num1 >= 20) && (num1 <= 100) ) :
//         break; 
//     default :
//         window.alert('the number is negative or more than 100');
// }\

// let mynum = 1,
//     mymessage = " ";
// if (mynum === 1) {
//     mymessage = 'you win';
// }
// else {
//     mymessage = 'sorry! try again';
// }

// let mynum = 1;
//     mymessage = "   ";
// mymessage = (mynum === 1) ? "you win!" : "sorry try again"; 

let username = window.prompt('give me your name:', '  '); 
if ( (username === null) || (username === "" ) ) {
    document.write('hello, random namless person');
}
else {
    document.write('hello, ' + username + "!");
}