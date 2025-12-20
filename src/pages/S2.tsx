import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CodeBackground from '@/components/CodeBackground';

const S2_DRIVE_LINK = 'https://drive.google.com/drive/folders/1LPuGqJCLk6RbeCcIgOSfaoS5lvDSztma';

const S2 = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative">
      <CodeBackground />
      <Header />

      <main className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('nav.home')}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6 shadow-lg glow-effect">
              <span className="text-3xl font-bold text-white">S2</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {t('s2Page.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t('s2Page.subtitle')}
            </p>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <motion.a
              href={S2_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card px-8 py-5 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">{t('s2Page.accessAll')}</h3>
                <p className="text-sm text-muted-foreground">Google Drive</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 ml-4" />
            </motion.a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default S2;
