// step 1: import
import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { useQuery, gql } from '@apollo/client';
import { format } from 'date-fns';

const GET_FEATURED_BLOG = gql`
query {
  articles(first: 1, reverse: true, query:"tag:featured") {
    edges {
      node {
        title
        contentHtml
        excerpt
        publishedAt
        image {
          url
        }
        authorV2 {
          name
        }
        handle
      }
    }
  }
}
`

const GET_NEXT_BLOG = gql`
query ($numProducts: Int!, $cursor: String) {
  articles(first: $numProducts, after: $cursor, reverse: true, query:"tag_not:featured") {
    edges {
      node {
        title
        contentHtml
        excerpt
        publishedAt
        image {
          url
        }
        authorV2 {
          name
        }
        handle
      }
    }
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
  }
}
`

const GET_PREV_BLOG = gql`
query ($numProducts: Int!, $cursor: String) {
  articles(last: $numProducts, before: $cursor, reverse: true, query:"tag_not:featured") {
    edges {
      node {
        title
        contentHtml
        excerpt
        publishedAt
        image {
          url
        }
        authorV2 {
          name
        }
        handle
      }
    }
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
  }
}
`

// step 2: define component
const InteriorDesignDetails = ({location}) => {
  const params = new URLSearchParams(location.search)
  const action = params.get("action")
  const cursor = params.get("cursor")

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.utils.toArray(".animate").forEach(function (e) {
      gsap.from(e, {
        duration: 0.8,
        ease: "power1.out",
        opacity: 0,
        y: 100,
        scrollTrigger: e,
        onComplete: () => console.log(e),
      })
    })
  })

  debugger
  const { data: featuredData, loading: featuredLoading, error: featuredError } = useQuery(GET_FEATURED_BLOG);
  const { data: blogDataNext, loading: blogLoadingNext, error: blogErrorNext } = useQuery(GET_NEXT_BLOG, {
    variables: {numProducts: 6, cursor: cursor}
  })
  const { data: blogDataPrev, loading: blogLoadingPrev, error: blogErrorPrev } = useQuery(GET_PREV_BLOG, {
    variables: {numProducts: 6, cursor: cursor}
  });
  var blogData = []
  if(action === null || action === "next") {
    blogData = blogDataNext
  }
  if(action === "back") {
    blogData = blogDataPrev
  }

  //console.log(featuredData);
  //console.log(blogData);
  //console.log(format(new Date(), 'dd MMM yyyy'))

  const hasFeatured = featuredData?.articles.edges.length > 0
  const hasBlog = blogData?.articles.edges.length > 0

  return (
    <Layout>
      <div>
        {hasFeatured ? (
        <div className="container">
          <div className="row row_padding d-flex align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <div className="row">
                <h2 className="text-uppercase mb-60">{featuredData?.articles.edges[0].node.title}</h2>
                <p className="font_light pb-4">{format(new Date(featuredData?.articles.edges[0].node.publishedAt), 'dd MMM yyyy')}</p>
                <p dangerouslySetInnerHTML={{ __html: featuredData?.articles.edges[0].node.excerpt }}>
                  
                </p>
                <div className="col-12">
                  <Link to={"/blog?h="+featuredData?.articles.edges[0].node.handle}>
                    <button
                      type="submit"
                      className="btn btn-outline btn-black mb-80"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <p>
                <img src={featuredData?.articles.edges[0].node.image?.url} alt={featuredData?.articles.edges[0].node.title} />
              </p>
            </div>
          </div>
        </div>
        ) : (
          <div className="container">
          <div className="row row_padding d-flex align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <div className="row">
                <h2 className="text-uppercase mb-60">No featured post.</h2>
                <p className="font_light pb-4">No featured post.</p>
                <p>
                  No featured post.
                </p>
              </div>
            </div>
          </div>
        </div>
        )}
        

        <div className="bg_grey">
          <div className="container">
            <div className="row row_padding">
            {hasBlog &&
              blogData?.articles.edges.map((blog) => (
              <div className="col-12 col-md-6 col-lg-4">
                <p>
                  <img
                    src={blog.node.image?.url}
                    alt={blog.node.title}
                  />
                </p>
                <h4 className="text-uppercase mb-3">{blog.node.title}</h4>
                <p className="font_light pb-4">{format(new Date(blog.node.publishedAt), 'dd MMM yyyy')}</p>
                <p dangerouslySetInnerHTML={{ __html: blog.node.excerpt }}>
                </p>
                <p className="mb-100">
                  <Link to={"/blog?h="+blog.node.handle} className="link_underline">
                    Read more &gt;
                  </Link>
                </p>
              </div>
            ))}
            {
              (blogData?.articles.pageInfo.hasPreviousPage || blogData?.articles.pageInfo.hasNextPage) ? (
              <div className="col-12">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className={blogData?.articles.pageInfo.hasPreviousPage ? "page-item" : "page-item disabled"}>
                      <Link
                        className="page-link"
                        href={"?action=back&cursor="+blogData?.articles.pageInfo.startCursor}
                         //tabindex="-1"
                        aria-disabled={blogData?.articles.pageInfo.hasPreviousPage ? "true" : "false"}
                      >
                        Previous
                      </Link>
                    </li>
                    <li class={blogData?.articles.pageInfo.hasNextPage ? "page-item" : "page-item disabled"}>
                      <Link 
                        className="page-link" 
                        href={"?action=next&cursor="+blogData?.articles.pageInfo.endCursor}
                        aria-disabled={blogData?.articles.pageInfo.hasNextPage ? "true" : "false"}>
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              ) : (
                <div></div>
              )
            }
              

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
