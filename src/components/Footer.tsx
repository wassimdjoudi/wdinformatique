import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/was_sim_off/',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/djoudi-wassim-a1406228b',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="relative mt-20 pb-8">
      {/* Gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 pt-12">
        <div className="flex flex-col items-center gap-6">
          {/* Motivation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-muted-foreground max-w-md"
          >
            {t('footer.motivation')}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium text-foreground">
                Created by the developer Djoudi Wassim
              </p>
              <p className="text-sm font-medium text-foreground" dir="rtl">
                جودي وسيم
              </p>
            </div>
            <p className="text-sm text-primary font-semibold" dir="rtl">
              صدقة جارية على كل من أرسله ودرس به
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} WD Informatique. {t('footer.rights')}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
