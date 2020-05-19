import React from "react"
import { withPrefix } from "gatsby"
import siteConfig from "../../../data/siteConfig"
import styled from "styled-components"

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  margin: 10px 60px;
  color: #212121;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.7);
  @media (max-width: 400px) {
    font-size: 3rem;
    margin: 0 auto;
  }
`

class Hero extends React.Component {
  render() {
    const { title, className } = this.props

    return (
      <HeroContainer className={className}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
        </TitleContainer>
      </HeroContainer>
    )
  }
}

export default styled(Hero)`
  ${p =>
    `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  width:100%;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`