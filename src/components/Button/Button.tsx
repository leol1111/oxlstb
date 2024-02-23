import React from "react";
import {
  SelectIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@shopify/polaris-icons";

import type { BaseButton, IconSource } from "../../types";
import { classNames, variationName } from "../../utilities/css";
import { Icon } from "../Icon";
import { Spinner } from "../Spinner";

import styles from "./Button.module.scss";

interface UnstyledButtonProps extends BaseButton {
  /** The content to display inside the button */
  children?: React.ReactNode;
  /** A custom class name to apply styles to button */
  className?: string;
  [key: string]: any;
}
function UnstyledButton({
  id,
  children,
  className,
  url,
  external,
  target,
  download,
  submit,
  disabled,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  ...rest
}: UnstyledButtonProps) {
  return (
    <button 
      id={id}
      className={className}
      disabled={disabled}
      aria-pressed={pressed}
      aria-label={accessibilityLabel}
      role={role}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-describedby={ariaDescribedBy}
      aria-checked={ariaChecked}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      {...rest}
    >
      {children}
    </button>
  );
}     




export interface ButtonProps extends BaseButton {
  /**
   * Changes the size of the button, giving it more or less padding
   * @default 'medium'
   */
  size?: "micro" | "slim" | "medium" | "large";
  /** Changes the inner text alignment of the button */
  textAlign?: "left" | "right" | "center" | "start" | "end";
  /** Allows the button to grow to the width of its container */
  fullWidth?: boolean;
  /** Displays the button with a disclosure icon. Defaults to `down` when set to true */
  disclosure?: "down" | "up" | "select" | boolean;

  /** Icon to display to the left of the button content */
  icon?: IconSource;
  /** Indicates whether or not the button is the primary navigation link when rendered inside of an `IndexTable.Row` */
  dataPrimaryLink?: boolean;
  /** Sets the color treatment of the Button. */
  tone?: "critical" | "success";
  /** Changes the visual appearance of the Button. */
  variant?: "plain" | "primary" | "secondary" | "tertiary" | "monochromePlain";
}

export function Button({
  id,
  children,
  url,
  disabled,
  loading,
  pressed,
  icon,
  disclosure,
  size = "medium",
  textAlign = "center",
  fullWidth,
  tone,
  variant = "secondary",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const className = classNames(
    styles.Button,
    styles.pressable,
    styles[variationName("variant", variant)],
    styles[variationName("size", size)],
    styles[variationName("textAlign", textAlign)],
    fullWidth && styles.fullWidth,
    disclosure && styles.disclosure,
    icon && children && styles.iconWithText,
    icon && children == null && styles.iconOnly,
    isDisabled && styles.disabled,
    loading && styles.loading,
    pressed && !disabled && !url && styles.pressed,
    tone && styles[variationName("tone", tone)]
  );

  const iconMarkup = icon ? (
    <span className={loading ? styles.hidden : styles.Icon}>
      {<Icon source={icon} />}
    </span>
  ) : null;

  const childMarkup = children ? (
    <span
      // Fixes Safari bug that doesn't re-render button text to correct color
      key={disabled ? "text-disabled" : "text"}
    >
      {children}
    </span>
  ) : null;

  const spinnerSVGMarkup = loading ? (
    <span className={styles.Spinner}>
      <Spinner size="small" />
    </span>
  ) : null;

  
  const buttonMarkup = (
    <UnstyledButton className={className}>
      {spinnerSVGMarkup}
      {iconMarkup}
      {childMarkup}
    </UnstyledButton>
  );

  return buttonMarkup;
}
