import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ContentCollections } from '@/types/content';

interface ContentContextType {
  content: Partial<ContentCollections>;
  loading: boolean;
  error: string | null;
  refreshContent: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [content, setContent] = useState<Partial<ContentCollections>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch hero content
      const heroDoc = await getDoc(doc(db, 'content', 'hero'));
      
      // Fetch about content
      const aboutDoc = await getDoc(doc(db, 'content', 'about'));
      
      // Fetch featured works
      const featuredWorksSnapshot = await getDocs(collection(db, 'featuredWorks'));
      const featuredWorks = featuredWorksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Fetch testimonials
      const testimonialsSnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonials = testimonialsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Fetch wedding video content
      const weddingVideoDoc = await getDoc(doc(db, 'content', 'weddingVideo'));
      
      setContent({
        hero: heroDoc.exists() ? { id: heroDoc.id, ...heroDoc.data() } : undefined,
        about: aboutDoc.exists() ? { id: aboutDoc.id, ...aboutDoc.data() } : undefined,
        featuredWorks: featuredWorks as any,
        testimonials: testimonials as any,
        weddingVideo: weddingVideoDoc.exists() ? { id: weddingVideoDoc.id, ...weddingVideoDoc.data() } : undefined,
      });
    } catch (err) {
      console.error('Error fetching content:', err);
      setError('Failed to load content. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const refreshContent = () => fetchContent();

  return (
    <ContentContext.Provider value={{ content, loading, error, refreshContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider; 