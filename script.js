window.promises = [];
let a=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("a")
	}, 1000)
})
let b=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("2")
	}, 2000)
})
let c=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("3")
	}, 3000)
})
let d=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("4")
	}, 4000)
})
let e=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("5")
	}, 5000)
})
promises.push(a);
promises.push(b);
promises.push(c)
promises.push(d)
promises.push(e)
let x=Promise.any([a, b, c, d, e])
x.then((data)=>{
	const element=document.getElementById("output")
	   element.innerText=data;
})

// Do not change the code above this
// add your promises to the array `promises`
