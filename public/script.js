const getUserInfo = () => {
   const input = document.querySelector("#userName").value
//    console.log(`ES6 ${input}`)
    const url = '/showprofile/' + input

   axios.get(url)
    .then(response => {
        document.querySelector("#userInfo").innerHTML = response.data
        
       
    })
   
}


// function getUserInfo(){
//    const input = document.getElementById("userName").value
//    console.log(input)
// }