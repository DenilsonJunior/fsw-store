import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
    HeadphonesIcon,
    KeyboardIcon,
    MonitorIcon,
    MouseIcon,
    SpeakerIcon,
    SquareIcon,
} from "lucide-react";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    const CategoryIcon = {
        keyboards: <KeyboardIcon size={16} />,
        monitors: <MonitorIcon size={16} />,
        headphones: <HeadphonesIcon size={16} />,
        mousepad: <SquareIcon size={16} />,
        speakers: <SpeakerIcon size={16} />,
        mouses: <MouseIcon size={16} />,
    };
    return (
        <Badge
            variant="outline"
            className="flex items-center justify-center py-3 gap-2"
        >
            {CategoryIcon[category.slug as keyof typeof CategoryIcon]}
            <span className="text-xs font-bold">{category.name}</span>
        </Badge>
    );
};

export default CategoryItem;
