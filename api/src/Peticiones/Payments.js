import axios from "axios";

const postPayment = {
  method: 'POST',
  url: 'http://localhost:3004/payment',
  data: {
    name: 'Vela',
    ClientId: '08e6eeeb-dff0-40e9-8cfd-187fa0d2f276',
    amount: 8,
    subscriptionId: 3
  }
};

axios.request(postPayment).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


///////////////////////////////////////////////////////////////


const getPayment = {method: 'GET', url: 'http://localhost:3004/payment'};

axios.request(getPayment).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});