import React, { useState, useMemo } from 'react';
import { ModuleData } from '../data/types';

interface NotesDrawerProps {
  currentModule: ModuleData;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const NotesDrawer: React.FC<NotesDrawerProps> = ({
  currentModule,
  isOpen,
  onClose,
  onOpen
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Simple Markdown-like renderer for tables, headers, and bullet points
  const renderFormattedOutline = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let tableBuffer: string[] = [];

    const flushTable = () => {
      if (tableBuffer.length > 0) {
        const rows = tableBuffer.map((line) =>
          line
            .split('|')
            .map((cell) => cell.trim())
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
        );
        const isHeaderSep = (row: string[]) => row.every((c) => /^[-:]+$/.test(c));

        const headerRow = rows[0];
        const dataRows = rows.slice(1).filter((r) => !isHeaderSep(r));

        elements.push(
          <div key={`tbl-${elements.length}`} className="my-4 overflow-x-auto rounded-xl border border-purple-200 shadow-xs">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-purple-100/70 text-purple-900 border-b border-purple-200">
                  {headerRow.map((cell, idx) => (
                    <th key={idx} className="p-2.5 font-bold">
                      <span dangerouslySetInnerHTML={{ __html: cell }} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 bg-white">
                {dataRows.map((r, rIdx) => (
                  <tr key={rIdx} className="hover:bg-purple-50/50 transition-colors">
                    {r.map((cell, cIdx) => (
                      <td key={cIdx} className="p-2.5 text-slate-700 align-top">
                        <span dangerouslySetInnerHTML={{ __html: cell }} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableBuffer = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('|')) {
        tableBuffer.push(trimmed);
        return;
      } else {
        flushTable();
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-lg md:text-xl font-extrabold text-purple-900 mt-5 mb-2 pb-1 border-b border-purple-100"
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={`h4-${index}`} className="text-sm md:text-base font-bold text-pink-700 mt-4 mb-1.5">
            {trimmed.replace('#### ', '')}
          </h4>
        );
      } else if (trimmed.startsWith('---')) {
        elements.push(<hr key={`hr-${index}`} className="my-5 border-purple-200" />);
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletText = trimmed.substring(2);
        elements.push(
          <li key={`li-${index}`} className="ml-5 list-disc text-xs md:text-sm text-slate-700 my-1 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInline(bulletText) }} />
          </li>
        );
      } else if (trimmed.length > 0) {
        elements.push(
          <p key={`p-${index}`} className="text-xs md:text-sm text-slate-700 my-2 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
          </p>
        );
      }
    });

    flushTable();
    return elements;
  };

  const formatInline = (str: string) => {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-purple-950">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800">$1</em>');
  };

  const filteredContent = useMemo(() => {
    if (!searchTerm.trim()) return currentModule.lectureOutline;
    const lines = currentModule.lectureOutline.split('\n');
    const matching = lines.filter((line) =>
      line.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (matching.length === 0) {
      return `### No direct matches found for "${searchTerm}"\n\nTry searching for broader terms like "assurance", "standards", "report", or "controls".`;
    }
    return `### Search Results for "${searchTerm}"\n\n` + matching.join('\n\n');
  }, [searchTerm, currentModule.lectureOutline]);

  return (
    <>
      {/* Floating Trigger Button in Lower-Left */}
      <div className="fixed left-4 bottom-4 z-40">
        <button
          onClick={onOpen}
          title="Open Topic Review Notes & Conceptual Outline"
          className="flex items-center gap-2 bg-white/95 backdrop-blur-md text-purple-900 border-2 border-purple-200 hover:border-purple-400 px-4 py-2.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm font-extrabold cursor-pointer group"
        >
          <span className="text-lg group-hover:rotate-12 transition-transform">📖</span>
          <span className="hidden sm:inline">Module Outline</span>
          <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">
            {currentModule.code}
          </span>
        </button>
      </div>

      {/* Slide-over Drawer / Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={onClose}
          />

          {/* Drawer content */}
          <div className="absolute inset-y-0 left-0 max-w-full flex pr-10">
            <div className="w-screen max-w-xl md:max-w-2xl bg-white shadow-2xl flex flex-col border-r border-purple-200">
              {/* Header */}
              <div className="p-4 md:p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 border-b border-purple-200 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-purple-600 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-md">
                      {currentModule.code}
                    </span>
                    <span className="text-xs font-semibold text-purple-800">
                      {currentModule.standards}
                    </span>
                  </div>
                  <h2 className="text-base md:text-lg font-black text-slate-800 leading-snug">
                    {currentModule.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white border border-purple-200 text-slate-500 hover:text-slate-800 hover:bg-purple-100 flex items-center justify-center font-bold text-sm cursor-pointer shadow-xs transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Quick Search */}
              <div className="p-3 bg-purple-50/50 border-b border-purple-100 flex items-center gap-2">
                <span className="text-slate-400 text-sm ml-2">🔍</span>
                <input
                  type="text"
                  placeholder="Filter key concepts, definitions, rules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white text-xs md:text-sm px-3 py-1.5 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-slate-800 placeholder-slate-400"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-xs text-slate-400 hover:text-slate-600 mr-2 font-bold cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Content Body */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-2">
                <div className="bg-purple-50/70 p-3.5 rounded-2xl border border-purple-100 mb-4 text-xs text-purple-900 leading-relaxed">
                  <strong className="block font-bold mb-1 text-purple-950">💡 Conceptual Summary:</strong>
                  {currentModule.summary}
                </div>

                <div className="prose prose-purple max-w-none">
                  {renderFormattedOutline(filteredContent)}
                </div>
              </div>

              {/* Footer */}
              <div className="p-3.5 bg-slate-50 border-t border-purple-100 flex items-center justify-between text-xs text-slate-500">
                <span>CPAR Auditing Theory Reviewer (Verbatim Outline)</span>
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-xs"
                >
                  Back to Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
