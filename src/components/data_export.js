import axios from "axios";
export const reservfun = (reservation) => {
  console.log(reservation);
  return axios
    .put(
      `https://oofood.herokuapp.com/api/updateuser/${localStorage.id}`,
      reservation,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => {
      console.log("lahcen");
    })
    .catch((err) => {
      console.log(err);
    });
};
//////////////////////////////////////////////////////////////
export const orderfun = (order) => {
  console.log(order);
  return axios
    .post("https://oofood.herokuapp.com/api/order", order, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      return err.response;
    });
};

///////////////////////////////////////////////////////////

export const getcategorie = (newUser) => {
  console.log(localStorage.id);

  return axios
    .get(`https://oofood.herokuapp.com/api/categorie`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
