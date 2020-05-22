const staireCase = (n) => {
	const Arr = [];
  
  for (let i =0; i <= n - 1; i++) {
  	Arr.push(' ');
  }
  
  for (let i = 0; i<= n - 1; i++) {
  	Arr.shift();
    Arr.push('#');
    let arr = Arr.join('')
    console.log(arr)
  }
}

staireCase(4); //for n = 5 output will be 