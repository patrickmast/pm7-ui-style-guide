import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from '../src/components/card';

const ExampleCardExamples = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    {/* Basic Card Example */}
    <div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Basic Card</h3>
      <PM7Card theme={theme} style={{ padding: '1.5rem', maxWidth: '400px' }}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7 Card Title</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>This is a subtitle for the card.</PM7CardSubTitle>
        </PM7CardHeader>
        <div style={{ margin: '1rem 0' }}>
          This is the main content of the card. You can put any React node here.
        </div>
        <PM7CardFooter theme={theme}>
          <button style={{ padding: '0.5rem 1rem', borderRadius: 4, background: '#1C86EF', color: 'white', border: 'none', cursor: 'pointer' }}>Action</button>
        </PM7CardFooter>
      </PM7Card>
    </div>

    {/* User Profile Card */}
    <div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>User Profile Card</h3>
      <PM7Card theme={theme} style={{ padding: '1.5rem', maxWidth: '350px' }}>
        <PM7CardHeader theme={theme}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: '#1C86EF', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white', 
              fontWeight: 'bold' 
            }}>
              JD
            </div>
            <div>
              <PM7CardTitle theme={theme}>John Doe</PM7CardTitle>
              <PM7CardSubTitle theme={theme}>Software Engineer</PM7CardSubTitle>
            </div>
          </div>
        </PM7CardHeader>
        <div style={{ margin: '1rem 0' }}>
          <p style={{ marginBottom: '0.5rem' }}>📧 john.doe@pm7.com</p>
          <p style={{ marginBottom: '0.5rem' }}>📍 San Francisco, CA</p>
          <p>🏢 PM7 Engineering Team</p>
        </div>
        <PM7CardFooter theme={theme} style={{ gap: '0.5rem' }}>
          <button style={{ padding: '0.5rem 1rem', borderRadius: 4, background: 'transparent', color: theme === 'dark' ? '#FAFAFA' : '#333', border: `1px solid ${theme === 'dark' ? '#525252' : '#D4D4D4'}`, cursor: 'pointer' }}>Message</button>
          <button style={{ padding: '0.5rem 1rem', borderRadius: 4, background: '#1C86EF', color: 'white', border: 'none', cursor: 'pointer' }}>View Profile</button>
        </PM7CardFooter>
      </PM7Card>
    </div>

    {/* Statistics Card */}
    <div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Statistics Card</h3>
      <PM7Card theme={theme} style={{ padding: '1.5rem', maxWidth: '300px' }}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>Project Stats</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Last 30 days</PM7CardSubTitle>
        </PM7CardHeader>
        <div style={{ margin: '1rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1C86EF' }}>47</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>Tasks</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10B981' }}>23</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>Completed</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F59E0B' }}>8</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>In Progress</div>
            </div>
          </div>
        </div>
        <PM7CardFooter theme={theme}>
          <button style={{ padding: '0.5rem 1rem', borderRadius: 4, background: '#1C86EF', color: 'white', border: 'none', cursor: 'pointer', width: '100%' }}>View Details</button>
        </PM7CardFooter>
      </PM7Card>
    </div>

    {/* Notification Card */}
    <div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Notification Card</h3>
      <PM7Card theme={theme} style={{ padding: '1.5rem', maxWidth: '400px', border: '1px solid #1C86EF' }}>
        <PM7CardHeader theme={theme}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ color: '#1C86EF', fontSize: '1.25rem' }}>ℹ️</div>
            <PM7CardTitle theme={theme} style={{ color: '#1C86EF' }}>New Feature Available</PM7CardTitle>
          </div>
        </PM7CardHeader>
        <div style={{ margin: '1rem 0' }}>
          We've just released a new dashboard feature that allows you to track your project metrics in real-time. Update your application to access these new capabilities.
        </div>
        <PM7CardFooter theme={theme} style={{ gap: '0.5rem' }}>
          <button style={{ padding: '0.5rem 1rem', borderRadius: 4, background: 'transparent', color: theme === 'dark' ? '#FAFAFA' : '#333', border: `1px solid ${theme === 'dark' ? '#525252' : '#D4D4D4'}`, cursor: 'pointer' }}>Later</button>
          <button style={{ padding: '0.5rem 1rem', borderRadius: 4, background: '#1C86EF', color: 'white', border: 'none', cursor: 'pointer' }}>Learn More</button>
        </PM7CardFooter>
      </PM7Card>
    </div>

    {/* Simple Content Card */}
    <div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Simple Content Card</h3>
      <PM7Card theme={theme} style={{ padding: '1.5rem', maxWidth: '350px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Ready to Launch</h4>
          <p style={{ opacity: 0.7, marginBottom: '1.5rem' }}>Your project is configured and ready to deploy to production.</p>
          <button style={{ padding: '0.75rem 1.5rem', borderRadius: 4, background: '#1C86EF', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Deploy Now</button>
        </div>
      </PM7Card>
    </div>
  </div>
);

export default ExampleCardExamples;