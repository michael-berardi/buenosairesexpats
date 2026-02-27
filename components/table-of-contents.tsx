"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown, List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const headings = items
      .map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }))
      .filter((h) => h.element !== null);

    const scrollPosition = window.scrollY + 120;

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      if (heading.element && heading.element.offsetTop <= scrollPosition) {
        setActiveId(heading.id);
        return;
      }
    }

    if (headings.length > 0) {
      setActiveId(headings[0].id);
    }
  }, [items]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize active heading after mount
    const timer = requestAnimationFrame(() => {
      const headings = items
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((h) => h.element !== null);
      if (headings.length > 0) {
        setActiveId(headings[0].id);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(timer);
    };
  }, [handleScroll, items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile: Collapsible */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-700"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4" />
            Table of Contents
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <nav className="mt-2 px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      item.level > 2 ? "pl-4" : ""
                    } ${
                      activeId === item.id
                        ? "text-sky-700 font-semibold"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop: Sticky sidebar */}
      <nav className="hidden lg:block sticky top-24 w-64 flex-shrink-0 self-start">
        <div className="border border-stone-200 rounded-xl p-4 bg-white">
          <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
            On this page
          </h3>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`block w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors ${
                    item.level > 2 ? "pl-5" : ""
                  } ${
                    activeId === item.id
                      ? "text-sky-700 font-semibold bg-sky-50"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
