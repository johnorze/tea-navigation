import React from 'react';
import {
  View,
  StyleSheet,
  Vibration,
  ImageBackground,
  Alert,
  AsyncStorage
} from 'react-native';
import { Audio } from 'expo-av';
import Header from './Header';
import TeaButton from './TeaButton';
import IntroScreen from './IntroScreen';
import Timer from './Timer';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';


export default class TimerMenu extends React.Component {
  constructor(props)
  {
    super(props);
    this.soundObject = new Audio.Sound();
    this.state = {
      black: 300,
      green: 180,
      oolong: 240,
      darjeeling: 180,
      herbal: 420,
      white: 120,
      custom: 600,
      timeRemaining: 0,
      isOn: false,
      settingsOn: false,
      settingsTimes: {
        settingsBlack: {
          min: 5,
          sec: '00'
        },
        settingsGreen: {
          min: 3,
          sec: '00'
        }, 
        settingsOolong: {
          min: 4,
          sec: '00'
        },
        settingsDarjeeling: {
          min: 3, 
          sec: '00'
        },
        settingsHerbal: {
          min: 7,
          sec: '00'  
        },
        settingsWhite: {
          min: 2,
          sec: '00'
        },
        settingsCustom: {
          min: 10,
          sec: '00'
        }
      }
    }
  };
  
  _retrieveData = async () => {
    try {
      const blackAsync = await AsyncStorage.getItem('black')
      const greenAsync = await AsyncStorage.getItem('green')
      const whiteAsync = await AsyncStorage.getItem('white')
      const oolongAsync = await AsyncStorage.getItem('oolong')
      const darjeelingAsync = await AsyncStorage.getItem('darjeeling')
      const herbalAsync = await AsyncStorage.getItem('herbal')
      const customAsync = await AsyncStorage.getItem('custom')

      console.log(blackAsync)

      if(blackAsync !== null)
        this.setState({black: blackAsync})
      if(greenAsync !== null)
        this.setState({green: greenAsync})
      if(whiteAsync !== null)
        this.setState({white: whiteAsync})
      if(oolongAsync !== null)
        this.setState({oolong: oolongAsync})
      if(darjeelingAsync !== null)
        this.setState({darjeeling: darjeelingAsync})
      if(herbalAsync !== null)
        this.setState({herbal: herbalAsync})
      if(customAsync !== null)
        this.setState({custom: customAsync})

    } catch (error) {
        console.log(error)
      }
  }

  _storeDate = async () => {
    try {
      await AsyncStorage.setItem('black', this.black)
      await AsyncStorage.setItem('green', this.green)
      await AsyncStorage.setItem('white', this.white)
      await AsyncStorage.setItem('oolong', this.oolong)
      await AsyncStorage.setItem('darjeeling', this.darjeeling)
      await AsyncStorage.setItem('herbal', this.herbal)
      await AsyncStorage.setItem('custom', this.custom)
    } catch (error) {
      console.log("error saving")
    }
  }

  componentWillMount() {
    this._retrieveData();
  }

  componentDidMount() {
    this.interval = setInterval(this.dec, 1000);
    this.soundObject.loadAsync(require('../assets/chime.mp3'));

  }

  componentWillUnmount() {
    this._storeDate();
    clearInterval(this.interval);

  }


  dec = () => {
    if (this.state.isOn & (this.state.timeRemaining > 0))
      this.setState(prevState => ({
        timeRemaining: prevState.timeRemaining - 1,
      }));
    if (this.state.isOn & (this.state.timeRemaining == 0)) {
      this.setState({ isOn: false });
      this.soundObject.playAsync();
      Vibration.vibrate();
      Alert.alert(
        'Tea is ready')
    }
  };

  toggleTea = (setTime) => {
    this.setState({ timeRemaining: setTime });
    if (this.state.isOn == false) {
      this.setState({ isOn: true});
    }
  };

