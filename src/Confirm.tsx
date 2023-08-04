// import 'react-native-reanimated'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Mixins } from './styles'
import { cameraIcon, fwdLogo, iconStep1, userAvatar } from '../assets'
import { Badge, Box, Button, Center, CheckCircleIcon, CheckIcon, Divider, Heading, HStack, Icon, Stack } from 'native-base'
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera'
import { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

type deviceType = {
  original: any[];
  filter: any[];
  area: any[];
};
export default function Confirm() {
  const [side, setSide] = useState('front')

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
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 10, textAlign: 'center' }}>Xác nhận thông tin</Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', marginTop: 10, alignItems: 'center'}}>
        <CheckCircleIcon size={6} color={'#25474D'}></CheckCircleIcon>
        <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
        <Badge // bg="red.400"
          bg={'#25474D'}
          rounded="full" zIndex={1} variant="solid" alignSelf="flex-start" _text={{
          fontSize: 12
        }}>
          2
        </Badge>

        <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
        <Badge // bg="red.400"
          bg={'white'}
          rounded="full" zIndex={1} variant="outline" alignSelf="flex-start" _text={{
          fontSize: 12
        }}>
          3
        </Badge>
      </View>
      <Box alignItems="center" style={{marginTop: 15}}>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{ borderColor: "coolGray.600", backgroundColor: "gray.700" }}
          _web={{ shadow: 2, borderWidth: 0 }}
          _light={{ backgroundColor: "gray.50" }}
        >
          <View>
            <Image source={userAvatar} style={{height: 50, width: 50, alignSelf: 'center', marginTop: 20}}/>
          </View>
          <Stack p="4" direction={'row'} space={20} style={{justifyContent: 'space-between'}}>
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
                Họ và tên:
              </Text>
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
                Nguyễn Văn A
              </Text>
          </Stack>
          <Stack p="4" direction={'row'} mb="1.5" mt="1.5" space={20} style={{justifyContent: 'space-between'}}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
              Ngày sinh:
            </Text>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
              01/01/1997
            </Text>
          </Stack>
          <Stack p="4" direction={'row'} mb="1.5" mt="1.5" space={20} style={{justifyContent: 'space-between'}}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
              Số CMND/CCCD:
            </Text>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
              0123456789
            </Text>
          </Stack>
          <Stack p="4" direction={'row'} mb="1.5" mt="1.5" space={20} style={{justifyContent: 'space-between'}}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
              Ngày cấp:
            </Text>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
              01/01/2008
            </Text>
          </Stack>
          <Stack p="4" direction={'row'} mb="1.5" mt="1.5" space={20} style={{justifyContent: 'space-between'}}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
              Nơi cấp:
            </Text>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
              TP HCM
            </Text>
          </Stack>
        </Box>
      </Box>
      <View style={{marginTop: 50, justifyContent: 'center', flexDirection: 'row'}}>
        <Button backgroundColor={'#25474D'} style={{height: 50, width: 300, borderRadius: 10}} onPress={() => navigation.navigate('FaceDetection')}>
          <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
            <CheckIcon size={6} color={'white'} style={{height: 20, width: 20, tintColor: 'white', marginRight: 10}}></CheckIcon>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
              Xác nhận
            </Text>
          </View>
        </Button>
      </View>
      <View style={{marginTop: 10, justifyContent: 'center', flexDirection: 'row'}}>
        <Button variant={'outline'} backgroundColor={'white'} style={{height: 50, width: 300, borderRadius: 10}} onPress={() => navigation.navigate('IdCertification')}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Huỷ bỏ</Text>
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
  camera: {
    height: 260,
    width: '92%',
    alignSelf: 'center',
  },
});
