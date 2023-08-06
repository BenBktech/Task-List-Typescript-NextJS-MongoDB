import React from 'react'
import { Card, Flex, Text, Button } from '@chakra-ui/react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

import { TaskProps } from '@types'

const Task = ({ individualTask, handleCompleteTask, handleDeleteTask }: TaskProps) => {
    
    console.log(individualTask)
    return (
      <Card p="2rem" mb="0.5rem" variant='outline' key={individualTask._id}>
        <Flex alignItems="center">
            {individualTask.completed ? (
            <Text flexGrow="1" as='del'>{individualTask.task}</Text>
            ) : (
            <Text flexGrow="1">{individualTask.task}</Text>
            )}
            <Flex>
            {individualTask.completed ? (
                <Button
                ml="1rem"
                colorScheme='whatsapp'
                onClick={() => handleCompleteTask(individualTask._id)}
                isDisabled
                >
                <CheckIcon />
                </Button>
            ) : (
                <Button
                ml="1rem"
                colorScheme='whatsapp'
                onClick={() => handleCompleteTask(individualTask._id)}
                >
                <CheckIcon />
                </Button>
            )}
            <Button
                ml="1rem"
                colorScheme='red'
                onClick={() => handleDeleteTask(individualTask._id)}
            >
                <DeleteIcon />
            </Button>
            </Flex>
        </Flex>
    </Card>
  )
}

export default Task