var counter = 0;
//1) a variable name company and assign it to an initial value 'Coding Academy'.
console.log(`
${++counter}\)`);
var company = 'Coding Academy';

//2) Print the string on the browser console using console.log()
console.log(`
${++counter}\)`);
console.log(company)

//3) Print the length of the string on the browser console using console.log()
console.log(`
${++counter}\)`);
console.log(company.length)

//4) Change all the string to capital letters using toUpperCase() method
console.log(`
${++counter}\)`);
console.log(company.toUpperCase())

//5) Change all the string to lowercase letters using toLowerCase() method
console.log(`
${++counter}\)`);
console.log(company.toLowerCase())

//6) Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(`
${++counter}\)`);
console.log(company.slice(0,6))
console.log(company.substr(0,6))    //deprecated
console.log(company.substring(0,6))

//7)Use substr to slice out the phase because because because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log(`
${++counter}\)`);
let str = 'You cannot end a sentence with because because because is a conjunction';
let index = str.indexOf('because');
let end = index + ('because'.length)*2;
let str1 = str.slice(0,index);
let str2 = str.slice(end+1, str.length);
console.log(`${str1}${str2}`);

//8) Check if the string contains a word Academy using includes() method
console.log(`
${++counter}\)`);
console.log(company.includes('Academy'))

//9) Split the string into array using split() method
//10) Split the string Coding Academy at the space using split() method
console.log(`
${++counter}\)`);
console.log(`
${++counter}\)`);
console.log(company.split(' '))

//11) 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log(`
${++counter}\)`);
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '))

//12) Change Coding Academy to Microsoft Academy using replace() method.
console.log(`
${++counter}\)`);
console.log(company.replace('Coding','Microsoft'))

//13) What is character at index 10 in 'Coding Academy' string use charAt() method.
console.log(`
${++counter}\)`);
console.log(company.charAt(10))

//14) What is the character code of A in 'Coding Academy' string using charCodeAt()
console.log(`
${++counter}\)`);
console.log(company.charCodeAt('A'))

//15) Use indexOf to determine the position of the first occurrence of c in Coding Academy
console.log(`
${++counter}\)`);
console.log(company.indexOf('c'))

//16) Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.
console.log(`
${++counter}\)`);
console.log(company.lastIndexOf('c'))

//17) Use indexOf to find the position of the first occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log(`
${++counter}\)`);
console.log(str.indexOf('because'))

//18) Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log(`
${++counter}\)`);
console.log(str.lastIndexOf('because'))

//19) Use search to find the position of the first occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log(`
${++counter}\)`);
console.log(str.search('because'))

//20) Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.
//E.g ' Coding Academy '.
console.log(`
${++counter}\)`);
console.log(' Coding Academy '.trim())

//21) Use startsWith() method with the string Coding Academy make the result true
console.log(`
${++counter}\)`);
console.log(company.startsWith(company[0]))

//22) Use endsWith() method with the string Coding Academy make the result true
console.log(`
${++counter}\)`);
console.log(company.endsWith(company[company.length-1]))

//23) Use match() method to find all the c’s in Coding Academy
console.log(`
${++counter}\)`);
let ar1 = company.match(/c/gi);
for(x in ar1){
    console.log(`${ar1[x]} at index ${company.indexOf(ar1[x])}`)
}

//24) Use match() to count the number all because's in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log(`
${++counter}\)`);
let ar2 = str.match(/because/gi);
let newIndex = 0;
for(let x= 0; x < ar2.length ; x++){
    console.log(`${x+1} ${ar2[x]} at index ${str.indexOf(ar2[x]) + newIndex}`)
    newIndex = str.indexOf(ar2[x]) + newIndex;
    str = str.substring(str.indexOf(ar2[x])+1, str.length);
}

//25) Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
console.log(`
${++counter}\)`);
let cam1 = "Coding";
let cam2 = " Academy";

console.log(cam1.concat(cam2));

//26) Use repeat() method to print Coding Academy 5 times
console.log(`
${++counter}\)`);
console.log(company.repeat(5))

//27) Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 
//10000 euro annual bonus, 15000 euro online courses per month.'
console.log(`
${++counter}\)`);
const salaryStr = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let salary = salaryStr.split(/[,.\s]+/)
let sal = []
for(x in salary){
    if(salary[x].match(/^[0-9]*$/)){
        sal.push(salary[x])
    }
}
console.log(parseInt(sal[0])*12 + parseInt(sal[1]) + parseInt(sal[2])*12)

//28) Write three JavaScript statement which provide truthy value.
console.log(`
${++counter}\)`);
console.log( 1 == '01') 
console.log( 1 == '1') 
console.log( 1 == 1) 

//29) Write three JavaScript statement which provide falsy value.
console.log(`
${++counter}\)`);
console.log( 1 === '01') 
console.log( 1 === '1') 
const a = {a : 'a'};
const b = {a : 'a'}
console.log( a === b) 

//30) Use all the following comparison operators to compare the following values:
// >, < >=, <=, !=, !==,===. Which are true or which are false?
console.log(`
${++counter}\)`);
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// 31) //Below is data of language spoken
// Find Top 5 spoken language
// [{'English':25},{'French':45},{'Arabic':91},{'Spanish':24},{'Russian':9},{'Portuguese':9},{'Dutch':8},{'German':7},{'Chinese':5},{'Swahili':4},{'Serbian':4}]
console.log(`
${++counter}\)`);
const language = [{'English':25},{'French':45},{'Arabic':91},{'Spanish':24},{'Russian':9},{'Portuguese':9},{'Dutch':8},{'German':7},{'Chinese':5},{'Swahili':4},{'Serbian':4}];
let count = 0

const no = language.map(ele =>{
    if(count < 6){
        count++;
        return ele;
    }
    });
//console.log(no.flat())
for(x of no){
    try {
        console.log(Object.keys(x));
    }catch(err){
        console.log()
    }
    
}

//32) Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and 
//measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and 
//frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as 
//method for the Statistics class. Check the output below.
//Input: let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
console.log(`
${++counter}\)`);
class Statistics{
    //let sum = 0;
    sum = (nums) => {
        let total = 0
        for(let i=0 ; i<nums.length ; i++){
            total +=nums[i];
        }
        return total;
    }

    count = (nums) => {
        return nums.length;
    };

    min = (nums) => {
        return Math.min(...nums);
    }

    max = (nums) => Math.max(...nums);

    range = (nums) => {
        let min = Math.min(...nums);
        let max = Math.max(...nums);
        return max-min;
    }

    mean = (nums) => {
        let total = this.sum(nums);
        return Math.round(total/nums.length);
    }

    mode = (arr) => {
        const mode = {};
        let max = 0, count = 0;
        for(let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if(mode[item]) {
            mode[item]++;
            } else {
            mode[item] = 1;
            }
            if(count < mode[item]) {
            max = item;
            count = mode[item];
            }
        }
        return max;
    }

    median = (arr) => {
        arr.sort((a, b)=> a-b);
        let len = arr.length;
        if(len %2 === 0){
            return (arr[len/2 - 1] + arr[len/2])/2;
        } else {
            return arr[(len -1)/2];
        }
    }

    vari = (arr) => {
        const sum = arr.reduce((acc, val) => acc + val);
        const { length: num } = arr;
        const median = sum / num;
        let variance = 0;
        arr.forEach(num => {
            variance += ((num - median) * (num - median));
        });
        variance /= num;
        return variance;
    }

    std = (arr) => {
        let va = this.vari(arr);
        return Math.sqrt(va)
    }

    findFrequencies = (ele) =>{
        var freq = 1;
        var idx = 1;
        var element = ele[0];
        while (idx < ele.length)
        {
        
            // check if the current element is equal to
            // previous element.
            if (ele[idx - 1] == ele[idx]) {
                freq++;
                idx++;
            }
            else
            {
                console.log(`\(${element}, ${freq}\)`);
                element = ele[idx];
                idx++;
                
                // reset the frequency
                freq = 1;
            }
        }
        
        // print the last element and its frequency
        console.log(`\(${element}, ${freq}\)`);
    }

    freqDist = arr => {
        let obj = {}; 

        for (let i=0; i<arr.length; i++){
            let element = arr[i]; 

            console.log(element)

            // check if key exists in object already

            // if it exists, add 1 to the value
            if (obj[element] !== undefined){
            obj[element] += 1;
            }

            // if it does not exist, add 1 to setup future elements
            else {
            obj[element] === 1; 
            }
        }
        return obj  
    }

}
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistics = new Statistics();

console.log('Count:', statistics.count(ages)) // 25
console.log('Sum: ', statistics.sum(ages)) // 744
console.log('Min: ', statistics.min(ages)) // 24
console.log('Max: ', statistics.max(ages)) // 38
console.log('Range: ', statistics.range(ages)) // 14
console.log('Mean: ', statistics.mean(ages)) // 30
console.log('Median: ',statistics.median(ages)) // 29
console.log('Mode: ', statistics.mode(ages)) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.vari(ages)) // 17.5
console.log('Standard Deviation: ', statistics.std(ages)) // 4.2
console.log('Frequency Distribution: ',Object.entries(statistics.freqDist(ages)))

// 33)
console.log(`
${++counter}\)`);
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
let splitedsentance  = sentence.split(/[,.%@&#!?$;]+/)
let puresentence = splitedsentance.join('');
console.log(puresentence);
const counts = {}
let a1  = puresentence.split(' ');
a1.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)

//34) Write a function named shuffle, it takes an array parameter and it returns a shuffled array.
console.log(`
${++counter}\)`);
shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) { 
  
        // Generate random number 
        let j = Math.floor(Math.random() * (i + 1));
                   
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log(`Original Array:${ages} 
Shuffled Array: ${shuffle(ages)}`);


//35 Write 	a function which filter users who has scoresGreaterThan85, 
//Write a function which addUser to the user array only if the user does not exist. 
//Write a function which addUserSkill which can add skill to a 	user only if the user exist. 
//Write a function which editUser if the user exist in the users array.
console.log(`
${++counter}\)`);
const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }];

    function greaterScore(score){
        if(score > 85){
            console.log()
        }
    }

    addUser = () => {

    }

    addUserSkill = () => {

    }

    editUser = () => {

    }
console.log()

//36) Create an empty object called dog
//37) Print the the dog object on the console
console.log(`
${++counter}\)`);
const dog = {}
console.log(`
${++counter}\)`);
console.log(dog)

//38) Add name, legs, color, age and bark properties for the dog object. 
//The bark property is a method which return woof woof
dog.bark = 'woof-woof';


//39) Get name, legs, color, age and bark value from the dog object
console.log(`
${++counter}\)`);
dog.name = "Sheru";
dog.legs = 4;
dog.color = 'black';
dog.age = 5;
console.log(dog)

//40) Set new properties the dog object: breed, getDogInfo
console.log(`
${++counter}\)`);
dog.breed = 'German-sheffered';
dog.getDogInfo = function(){
    return {
        name : this.name,
        legs : this.legs,
        color : this.color,
        age : this.age,
        bark : this.bark,
        breed : this.breed
    }
}
// console.log(dog)
let getDog = dog.getDogInfo();
console.log(`
${++counter}\)`);
console.log(getDog.breed);

//41) Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties
// and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and the same for expenses.
console.log(`
${++counter}\)`);
const personAccount = {
    firstName : 'John',
    lastName : 'Doe',
    incomes : {
        finance : 100,
        office : 200
    },
    expences : { houseRent : 50,
        launch : 80,
        transportation : 20},
    totalIncome() {
        // console.log("Hello");
        //console.log();
        sum = 0;
        for(let x of Object.values(this.incomes)){
            sum += x;

        }
        return sum;
    },
    totalExpense() {
        let sum = 0;
        for(let x of Object.values(this.expences)){
            sum += x;
        }
        return sum;
    },

    accountInfo() {
        return [this.firstName, this.lastName, [Object.entries(this.incomes)], [Object.entries(this.expences)]];
    },

    addIncome(description , income) {
        this.incomes[description] = income;
    },

    addExpense(description , expence) {
        this.expences[description] = expence;
    },

    accountBalance() {
        let income = this.totalIncome();
        let expence = this.totalExpense();
        return income-expence;
    }

}
console.log(`Account Info of user is : ${personAccount.accountInfo()}`)
console.log(`Total Income: ${personAccount.totalIncome()}`)
console.log(`Total Expence: ${personAccount.totalExpense()}`)
console.log(`Account Balance : ${personAccount.accountBalance()}`)

//Adding Income & Expences
personAccount.addExpense('Mobile-recharge',10)
personAccount.addIncome('Share-Market', 20)
console.log("After adding incomes and Expences...")

console.log(`Total Income: ${personAccount.totalIncome()}`)
console.log(`Total Expence: ${personAccount.totalExpense()}`)


//42) Count logged in users,count users having greater than equal to 50 points from the following object.
console.log(`
${++counter}\)`);
let p=0;
for(let i = 0 ; i < users.length ; i++){
    if(users[i].scores >= 50){
        p++;
    }
}
console.log(`User having greater than 50 points: ${p}`);


//43) Set your name in the users object without modifying the original users object
console.log(`
${++counter}\)`);
users.push({
    name : 'Sid',
    scores: 75,
    skills : ['HTML', 'CSS', 'JS', 'JAVA'],
    age : 19
})

//44) Get all keys or properties of users object
console.log(`
${++counter}\)`);
console.log(`Getting all Keys: ${Object.keys(users[0])}`)



//45) Get all the values of users object
console.log(`
${++counter}\)`);
console.log("Geetting all values")
for(let i = 0 ; i < users.length ; i++){
    if(users[i].scores >= 50){
        console.log(Object.values(users[i]).flat())
    }
}
//console.log()

//46) Change skills array to JSON using JSON.stringify(). 
console.log(`
${++counter}\)`);
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
console.log(` Json data ${JSON.stringify(skills)}`)


//47) Stringify the age variable. 
console.log(`
${++counter}\)`);
let age = 250;
console.log(JSON.stringify(age));

//48) Stringify the isMarried variable. 
console.log(`
${++counter}\)`);
let isMarried = true
console.log(JSON.stringify(isMarried))

//49
console.log(`
${++counter}\)`);
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
console.log(JSON.stringify(student));

//50
console.log(`
${++counter}\)`);
const studentInfo = JSON.stringify(student,['firstName', 'lastName', 'skills']);
console.log(studentInfo)

