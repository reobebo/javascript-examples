function min(n1,n2)
{
  if (n1<n2)
  {
    return n1;
  }
  else if (n2<n1)
  {
    return n2;        
  }
  else
  {
    return "Both are the same";       
  }
               
}

console.log(min(2,1));