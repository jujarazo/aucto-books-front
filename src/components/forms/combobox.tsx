'use client';

import React, { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type ComboboxProps = {
  value: string;
  selectedLabel: string;
  onChange: (value: string, selectedLabel: string) => void;
  onInputChange?: (query: string) => void;
  selectText: string;
  searchText: string;
  notFoundText: string;
  options: { value: string; label: string }[];
};

const Combobox = React.forwardRef((props: ComboboxProps, ref) => {
  const {
    value,
    selectedLabel,
    options,
    searchText,
    selectText,
    notFoundText,
    onChange,
    onInputChange,
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        {/* Select Input Button */}
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between w-full"
          >
            {value ? selectedLabel : selectText}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[330px] md:w-[510px] p-0">
          {/* List the options (filter set to false because it comes from the BE) */}
          <Command shouldFilter={false}>
            {/* Search input */}
            <CommandInput
              onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) =>
                onInputChange?.(e.target.value)
              }
              placeholder={searchText}
            />
            <CommandList>
              <CommandEmpty>{notFoundText}</CommandEmpty>
              {/* Group the props options */}
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      onChange(option.value, option.label);
                      setOpen(false);
                    }}
                    className={cn({
                      'data-disabled="true"': value === option.value,
                    })}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === option.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
});

export { Combobox };
