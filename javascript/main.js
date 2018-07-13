

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJ5R_iyRkzu_s5MdLpgiooI_YFdbV6xro",
    authDomain: "project-e2b48.firebaseapp.com",
    databaseURL: "https://project-e2b48.firebaseio.com",
    projectId: "project-e2b48",
    storageBucket: "project-e2b48.appspot.com",
    messagingSenderId: "969437488639"
  };
  firebase.initializeApp(config);
  var eventsRef = firebase.database().ref('events');

// Listen for form submit
document.getElementById('eventForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var address = getInputVal('address');
  var date = getInputVal('date');
  var description = getInputVal('description');
  var image = getInputVal('image');


  // Save event
  saveEvent(name, address, date, description, image);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('eventForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save event to firebase
function saveEvent(name, address, date, description, image){
  var newEventRef = eventsRef.push();
  newEventRef.set({
    name: name,
    address:address,
    date:date,
    description:description,
    image:image
  });

  database=firebase.database();
  var ref = database.ref('events');
  ref.on('value',gotData,errData);


 
  function gotData(data){
      console.log(data);

  }

  function errData(err){
      console.log('Error!');
      console.log(err);
  }

}