// Hero Section
export interface HeroContent {
  id: string;
  videoUrl: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

// About Section
export interface AboutContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  stats: {
    weddings: number;
    clients: number;
    experience: number;
  };
}

// Featured Work
export interface FeaturedWork {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoId: string;
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
  rating: number;
}

// Wedding Video Section
export interface WeddingVideoContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

// Content Collection Types
export interface ContentCollections {
  hero: HeroContent;
  about: AboutContent;
  featuredWorks: FeaturedWork[];
  testimonials: Testimonial[];
  weddingVideo: WeddingVideoContent;
} 