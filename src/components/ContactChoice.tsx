"use client";

import { useEffect, useId, useRef, useState } from "react";
import { profile } from "@/data/cv";

const saludo = encodeURIComponent(
  "Hola Jorge, vi tu sitio y me gustaría hablar contigo.",
);

/**
 * Patrón de divulgación (disclosure), no un menú ARIA: el panel contiene
 * enlaces reales, así que Cmd/Ctrl/clic central siguen funcionando y el
 * teclado lo recorre con Tab sin reconstruir nada. Escape cierra y devuelve
 * el foco al disparador.
 */
export default function ContactChoice() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (wrapRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };
    const onFocusIn = (event: FocusEvent) => {
      if (wrapRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [open]);

  const itemClass =
    "block rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors duration-150 hover:bg-surface";

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-[scale,border-color] duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:border-fg active:scale-[0.96]"
      >
        Escríbeme
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-[rotate] duration-150 ease-[cubic-bezier(0.2,0,0,1)]"
          style={{ rotate: open ? "180deg" : "0deg" }}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {/* `p-1` sobre `rounded-xl` (12px) deja los elementos en `rounded-lg`
          (8px): radio exterior = radio interior + relleno. */}
      <div
        id={panelId}
        hidden={!open}
        className="elevated absolute top-full start-0 z-40 mt-2 min-w-48 rounded-xl bg-bg p-1"
      >
        <a
          href={`https://wa.me/${profile.whatsapp}?text=${saludo}`}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className={itemClass}
        >
          WhatsApp
          <span className="sr-only"> (abre en una pestaña nueva)</span>
        </a>
        <a
          href={`mailto:${profile.email}`}
          onClick={() => setOpen(false)}
          className={itemClass}
        >
          Correo electrónico
          <span className="block text-xs text-muted">{profile.email}</span>
        </a>
      </div>
    </div>
  );
}
