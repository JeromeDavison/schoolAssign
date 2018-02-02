<html>

<script>
(function (){
var student = function (name, coursenum, program, part){
this.name = name;
this.coursenum = coursenum;
this.program = program;
this.part = part;
this.PartInfo = "";

}


student.prototype.parTime = function (){
if (this.part != ""){
this.PartInfo = "and I have a part-time job now" ;
} else {
this.PartInfo = "and I don't have a part-time job now";
}
return this;
}
student.prototype.printInfo = function (){
console.log("My name is " + this.name + " and I'm in " + this.program + " and im taking " + this.coursenum + " courses this semester" + this.PartInfo);
}

var newStud = new student("john", "12332", "CPA", "flang");
newStud.parTime().printInfo();
})();
(function (){


var Birth = function () {
this.age = null;
this.year = null;
this.college = null;
this.calcYear = null;
}



Birth.prototype.Year = function (){
this.age = prompt("Please enter your age");
var year =  2018 - this.age;
document.write("You were born in the year of " + year);
return this;

}


Birth.prototype.prompt = function (){
   this.year = prompt("Enter the years your expect to study in college");
   var grad = parseInt(this.year) + 2018;
   document.write(" You will graduate from Seneca College in the year of " + grad);
   return this; /* idk why I keep doing this. Its just funny */
}













})();
(function (){
 var Temp = function (){
    this.cel = null;
	this.fah = null;

 }
  Temp.prototype.calcHeat = function (celsius){
      this.cel = celsius;
      this.fah = (this.cel * ( 9/ 5 )) + 32; 
     console.log(this.fah) 
	  this.cel = null;
  }
    var temperture = new Temp();
	
	temperture.calcHeat(37);

})();
(function (){
   function Evenodd(){
     var i;
     for (i = 0; i < 11; i++){
	 if ((i % 2) == 0){
	  console.log(i + " is even");
	 } else {
	 	  console.log(i + " is odd");
	 }
	 }
	
   }
 Evenodd();


})();


(function (){
 var enCap = function (){
 this.firstNum;
 this.secondNum;
 this.printedNum;
 }
 enCap.prototype.largeNum = function (first, sec){
  if (typeof (this.firstNum || this.secondNum) == "undefined"){ 
      this.printedNum = first > sec ? first: sec;
  } else if (typeof (this.firstNum || this.secondNum) != "undefined"){
        this.printedNum = this.firstNum > this.secondNum ? this.firstNum : this.secondNum;

  
  }
    console.log("The larger number is " + this.printedNum);
  
    return this;
 }
 
 
 
 enCap.prototype.smallNum = function (first, sec){
  if (typeof (this.firstNum || this.secondNum) == "undefined"){ 
      this.printedNum = first < sec ? first : sec;
  } else if (typeof (this.firstNum || this.secondNum) != "undefined"){
        this.printedNum = this.firstNum < this.secondNum ? this.firstNum : this.secondNum;

  
  }
      console.log("The smaller number is " + this.printedNum);

  
    return this;
 }
 
 var Test = new enCap();
 Test.smallNum(1000, 10).largeNum(200,20).largeNum(1,20).smallNum(20,1);
 
 
})();
(function (){
function evaluator(){
var add;
for (var i = 0; i < arguments.length; i++){
     add += arguments[i];
}
if (add >= 50){
return true
} else {
return false;
}


}

console.log("Average greater than or equal to 50: " + evaluator(10));

})();


</script>

</html>