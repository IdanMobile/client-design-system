import React from "react";

export type CardProps = {
  title?: string;
  description?: string;
  disabled?: boolean;
  size?: "md";
  variant?: "default";
  state?: "default";
};

export function Card({
  title = "Card",
  description = "Generated and synced by GUING",
  disabled = false,
  size = "md",
  variant = "default",
  state = "default",
}: CardProps) {
  const renderedTitle = String(title ?? "Card");
  const renderedDescription = String(description ?? "Generated and synced by GUING");
  return (
    <section data-guing-component="card" style={{
      background: "var(--guing-surfaces-card)",
      border: "1px solid var(--guing-border-color-default)",
      color: "var(--guing-colors-text-primary)",
      borderRadius: "var(--guing-radius-md)",
      padding: "var(--guing-space-3)",
      opacity: disabled ? 0.6 : 1
    }}>
      <strong>{renderedTitle}</strong>
      <p>{renderedDescription}</p>
      <small>{`variant=${variant} | size=${size} | state=${state}`}</small>
    </section>
  );
}