import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Utensils } from "lucide-react";

export function DayOrdersAmountCard(){
  return(
    <Card>
      <CardHeader className='flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-base font-semibold'>Pedidos no dia</CardTitle>
        <Utensils className='h-4 w-4 text-muted-foreground'/>
      </CardHeader>
      <CardContent className='space-y-2'>
        <span className='text-2xl font-bold tracking-tight'>15</span>
        <p> <span className="text-rose-500 dark:text-rose-400">-6,2% </span>em relação a ontem</p>
      </CardContent>
    </Card>
  )
}