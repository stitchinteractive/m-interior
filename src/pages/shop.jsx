// step 1: import
import React, { useEffect, useLayoutEffect } from "react"
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
import isEqual from "lodash.isequal"
import lodash from "lodash"

export const query = graphql`
  query MyQuery {
    collections: allShopifyCollection(
      filter: {metafields: {elemMatch: {key: {eq: "order"}, value: {ne: "0"}}}}
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
            key
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
    allProducts: allShopifyProduct {
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
const Shop = ({data: { collections, bestselling, allProducts }, location}) => {
  gsap.registerPlugin(ScrollTrigger)

  //const [products, setProducts] = React.useState([])

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

  var products = []
  const params = new URLSearchParams(location.search);
  const sortby = params.get("sortby");
  if(sortby === null || sortby === "bestselling") {
    products = bestselling.edges
  } else {
    if (sortby === "lowtohigh") {
      products = lodash.orderBy(allProducts.edges, function(o) {
        return parseFloat(o.node.priceRangeV2.maxVariantPrice.amount);
      }, ['asc'])
    } else if (sortby === "hightolow") {
      products = lodash.orderBy(allProducts.edges, function(o) {
        return parseFloat(o.node.priceRangeV2.maxVariantPrice.amount);
      }, ['desc'])
    } else if (sortby === "AtoZ") {
      products = lodash.orderBy(allProducts.edges, 'node.title', ['asc'])
    } else if (sortby === "ZtoA") {
      products = lodash.orderBy(allProducts.edges,  'node.title', ['desc'])
    }
    //products = allProducts
  }
  console.log(products)
  // var a = lodash.orderBy(allProducts.edges, function(o) {
  //   return parseFloat(o.node.priceRangeV2.maxVariantPrice.amount);
  // }, ['asc'])
  // console.log(a)

  console.log(collections)
  collections.edges.forEach((data) => {
    var order = 0;
    if(data.node.metafields) {
      data.node.metafields.forEach((mf) =>{
        if(mf.key === "order") {
          order = parseInt(mf.value)
        }
      })
    }
    data.node.order = order
  })
  const sort = collections.edges.sort((a, b) => a.node.order - b.node.order)
  console.log(sort)
  
  var node = collections.edges[0].node;
  var node2 = collections.edges[1].node;
  var node3 = collections.edges[2].node;
  var node4 = collections.edges[3].node;

  const selectedCategory1 = node.metafields.find((mf) => {
    return isEqual("category", mf.key)
  })
  const selectedPath1 = node.metafields.find((mf) => {
    return isEqual("path", mf.key)
  })
  var category1 = selectedCategory1?.value ?? "NA"
  var path1 = selectedPath1?.value ?? ""
  if(path1 === "shop") {
    path1 = "/shop/"+node.handle
  } else {
    path1 = "/shop/"+path1+"/"+node.handle
  }

  const selectedCategory2 = node2.metafields.find((mf) => {
    return isEqual("category", mf.key)
  })
  const selectedPath2 = node2.metafields.find((mf) => {
    return isEqual("path", mf.key)
  })
  var category2 = selectedCategory2?.value ?? "NA"
  var path2 = selectedPath2?.value ?? ""
  if(path2 === "shop") {
    path2 = "/shop/"+node2.handle
  } else {
    path2 = "/shop/"+path2+"/"+node2.handle
  }

  const selectedCategory3 = node3.metafields.find((mf) => {
    return isEqual("category", mf.key)
  })
  const selectedPath3 = node3.metafields.find((mf) => {
    return isEqual("path", mf.key)
  })
  var category3 = selectedCategory3?.value ?? "NA"
  var path3 = selectedPath3?.value ?? ""
  if(path3 === "shop") {
    path3 = "/shop/"+node3.handle
  } else {
    path3 = "/shop/"+path3+"/"+node3.handle
  }

  const selectedCategory4 = node4.metafields.find((mf) => {
    return isEqual("category", mf.key)
  })
  const selectedPath4 = node4.metafields.find((mf) => {
    return isEqual("path", mf.key)
  })
  var category4 = selectedCategory4?.value ?? "NA"
  var path4 = selectedPath4?.value ?? ""
  if(path4 === "shop") {
    path4 = "/shop/"+node4.handle
  } else {
    path4 = "/shop/"+path4+"/"+node4.handle
  }


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
                  <Link to={path1} className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background={node.image.originalSrc}
                      category={category1}
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
                  <Link to={path2} className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background={node2.image.originalSrc}
                      category={category2}
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
                  <Link to={path3} className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background={node3.image.originalSrc}
                      category={category3}
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
                  <Link to={path4} className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background={node4.image.originalSrc}
                      category={category4}
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
                  bsdata={products} />
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
