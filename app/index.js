import {View, ScrollView, SafeAreaView} from 'react-native';
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons } from '../constants';
import { Welcome, ScreenHeaderBtn, QuickIdeas } from '../components';

const Home = () => {
    const router = useRouter();
    return (
       <SafeAreaView
           style={{ flex: 1, backgroundColor: COLORS.black }}
       >
           <Stack.Screen
               options={{
                   headerStyle: { backgroundColor: COLORS.black },
                   headerShadowVisible: false,
                   headerLeft: () => (
                        <ScreenHeaderBtn icon={icons.menu} dimension="60%" />
                   ),
                   headerTitle: ""
               }}
           />
           <ScrollView showsVerticalScrollIndicator={false}>
               <View
                   style={{ flex: 1, padding: SIZES.medium }}
               >
                   <Welcome />
                   <QuickIdeas />
               </View>
           </ScrollView>
       </SafeAreaView>
    )
}
export default Home;