import React from 'react'
import { Text, Link, Card } from '@hackclub/design-system'

export default () => (
  <Card boxShadowSize="md" p={3} my={3} bg="white">
    <Text bold f={3}>
      Are you a club leader or need stickers for your event?
    </Text>
    <Text f={2}>
      Reach out to us via{' '}
      <Link href="mailto:support@fnplus.tech">support@fnplus.tech</Link> or{' '}
      <Link href="https://fnplus.slack.com/">#fn+ on Slack</Link>.
    </Text>
  </Card>
)
