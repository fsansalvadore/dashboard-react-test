import React from 'react';
import { withRouter } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    }
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    console.log("Post ID: " + postId);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => this.setState({
      post: post
    }), () => {console.log(this.state)})
  }

  render() {
    if(this.state.post) {
      const { title, body } = this.state.post; 
      return(
        <div>
            <h1>{title}</h1>
            <hr/>
            <p>{body}</p>
        </div>
      )
    } else {
      return(
        <div style={{lineHeight: 1.4}}>
            <h1><Skeleton height={40} width={200}/></h1>
            <hr/>
            <p><Skeleton height={30} width={"100%"} count={5}/></p>
        </div>
      )
    }
  }
}
        
export default withRouter(PostShow);