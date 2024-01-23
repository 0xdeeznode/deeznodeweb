import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist. Or Most Probably under work</p>
      <Link href="/">
        <a>Go back to the home page</a>
      </Link>
    </div>
  )
}

export default Home