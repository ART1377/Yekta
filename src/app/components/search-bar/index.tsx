"use client";

import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/app/components/ui/input/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu/dropdown-menu";
import { Button } from "@/app/components/ui/button/button";

export type SearchCriteria = "both" | "name" | "email";

interface SearchCriteriaOption {
  value: SearchCriteria;
  label: string;
  placeholder: string;
}

export const searchOptions: SearchCriteriaOption[] = [
  {
    value: "both",
    label: "نام و ایمیل",
    placeholder: "جستجو بر اساس نام یا ایمیل...",
  },
  { value: "name", label: "فقط نام", placeholder: "جستجو بر اساس نام..." },
  { value: "email", label: "فقط ایمیل", placeholder: "جستجو بر اساس ایمیل..." },
];

export function SearchBar({
  searchTerm,
  onSearchChange,
  searchCriteria,
  onSearchCriteriaChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  searchCriteria: SearchCriteria;
  onSearchCriteriaChange: (criteria: SearchCriteria) => void;
}) {
  const currentOption =
    searchOptions.find((o) => o.value === searchCriteria) || searchOptions[0];

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
      <Input
        type="text"
        placeholder={currentOption.placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-32 py-2 w-full"
        dir="rtl"
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs bg-muted/50 hover:bg-muted border-0 rounded-md cursor-pointer"
            >
              {currentOption.label}
              <ChevronDown className="h-3 w-3 mr-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            {searchOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => onSearchCriteriaChange(option.value)}
                className={`cursor-pointer ${searchCriteria === option.value ? "bg-accent" : ""}`}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
