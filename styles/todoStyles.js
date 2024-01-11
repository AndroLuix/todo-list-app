import { StyleSheet } from "react-native";

export const todoStyle = StyleSheet.create({
    container: {
        padding: 50,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center'
      },
      Input: {
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        marginTop: 20,
        margin: 10,
        padding: 10,
      },
      buttonContainer: {
        height: 50,
      },
      Invia: {
        height: 50,
        backgroundColor: 'dodgerblue',
        padding: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 4,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
      listBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    
      },
      listBoxText: {
        color: 'white',
        fontSize: 20,
        marginVertical: 1,
        backgroundColor: `rgba(4,120,87,1)`,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 300
    
      },
      listBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 3,
        paddingHorizontal: 20,
    
      },
      trashIcon: {
        marginLeft: 'auto',
    
      }
})