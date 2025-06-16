// Utility for tab persistence across component navigation

const TAB_STORAGE_KEY = 'pm7-ui-active-tab';

export const saveActiveTab = (tabId: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TAB_STORAGE_KEY, tabId);
  }
};

export const getActiveTab = (defaultTab: string = 'demo'): string => {
  if (typeof window !== 'undefined') {
    const savedTab = localStorage.getItem(TAB_STORAGE_KEY);
    if (savedTab) {
      // Validate that the saved tab is one of the valid tabs
      const validTabs = ['demo', 'overview', 'usage', 'documentation'];
      if (validTabs.includes(savedTab)) {
        return savedTab;
      }
    }
  }
  return defaultTab;
};

export const clearActiveTab = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TAB_STORAGE_KEY);
  }
};