import color from 'color'

import {
  Platform,
  Dimensions,
  PixelRatio
} from 'react-native'

import { PLATFORM } from './commonColor'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = PLATFORM.MATERIAL
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896)

export default {
  platformStyle,
  platform: 'ios',
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: 3,
  btnFontFamily: 'System',
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  btnPrimaryBg: 'rgba(214,40,40,1)',
  btnPrimaryColor: '#fff',
  btnInfoBg: '#3F57D3',
  btnInfoColor: '#fff',
  btnSuccessBg: 'rgba(252,191,73,1)',
  btnSuccessColor: '#fff',
  btnDangerBg: 'rgba(214,40,40,1)',
  btnDangerColor: '#fff',
  btnWarningBg: 'rgba(247,127,0,1)',
  btnWarningColor: '#fff',
  btnTextSize: 16.5,
  btnTextSizeLarge: 22.5,
  btnTextSizeSmall: 12,
  get buttonPrimaryBg () {
    return this.brandPrimary
  },
  get buttonPrimaryColor () {
    return this.inverseTextColor
  },
  get buttonInfoBg () {
    return this.brandInfo
  },
  get buttonInfoColor () {
    return this.inverseTextColor
  },
  get buttonSuccessBg () {
    return this.brandSuccess
  },
  get buttonSuccessColor () {
    return this.inverseTextColor
  },
  get buttonDangerBg () {
    return this.brandDanger
  },
  get buttonDangerColor () {
    return this.inverseTextColor
  },
  get buttonWarningBg () {
    return this.brandWarning
  },
  get buttonWarningColor () {
    return this.inverseTextColor
  },
  get buttonTextSize () {
    return this.fontSizeBase - 1
  },
  get buttonTextSizeLarge () {
    return this.fontSizeBase * 1.5
  },
  get buttonTextSizeSmall () {
    return this.fontSizeBase * 0.8
  },
  get borderRadiusLarge () {
    return this.fontSizeBase * 3.8
  },
  get iconSizeLarge () {
    return this.iconFontSize * 1.5
  },
  get iconSizeSmall () {
    return this.iconFontSize * 0.6
  },
  cardDefaultBg: 'rgba(234,226,183,1)',
  cardBorderColor: '#ccc',
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 18,
  CheckboxFontSize: 21,
  DefaultFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',
  brandPrimary: 'rgba(107,44,57,1)',
  brandInfo: '#3F57D3',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: 'rgba(0,48,73,1)',
  brandLight: 'rgba(234,226,183,1)',
  fontFamily: 'System',
  fontSizeBase: 15,
  get fontSizeH1 () {
    return this.fontSizeBase * 1.8
  },
  get fontSizeH2 () {
    return this.fontSizeBase * 1.6
  },
  get fontSizeH3 () {
    return this.fontSizeBase * 1.4
  },
  footerHeight: 55,
  footerDefaultBg: '#3F51B5',
  footerPaddingBottom: 0,
  tabBarTextColor: '#fff',
  tabBarTextSize: 14,
  activeTab: '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: '#3F51B5',
  toolbarBtnColor: '#fff',
  toolbarDefaultBg: 'rgba(0,48,73,1)',
  toolbarHeight: 83,
  toolbarSearchIconSize: 20,
  toolbarInputColor: '#fff',
  searchBarHeight: platform === PLATFORM.IOS ? 30 : 40,
  searchBarInputHeight: platform === PLATFORM.IOS ? 40 : 50,
  toolbarBtnTextColor: '#fff',
  toolbarDefaultBorder: 'rgba(52,52,55,1)',
  iosStatusbar: 'light-content',
  get statusBarColor () {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex()
  },
  get darkenHeader () {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex()
  },
  iconFamily: 'Ionicons',
  iconFontSize: 30,
  iconHeaderSize: 29,
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  get inputColor () {
    return this.textColor
  },
  get inputColorPlaceholder () {
    return '#575757'
  },

  inputHeightBase: 50,
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 20,
  listBg: '#FFF',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: 10,
  listNoteColor: '#808080',
  listNoteSize: 13,
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',
  radioBtnSize: 25,
  radioSelectedColorAndroid: '#5067FF',
  radioBtnLineHeight: 29,
  get radioColor () {
    return this.brandPrimary
  },
  segmentBackgroundColor: 'rgba(0,48,73,1)',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  segmentActiveTextColor: 'rgba(0,48,73,1)',
  segmentBorderColor: '#fff',
  segmentBorderColorMain: '#3F51B5',
  defaultSpinnerColor: 'rgba(243,209,128,1)',
  inverseSpinnerColor: 'rgba(107,44,57,1)',
  tabDefaultBg: '#3F51B5',
  topTabBarTextColor: '#b3c7f9',
  topTabBarActiveTextColor: '#fff',
  topTabBarBorderColor: '#fff',
  topTabBarActiveBorderColor: '#fff',
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  textColor: '#000',
  inverseTextColor: 'rgba(255,255,255,1)',
  noteFontSize: 14,
  get defaultTextColor () {
    return this.textColor
  },
  titleFontfamily: 'System',
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: '#FFF',
  titleFontColor: '#FFF',
  borderRadiusBase: 12,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth: 1440,
  deviceHeight: 789,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30
}
