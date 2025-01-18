export type AddCardProps = {
    className?: string;
};

export const AddCard = (props: AddCardProps) => {
    return (
        <div className="h-3 mt-auto flex bg-transparent px-1 py-0.5 rounded-0.5 hover:bg-gray-100 cursor-pointer">
            <p className="font-medium text-gray-500 flex items-center leading-1 gap-0.5">
                <span className="text-1.75">+</span> Add Card
            </p>
        </div>
    );
};
