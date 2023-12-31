import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <div className="flex flex-col">
            <div className="w-full h-[150px] flex items-center justify-center bg-gradient-to-r from-[#5033C3] to-[#2a1f58] rounded-tl-lg rounded-tr-lg">
                <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
                <p className="text-sm font-semibold text-center">
                    {category.name}
                </p>
            </div>
        </div>
    );
};

export default CategoryItem;
