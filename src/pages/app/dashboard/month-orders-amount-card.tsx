import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Utensils } from "lucide-react";

export function MonthOrdersAmountCard(){
  return(
    <Card>
      <CardHeader className='flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-base font-semibold'>Pedidos no mês</CardTitle>
        <Utensils className='h-4 w-4 text-muted-foreground'/>
      </CardHeader>
      <CardContent className='space-y-2'>
        <span className='text-2xl font-bold tracking-tight'>452</span>
        <p> <span className="text-emerald-500 dark:text-emerald-400">+2% </span>em relação ao mês passado</p>
      </CardContent>
    </Card>
  )
}