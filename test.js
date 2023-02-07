/* function mindGame (i){
      let name = i*3;
      let name1  = name + 10;
      let name2  = name1 / 2;
      let name3  = name2 - 5;
      return name3;
 }
  console.log(mindGame(5)); */

 /*  function evenOdd(name){
      let  number = name.length;
      if( number % 2 == 0  ){
            return 'This is even Number';
      }
      else{
            return ' This is the odd Nuamber';
      }     
}

 console.log(evenOdd("shail")); */

 /* function isLGSeven (number){
      let subtraction =  number - 7;
      if( subtraction < 7 ){
          return subtraction;  
      }
      return number * 2;
 }

 console.log(isLGSeven(6));
  console.log(isLGSeven(-15));
 console.log(isLGSeven(15)); */

/*  function findingBadData(array){
      let negeValu = 0 ;
      for ( let i = 0; i < array.length ; i++  ){
           let arrayvallu = array[i]
           if(arrayvallu < 0){
                negeValu = negeValu + 1
           }
 
      }
      return negeValu
 }
  console.log(findingBadData( [ -4, -9, -5, 0, 52, 63, -33, -55 ])); */


   function gemsToDiamond(f1gems, f2gems, f3gems){

     let f1number = f1gems * 21
     let f2number = f2gems * 32
     let f3number = f3gems * 43
     let total = f1number + f2number + f3number ;
     if ( typeof f1gems != 'number' || typeof f2gems != 'number' ||typeof f1gems != 'number' ) {
         return "Please return a valid number"
     }
     else if ( total >= 1000*2 ) {
         return total - 2000;
     }
     return total ;
 }
 console.log(gemsToDiamond)