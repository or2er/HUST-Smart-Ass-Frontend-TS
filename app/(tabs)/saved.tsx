import { StyleSheet, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Text, View } from '@/components/Themed';

const markdownContent = `
# Markdown Example

This is an example of rendering Markdown in a React Native app.

**Bold text**

*Italic text*

- List item 1
- List item 2
- List item 3
![Nguyen Quang Ninh](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
![Nguyen Quang Ninh](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
![Nguyen Quang Ninh](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
![Nguyen Quang Ninh](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
`;
export default function SavedScreen() {    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <Markdown >{markdownContent}</Markdown>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: 'white',
      },
});
