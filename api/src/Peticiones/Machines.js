import axios from "axios";

const postRequest = {
  method: 'POST',
  url: 'http://localhost:3004/machine',
  data: {
    name: 'Vela',
    image: 'https://images.unsplash.com/photo-1599405757719-ca6c2e881447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NDQyMjc4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    muscle: 'Tren Superior',
    LocacionId: '6f8d223f-cc0d-433c-bb3f-43673bbef602' //Modificar con algun id de la tabla Locacion
  }
};

axios.request(postRequest).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

////////////////////////////////////////////////////////////////////////////

const getRequest = {method: 'GET', url: 'http://localhost:3004/machine'};

axios.request(getRequest).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

////////////////////////////////////////////////////////////////////////////


const puRequest = {
  method: 'PUT',
  url: 'http://localhost:3004/machine/de605ecc-bc6c-4018-ba98-d23277519785',
  data: {
    name: 'Vela',
    image: 'https://images.unsplash.com/photo-1599405757719-ca6c2e881447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NDQyMjc4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    muscle: 'Tren Superior'
  }
};

axios.request(puRequest).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


////////////////////////////////////////////////////////////////////////////


import axios from "axios";

const options = {
  method: 'DELETE',
  url: 'http://localhost:3004/machine/de605ecc-bc6c-4018-ba98-d23277519785',
  data: {
    name: 'Vela',
    image: 'https://images.unsplash.com/photo-1599405757719-ca6c2e881447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NDQyMjc4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    muscle: 'Tren Superior'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});