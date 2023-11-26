import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { trpc } from '@/utils/trpc'

const inter = Inter({ subsets: ['latin'] })

const  Home : React.FC = () => {

  const {data} = trpc.hello.useQuery({text: 'sujay'});
  const client = trpc.hello.useQuery({text: 'client'});
  const person = trpc.person.hello.useQuery({
    firstName: 'sujay',
    lastName: 'shanbhag',
  });
  const mutation  = trpc.object.create.useMutation();
  
  const handleClick = () => {
     mutation.mutate({
      objectName: 'apple',
      quantity: 5
    });
  }
  

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <p>{data?.greeting}</p>
          <p>{client.data?.greeting}</p>
          <p>{person.data?.hello}</p>
          <button onClick={handleClick}>click</button>
          <p>{mutation.data?.result}</p>
        </div>
      </main>
    </>
  )
}
export default Home;
