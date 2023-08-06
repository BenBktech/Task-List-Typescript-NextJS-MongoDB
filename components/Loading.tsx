import { Flex, Spinner } from "@chakra-ui/react"

const Loading = () => {
  return (
    <Flex justifyContent='center' alignItems='center' width='100%' height='100%'>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='black.500'
        size='xl'
        mt="2rem"
        />
    </Flex>
  )
}

export default Loading