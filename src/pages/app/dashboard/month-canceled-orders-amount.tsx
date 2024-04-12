import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ban, DollarSign } from "lucide-react";

export function CanceledAmountCard(){
  return(
    <Card>
      <CardHeader className='flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-base font-semibold'>Pedidos cancelados no mês</CardTitle>
        <Ban className='h-4 w-4 text-muted-foreground'/>
      </CardHeader>
      <CardContent className='space-y-2'>
        <span className='text-2xl font-bold tracking-tight'>7</span>
        <p> <span className="text-emerald-500 dark:text-emerald-400">-2% </span>em relação a ontem</p>
      </CardContent>
    </Card>
  )
}