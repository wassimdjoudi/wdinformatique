import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, LucideIcon } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

const SubjectCard = ({ title, icon: Icon, color, delay = 0 }: SubjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="glass-card p-6 group cursor-pointer"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color}`}
        >
          <Icon className="w-8 h-8 text-primary-foreground" />
        </motion.div>

        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
          <span>{t('subjects.viewResources')}</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default SubjectCard;
