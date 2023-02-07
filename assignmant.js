// Problem 1: Let’s play a mind game
function mindGame (i){
     let name = i*3;
     let name1  = name + 10;
     let name2  = name1 / 2;
     let name3  = name2 - 5;
     return name3;
}
// console.log(mindGame(5));

// Problem 2: Finding even or odd

function evenOdd(name){
      let  number = name.length;
      if( number % 2 == 0  ){
            return 'This is even Number';
      }
      else{
            return ' This is the odd Nuamber';
      }     
}

// console.log(evenOdd("shail"));

//////////////////////////
 /*  Problem 3: Is Less or Greater than seven
  তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  



  এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

  Input : 6

  Output: -1 */

 function isLGSeven (number){
      let subtraction =  number - 7;
      if( subtraction < 7 ){
          return subtraction;  
      }
      return number * 2;
 }

 /* console.log(isLGSeven(6));
  console.log(isLGSeven(-15));
 console.log(isLGSeven(15)); */
 


/*  Problem 4: Finding Bad data

 তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
 
 এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
 
 Sample Input & Output:-
 
 Input: [ 1,2,5 ]
 
 Output: 0
 
 Input: [ 2, -5, -7, -13 ]
 
 Output: 3
 
 Input: [ -4, -9, -5, -33, -55 ]
 
 Output: 5
  */
 
 function findingBadData(array){
      let negeValu = 0 ;
      for ( let i = 0; i < array.length ; i++  ){
           let arrayvallu = array[i]
           if(arrayvallu < 0){
                negeValu = negeValu + 1
           }
 
      }
      return negeValu
 }
//  console.log(findingBadData( [ -4, -9, -5, 0, 52, 63, -33, -55 ]));
 



//  Problem 5: Convert your gems into diamond


// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output:-

// Input: 1, 1, 1

// Output: 96

// Input: 20, 200, 50

// Output: 6970



Input: 100, 5, 1

Output: 303

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
console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(100, 5, 1));
