// import 'react-native-reanimated'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Mixins } from './styles'
import { cameraIcon, fwdLogo, iconStep1 } from '../assets'
import { Badge, Button, CheckCircleIcon, CheckIcon, Divider, Icon } from 'native-base'
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera'
import { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

type deviceType = {
  original: any[];
  filter: any[];
  area: any[];
};
export default function IdCertification() {
  const [cameraPermission, setCameraPermission] = useState();
  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      // @ts-ignore
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);
  const [frontPath, setFrontPath] = useState('')
  const [backPath, setBackPath] = useState('')
  const [isTakingPhoto, setIsTakingPhoto] = useState(true)
  const [side, setSide] = useState('front')
  const devices = useCameraDevices();
  const device = devices.back

  // const frameProcessor = useFrameProcessor(frame => {
  //   'worklet';
  //   console.log(frame)
  // }, []);

  const renderDetectorContent = () => {
    if (device && cameraPermission === 'authorized') {
      return (
        <Camera
          ref={camera}
          style={styles.camera}
          device={device}
          isActive={isTakingPhoto}
          // frameProcessor={frameProcessor}
          photo={true}
        />
      );
    }
    return <ActivityIndicator size="large" color="#1C6758" />;
  };
  const navigation = useNavigation()

  const camera = useRef<Camera>(null)
  const takePhoto = async () => {
    if (!camera.current) return
    const photo = await camera.current.takePhoto({
      flash: 'off'
    })
    console.log('photo =================== ', photo)
    !frontPath ? setFrontPath(photo.path) : setBackPath(photo.path)
    setIsTakingPhoto(false)
  }

  const nextSide = () => {
    if (side === 'back') {
      navigation.navigate('Confirm')
      return
    }
    setSide('back')
    setIsTakingPhoto(true)
  }

  const cancel = () => {
    if (side === 'front') {
      setFrontPath('')
    }else {
      setBackPath('')
    }
    setIsTakingPhoto(true)
  }

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
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 10, textAlign: 'center' }}>Chụp ảnh GTTT</Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', marginTop: 10, alignItems: 'center'}}>
        {
          side === 'front' ? <>
            <Badge // bg="red.400"
              bg={'#25474D'}
              rounded="full" zIndex={1} variant="solid" alignSelf="flex-start" _text={{
              fontSize: 12
            }}>
              1
            </Badge>
          </> : <>
            <CheckCircleIcon size={6} color={'#25474D'}></CheckCircleIcon>
          </>
        }

        <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
        {
          side === 'front' ? <>
            <Badge // bg="red.400"
              bg={'white'}
              rounded="full" zIndex={1} variant="outline" alignSelf="flex-start" _text={{
              fontSize: 12,
              fontWeight: 'bold'
            }}>
              2
            </Badge>
          </> : <>
            <Badge // bg="red.400"
              bg={'#25474D'}
              rounded="full" zIndex={1} variant="solid" alignSelf="flex-start" _text={{
              fontSize: 12
            }}>
              2
            </Badge>
          </>
        }

        <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
        <Badge // bg="red.400"
          bg={'white'}
          rounded="full" zIndex={1} variant="outline" alignSelf="flex-start" _text={{
          fontSize: 12
        }}>
          3
        </Badge>
      </View>
      <View style={{marginTop: 30}}>
        {isTakingPhoto ? renderDetectorContent() : <Image source={{uri: `file://${backPath || frontPath}`}} style={{height: 260}}/>}
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{color: 'black'}}>
          <Text style={{color: '#25474D', fontWeight: 'bold'}}>Lưu ý: </Text>
           Đảm bảo ảnh rõ nét, đầy đủ thông tin, ảnh đúng định dạng. Không chụp ảnh từ màn hình thiết bị, ảnh photo, ảnh mất góc, ảnh bị chói sáng hoặc ảnh quá tối.
        </Text>
        <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 20, fontSize: 20 }}>{side === 'front' ? 'Mặt trước' : 'Mặt sau'}</Text>
      </View>
      <View style={{marginTop: 50, justifyContent: 'center', flexDirection: 'row'}}>
        <Button backgroundColor={'#25474D'} style={{height: 50, width: 300, borderRadius: 10}} onPress={() => isTakingPhoto ? takePhoto() : nextSide()
        }>
          <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
            {isTakingPhoto ? <>
              <Image source={cameraIcon} style={{height: 20, width: 20, tintColor: 'white', marginRight: 10}}/>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                Chụp ảnh
              </Text>
            </> : <>
              <CheckIcon size={6} color={'white'}></CheckIcon>
              <Text style={{marginLeft: 10, fontWeight: 'bold', color: 'white', fontSize: 18}}>
                Dùng ảnh này
              </Text>
            </>}
          </View>
        </Button>
      </View>
      <View style={{marginTop: 10, justifyContent: 'center', flexDirection: 'row'}}>
        <Button variant={'outline'} backgroundColor={'white'} style={{height: 50, width: 300, borderRadius: 10}} onPress={() => cancel()
        }>
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
