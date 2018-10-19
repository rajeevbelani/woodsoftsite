/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const PostCard = ({data, post}) => {
    console.log(`POST  :: ${JSON.stringify(data)}`);
  return (
        
    // <Img fluid={post.frontmatter.coverImage ? post.frontmatter.coverImage.childImageSharp.fluid : {}} />
    <div class="card card-floating-boxed card-shadow">
        <div class="card-image">
            <figure class="image">
                <Img fluid={ post.frontmatter.coverImage.childImageSharp.fluid} />
            </figure>
            
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4 color-accent">{post.frontmatter.title}</p>
                    <p class="subtitle is-6">{post.frontmatter.date}</p>
                </div>
            </div>
            
            <div class="content">
                {post.excerpt}
            </div>
            <div class="has-text-left">
                <Link to={post.fields.slug} class="button btn-align accent-btn raised">Read more</Link>
            </div>
        </div>
    </div>
  )
}

// const PostCardWithQuery = props => (
    
//     <StaticQuery
//       query={graphql(`query Post {
//             markdownRemark(id: { eq: $id }) {
//                 excerpt(truncate: true)
//             }
//         }`, { id: props.post.id })}
//       render={data => <PostCard data={data} {...props} />}
//     />
//   );
  

  
//   PostCardWithQuery.propTypes = {
//     children: PropTypes.node.isRequired,
//   };

export default PostCard
