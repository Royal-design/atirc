import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

type Option = {
  value: string;
  label: string;
};

type SelectFilterProps = {
  placeholder: string;
  options: Option[];
  className?: string;
};

const SelectFilter = ({
  placeholder,
  options,
  className
}: SelectFilterProps) => {
  return (
    <Select>
      <SelectTrigger
        className={className || "w-[280px] border-accent-grey-3 text-xs"}
      >
        <SelectValue
          placeholder={<span className="text-accent-grey">{placeholder}</span>}
        />
      </SelectTrigger>
      <SelectContent className="bg-white border-accent-grey-3">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="hover:bg-accent-grey-3"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

// Type options
const TYPE_OPTIONS: Option[] = [
  { value: "article", label: "Article" },
  { value: "video", label: "Video" },
  { value: "podcast", label: "Podcast" },
  { value: "tutorial", label: "Tutorial" },
  { value: "case-study", label: "Case Study" },
  { value: "whitepaper", label: "Whitepaper" }
];

// Topic options
const TOPIC_OPTIONS: Option[] = [
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
  { value: "science", label: "Science" },
  { value: "health", label: "Health" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" }
];

// Date options
const DATE_OPTIONS: Option[] = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "year", label: "This Year" },
  { value: "last-year", label: "Last Year" },
  { value: "older", label: "Older" }
];

export function AllTypes() {
  return <SelectFilter placeholder="All Types" options={TYPE_OPTIONS} />;
}

export function FilterTopics() {
  return <SelectFilter placeholder="All Topics" options={TOPIC_OPTIONS} />;
}

export function FilterDates() {
  return <SelectFilter placeholder="All Dates" options={DATE_OPTIONS} />;
}
