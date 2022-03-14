
const conteiner = (
<div>
<h1 style={{color:"red"}}>Lista de Productos en stock:</h1>
<ul>
  <li>Manzana</li>
  <li>Pera</li>
  <li>Naranja</li>
  <li>Banana</li>
  <li>Kiwi</li>
</ul>
<h2 style={{color:"red"}}>Productos en falta:</h2>
<ul>
  <li>Durazno</li>
  <li>Cereza</li>
  <li>Anana</li>
</ul>
</div> );


ReactDOM.render(conteiner, document.getElementById("root"));