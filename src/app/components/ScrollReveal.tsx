"use client";

import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
    return (
        <div>
            {children}
        </div>
    );
}
