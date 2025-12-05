// import { Text, View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
// import { useRouter } from 'expo-router';
// import Footer from '../../components/Footer';
// import Header from '../../components/Header';
// import Welcome from '../../components/Welcome';
// // import MenuItem from '../../components/MenuItem';
// import Feedback from '../../components/Feedback';

// export default function HomeScreen() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
//         <ScrollView keyboardDismissMode="on-drag">
//           <Header />
//           <Welcome />

//           <Pressable onPress={() => router.push('/menu')} style={{ backgroundColor: "#F4CE14", marginHorizontal: 50, borderRadius: 10, marginVertical: 40 }}>
//             <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 10 }}>
//               View Menu
//             </Text>
//           </Pressable>

//           <Feedback />
//           <Footer />
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#495E57',
//     justifyContent: 'space-between',
//   },
// });

