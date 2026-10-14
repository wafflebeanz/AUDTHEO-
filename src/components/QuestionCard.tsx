import React, { useState, useEffect } from 'react';
import { QuestionItem } from '../data/types';

interface QuestionCardProps {
  question: QuestionItem;
  selectedAnswer?: 'A' | 'B' | 'C' | 'D';
  isFlagged: boolean;
  onSelectOption: (option: 'A' | 'B' | 'C' | 'D') => void;
  onToggleFlag: () => void;
  onResetQuestion: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  isFlagged,
  onSelectOption,
  onToggleFlag,
  onResetQuestion
}) => {
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = isAnswered && selectedAnswer === question.ans;

  // Custom notes persistence per question
  const noteStorageKey = `audit_note_${question.id}`;
  const [noteText, setNoteText] = useState<string>('');
  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false);
  const [isSavedNotice, setIsSavedNotice] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(noteStorageKey);
      if (saved) {
        setNoteText(saved);
      } else {
        setNoteText('');
      }
    } catch (e) {
      console.error(e);
    }
  }, [noteStorageKey]);

  const handleNoteChange = (val: string) => {
    setNoteText(val);
    try {
      if (val.trim()) {
        localStorage.setItem(noteStorageKey, val);
      } else {
        localStorage.removeItem(noteStorageKey);
      }
      setIsSavedNotice(true);
      setTimeout(() => setIsSavedNotice(false), 1200);
    } catch (e) {
      console.error(e);
    }
  };

  const hasNote = noteText.trim().length > 0;

  return (
    <article
      id={question.id}
      className={`relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 mb-5 border-2 transition-all shadow-xs ${
        isFlagged
          ? 'border-amber-300 ring-2 ring-amber-200/50 bg-amber-50/20'
          : 'border-purple-100/90 hover:border-purple-200'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="font-black text-sm md:text-base px-3 py-1 bg-purple-100 text-purple-900 rounded-xl">
            Q{question.n}
          </span>
          {hasNote && (
            <span
              onClick={() => setIsNoteOpen(true)}
              className="cursor-pointer text-[11px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200 flex items-center gap-1 hover:bg-pink-200 transition-colors"
              title="Has Custom Notes / Mnemonics"
            >
              <span>✏️</span> Notes
            </span>
          )}
        </div>

        {/* Flag Button */}
        <button
          onClick={onToggleFlag}
          title={isFlagged ? 'Remove bookmark' : 'Bookmark this item for review'}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
            isFlagged
              ? 'bg-amber-400 border-amber-500 text-amber-950 shadow-xs scale-105'
              : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-amber-300 hover:text-amber-700'
          }`}
        >
          <span>{isFlagged ? '★' : '☆'}</span>
          <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
        </button>
      </div>

      {/* Context if applicable */}
      {question.context && (
        <div className="mb-3 p-3 bg-purple-50/80 rounded-xl border border-purple-200 text-xs md:text-sm text-purple-950 leading-relaxed">
          <strong className="block font-bold text-purple-900 mb-0.5">ℹ️ Situation / Facts:</strong>
          {question.context}
        </div>
      )}

      {/* Question Stem */}
      <div className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed mb-4 whitespace-pre-line">
        {question.stem}
      </div>

      {/* Options List */}
      <div className="space-y-2.5">
        {question.opts.map((opt) => {
          const isThisSelected = selectedAnswer === opt.label;
          const isThisCorrect = question.ans === opt.label;

          let btnStyles = 'bg-white border-purple-100 text-slate-700 hover:border-purple-300 hover:bg-purple-50/40';

          if (isAnswered) {
            if (isThisCorrect) {
              btnStyles = 'bg-[#d1fae5] border-[#065f46] text-[#065f46] font-bold ring-1 ring-[#065f46]';
            } else if (isThisSelected && !isThisCorrect) {
              btnStyles = 'bg-[#fee2e2] border-[#991b1b] text-[#991b1b] ring-1 ring-[#991b1b]';
            } else {
              btnStyles = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-70';
            }
          }

          return (
            <button
              key={opt.label}
              disabled={isAnswered}
              onClick={() => onSelectOption(opt.label)}
              className={`w-full text-left p-3.5 md:p-4 rounded-xl md:rounded-2xl border-2 transition-all flex items-start gap-3 cursor-pointer ${btnStyles}`}
            >
              <span
                className={`flex-none w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center text-xs md:text-sm font-extrabold ${
                  isAnswered && isThisCorrect
                    ? 'bg-[#065f46] text-white'
                    : isAnswered && isThisSelected && !isThisCorrect
                    ? 'bg-[#991b1b] text-white'
                    : 'bg-purple-100/70 text-purple-900'
                }`}
              >
                {opt.label}
              </span>
              <span className="flex-1 text-xs md:text-sm leading-relaxed self-center">
                {opt.text}
              </span>
              {isAnswered && isThisCorrect && (
                <span className="flex-none text-xs font-extrabold text-[#065f46] bg-emerald-100 px-2 py-0.5 rounded-full self-center">
                  ✓ Correct
                </span>
              )}
              {isAnswered && isThisSelected && !isThisCorrect && (
                <span className="flex-none text-xs font-extrabold text-[#991b1b] bg-rose-100 px-2 py-0.5 rounded-full self-center">
                  ✗ Your Pick
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Answer feedback & Explanation */}
      {isAnswered && (
        <div className="mt-4 pt-3 border-t border-purple-100 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span
              className={`text-xs md:text-sm font-black flex items-center gap-1.5 ${
                isCorrect ? 'text-emerald-700' : 'text-rose-700'
              }`}
            >
              {isCorrect ? '🎉 Correct Answer!' : `⚠️ Incorrect. The correct answer is [ ${question.ans} ]`}
            </span>
            <button
              onClick={onResetQuestion}
              className="text-xs text-slate-400 hover:text-purple-600 font-bold px-2 py-1 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer"
            >
              ↺ Reset Item
            </button>
          </div>

          {question.explanation && (
            <div className="bg-purple-50/70 rounded-xl p-3 border border-purple-100 text-xs text-slate-700 leading-relaxed">
              <strong className="text-purple-900 font-bold block mb-0.5">Rationale:</strong>
              {question.explanation}
            </div>
          )}
        </div>
      )}

      {/* Expandable Notes / Mnemonics Section */}
      <div className="mt-4 pt-2 border-t border-slate-100">
        <button
          onClick={() => setIsNoteOpen(!isNoteOpen)}
          className="flex items-center justify-between w-full text-xs font-bold text-slate-500 hover:text-purple-700 py-1 cursor-pointer transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <span>✏️</span>
            <span>My Notes / Mnemonics</span>
            {hasNote && (
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            )}
          </span>
          <span className="text-[11px] text-purple-600 font-semibold">
            {isNoteOpen ? 'Hide ▲' : 'Show / Edit ▼'}
          </span>
        </button>

        {isNoteOpen && (
          <div className="mt-2 space-y-2 animate-in fade-in duration-150">
            <textarea
              rows={3}
              placeholder="Type your memory aids, mnemonics, or notes for this question here (auto-saved)..."
              value={noteText}
              onChange={(e) => handleNoteChange(e.target.value)}
              className="w-full text-xs md:text-sm p-3 rounded-xl border border-purple-200 bg-purple-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-slate-800 placeholder-slate-400 transition-all"
            />
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Automatically saved to local storage</span>
              {isSavedNotice && <span className="text-emerald-600 font-bold">✓ Saved</span>}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
