import React from 'react';
import { RotateCcw, BookOpen, Sparkles, Award } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { MaxDog } from './MaxDog';

interface FinalScreenProps {
  badgeCount: number;
  onRestartStory: () => void;
  onOpenBookCatalog: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({
  badgeCount,
  onRestartStory,
  onOpenBookCatalog,
}) => {
  return (
    <div className="flex-1 flex flex-col justify-between max-w-lg mx-auto w-full px-4 py-6 text-center">
      {/* Top Badge Tag */}
      <div className="flex justify-end pt-1">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-bold text-sm shadow-xs">
          <span>⭐</span>
          <span className="tabular-nums font-extrabold">{badgeCount} Badges</span>
        </div>
      </div>

      {/* Hero Badge & Message with shared MaxDog */}
      <div className="my-auto py-4 space-y-3">
        <div className="w-28 h-28 mx-auto">
          <MaxDog pose="celebrating" expression="celebrating" hasMedal={true} size="100%" />
        </div>

        <h1 className="text-3xl font-black text-slate-900 font-story">
          Super Reader!
        </h1>
        <p className="text-base font-bold text-amber-800 font-korean max-w-xs mx-auto">
          나만의 책까지 모두 완독했어요! 멋진 그림책 탐정이 되었습니다.
        </p>
      </div>

      {/* Two Large Action Buttons (Requirement 1: Single icon, no duplicate emoji) */}
      <div className="space-y-3 pb-4">
        {/* Button 1: Read again */}
        <button
          onClick={() => {
            sounds.playPageFlip();
            onRestartStory();
          }}
          className="w-full py-4 px-6 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-amber-500/25 transition-all font-story cursor-pointer"
        >
          <RotateCcw className="w-6 h-6" />
          <span>Read again (처음부터 다시 읽기)</span>
        </button>

        {/* Button 2: Read new book */}
        <button
          onClick={() => {
            sounds.playPageFlip();
            onOpenBookCatalog();
          }}
          className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/25 transition-all font-story cursor-pointer"
        >
          <BookOpen className="w-6 h-6" />
          <span>Read new book (다른 책 고르기)</span>
        </button>
      </div>
    </div>
  );
};
