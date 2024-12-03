import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import styles from "./Button.module.css";
import { cn } from "@/lib/utils";

const buttonVariants = cva(styles.common, {
  variants: {
    variant: {
      default: styles.defaultVariant,
      destructive: styles.destructiveVariant,
      outline: styles.outlineVariant,
      secondary: styles.secondaryVariant,
      ghost: styles.ghostVariant,
      link: styles.linkVariant,
    },
    size: {
      default: styles.defaultSize,
      sm: styles.smSize,
      lg: styles.lgSize,
      icon: styles.iconSize,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export { Button };
