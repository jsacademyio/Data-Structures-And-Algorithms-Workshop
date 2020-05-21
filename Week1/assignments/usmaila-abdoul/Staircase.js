const staireCase = (n) => {
	const Arr = [];
  
  for (let i =0; i <= n; i++) {
  	Arr.push(' ');
  }
  
  for (let i = 0; i<= n; i++) {
  	Arr.shift();
    Arr.push('#');
    var arr = Arr.join('')
    console.log(arr)
  }
}

staireCase(5); //for n = 5 output will be 