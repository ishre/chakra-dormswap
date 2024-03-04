// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Avatar4 from 'img/avatars/avatar4.png';
import { Text } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
<<<<<<< HEAD
			<div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'gray' }}>DormSwap</div>
=======
			<div className= 'text-xl'>DormSwap</div>
>>>>>>> cd50e6bfe4d66455379272deca09192ba7049d7b
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
