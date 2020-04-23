import React from 'react';
import {
  View,
  StyleSheet,
  Vibration,
  ImageBackground,
  Alert,
  AsyncStorage,
  BackHandler
} from 'react-native';
import { Audio } from 'expo-av';
import Header from '../components/Header';
import TeaButton from '../components/TeaButton';
import Timer from '../components/Timer';
import SettingsScreen from '../components/SettingsScreen';


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
  
  async storeItem(key, item) {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }

  async retrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
  }

  _retrieveData = async () => {
    console.log('attempting to retrieve data')
    try {
      const blackAsync = await this.retrieveItem('black')
      const greenAsync = await this.retrieveItem('green')
      const whiteAsync = await this.retrieveItem('white')
      const oolongAsync = await this.retrieveItem('oolong')
      const darjeelingAsync = await this.retrieveItem('darjeeling')
      const herbalAsync = await this.retrieveItem('herbal')
      const customAsync = await this.retrieveItem('custom')

      if(blackAsync !== null && isNaN(parseInt(blackAsync)) !== true) {
  
        this.setState({black: blackAsync})
        const newMin = Math.floor(parseInt(blackAsync) / 60)
        const newSec = (parseInt(blackAsync) % 60) 
        const paddedZero = newSec < 10 ? '0' : '';

        this.setState(prevState => ({
          settingsTimes: {
            ...prevState.settingsTimes,
            settingsBlack: {
              ...prevState.settingsTimes.settingsBlack, 
              min: parseInt(newMin) }}}))
        this.setState(prevState => ({
           settingsTimes: {
              ...prevState.settingsTimes,
              settingsBlack: {
                ...prevState.settingsTimes.settingsBlack, 
                sec: paddedZero + newSec }}}))
      }

      if(greenAsync !== null && isNaN(parseInt(greenAsync)) !== true) {
        this.setState({green: greenAsync})
        const newMin = Math.floor(parseInt(greenAsync) / 60)
        const newSec = (parseInt(greenAsync) % 60) 
        const paddedZero = newSec < 10 ? '0' : '';

        this.setState(prevState => ({
          settingsTimes: {
            ...prevState.settingsTimes,
            settingsGreen: {
              ...prevState.settingsTimes.settingsGreen, 
              min: parseInt(newMin) }}}))
        this.setState(prevState => ({
           settingsTimes: {
              ...prevState.settingsTimes,
              settingsGreen: {
                ...prevState.settingsTimes.settingsGreen, 
                sec: paddedZero + newSec }}}))
      }

      if(whiteAsync !== null && isNaN(parseInt(whiteAsync)) !== true) { 
        this.setState({white: whiteAsync})

        const newMin = Math.floor(parseInt(whiteAsync) / 60)
        const newSec = (parseInt(whiteAsync) % 60) 
        const paddedZero = newSec < 10 ? '0' : '';

        this.setState(prevState => ({
          settingsTimes: {
            ...prevState.settingsTimes,
            settingsWhite: {
              ...prevState.settingsTimes.settingsWhite, 
              min: parseInt(newMin) }}}))
        this.setState(prevState => ({
           settingsTimes: {
              ...prevState.settingsTimes,
              settingsWhite: {
                ...prevState.settingsTimes.settingsWhite, 
                sec: paddedZero + newSec }}}))
        }

        if(oolongAsync !== null && isNaN(parseInt(oolongAsync)) !== true) {
          this.setState({oolong: oolongAsync})

          const newMin = Math.floor(parseInt(oolongAsync) / 60)
          const newSec = (parseInt(oolongAsync) % 60) 
          const paddedZero = newSec < 10 ? '0' : '';
  
          this.setState(prevState => ({
            settingsTimes: {
              ...prevState.settingsTimes,
              settingsOolong: {
                ...prevState.settingsTimes.settingsOolong, 
                min: parseInt(newMin) }}}))
          this.setState(prevState => ({
             settingsTimes: {
                ...prevState.settingsTimes,
                settingsOolong: {
                  ...prevState.settingsTimes.settingsOolong, 
                  sec: paddedZero + newSec }}}))
          }
          if(darjeelingAsync !== null && isNaN(parseInt(darjeelingAsync)) !== true) {
            this.setState({darjeeling: darjeelingAsync})
            
            const newMin = Math.floor(parseInt(darjeelingAsync) / 60)
            const newSec = (parseInt(darjeelingAsync) % 60) 
            const paddedZero = newSec < 10 ? '0' : '';
    
            this.setState(prevState => ({
              settingsTimes: {
                ...prevState.settingsTimes,
                settingsDarjeeling: {
                  ...prevState.settingsTimes.settingsDarjeeling, 
                  min: parseInt(newMin) }}}))
            this.setState(prevState => ({
               settingsTimes: {
                  ...prevState.settingsTimes,
                  settingsDarjeeling: {
                    ...prevState.settingsTimes.settingsDarjeeling, 
                    sec: paddedZero + newSec }}}))
            }

            if(herbalAsync !== null && isNaN(parseInt(herbalAsync)) !== true) {
              this.setState({herbal: herbalAsync})

              const newMin = Math.floor(parseInt(herbalAsync) / 60)
              const newSec = (parseInt(herbalAsync) % 60) 
              const paddedZero = newSec < 10 ? '0' : '';
      
              this.setState(prevState => ({
                settingsTimes: {
                  ...prevState.settingsTimes,
                  settingsHerbal: {
                    ...prevState.settingsTimes.settingsHerbal, 
                    min: parseInt(newMin) }}}))
              this.setState(prevState => ({
                 settingsTimes: {
                    ...prevState.settingsTimes,
                    settingsHerbal: {
                      ...prevState.settingsTimes.settingsHerbal, 
                      sec: paddedZero + newSec }}}))
              }

            if(customAsync !== null && isNaN(parseInt(customAsync)) !== true) {
              this.setState({custom: customAsync})

              const newMin = Math.floor(parseInt(customAsync) / 60)
              const newSec = (parseInt(customAsync) % 60) 
              const paddedZero = newSec < 10 ? '0' : '';
      
              this.setState(prevState => ({
                settingsTimes: {
                  ...prevState.settingsTimes,
                  settingsCustom: {
                    ...prevState.settingsTimes.settingsCustom, 
                    min: parseInt(newMin) }}}))
              this.setState(prevState => ({
                 settingsTimes: {
                    ...prevState.settingsTimes,
                    settingsCustom: {
                      ...prevState.settingsTimes.settingsCustom, 
                      sec: paddedZero + newSec }}}))
              }


    } catch (error) {
        console.log(error.message)
      }
  }

  _storeDate = async () => {
    this.storeItem('black', this.state.black)
    this.storeItem('green', this.state.green)
    this.storeItem('white', this.state.white)
    this.storeItem('oolong', this.state.oolong)
    this.storeItem('darjeeling', this.state.darjeeling)
    this.storeItem('herbal', this.state.herbal)
    this.storeItem('custom', this.state.custom)
  }

  componentDidMount() {
    this._retrieveData();
    this.interval = setInterval(this.dec, 1000);
    this.soundObject.loadAsync(require('../assets/chime.mp3'));
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);

  }

  componentWillUnmount() {
    this._storeDate();
    clearInterval(this.interval);
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);

  }

  onBackButtonPressAndroid = () => {
    if (this.state.settingsOn === true) {
      this.toggleSettings();
      return true;
    } else if (this.state.isOn === true) {
      this.toggleTimer();
      return true;
    } else {
        return false;
      }
      
    }


  dec = () => {
    if (this.state.isOn & (this.state.timeRemaining > 0))
      this.setState(prevState => ({
        timeRemaining: prevState.timeRemaining - 1,
      }));
    if (this.state.isOn & (this.state.timeRemaining == 0)) {
      this.setState({ isOn: false });
      this.soundObject.playAsync();

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
        <ImageBackground source={require('../assets/background.jpg')} style={{width:'100%', height:'100%'}}>
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
        <ImageBackground source={require('../assets/background.jpg')} style={{width:'100%', height:'100%'}}>
        <Header title="Settings" />
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
            if(isNaN(parseInt(this.state.settingsTimes.settingsBlack.min)) !== true && isNaN(parseInt(this.state.settingsTimes.settingsBlack.sec)) !== true)
              this.setState({black: (parseInt(this.state.settingsTimes.settingsBlack.min) * 60 + parseInt(this.state.settingsTimes.settingsBlack.sec))})
            
            if(isNaN(parseInt(this.state.settingsTimes.settingsGreen.min)) !== true && isNaN(parseInt(this.state.settingsTimes.settingsGreen.sec)) !== true)
              this.setState({green: (parseInt(this.state.settingsTimes.settingsGreen.min) * 60 + parseInt(this.state.settingsTimes.settingsGreen.sec))})
            
            if(isNaN(parseInt(this.state.settingsTimes.settingsOolong.min)) !== true && isNaN(parseInt(this.state.settingsTimes.settingsOolong.sec)) !== true)
              this.setState({oolong: (parseInt(this.state.settingsTimes.settingsOolong.min) * 60 + parseInt(this.state.settingsTimes.settingsOolong.sec))})
            
            if(isNaN(parseInt(this.state.settingsTimes.settingsDarjeeling.min)) !== true && isNaN(parseInt(this.state.settingsTimes.settingsDarjeeling.sec)) !== true)
              this.setState({darjeeling: (parseInt(this.state.settingsTimes.settingsDarjeeling.min) * 60 + parseInt(this.state.settingsTimes.settingsDarjeeling.sec))})
            
            if(isNaN(parseInt(this.state.settingsTimes.settingsHerbal.min)) !== true && isNaN(parseInt(this.state.settingsTimes.settingsHerbal.sec)) !== true)
              this.setState({herbal: (parseInt(this.state.settingsTimes.settingsHerbal.min) * 60 + parseInt(this.state.settingsTimes.settingsHerbal.sec))})
            
            if(isNaN(parseInt(this.state.settingsTimes.settingsWhite.min)) !== true && isNaN(parseInt(this.state.settingsTimes.settingsWhite.sec)) !== true)
              this.setState({white: (parseInt(this.state.settingsTimes.settingsWhite.min) * 60 + parseInt(this.state.settingsTimes.settingsWhite.sec))})
            
            if(isNaN(parseInt(this.state.settingsTimes.settingsCustom.min)) !== true && isNaN(parseInt(this.state.settingsTimes.settingsCustom.sec)) !== true)
              this.setState({custom: (parseInt(this.state.settingsTimes.settingsCustom.min) * 60 + parseInt(this.state.settingsTimes.settingsCustom.sec))})
            
            this.setState({settingsOn: false}) }} />

        </ImageBackground>
        </View>
      )
    } 
    else {
      return (
        <View style={styles.appContainer}>
          <ImageBackground source={require('../assets/background.jpg')} style={{width:'100%', height:'100%'}}>
          
          <Header title="In Search of Lost Tea Timer" />
          <View style={styles.fill}>
            <TeaButton tea={`Black - ${parseInt(this.state.black/60)}:${parseInt(this.state.black%60) < 10 ? '0' : ''}${parseInt(this.state.black%60)}`}  onPress={() => this.toggleTea(this.state.black)} />
            <TeaButton tea={`Green - ${parseInt(this.state.green/60)}:${parseInt(this.state.green%60) < 10 ? '0' : ''}${parseInt(this.state.green%60)}`} onPress={() => this.toggleTea(this.state.green)} />
            <TeaButton tea={`White - ${parseInt(this.state.white/60)}:${parseInt(this.state.white%60) < 10 ? '0' : ''}${parseInt(this.state.white%60)}`} onPress={() => this.toggleTea(this.state.white)} />
            <TeaButton tea={`Oolong - ${parseInt(this.state.oolong/60)}:${parseInt(this.state.oolong%60) < 10 ? '0' : ''}${parseInt(this.state.oolong%60)}`} onPress={() => this.toggleTea(this.state.oolong)} />
            <TeaButton tea={`Darjeeling - ${parseInt(this.state.darjeeling/60)}:${parseInt(this.state.darjeeling%60) < 10 ? '0' : ''}${parseInt(this.state.darjeeling%60)}`} onPress={() => this.toggleTea(this.state.darjeeling)} />
            <TeaButton tea={`Herbal - ${parseInt(this.state.herbal/60)}:${parseInt(this.state.herbal%60) < 10 ? '0' : ''}${parseInt(this.state.herbal%60)}`} onPress={() => this.toggleTea(this.state.herbal)} />
            <TeaButton tea={`Custom - ${parseInt(this.state.custom/60)}:${parseInt(this.state.custom%60) < 10 ? '0' : ''}${parseInt(this.state.custom%60)}`} onPress={() => this.toggleTea(this.state.custom)} />
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
});
