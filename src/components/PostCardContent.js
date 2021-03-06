import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import PostTags from "./PostTags"
import PostListDescription from "./PostListDescription"

const StyledPostListItem = styled.li`
  list-style: none;
  background-color: ${props => props.theme.colors[props.themeColor].white};
  padding: ${props => props.theme.spacings.small};
  box-shadow: ${props => props.theme.shadows.shadow2};
  min-height: 13rem;
  border: 2px solid ${props => props.theme.colors[props.themeColor].foreground};

  & h2 {
    font-family: ${props => props.theme.fonts.title};
    font-weight: normal;
  }
  display: flex;
  flex-direction: column;
  & .desc {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.small};
  }

  & .title {
    margin-bottom: 0;
  }

  & a,
  a:visited {
    color: ${props => props.theme.colors[props.themeColor].foreground};
    &:hover {
      color: ${props => props.theme.colors[props.themeColor].blue};
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 800px) {
    min-height: 10rem;
  }
`

const PostCard = ({ node }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  const { title, date, description, tags, export_file_name } = node.metadata
  const { timeToRead } = node
  return (
    <StyledPostListItem themeColor={themeColor}>
      <Link to={`/blog/${export_file_name}`} className="title">
        <h2>{title}</h2>
      </Link>
      <PostListDescription date={date} timeToRead={timeToRead} />
      <p className="desc">{description}</p>
      <PostTags tags={tags} />
    </StyledPostListItem>
  )
}

export default PostCard
