import React from "react"

import "../styles/main.css"

const IndexPage = () => (
  <div className="container mx-auto">
    <div className="w-1/2">
      <h1 className="text-main text-6xl font-bold">Hello!</h1>
      <p>
        My name is <span className="font-bold">Jacob Sarnowski</span> and I’m a{" "}
        <span className="font-bold">software engineer</span>. I’m passionate
        about creating amazing, intuitive, eye-pleasing products which users{" "}
        <span className="text-main font-bold">love</span> to use.
      </p>
    </div>
  </div>
)

export default IndexPage
