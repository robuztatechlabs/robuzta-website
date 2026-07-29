import { Section } from '@/components/ui/Section';
import { GsapStagger, GsapReveal } from '@/components/ui/GsapAnimations';
import { repairProcess } from '@/data/process';
import { Search, FileText, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

const processIcons = [Search, FileText, Wrench, ShieldCheck, CheckCircle2];

export function ProcessSection() {
  return (
    <Section
      id="process"
      eyebrow="Transparent Diagnostic Workflow"
      title="A 5-step repair process engineered for complete customer confidence."
    >
      <GsapReveal direction="up" delay={0.1}>
        <p className="section-lead-text">
          No hidden charges, no unapproved component swaps. You remain in control at every stage.
        </p>
      </GsapReveal>

      <GsapStagger selector=".process-step-card" delay={0.15} className="process-timeline-grid">
        {repairProcess.map((step, index) => {
          const StepIcon = processIcons[index] || Wrench;
          return (
            <article className="process-step-card stagger-item" key={step.title}>
              <div className="step-header">
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="step-icon-box">
                  <StepIcon size={20} />
                </div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </article>
          );
        })}
      </GsapStagger>
    </Section>
  );
}
