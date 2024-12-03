import { Children, createContext, forwardRef, isValidElement } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./Primitive.module.css";
import { cva } from "class-variance-authority";

const CVContainer = forwardRef(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cn(styles.container, className)}>
      {children}
    </div>
  );
});

CVContainer.displayName = "CVContainer";

CVContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const layoutVariants = cva(styles.layout, {
  variants: {
    direction: {
      row: styles.rowVariant,
      column: styles.columnVariant,
    },
  },
  defaultVariants: {
    variant: "row",
  },
});

const LayoutContext = createContext({ direction: "row" });

const CVLayout = forwardRef(
  ({ children, direction, className, ...props }, ref) => {
    const columnCount = Children.toArray(children).filter(
      (child) => isValidElement(child) && child.type === Column
    ).length;
    return (
      <LayoutContext.Provider value={{ direction }}>
        <div
          ref={ref}
          className={layoutVariants({ direction, className })}
          style={{ "--column-count": columnCount }}
          {...props}
        >
          {children}
        </div>
      </LayoutContext.Provider>
    );
  }
);

CVLayout.displayName = "CVLayout";

CVLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.string,
};

const Column = forwardRef(({ children, className, width, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(styles.column, className)}
      style={width ? { width } : null}
      {...props}
    >
      {children}
    </div>
  );
});

Column.displayName = "Column";

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.string,
};

CVLayout.Column = Column;

const CVSection = forwardRef(({ className, ...props }, ref) => {
  return (
    <section ref={ref} className={cn(styles.section, className)} {...props} />
  );
});

CVSection.displayName = "CVSection";

CVSection.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
};

const CVHeading1 = forwardRef(({ className, ...props }, ref) => {
  return <h1 ref={ref} className={cn(styles.heading1, className)} {...props} />;
});

CVHeading1.displayName = "CVHeading1";

CVHeading1.propTypes = {
  className: PropTypes.string,
};

export { CVContainer, CVLayout, CVSection, CVHeading1 };
