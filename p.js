<!DOCTYPE html>
<html>
<body>



<button onclick="myFunction()">Get it</button>

<p id="demo"></p>
<input type="text" id="pavan">
<script>
function myFunction() {
  var str = "get results";
  var str1=JSON.stringify(document.getElementById('pavan').value);
 // document.write(str1);
 str1=str1.substring(1,str1.length-1)
 var result = str.link("https://www.codechef.com/users/"+str1);
  document.getElementById("demo").innerHTML = result;
}
</script>

</body>
</html>