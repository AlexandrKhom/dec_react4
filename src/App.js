import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/test">TEST</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/about" render={(args) => {
                        console.log(args);
                        return <About/>
                    }}/>

                    <Route path="/users">
                        {Users}
                    </Route>
                    <Route path="/test" component={Test}>
                    </Route>
                    <Route>
                        <Redirect to="/"/>
                    </Route>
                    {/*<Route>*/}
                    {/*    <h1>Page not found</h1>*/}
                    {/*</Route>*/}
                </Switch>
            </div>
        </Router>
    );
}

function Home() {

    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users(props) {
    console.log(props)
    return <h2>Users</h2>;
}

function Test(props) {
    console.log(props)
    return <h2>Test Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, provident.</h2>
}
