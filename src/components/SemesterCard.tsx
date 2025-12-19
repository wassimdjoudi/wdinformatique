import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';

interface SemesterCardProps {
  semester: 1 | 2;
  title: string;
  description: string;
  buttonText: string;
  delay?: number;
}

const SemesterCard = ({ semester, title, description, buttonText, delay = 0 }: SemesterCardProps) => {
  const Icon = semester === 1 ? BookOpen : GraduationCap;
  const gradient = semester === 1 
    ? 'from-primary to-primary/70' 
    : 'from-emerald-500 to-teal-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/s${semester}`}>
        <div className="glass-card p-8 relative overflow-hidden">
          {/* Background glow */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradient} rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
              >
                <Icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <span className="text-5xl font-bold text-muted-foreground/20">
                S{semester}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-6">{description}</p>

            <motion.div
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary font-medium"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SemesterCard;
