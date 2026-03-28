"use client";
import { ArrowRight, FileText, MapPin } from "lucide-react"
import Image from "next/image"

export const Hero = () => {
    return (
        <section className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 md:gap-10 py-10 px-2 md:px-20">
            {/* Image Container: Centered on mobile, fixed size */}
            <div className="relative overflow-hidden w-40 h-40 md:w-50 md:h-50 rounded-full aspect-square shrink-0 shadow-sm border border-(--color-border-weak)">
                <Image
                    src="/image.png"
                    alt="Lotus Logo"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container: Centered text on mobile, Left-aligned on Desktop */}
            <div className="flex flex-col items-center md:items-start text-left">
                
                {/* Name and Location */}
                <div className="space-y-1">
                    <h1 className="text-2xl md:text-3xl font-mono text-(--color-text)">
                        ThamaraiManalan
                    </h1>
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-(--color-muted) font-mono text-sm">
                        <MapPin size={14} className="text-(--color-accent)" />
                        <span>Coimbatore, Tamil Nadu</span>
                    </div>
                </div>

                {/* Bio Description */}
                <p className="mt-5 text-sm md:text-base text-(--color-muted) max-w-xl leading-relaxed">
                    <span className="text-(--color-text) font-mono">Still learning. Always building.</span> Each project teaches me something a tutorial never could — about scale, about failure, about craft.
                </p>

                {/* Tech Interest Pills */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                    {["#Scalable", "#Secure", "#Performance"].map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-(--color-elevated) text-(--color-muted) border border-(--color-border-weak)">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8 w-full">
                    <button 
                        onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                        className="group flex items-center gap-2 bg-(--color-accent) text-(--color-surface) px-3 py-2 rounded font-mono transition-transform hover:scale-105 active:scale-95 text-sm"
                    >
                        view projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="flex items-center gap-2 px-3 py-2 rounded border border-(--color-border-strong) hover:bg-(--color-elevated) transition-colors font-mono text-sm text-(--color-muted) hover:border-(--color-border-strong)">
                        <FileText size={18} />
                        Resume
                    </button>
                </div>
                
            </div> 
             
        </section>
    )
}