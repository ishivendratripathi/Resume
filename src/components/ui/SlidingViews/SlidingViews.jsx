import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./SlidingViews.module.css";

const SlidingViews = forwardRef(
  ({ className, children, activeView, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.container, className)} {...props}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${activeView * 50}%)` }}
        >
          {children}
        </div>
      </div>
    );
  }
);

SlidingViews.displayName = "SlidingViews";

SlidingViews.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  activeView: PropTypes.number,
};

const SlidingView = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.view, className)} {...props}>
      {children}
    </div>
  );
});

SlidingView.displayName = "SlidingView";

SlidingView.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SlidingViews.View = SlidingView;

export { SlidingViews };
