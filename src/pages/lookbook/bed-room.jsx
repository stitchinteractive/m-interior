// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../../components/layout"
import { LookBookDetailsItem } from "../../components/lookbook-details-item"
import { Link } from "gatsby"
import BackIcon from "../../icons/back"

// step 2: define component
const LookBookDetails = () => {
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

  return (
    <Layout>
      <div className="container">
        <div className="row row_padding">
          <div className="col-12">
            <h2 className="text-uppercase pb-7 animate">Bed Room</h2>
          </div>
          <div className="col-12 col-md-6">
            <a
              href="/shop/detail/large-bedroom-chest"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/1.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/large-side-table"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/3.jpg"
                alt="Bed Room"
              />
            </a>
            <a href="/shop/detail/big-module" target="_blank" rel="noreferrer">
              <LookBookDetailsItem
                image="/lookbook/bed_room/5.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/small-bedroom-chest"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/7.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/small-module-with-full-drawer"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/9.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/acacia-block-bundle-of-10"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/11.jpg"
                alt="Bed Room"
              />
            </a>
          </div>

          <div className="col-12 col-md-6">
            <a
              href="/shop/detail/large-side-table"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/2.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/large-side-table"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/4.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/large-bedroom-chest"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/6.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/small-module-with-full-drawer"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/8.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/large-bedroom-chest"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/10.jpg"
                alt="Bed Room"
              />
            </a>
            <a
              href="/shop/detail/acacia-block-bundle-of-3"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/bed_room/12.jpg"
                alt="Bed Room"
              />
            </a>
          </div>

          <div className="d-flex btn_back">
            <BackIcon />
            <Link
              to="/lookbook"
              className="ms-2 font_yellow text-uppercase font_semibold no_underline"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default LookBookDetails
