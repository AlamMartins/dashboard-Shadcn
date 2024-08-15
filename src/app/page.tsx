import React from 'react'
import ChartOverView from '../components/chart/index'
import Sales from '../components/sales/index'
import {DollarSign, BadgeDollarSign} from "lucide-react"
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card'

const page = () => {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card>  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Total de Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de Vendas em 90 dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">
                R$ 1.000.000
              </p>
            </CardContent>

          </CardHeader>
        </Card>

        <Card>  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Novos Clientes
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Novos clientes em 30 dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">
                234
              </p>
            </CardContent>

          </CardHeader>
        </Card>

        <Card>  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Pedidos hoje
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de pedidos hoje
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">
                65
              </p>
            </CardContent>

          </CardHeader>
        </Card>

        <Card>  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Total Pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de Pedidos em 30 dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">
                98
              </p>
            </CardContent>

          </CardHeader>
        </Card>

      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
       <ChartOverView/>
       <Sales/>
      </section> 

    </main>
  )
}

export default page
