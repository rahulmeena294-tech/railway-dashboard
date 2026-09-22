'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Redirects cleanly to the dashboard file in the public folder
    window.location.href = '/dashboard.html';
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h2>🚂 Loading Railway Dashboard...</h2>
    </div>
  );
}