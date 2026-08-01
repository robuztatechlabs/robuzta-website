/**
 * Helper to dispatch lead submissions to /api/lead (Google Sheets, Email & Backup)
 * and generate instant WhatsApp redirect link.
 */
export async function submitLeadData(data) {
  try {
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch((err) => console.error('Background lead dispatch error:', err));
  } catch (err) {
    console.error('Lead submit error:', err);
  }
}
