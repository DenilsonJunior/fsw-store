import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPag = async () => {
    const categories = await prismaClient.category.findMany({});

    return (
        <div className="flex flex-col gap-8 p-5">
            <Badge
                className="w-fit gap-1 text-base uppercase px-3 py-[0.365rem] border-2 border-primary"
                variant="outline"
            >
                <ShapesIcon />
                Catálogo
            </Badge>

            <div className="grid grid-cols-2 gap-8">
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPag;
