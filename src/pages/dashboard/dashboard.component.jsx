import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Card from '../../components/card/card.styles';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loaded: false
    }
  }

  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <hr/>
        <Card className="post-summary-card">
          <h3>{"Last 5 Posts" || <Skeleton />}</h3>
          <ul>
            {
              this.props.posts
              .filter((_post, i) => i < 5 ).map(post => (
                <li><Link to={`/posts/${post.id}`}>{post.title || <Skeleton />}</Link></li>
              ))
            }
          </ul>
        </Card>
      </div>
    )
  }
}

export default Dashboard;