import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  // Mảng chứa các câu trả lời của quả cầu tiên tri
  const answers = [
    "YES",
    "NO",
    "ASK\nAGAIN\nLATER",
    "THE\nANSWER\nIS YES",
    "I HAVE\nNO IDEA",
    "ABSOLUTELY",
    "DON'T\nCOUNT\nON IT"
  ];

  // Khởi tạo state với giá trị mặc định là số "8"
  const [answer, setAnswer] = useState("8");

  // Hàm lắc quả cầu
  const askQuestion = () => {
    // Lấy một số ngẫu nhiên từ 0 đến chiều dài của mảng (trừ 1)
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ask Me Anything</Text>
      
      <TouchableOpacity onPress={askQuestion} activeOpacity={0.8}>
        
        {/* Vỏ quả cầu màu đen */}
        <View style={styles.outerBall}>
          
          {/* Lõi quả cầu màu trắng */}
          <View style={styles.innerBall}>
            
            {/* Hiển thị câu trả lời (hoặc số 8 ban đầu) */}
            <Text style={answer === "8" ? styles.eightText : styles.answerText}>
              {answer}
            </Text>

          </View>
        </View>

      </TouchableOpacity>

      <Text style={styles.instruction}>Chạm vào quả cầu để xem tương lai!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29b6f6', // Màu xanh dương nhạt (Light Blue)
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  // Style tự vẽ Quả cầu đen
  outerBall: {
    width: 320,
    height: 320,
    backgroundColor: 'black',
    borderRadius: 160, // Bo tròn hoàn toàn (nửa chiều rộng)
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
  },
  // Style vẽ lõi trắng bên trong
  innerBall: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  // Chữ số 8 ban đầu
  eightText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'black',
  },
  // Chữ các câu trả lời (YES/NO...)
  answerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#303f9f', // Chữ màu xanh dương đậm
    textAlign: 'center',
  },
  instruction: {
    fontSize: 18,
    color: 'white',
    marginTop: 60,
    fontWeight: '500',
  }
});
