var config = {
    apiKey: "AIzaSyAJ5R_iyRkzu_s5MdLpgiooI_YFdbV6xro",
    authDomain: "project-e2b48.firebaseapp.com",
    databaseURL: "https://project-e2b48.firebaseio.com",
    projectId: "project-e2b48",
    storageBucket: "project-e2b48.appspot.com",
    messagingSenderId: "969437488639"
  };
  firebase.initializeApp(config);
  
  database=firebase.database();
  var ref = database.ref('events');
  ref.on('value',gotData,errData);

  function gotData(data){
      var events= data.val();
      var keys = Object.keys(events);
      //console.log(keys);
      for(var i=0 ;i<keys.length ; i++){
          var k = keys[i];
          var name = events[k].name;
         // console.log(name);
          var description = events[k].description;
          //console.log(initials, event);
          var event =document.createElement('li');
          var eventName = document.createTextNode(events[k].name);
          
          var eventImage = document.createTextNode(events[k].image); 
          var eventDate= document.createTextNode(events[k].date);
          var eventAddress= document.createTextNode(events[k].address);
          var eventDescription = document.createTextNode(events[k].description);
          
         
          event.appendChild(eventName);
          var div = document.createElement("div");
          div.innerHTML = '<div id= "idCild"><br> </div>';
          document.getElementById("myList").appendChild(div);
          event.appendChild(eventDate);
          var div1 = document.createElement("div");
          div1.innerHTML = '<div id= "idCild"><br> </div>';
          document.getElementById("myList").appendChild(div1);
          event.appendChild(eventAddress);
          var DOM_img = document.createElement("img");
          DOM_img.src = events[k].image;
          document.getElementById("myList").appendChild(event);
          document.getElementById("myList").appendChild(DOM_img);
          document.getElementById("myList").appendChild(div);

        // console.log(events[k].name);
         //console.log(events[k].image);
         //console.log(events[k].date);
         //console.log(events[k].address);


      }

  }

  function errData(err){
      console.log('Error!');
      console.log(err);
  }
  var text = ["Culture", "Art", "Sports"];
  var counter = 0;
  var elem = document.getElementById("changeText");
  var inst = setInterval(change, 1000);
  
  function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
      counter = 0;
      // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
  }