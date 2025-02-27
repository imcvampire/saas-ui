import * as React from 'react'

import { Button, ButtonProps, useTheme } from '@chakra-ui/react'
import { __DEV__ } from '@chakra-ui/utils'

export const ProviderButton: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props
  const theme = useTheme()

  const defaultProps = {
    p: 6,
    variant: 'outline',
    ...theme.components.ProviderButton?.defaultProps,
  }

  return (
    <Button {...defaultProps} {...rest}>
      {children}
    </Button>
  )
}

if (__DEV__) {
  ProviderButton.displayName = 'ProviderButton'
}
