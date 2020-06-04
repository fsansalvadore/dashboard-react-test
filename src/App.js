import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import HeaderBar from './components/header-bar/header-bar.component';
import Nav from './components/nav/nav.component';
import Dashboard from './pages/dashboard/dashboard.component';
import PostShow from './pages/post-show/post-show.component';
import ContentContainer from './components/content-container/content-container.styles';
import Post from './pages/posts/posts.component';

const BigContainer = styled.div`
  position: relative;
  z-index: 0;
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
`

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({
      posts: data
    }))
  }

  render() {
    const {posts} = this.state;
    return (
      <Router>
        <div className="App">
          <HeaderBar/>
          <BigContainer className="big-container">
            <Nav/>
            <ContentContainer>
              <Switch>
                <Route exact path="/">
                  <Dashboard posts={posts}/>
                </Route>
                <Route path="/posts/:id">
                  <PostShow/>
                </Route>
                <Route path="/posts/">
                  <Post posts={posts}/>
                </Route>
              </Switch>
            </ContentContainer>
          </BigContainer>
        </div>
      </Router>
    );
  }
}