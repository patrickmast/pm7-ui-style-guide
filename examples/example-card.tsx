import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from "../src/components/card";
import { PM7TabSelector } from "../src/components/tab-selector";
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

export default function ExampleCard() {
  const [activeTab, setActiveTab] = useState<TabType>("Overview");
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem("pm7-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme as ThemeType;
    }
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "pm7-theme" && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue as ThemeType);
      }
    };
    const checkTheme = () => {
      const savedTheme = localStorage.getItem("pm7-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme as ThemeType);
      }
    };
    const intervalId = setInterval(checkTheme, 500);
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(intervalId);
    };
  }, [theme]);

  const handleTabChange = (tabId: string) => {
    if (tabId === "Overview" || tabId === "Usage" || tabId === "API" || tabId === "Examples") {
      setActiveTab(tabId as TabType);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
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
      <div className={`component-example ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
        <PM7Card>
          <div className="p-6">
            {activeTab === "Overview" && (
              <div>
                <h3 className="text-xl font-semibold mb-3">PM7Card</h3>
                <p className="mb-4">The PM7Card component provides a flexible, theme-aware card container for static content, with header, footer, title, and subtitle support.</p>
                <h4 className="text-lg font-medium mt-4 mb-2">Key Features</h4>
                <ul className="list-disc ml-5 mt-1 mb-4">
                  <li>Light and dark theme support</li>
                  <li>Header, footer, title, and subtitle subcomponents</li>
                  <li>Customizable via className and CSS</li>
                  <li>Simple, accessible markup</li>
                </ul>
              </div>
            )}
            {activeTab === "Usage" && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
                <p className="mb-4">Here's how to use the PM7Card component in your React application:</p>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 overflow-x-auto">
                  <code className="font-mono">{`import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from '@pm7-ui/card';

<PM7Card>
  <PM7CardHeader>
    <PM7CardTitle>Card Title</PM7CardTitle>
    <PM7CardSubTitle>Card subtitle or description</PM7CardSubTitle>
  </PM7CardHeader>
  <div>Card content goes here.</div>
  <PM7CardFooter>
    <button>Action</button>
  </PM7CardFooter>
</PM7Card>`}</code>
                </pre>
              </div>
            )}
            {activeTab === "API" && (
              <div className="markdown-container dark:text-white">
                <ReactMarkdown>{cardReadme}</ReactMarkdown>
              </div>
            )}
            {activeTab === "Examples" && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Live Example</h3>
                <div style={{ maxWidth: 400, margin: "2rem auto" }}>
                  <PM7Card>
                    <PM7CardHeader>
                      <PM7CardTitle>PM7 Card Title</PM7CardTitle>
                      <PM7CardSubTitle>This is a subtitle for the card.</PM7CardSubTitle>
                    </PM7CardHeader>
                    <div style={{ margin: "1rem 0" }}>
                      This is the main content of the card. You can put any React node here.
                    </div>
                    <PM7CardFooter>
                      <button style={{ padding: "0.5rem 1rem", borderRadius: 4, background: "#1C86EF", color: "white", border: "none" }}>Action</button>
                    </PM7CardFooter>
                  </PM7Card>
                </div>
              </div>
            )}
          </div>
        </PM7Card>
      </div>
    </div>
  );
}