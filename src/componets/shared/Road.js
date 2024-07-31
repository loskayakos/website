import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Select = styled.select`
  background-color: white;
  border: 1px solid #52782c;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
`

const Road = ({ onChangeParent, value }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "downflow-routes" } } }) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const handleChange = e => {
    onChangeParent(e.target.value)
  }

  return (
    <Select name='road' component='select' onChange={handleChange} value={value}>
      <option hidden> -- Wybierz swoją trasę spływu -- </option>
      {edges.map(({ node }) => (
        <option value={node.frontmatter.title} key={node.frontmatter.title}>
          {' '}
          {node.frontmatter.title}
        </option>
      ))}
    </Select>
  )
}

export default Road
