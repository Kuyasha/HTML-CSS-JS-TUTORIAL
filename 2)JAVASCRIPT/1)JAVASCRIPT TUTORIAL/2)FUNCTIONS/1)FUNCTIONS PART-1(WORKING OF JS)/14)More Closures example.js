//CODE-1
function cart(){
    let items=0;
    return{
      addItem:function(){
        items++;
      },
      getItem:function(){
        return items;
      }
    };
  }
const closure=cart();
closure.addItem();
closure.addItem();
closure.addItem();
console.log(closure.getItem()); //3
  
  
  
  
//CODE-2
function outerPrint(){
    let a1='OuterPrint';
  
    function innerPrint(){ 
      let a2='InnerPrint';
      console.log(a2);
    }
    function inner_innerPrint(){
        let a3='Inner_InnerPrint';
        console.log(a3);
    }
    return {innerPrint,inner_innerPrint};  
}                     
                    
const closure2=outerPrint();
closure2.innerPrint();//InnerPrint
closure2.inner_innerPrint();//Inner_InnerPrint
console.log(closure2.innerPrint());//InnerPrint undefined

  



  //CODE-3
  function createCounter(){
    let count=0;
    function increment(){
      count++;
      console.log(count);
    }
    function decrement(){
      count--;
      console.log(count);
    }
    return {increment,decrement};
  }
const counter=createCounter();
counter.increment();//1
counter.increment();//2
counter.increment();//3