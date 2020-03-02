
console.log(a)

b()
var a="hello world"

function b(){
console.log("this is from function b")
}




console.log(a[b])

console.log("hi this is ")

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
     
  }
   setTimeout(log,1000);
}


var array=[1,2,3,4,5]
var newa=array.filter(i=>i>=2)
console.log(newa)
console.log(Math.max(...array))

var a=3

a=4
console.log(a)


var obj1={name1:"baaji"}
var obj2={name2:"dilip"}
console.log(obj1)
obj2=obj1
console.log(obj2)
obj1.age=23
console.log(obj2)
console.log(obj1)
console.log(Object.keys(obj1))

const person={
            name:"shivaji",
    age:23,
            talk(){
            console.log("this is ",this)
                setTimeout(()=>{console.log("this",this)},1000)
                }   

}

console.log(person)
console.log(person.talk())


var a=3;
var b="abc";
console.log(a/b)


console.log(this)
var person1={firstname:"balaji",
           lastname:"kka",
           getfullname:function(){
var fullname=this.firstname+this.lastname;
           return console.log(fullname)
           }
           }

console.log(person1)

person1.getfullname()


var logname=function(){
console.log("logged"+" "+this.getfullname());
}

var logfulname=logname.bind(person1);
logfulname()



var actors3=function(name,age){
this.name=name,
this.age=age
}

var act1=new actors3("ajithkumar",34)
var act2=new actors3("vijay",45)
console.log(act2)
console.log(act1)


var basktball={
    name:"kobe",
    lastname:"bryant",
    getname:function(){
            var fname=this.name+""+this.lastname
            return console.log(fname)
}
}

basktball.getname()


var basketbal2=function(){
        console.log("logging out the list"+" "+this.lastname)
}

var basketbal3= basketbal2.bind(basktball)

basketbal3()


var cric={
    name1:"azar"
    
}


var crci2=function(){
console.log("logging out the player name"+" "+this.name)
}

console.log(cric)
var cric3=crci2.bind(basktball)
cric3()





var bb=function(a,b){
console.log("arguments list"+" "+a+" "+b+" "+this.name1)
}

var c3=bb.bind(cric)
bb.call(cric,"kohli","virat")
bb.apply(cric,["amirkahn","salmankhan"])
c3()





var a1={
    firstname:"mahesh",
    lastname:"babu",
    getfullname:function(){
        var fullname=this.firstname+this.lastname
        return console.log(fullname)
        }
}

a1.getfullname()

var a2={
    firstname:"nani",
    lastname:"kumar"
}

var a9={firstname:"devra",
        lastname:"konda"
       }
var a3=a1.getfullname.bind(a9)

a1.getfullname.apply(a2)
a1.getfullname.call(a2)

a3()





var k=34;
var j=95;

k=j

j=123;

var o2={name:"ji"}

var o3={name:"ki"}

o3=o2;

console.log(o3)
console.log(o2)
o2.age=23
console.log(o3)
console.log(o2)

console.log(k)
console.log(j)


var ar8=["balaji","vijay","ajith"]

for(var prop in ar8){
console.log(prop+":"+ar8[prop])
}


function n(){

var m="babbar";
    return console.log(m)
    

}


n()








var h="shiv";

for(var l=0;l<3;l++)
    {
         var k8="ajithkumarreddy";
        let a8="ultinate"
         
        console.log("we are from bangla"+l+h+k8+a8);
        
        
    }

function n1(){
console.log(h)
}

n1()

console.log(k8)



h="rajini"

console.log(h)

let k1="dala";

console.log(k1)

k1="power"

console.log(k1)

var a=[12,3,5]
a.push(3333333333)
console.log(a)
console.log(Math.max(...a))
console.log(a.filter(a=>a>5))



function sum(...theargs){
    return theargs.reduce((p,c)=>{
        return p+c
    })
}

console.log(sum(1,2,3,4,5,5,55,5,5,5,5,5))

function sum(...a){
return a.reduce((p,c)=>{
    return p+c;
})
}
console.log(sum(1,2,34,5,5,5,5,5))


var a88;
console.log(a88)


 console.log(a)
    var a
    a=3


function add(a)
{
    return function(b){
       console.log(a+b)
    }
}

add(3)(4)


var ap=[1,2,3,4]

console.log(ap)










const months = ['Jan', 'March', 'April', 'June'];
console.log(months.join())
console.log(months)

console.log(months.splice(1,1))
console.log(months)



var kob="bryant";

kob.replace("bry","");
console.log(kob);


console.log("this is to check")

function name(a){
    return function (b){
        return a+b
    }
}

console.log(name(1)(2))



 var q1=12;

function n12(){
    
   

     console.log(q1)
        
}

n12()


function kobe(){
    
    james()
    
    var j="this is james"
    console.log(j123)
    
}

var j123="heloo 123"
function james(){
    
    console.log(j123)
    
}

kobe()

console.log(k13)
var k13































































