import  styled  from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// STYLING //
const StyledNavBar = styled.div`
    width: 25%;
    display:flex;
    margin-bottom: 10%;
    justify-content: space-evenly;
    width: 100%;
    position:fixed;
    background-color: #656161;
    color: #C3B1B2;
// `

export default function NavBar() {
    return (
        <Router>
            <StyledNavBar>
                <Route>
                    <Link to="/">Home</Link>
                </Route>
                <Route>
                    <Link to="/signup">Sign Up</Link>
                </Route>
                <Route>
                    <Link to="/login">Login</Link>
                </Route>
            </StyledNavBar>
        </Router>
    )
}



