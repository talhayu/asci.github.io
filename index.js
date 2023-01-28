function clk(){
    let user = document.getElementById("user").value
    asci.chr(user)
   }
   
   let asci={
       chr: function(user){
           switch(user){
               case "1":
               document.getElementById("demo").innerHTML="A"
               break;
               case "2":
               document.getElementById("demo").innerHTML="B"
               break;
               case "3":
               document.getElementById("demo").innerHTML="C"
               break;
               case "4":
               document.getElementById("demo").innerHTML="D"
               break;
               case "5":
               document.getElementById("demo").innerHTML="E"
               break;
               case "6":
               document.getElementById("demo").innerHTML="F"
               break;
               case "7":
               document.getElementById("demo").innerHTML="G"
               break;
               case "8":
               document.getElementById("demo").innerHTML="H"
               break;
               case "9":
               document.getElementById("demo").innerHTML="I"
               break;
               case "10":
               document.getElementById("demo").innerHTML="J"
               break;
               case "11":
               document.getElementById("demo").innerHTML="K"
               break;
               case "12":
               document.getElementById("demo").innerHTML="L"
               break;
               case "13":
               document.getElementById("demo").innerHTML="M"
               break;
               case "14":
               document.getElementById("demo").innerHTML="N"
               break;
               case "15":
               document.getElementById("demo").innerHTML="O"
               break;
               case "16":
               document.getElementById("demo").innerHTML="P"
               break;
               case "17":
               document.getElementById("demo").innerHTML="Q"
               break;
               case "18":
               document.getElementById("demo").innerHTML="R"
               break;
               case "19":
               document.getElementById("demo").innerHTML="S"
               break;
               case "20":
               document.getElementById("demo").innerHTML="T"
               break;
               case "21":
               document.getElementById("demo").innerHTML="U"
               break;
               case "22":
               document.getElementById("demo").innerHTML="V"
               break;
               case "23":
               document.getElementById("demo").innerHTML="W"
               break;
               case "24":
               document.getElementById("demo").innerHTML="X"
               break;
               case "25":
               document.getElementById("demo").innerHTML="Y"
               break;
               case "26":
               document.getElementById("demo").innerHTML="Z"
               break;
               default:
               document.getElementById("demo").innerHTML="Invalid asci code"
               
           }    
       }
   }
   function clr(){
       document.getElementById("user").value=""
       document.getElementById("demo").innerHTML="Your asci code will display here"
   }


