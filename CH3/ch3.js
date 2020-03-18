// document.write('<h1>A Page of JS</h1>');
var headingtext = '<h1>A Page of JS</h1>';
var myintro = 'Hello Welcome to my JS Page'; 
var linktag = '<a href=\'http://scripttheweb.com\'>Link to Site</a>';
var redtext = '<span style=\'color:red\'>I am so colorful today!</span>';

var begineffect = '<em>';
var endeffect = '</em>'; 
var beginpara= '<p>';
var endpara = '</p>'; 

document.write(headingtext);
document.write(myintro);
document.write(linktag);
document.write(redtext);

document.write(headingtext);
document.write(begineffect  + myintro + endeffect);
document.write(beginpara  + linktag + endpara);
document.write(beginpara  + redtext + endpara);
