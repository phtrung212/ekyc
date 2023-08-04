import React, { useRef } from "react"
import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { AnimatedCircularProgress } from "react-native-circular-progress"
import { useNavigation } from "@react-navigation/native"
import Svg, { Path, SvgProps } from "react-native-svg"
import { fwdLogo, humanIcon } from '../assets'
import { Badge, Button, CheckCircleIcon, CheckIcon } from 'native-base'
import { Mixins } from './styles'

const { width: windowWidth } = Dimensions.get("window")
export default function FaceDetection() {
  const navigation = useNavigation()
  const rect = useRef<View>(null)


  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: PREVIEW_MARGIN_TOP,
          backgroundColor: "white",
          zIndex: 10
        }}
      >
        <View style={{paddingHorizontal: 16,
          paddingTop: Mixins.heightTabbar,}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', height: 30, marginLeft: 10, marginRight: 10}}>
            <Image
              style={{ height: 30, width: 70 }}
              source={fwdLogo}
            />
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>Bạn cần trợ giúp?</Text>
          </View>
        </View>
        <View style={{
          paddingHorizontal: 16,
        }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 10, textAlign: 'center' }}>Xác thực khuôn mặt</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', marginTop: 10, alignItems: 'center'}}>
            <CheckCircleIcon size={6} color={'#25474D'}></CheckCircleIcon>
            <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
            <CheckCircleIcon size={6} color={'#25474D'}></CheckCircleIcon>
            <View style={{ flex: 1, height: 1, backgroundColor: '#000000' }} />
            <Badge // bg="red.400"
              bg={'#25474D'}
              rounded="full" zIndex={1} variant="solid" alignSelf="flex-start" _text={{
              fontSize: 12
            }}>
              3
            </Badge>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 20, fontSize: 20 }}>Hướng dẫn xác thực khuôn mặt</Text>
            <Text style={{color: 'black'}}>
              Khách hàng tiến hành hướng khuôn mặt vào chính giữa khung hình. Sau đó quay sang Trái, quay sang Phải và quay về Giữa.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: PREVIEW_MARGIN_TOP,
          left: 0,
          width: (windowWidth - PREVIEW_SIZE) / 2,
          height: PREVIEW_SIZE,
          backgroundColor: "white",
          zIndex: 10
        }}
      />
      <View
        style={{
          position: "absolute",
          top: PREVIEW_MARGIN_TOP,
          right: 0,
          width: (windowWidth - PREVIEW_SIZE) / 2 + 1,
          height: PREVIEW_SIZE,
          backgroundColor: "white",
          zIndex: 10
        }}
      >
      </View>

      <View
        style={{flex: 1, zIndex: 20, justifyContent: 'center', alignItems: 'center'}}
      >
        <Image source={humanIcon} style={{height: 270, width: 270, alignSelf: 'center'}}/>
        <CameraPreviewMask width={"100%"} style={styles.circularProgress} />
        <AnimatedCircularProgress
          style={styles.circularProgress}
          size={PREVIEW_SIZE}
          width={5}
          backgroundWidth={7}
          fill={0}
          tintColor="#11bf3d"
          backgroundColor="#e8e8e8"
        />
      </View>
      <View
        ref={rect}
        style={{
          position: "absolute",
          borderWidth: 2,
          borderColor: "pink",
          zIndex: 10
        }}
      />
      <View style={styles.promptContainer}>
        <View style={{marginTop: 50, justifyContent: 'center', flexDirection: 'row'}}>
          <Button backgroundColor={'#25474D'} style={{height: 50, width: 300, borderRadius: 10}} onPress={() => navigation.navigate('Detection')}>
            <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
              <CheckIcon size={6} color={'white'} style={{height: 20, width: 20, tintColor: 'white', marginRight: 10}}></CheckIcon>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                Tôi đã sẵn sàng
              </Text>
            </View>
          </Button>
        </View>
        <View style={{marginTop: 10, justifyContent: 'center', flexDirection: 'row'}}>
          <Button variant={'outline'} backgroundColor={'white'} style={{height: 50, width: 300, borderRadius: 10}} onPress={() => navigation.navigate('IdCertification')}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Chụp lại GTTT</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

const CameraPreviewMask = (props: SvgProps) => (
  <Svg width={300} height={300} viewBox="0 0 300 300" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M150 0H0v300h300V0H150zm0 0c82.843 0 150 67.157 150 150s-67.157 150-150 150S0 232.843 0 150 67.157 0 150 0z"
      fill="#fff"
    />
  </Svg>
)

const PREVIEW_MARGIN_TOP = 250
const PREVIEW_SIZE = 300

const styles = StyleSheet.create({
  actionPrompt: {
    fontSize: 20,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  promptContainer: {
    position: "absolute",
    alignSelf: "center",
    top: PREVIEW_MARGIN_TOP + PREVIEW_SIZE,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    zIndex: 20
  },
  faceStatus: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold"
  },
  cameraPreview: {
    flex: 1,
  },
  circularProgress: {
    position: "absolute",
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    top: PREVIEW_MARGIN_TOP,
    alignSelf: "center"
  },
  circularProgressChild: {
    position: "absolute",
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    top: -10,
    left: -PREVIEW_SIZE -10,
    right: 0,
    alignSelf: "center",
  },
  action: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold"
  }
})
