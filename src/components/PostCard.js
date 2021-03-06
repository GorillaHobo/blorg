import React from "react"
import styled from "@emotion/styled"

const StyledPostCard = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.spacings.small};
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const PostCard = ({ children }) => {
  return <StyledPostCard>{children}</StyledPostCard>
}

export default PostCard
