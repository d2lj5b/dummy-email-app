import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Paperclip, ChevronDown } from 'lucide-react';

const EmailComposer = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    // Simulate sending delay
    setTimeout(() => {
      setIsSending(false);
      setShowConfirmation(true);
      // Reset form after "sending"
      setEmailData({ to: '', subject: '', body: '' });
      // Hide confirmation after 3 seconds
      setTimeout(() => setShowConfirmation(false), 3000);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="bg-gray-50 border-b p-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-16 text-gray-500">From:</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">user@example.com</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-16 text-gray-500">To:</span>
            <input
              type="email"
              value={emailData.to}
              onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
              className="flex-1 bg-transparent focus:outline-none"
              placeholder="recipient@example.com"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-16 text-gray-500">Subject:</span>
            <input
              type="text"
              value={emailData.subject}
              onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
              className="flex-1 bg-transparent focus:outline-none"
              placeholder="Email subject"
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <textarea
          value={emailData.body}
          onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
          className="w-full h-64 resize-none focus:outline-none"
          placeholder="Write your message here..."
        />
      </CardContent>
      
      <CardFooter className="border-t p-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Paperclip className="h-4 w-4 mr-2" />
            Attach
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          {showConfirmation && (
            <span className="text-green-600">Email sent successfully!</span>
          )}
          <Button 
            onClick={handleSend}
            disabled={isSending}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isSending ? (
              <span className="flex items-center">
                Sending...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="h-4 w-4 mr-2" />
                Send
              </span>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EmailComposer;
