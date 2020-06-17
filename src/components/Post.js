import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from  '../actions/postAction'

class Post extends Component {
    
    handleClick =()=>{
        this.props.deletePost(this.props.posts.id );
        this.props.history.push('/');
    }
    render() {
        const post = this.props.posts ? (
            <div className="post">
                <h5 className="center">{this.props.posts.title}</h5>
                <blockquote>{this.props.posts.body}</blockquote> 
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
                <div className="center">Loading post...</div>
            )
        return (
            <div>
                <div className="container">
                    {post}
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        posts: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);