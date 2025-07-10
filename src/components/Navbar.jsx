export default function Navbar() {
  const gantiTema = (e) => {
    const theme = e.target.value;
    document.querySelector("html").setAttribute("data-theme", theme);
  };
  return (
    <div className="navbar bg-base-100/80 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <a className="text-3xl font-semibold lg:pl-36">Movie Explorer</a>
      </div>

      <div className="navbar-end hidden lg:flex lg:pr-32">
        <nav>
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#searchBar" className="btn btn-ghost">
                Pencarian
              </a>
            </li>
            <li>
              <select onChange={gantiTema} className="btn btn-ghost" >
								<option disable selected hidden>Mode</option>
                <option value="lofi">Light</option>
                <option value="business">Dark</option>
                {/* <option value="cupcake">Cupcake</option> */}
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
