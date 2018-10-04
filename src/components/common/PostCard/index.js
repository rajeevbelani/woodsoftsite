/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import Link from 'gatsby-link'

const PostCard = ({post}) => {
  return (

    <div class="card card-floating-boxed card-shadow">
    {/* <div class="card-image">
        <figure class="image is-4by3">
            <img src="assets/images/photos/demo/flat/cactus.png" alt="" />
        </figure>
    </div> */}
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
    // <div className='container'>
    //   {posts
    //     .filter(post => post.node.frontmatter.templateKey === 'article-template')
    //     .map(({node: post}) => (
    //       <div
    //         className='content'
    //         style={{border: '1px solid #eaecee', padding: '2em 4em'}}
    //         key={post.id}
    //       >
    //         <p>
    //           <Link className='has-text-primary' to={post.fields.slug}>
    //             {post.frontmatter.title}
    //           </Link>
    //           <span> &bull; </span>
    //           <small>{post.frontmatter.date}</small>
    //         </p>
    //         <p>
    //           {post.excerpt}
    //           <br />
    //           <br />
    //           <Link className='button is-small' to={post.fields.slug}>
    //                             Keep Reading →
    //           </Link>
    //         </p>
    //       </div>
    //     ))}
    // </div>
  )
}

export default PostCard
