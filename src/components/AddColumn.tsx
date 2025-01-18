export type AddColumnProps = {};

export const AddColumn = (props: AddColumnProps) => {
    return (
        <div className="shrink-0 flex w-16 h-3 justify-center px-1 flex-col rounded-1 bg-black/10 shadow-sm cursor-pointer">
            <p className="font-medium text-gray-800 flex items-center leading-1 gap-0.5">
                <span className="text-1.75">+</span> Add Card
            </p>
        </div>
    );
};
