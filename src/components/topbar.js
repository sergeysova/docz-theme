import React from 'react'
import styled, { css } from 'react-emotion'
import { Docs, Link } from 'docz'

// import { Container, Logo } from '@components/ui'
import { Container } from '../ui/container'

const Wrapper = styled('div')`
  height: 60px;
  width: 100%;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`

const LogoLink = styled(Link)`
  height: 30px;
`

const Menu = styled('div')`
  display: flex;
`

const linkStyle = (p) => css`
  color: black;
  opacity: 0.5;
  transition: opacity 0.2s;
  font-size: 15px;
  font-weight: 400;
  &.active,
  &:visited,
  &:hover {
    color: blue;
    opacity: 1;
  }
`

const MenuLink = styled(Link)`
  ${linkStyle};
  margin: 0 10px;
`

const IconLink = styled('a')`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;
  svg {
    stroke: blue;
  }
`

export const isActive = (route) => (match, location) =>
  (match && match.url === location.pathname)
  || (location.pathname.startsWith(route) && route !== '/')

export const Topbar = () => (
  <Wrapper>
    <Container>
      <LogoLink to="/">
        {/* <Logo height={30} /> */}
        LOGOs
      </LogoLink>
      <Docs>
        {({ docs: allDocs }) => {
          const docs = allDocs.filter(doc => !doc.parent)

          return (
            <Menu>
              {docs.map(doc => (
                <MenuLink
                  key={doc.id}
                  to={doc.route}
                  isActive={isActive(doc.route)}
                >
                  {doc.name}
                </MenuLink>
              ))}
              <IconLink
                href="https://github.com/pedronauck/docz"
                target="_blank"
              >
                {/* <Github width={30} /> */}
                GITHUB
              </IconLink>
            </Menu>
          )
        }}
      </Docs>
    </Container>
  </Wrapper>
)
