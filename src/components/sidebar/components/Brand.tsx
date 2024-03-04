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
			<div className=' text-200px'>DormSwap</div>
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
