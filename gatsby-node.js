const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            id
            title
            images {
              originalSrc
              altText
            }
            shopifyId
            handle
            descriptionHtml
            productType
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
      path: `/shop/detail/${node.handle}`,
      component: path.resolve(`./src/templates/product.jsx`),
      context: {
        product: node,
        recommendation: result.data.allShopifyProduct.edges.filter(
          (rec) => (rec.node.productType === node.productType && rec.node.id !== node.id)
        ) ?? []
      },
    })
  })

  //Query for collections
  const collections = await graphql(`
    query {
      allShopifyCollection (sort: { fields: [title] }
        filter: {metafields: {elemMatch: {key: {eq: "path"}, value: {eq: "modular-furniture"}}}}
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
              key
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

  const oth_collections = await graphql(`
    query {
      allShopifyCollection (sort: { fields: [title] }
        filter: {metafields: {elemMatch: {key: {eq: "path"}, value: {ne: "modular-furniture"}}}}
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
              key
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
      path: `/shop/modular-furniture/${node.handle}`,
      component: path.resolve(`./src/templates/collection.jsx`),
      context: {
        collection: node,
        productCount: node.products.length,
        addons: oth_collections.data.allShopifyCollection.edges.filter(
          (addon) => addon.node.handle === "extras"
        ) ?? []
      },
    })
  })

  

  oth_collections.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `/shop/${node.handle}`,
      component: path.resolve(`./src/templates/collection.jsx`),
      context: {
        collection: node,
        productCount: node.products.length,
        addons: oth_collections.data.allShopifyCollection.edges.filter(
          (addon) => addon.node.handle === "extras"
        ) ?? []
      },
    })
  })
}