import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>this is our PRODUCTS page</h1>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non labore
            voluptates corporis, consectetur cupiditate, mollitia ullam libero
            officia aperiam necessitatibus incidunt provident unde maiores
            quidem.
          </p>
        </div>
      </Layout>
    )
  }
}
