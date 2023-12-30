import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectStatus({ handleStatusChange, defaultValue }: any) {
  return (
    <Select defaultValue={defaultValue} onValueChange={handleStatusChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="pending">pending</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
