import React from "react";

export type AiCreateAnAnalyticsProps = {
  title?: string;
  description?: string;
  disabled?: boolean;
  value?: string;
  trend?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
  state?: "default" | "hover" | "active";
};

export function AiCreateAnAnalytics({
  title = "ai-create-an-analytics",
  description = "Generated and synced by GUING",
  disabled = false,
  value = "42",
  trend = "+12%",
  size = "md",
  variant = "default",
  state = "default"
}: AiCreateAnAnalyticsProps) {
  return (
    <section data-guing-component="ai-create-an-analytics" style={{
      background: "var(--guing-component-bg)",
      border: "1px solid var(--guing-component-border)",
      color: "var(--guing-component-text)",
      borderRadius: "var(--guing-component-radius)",
      padding: "var(--guing-component-padding)",
      opacity: disabled ? 0.6 : 1
    }}>
      <strong>{title}</strong>
      <p>{description}</p>
      <small>{`variant=${variant} | size=${size} | state=${state}`}</small>
    </section>
  );
}