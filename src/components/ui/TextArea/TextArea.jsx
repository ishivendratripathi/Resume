import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./TextArea.module.css";

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea className={cn(styles.textarea, className)} ref={ref} {...props} />
  );
});

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  className: PropTypes.string,
};

export { Textarea };
