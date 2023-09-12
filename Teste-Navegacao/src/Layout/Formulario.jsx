import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function Formulario()
{
  return(
    <>
    <div className="container">.
      <div className="row ">
        <form>
        
          <div className ="col">
          <label for="campo_kilometragem">Kilometragem:</label>
          <br></br>
          <input id="campo_kilometragem" type="range"></input>
          <br></br>
          <label for="campo_preco">Preço:</label>
          <br></br>
          <input id="campo_precp" type="range"></input>
          <br></br>
        <label>Montadora:</label>
        <br></br>
        <input id="ford" type="checkbox" value="s_ford"></input>
        <label for="ford">Ford  </label>

        <input id="gm" type="checkbox" value="s_gm"></input>
        <label for="gm">GM  </label>

        <input id="volkswagen" type="checkbox" value="s_volkswagen"></input>
        <label for="volkswagen">Volkswagen  </label>
          </div>
        
          
          <div className = "col">
            <label>Blindagem:</label>
        <br></br>
          
          </div>
          
        </form>
      </div>
    </div>
    </>
  );
};