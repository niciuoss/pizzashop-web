import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

// export interface OrderTableProps {}

export function OrderTableRow(){
  return(
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3"/>
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>          
      <TableCell className="font-mono text-xs font-medium">
        234gfg435435c678s5465e
      </TableCell>
      <TableCell className="text-muted-foreground">
        há 15 minutos
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-orange-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">
        Confeitaria Feito com Amor
      </TableCell>
      <TableCell className="font-medium">
        R$ 48,90
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <ArrowRight className="h-3 w-3 mr-2"/>
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="h-3 w-3 mr-2"/>
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
