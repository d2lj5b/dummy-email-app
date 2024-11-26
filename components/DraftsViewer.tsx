'use client';

import React from 'react';
import { drafts } from '../lib/drafts'; // Ensure this path is correct
import { Button } from '@/components/ui/button'; // Adjust the import based on your UI library

const DraftsViewer = ({ onLoadDraft }) => {
  return (
    <div className="flex flex-col items-start p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Drafts</h1>
      <div className="space-y-4 w-full">
        {drafts.map((draft) => (
          <div key={draft.id} className="border p-4 rounded shadow-md w-full max-w-lg min-w-[600px]">
            <h2 className="font-semibold">{draft.subject}</h2>
            <p className="text-gray-600"><strong>From:</strong> {draft.from}</p>
            <Button onClick={() => onLoadDraft(draft)} variant="outline" className="mt-2">
              Load Draft
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraftsViewer;