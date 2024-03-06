const Navbar = () => {
  return (   
    <nav className="bg-gray-800 p-3 text-white">
      <section className="banner text-center">
          <h1 className="pt-5">Meme Generator</h1>
      </section>
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z"
          />
        </defs>
        <g className="waves">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill="#03ffff"
            fillOpacity=".2"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="3"
            fill="#03ffff"
            fillOpacity=".5"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="6"
            fill="#03ffff"
            fillOpacity=".9"
          />
        </g>
      </svg>
    </nav>
  );
};

export default Navbar;




