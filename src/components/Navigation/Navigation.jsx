import "./Navigation.css";

function Navigation() {
  return(
    <div className="navigation">
      <div className="navigation__title">NewsExplorer</div>
      <div className="navigation__options">
        <p className="navigation__options-home">Home</p>
        <button className="navigation__options-button">Sign in</button>
      </div>
    </div>
  )
}

export default Navigation;