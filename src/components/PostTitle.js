import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"
import PostTitleDescription from "./PostTitleDescription"
import PostTags from "../components/PostTags"

const StyledPostTitle = styled.header`
  width: 100%;
  margin: ${props => props.theme.spacings.small} 0
    ${props => props.theme.spacings.small} 0;

  & h1 {
    font-family: ${props => props.theme.fonts.sans};
    color: ${props => props.theme.colors[props.themeColor].blue};
    font-size: 2.7rem;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2.4rem;
    }
  }
  @media screen and (max-width: 720px) {
    h1 {
      font-size: 2rem;
    }
  }
`

const PostTitle = ({ date, timeToRead, tags, title = "Untilted" }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <StyledPostTitle themeColor={themeColor}>
      <h1>{title}</h1>
      <PostTitleDescription date={date} timeToRead={timeToRead} />
      <PostTags tags={tags} />
    </StyledPostTitle>
  )
}

export default PostTitle
