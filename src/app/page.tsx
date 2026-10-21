import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BusinessSolutionsSection } from '@/components/home/BusinessSolutionsSection';
import { LearningProgramsSection } from '@/components/home/LearningProgramsSection';
import { ComparisonMatrixSection } from '@/components/home/ComparisonMatrixSection';
import { JaipurLabSection } from '@/components/home/JaipurLabSection';
import { WorkflowProcessSection } from '@/components/home/WorkflowProcessSection';
import { DifferentiatorsSection } from '@/components/home/DifferentiatorsSection';
import { FaqSection } from '@/components/home/FaqSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BusinessSolutionsSection />
      <LearningProgramsSection />
      <ComparisonMatrixSection />
      <JaipurLabSection />
      <WorkflowProcessSection />
      <DifferentiatorsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
