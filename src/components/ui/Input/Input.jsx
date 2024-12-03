import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./Input.module.css";

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(styles.input, className)}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export { Input };
