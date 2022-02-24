import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import './index.css'

const IndexPage = ({data }) => (
  <Layout>
    
    <div class="container">
    {data.allStrapiArticulo.edges.map(({ node }) => (
          <div key={node.strapiId} class="card">
            <div class="card-header centrar">
              <Link to={`/${node.strapiId}`} class="defaultlink">
                    <h1>
                        {node.titulo}
                    </h1> 
                </Link>
            </div>
            <div class="card-body centrar">
                <p>{node.extract}</p>
            </div>
            <div class="card-footer">
              <Link to={`/${node.strapiId}`} class="go-to" >Ir </Link> 
            </div>
          </div>
        ))}
    </div>
</Layout>
)

export default IndexPage
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticulo {
      edges {
        node {
          strapiId
          titulo
          descripcion
          extract
        }
      }
    }
  }
`