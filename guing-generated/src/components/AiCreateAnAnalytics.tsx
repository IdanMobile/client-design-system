import React from "react";

export type AiCreateAnAnalyticsProps = {
  title?: string;
  description?: string;
};

export function AiCreateAnAnalytics({
  title = "ai-create-an-analytics",
  description = "Generated from GUING publish flow"
}: AiCreateAnAnalyticsProps) {
  return (
    <section data-guing-component="ai-create-an-analytics" style={{
      background: "var(--guing-component-bg)",
      border: "1px solid var(--guing-component-border)",
      color: "var(--guing-component-text)",
      borderRadius: "var(--guing-component-radius)",
      padding: "var(--guing-component-padding)"
    }}>
      <strong>{title}</strong>
      <p>{description}</p>
    </section>
  );
}