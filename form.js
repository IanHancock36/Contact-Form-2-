const name = document.getElementById('name')
const businessName = document.getElementById('businessname')
const emailName = document.getElementById('emailaddress')
const phoneNumber = document.getElementById('phonenumber')
const errorElement = document.getElementById('error')
const mainForm = document.getElementById('mainform')


// need to do an event listener to listen to the individual 
// id's to check the keys match with what you want and 
// if not return error messages. 
// 
mainForm.addEventListener('submit',(event) => {
let messages = [];


if (name.value === " " || name.value == "null"){
    messages.push("Name is Required")
}
if(businessName.value.length <=3 ){
    messages.push("Please enter a valid Business Name")
}

if(emailName.value.length <=5 ){
    messages.push("Please Ennter a Valid Email")
}
if(phoneNumber.value.length <= 10 ){
    messages.push('Please enter a valid Phone number')
}
 if (messages.length >0 ){
     event.preventDefault();
     errorElement.innerText = messages.join(',')
 }
})
//#1
// setting the parameter for name if nothing is typed needs.
// if there is an empty string or a null value 
//(The value null represents the intentional absence of any object value.)
//going name.value sends the value of the name to the server. 
// going messages.push puts whatever is typed into the "messages"
// variable which is an empty array. 

//#2 need to set if than statements to makes sure values are typed in.
// if not meeting parameters set then there will be error messages.
// name.value.length will convert the length of the text to a number
// then you set parameters on how long it must be. 
// if it doenst fit params then runs a error code. 

//the event.preventDefault preventDefault() method cancels the event if it is cancelable,
// meaning that the default action that belongs to the event will not occur.

//The join() method returns the array as a string.
//The elements will be separated by a specified separator. The default separator is comma (,).



