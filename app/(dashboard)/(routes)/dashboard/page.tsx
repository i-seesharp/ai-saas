"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        backgroundColor: "bg-violet-500/10",
        href: "/conversation",
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        backgroundColor: "bg-emerald-500/10",
        href: "/music",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        backgroundColor: "bg-pink-700/10",
        href: "/image"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-700",
        backgroundColor: "bg-orange-700/10",
        href: "/video"
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-green-700",
        backgroundColor: "bg-green-700/10",
        href: "/code",
    }
]

export default function DashboardPage() {
    const router = useRouter();

    return (
        <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
                Explore the first autistically 🏳️‍🌈 AI
            </h2>
            <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                Do Epic 💩 with Ghatothkatch's AI
            </p>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="p-4 border-black/5 flex items-center justify-between 
                        hover hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.backgroundColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}