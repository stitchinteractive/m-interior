const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
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
  `)
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/mint/${node.handle}`,
      component: path.resolve(`./src/templates/product.jsx`),
      context: {
        product: node,
      },
    })
  })

  //Query for collections
  const collections = await graphql(`
    query {
      allShopifyCollection (sort: { fields: [title] }) {
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
            image {
              id
              originalSrc
            }
            products {
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
    }
  `)

  collections.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `/collection/${node.handle}`,
      component: path.resolve(`./src/templates/collection.jsx`),
      context: {
        collection: node,
        productCount: node.products.length
      },
    })
  })
}