//Exercise 3
//Date: 4/2/2020

var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"       //key: Value
    }
  ];
  
  
  var haveYouAnyWool = function() {
      for (var i = 0; i < woolOwners.length; i++) {
      var totalBags = totalBags + i;
      }
      return (i);
  };
  //moved this from top location to here and called the function haveyouAnyWool()
  var bags = haveYouAnyWool();
  
  function baabaaBlackSheep() {
      console.log("BaaBaa BlackSheep have you any wool?");
      if (bags > 0) {
          console.log("yes sir, yes sir " + bags + " bags full");
    }
  }
  
  function oneForMy() {
      for (var i = 0; i < 2; i++) {
          people = Object.keys(woolOwners[i]);
          var person = people.toString();
          console.log("one for my " + person);
      }
  }
  
  baabaaBlackSheep();
  oneForMy();
  
  var boy = Object.keys(woolOwners[2]);
  //Fix this with var littleboy = boy[0];
  var littleBoy = boy[0];
  //changed littleboy with woolOwners
  var whereHeLives = woolOwners[2].location;
 

  console.log("one for the " + littleBoy + " that lives " + whereHeLives);