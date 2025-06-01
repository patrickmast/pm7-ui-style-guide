import React, { useState } from "react";
import { PM7TabSelector } from "../src/components/tab-selector";
import ExampleCardOverview from "./example-card-overview";
import ExampleCardUsage from "./example-card-usage";
import ExampleCardAPI from "./example-card-api";
import ExampleCardExamples from "./example-card-examples";
import "../src/components/card/pm7-card.css";
import "../src/components/tab-selector/pm7-tab-selector.css";

// Static README content for API tab
const cardReadme = `# PM7Card

A flexible Card component for PM7 UI, inspired by PM7Dialog but for static content display. Supports header, footer, title, subtitle, and dark mode.

## Usage

\`\`\`tsx
import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from "@pm7-ui/card";

<PM7Card>
  <PM7CardHeader>
    <PM7CardTitle>Card Title</PM7CardTitle>
    <PM7CardSubTitle>Card subtitle or description</PM7CardSubTitle>
  </PM7CardHeader>
  <div>Card content goes here.</div>
  <PM7CardFooter>
    <button>Action</button>
  </PM7CardFooter>
</PM7Card>
\`\`\`

## Props

### PM7Card
- \`className?\`: string — Additional classes for the card container.
- All standard \`div\` props.

### PM7CardHeader, PM7CardFooter
- \`className?\`: string — Additional classes.
- All standard \`div\` props.

### PM7CardTitle
- \`className?\`: string — Additional classes.
- All standard \`h3\` props.

### PM7CardSubTitle
- \`className?\`: string — Additional classes.
- All standard \`p\` props.

## Styling

- Card supports light and dark mode.
- Use the provided CSS or extend as needed.

## License
MIT`;

type TabType = "Overview" | "Usage" | "API" | "Examples";
type ThemeType = "light" | "dark";

export default function ExampleCard({ theme }: { theme: ThemeType }) {
  const [activeTab, setActiveTab] = useState<TabType>("Overview");

  const handleTabChange = (tabId: string) => {
    if (tabId === "Overview" || tabId === "Usage" || tabId === "API" || tabId === "Examples") {
      setActiveTab(tabId as TabType);
    }
  };

  return (
    <>
      <PM7TabSelector
        tabs={[
          { id: "Overview", label: "Overview" },
          { id: "Usage", label: "Usage" },
          { id: "API", label: "API" },
          { id: "Examples", label: "Examples" }
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        initialTheme={theme}
        className="mb-4"
      />
      {activeTab === "Overview" && (
        <div style={{ padding: '1rem' }}>
          <ExampleCardOverview theme={theme} />
        </div>
      )}
      {activeTab === "Usage" && (
        <div style={{ padding: '1rem' }}>
          <ExampleCardUsage theme={theme} />
        </div>
      )}
      {activeTab === "API" && (
        <div style={{ padding: '1rem' }}>
          <ExampleCardAPI theme={theme} />
        </div>
      )}
      {activeTab === "Examples" && (
        <div style={{ padding: '1rem' }}>
          <ExampleCardExamples theme={theme} />
        </div>
      )}
    </>
  );
}