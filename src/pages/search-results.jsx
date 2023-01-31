// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { Testimonials } from "../components/testimonials"
import { ProductListItem } from "../components/product-list-item"
import CrossIcon from "../icons/cross"
import SortIcon from "../icons/sort"
import FilterIcon from "../icons/filter"
import SearchIcon from "../icons/search"
import { graphql } from "gatsby"
import { useProductSearch } from "../utils/hooks"
import { getValuesFromQuery } from "../utils/search"
import { getCurrencySymbol } from "../utils/format-price"
import debounce from "debounce"
import { CgChevronRight, CgChevronLeft } from "react-icons/cg"
import { Spinner } from "../components/progress"
import { Filters } from "../components/filters"
import { SearchProvider } from "../context/search-provider"
import {
  visuallyHidden,
  main,
  search,
  searchIcon,
  sortSelector,
  results,
  productList as productListStyle,
  productListItem,
  pagination,
  paginationButton,
  progressStyle,
  resultsStyle,
  filterStyle,
  clearSearch,
  searchForm,
  sortIcon,
  filterButton,
  filterTitle,
  modalOpen,
  activeFilters,
  filterWrap,
  emptyState,
} from "./search-page.module.css"

const DEFAULT_PRODUCTS_PER_PAGE = 24

export async function getServerData({ query, ...rest }) {
  const { getSearchResults } = require("../utils/search")
  const products = await getSearchResults({
    query,
    count: DEFAULT_PRODUCTS_PER_PAGE,
  })

  return {
    props: {
      query,
      products,
    },
  }
}

export const query = graphql`
  query {
    meta: allShopifyProduct {
      productTypes: distinct(field: productType)
      tags: distinct(field: tags)
      vendors: distinct(field: vendor)
    }
  }
`

