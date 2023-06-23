import {View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {COLORS, icons} from '../../../constants';
import styles from './welcome.style';
const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.welcomeMessage}>
                    FUN
                    <Text style={styles.messagePlain}>Logical</Text>
                </Text>
                <Text style={styles.branding}>
                    Logic sounds like socialism. Take back freedom at your next school board meeting with FunLogical.
                </Text>
            </View>
            <View>
                <Text
                    style={styles.searchMessage}
                >Find something divisive</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={""}
                        onChange={() => {}}
                        placeholderTextColor={COLORS.lightwhite}
                        placeholder={"Enter a tag like 'Jesus'..."}
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Image
                        source={icons.search}
                        resizeMode={"contain"}
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Welcome;