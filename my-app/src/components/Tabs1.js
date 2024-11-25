import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex, Center } from '@chakra-ui/react';

function Tabs1() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
    >
    <Box p={4}>
      <Tabs variant="soft-rounded" colorScheme="teal" textAlign="Center">
        <TabList>
          <Tab>즉시제작</Tab>
          <Tab>길이 무제한</Tab>
          <Tab>무한소장</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex>
            <p >1.준비중</p>
            </Flex>
            <Flex>
            <p>2.준비중</p>
            </Flex>
            <Flex>
            <p>3.준비중</p>
            </Flex>
            
          </TabPanel>
          <TabPanel>
            <p></p>
          </TabPanel>
          <TabPanel>
            <p>Contact Information</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    </Flex>
  );
}

export default Tabs1;
