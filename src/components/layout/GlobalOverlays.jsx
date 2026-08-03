'use client';

import dynamic from 'next/dynamic';

const BookRepairModal = dynamic(
  () => import('@/components/ui/BookRepairModal').then((m) => m.BookRepairModal),
  { ssr: false }
);

const FranchiseEdgeTab = dynamic(
  () => import('@/components/ui/FranchiseEdgeTab').then((m) => m.FranchiseEdgeTab),
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
      <ScrollTriggeredCtaBar />
    </>
  );
}
