import { useEffect } from 'react';

const head = typeof document !== 'undefined' ? document.head : null;

function upsertTag(selector: string, create: () => HTMLElement, update: (el: HTMLElement) => void) {
  if (!head) return;
  let element = head.querySelector(selector) as HTMLElement | null;
  if (!element) {
    element = create();
    head.appendChild(element);
  }
  update(element);
}

function removeNodes(nodes: HTMLElement[]) {
  if (!head) return;
  nodes.forEach((node) => {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

export type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: unknown | unknown[];
};

export default function Seo({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
}: SeoProps) {
  useEffect(() => {
    if (!head || typeof document === 'undefined') {
      return;
    }
    const structuredNodes: HTMLElement[] = [];

    if (title) {
      document.title = title;
    }

    if (description) {
      upsertTag('meta[name="description"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', description);
      });
    }

    if (keywords?.length) {
      upsertTag('meta[name="keywords"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'keywords');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', keywords.join(', '));
      });
    }

    if (canonical) {
      upsertTag('link[rel="canonical"]', () => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        return link;
      }, (link) => {
        link.setAttribute('href', canonical);
      });
    }

    const finalOgTitle = ogTitle ?? title;
    const finalOgDescription = ogDescription ?? description;
    const finalOgImage = ogImage;

    if (finalOgTitle) {
      upsertTag('meta[property="og:title"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', finalOgTitle);
      });
    }

    if (finalOgDescription) {
      upsertTag('meta[property="og:description"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', finalOgDescription);
      });
    }

    upsertTag('meta[property="og:type"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      return meta;
    }, (meta) => {
      meta.setAttribute('content', ogType);
    });

    if (canonical) {
      upsertTag('meta[property="og:url"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', canonical);
      });
    }

    if (finalOgImage) {
      upsertTag('meta[property="og:image"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', finalOgImage);
      });
    }

    const finalTwitterTitle = twitterTitle ?? title;
    const finalTwitterDescription = twitterDescription ?? description;
    const finalTwitterImage = twitterImage ?? finalOgImage;

    upsertTag('meta[name="twitter:card"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:card');
      return meta;
    }, (meta) => {
      meta.setAttribute('content', twitterCard);
    });

    if (finalTwitterTitle) {
      upsertTag('meta[name="twitter:title"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'twitter:title');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', finalTwitterTitle);
      });
    }

    if (finalTwitterDescription) {
      upsertTag('meta[name="twitter:description"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'twitter:description');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', finalTwitterDescription);
      });
    }

    if (finalTwitterImage) {
      upsertTag('meta[name="twitter:image"]', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'twitter:image');
        return meta;
      }, (meta) => {
        meta.setAttribute('content', finalTwitterImage);
      });
    }

    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach((data) => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = JSON.stringify(data);
        head.appendChild(script);
        structuredNodes.push(script);
      });
    }

    return () => {
      removeNodes(structuredNodes);
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData,
  ]);

  return null;
}
