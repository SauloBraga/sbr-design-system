import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@sbr-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          debitis hic animi itaque aliquid cum accusamus? Delectus architecto
          iste distinctio nihil, dolor autem atque molestias aliquam est
          laudantium quia laborum?
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
