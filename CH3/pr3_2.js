var myheading = '<h1> This is my webpage</h1>'; 
var linktag = '<a href=\'http://www.webexpertz.net\'>Web Site Link!</a>'; 
var sometext = 'this text can be effected by other statements'; 
var begineffect = '<em>';
var endeffect = '</em>';
var beginpara = '<p>';
var endpara = '</p>';

document.write(myheading); 
document.write(begineffect + sometext + endeffect);
document.write(beginpara + linktag + endpara);
document.write(beginpara + sometext + endpara);




var myheading = '<h1> This is my webpage</h1>'; 
var linktag = '<a href=\'http://www.webexpertz.net\'>Web Site Link!</a>'; 
var sometext = 'this text can be effected by other statements'; 
var begineffect = '<strong>';
var endeffect = '</strong>';
var beginpara = '<p>';
var endpara = '</p>';

document.write(myheading); 
document.write(begineffect + sometext + endeffect);
document.write(beginpara + linktag + endpara);
document.write(beginpara + sometext + endpara);




var myheading = '<h1> This is my webpage</h1>'; 
var linktag = '<a href=\'http://www.webexpertz.net\'>Web Site Link!</a>'; 
var sometext = 'this text can be effected by other statements'; 
var begineffect = '<strong>';
var endeffect = '</strong>';
var beginpara = '<p>';
var endpara = '</p>';

document.write(`${myheading} ${begineffect}${sometext} ${endeffect} ${beginpara} ${linktag} ${endpara} ${beginpara} ${sometext} ${endpara}`); 

