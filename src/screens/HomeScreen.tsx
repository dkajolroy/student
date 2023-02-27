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
import sizes from '../constants/sizes';

const {width, height} = Dimensions.get('screen');
const margin = sizes.small;
const container = width - margin * 2;
export default function HomeScreen() {
  return (
    <Flex fill bg="#fff">
      <SafeAreaView>
        <Box m={margin}>
          {/* All Category Rendered */}
          <Wrap>
            {categoryData.map((item, index) => (
              <Flex
                key={index}
                justify="center"
                items="center"
                h={container / 3 - 10}
                w={container / 3 - 10}>
                <Box>
                  <TouchableOpacity>
                    <Image style={styles.fileIcons} source={item.image} />
                  </TouchableOpacity>
                </Box>
              </Flex>
            ))}
          </Wrap>
          {/* End Category Rendered */}
        </Box>
      </SafeAreaView>
    </Flex>
  );
}
const styles = StyleSheet.create({
  fileIcons: {
    width: width / 5,
    height: width / 5,
    resizeMode: 'contain',
    borderRadius: sizes.small * 2,
  },
});
