import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@sbr-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, laudantium minima facere dicta fugit veritatis? Impedit aliquid, tempora recusandae sequi dicta ut quam possimus rem voluptas fuga qui nostrum architecto.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
