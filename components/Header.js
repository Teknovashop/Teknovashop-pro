
'use client';import Link from 'next/link';import {usePathname} from 'next/navigation';import clsx from 'clsx';
const Nav=({href,children})=>{const p=usePathname();const a=p===href;return(<Link href={href} className={clsx('px-3 py-2 rounded-lg',a?'bg-gray-800':'hover:bg-gray-800/60')}>{children}</Link>)};
export default function Header(){return(<header className='border-b border-gray-800 sticky top-0 bg-black/60 backdrop-blur'><div className='container flex items-center justify-between py-4'><Link href='/' className='text-xl font-extrabold'><span className='text-brand-500'>Teknova</span>shop</Link><nav className='flex gap-1 text-sm'><Nav href='/'>Inicio</Nav><Nav href='/categories'>Categorías</Nav><Nav href='/newsletter'>Newsletter</Nav></nav></div></header>);}
