import { ComponentProps } from "react";
import { styled } from "./styles";

export const Button = styled("button", {
  fontFamily: "$default",
  background: "$ignite300",
  borderRadius: "$sm",
  border: "0",
  fontWeight: "$bold",
  color: "$white",

  variants: {
    size: {
      small: {
        fontSize: "$sm",
        padding: "$2 $4",
      },
      large: {
        fontSize: "$lg",
        padding: "$3 $6",
      },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export type ButtonProps = ComponentProps<typeof Button>