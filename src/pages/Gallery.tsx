import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Film, ImageIcon } from 'lucide-react';
import Seo from '../components/Seo';

const BASE_URL = 'http://miraiconsultancy.co.in';

type FileType = 'image' | 'video' | 'pdf';
type CategoryType = 'all' | 'images' | 'videos' | 'pdfs';

interface GalleryFile {
  name: string;
  type: FileType;
  thumbnail?: string;
}

const getAssetUrl = (fileName: string) => encodeURI(`/gallery/${fileName}`);

const galleryFiles: GalleryFile[] = [
  { name: 'pexels-cottonbro-9950477.jpg', type: 'image' },
  { name: 'pexels-felix-antoine-coutu-174902-32211979.jpg', type: 'image' },
  { name: 'pexels-magda-ehlers-pexels-34182312.jpg', type: 'image' },
  { name: 'pexels-qaarif-16137139.jpg', type: 'image' },
    { name: '11.png', type: 'image' },

  { name: '2.jpg', type: 'image' },
  { name: '3.jpg', type: 'image' },
  { name: '4.jpg', type: 'image' },
  { name: 'LC-274,GCP-1.jpeg', type: 'image' },
  { name: 'LC-274,TBM-4.jpeg', type: 'image' },
  { name: 'LC-335,TBM-19.jpeg', type: 'image' },
  { name: 'LC-336,GCP-3.jpeg', type: 'image' },
  { name: 'LC-339,GCP-3.jpeg', type: 'image' },
    { name: 'WhatsApp Image 2025-10-10 at 17.37.37_a14462ef.jpg', type: 'image' },

];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedFile, setSelectedFile] = useState<GalleryFile | null>(null);

  const categories = [
    { id: 'all' as CategoryType, label: 'All Projects', icon: null, count: galleryFiles.length },
    { id: 'images' as CategoryType, label: 'Images', icon: ImageIcon, count: galleryFiles.filter(f => f.type === 'image').length },
    { id: 'videos' as CategoryType, label: 'Videos', icon: Film, count: galleryFiles.filter(f => f.type === 'video').length },
    { id: 'pdfs' as CategoryType, label: 'Documents', icon: FileText, count: galleryFiles.filter(f => f.type === 'pdf').length },
  ];

  const filteredFiles = selectedCategory === 'all' 
    ? galleryFiles 
    : galleryFiles.filter(file => {
        if (selectedCategory === 'images') return file.type === 'image';
        if (selectedCategory === 'videos') return file.type === 'video';
        if (selectedCategory === 'pdfs') return file.type === 'pdf';
        return true;
      });

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050a1f] to-[#0b1126] pt-24 pb-16">
      <Seo
        title="Mirai Consultancy Project Gallery | Railway & Highway Portfolio"
        description="View Mirai Consultancy's gallery of railway, bridge and highway engineering projects including ROB GADs and geospatial visuals."
        canonical={`${BASE_URL}/gallery`}
        keywords={[
          'Mirai Consultancy gallery',
          'railway project images',
          'road over bridge GADs',
          'infrastructure engineering portfolio',
        ]}
        ogImage={`${BASE_URL}/Mirailogo.png`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Mirai Consultancy Project Gallery',
          url: `${BASE_URL}/gallery`,
          description:
            'Browse Mirai Consultancy projects across railways, bridges, highways and geospatial mapping.',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of engineering excellence across infrastructure projects
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-lg shadow-sky-500/40'
                    : 'bg-white/5 text-slate-200 hover:bg-white/10 backdrop-blur-md border border-white/10'
                }`}
              >
                {Icon && <Icon size={20} />}
                <span>{category.label}</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">{category.count}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFiles.map((file, index) => (
              <motion.div
                key={file.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-sky-400/60 transition-all cursor-pointer shadow-[0_15px_45px_rgba(8,47,73,0.35)]"
                onClick={() => setSelectedFile(file)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  {file.type === 'image' && (
                    <img
                      src={getAssetUrl(file.name)}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  {file.type === 'video' && (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/60 to-indigo-900/40 flex items-center justify-center">
                      <Film size={64} className="text-sky-400" />
                    </div>
                  )}
                  {file.type === 'pdf' && (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800/70 to-blue-900/40 flex items-center justify-center">
                      <FileText size={64} className="text-indigo-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-3 flex items-center justify-end">
                  <span className="inline-flex rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                    {file.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-sky-500/30 rounded-2xl px-8 py-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-2">
              Portfolio Expansion
            </h3>
            <p className="text-slate-200">
              More projects will be updated soon. Stay tuned for additional showcases of our engineering excellence.
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedFile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedFile(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="relative max-w-6xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedFile(null)} className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
              <div className="w-full h-full overflow-auto">
                {selectedFile.type === 'image' && (
                  <img src={getAssetUrl(selectedFile.name)} alt="" className="w-full h-auto" />
                )}
                {selectedFile.type === 'video' && (
                  <video src={getAssetUrl(selectedFile.name)} controls className="w-full h-auto" />
                )}
                {selectedFile.type === 'pdf' && (
                  <iframe src={getAssetUrl(selectedFile.name)} className="w-full h-[90vh]" title={selectedFile.name} />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
