import axios from "axios";

const postOwner = {
  method: 'POST',
  url: 'http://localhost:3004/owner',
  data: {name: 'Vela', email: 'abcd@gmail.com', password: '123456', phone: '261534'}
};

axios.request(postOwner).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


///////////////////////////////////////////////////////////////////////////////////////////