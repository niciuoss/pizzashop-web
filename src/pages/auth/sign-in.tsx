import {Helmet} from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn(){
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm){
    try{
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Um link de confirmação foi enviado para seu email', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data)
        },
      })
      //console.log(data)
    }catch{
      toast.error('Por favor, preencha o campo corretamente')
    }
  }
  
  return (
    <>

      <Helmet title="Login"/>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">
            Novo estabelecimento
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel de parceiro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input id='email' type='email' {...register('email')}/>
            </div>
            
            <Button disabled={isSubmitting} className='w-full' type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}