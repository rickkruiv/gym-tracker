import { View, Text, Pressable, StyleSheet, Animated, Easing } from 'react-native';
import { useState, useRef } from 'react';
import { Plus, Barbell, PersonSimpleRun } from 'phosphor-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export type FloatingAction = {
   label: string
   icon: keyof typeof Ionicons.glyphMap
   onPress: () => void
}

type FloatingMenuProps = {
   actions: FloatingAction[]
}

export function FloatingMenu({ actions }: FloatingMenuProps) {
   const [open, setOpen] = useState(false);

   const rotateAnim = useRef(new Animated.Value(0)).current;
   const fadeAnim = useRef(new Animated.Value(0)).current;
   const slideAnim = useRef(new Animated.Value(0)).current;

   const toggleMenu = () => {
      const toValue = open ? 0 : 1;
      setOpen(!open)

      Animated.parallel([
         Animated.timing(rotateAnim, {
            toValue,
            duration: 200,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
         }),

         Animated.timing(fadeAnim, {
            toValue,
            duration: 200,
            useNativeDriver: true,
         }),

         Animated.timing(slideAnim, {
            toValue: open ? 0 : 1,
            duration: 200,
            useNativeDriver: true,
         })
      ]).start();
   };

   const rotate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
   });

   useFocusEffect(
      useCallback(() => {
         return () => {
            setOpen(false)
            rotateAnim.setValue(0)
            fadeAnim.setValue(0)
            slideAnim.setValue(0)
         }
      }, [])
   )

   return (
      <>
         {open && (
            <Pressable style={styles.overlay} onPress={toggleMenu} />
         )}

         {open && (
            <View style={styles.menu}>
               {actions.map((action, i) => (
                  <Pressable
                     key={i}
                     style={styles.subButton}
                     onPress={() => {
                        action.onPress()
                        toggleMenu()
                     }}
                  >
                     <Ionicons name={action.icon} size={18} color="#020617" />
                     <Text style={styles.label}>{action.label}</Text>
                  </Pressable>
               ))}
            </View>
         )}

         <Pressable onPress={toggleMenu} style={styles.fabWrapper}>
            <LinearGradient colors={['#22c55e', '#16a34a']} style={styles.fab}>
               <Animated.View style={{ transform: [{ rotate }] }}>
                  <Plus size={26} weight="bold" color="#020617" />
               </Animated.View>
            </LinearGradient>
         </Pressable>
      </>
   )
}

const styles = StyleSheet.create({
   overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.6)',
   },

   fabWrapper: {
      position: 'absolute',
      bottom: 10,
      right: 20,
   },

   fab: {
      width: 56,
      height: 56,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 12,
   },

   menu: {
      position: 'absolute',
      bottom: 80,
      right: 22,
      gap: 16,
   },

   subButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#16a34a',
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 999,
      gap: 8,
   },

   label: {
      color: '#020617'
   }
})