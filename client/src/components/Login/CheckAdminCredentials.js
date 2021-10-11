import axios from "axios";

const checkAdminCredentials = async (name, password) => {
  let isAdmin = false;

  const postBody = { name: name, password: password }

  try {
    await axios.post(`http://localhost:8080/login/admin`, postBody)
      .then(data => data)
      .then(res => isAdmin = res.data.isAdmin);
      
  } catch (err) {
    alert("Something went wrong");
    console.log(err);
  }
  return isAdmin;

}

export default checkAdminCredentials;