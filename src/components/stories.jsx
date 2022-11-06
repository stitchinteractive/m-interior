// step 1: import
import React from "react"
import { Link } from "gatsby"
import { StoryItem } from "../components/story-item"

// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { useQuery, gql, useMutation } from "@apollo/client"
import { format } from 'date-fns';

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const GET_STORIES = gql`
query {
  blog(handle: "stories") {
    articles(first: 10, reverse: true) {
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
}
`

// step 2: define and export
export function Stories() {
  const { data: storiesData, loading: storiesLoading, error: storiesError } = useQuery(GET_STORIES);
  const hasStories = storiesData?.blog?.articles.edges.length > 0
  //console.log(storiesData?.blog?.articles.edges.length)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div>
            <Swiper
              className="testimonial_swiper"
              // install Swiper modules
              modules={[Scrollbar, A11y]}
              spaceBetween={60}
              scrollbar={{ draggable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              height={500}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {hasStories &&
              storiesData?.blog?.articles.edges.map((blog) => (
              <SwiperSlide>
                <StoryItem
                  img={blog.node.image?.url}
                  name={blog.node.title}
                  review={blog.node.excerpt}
                  date={format(new Date(blog.node.publishedAt), 'dd MMM yyyy')}
                  handle={blog.node.handle}
                />
              </SwiperSlide>
              ))}
              {/* <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
