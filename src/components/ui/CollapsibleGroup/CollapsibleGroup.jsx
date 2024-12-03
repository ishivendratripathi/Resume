import React, { forwardRef, useEffect, useState } from "react";
import styles from "./CollapsibleGroup.module.css";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const CollapsibleGroup = forwardRef(function CollapsibleGroup(
  { className, children, defaultOpenIndex = 0, ...props },
  ref
) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const [hasTransition, setHasTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasTransition(true), 0);
    return () => clearTimeout(timer);
  });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={ref}
      className={cn(styles.collapsibleGroup, className)}
      {...props}
    >
      {children.map((child, index) =>
        React.cloneElement(child, {
          key: index,
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
          hasTransition: hasTransition,
        })
      )}
    </div>
  );
});

CollapsibleGroup.displayName = "CollapsibleGroup";

CollapsibleGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  defaultOpenIndex: PropTypes.number,
};

export { CollapsibleGroup };
