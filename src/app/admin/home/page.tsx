'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import CheckTable from 'views/admin/dataTables/components/CheckTable';
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable';
import ComplexTable from 'views/admin/dataTables/components/ComplexTable';
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment';
import tableDataCheck from 'views/admin/dataTables/variables/tableDataCheck';
import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns';
import tableDataComplex from 'views/admin/dataTables/variables/tableDataComplex';
import React from 'react';
import AdminLayout from 'layouts/admin';
import Projects from 'views/admin/profile/components/Projects';

import banner from 'img/auth/banner.png';
import avatar from 'img/avatars/avatar4.png';


export default function home() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        
        <ComplexTable tableData={tableDataComplex} />
        <Projects
          banner={banner}
          avatar={avatar}
          name="Adela Parkson"
          job="Product Designer" 
          posts="17"
          followers="9.7k"
          following="274"
        />
      </SimpleGrid>
    </Box>
  );
}
