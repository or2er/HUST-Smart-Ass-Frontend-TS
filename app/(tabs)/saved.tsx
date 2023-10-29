import { StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import Markdown from 'react-native-markdown-display';
import { Text, View } from '@/components/Themed';
import { useLocalSearchParams } from 'expo-router';
import { BACKEND_URL } from "@env"

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
export default function SavedScreen() {
  const { id } = useLocalSearchParams();
  const [content, setContent] = useState('');
  const requestUri = "http://" + BACKEND_URL;

  useEffect(() => {

        var formdata = new FormData();
        formdata.append("id", id.toString());

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${requestUri}/doc/md`, requestOptions)
          .then(response => response.json())
          .then(result => {
            setContent(result.data);
          })
  }, [id]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Markdown >{content}</Markdown>
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
