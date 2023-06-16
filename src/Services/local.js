import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async(chave,valor) => {
    try {
        const jsonData = JSON.stringify(valor) //transformar o json ex dados do usuario
        await AsyncStorage.setItem(chave,jsonData); //salvar um objeto json
    } catch (error) {
        console.log(error)
    }
}
export const getData = async (chave) => {
    try {
        const jsonData = await AsyncStorage.getItem(chave);
        const json = await JSON.parse(jsonData);
        return json;
    } catch (error) {
        console.log(error)
    }
}