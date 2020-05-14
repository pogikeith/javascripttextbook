let items = 0; 
    msg = ""
    city = window.prompt('what is the name of your city?', ''); 
if ( (city === null) || (city === '') ) {
    msg = 'no city entered';
}
else {
        switch (city) {
            case 'johsontown' :
                 msg = 'delivery in 3 days';
                 items = 10;
         
        break;
            case 'donville':
                msg = 'delivery 1 week'
                items = 5

        break;
            case 'danieltown': //fallthrough
            case 'marysville' : 
                 msg = '2 weeks' 
                 items = 2
        break; 
            default : 'sorry no delivery'
            items = 0
    }
}
document.write(msg);
if (items > 0) {
    document.write(
        '<p> We canb deliver up to ' + items +
        ' and mail to order</p>'
    );
    for (let count = 1; count <= items; count ++) {
        document.write(count + '. _________<br>'); 
    }
}