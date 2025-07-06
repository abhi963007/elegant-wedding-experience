import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useContent } from '@/context/ContentContext';
import { FeaturedWork } from '@/types/content';
import { Skeleton } from '@/components/ui/skeleton';

// Fallback data in case Firebase data is not available
const fallbackFeaturedWorks = [
  {
    id: "1",
    title: "Sarah & Michael's Elegant Garden Wedding",
    category: "Wedding Film",
    thumbnail: "/assets/Images/Works-pic/ALB_0084 copy.jpg",
    videoId: "example1"
  },
  {
    id: "2",
    title: "Emma & John's Beach Ceremony",
    category: "Wedding Film",
    thumbnail: "/assets/Images/Works-pic/ALB_0161 copy.jpg",
    videoId: "example2"
  },
  {
    id: "3",
    title: "Luxury Destination Wedding",
    category: "Pre-Wedding",
    thumbnail: "/assets/Images/Works-pic/ALB_0609 copy.jpg",
    videoId: "example3"
  },
  {
    id: "4",
    title: "Traditional Wedding Celebration",
    category: "Event",
    thumbnail: "/assets/Images/Works-pic/ALB_0755 copy.jpg",
    videoId: "example4"
  },
  {
    id: "5",
    title: "Vineyard Wedding Cinematic Film",
    category: "Wedding Film",
    thumbnail: "/assets/Images/Works-pic/ALB_0842 copy.jpg",
    videoId: "example5"
  },
  {
    id: "6",
    title: "Romantic Pre-Wedding Shoot",
    category: "Pre-Wedding",
    thumbnail: "/assets/Images/Works-pic/ALB_1041 copy.jpg",
    videoId: "example6"
  }
];

const FeaturedWorkSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { content, loading } = useContent();
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  // Use content from Firebase if available, otherwise use fallback data
  const featuredWorks = content.featuredWorks?.length ? content.featuredWorks : fallbackFeaturedWorks;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleSlideChange = React.useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    api.on("select", handleSlideChange);
    return () => {
      api.off("select", handleSlideChange);
    };
  }, [api, handleSlideChange]);

  if (loading) {
    return (
      <section className="section-padding bg-secondary py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-0.5 w-20 mx-auto mb-6" />
            <Skeleton className="h-16 max-w-2xl mx-auto" />
          </div>
          <div className="px-4 md:px-8">
            <Skeleton className="h-[400px] w-full max-w-4xl mx-auto rounded-md" />
            <div className="mt-6 text-center max-w-2xl mx-auto">
              <Skeleton className="h-6 w-32 mx-auto mb-2" />
              <Skeleton className="h-8 w-64 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="section-padding bg-secondary py-20">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Featured <span className="gold-gradient">Work</span></h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of cinematic wedding films and video editing projects that have captivated hearts and created lasting memories.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="px-4 md:px-8"
        >
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {featuredWorks.map((work: FeaturedWork) => (
                <CarouselItem key={work.id} className="basis-full">
                  <motion.div variants={item} className="group h-full">
                    <div className="relative aspect-video overflow-hidden rounded-md shadow-lg max-w-4xl mx-auto">
                      <img 
                        src={work.thumbnail} 
                        alt={work.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110">
                          <Play className="text-white h-8 w-8" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6 text-center max-w-2xl mx-auto">
                      <span className="text-sm text-gold uppercase tracking-wider font-medium">{work.category}</span>
                      <h3 className="text-2xl font-medium mt-2">{work.title}</h3>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center items-center gap-6 mt-10">
              <CarouselPrevious className="relative static translate-y-0 hover:bg-gold hover:text-white transition-colors" />
              <div className="flex gap-2">
                {featuredWorks.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      current === index ? "bg-gold scale-125" : "bg-gray-300"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static translate-y-0 hover:bg-gold hover:text-white transition-colors" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
