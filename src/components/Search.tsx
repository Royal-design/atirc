import { CiSearch } from "react-icons/ci";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const Search: React.FC<{
  isSearchClick: boolean;
  setIsSearchClick: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSearchClick, setIsSearchClick, setIsMobileMenuOpen }) => {
  return (
    <div className="relative flex items-center">
      {/* Mobile: Search icon button that expands input */}
      <Button
        className="md:hidden"
        variant="ghost"
        size="icon"
        onClick={() => {
          setIsSearchClick(!isSearchClick), setIsMobileMenuOpen(false);
        }}
        aria-label="Search"
      >
        <CiSearch className="w-5 h-5" />
      </Button>

      {/* Search input - hidden on mobile until clicked */}
      <div
        className={cn(
          "relative transition-all duration-300 rounded-md ease-in-out",
          "max-md:absolute max-md:right-0 max-md:top-full bg-white max-md:mt-2 max-md:z-50",
          isSearchClick
            ? "max-md:opacity-100 max-md:visible "
            : "max-md:opacity-0 max-md:invisible "
        )}
      >
        <Label className="sr-only">Search</Label>
        <Input
          className={cn(
            "border border-accent-grey-border focus-visible:ring-[1px] focus:ring-primary pl-8 pr-4",
            "transition-all duration-300 ease-in-out",
            "max-md:w-[280px] md:w-[342px]",
            isSearchClick
              ? "max-md:w-[280px] max-md:opacity-100"
              : "max-md:w-0 max-md:opacity-0 max-md:px-0 max-md:border-0"
          )}
          placeholder="Search"
          onBlur={() => setIsSearchClick(false)}
        />
        <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
};
