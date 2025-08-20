export interface PaginationProps {
    previousLink?: string;
    nextLink?: string;
    currentPage: number;
    totalPages: number;
    href: string;
}