import React, { Fragment } from 'react'
import { PageProps } from 'docz'
import styled from 'react-emotion'

import { Sidebar } from '../components/sidebar'
import { Container } from './container'


const Wrapper = styled('div')`
  flex: 1;
  overflow-y: auto;

  ${Container.toString()} {
    display: flex;
    min-height: 100%;
    padding: ${p => (p.padding ? 50 : 0)}px 0;
  }
`

const Document = styled('div')`
  width: 100%;
  padding: 30px 0;
`

export const Page = ({ children, doc, ...props }) => {
  const { parent, sidebar, fullpage } = doc
  const showSidebar = Boolean(parent || sidebar)

  return (
    <Wrapper padding={!showSidebar}>
      {fullpage
        ? children
        : (
          <Container>
            {showSidebar
              ? (
                <Fragment>
                  <Sidebar parent={parent || doc.name} active={props.match.url} />
                  <Document>{children}</Document>
                </Fragment>
              )
              : children
            }
          </Container>
        )
      }
    </Wrapper>
  )
}
