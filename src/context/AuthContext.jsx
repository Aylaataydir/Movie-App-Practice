import { createContext, useState, useEffect, useContext } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase/config';

// Context oluşturuyoruz - bu sayede kullanıcı bilgisi tüm uygulamada erişilebilir
const AuthContext = createContext();

// Custom hook - AuthContext'i kolayca kullanmak için
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component - tüm uygulamayı saracak
export const AuthProvider = ({ children }) => {
  // Şu anki kullanıcıyı state'te tutuyoruz
  const [currentUser, setCurrentUser] = useState(null);
  
  // Yükleniyor durumu - Firebase kullanıcı kontrolü yaparken
  const [loading, setLoading] = useState(true);

  // 1. KAYIT FONKSIYONU (Email/Şifre ile)
  const signup = (email, password) => {
    // Firebase'e kayıt isteği gönderiyoruz
    // Promise döndürüyor, async/await ile kullanabiliriz
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 2. GİRİŞ FONKSIYONU (Email/Şifre ile)
  const login = (email, password) => {
    // Firebase'e giriş isteği gönderiyoruz
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 3. GOOGLE İLE GİRİŞ FONKSIYONU
  const signUpWithGoogle = () => {
    // Google provider oluşturuyoruz
    const provider = new GoogleAuthProvider();
    
    // Popup açılacak, kullanıcı Google hesabı seçecek
    return signInWithPopup(auth, provider);
  };

  // 4. ÇIKIŞ FONKSIYONU
  const logout = () => {
    return signOut(auth);
  };

  // 5. KULLANICI DURUMUNU TAKİP ETME
  useEffect(() => {
    // Firebase'in onAuthStateChanged fonksiyonu
    // Kullanıcı durumu değiştiğinde (giriş/çıkış) otomatik çalışır
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // user varsa set et, yoksa null
      setLoading(false); // Kontrol bitti, loading false
    });

    // Component unmount olduğunda listener'ı temizle
    return unsubscribe;
  }, []);

  // Context'e sunacağımız değerler
  const value = {
    currentUser,    // Şu anki kullanıcı bilgisi
    signup,         // Kayıt fonksiyonu
    login,          // Giriş fonksiyonu
    logout,         // Çıkış fonksiyonu
    signUpWithGoogle // Google giriş fonksiyonu
  };

  // loading true ise hiçbir şey render etme
  // Böylece kullanıcı durumu belirsizken boş ekran gösterilir
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};