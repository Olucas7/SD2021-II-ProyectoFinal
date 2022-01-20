window.onload = () => {
  /*
    Realice un requerimiento asincrónico al URL "http://localhost:3001/clientes".
    Cargue el resultado en el elemento select#inputGroupSelect01
  */
  let select = document.querySelector('#inputGroupSelect01');

  fetch('http://localhost:3001/clientes')
    .then(response => response.json())
    .then(clientes => {
      let plantilla =
        `
    <option selected disabled > Seleccione el cliente </option>
    `
      for (let cliente of clientes) {
        let option = `<option value= ${cliente.id} > ${cliente.nombre} </option>`;
        plantilla += option;
      }
      select.innerHTML = plantilla;
    }).catch(error => console.log(error));


  /*
   Reaccione al evento change del elemento select#inputGroupSelect01. (REFERENCIA: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   Realice un requerimiento asincrónico al URL "http://localhost:3002/ordenes/:idCliente" con el identificador del cliente seleccionado.
   Cargue los resultados en el elemento table#ordenes_tablas.
  */

  select.addEventListener("change", (event) => {
    let idCliente = event.target.value;
    fetch('http://localhost:3002/facturas/cliente/' + idCliente)
      .then(resp => resp.json())
      .then(facturasAntiguas => {
        console.log(facturasAntiguas);
      })
      .catch(error => console.error(error))
  })


};