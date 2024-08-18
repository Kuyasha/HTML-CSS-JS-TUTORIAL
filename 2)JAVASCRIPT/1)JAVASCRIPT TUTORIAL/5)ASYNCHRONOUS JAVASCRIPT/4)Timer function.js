//Write a program to print 1 after 1 sec, 2 after 2 sec till 5.
//1)Using setTimeout 
/*    function timer1() {
      for (let i = 1; i <= 5; i++) {
        setTimeout(()=>{
           console.log(i);
         }, i*1000);
      console.log("Hello ninjas!");
     }
   }
   timer1();
   */




//Using setInterval (when using setInterval,we dont need to use for loop) 
function timer2() {
      let i = 0;
      setInterval(
          function(){
             console.log(i);
             i++;
      },1000);
}
timer2();


