import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SemesterCard from '@/components/SemesterCard';
import CodeBackground from '@/components/CodeBackground';
import wdLogo from '@/assets/wd-logo.jpg';

const Index = () => {
  const { t } = useTranslation();

  const scrollToSemesters = () => {
    document.getElementById('semesters')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <CodeBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl animate-pulse-slow" />
                <img
                  src={wdLogo}
                  alt="WD Informatique"
                  className="relative w-64 md:w-80 h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">{t('hero.subtitle')}</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSemesters}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold shadow-lg glow-effect overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('hero.cta')}
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Semesters Section */}
      <section id="semesters" className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('semesters.title')}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SemesterCard
              semester={1}
              title={t('semesters.s1.title')}
              description={t('semesters.s1.description')}
              buttonText={t('semesters.s1.button')}
              delay={0.1}
            />
            <SemesterCard
              semester={2}
              title={t('semesters.s2.title')}
              description={t('semesters.s2.description')}
              buttonText={t('semesters.s2.button')}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
