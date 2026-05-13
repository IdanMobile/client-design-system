import React from "react";

export type ButtonProps = {
  title?: string;
  description?: string;
  disabled?: boolean;
  size?: "md";
  variant?: "primary";
  state?: "default";
  disabled?: boolean;
};

export function Button({
  title = "Button",
  description = "Generated and synced by GUING",
  disabled = false,
  size = "md",
  variant = "primary",
  state = "default",
  disabled = false
}: ButtonProps) {
  const title = String(title ?? "Button");
  const description = String(description ?? "Generated and synced by GUING");
  return (
    <section data-guing-component="button" style={{
      background: "var(--guing-surfaces-card)",
      border: "1px solid var(--guing-border-color-default)",
      color: "var(--guing-colors-text-primary)",
      borderRadius: "var(--guing-radius-md)",
      padding: "var(--guing-space-3)",
      opacity: disabled ? 0.6 : 1
    }}>
      <strong>{title}</strong>
      <p>{description}</p>
      <small>{`variant=${variant} | size=${size} | state=${state}`}</small>
    </section>
  );
}