
console.log("this is for the test")

var array=[1,2,3,"balaji"]
var ob={name:"balaji",
        age:34}
var a
var b=[]
console.log(typeof(array))
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(null))
console.log(array)
console.log(Array.isArray(array))
console.log(ob)
console.log(Object.keys(ob))
console.log(array.length);

var obj1={actor1:"ajith",state:"tamilnadu"}
var obj2={actor2:"vijay",state2:"chennai"}
var obj3=Object.assign(obj1,obj2);
console.log(obj3);
console.log(Object.keys(obj3))


function time(){
console.log(1)
    setTimeout(function(){
console.log(2)},1000)
    console.log(3)
    setTimeout(function(){
        console.log(4)},3000
    )
    
    setTimeout(function(){
        console.log(5)},6000
    )
    
    console.log(window.location.href)
}
time()

var arr1=["a","l","i"];
          
var newa=[...array,arr1]

console.log(newa);

console.log(typeof(Array.isArray(arr1)))

var obj9={hero1:"shiva",state:"tamil"}
var obj10={hero2:"vijay",state:"telang"}
console.log(Object.assign(obj9,obj10))

var myname="balaji"

var revname=myname.split("").reverse("").join("")
console.log(revname);

console.log(myname.slice(1,3))
console.log(myname.replace("aji","u"))

function numg(){
console.log(Math.random()*7)
}

numg()


var aobj=[{name1:"sachin",state:"maharastra"},{name2:"sehwag",state:"Delhi"}]
var aobj2=[{name3:"dhoni",state:"kohli"},{name3:"virart",state:"banglore"}]

var neobj=aobj2.map(i=>i.name3)
console.log(neobj)
var nef=aobj2.filter(f=>f.state!=="ko")
console.log(nef)

var fo=[1,3,6]
console.log(fo.map(m=>m*3))
aobj.forEach(f=>console.log(f.state))
console.log(Math.min(2,8,3))



var scope="am just global"
function whatismyscope(){

    var scope="am just local"
    function func(){
return console.log(scope)
    }
    
    return func


}


whatismyscope()()