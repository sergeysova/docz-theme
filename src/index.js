import './styles/global'

import React from 'react'
import { theme, ThemeConfig, DocPreview } from 'docz'
import webfont from 'webfontloader'

import { Main } from './components/main'
import { Topbar } from './components/topbar'
import { Page } from './ui/page'


export const Theme = () => (
  <ThemeConfig>
    {config => (
      <Main>
        <Topbar />
        <DocPreview
          components={{
            page: Page,
          }}
        />
      </Main>
    )}
  </ThemeConfig>
)

export default theme({})(Theme)
