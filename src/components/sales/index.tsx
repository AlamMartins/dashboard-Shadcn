
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card'
import {DollarSign, BadgeDollarSign, CircleDollarSign} from "lucide-react"
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar'

export default function Sales(){
    return (
        <Card className="flex-1">  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Últimos Clientes
              </CardTitle>
              <CircleDollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Novos clientes nas últimas 24 horas
            </CardDescription>
          </CardHeader>

            <CardContent>
             <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/alammartins.png"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text=sm sm:text-base font-semibold">Alam Martins - AM Solutions</p>
                    <span className="text-[12px] sm:text-sml text-gray-400">alam.gv@gmail.com</span>
                </div>
             </article>

             <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/alammartins.png"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text=sm sm:text-base font-semibold">Alam Martins - AM Solutions</p>
                    <span className="text-[12px] sm:text-sml text-gray-400">alam.gv@gmail.com</span>
                </div>
             </article>
             
             <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/alammartins.png"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text=sm sm:text-base font-semibold">Alam Martins - AM Solutions</p>
                    <span className="text-[12px] sm:text-sml text-gray-400">alam.gv@gmail.com</span>
                </div>
             </article>
            </CardContent>

        </Card>
    )
}