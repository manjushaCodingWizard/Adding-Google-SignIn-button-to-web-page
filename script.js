function onsignin(googleUser)
{
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display","none");  //hiding sign in button
  $(".data").css("display","block");  //displaying profile details block
  $("#email").text(profile.getEmail());  //fetching email id
}

function signout()
{
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signout().then(function(){
    alert("You have been Signed out");
  
    $(".g-signin2").css("display","block");  //display sign in button
    $(".data").css("display","none");  //hide profile details block
  });
}