import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActiveTab, saveActiveTab } from './utils/tab-persistence';
import { PM7TabSelector } from '../src/components/tab-selector';
import ExampleToastOverview from './example-toast-overview';
import ExampleToastDemo from './example-toast-demo';
import ExampleToastUsage from './example-toast-usage';
import ExampleToastDocumentation from './example-toast-documentation';

type TabType = 'overview' | 'demo' | 'usage' | 'documentation';
type ThemeType = 'light' | 'dark';

const ToastExample = ({ theme }: { theme: ThemeType }) => {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = (tabPath || getActiveTab('overview')) as TabType;

  return (
    <>
      {/* Tab row using PM7TabSelector */}
      <PM7TabSelector
        tabs={[
          { id: 'overview', label: 'Overview' },
          { id: 'demo', label: 'Demo' },
          { id: 'usage', label: 'Usage' },
          { id: 'documentation', label: 'Documentation' }
        ]}
        activeTab={activeTab}
        onTabChange={(tabId) => {
          saveActiveTab(tabId);
          navigate(`/toast/${tabId}`);
        }}
        initialTheme={theme}
        className="mb-4"
      />

      {/* Tab content */}
      {activeTab === 'overview' && (
        <div style={{ padding: '1rem' }}>
          <ExampleToastOverview theme={theme} />
        </div>
      )}
      {activeTab === 'demo' && (
        <div style={{ padding: '1rem' }}>
          <ExampleToastDemo theme={theme} />
        </div>
      )}
      {activeTab === 'usage' && (
        <div style={{ padding: '1rem' }}>
          <ExampleToastUsage theme={theme} />
        </div>
      )}
      {activeTab === 'documentation' && (
        <div style={{ padding: '1rem' }}>
          <ExampleToastDocumentation theme={theme} />
        </div>
      )}
    </>
  );
};

export default ToastExample;