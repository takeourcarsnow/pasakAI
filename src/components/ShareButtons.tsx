import React, { useState } from 'react';
import { RiFileCopyLine, RiCheckLine, RiTwitterLine, RiFacebookLine } from 'react-icons/ri';

interface ShareButtonsProps {
  story: string;
  visible: boolean;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ story, visible }) => {
  const [copyText, setCopyText] = useState('Kopijuoti pasaką');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(story);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (e) {
      // Log the error for debugging and show a user-friendly alert
      // eslint-disable-next-line no-console
      console.error('Copy failed:', e);
      alert('Nepavyko nukopijuoti teksto');
    }
  };

  const shareStory = (platform: 'twitter' | 'facebook') => {
    const shareText = encodeURIComponent(`Pasaka sukurta su PasakAI:\n\n${story.substring(0, 200)}...`);
    const shareUrl = encodeURIComponent(window.location.href);
    
    const shareLinks = {
      twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`
    };
    
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  if (!visible) return null;

  return (
    <div className="share-buttons" style={{ display: 'flex' }}>
      <button className={`share-btn copy ${copySuccess ? 'copy-success' : ''}`} onClick={handleCopy}>
        <span className="share-icon">
          {copySuccess ? <RiCheckLine size={24} /> : <RiFileCopyLine size={24} />}
        </span>
      </button>
      <button className="share-btn twitter" onClick={() => shareStory('twitter')}>
        <span className="share-icon">
          <RiTwitterLine size={24} />
        </span>
      </button>
      <button className="share-btn facebook" onClick={() => shareStory('facebook')}>
        <span className="share-icon">
          <RiFacebookLine size={24} />
        </span>
      </button>
    </div>
  );
};