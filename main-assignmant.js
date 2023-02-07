/* || The work of this function is to take an input parameter and then calculate with that input parameter */
function mindGame (i){
     let name = i*3;
     let name1  = name + 10;
     let name2  = name1 / 2;
     let name3  = name2 - 5;
     return name3;
}


/* || The work of this function is to take a string parameter and return the total number of words found in that parameter and that parameter whether the total word is odd or even */
function evenOdd(name){
     let  number = name.length;
     if( number % 2 == 0  ){
           return 'This is even Number';
     }
     else{
           return ' This is the odd Nuamber';
     }     
}


/* || The work of this function is to take an input parameter and apply a condition by subtracting seven from that parameter. If that condition is false, then it will multiply the original subtraction by two and return the subtraction result */
function isLGSeven (number){
     let subtraction =  number - 7;
     if( subtraction < 7 ){
         return subtraction;  
     }
     else {
           return number * 2;
     }
}


/* || The work of this function is to take three input paramiter and that parameter is how many diamonds each friend has, oh how many diamonds they all have in total, if the total diamond is greater than or equal to two thousand, then we will apply a small condition and If that condition is false, we will return the total diamond */
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



// || The job of this function is to find exactly how many bad data or how many negative values ​​there are in an array and return the total number to the output.
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