//your JS code here. If required.
let output = document.getElementById('output');
let arr = [1,2,3,4];
output.textContent = arr;

function evenNum(arr){
	let ans = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			ans.push(arr[i]);
		}
	}
	return ans;
}

function doubleEvenArr(arr){
	let ans = [];
	for(let i = 0; i < arr.length; i++){
		ans.push(arr[i] * 2);
	}
	return ans;
}

const promise1 = (data) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(evenNum(data));
		},1000)
	})
}

const promise2 = (data) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(doubleEvenArr(data));
		},2000);
	})
}

async function updateOutput(arr){
	let p1 = await promise1(arr);
	output.textContent = p1;
	let p2 = await promise2(p1);
	output.textContent = p2;
}

updateOutput(arr);