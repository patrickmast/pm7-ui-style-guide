// Refactor: Extracted the "Documentation" tab content from example-menu.tsx to this file as ExampleMenuDocumentation.
import React from 'react';
import ReactMarkdown from 'react-markdown';

const ExampleMenuDocumentation = ({ readmeContent }: { readmeContent: string }) => (
  <div className="p-6">
    <div className="markdown-container dark:text-white">
      <ReactMarkdown>{readmeContent}</ReactMarkdown>
    </div>
  </div>
);

export default ExampleMenuDocumentation;
