var config = {
    apiKey: "AIzaSyD6dw1xWLSW3FQ-9zY06ALa9Oe9arhMd6A",
    authDomain: "employee-data-a8df6.firebaseapp.com",
    databaseURL: "https://employee-data-a8df6.firebaseio.com",
    projectId: "employee-data-a8df6",
    storageBucket: "employee-data-a8df6.appspot.com",
    messagingSenderId: "1008780745263"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$('#btn').on("click",function(){
  var name = $('#exampleInputEmail1').val();
  var rate = $('#exampleInputPassword1').val();
  var date = $('#exampleInputEmail').val();
  var monthlyRate = $('#exampleInputPassword').val();
})

database.on("value", function(snapchat){

})