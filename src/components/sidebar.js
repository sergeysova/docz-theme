import React, { Fragment } from 'react'
import { Docs, Entry, Link as DoczLink } from 'docz'
import styled from 'react-emotion'


const SidebarWrapper = styled('div')`
  width: 300px;
  min-width: 300px;
  min-height: 100%;
  padding: 30px 20px 30px 0;
  margin-right: 50px;
  border-right: 1px solid lightgray;
`

const Wrapper = styled('div')`
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Link = styled(DoczLink)`
  font-size: 16px;
  padding: 4px 0;

  &,
  &:visited {
    color: #444;
  }

  &.active,
  &:hover {
    color: blue;
  }
`

const SmallLink = styled('a')`
  font-size: 14px;
  padding: 0 0 3px 8px;

  &,
  &.active,
  &:visited {
    color: #444;
  }
`

const Submenu = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 3px 0;
`

const Menu = ({ doc, active }) => (
  <Fragment>
    <Link to={doc.route}>{doc.name}</Link>
    {active === doc.route && (
      <Submenu>
        {doc.headings.map(heading => (
          heading.depth > 1
          && heading.depth < 3
          && (
            <SmallLink key={heading.slug} href={`#${heading.slug}`}>
              {heading.value}
            </SmallLink>
          )
        ))}
      </Submenu>
    )}
  </Fragment>
)

export const Sidebar = ({ parent, active }) => (
  <Docs>
    {({ docs: allDocs }) => {
      const docs = allDocs.filter(doc => doc.parent === parent)

      return (
        <SidebarWrapper>
          <Wrapper>
            {docs.map(doc => (
              <Menu key={doc.id} doc={doc} active={active} />
            ))}
          </Wrapper>
        </SidebarWrapper>
      )
    }}
  </Docs>
)
