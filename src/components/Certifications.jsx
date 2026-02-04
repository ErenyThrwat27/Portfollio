// Certifications.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  Download, 
  ExternalLink, 
  Filter, 
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Globe,
  GraduationCap,
  Star,
  CheckCircle,
  Maximize2
} from 'lucide-react';

// استيراد الصور من assets
import RTCImage from '../assets/images/RTC.jpeg';

import WomenTechstersImage from '../assets/images/bootcamp.jpeg';
import UNWomenImage from '../assets/images/laravel.jpeg';
import HumaVolveImage from '../assets/images/techcell.png';
import DatabaseImage from '../assets/images/php.jpeg';

// قائمة الشهادات
const certificateImages = [
  {
    id: 1,
    title: 'Women Techsters Bootcamp 2025',
    issuer: 'Tech4Dev • Microsoft',
    date: 'November 2025',
    imageUrl:WomenTechstersImage ,
    description: 'Selected from 10,000+ global applicants for intensive frontend development training',
    category: 'bootcamp',
    verified: true
  },
  {
    id: 2,
    title: 'UN Women Laravel Scholarship',
    issuer: 'UN Women • Tech Initiative',
    date: 'OCT 2024',
    imageUrl: UNWomenImage, 
    description: 'Advanced Laravel training covering MVC, REST APIs, and authentication systems',
    category: 'laravel',
    verified: true
  },
  {
    id: 3,
    title: 'Frontend Development Course',
    issuer: 'RTC Training Center',
    date: 'October 2024',
    imageUrl: RTCImage, 
    description: 'Comprehensive frontend development training with modern web technologies',
    category: 'frontend',
    verified: true
  },
  {
    id: 4,
    title: 'Huma-Volve Backend Training',
    issuer: 'Huma-Volve',
    date: 'March 2025',
    imageUrl: HumaVolveImage ,
    description: 'Intensive backend development focusing on API design and performance',
    category: 'backend',
    verified: true
  },
  {
    id: 5,
    title: 'UN Women PHP Scholarship',
    issuer: 'UN Women • Tech Initiative',
    date: 'June 2024',
    imageUrl: DatabaseImage , 
    description: 'Practical database management and optimization skills',
    category: 'php',
    verified: false
  }
];

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'All Certificates', count: certificateImages.length },
    { id: 'bootcamp', label: 'Bootcamps', count: certificateImages.filter(c => c.category === 'bootcamp').length },
    { id: 'backend', label: 'Backend training', count: certificateImages.filter(c => c.category === 'backend').length },
    { id: 'frontend', label: 'Frontend', count: certificateImages.filter(c => c.category === 'frontend').length },
    { id: 'php', label: 'PHP', count: certificateImages.filter(c => c.category === 'php').length },
    { id: 'laravel', label: 'Laravel', count: certificateImages.filter(c => c.category === 'laravel').length }
  ];

  const filteredCertificates = activeFilter === 'all' 
    ? certificateImages 
    : certificateImages.filter(cert => cert.category === activeFilter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredCertificates.length - 1 : prevIndex - 1
    );
    setSelectedImage(filteredCertificates[currentIndex === 0 ? filteredCertificates.length - 1 : currentIndex - 1]);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredCertificates.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(filteredCertificates[currentIndex === filteredCertificates.length - 1 ? 0 : currentIndex + 1]);
  };

  const downloadCertificate = (imageUrl, title) => {
    // إذا كانت الصورة مستوردة (كائن)
    if (typeof imageUrl === 'object') {
      // إنشاء رابط للصورة
      const imageSrc = URL.createObjectURL(imageUrl);
      const link = document.createElement('a');
      link.href = imageSrc;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(imageSrc);
    } else {
      // إذا كانت الصورة رابط URL
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Professional Certifications</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Certificates</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Verified certificates from recognized training programs and institutions
          </p>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 lg:mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="text-2xl font-bold text-white mb-1">{certificateImages.length}</div>
            <div className="text-sm text-gray-400">Total Certificates</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="text-2xl font-bold text-green-400 mb-1">{certificateImages.filter(c => c.verified).length}</div>
            <div className="text-sm text-gray-400">Verified</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="text-2xl font-bold text-yellow-400 mb-1">2023-2025</div>
            <div className="text-sm text-gray-400">Time Period</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="text-2xl font-bold text-purple-400 mb-1">4</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
        </motion.div> */}

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'text-white shadow-lg shadow-blue-900/30'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span className="relative z-10">
                {filter.label}
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/10">
                  {filter.count}
                </span>
              </span>
              {activeFilter === filter.id && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </>
              )}
              {activeFilter !== filter.id && (
                <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors"></div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              
              {/* Certificate Card */}
              <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-blue-900/20">
                
                {/* Certificate Preview */}
                <div className="relative h-64 overflow-hidden bg-gray-900 cursor-pointer" onClick={() => openLightbox(cert, index)}>
                  {/* Certificate Image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231f2937'/%3E%3Cpath d='M100,120 L300,120 M100,150 L300,150 M100,180 L300,180' stroke='%23374151' stroke-width='2'/%3E%3Ccircle cx='200' cy='100' r='20' fill='%23374151'/%3E%3C/svg%3E";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Preview Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div className="mb-4">
                        <GraduationCap className="w-12 h-12 text-blue-400/70" />
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white/90 mb-2">{cert.title.split(' ').slice(0, 2).join(' ')}</div>
                        <div className="text-sm text-gray-300">{cert.issuer.split('•')[0].trim()}</div>
                        <div className="text-xs text-gray-400 mt-4 flex items-center gap-1">
                          <ZoomIn className="w-3 h-3" />
                          Click to view
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Verified Badge */}
                  {cert.verified && (
                    <div className="absolute top-4 right-4">
                      <div className="px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-xs text-green-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </div>
                    </div>
                  )}
                </div>

                {/* Certificate Info */}
                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <div className="flex items-center gap-2">
                      {cert.verified && <CheckCircle className="w-4 h-4 text-green-400" />}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">{cert.date}</span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mt-3 line-clamp-2">
                      {cert.description}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-4">
                    <div className="inline-flex px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">
                      {cert.category.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="flex gap-3">
                    <button
                      onClick={() => openLightbox(cert, index)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 hover:border-blue-500/50 rounded-lg text-blue-300 hover:text-white transition-all group/btn"
                    >
                      <Maximize2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      View Full Size
                    </button>
                    <button
                      onClick={() => downloadCertificate(cert.imageUrl, cert.title)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-gray-300 hover:text-white transition-all group/btn"
                      title="Download Certificate"
                    >
                      <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex p-4 rounded-2xl bg-white/5 mb-4">
              <Award className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No certificates found</h3>
            <p className="text-gray-400">
              Try selecting a different filter category
            </p>
          </motion.div>
        )}

        {/* Download All Button */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => {
              
              alert('Feature coming soon!');
            }}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-gray-300 hover:text-white font-semibold rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all overflow-hidden"
          >
            <span className="relative flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download All Certificates (ZIP)
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all" />
            </span>
          </button>
        </motion.div> */}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Content */}
              <div className="h-full flex flex-col lg:flex-row">
                {/* Certificate Image */}
                <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
                  <div className="relative w-full max-w-3xl h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl">
                    {/* Certificate Frame */}
                    <div className="absolute inset-0 border-8 border-blue-500/20"></div>
                    <div className="absolute inset-8 border-4 border-blue-500/10"></div>
                    
                    {/* Actual Certificate Image */}
                    <img
                      src={selectedImage.imageUrl}
                      alt={selectedImage.title}
                      className="w-full h-full object-contain p-4 lg:p-8 bg-white"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='white'/%3E%3Crect x='50' y='50' width='700' height='500' fill='%23f0f0f0'/%3E%3Ctext x='400' y='150' text-anchor='middle' font-family='Arial' font-size='24' fill='%23333'%3ECertificate Preview%3C/text%3E%3Ctext x='400' y='200' text-anchor='middle' font-family='Arial' font-size='18' fill='%23666'%3EImage not available%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="lg:w-1/3 p-6 lg:p-8 bg-gray-900/50 backdrop-blur-sm overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                      <div className="flex items-center gap-2 text-blue-400 mb-4">
                        <Globe className="w-4 h-4" />
                        <span>{selectedImage.issuer}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Description</h4>
                        <p className="text-gray-300">{selectedImage.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">Issue Date</div>
                          <div className="text-sm font-semibold text-white">{selectedImage.date}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">Category</div>
                          <div className="text-sm font-semibold text-white capitalize">{selectedImage.category}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">Status</div>
                          <div className={`text-sm font-semibold ${selectedImage.verified ? 'text-green-400' : 'text-yellow-400'}`}>
                            {selectedImage.verified ? 'Verified' : 'Pending Verification'}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">Format</div>
                          <div className="text-sm font-semibold text-white">Digital Certificate</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-6 border-t border-white/10">
                      <button
                        onClick={() => downloadCertificate(selectedImage.imageUrl, selectedImage.title)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button 
                        onClick={() => window.open(selectedImage.imageUrl, '_blank')}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open
                      </button>
                    </div>

                    {/* Counter */}
                    <div className="text-center text-sm text-gray-500 pt-4">
                      {currentIndex + 1} of {filteredCertificates.length}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-grid {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Certifications;