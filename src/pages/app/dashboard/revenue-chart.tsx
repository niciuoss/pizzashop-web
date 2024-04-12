import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import colors from 'tailwindcss/colors'
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip} from 'recharts'

const data = [
  { date: '10/12', revenue: 1450 },
  { date: '11/12', revenue: 3253 },
  { date: '12/12', revenue: 850 },
  { date: '13/12', revenue: 1040 },
  { date: '14/12', revenue: 805 },
  { date: '15/12', revenue: 1211 },
  { date: '16/12', revenue: 1008 }
]

export function RevenueChart(){

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{fontSize: 12}}>
            
            <XAxis 
              dataKey="date" 
              tickLine={false} 
              axisLine={false} 
              dy={17}
            />
            
            <YAxis 
              stroke="#888"
              width={80} 
              axisLine={false} 
              tickLine={false}
              tickFormatter={(value: number) => 
                value.toLocaleString('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted"/>

            <Line 
              type="linear" 
              strokeWidth={2} 
              dataKey="revenue" 
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}