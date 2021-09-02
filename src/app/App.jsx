import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import {Header} from '../components/Header/Header';
import {Home} from '../components/Home/Home';
import {Authors} from '../components/Authors/Authors';
import {About} from '../components/About/About';
import {Footer} from '../components/Footer/Footer';
import { Switch, Route } from 'react-router';
import { authorPosts, getAuthor, getSingleBlog } from '../services/services.js';
import { Link } from 'react-router-dom';
import { SingleAuthor } from '../components/SingleAuthor/SingleAuthor';

const SingleBlog = (props) => {

  let [blog, setBlog] = useState({})
  let [author, setAuthor] = useState({})
  let [posts, setPosts] = useState([])
  let [titles, setTitles] = useState([])

  useEffect(()=>{
    getSingleBlog(props.match.params.id)
      .then(blog => setBlog(blog))

  },[])

  useEffect(() => {
      getAuthor(blog.userId)
        .then(author => {
          setAuthor(author)
        })
  }, [blog])

  useEffect(() => {
   authorPosts(blog.userId)
    .then(posts => {
      setPosts(posts)
    })
  }, [author])

 useEffect(() => {
   let titles = []
  posts.forEach(post => titles.push(post.title));
  setTitles(titles)
 }, [posts])


  //console.log(posts, posts.length, typeof posts)

  return (
    <div>
      <Link to='/'> {'< Back'}</Link>

      <h3>{blog.title}</h3>
      <Link to='/singleauthor'>{`Author ${author.name}`}</Link>

      <p>{blog.body}</p>
      <hr></hr>
      <h5>{posts.length - 1} more stories from this author</h5>
      <h6><Link to={`${blog.id}`}>{titles[0]}</Link> </h6>
      <h6><Link to={`${blog.id}`}>{titles[1]}</Link></h6>
      <h6><Link to={`${blog.id}`}>{titles[2]}</Link></h6>

    </div>
  )
}

function App() {
  return (
    <Fragment>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/authors' component={Authors} />
          <Route path='/singleauthor' component={SingleAuthor} />
          <Route path='/about' component={About} />
          <Route path='/posts/:id' component={SingleBlog} />
        </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
