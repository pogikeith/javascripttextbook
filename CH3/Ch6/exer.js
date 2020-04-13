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


let name = 'freddie';
switch (name) {
    case 'fred':
        window.alert('your name is fred') //fall through
    case 'fredrick': //fall through
    case 'freddie': 
        window.alert('any version of fred is a cool name');
        break;
    default :
        window.alert('i have not heard that name before');
        
}