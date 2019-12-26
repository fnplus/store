import React from 'react'
import { Box, Flex, Icon } from '@hackclub/design-system'

import { SocialLink, Footer, FooterLink } from './style'

export default () => (
  <Footer>
    <Box mb={2}>
      <SocialLink href="https://github.com/fnplus/shop">
        <Icon glyph="github" />
      </SocialLink>
      <SocialLink href="https://twitter.com/fnplusofficial">
        <Icon glyph="twitter" />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/fnplusofficial">
        <Icon glyph="facebook" />
      </SocialLink>
      <SocialLink href="mailto:support@fnplus.tech">
        <Icon glyph="email" />
      </SocialLink>
    </Box>
    <Flex>
      <span>
        Made by{' '}
        <FooterLink href="https://github.com/fnplus">
          @fnplusofficial
        </FooterLink>
      </span>
    </Flex>
  </Footer>
)
