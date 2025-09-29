import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, FileText, Image, Link } from 'lucide-react';

interface SmartEmbedProps {
  url: string;
  className?: string;
}

const SmartEmbed: React.FC<SmartEmbedProps> = ({ url, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Forzar que empiece siempre colapsado
  React.useEffect(() => {
    setIsExpanded(false);
    console.log('SmartEmbed initialized for URL:', url, 'isExpanded:', isExpanded);
  }, []);

  const getEmbedType = (url: string) => {
    const domain = new URL(url).hostname.toLowerCase();

    // YouTube
    if (domain.includes('youtube.com') || domain.includes('youtu.be')) {
      return 'youtube';
    }

    // Twitter/X
    if (domain.includes('twitter.com') || domain.includes('x.com')) {
      return 'twitter';
    }

    // LinkedIn
    if (domain.includes('linkedin.com')) {
      return 'linkedin';
    }

    // Vimeo
    if (domain.includes('vimeo.com')) {
      return 'vimeo';
    }

    // GitHub
    if (domain.includes('github.com')) {
      return 'github';
    }

    // Instagram
    if (domain.includes('instagram.com')) {
      return 'instagram';
    }

    // TikTok
    if (domain.includes('tiktok.com')) {
      return 'tiktok';
    }

    // Medium
    if (domain.includes('medium.com')) {
      return 'medium';
    }

    // Substack
    if (domain.includes('substack.com')) {
      return 'substack';
    }

    // Images
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
      return 'image';
    }

    // PDFs
    if (url.match(/\.pdf$/i)) {
      return 'pdf';
    }

    return 'generic';
  };

  const getYouTubeEmbedId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getTweetId = (url: string): string | null => {
    const match = url.match(/\/status\/(\d+)/);
    return match ? match[1] : null;
  };

  const getVimeoId = (url: string): string | null => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const getEmbedIcon = (type: string) => {
    switch (type) {
      case 'youtube':
      case 'vimeo':
      case 'tiktok':
        return <Play className="h-4 w-4" />;
      case 'image':
        return <Image className="h-4 w-4" />;
      case 'pdf':
        return <FileText className="h-4 w-4" />;
      default:
        return <Link className="h-4 w-4" />;
    }
  };

  const getEmbedTitle = (type: string, url: string) => {
    const domain = new URL(url).hostname.replace('www.', '');

    switch (type) {
      case 'youtube':
        return 'YouTube Video';
      case 'twitter':
        return 'Tweet';
      case 'linkedin':
        return 'LinkedIn Post';
      case 'vimeo':
        return 'Vimeo Video';
      case 'github':
        return 'GitHub Repository';
      case 'instagram':
        return 'Instagram Post';
      case 'tiktok':
        return 'TikTok Video';
      case 'medium':
        return 'Medium Article';
      case 'substack':
        return 'Substack Post';
      case 'image':
        return 'Image';
      case 'pdf':
        return 'PDF Document';
      default:
        return domain;
    }
  };

  const renderSmallEmbed = () => {
    const embedType = getEmbedType(url);

    switch (embedType) {
      case 'youtube': {
        const videoId = getYouTubeEmbedId(url);
        if (!videoId) return null;

        return (
          <div
            className="flex items-center gap-2 p-2 bg-muted hover:bg-muted/80 border border-border rounded cursor-pointer transition-colors max-w-xs"
            onClick={() => {
              console.log('SmartEmbed small preview clicked - expanding embed for:', url);
              setIsExpanded(true);
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 300);
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/default.jpg`}
              alt="YouTube thumbnail"
              className="w-16 h-12 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-1">
                <Play className="h-3 w-3 text-red-600" />
                <span className="text-xs text-muted-foreground">YouTube</span>
              </div>
              <div className="text-sm font-medium truncate">Video</div>
            </div>
          </div>
        );
      }

      case 'twitter': {
        return (
          <div
            className="flex items-center gap-2 p-2 bg-muted hover:bg-muted/80 border border-border rounded cursor-pointer transition-colors max-w-xs"
            onClick={() => {
              setIsExpanded(true);
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 300);
            }}
          >
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs">𝕏</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">Twitter/X</div>
              <div className="text-sm font-medium truncate">Tweet</div>
            </div>
          </div>
        );
      }

      default: {
        return (
          <div
            className="flex items-center gap-2 p-2 bg-muted hover:bg-muted/80 border border-border rounded cursor-pointer transition-colors max-w-xs"
            onClick={() => {
              setIsExpanded(true);
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 300);
            }}
          >
            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
              {getEmbedIcon(embedType)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">{getEmbedTitle(embedType, url)}</div>
              <div className="text-sm font-medium truncate">Link</div>
            </div>
          </div>
        );
      }
    }
  };

  const renderLargeEmbed = () => {
    const embedType = getEmbedType(url);

    switch (embedType) {
      case 'youtube': {
        const videoId = getYouTubeEmbedId(url);
        if (!videoId) return null;

        return (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        );
      }

      case 'vimeo': {
        const videoId = getVimeoId(url);
        if (!videoId) return null;

        return (
          <iframe
            width="100%"
            height="315"
            src={`https://player.vimeo.com/video/${videoId}`}
            title="Vimeo video player"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        );
      }

      case 'twitter': {
        const tweetId = getTweetId(url);
        if (!tweetId) return null;

        return (
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="text-sm text-muted-foreground mb-2">Twitter/X Post</div>
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => window.open(url, '_blank')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Tweet
              </Button>
            </div>
          </div>
        );
      }

      case 'linkedin':
        return (
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="text-sm text-muted-foreground mb-2">LinkedIn Post</div>
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => window.open(url, '_blank')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View on LinkedIn
              </Button>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="border border-border rounded-lg overflow-hidden">
            <img
              src={url}
              alt="Embedded content"
              className="w-full h-auto max-h-96 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        );

      case 'pdf':
        return (
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="text-sm text-muted-foreground mb-2">PDF Document</div>
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => window.open(url, '_blank')}
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Open PDF
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="text-sm text-muted-foreground mb-2">
              {getEmbedTitle('generic', url)}
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => window.open(url, '_blank')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Link
              </Button>
            </div>
          </div>
        );
    }
  };

  const embedType = getEmbedType(url);
  const embedTitle = getEmbedTitle(embedType, url);
  const icon = getEmbedIcon(embedType);

  return (
    <div className={`${className}`}>
      {/* Small Embed State - Show preview */}
      {!isExpanded && renderSmallEmbed()}

      {/* Expanded State - Show full embed */}
      {isExpanded && (
        <div className="mt-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {icon}
              <span>{embedTitle}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0"
            >
              ×
            </Button>
          </div>

          {isLoading ? (
            <div className="border border-border rounded-lg p-4 bg-card text-center">
              <div className="text-sm text-muted-foreground">Loading...</div>
            </div>
          ) : (
            renderLargeEmbed()
          )}
        </div>
      )}
    </div>
  );
};

export default SmartEmbed;