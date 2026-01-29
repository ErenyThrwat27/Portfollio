import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, Loader } from 'lucide-react';

const DownloadCVButton = ({ 
  variant = 'primary', // 'primary', 'secondary', 'navbar', 'outline'
  className = '',
  showIcon = true,
  fullText = true
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    
    if (isDownloading || isDownloaded) return;
    
    setIsDownloading(true);
    
    // محاكاة عملية التحميل
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      
      // رابط تحميل الـ CV الحقيقي
      const link = document.createElement('a');
      link.href = '/cv/Ereny_Thrwat_CV.pdf';
      link.download = 'Ereny_Thrwat_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // إعادة الزر لحالته الأصلية بعد 3 ثواني
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
    }, 1000);
  };

  // الأنماط حسب الـ variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'navbar':
        return {
          bg: 'bg-green-600 hover:bg-green-700',
          text: 'text-white',
          shadow: 'shadow-lg hover:shadow-green-500/30',
          size: 'px-4 py-2 text-sm',
          iconSize: 'w-4 h-4',
          border: 'border-0'
        };
      case 'secondary':
        return {
          bg: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700',
          text: 'text-white',
          shadow: 'shadow-lg hover:shadow-emerald-500/30',
          size: 'px-6 py-3 text-base',
          iconSize: 'w-5 h-5',
          border: 'border-0'
        };
      case 'outline': // جديد: مثل Contact Me
        return {
          bg: 'bg-transparent hover:bg-white/10',
          text: 'text-gray-300 hover:text-white',
          shadow: 'hover:shadow-lg hover:shadow-white/15',
          size: 'px-8 py-3 text-base sm:text-lg font-semibold',
          iconSize: 'w-5 h-5',
          border: 'border border-gray-300 hover:border-white'
        };
      default: // primary
        return {
          bg: 'bg-gradient-to-r from-primary to-blue-600 hover:from-blue-700 hover:to-primary',
          text: 'text-white',
          shadow: 'shadow-xl hover:shadow-blue-500/30',
          size: 'px-8 py-3 text-lg font-semibold',
          iconSize: 'w-5 h-5',
          border: 'border-0'
        };
    }
  };

  const styles = getButtonStyles();

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ 
        scale: variant === 'navbar' ? 1.05 : 1.08, 
        y: variant === 'navbar' ? -2 : -4,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.96 }}
      disabled={isDownloading || isDownloaded}
      className={`
        ${styles.bg}
        ${styles.text}
        ${styles.size}
        ${styles.shadow}
        ${styles.border}
        ${className}
        rounded-full
        font-medium
        transition-all
        duration-300
        flex
        items-center
        justify-center
        gap-2
        disabled:opacity-80
        disabled:cursor-not-allowed
        relative
        overflow-hidden
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-opacity-50
      `}
      aria-label="Download CV"
      title="Download my resume (PDF)"
    >
      {/* تأثير الخلفية المتحرك (يظهر فقط لغير الـ outline) */}
      {variant !== 'outline' && isDownloading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "linear"
          }}
        />
      )}
      
      {/* المحتوى */}
      <span className="relative z-10 flex items-center gap-2">
        {isDownloading ? (
          <>
            <Loader className={`${styles.iconSize} animate-spin`} />
            <span>Downloading...</span>
          </>
        ) : isDownloaded ? (
          <>
            <Check className={`${styles.iconSize}`} />
            <span>Downloaded!</span>
          </>
        ) : (
          <>
            {showIcon && <Download className={`${styles.iconSize}`} />}
            <span>
              {fullText ? 'Download CV' : variant === 'navbar' ? 'CV' : 'Download'}
            </span>
          </>
        )}
      </span>
      
      {/* مؤشر التحميل (يظهر فقط لغير الـ outline) */}
      {variant !== 'outline' && isDownloading && (
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-white/50"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: "linear" }}
        />
      )}
    </motion.button>
  );
};

export default DownloadCVButton;