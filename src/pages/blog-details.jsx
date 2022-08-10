// step 1: import
import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { ImgCard } from "../components/img-card"
import BackIcon from "../icons/back"
import { format } from 'date-fns';
import { useQuery, gql } from '@apollo/client';

const GET_MORE_BLOGS = gql`
query {
  articles(first: 3, reverse: false) {
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

// step 2: define component
const InteriorDesignDetails = ({location}) => {
  var emptyBlog = true
  var blogDetail = ""
  if(typeof window !== `undefined`) {
    //debugger
    blogDetail = location.state?.data
    console.log(blogDetail)
    emptyBlog = false
  } else {
    emptyBlog = true
  }

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
  const { data: moreData, loading: moreLoading, error: moreError } = useQuery(GET_MORE_BLOGS);

  const hasMore = moreData?.articles.edges.length > 0

  return (
    <Layout>
      <div>
        <div className="container">
        {emptyBlog || blogDetail=== undefined ? (
          <div className="row row_padding">
            No blog to show
          </div>
        ):(
          <div className="row row_padding">
            <div className="col-12 col-lg-8 offset-lg-2">
              <p>
                <img src={blogDetail?.image?.url} alt={blogDetail?.title} />
              </p>
            </div>
            <div className="col-12 col-lg-8 offset-lg-2">
              <div className="row d-flex align-items-center">
                <div className="col-3 col-md-2 col-lg-1">
                  <p>
                    <img src="/profile.jpg" className="avatar" alt="Profile" />
                  </p>
                </div>
                <div className="col-9 col-md-6 col-lg-7">
                  <p>{blogDetail?.authorV2.name} &nbsp;|&nbsp; {blogDetail ? format(new Date(blogDetail?.publishedAt), 'dd MMM yyyy') : ""}</p>
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-md-end">
                  <p>
                    <Link to="/">
                      <img src="/icons/share.png" alt="Share" />
                    </Link>
                  </p>
                </div>
              </div>

              <hr className="mt-0 mb-5" />

              <h2 className="text-uppercase mb-60">{blogDetail?.title}</h2>
              <p className="font_light pb-4">{blogDetail ? format(new Date(blogDetail?.publishedAt), 'dd MMM yyyy') : ""}</p>
              <p dangerouslySetInnerHTML={{ __html: blogDetail?.contentHtml }}>
                
              </p>
              <div className="d-flex btn_back">
                <BackIcon />
                <Link
                  to="/blog"
                  className="ms-2 font_yellow text-uppercase font_semibold no_underline"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        )}
          
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12">
                <h4 className="text-uppercase mb-5">You Might Also Like</h4>
              </div>
              {hasMore && moreData?.articles.edges.map((blog) => (
              <div className="col-12 col-md-4 mb-5">
                <div className="container_overlay">
                  <Link to="/blog-details" className="d-flex w-100 h-100 no_underline" 
                    state={
                      {data: blog?.node}
                    }>
                    <ImgCard
                      background={blog?.node?.image?.url}
                      category="&nbsp;"
                      sub_category={blog?.node?.title}
                    />
                    <div className="overlay_img">
                      <ImgCard
                        background={blog?.node?.image?.url}
                        description={blog?.node?.excerpt}
                      />
                    </div>
                  </Link>
                </div>
              </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
