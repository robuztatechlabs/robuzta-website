import { Container } from '@/components/ui/Container';
import { cn } from '@/utils/cn';

export function Section({
  id = '',
  eyebrow = '',
  title = '',
  muted = false,
  children,
  className = '',
  headingClassName = ''
}) {
  return (
    <section id={id} className={cn('section', muted && 'section-muted', className)}>
      <Container>
        {(eyebrow || title) && (
          <div className={cn('section-heading', headingClassName)}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

