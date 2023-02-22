

// 1. Write an arrow functio that will take 3 parameters, will multiply the parameters and return the result

const arrorFn = (x, y, z)=> x * y * z

// console.log(arrorFn(3,4,5))


// #### 1.2 Write down following sentence in three line and print the result

// console.log(`
//     I am a web developer
//     I love to code 
//     I love to eat biryani
// `)

// #### 1.3 Write down an arrow function that will take 2 parameter, one parameter wil come form you and other parameter will be a default parameter. Add these two parameter and return the result.

const fn1 = (x , y= 0)=> x + y;

// ``` ##2. Problem  two
// ### Write down an arrow function it wil do the following



// #### 2.1- It will take an array where the array elements will be the name of your friends

// #### 2.2- Check  the length of each element is even, push elements with even length to a new array and return the result

// ```

const friendsNames = [
  "Savannah",
  "Atticus",
  "Evangeline",
  "Sebastian",
  "Gwendolyn",
  "Nathaniel",
  "Aurora",
  "Zachariah",
  "Seraphina",
  "Frederick",
  "Isabella",
  "Alexander",
  "Emmeline",
  "Maximilian",
  "Clementine",
  "Theodore",
  "Felicity",
  "Benjamin",
  "Magnolia",
  "Genevieve",
];



const fn2 = (nameArray) => {
    let evenName = []
     nameArray.map((name) => {
        if(name.length % 2 === 0){
         evenName.push(name)
        }
    });

  //  console.log(evenName);
    return evenName
};

// console.log(fn2(friendsNames))


// ## 3. Section Three 
//     Write and arrow function where it will do the following 

// #### 3.1 It will take an array as an augument and square the array element

// ### 3.2 Calcualte the sum of the square elements

// ### 3.3 Return the avarage of the sum of the square elments

const num = [1,2,3,5,6,7,8,9,11,23,44]

const fn3 = (arr)=> {
    const square = arr.map(item => item * item);

    console.log(square);

    const sum = square.reduce((prev, curr)=> prev + curr, 0)

    const arrLength = arr.length

    console.log(arrLength);

    const avarage = sum/arrLength

    return avarage.toFixed(2)

}

// console.log(fn3(num));

// ## Section Four 
//     Write down an arrow function it will do the following
// ### 4.1 It will take two arrow as input
// ### 4.2 Combine the two array and assign to a new array
// ### 4.3 Find the max number from the new array and return the array

// ```

const fn4 = (arr1, arr2)=> {
    const arr = [...arr1, ...arr2]

   // console.log(arr);

    const max = Math.max(...arr)

    return max
}

// console.log(fn4([2,3,4], [5,6, 7]));