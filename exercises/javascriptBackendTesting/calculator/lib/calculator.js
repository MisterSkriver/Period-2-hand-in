function add (n1, n2) {
    return +n1 + +n2;
  }
  
  function sub (n1, n2) {
    return +n1 - +n2;
  }
  
  function mul (n1, n2) {
    return +n1 * +n2;
  }
  
  function div (n1, n2) {
    if(n2==0){
    throw new Error("Attempt to divide by zero");
    }
    return +n1 / +n2;
  }