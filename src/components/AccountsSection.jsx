import { useState } from 'react';
import ProfitSection from './ProfitSection';
import HistorySection from './HistorySection';
import AnalysisSection from './AnalysisSection';

export default function AccountsSection() {
  const [tab, setTab] = useState('profit');
  return (
    <div className="card">
      <div className="flex gap-3 mb-4 flex-wrap">
        <button className={`btn ${tab==='profit'?'btn-primary':'btn-ghost'}`} onClick={()=>setTab('profit')}>Profit</button>
        <button className={`btn ${tab==='history'?'btn-primary':'btn-ghost'}`} onClick={()=>setTab('history')}>History</button>
        <button className={`btn ${tab==='analysis'?'btn-primary':'btn-ghost'}`} onClick={()=>setTab('analysis')}>Analysis</button>
      </div>
      {tab === 'profit' && <ProfitSection />}
      {tab === 'history' && <HistorySection />}
      {tab === 'analysis' && <AnalysisSection />}
    </div>
  );
}
