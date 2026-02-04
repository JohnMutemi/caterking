"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const PALETTE_KEY = "caterking-palette";

export type PaletteTheme = "industrial" | "pink" | "emerald" | "minimal";

const palettes: { id: PaletteTheme; label: string; accent: string }[] = [
  { id: "industrial", label: "Industrial", accent: "bg-red-600" },
  { id: "pink", label: "Blush Pink", accent: "bg-pink-500" },
  { id: "emerald", label: "Emerald Green", accent: "bg-emerald-500" },
  { id: "minimal", label: "Minimalist", accent: "bg-slate-200" },
];

function getStoredPalette(): PaletteTheme {
  if (typeof window === "undefined") return "pink";
  return (localStorage.getItem(PALETTE_KEY) as PaletteTheme) || "pink";
}

function setStoredPalette(palette: PaletteTheme) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PALETTE_KEY, palette);
}

export function applyPalette(palette: PaletteTheme) {
  document.documentElement.setAttribute("data-theme", palette);
}

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [palette, setPalette] = useState<PaletteTheme>("pink");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const stored = getStoredPalette();
      setPalette(stored);
      applyPalette(stored);
    }
  }, [mounted]);

  const handlePaletteChange = (newPalette: PaletteTheme) => {
    setPalette(newPalette);
    setStoredPalette(newPalette);
    applyPalette(newPalette);
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Theme options">
        <Palette className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 text-foreground hover:bg-muted"
          aria-label="Theme and palette options"
        >
          {isDark ? (
            <Moon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Sun className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Light / Dark</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color Palette</DropdownMenuLabel>
        {palettes.map((p) => (
          <DropdownMenuItem
            key={p.id}
            onClick={() => handlePaletteChange(p.id)}
            className="flex items-center gap-2"
          >
            <span className={`h-3 w-3 rounded-full ${p.accent}`} />
            {p.label}
            {palette === p.id && (
              <span className="ml-auto text-xs text-muted-foreground">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
