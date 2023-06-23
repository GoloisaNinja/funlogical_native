import { View, Text } from 'react-native';
import styles from "./ideacard.style";
const IdeaCard = ({ issue }) => {
    const {title, idea, followUp, tags} = issue;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cardText}>{`Main Point: ${idea}`}</Text>
            <Text style={styles.cardText}>{`Follow Up: ${followUp}`}</Text>
            <View style={styles.tagsContainer}>
                {tags.map((tag, index) => (
                    <View key={`tagkey-${index}-${tag}`} style={styles.tagContainer}>
                        <Text style={styles.tag}>{tag}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}
export default IdeaCard