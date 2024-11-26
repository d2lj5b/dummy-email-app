'use client';

import { useState, useEffect } from 'react';
import EmailComposer from '@/components/email-composer';
import DraftsViewer from '@/components/DraftsViewer';
import { drafts } from '@/lib/drafts';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'compose' | 'drafts'>('compose');
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: '',
    from: ''
  });

  const loadDraft = (draft) => {
    setEmailData(draft);
    setActiveTab('compose');
  };

  // Function to toggle between tabs
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  // Example of using keyboard shortcuts to navigate
  const handleKeyDown = (event) => {
    // Check if the key pressed is Command (or Ctrl) + 1 or 2
    if (event.metaKey || event.ctrlKey) {
      if (event.key === '1') {
        event.preventDefault(); // Prevent default action
        toggleTab('compose'); // Switch to Compose
      } else if (event.key === '2') {
        event.preventDefault(); // Prevent default action
        toggleTab('drafts'); // Switch to Drafts
      }
    }
  };

  // Add event listener for keydown
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col pt-12 pb-24 px-24">
      {activeTab === 'compose' ? (
        <EmailComposer emailData={emailData} setEmailData={setEmailData} />
      ) : (
        <DraftsViewer onLoadDraft={loadDraft} />
      )}
    </main>
  );
}
