const div_el = (
  <div>
    <h2> Listado </h2>
            <ul>
              <li key={1}>soy</li>
              <li key={2}>una</li>
              <li key={3}>lista</li>
            </ul>
  </div>
);

/* 
const p_1 = <p key={1}> Soy un paragraph</p>;
const p_2 = <p key={2}> Soy un paragraph</p>

const div_el = (
    <div>
        {p_1}
        {p_2}
    </div>
)
*/

ReactDOM.render(div_el, document.getElementById("root"));