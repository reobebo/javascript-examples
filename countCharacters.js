function countBs (s)
{
 var count=0;
 for (var i=0; i<=s.length; i++)
 {
   if (s[i]==="B")
   {
   count++;
  
   }
 } return count;
}



function countChars (c, choice)
{
 var count=0;
 for (var i=0; i<=c.length; i++)
 {
   if (c[i]==choice)
   {
   count++;
  
   }
 } return count;
}
console.log(countBs("Billy Bob"));
console.log(countChars("Billy Bob", "o"));