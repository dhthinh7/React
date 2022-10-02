// Thực hiện yêu cầu sau:
// -Sử dụng layout được cung cấp chia. component tương ứng (Chưa code gì chỉ ở mức bố cục layout giao diện).
// -Xác định state tổ chức lưu trữ redux
// -Sử dụng các hook, lifecycle của redux để xây dựng chức năng chọn quần áo phụ kiện.
// -Nâng cao: Xây dựng animation khi người dùng nhấn nút thử đồ, thì item đó sẽ di chuyển từ vị trí được chọn ra đến chổ người mẫu.

// Link layout tàinguyên
// https://drive.google.com/drive/folders/1FSbLBRmtY4aLAP_HlpqtuFBL24kcSR7l?usp=sharing


import './App.css';
import Header from './Component/Header/Header';
import MainContent from './Component/MainContent/MainContent';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <MainContent />
    </div>

  );
}

export default App;
