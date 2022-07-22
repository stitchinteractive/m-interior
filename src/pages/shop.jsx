// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { ProductList } from "../components/product-list"
import { Testimonials } from "../components/testimonials"
import { NavShop } from "../components/nav-shop"
import { ImgCard } from "../components/img-card"
import { BackToTop } from "../components/back-to-top"

export const query = graphql`
  query MyQuery {
    collections: allShopifyCollection(
      filter: {handle: {ne: "extras"}}
    ) {
      edges {
        node {
          title
          id
          description
          descriptionHtml
          handle
          metafields {
            id
            value
          }
          image{
            id
            originalSrc
          }
        }
      }
    }
    bestselling: allShopifyProduct(
      filter: {metafields: {elemMatch: {key: {eq: "best_seller"}, value: {eq: "true"}}}}
      limit: 3
    ) {
      edges {
        node {
          title
          images {
            originalSrc
          }
          shopifyId
          handle
          descriptionHtml
          priceRangeV2 {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          status
          storefrontId
          variants {
            shopifyId
            availableForSale
            storefrontId
            title
            price
            selectedOptions {
              name
              value
            }
          }
          options {
            name
            values
            id
          }
          metafields {
            value
            key
          }
        }
      }
    }
  }
`

// step 2: define component
const Shop = ({data: { collections, bestselling }}) => {
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

  
  //debugger
  //console.log(collections)
  //console.log(bestselling)

  var node = collections.edges[0].node;
  var node2 = collections.edges[1].node;
  var node3 = collections.edges[2].node;
  var node4 = collections.edges[3].node;


  return (
    <Layout>
      <div className="container">
        <div className="row row_padding">
          <div className="col-md-5 col-lg-3 animate">
            <NavShop />
          </div>
          <div className="col-md-7 col-lg-9">
            <div className="row padding_shop d-flex">
              <div className="col-lg-7 p-0 p-md-0 d-flex h-100 animate">
                <div className="container_overlay">
                  <Link to={"/modular-furniture/"+node.handle} className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background={node.image.originalSrc}
                      category={node.metafields[0]?.value}
                      sub_category={node.title}
                    />
                    <div className="overlay_img">
                      <ImgCard
                        background={node.image.originalSrc}
                        description={node.description}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 p-0 p-md-0 animate">
                <div className="container_overlay">
                  <Link to={"/modular-furniture/"+node2.handle} className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background={node2.image.originalSrc}
                      category={node2.metafields[0].value}
                      sub_category={node2.title}
                    />
                    <div className="overlay_img">
                      <ImgCard
                        background={node2.image.originalSrc}
                        description={node2.description}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row padding_shop d-flex">
              <div className="col-lg-5 p-0 p-md-0 d-flex h-100 animate">
                <div className="container_overlay">
                  <Link to={"/modular-furniture/"+node3.handle} className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background={node3.image.originalSrc}
                      category={node3.metafields[0].value}
                      sub_category={node3.title}
                    />
                    <div className="overlay_img">
                      <ImgCard
                        background={node3.image.originalSrc}
                        description={node3.description}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 p-0 p-md-0 animate">
                <div className="container_overlay">
                  <Link to={"/modular-furniture/"+node4.handle} className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background={node4.image.originalSrc}
                      category={node4.metafields[0].value}
                      sub_category={node4.title}
                    />
                    <div className="overlay_img">
                      <ImgCard
                        background={node4.image.originalSrc}
                        description={node4.description}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          
            <div className="row mt-140 animate">
              <div className="col-12">
                <h3 className="text-uppercase pb-5">Best Sellers</h3>
                <ProductList 
                  bsdata={bestselling} />
                <BackToTop />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animate">
        <Testimonials />
      </div>
      <div className="animate">
        <Membership />
      </div>
    </Layout>
  )
}

// step 3: export
export default Shop
