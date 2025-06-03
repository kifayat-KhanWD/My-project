async function process() {
   const response = await fetch("https://catfact.ninja/fact")
     const data=await response.json();
     console.log(data);  
     const h1=document.getElementById("hello")
     h1.textContent=data.fact;
}
process();