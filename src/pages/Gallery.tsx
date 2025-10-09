import { motion } from 'framer-motion';
import { useState } from 'react';
import { Image, Filter, X, Eye, Download } from 'lucide-react';

type Category = 'all' | 'railways' | 'highways' | 'bridges' | 'survey' | 'construction';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  location: string;
  year: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Railway Bridge Construction',
    category: 'railways',
    image: 'https://images.pexels.com/photos/4254893/pexels-photo-4254893.jpeg',
    description: 'Advanced railway bridge construction using modern engineering techniques',
    location: 'Andhra Pradesh',
    year: '2024'
  },
  {
    id: 2,
    title: 'Highway Interchange',
    category: 'highways',
    image: 'https://images.pexels.com/photos/3952038/pexels-photo-3952038.jpeg',
    description: 'Complex highway interchange design and construction',
    location: 'Delhi NCR',
    year: '2023'
  },
  {
    id: 3,
    title: 'Bridge Foundation Work',
    category: 'bridges',
    image: 'https://images.pexels.com/photos/163036/mountain-field-alpine-163036.jpeg',
    description: 'Deep foundation work for major bridge construction',
    location: 'Western Ghats',
    year: '2024'
  },
  {
    id: 4,
    title: 'Geospatial Survey',
    category: 'survey',
    image: 'https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg',
    description: 'Advanced geospatial surveying for infrastructure planning',
    location: 'Pan-India',
    year: '2023'
  },
  {
    id: 5,
    title: 'Construction Site',
    category: 'construction',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    description: 'Modern construction techniques and project management',
    location: 'Mumbai',
    year: '2024'
  },
  {
    id: 6,
    title: 'Railway Track Laying',
    category: 'railways',
    image: 'https://images.pexels.com/photos/161963/satellite-space-spacecraft-orbit-161963.jpeg',
    description: 'Precision railway track installation and alignment',
    location: 'Eastern India',
    year: '2023'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Image },
  { id: 'railways', label: 'Railways', icon: Image },
  { id: 'highways', label: 'Highways', icon: Image },
  { id: 'bridges', label: 'Bridges', icon: Image },
  { id: 'survey', label: 'Survey', icon: Image },
  { id: 'construction', label: 'Construction', icon: Image }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden border-b border-white/10 bg-slate-950"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
              <Image className="w-8 h-8 text-sky-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Project <span className="text-sky-400">Gallery</span>
              </h1>
              <p className="text-lg text-slate-400 mt-2">Showcasing our engineering excellence</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Explore our portfolio of infrastructure projects across railways, highways, and bridges.
          </p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-sky-500/10 border border-sky-400/30 text-white'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-medium uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-300">{item.year}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{item.location}</span>
                  <Eye className="w-4 h-4 text-sky-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Image className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">No projects found</h3>
            <p className="text-slate-500">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-slate-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-medium uppercase">
                      {selectedImage.category}
                    </span>
                    <span className="text-xs text-slate-300">{selectedImage.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-slate-300 mb-3">{selectedImage.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{selectedImage.location}</span>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-300 hover:bg-sky-500/20 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-sky-400/20 bg-sky-500/5 p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Our Project Portfolio</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '6', label: 'States Covered' },
              { value: '100%', label: 'Quality Standards' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-sky-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}