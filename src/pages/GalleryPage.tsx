import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Camera, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Copy the galleryImages array from your Gallery component here
const galleryImages = [
  // ... your gallery images data
];

const categories = ["All", "Travel", "Family", "Friends", "Achievements", "Celebrations", "Work"];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const navigate = useNavigate();

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleGoBack}
              className="flex items-center gap-2 hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary" />
              <span className="font-semibold">My Gallery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Camera className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Life Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of moments, memories, and milestones captured through my journey
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                  : "hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid - Copy the grid section from your Gallery component */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleImageClick(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-white/80 mb-2">{image.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {image.date}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {image.location}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(image.id);
                      }}
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          likedImages.includes(image.id) ? "fill-red-500 text-red-500" : ""
                        }`} 
                      />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Category Tag */}
              <span className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full">
                {image.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal - Copy from your Gallery component */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
              onClick={handleCloseModal}
            >
              {/* ... lightbox content ... */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;