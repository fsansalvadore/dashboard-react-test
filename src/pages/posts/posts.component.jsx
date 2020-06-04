import React from 'react';
import Card from '../../components/card/card.styles';
import { Link, withRouter } from 'react-router-dom';
import './posts.styles.scss';

const Posts = ({posts}) => (
    <div>
      <h1>Posts</h1>
      <hr/>
      <ul class="grid-list">
        {
          posts.map(post => (
            <li>
              <Link to={`/posts/${post.id}`}>
                <Card className="card_border">
                  <h3>{post.title}</h3>
                </Card>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
)

export default Posts;