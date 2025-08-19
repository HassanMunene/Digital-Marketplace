import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


type Options = {
  currency?: "KES" | "KSH";
  notation?: Intl.NumberFormatOptions["notation"]
}
export function formatPrice(price: number | string, options: Options = {}) {
  const { currency = "KSH", notation = "compact" } = options;
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

  return new Intl.NumberFormat('en-us', {
    style: "currency",
    currency: currency,
    notation: notation,
    maximumFractionDigits: 2
  }).format(numericPrice);
}