



// // // const jsonnames=`["megha","arjun","sumanth"]`;
// // // const jsonpperson=`{
// // //   "name":"megha",
// // //   "age":14,
// // //   "isEmployed": true,
// // //   "hobbies":["karate","chess"]
// // // }`;
// // // const jsonppeople=`[{
// // //   "name":"megha",
// // //   "age":14,
// // //   "isEmployed": true
// // // },
// // // {
// // //   "name":"arjun",
// // //   "age":15,
// // //   "isEmployed": true
// // // },
// // // {
// // //   "name":"sumanth",
// // //   "age":20,
// // //   "isEmployed": true
// // // },
// // // {
  
// // //   "name":"sai",
// // //   "age":16,
// // //   "isEmployed": true
// // // }]`;

// // // const parseddata=JSON.parse(jsonppeople);
// // // console.log(parseddata);  

// // fetch("people.json")
// //    .then(response=>response.json())
// //    .then(values=>values.forEach(value=>console.log(value.isEmployed)))
// //    .catch(error=> console.error(error));

// // console.log(navigator.cookieEnabled);

// // document.cookie="firstname=rahul; expires=sun, 1 january 2027 12:00:00 IST; path=/";
// // document.cookie="lastname=sanam; expires=sun, 1 november 2018 12:00:00 IST; path=/";
// // console.log(document.cookie);

// // setcookie("emailaddress","rahulsanam@gmail.com",365);




// // deletecookie("firstname");

// // getcookie("emailaddress");

// const firsttext=document.querySelector("#firsttext");
// const lasttext=document.querySelector("#lasttext");
// const submit=document.querySelector("#submit");
// const getcookies=document.querySelector("#getcookies");

// submit.addEventListener("click",()=>{
//   setcookie("firstname",firsttext.value,365);
//   setcookie("lastname",lasttext.value,365);
// })

// getcookies.addEventListener("click",()=>{
//   firsttext.value=getcookie("firstname");
//   lasttext.value=getcookie("lastname");
// })
// setcookie("firstname","rahul",365);
// setcookie("lastname","sanam",365);


// deletecookie("firstname");
// deletecookie("lastname");
// function getcookie(name)
// {
//    const cDecode=decodeURIComponent(document.cookie);
//    const cArray=cDecode.split("; ");
//    let result=null;

//    cArray.forEach(element=>{
//     if(element.indexOf(name)==0)
//     {
//       result=element.substring(name.length+1);
//     }
//    })
//    return result;
// }
// function setcookie(name,value,daystolive)
// {
//   const date=new Date();
//   date.setTime(date.getTime()+(daystolive*24*60*60*1000));
//   let expires="expires="+date.toUTCString();
//   document.cookie=`${name}=${value}; ${expires}; path=/`
// }
// function deletecookie(name)
// {
//   setcookie(name,null,null);
// }

// console.log(getcookie("firstname"));
// console.log(getcookie("lastname"));

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//       .then(response=>{
//         if(response.ok==false)
//         {
//           throw new Error ( "could not fetch resource");
//         }
//         return response.json();
//       })
//       .then(data=>console.log(data))
//       .catch(error=>console.error(error));


fetchData();
async function fetchData()
{
   try
   {
     const pokemonname=document.getElementById("pokemonname").value.toLowerCase();
     const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)

     if(response.ok==false)
     {
       throw new Error("could not fetch resource");
     }
     const data= await response.json();
     const pokemonsprite=data.sprites.front_default;
     const imgelement=document.getElementById("pokemonsprite");

     imgelement.src=pokemonsprite;
     imgelement.style.display="block";
   }
   catch(error)
   {
    console.error(error);
   }
}





















