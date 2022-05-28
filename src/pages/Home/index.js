import {NavLink} from "react-router-dom";
import './style.scss';

const Home = () => {

  return (
    <nav className='navigation'>
      <NavLink to={'/a-b-tests'}>form</NavLink>
      <NavLink to={'/report'}>report</NavLink>
      <NavLink to={'/contact-policy'}>contact policy</NavLink>
    </nav>
  )
}

export default Home