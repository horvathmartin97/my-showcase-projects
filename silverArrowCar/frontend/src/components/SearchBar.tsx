import { useState, useCallback, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "./ui/select";
import ORDER_OPTIONS from "@/constants/searchBar";

type FormState = {
  query: string;
  order: string;
};

type SearchBarProps = {
  onSearch: (params: { query: string; order: string }) => void;
  initialQuery: string;
  initialOrder: string;
};

export default function SearchBar(props: SearchBarProps) {
  const { onSearch, initialOrder, initialQuery } = props;
  const [formState, setFormState] = useState<FormState>({
    query: initialQuery,
    order: initialOrder,
  });

  useEffect(() => {
    setFormState({
      query: initialQuery,
      order: initialOrder,
    });
  }, [initialQuery, initialOrder]);

  const handleQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev: FormState) => ({
        ...prev,
        query: e.target.value,
      }));
    },
    []
  );

  const handleOrderChange = useCallback((value: string) => {
    setFormState((prev: FormState) => ({ ...prev, order: value }));
  }, []);

  const handleSearch = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      onSearch(formState);
    },
    [onSearch, formState]
  );

  return (
    <form onSubmit={handleSearch}>
      <Input
        className="my-2"
        id="searchInput"
        type="search"
        placeholder="Keresés"
        value={formState.query}
        onChange={handleQueryChange}
      />
      <div className="flex mb-2 justify-between">
        <Button type="button" variant="outline" onClick={handleSearch}>
          Keresés
        </Button>
        <div>
          <Select onValueChange={handleOrderChange} value={formState.order}>
            <SelectTrigger>
              <SelectValue defaultValue="abc_asc" placeholder="Order by" />
            </SelectTrigger>
            <SelectContent>
              {ORDER_OPTIONS.map(({ group, items }) => (
                <SelectGroup key={group}>
                  <SelectLabel>{group}</SelectLabel>
                  {items.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  );
}
