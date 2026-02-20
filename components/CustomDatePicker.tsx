"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

export function CustomDatePicker({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) {
    const [isOpen, setIsOpen] = useState(false);

    // Parse value or use today for the calendar view
    const getInitialDate = () => {
        if (!value) return new Date();
        const [y, m, d] = value.split("-").map(Number);
        return new Date(y, m - 1, d);
    };

    const [viewDate, setViewDate] = useState(getInitialDate());
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) setIsOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Update viewDate if value changes externally
    useEffect(() => {
        if (value) {
            const [y, m, d] = value.split("-").map(Number);
            setViewDate(new Date(y, m - 1, d));
        }
    }, [value]);

    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const startDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

    const handleSelect = (day: number) => {
        const y = viewDate.getFullYear();
        const m = String(viewDate.getMonth() + 1).padStart(2, '0');
        const d = String(day).padStart(2, '0');
        onChange(`${y}-${m}-${d}`);
        setIsOpen(false);
    };

    const changeMonth = (offset: number) => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
    };

    const displayDate = value ? (() => {
        const [y, m, d] = value.split("-").map(Number);
        return new Date(y, m - 1, d).toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' });
    })() : "Select Date";

    return (
        <div ref={ref} style={{ position: "relative", width: 160 }}>
            <label className="label">{label}</label>
            <div
                className="input"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                    padding: "8px 12px",
                    background: "white",
                    color: value ? "#111827" : "#9CA3AF",
                    border: isOpen ? "1px solid #0B2F23" : "1px solid #D1D5DB"
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <CalendarIcon size={16} strokeWidth={1.5} color={value ? "#0B2F23" : "#9CA3AF"} />
                <span style={{ fontSize: 13, flex: 1, userSelect: "none" }}>{displayDate}</span>
            </div>

            {isOpen && (
                <div style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    marginTop: 6,
                    background: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: 12,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
                    padding: 16,
                    zIndex: 50,
                    width: 260
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                        <button type="button" onClick={() => changeMonth(-1)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: 'flex', color: "#4B5563" }}>
                            <ChevronLeft size={18} />
                        </button>
                        <div style={{ fontWeight: 600, fontSize: 14, color: "#111827", userSelect: "none" }}>
                            {viewDate.toLocaleString("default", { month: "long", year: "numeric" })}
                        </div>
                        <button type="button" onClick={() => changeMonth(1)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: 'flex', color: "#4B5563" }}>
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, textAlign: "center", marginBottom: 8 }}>
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                            <div key={d} style={{ fontSize: 11, fontWeight: 600, color: "#9CA3AF", userSelect: "none" }}>{d}</div>
                        ))}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
                        {Array.from({ length: startDay }).map((_, i) => <div key={`empty-${i}`} />)}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const isSelected = value && (() => {
                                const [y, m, d] = value.split("-").map(Number);
                                return d === day && m - 1 === viewDate.getMonth() && y === viewDate.getFullYear();
                            })();

                            const isToday = !isSelected && day === new Date().getDate() && viewDate.getMonth() === new Date().getMonth() && viewDate.getFullYear() === new Date().getFullYear();

                            return (
                                <button
                                    key={day}
                                    type="button"
                                    onClick={() => handleSelect(day)}
                                    style={{
                                        background: isSelected ? "#0B2F23" : "transparent",
                                        color: isSelected ? "white" : (isToday ? "#0B2F23" : "#374151"),
                                        fontWeight: isSelected || isToday ? 600 : 400,
                                        border: "none",
                                        borderRadius: 8,
                                        width: "100%",
                                        aspectRatio: "1",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 13,
                                        cursor: "pointer",
                                        transition: "all 0.15s ease"
                                    }}
                                    onMouseEnter={(e) => !isSelected && (e.currentTarget.style.background = "#F3F4F6")}
                                    onMouseLeave={(e) => !isSelected && (e.currentTarget.style.background = "transparent")}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
