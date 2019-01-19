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
  var name = $('#name').val().trim();
  var role = $('#role').val().trim();
  var startDate = $('#startDate').val().trim();
  var rate = $('#rate').val().trim();
  
  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    rate: rate,
  });


})

database.on("value", function(snapshot){

})