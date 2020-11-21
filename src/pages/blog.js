import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our BLOG page</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non labore
          voluptates corporis, consectetur cupiditate, mollitia ullam libero
          officia aperiam necessitatibus incidunt provident unde maiores quidem.
        </p>
      </div>
    </Layout>
  )
}

export default blog
