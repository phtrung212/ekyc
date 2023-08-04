import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Mixins } from './styles'
import { fwdLogo, iconStep1, iconStep2, iconStep3 } from '../assets'
import { colorBlack3 } from './styles/colors'
import { Badge, Button, Checkbox, Divider, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
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
      <View>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 10, textAlign: 'center' }}>Xác minh danh tính</Text>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 30, textAlign: 'center' }}>Bắt đầu xác minh danh tính sau khi hiểu rõ các quy định
          khi xác minh và các bước dưới đây:</Text>
        <View style={{
          borderColor: colorBlack3,
          borderRadius: 20,
          // width: 200,
          height: 150,
          borderStyle: 'solid',
          borderWidth: 2,
          marginTop: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
          <View style={{width: 100, alignItems: 'center'}}>
            <VStack>
              <Badge // bg="red.400"
                bg={'#25474D'}
                rounded="full" mb={-4} ml={-4} zIndex={1} variant="solid" alignSelf="flex-start" _text={{
                fontSize: 12
              }}>
                1
              </Badge>
              <Image style={{width: 40, height: 40}} source={iconStep1}></Image>
            </VStack>
            <Text style={{color: 'black', textAlign: 'center', marginTop: 10}}>Chụp ảnh giấy tờ tùy thân</Text>
          </View>
          <Divider orientation={'vertical'}></Divider>
          <View style={{width: 100, alignItems: 'center'}}>
            <VStack>
              <Badge // bg="red.400"
                bg={'#25474D'}
                rounded="full" mb={-4} ml={-4} zIndex={1} variant="solid" alignSelf="flex-start" _text={{
                fontSize: 12
              }}>
                2
              </Badge>
              <Image style={{width: 40, height: 40}} source={iconStep2}></Image>
            </VStack>
            <Text style={{color: 'black', textAlign: 'center', marginTop: 10}}>Xác nhận thông tin</Text>
          </View>
          <Divider orientation={'vertical'}></Divider>
          <View style={{width: 100, alignItems: 'center'}}>
            <VStack>
              <Badge // bg="red.400"
                bg={'#25474D'}
                rounded="full" mb={-4} ml={-4} zIndex={1} variant="solid" alignSelf="flex-start" _text={{
                fontSize: 12
              }}>
                3
              </Badge>
              <Image style={{width: 40, height: 40}} source={iconStep3}></Image>
            </VStack>
            <Text style={{color: 'black', textAlign: 'center', marginTop: 10}}>Xác thực khuôn mặt</Text>
          </View>
        </View>
        <View style={{marginTop: 50, flexWrap: 'wrap'}}>
          <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked>
            <Text style={{color: 'black'}}>Tôi đồng ý với Chính sách bảo mật và Điều khoản sử dụng của FWD khi tiến hành xác minh danh tính.</Text>
          </Checkbox>
        </View>
        <View style={{marginTop: 50, justifyContent: 'center', flexDirection: 'row'}}>
          <Button backgroundColor={'#25474D'} style={{height: 70, width: 300, borderRadius: 10}} onPress={() => navigation.navigate('IdCertification')
          }>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>Bắt đầu</Text>
          </Button>
        </View>
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
