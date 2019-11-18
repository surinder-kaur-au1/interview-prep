//write an example that shows const object declaration can change their value, not their reference

const person = {
    name:"surinder"
  };
  
  person.name = "greg";
  console.log(person.name);//greg
  person = {
    name:"lilly"
  };
  //console.log(person.name);//error