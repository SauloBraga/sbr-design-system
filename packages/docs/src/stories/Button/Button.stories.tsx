import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@sbr-ui/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: 'Enviar'
  }
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {

}
export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large'
  }
}