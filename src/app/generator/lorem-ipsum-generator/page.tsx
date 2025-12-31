import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { FormLoremIpsumGenerator } from './_components/form-lorem-ipsum-generator'

export default function LoremIpsumGeneratorPage() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <Heading
        title='Lorem Ipsum Generator'
        description='Generate Lorem Ipsum placeholder text.'
      />
      <FormLoremIpsumGenerator />
    </Container>
  )
}
