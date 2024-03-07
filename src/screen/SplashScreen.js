import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login'); // AnaEkran, uygulamanın ana ekranının adı olarak düşünülmelidir
    }, 3000); // 3000 milisaniye (3 saniye) sonra ana ekrana geçiş yapacak şekilde ayarlandı, istediğiniz gibi değiştirebilirsiniz
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/senanurerdem/Desktop/ToDo/assets/images/splash-image.png')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Splash ekranının arka plan rengi
  },
});

export default SplashScreen;
