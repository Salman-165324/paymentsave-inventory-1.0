'use client';

import { cn } from '@/lib/utils';

export function Table({ 
  className, 
  children, 
  ...props 
}) {
  return (
    <div className="w-full overflow-visible">
      <table className={cn('w-full table-standard', className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ 
  className, 
  children, 
  ...props 
}) {
  return (
    <thead className={cn('', className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ 
  className, 
  children, 
  ...props 
}) {
  return (
    <tbody className={cn('', className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableFooter({ 
  className, 
  children, 
  ...props 
}) {
  return (
    <tfoot className={cn('border-t bg-muted/50 font-medium', className)} {...props}>
      {children}
    </tfoot>
  );
}

export function TableRow({ 
  className, 
  children, 
  ...props 
}) {
  return (
    <tr className={cn('border-b hover:bg-muted/50 transition-colors', className)} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({ 
  className, 
  children, 
  ...props 
}) {
  return (
    <th className={cn('text-left p-3 font-medium bg-muted/50', className)} {...props}>
      {children}
    </th>
  );
}

export function TableCell({ 
  className, 
  children, 
  ...props 
}) {
  return (
    <td className={cn('p-3', className)} {...props}>
      {children}
    </td>
  );
}

export function TableCaption({ 
  className, 
  children, 
  ...props 
}) {
  return (
    <caption className={cn('mt-4 text-sm text-muted-foreground', className)} {...props}>
      {children}
    </caption>
  );
}