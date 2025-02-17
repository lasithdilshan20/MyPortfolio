import { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CollapsibleTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export function CollapsibleText({ text, maxLength = 200, className }: CollapsibleTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldCollapse = text.length > maxLength;
  
  const displayText = isExpanded ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-muted-foreground">
        {displayText}
      </p>
      {shouldCollapse && (
        <Button 
          variant="link" 
          className="p-0 h-auto font-normal text-primary"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "See Less" : "See More"}
        </Button>
      )}
    </div>
  );
}
