const NavTab = ({ name }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href="#">{name}</a>
    </li>
  )
}

export default NavTab
