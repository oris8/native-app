import EncryptedStorage from 'react-native-encrypted-storage';
// AsyncStorage - 보안에 민감하지 않음, 데이터 유지, like 로컬스토리지
// EncryptedStorage - 보안에 민감, 데이터 유지, like 로컬스토리지

const setEncryptStorage = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

const getEncryptStorage = async (key: string) => {
  const storedData = await EncryptedStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
};

const removeEncryptStorage = async (key: string) => {
  const data = await getEncryptStorage(key);
  if (data) {
    await EncryptedStorage.removeItem(key);
  }
};

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
