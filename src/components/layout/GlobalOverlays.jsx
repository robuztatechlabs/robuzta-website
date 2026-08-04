'use client';

import dynamic from 'next/dynamic';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';

const BookRepairModal = dynamic(
  () => import('@/components/ui/BookRepairModal').then((m) => m.BookRepairModal),
  { ssr: false }
);

const FranchiseEdgeTab = dynamic(
  () => import('@/components/ui/FranchiseEdgeTab').then((m) => m.FranchiseEdgeTab),
  { ssr: false }
);

const FloatingWidget = dynamic(
  () => import('@/components/ui/FloatingWidget').then((m) => m.FloatingWidget),
  { ssr: false }
);

const QuickCallbackWidget = dynamic(
  () => import('@/components/ui/QuickCallbackWidget').then((m) => m.QuickCallbackWidget),
  { ssr: false }
);

const ScrollTriggeredCtaBar = dynamic(
  () => import('@/components/ui/ScrollTriggeredCtaBar').then((m) => m.ScrollTriggeredCtaBar),
  { ssr: false }
);

export function GlobalOverlays() {
  return (
    <>
      <BookRepairModal />
      <FranchiseEdgeTab />
      <FloatingWidget />
      <QuickCallbackWidget />
      <ScrollTriggeredCtaBar />
      <StickyMobileBar />
    </>
  );
}
