import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonsProps } from '@sbr-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonsProps>

export const Primary: StoryObj<ButtonsProps> = {}
export const Secondary: StoryObj<ButtonsProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: StoryObj<ButtonsProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonsProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonsProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonsProps> = {
  args: {
    disabled: true,
  },
}
