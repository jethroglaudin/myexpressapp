const getUserInfo = () => {
  const input = document.querySelector("#userName").value;
  console.log(input)

  //    console.log(`ES6 ${input}`)
  const url = "api/showprofile/" + input;

  axios.get(url).then(response => {
    document.querySelector("#userInfo").innerHTML = JSON.stringify(response.data);
    console.log(response)
  });
};

const handleSubmit = () => {
  const username = document.querySelector("#user-Name").value;
  const message = document.querySelector("#userMsg").value;

  const url2 = "api/";

  axios.post(url2, {  username, message }).then(response => {
    console.log(response);
    document.querySelector("#submitInfo").innerHTML = response.data;
  });
};

const getAllUsers = () => {
    const url3 = 'api/getallusers'; 
    axios.get(url3)
        .then(response => {
            document.querySelector('#result').innerHTML = JSON.stringify(response.data)
        })
}
