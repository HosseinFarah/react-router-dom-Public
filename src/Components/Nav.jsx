import { Link } from "react-router-dom"

export const Nav=()=>{
    return(
        <nav style={{textAlign:"center"}}>
        <Link to="/">Home</Link>|
        <Link to="/users">User's</Link>|
        <Link to="/course">Course's</Link>
        </nav>
    )
}