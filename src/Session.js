import axios from 'axios'

export const isConnect = async() => {
    let answer = false;
    let token ="";
    if (localStorage.getItem("token") != null)
    {
        token =localStorage.getItem("token")
    }
    await axios.get('http://carhubackend.herokuapp.com/member-data', {
        headers: {
          authorization: token
        }
      })
    .then(function (response) {
      return response
    })
    .then(response =>{
      if(response.data.message === "If you see this, you're in!"){
          answer =true;
      } else {
        localStorage.setItem("token","");
      }
      return answer
    })
    .catch(function (error) {
      console.log(error)
      alert("there is not internet connection");
      return error
    });
          return answer
}