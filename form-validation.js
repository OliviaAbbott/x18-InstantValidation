function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLength = userEntered.length;
  var passLength = passEntered.length;
  if( userLength >= 6){
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  if(userEntered.includes(" ") == true){
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username cannot contain spaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if (passEntered.toLocaleLowerCase() != "password") {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else{
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be 'password'";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  if (passEntered == userEntered) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must be different from username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if (passLength >= 6) {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  if (passLength <= 20) {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must be no more than 20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
}
