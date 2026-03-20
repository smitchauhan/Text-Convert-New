import { Link } from 'react-router-dom';
function Navbar(props){



    return(
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Text-Convert-New">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">{props.newvar}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/news">News</Link>
        </li>
   
      </ul>
 
    </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' :'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.togglemode} />
  <label className="form-check-label" htmlFor="switchCheckDefault">{`${props.mode === 'light' ? 'dark' : 'light'} Mode`}</label>
</div>
  </div>
</nav>
    )
}


export default Navbar;

