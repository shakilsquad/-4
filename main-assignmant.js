
function mindGame (i){
     let name = i*3;
     let name1  = name + 10;
     let name2  = name1 / 2;
     let name3  = name2 - 5;
     return name3;
}


/* The job of this function is to take a string parameter and tell us whether the number in that parameter is even or odd. */
function evenOdd(name){
     let  number = name.length;
     if( number % 2 == 0  ){
           return 'This is even Number';
     }
     else{
           return ' This is the odd Nuamber';
     }     
}

function isLGSeven (number){
     let subtraction =  number - 7;
     if( subtraction < 7 ){
         return subtraction;  
     }
     else {
           return number * 2;
     }
}

function findingBadData(array){
     let negeValu = 0 ;
     for ( let i = 0; i < array.length ; i++  ){
          let arrayvallu = array[i]
          if(arrayvallu > 0){
               negeValu = negeValu + 1
          }

     }
     return negeValu
}



















function gemsToDiamond(friend1, friends2, friends3){
     let friendName1 = friend1 * 21;
     let friendName2 = friends2 * 32;
     let friendName3 = friends3 * 43;
     let totalFriendName =  friendName1 + friendName2 + friendName3;
     if( totalFriendName >= 2000 ){
           return totalFriendName - 2000
     }
     return totalFriendName
}