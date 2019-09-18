

  function Prime()
      {
        var i,flag=0,number;
        number = Number(document.getElementById("pri").value);

        for(i=2; i <= number/2; i++)
        {
          if(number%i == 0)
          {
            flag = 1;
            break;
          }
        }
        if(flag == 0)
        {
        	document.getElementById("result1").innerHTML= "Number is Prime" ; 
          
        }
        else
        {
        	document.getElementById("result1").innerHTML = "Number is not Prime" ; 
         
        }
      }

      function Palindrome()
			{
				var rem, temp, final = 0;
				var number = Number(document.getElementById("pali").value);

				temp = number;
				while(number>0)
				{
					rem = number%10;
					number = parseInt(number/10);
					final = final*10+rem;
				}
				if(final==temp)
				{
					document.getElementById("result").innerHTML= "Number is Palindrome" ;
				}
				else
				{
					document.getElementById("result2").innerHTML= "Number is not Palindrome" ;
				}
			}
		
		function Armstrong()
      {
        var flag,number,remainder,addition = 0;
        number = Number(document.getElementById("arm").value);

        flag = number;
        while(number > 0)
        {
          remainder = number%10;
          addition = addition + remainder*remainder*remainder;
          number = parseInt(number/10);
        }

        if(addition == flag)
        {
          document.getElementById("result3").innerHTML= "Number is Armstrong" ;
        }
        else
        {
          document.getElementById("result3").innerHTML= "Number is not Armstrong" ;
        }
      }

      function perfectNumber()
			{
				var num, i = 1, sum = 0;
				num = Number(document.getElementById("per").value);
				 while (i < num) {
                      if (num % i == 0) {
                          sum = sum + i;
                                   }
                             i++;
                              }
				if(sum == num)
				{
          document.getElementById("result4").innerHTML= "Number is perfect " ;
        }
        else
        {
          document.getElementById("result4").innerHTML= "Number is not  perfect" ;
        }
			}

	function Greatest() {

		var a= Number(document.getElementById("g1").value);
		var b= Number(document.getElementById("g2").value);
		var c= Number(document.getElementById("g3").value);

		if ((a > b) && (a > c)){
			 document.getElementById("result5").innerHTML= " First Number is Greatest" ;
   
		}
        
     else

     	if ((b > c) && (b > a))
     		{
			 document.getElementById("result5").innerHTML= " Second Number is Greatest" ;
   
		}
		else
			{
			 document.getElementById("result5").innerHTML= " Third Number is Greatest" ;
   
		}
	}		
     function Smallest() {

		var a= Number(document.getElementById("l1").value);
		var b= Number(document.getElementById("l2").value);
		var c= Number(document.getElementById("l3").value);

		if ((a < b) && (a < c)){
			 document.getElementById("result6").innerHTML= " First Number is  Smallest" ;
			}
			else
				if ((b > c) && (b > a))
     		{
			 document.getElementById("result6").innerHTML= " Second Number is Smallest" 
			}
			else
			{
			 document.getElementById("result6").innerHTML= " Third Number is Smallest" ;
			}
		}
		function Reverse()
                     {
                     var a,no,b,temp=0;
                     no=Number(document.getElementById("rev").value);
                     b=no;
                     while(no>0)
                     	{
                     		a=no%10;
                     		no=parseInt(no/10);
                     		temp=temp*10+a;
                     	}
                     	document.getElementById("result7").innerHTML= " The Number is Reverse:" +temp;
                      }
        function Leap() {
        		var x=Number(document.getElementById("year").value);
        		var yr = x % 4;
        		if(yr==0){
        			document.getElementById("result8").innerHTML= " This is Leap Year" ;

        		}else
        		{
        			document.getElementById("result8").innerHTML= " This is Not Leap Year" ;
        		}

        	}
        function Fibonacci() {
        	var n = parseInt(document.getElementById("fib").value);
        			
    var a = 0, b = 1, sum = 0;
    output ="<b> the  First " +  n  +  "  Element Fibonacci series:</b>";
    for(var i = 0; i < n; i++) {
    	output +=a+" ";
        sum = a + b;
        a = b;
        b = sum;
    }
   
        	document.getElementById("result9").innerHTML=   output ;	
        }

        function npn() {
        	var y = parseInt(document.getElementById("pn").value);
        	if ( y > 0) {
        		document.getElementById("result10").innerHTML=   "The Number is Positive" ;

        	}  else {
        		document.getElementById("result10").innerHTML=   "The Number is Negative" ;
        	}   

        			
        }	

        function swap() {

        	var f1 = parseInt(document.getElementById("s1").value);
        	var f2 = parseInt(document.getElementById("s2").value);
        	var temp;
        	temp = f1;
        	f1 = f2;
        	f2 = temp;
        	document.getElementById("result11").innerHTML=   "The First Number is :  "    +f1 +"   " ;
        	document.getElementById("result12").innerHTML=   "     The  Second Number is: " + f2;
        }
function nfn() {

    var rows=0, number = 1, counter=0, j=0;
 var num_value = parseInt(document.getElementById("fn").value);

 document.write("<br>");
 
     for ( counter = 1 ; counter <= num_value; counter++ )
       {
           for ( j = 1 ; j <= counter ; j++ )
           {
                
                document.write("<font face='arial' size='3'>");
                document.write(" " + number + " </font>");
    number++;
           }
           document.write("<br>");
       }

}












window.onload = function(){
  [].forEach(function(nav_link){
    document.getElementById('nav-'+nav_link).addEventListener('input', function(ev){
      
  const grid_elm = document.getElementById(nav_link + '-grid');
    Array.prototype.forEach.call(grid_elm.children, function(child_elm){
      child_elm.classList.remove('fade-up');
      setTimeout(function() { child_elm.classList.add('fade-up') }, 300);
    });
  });
  });
}