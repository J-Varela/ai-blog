import Link from 'next/link'
import { Button } from './ui/button'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='py-6'>
      <div className='container flex max-w-3xl items-center justify-between'>
        <Link href='/'>
          <Logo />
        </Link>

        <Button size='sm' variant='ghost'>
          Sign in
        </Button>
      </div>
    </header>
  )
}
