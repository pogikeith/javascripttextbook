let msg = ""
    city = window.prompt('what is the name of your city?')
if ( (city = null) || (city = '') ); {
document.write('no city entered')
}
else {
        switch (city) {
            case 'johsontown' :
                 msg = 'delivery in 3 days';
        break;
            case 'donville':
                msg = 'delivery 1 week'
        break;
            case 'danieltown': //fallthrough
            case 'marysville' : 
                 msg = '2 weeks' 
        break; 
            default : 'sorry no delivery'
    }
}
document.write(msg);