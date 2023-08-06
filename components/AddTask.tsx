import { Flex, Input, Button } from "@chakra-ui/react"
import { SmallAddIcon } from '@chakra-ui/icons'

import { AddTaskProps } from "@types"

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
        <Input 
            placeholder='Nouvelle tâche...' 
            size='lg' 
            onChange={(e) => setTask(e.target.value)} 
            value={task}
            style={{ 'background': '#fff' }}
        />
        <Button 
            colorScheme='twitter' 
            size='lg'
            onClick={() => handleCreateTask()}
        >
            <SmallAddIcon />
        </Button>
    </Flex>
  )
}

export default AddTask