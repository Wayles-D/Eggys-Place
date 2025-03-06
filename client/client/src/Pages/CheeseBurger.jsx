import React from 'react'
import CheeseBurgesjs from '../JsFolders/CheeseBurger'

const CheeseBurger = () => {
  return (
    <>
      <main>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741087135/image_amtxry.svg"
      alt="Burger" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Cheese Burger</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
      </main>
    </>
  )
}

export default CheeseBurger
