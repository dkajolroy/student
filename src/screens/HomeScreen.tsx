import {Box, Flex, Wrap} from '@react-native-material/core';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {categoryData} from '../constants/data';

const {width, height} = Dimensions.get('screen');
const margin = 10;
const container = width - margin * 2;
export default function HomeScreen() {
  return (
    <Flex fill m={margin} bg="#fff">
      <SafeAreaView>
        <Wrap>
          {categoryData.map((item, index) => (
            <Flex
              key={index}
              justify="center"
              items="center"
              h={container / 3}
              w={container / 3}>
              <Box m={2}>
                <TouchableOpacity>
                  <Image style={styles.fileIcons} source={item.image} />
                </TouchableOpacity>
              </Box>
            </Flex>
          ))}
        </Wrap>
      </SafeAreaView>
    </Flex>
  );
}
const styles = StyleSheet.create({
  fileIcons: {
    width: width / 4,
    height: width / 4,
    resizeMode: 'contain',
    borderRadius: 20,
  },
});
