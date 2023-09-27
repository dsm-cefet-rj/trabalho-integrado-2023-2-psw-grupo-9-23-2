import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function ImagemEscolhido(props){
  return(
    <>
    <div className="col-xl-4 col-md-6 col-sm-12 ">
            <div className="Card">
              <img src={props.imageSrc} className="card-img-top"></img>
            </div>
          </div>
    </>
  );
};