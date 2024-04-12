import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCard(){
  return(
    <Card>
      <CardHeader className='flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-base font-semibold'>Receita total do mês</CardTitle>
        <DollarSign className='h-4 w-4 text-muted-foreground'/>
      </CardHeader>
      <CardContent className='space-y-2'>
        <span className='text-2xl font-bold tracking-tight'>R$ 6034,78</span>
        <p> <span className="text-emerald-500 dark:text-emerald-400">+0,5% </span>em relação ao mês passado</p>
      </CardContent>
    </Card>
  )
}
        