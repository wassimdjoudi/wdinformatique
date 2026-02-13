import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { UserRound, Mail, School, BookOpen, GraduationCap, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CodeBackground from '@/components/CodeBackground';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const StudentForm = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isRTL = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    academicYear: '',
    specialization: 'informatique',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = t('form.required');
    if (!formData.lastName.trim()) newErrors.lastName = t('form.required');
    if (!formData.email.trim()) {
      newErrors.email = t('form.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.invalidEmail');
    }
    if (!formData.university.trim()) newErrors.university = t('form.required');
    if (!formData.academicYear.trim()) newErrors.academicYear = t('form.required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    toast({
      title: t('form.successTitle'),
      description: t('form.successMessage'),
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      university: '',
      academicYear: '',
      specialization: 'informatique',
    });
    setErrors({});
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  return (
    <div className="min-h-screen relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <CodeBackground />
      <Header />

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <GraduationCap className="w-8 h-8 text-primary" />
              </motion.div>
              <h1 className="text-2xl font-bold text-foreground mb-2">{t('form.title')}</h1>
              <p className="text-sm text-muted-foreground">{t('form.subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium">
                  <UserRound className="w-4 h-4 text-primary" />
                  {t('form.firstName')}
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={e => handleChange('firstName', e.target.value)}
                  placeholder={t('form.firstNamePlaceholder')}
                  maxLength={100}
                  className="rounded-xl bg-background/50"
                />
                {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium">
                  <UserRound className="w-4 h-4 text-primary" />
                  {t('form.lastName')}
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={e => handleChange('lastName', e.target.value)}
                  placeholder={t('form.lastNamePlaceholder')}
                  maxLength={100}
                  className="rounded-xl bg-background/50"
                />
                {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                  <Mail className="w-4 h-4 text-primary" />
                  {t('form.email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  placeholder={t('form.emailPlaceholder')}
                  maxLength={255}
                  className="rounded-xl bg-background/50"
                  dir="ltr"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              {/* University */}
              <div className="space-y-2">
                <Label htmlFor="university" className="flex items-center gap-2 text-sm font-medium">
                  <School className="w-4 h-4 text-primary" />
                  {t('form.university')}
                </Label>
                <Input
                  id="university"
                  value={formData.university}
                  onChange={e => handleChange('university', e.target.value)}
                  placeholder={t('form.universityPlaceholder')}
                  maxLength={200}
                  className="rounded-xl bg-background/50"
                />
                {errors.university && <p className="text-xs text-destructive">{errors.university}</p>}
              </div>

              {/* Academic Year */}
              <div className="space-y-2">
                <Label htmlFor="academicYear" className="flex items-center gap-2 text-sm font-medium">
                  <BookOpen className="w-4 h-4 text-primary" />
                  {t('form.academicYear')}
                </Label>
                <Input
                  id="academicYear"
                  value={formData.academicYear}
                  onChange={e => handleChange('academicYear', e.target.value)}
                  placeholder={t('form.academicYearPlaceholder')}
                  maxLength={20}
                  className="rounded-xl bg-background/50"
                />
                {errors.academicYear && <p className="text-xs text-destructive">{errors.academicYear}</p>}
              </div>

              {/* Specialization */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  {t('form.specialization')}
                </Label>
                <RadioGroup
                  value={formData.specialization}
                  onValueChange={value => handleChange('specialization', value)}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                    <RadioGroupItem value="informatique" id="informatique" />
                    <Label htmlFor="informatique" className="cursor-pointer flex-1 text-sm">
                      {t('form.csSpecialization')}
                    </Label>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                    <RadioGroupItem value="st" id="st" />
                    <Label htmlFor="st" className="cursor-pointer flex-1 text-sm">
                      {t('form.stSpecialization')}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full rounded-xl h-12 text-base font-semibold gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t('form.submit')}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentForm;
