// objects=-> stores the data in key and valkue format
// [] .
// let obj={}

// obj["name"]="alpha"
// obj.age=25
// obj.name="beta"
// console.log(obj["name"])
// console.log(obj.name)


//freq of a number
// let num=123217241
// let obj={}
// while(num>0)
// {
//     let ld=num%10

//    if(obj[ld]==undefined){
//      obj[ld]=1
//    }else{
//       let count=obj[ld] 
//       count++
//       obj[ld]=count 

//    }
//    num=Math.floor(num/10)


// }

// console.log(obj)
//       01234
let str="aoiufbadsuiobfoiuasdbpfuasdbofuq"
let bag={}
for(let i=0;i<=str.length-1;i++)
{   
      let ch=str[i]
      if(bag[ch]==undefined)
      {
        bag[ch]=1
      }else{
        let count=bag[ch]
        count++
        bag[ch]=count
      }

}
console.log(bag)

// -------------------- arrys  -----------------

// arrys are the varibles or data structure that strore the data in censicutuive menmory location index of arr always star from zero
//        0  1  2 3  4   5  6   7        8 
let abc=[11,22,33,44,55,66,77,"abcd",{name:"alpha"}]


console.log(abc)
console.log(abc[0])
console.log(abc[1])
console.log(abc[7])


let arr=[]

arr[0]="apple"
arr[1]="banana"
arr[2]="mango"
arr[4]="straw"
console.log(arr)



let xyz="abcdefg"
xyz[0]="k"
console.log(xyz[0])

let aaa=["a","b","c","d","e"]
aaa[0]="z"
console.log(aaa)

// .length
              0
let fruits=["mango","kiwi","apple","grapes","papaya","dragon fruit"]

console.log(fruits.length-1)
for(let i=0;i<=fruits.length-1;i++)
{
    console.log(fruits[i])
}


// Write a  program to enter a number and print it in words.






