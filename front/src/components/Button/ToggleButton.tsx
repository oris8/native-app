import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '@/constants';

interface ToggleItemProps extends PressableProps {
  active: boolean;
  children: React.ReactNode;
}

interface ToggleButtonProps {
  items: ToggleItemProps[];
}

export default function ToggleButton({items}: ToggleButtonProps) {
  return (
    <View style={styles.toggle}>
      {items.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={[styles.toggleItem, item.active && styles.activeToggleItem]}
            {...item}>
            <Text>{item.children}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  toggle: {
    width: '100%',
    height: 42,
    backgroundColor: colors.GRAY_200,
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 16,
  },

  toggleItem: {
    width: '50%',
    height: '100%',
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.GRAY_200,
  },

  activeToggleItem: {
    backgroundColor: colors.WHITE,

    // Adding shadow styles for active item
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android
  },
});
