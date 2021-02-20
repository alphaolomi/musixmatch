import React from "react";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-dark bg-dark mb-5">
    //   <span className="navbar-brand mb-0 h1 mx-auto">LyricFinder</span>
    // </nav>
<div className=" mb-3" >

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand mx-auto" href="/"><h3 className="">LyricsFinder</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="/about">About</a>        
      </div>
    </div>
  </div>
</nav>
</div>

  );
};

export default Navbar;