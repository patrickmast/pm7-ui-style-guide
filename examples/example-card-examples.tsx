import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from '../src/components/card';

const ExampleCardExamples = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div style={{ maxWidth: 400, margin: '2rem auto' }}>
    <PM7Card>
      <PM7CardHeader>
        <PM7CardTitle>PM7 Card Title</PM7CardTitle>
        <PM7CardSubTitle>This is a subtitle for the card.</PM7CardSubTitle>
      </PM7CardHeader>
      <div style={{ margin: '1rem 0' }}>
        This is the main content of the card. You can put any React node here.
      </div>
      <PM7CardFooter>
        <button style={{ padding: '0.5rem 1rem', borderRadius: 4, background: '#1C86EF', color: 'white', border: 'none' }}>Action</button>
      </PM7CardFooter>
    </PM7Card>
  </div>
);

export default ExampleCardExamples;