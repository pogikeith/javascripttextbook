// function show_message() {
//     window.alert('this is an alert');
// }
// window.alert('i am first');
// window.alert('am second')
// show_message();

// var mycar = "honda"; 
// var paycheck = '1200'; 

// function new_car () {
//     var  mycar = 'ferrari';
//     var  paycheck = '500'
//     window.alert('you need $' + paycheck + ' to get a ' + mycar)
// }
// new_car(); 
// window.alert('you make $' + paycheck + ' and have a ' + mycar)



// function new_car () {
//     var  mycar = 'ferrari';
//     var  paycheck = '500'
//     window.alert('you need $' + paycheck + ' to get a ' + mycar)
// }
// new_car(); 


// function check_alert(pcheck) {
//     window.alert('you make $' + pcheck);

// }

// var paycheck = 1200;
// check_alert(paycheck); 


// function check_alert(pcheck, car) {
//     window.alert('you make $' + pcheck + ' and have a ' + car);
// }

// check_alert(1200, 'corvette'); 
// check_alert(500+800, 'corv'+'ette');

// function get_added_text () {
//     var textpart1 = 'This is ';
//     var textpart2 = 'fun ' ; 
//     var addextext = textpart1 + textpart2; 
//     return addextext; 
// }
// var alerttext = get_added_text ();
// window.alert(alerttext); 

// function do_not_click () {
//     window.alert ('do not click on my page!')

// }
// document.onclick = do_not_click;

document.onclick = function () {
    window.alert('dont click'); 
}; 