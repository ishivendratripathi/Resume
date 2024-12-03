import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./Card.module.css";

const Card = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.card, className)} {...props} />
));

Card.displayName = "Card";

Card.propTypes = {
  className: PropTypes.string,
};

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardHeader, className)} {...props} />
));

CardHeader.displayName = "CardHeader";

CardHeader.propTypes = {
  className: PropTypes.string,
};

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardTitle, className)} {...props} />
));

CardTitle.displayName = "CardTitle";

CardTitle.propTypes = {
  className: PropTypes.string,
};

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardDescription, className)} {...props} />
));

CardDescription.displayName = "CardDescription";

CardDescription.propTypes = {
  className: PropTypes.string,
};

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardContent, className)} {...props} />
));

CardContent.displayName = "CardContent";

CardContent.propTypes = {
  className: PropTypes.string,
};

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardFooter, className)} {...props} />
));

CardFooter.displayName = "CardFooter";

CardFooter.propTypes = {
  className: PropTypes.string,
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
