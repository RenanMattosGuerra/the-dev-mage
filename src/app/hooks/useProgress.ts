"use client";
import { useState, useEffect } from "react";

const STORAGE_KEY = "devmage_progress";

export function useProgress() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      setProgress(parseInt(saved, 10));
    }
  }, []);

  function completeLevel(levelNumber: number) {
    if (levelNumber > progress) {
      setProgress(levelNumber);
      localStorage.setItem(STORAGE_KEY, String(levelNumber));
    }
  }

  function isUnlocked(levelNumber: number): boolean {
    return levelNumber <= progress + 1;
  }

  return { progress, completeLevel, isUnlocked };
}
