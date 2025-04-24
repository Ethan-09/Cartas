import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';

export const MyFooter = () => {
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/ethan-hernandez-botia/');
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2025 Cartitas -{' '}
        <Pressable onPress={openLinkedIn}>
          <Text style={styles.link}>Ethan Hernández Botia</Text>
        </Pressable>{' '}
        -
      </Text>
    </View>
  );
};



const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
