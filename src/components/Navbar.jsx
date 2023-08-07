
const Navbar = () => {
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none ">
    
        </a>

        

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ml-auto">
          <input type="search" className="form-control form-control-dark" placeholder="Search Job" aria-label="Search"/>
        </form>

        <div className="text-end ">
          <button type="button" className="btn btn-outline-light me-2">Load More</button>
         <a href="https://lets-code-51ud.vercel.app/"> <button type="button" className="btn btn-warning">Back To Home Page</button></a>
        </div>
      </div>
    </div>
  </header>


   

    
  );
};

export default Navbar;
