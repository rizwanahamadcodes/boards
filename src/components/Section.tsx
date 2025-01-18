import clsx from "clsx";
import { forwardRef } from "react";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
    children?: React.ReactNode;
    defaultPadding?: boolean;
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    (props, ref) => {
        const {
            children,
            defaultPadding = true,
            className,
            ...otherProps
        } = props;

        return (
            <section
                ref={ref}
                className={clsx(
                    "scroll-mt-navHeight",
                    defaultPadding ? "py-3" : "",
                    className
                )}
                {...otherProps}>
                {children}
            </section>
        );
    }
);

type PageTitleProps = {
    children: React.ReactNode;
    defaultBottomMargin?: boolean;
    className?: string;
};
export const PageTitle = (props: PageTitleProps) => {
    const { className, defaultBottomMargin = true, children } = props;

    return (
        <h2
            className={clsx(
                "lg:text-2.5 md:text-2.25 sm:text-2 text-1.75 font-bold text-primary-950",
                defaultBottomMargin ? "mb-0.625" : "",
                className
            )}>
            {children}
        </h2>
    );
};
type SectionTitleProps = {
    children: React.ReactNode;
    defaultBottomMargin?: boolean;
    className?: string;
};
export const SectionTitle = (props: SectionTitleProps) => {
    const { className, defaultBottomMargin = true, children } = props;

    return (
        <h2
            className={clsx(
                "lg:text-2 md:text-1.75 sm:text-1.75 text-1.5  font-medium text-primary-950",
                defaultBottomMargin ? "mb-0.5" : "",
                className
            )}>
            {children}
        </h2>
    );
};
type HeadingRowProps = React.ComponentPropsWithoutRef<"div"> & {
    defaultBottomMargin?: boolean;
};
export const HeadingRow = (props: HeadingRowProps) => {
    const { className, defaultBottomMargin = true, children } = props;

    return (
        <div className={clsx("", defaultBottomMargin ? "mb-1" : "", className)}>
            {children}
        </div>
    );
};
type SectionSubtitleProps = {
    children: React.ReactNode;
    defaultBottomMargin?: boolean;
    className?: string;
};
export const SectionSubtitle = (props: SectionSubtitleProps) => {
    const { className, defaultBottomMargin = true, children } = props;

    return (
        <h2
            className={clsx(
                "text-1.125 md:text-1.25 text-gray-700 font-normal",
                defaultBottomMargin ? "mb-2" : "",
                className
            )}>
            {children}
        </h2>
    );
};
type SectionCategoryTitleProps = {
    children: React.ReactNode;
    className?: string;
};
export const SectionCategoryTitle = (props: SectionCategoryTitleProps) => {
    const { className, children } = props;

    return (
        <h3 className={clsx("text-1.25 font-medium text-gray-950", className)}>
            {children}
        </h3>
    );
};

export default Section;
