// Chakra imports
import { Text, useColorModeValue } from '@chakra-ui/react'
// Assets
import Project1 from 'img/profile/Project1.png'
import Project2 from 'img/profile/Project2.png'
import Project3 from 'img/profile/Project3.png'
// Custom components
import Card from 'components/card/Card'
import Project from 'views/admin/profile/components/Project'

export default function Projects (props: { [x: string]: any }) {
  const { ...rest } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset'
  )
  return (
    <Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'
      >
        Greveiances
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>

      All the issues raised will be adressed here itself
      </Text>
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={Project1}
        ranking='1'
        link='#'
        title='21BCG10248 Raised an issue request'
      />
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={Project2}
        ranking='2'
        link='#'
        title='21BCY10224 raised an issue request'
      />
      <Project
        boxShadow={cardShadow}
        image={Project3}
        ranking='3'
        link='#'
        title='21BCE10235 raised an issue request'
      />
    </Card>
  )
}
