import { Helmet } from 'react-helmet-async'
import { MonthCard } from './month-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { CanceledAmountCard } from './month-canceled-orders-amount'
import { RevenueChart } from './revenue-chart'
import { PopularProductsChart } from './popular-products-chart'

export function Dashboard(){
  return (
    <>
    <Helmet title="Dashboard"/>
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

      <div className='grid grid-cols-4 gap-4'>
        <MonthCard/>
        <MonthOrdersAmountCard/>
        <DayOrdersAmountCard/>
        <CanceledAmountCard/>
      </div>
      <div className='grid grid-cols-9 gap-4'>
        <RevenueChart/>
        <PopularProductsChart/>
      </div>
    </div>
    </>
  )
}