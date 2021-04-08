import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useParams, useRouteMatch, useHistory
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
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/posts" >
                        <Posts/>
                    </Route>
                    {/*<Route path="/posts/:id">*/}
                    {/*    <PostDetails/>*/}
                    {/*</Route>*/}
                    <Route>
                        <h1>Page not found</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {

    return <h2>Home</h2>;
}

function Posts() {
    const [posts, setPosts] = useState([])

    const fetchData = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await resp.json();
        setPosts(json)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (<div>
        <Switch>
            <Route path="/posts/:id" exact>
                <PostDetails/>
            </Route>
            <Route>
                <Redirect to="/posts"/>
            </Route>
        </Switch>
        <ul>
            {posts.map(el => <Link to={`/posts/${el.id}`}> <li>{el.title}-{el.id}</li> </Link>)}
        </ul>
    </div>)
}

    function PostDetails () {
        const [post, setPost] = useState();

        // const match = useRouteMatch();
        const {id} = useParams();
        const history = useHistory()



        const fetchData = async () => {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const json = await resp.json();
            setPost(json)
        }

        useEffect(() => {
            fetchData()
        }, [id])

        return (<div>
            <h2>post details</h2>
                {post && <h1>{post.title}-{post.body}</h1>}
<br/>
<button onClick={()=> history.push(`/posts/${+id+1}`)}>go to next</button>
        </div>)
    }