// step 2: define component
const Shop = ({
  serverData,
  data: {
    meta: { productTypes, vendors, tags },
  },
  location,
}) => {
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

  // These default values come from the page query string
  const queryParams = getValuesFromQuery(location.search || serverData.query)

  const [filters, setFilters] = React.useState(queryParams)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialFilters = React.useMemo(() => queryParams, [])
  const [sortKey, setSortKey] = React.useState(queryParams.sortKey)
  // We clear the hash when searching, we want to make sure the next page will be fetched due the #more hash.
  const shouldLoadNextPage = React.useRef(false)

  const {
    products,
    isFetching,
    filterCount,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
  } = useProductSearch(
    filters,
    {
      allProductTypes: productTypes,
      allVendors: vendors,
      allTags: tags,
    },
    sortKey,
    false,
    DEFAULT_PRODUCTS_PER_PAGE,
    serverData.products,
    initialFilters
  )

  // Automatically load the next page if "#more" is in the URL
  React.useEffect(() => {
    if (location.hash === "#more") {
      // save state so we can fetch it when the first page got fetched to retrieve the cursor
      shouldLoadNextPage.current = true
    }

    if (shouldLoadNextPage.current) {
      if (hasNextPage) {
        fetchNextPage()
      }

      shouldLoadNextPage.current = false
    }
  }, [location.hash, hasNextPage, fetchNextPage])

  const currencyCode = getCurrencySymbol(
    serverData.products?.[0]?.node?.priceRangeV2?.minVariantPrice?.currencyCode
  )

  // debugger
  // console.log(serverData.products)

  return (
    <Layout>
      <div className="container">
        <div className="row row_padding">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className="input-group my-3 d-flex justify-content-between">
              <SearchBar defaultTerm={filters.term} setFilters={setFilters} />
              {/* <input
                type="text"
                className="form-control-sm txt_search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search"
              />

              <button className="btn btn_search" type="button">
                <Link to="/search-results">
                  <SearchIcon />
                </Link>
              </button> */}
            </div>
          </div>
          <div className="col-12 text-center mt-1">
            Popular Search Terms:
            <Link to="/search-results/?q=Acacia%20Blocks" className="px-3">
              Acacia Blocks
            </Link>
            <Link to="/search-results/?q=TV%20Console" className="px-3">
              TV Console
            </Link>
            <Link to="/search-results/?q=Side%20Table" className="px-3">
              Side Table
            </Link>
          </div>
        </div>
      </div>
      <div className="bg_grey_medium_5">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12">
              <div className="row mb-100">
              {!isFetching && (
                <div className="col-12">
                  <div className="font_lg text-uppercase font_semibold mb-5">
                    There are {products.length} result(s) found.
                  </div>
                </div>
                
              )}
                {/* <div className="col-12">
                  <div className="font_lg text-uppercase font_semibold mb-5">
                    There are 4 result(s) found.
                  </div>
                </div> */}
                {!isFetching && products.map(({ node }, index) => (
                  
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <ProductListItem
                    url={"/shop/detail/" + node.handle}
                    image={node.images.edges[0]?.node.originalSrc}
                    name={node.title}
                    price={node.priceRangeV2.minVariantPrice.amount}
                  />
                </div>
                ))}
                {hasPreviousPage || hasNextPage ? (
                  <Pagination
                    previousPage={fetchPreviousPage}
                    hasPreviousPage={hasPreviousPage}
                    nextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                  />
                ) : undefined}
                {/* <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <ProductListItem
                    url="/shop-details"
                    image="/shop/min_modules/bedside_table_small_2.png"
                    name="Small Side Table"
                    price="205"
                    color_1={
                      <li>
                        <img src="/icons/color_brown_white.png" alt="" />
                      </li>
                    }
                    color_2={
                      <li>
                        <img src="/icons/color_black.png" alt="" />
                      </li>
                    }
                    color_3={
                      <li>
                        <img src="/icons/color_dark_brown_white.png" alt="" />
                      </li>
                    }
                    color_4={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_5={
                      <li>
                        <img src="/icons/color_white_grey.png" alt="" />
                      </li>
                    }
                    color_6={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_7={
                      <li>
                        <img src="/icons/color_black_grey.png" alt="" />
                      </li>
                    }
                    color_8={
                      <li>
                        <img src="/icons/color_blue_yellow.png" alt="" />
                      </li>
                    }
                    color_9={
                      <li>
                        <img src="/icons/color_brown_black.png" alt="" />
                      </li>
                    }
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <ProductListItem
                    url="/shop-details"
                    image="/shop/min_modules/bookshelf_tall_3.png"
                    name="Tall Bookshelf"
                    price="205"
                    color_1={
                      <li>
                        <img src="/icons/color_brown_white.png" alt="" />
                      </li>
                    }
                    color_2={
                      <li>
                        <img src="/icons/color_black.png" alt="" />
                      </li>
                    }
                    color_3={
                      <li>
                        <img src="/icons/color_dark_brown_white.png" alt="" />
                      </li>
                    }
                    color_4={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_5={
                      <li>
                        <img src="/icons/color_white_grey.png" alt="" />
                      </li>
                    }
                    color_6={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_7={
                      <li>
                        <img src="/icons/color_black_grey.png" alt="" />
                      </li>
                    }
                    color_8={
                      <li>
                        <img src="/icons/color_blue_yellow.png" alt="" />
                      </li>
                    }
                    color_9={
                      <li>
                        <img src="/icons/color_brown_black.png" alt="" />
                      </li>
                    }
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <ProductListItem
                    url="/shop-details"
                    image="/shop/min_modules/bedroom_chest_small.png"
                    name="Small Bedroom Chest"
                    price="205"
                    color_1={
                      <li>
                        <img src="/icons/color_brown_white.png" alt="" />
                      </li>
                    }
                    color_2={
                      <li>
                        <img src="/icons/color_black.png" alt="" />
                      </li>
                    }
                    color_3={
                      <li>
                        <img src="/icons/color_dark_brown_white.png" alt="" />
                      </li>
                    }
                    color_4={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_5={
                      <li>
                        <img src="/icons/color_white_grey.png" alt="" />
                      </li>
                    }
                    color_6={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_7={
                      <li>
                        <img src="/icons/color_black_grey.png" alt="" />
                      </li>
                    }
                    color_8={
                      <li>
                        <img src="/icons/color_blue_yellow.png" alt="" />
                      </li>
                    }
                    color_9={
                      <li>
                        <img src="/icons/color_brown_black.png" alt="" />
                      </li>
                    }
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <ProductListItem
                    url="/shop-details"
                    image="/shop/min_modules/bedroom_chest_small.png"
                    name="Small Bedroom Chest"
                    price="205"
                    color_1={
                      <li>
                        <img src="/icons/color_brown_white.png" alt="" />
                      </li>
                    }
                    color_2={
                      <li>
                        <img src="/icons/color_black.png" alt="" />
                      </li>
                    }
                    color_3={
                      <li>
                        <img src="/icons/color_dark_brown_white.png" alt="" />
                      </li>
                    }
                    color_4={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_5={
                      <li>
                        <img src="/icons/color_white_grey.png" alt="" />
                      </li>
                    }
                    color_6={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_7={
                      <li>
                        <img src="/icons/color_black_grey.png" alt="" />
                      </li>
                    }
                    color_8={
                      <li>
                        <img src="/icons/color_blue_yellow.png" alt="" />
                      </li>
                    }
                    color_9={
                      <li>
                        <img src="/icons/color_brown_black.png" alt="" />
                      </li>
                    }
                  />
                </div> */}
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

function SearchBar({ defaultTerm, setFilters }) {
  const [term, setTerm] = React.useState(defaultTerm)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetFilters = React.useCallback(
    debounce((value) => {
      setFilters((filters) => ({ ...filters, term: value }))
    }, 200),
    [setFilters]
  )

  return (
    <form onSubmit={(e) => e.preventDefault()} className={searchForm}>
      <SearchIcon aria-hidden className={searchIcon} />
      <input
        type="text"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value)
          debouncedSetFilters(e.target.value)
        }}
        placeholder="Search..."
      />
      {term ? (
        <button
          className={clearSearch}
          type="reset"
          onClick={() => {
            setTerm("")
            setFilters((filters) => ({ ...filters, term: "" }))
          }}
          aria-label="Clear search query"
        >
          <CrossIcon />
        </button>
      ) : undefined}
    </form>
  )
}
/**
 * Shopify only supports next & previous navigation
 */
function Pagination({ previousPage, hasPreviousPage, nextPage, hasNextPage }) {
  return (
    <nav className={pagination}>
      <button
        className={paginationButton}
        disabled={!hasPreviousPage}
        onClick={previousPage}
        aria-label="Previous page"
      >
        <CgChevronLeft />
      </button>
      <button
        className={paginationButton}
        disabled={!hasNextPage}
        onClick={nextPage}
        aria-label="Next page"
      >
        <CgChevronRight />
      </button>
    </nav>
  )
}

// step 3: export

export default function SearchPageTemplate(props) {
  return (
    <SearchProvider>
      <Shop {...props} />
    </SearchProvider>
  )
}

//export default Shop
