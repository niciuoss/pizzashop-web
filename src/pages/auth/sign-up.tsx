import {Helmet} from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const signUpForm = z.object({
  nomeRestaurant: z.string(),
  phone: z.string(),
  managerName: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp(){
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { isSubmitting }} = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm){
    try{
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in')
        },
      }) 
    }catch{
      toast.error('Erro ao cadastrar restaurante.')
    }
  }
  
  return (
    <>

      <Helmet title="Cadastro"/>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">
            Fazer login
          </Link>
        </Button>
        
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Comece a vender agora e seja nosso parceiro!                              
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor='nomeRestaurant'>Nome do restaurante</Label>
              <Input id='nomeRestaurant' type='email' {...register('nomeRestaurant')}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor='managerName'>Seu nome</Label>
              <Input id='managerName' type='managerName' {...register('managerName')}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input id='email' type='email' {...register('email')}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor='phone'>Número de celular</Label>
              <Input id='phone' type='phone' {...register('phone')}/>
            </div>

            <Button disabled={isSubmitting} className='w-full' type="submit">
              Finalizar
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">Ao continuar você concorda com os {' '}<a className="underline underline-offset-4" href="">Termos de Serviço</a> e {' '}<a className="underline underline-offset-4" href="">Políticas de Privacidade</a></p>
          </form>
        </div>
      </div>
    </>
  )
}