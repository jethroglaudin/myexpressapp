
const getUserInfo = () => {
  const input = document.querySelector("#userName").value;
  const url = "/api/showprofile/" + input;

  axios.get(url)
  .then(response => {
    const listItems = response.data.map(element => {
      return (
        "<li>"
        + "Name: "
        + (element.username ? element.username : " " +
        element.username + " was not found.")
        + " | "
        + "message: "
        + (element.message ? element.message : " " +
          element.username + " did not leave a message.")
        + "</li>"
      )
    })
    document.querySelector("#userInfo").innerHTML = "<ul>" + listItems.join("\n") + "</ul>"
    console.log(response)
  });
};

function displayUsers(userData, id) {

}

const handleSubmit = () => {
  const username = document.querySelector("#user-Name").value;
  const message = document.querySelector("#userMsg").value;

  const url2 = "api/";

  axios.post(url2, {  username, message }).then(response => {
    // console.log(response);
    document.querySelector("#submitInfo").innerHTML = response.data;
  });
};

const getAllUsers = () => {
    const url3 = '/api/getallusers'; 
    axios.get(url3)
        .then(response => {
          const listItems = response.data.map(item => {
            return (
              "<tr>"
              + "<td>"
              + item.username
              + "</td>"
              + "<td>"
              + (item.message ? item.message : " " +
              item.username + " did not leave a message")
              + "</td>"
              + "</tr>"

              // "<li class='get-all-users'>"
              // + "<strong>"
              // + "Name: "
              // + "</strong>"
              // + item.username
              // + " | "
              // + "<strong>"
              // + "Message: "
              // + "</strong>"
              // +  (item.message ? item.message : " " +
              // item.username + " did not leave a message.")
            )
          })
            document.querySelector('#result').innerHTML = "<table style='width:100%'>"  +
            "<tr>"
            + "<th>"
            + 'Username'
            + "</th>"
            + "<th>"
            + 'Message'
            + "</th>"
            + "</tr>" +  listItems.join(" ") + "</table>"
            
        })
}
