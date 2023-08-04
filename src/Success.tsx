import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Mixins } from './styles'
import { cameraIcon, fwdLogo, iconStep1, iconStep2, iconStep3 } from '../assets'
import { colorBlack3 } from './styles/colors'
import { Badge, Button, Checkbox, CheckCircleIcon, CheckIcon, Divider, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function Success() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', height: 30}}>
        <Image
          style={{ height: 30, width: 70 }}
          source={fwdLogo}
        />
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>Bạn cần trợ giúp?</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginTop: 50}}>
        <Text style={{marginRight: 10, color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Thank for watching</Text>
        <CheckCircleIcon size={6} color={'#56b333'}></CheckCircleIcon>
      </View>

      <View style={{marginTop: 30, justifyContent: 'center', flexDirection: 'row'}}>
        <Button backgroundColor={'#25474D'} style={{height: 50, width: 300, borderRadius: 10}} onPress={() => navigation.navigate('Home')
        }>
          <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
            {/*<Image source={cameraIcon} style={{height: 20, width: 20, tintColor: 'white', marginRight: 10}}/>*/}
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
              Thử lại
            </Text>
          </View>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingTop: Mixins.heightTabbar,
    backgroundColor: 'white',
  },
  filter: {
    marginBottom: 16,
  },
  flatlist: {
    paddingTop: 16,
    paddingBottom: 16 + 50,
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 35,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.colorWhite,
  },
  buttonOpen: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.colorBlack6,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonAdd: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    borderRadius: 100,
    backgroundColor: Colors.colorBlue1,
    padding: 12,
    ...Mixins.boxShadow(Colors.colorBlue3),
  },
  iconAdd: {
    width: 25,
    height: 25,
    tintColor: Colors.colorWhite,
  },
});