  toggleTimer = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }));
  };

  toggleSettings = () => {
    this.setState(prevState => ({ settingsOn: !prevState.settingsOn }))
  };

  render() {
    if (this.state.isOn === true) {
      return (
        <View style={[styles.appContainer, styles.fill]}>
        <ImageBackground source={require('../assets/teaphoto.jpg')} style={{width:'100%', height:'100%'}}>
        <Header title="In Search of Lost Tea Timer" />
          <Timer
            timeRemaining={this.state.timeRemaining}
            onStop={this.toggleTimer}
            onPlus30Press={() => this.setState(prevState => ({timeRemaining: prevState.timeRemaining+30}) )}
            onMinus30Press={() => {

              if ((this.state.timeRemaining - 30) > 0) {
                this.setState(prevState => ({timeRemaining: prevState.timeRemaining-30}) ) 
              }
              
              else { 
                this.setState({timeRemaining: 0});
                this.setState({timerOn: false});
              }
            }}
          />


        </ImageBackground>
        </View>
      );
    } else if (this.state.settingsOn === true) {
      return(
        <View style={styles.appContainer}>
        <ImageBackground source={require('../assets/teaphoto.jpg')} style={{width:'100%', height:'100%'}}>
        <Header title="In Search of Lost Tea Timer" />
        <SettingsScreen 
          blacktime={this.state.settingsTimes.settingsBlack}
          greentime={this.state.settingsTimes.settingsGreen} 
          whitetime={this.state.settingsTimes.settingsWhite}
          darjeelingtime={this.state.settingsTimes.settingsDarjeeling}
          herbaltime={this.state.settingsTimes.settingsHerbal}
          oolongtime={this.state.settingsTimes.settingsOolong}
          customtime={this.state.settingsTimes.settingsCustom}

          onChangeBlackMin={(newMin) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsBlack: {
              ...prevState.settingsTimes.settingsBlack,
              min: newMin,
            }
            }
          }
          ))}
          onChangeBlackSec={(newSec) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsBlack: {
              ...prevState.settingsTimes.settingsBlack,
              sec: newSec,
            }
            }
          }
          ))}
          onChangeGreenMin={(newMin) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsGreen: {
              ...prevState.settingsTimes.settingsGreen,
              min: newMin,
            }
            }
          }
          ))}        
          onChangeGreenSec={(newSec) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsGreen: {
              ...prevState.settingsTimes.settingsGreen,
              sec: newSec,
            }
            }
          }
          ))}
          onChangeWhiteMin={(newMin) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsGreen: {
              ...prevState.settingsTimes.settingsWhite,
              min: newMin,
            }
            }
          }
          ))}        
          onChangeWhiteSec={(newSec) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsWhite: {
              ...prevState.settingsTimes.settingsWhite,
              sec: newSec,
            }
            }
          }
          ))}
          onChangeDarjeelingMin={(newMin) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsDarjeeling: {
              ...prevState.settingsTimes.settingsDarjeeling,
              min: newMin,
            }
            }
          }
          ))}
          onChangeDarjeelingSec={(newSec) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsDarjeeling: {
              ...prevState.settingsTimes.settingsDarjeeling,
              sec: newSec,
            }
            }
          }
          ))}
          onChangeHerbalMin={(newMin) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsHerbal: {
              ...prevState.settingsTimes.settingsHerbal,
              min: newMin,
            }
            }
          }
          ))}
          onChangeHerbalSec={(newSec) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsHerbal: {
              ...prevState.settingsTimes.settingsHerbal,
              sec: newSec,
            }
            }
          }
          ))}
          onChangeOolongMin={(newMin) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsOolong: {
              ...prevState.settingsTimes.settingsOolong,
              min: newMin,
            }
            }
          }
          ))}
          onChangeOolongSec={(newSec) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsOolong: {
              ...prevState.settingsTimes.settingsOolong,
              sec: newSec,
            }
            }
          }
          ))}
          onChangeCustomMin={(newMin) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsCustom: {
              ...prevState.settingsTimes.settingsCustom,
              min: newMin,
            }
            }
          }
          ))}        
          onChangeCustomSec={(newSec) => this.setState(prevState => ({
            settingsTimes: {
            ...prevState.settingsTimes, 
            settingsCustom: {
              ...prevState.settingsTimes.settingsCustom,
              sec: newSec,
            }
            }
          }
          ))}
          onBack={() => this.setState({settingsOn: false})} 
          onSave={() => {
            this.setState({black: (parseInt(this.state.settingsTimes.settingsBlack.min) * 60 + parseInt(this.state.settingsTimes.settingsBlack.sec))})
            this.setState({green: (parseInt(this.state.settingsTimes.settingsGreen.min) * 60 + parseInt(this.state.settingsTimes.settingsGreen.sec))})
            this.setState({oolong: (parseInt(this.state.settingsTimes.settingsOolong.min) * 60 + parseInt(this.state.settingsTimes.settingsOolong.sec))})
            this.setState({darjeeling: (parseInt(this.state.settingsTimes.settingsDarjeeling.min) * 60 + parseInt(this.state.settingsTimes.settingsDarjeeling.sec))})
            this.setState({herbal: (parseInt(this.state.settingsTimes.settingsHerbal.min) * 60 + parseInt(this.state.settingsTimes.settingsHerbal.sec))})
            this.setState({white: (parseInt(this.state.settingsTimes.settingsWhite.min) * 60 + parseInt(this.state.settingsTimes.settingsWhite.sec))})
            this.setState({custom: (parseInt(this.state.settingsTimes.settingsCustom.min) * 60 + parseInt(this.state.settingsTimes.settingsCustom.sec))})
            this.setState({settingsOn: false}) }} />

        </ImageBackground>
        </View>
      )
    } 
    else {
      return (
        <View style={styles.appContainer}>
          <ImageBackground source={require('../assets/teaphoto.jpg')} style={{width:'100%', height:'100%'}}>
          
          <Header title="In Search of Lost Tea Timer" />
          <View style={styles.fill}>
            <TeaButton tea={`Black - ${parseInt(this.state.black/60)}:${parseInt(this.state.black%60)}${parseInt(this.state.black%60) < 10 ? '0' : ''}`}  onPress={() => this.toggleTea(this.state.black)} />
            <TeaButton tea={`Green - ${parseInt(this.state.green/60)}:${parseInt(this.state.green%60)}${parseInt(this.state.green%60) < 10 ? '0' : ''}`} onPress={() => this.toggleTea(this.state.green)} />
            <TeaButton tea={`White - ${parseInt(this.state.white/60)}:${parseInt(this.state.white%60)}${parseInt(this.state.white%60) < 10 ? '0' : ''}`} onPress={() => this.toggleTea(this.state.white)} />
            <TeaButton tea={`Oolong - ${parseInt(this.state.oolong/60)}:${parseInt(this.state.oolong%60)}${parseInt(this.state.oolong%60) < 10 ? '0' : ''}`} onPress={() => this.toggleTea(this.state.oolong)} />
            <TeaButton tea={`Darjeeling - ${parseInt(this.state.darjeeling/60)}:${parseInt(this.state.darjeeling%60)}${parseInt(this.state.darjeeling%60) < 10 ? '0' : ''}`} onPress={() => this.toggleTea(this.state.darjeeling)} />
            <TeaButton tea={`Herbal - ${parseInt(this.state.herbal/60)}:${parseInt(this.state.herbal%60)}${parseInt(this.state.herbal%60) < 10 ? '0' : ''}`} onPress={() => this.toggleTea(this.state.herbal)} />
            <TeaButton tea={`Custom - ${parseInt(this.state.custom/60)}:${parseInt(this.state.custom%60)}${parseInt(this.state.custom%60) < 10 ? '0' : ''}`} onPress={() => this.toggleTea(this.state.custom)} />
            <TeaButton tea="Settings" onPress={() => this.toggleSettings()} />
            <TeaButton tea="About" onPress={() => this.props.navigation.navigate('About')} />
          </View>
          </ImageBackground>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 15,
  },
  fill: {
    justifyContent: 'center',
    flex: 1,
  },
  introStyle: {
    backgroundColor: 'black',
  }
});
