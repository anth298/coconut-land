import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { useState } from 'react'

const historyItems = [
  {
    id: 'formation',
    title: 'Thời kỳ hình thành',
    content: 'Bến Tre được hình thành vào khoảng thế kỷ XVII, khi những người Việt đầu tiên từ phương Bắc và Đàng Trong di cư vào khai phá vùng đất mới này. Ban đầu, Bến Tre là một vùng đất hoang vu với hệ thống sông ngòi chằng chịt và rừng rậm.',
    year: '1600-1698',
    videoId: 'IhAlFUN1ey8'
  },
  {
    id: 'nguyen-dynasty',
    title: 'Thời Nguyễn',
    content: 'Dưới thời nhà Nguyễn, Bến Tre trở thành một phần của tỉnh Vĩnh Long, sau đó là tỉnh An Giang. Năm 1832, vua Minh Mạng cho chia miền Nam thành 6 tỉnh, trong đó có tỉnh Định Tường, và Bến Tre thuộc về phủ Kiến Hòa của tỉnh này.',
    year: '1802-1883',
    videoId: 'IhAlFUN1ey8'
  },
  {
    id: 'french-colonial',
    title: 'Thời Pháp thuộc',
    content: 'Sau khi Pháp xâm chiếm Nam Kỳ, Bến Tre trở thành một tỉnh riêng với tên gọi Bến Tre (năm 1900). Dưới thời Pháp thuộc, người dân Bến Tre đã nổi dậy chống Pháp nhiều lần, tiêu biểu là các cuộc khởi nghĩa của Phan Xích Long, Phan Công Tòng.',
    year: '1883-1954',
    videoId: 'IhAlFUN1ey8'
  },
  {
    id: 'wartime',
    title: 'Thời kỳ kháng chiến',
    content: 'Trong thời kỳ kháng chiến chống Mỹ, Bến Tre là một trong những "căn cứ địa cách mạng" quan trọng ở miền Nam. Năm 1960, phong trào Đồng Khởi nổ ra từ Bến Tre đã lan rộng ra khắp Nam Bộ. Bến Tre cũng nổi tiếng với hình ảnh "Đoàn nữ du kích Bến Tre" và câu nói nổi tiếng "Thà rằng chết hết, không để mất Bến Tre" của tướng Mỹ.',
    year: '1954-1975',
    videoId: 'IhAlFUN1ey8'
  },
  {
    id: 'reunification',
    title: 'Thời kỳ thống nhất đất nước',
    content: 'Sau ngày đất nước thống nhất năm 1975, Bến Tre được tái lập thành tỉnh. Năm 1976, Bến Tre sáp nhập với Trà Vinh thành tỉnh Bến Tre-Trà Vinh, đến năm 1979 tách ra thành hai tỉnh riêng biệt như hiện nay.',
    year: '1975-nay',
    videoId: 'IhAlFUN1ey8'
  },
  {
    id: 'modern',
    title: 'Bến Tre hiện đại',
    content: 'Ngày nay, Bến Tre đã phát triển thành một tỉnh có nền kinh tế khá phát triển ở Đồng bằng sông Cửu Long, với thế mạnh về nông nghiệp, đặc biệt là cây dừa. Tỉnh cũng đang đẩy mạnh phát triển du lịch sinh thái sông nước, du lịch làng nghề và văn hóa.',
    year: '2000-nay',
    videoId: 'IhAlFUN1ey8'
  }
]

export default function History() {
  const [activeItem, setActiveItem] = useState(historyItems[0])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://placehold.co/1920x1080/c0a46d/FFFFFF/png?text=Lịch+sử+Bến+Tre) no-repeat center center/cover'
          }}
        />
        
        {/* Gold overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-amber-700/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-amber-400 mx-auto mb-6"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-amber-300 text-sm tracking-[0.3em] uppercase mb-4 font-light"
            >
              KHÁM PHÁ
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-4xl md:text-6xl font-extralight tracking-wider mb-6"
            >
              Lịch Sử <span className="text-amber-200">Bến Tre</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-gray-300 font-light text-lg md:text-xl"
            >
              Khám phá hành trình lịch sử hào hùng của vùng đất và con người Bến Tre
            </motion.p>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <div className="text-amber-300 text-xs tracking-[0.3em] font-light flex flex-col items-center">
            <span>CUỘN XUỐNG</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-12 w-[1px] bg-amber-500/50 mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Timeline Navigation */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 mb-8 space-x-2">
            {historyItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`px-6 py-3 rounded-sm whitespace-nowrap text-sm font-light transition-all ${
                  activeItem.id === item.id 
                    ? 'bg-amber-800 text-amber-100 border border-amber-700' 
                    : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-amber-900/50 hover:text-amber-300'
                }`}
                onClick={() => setActiveItem(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 font-light">{item.year}</span>
                {item.title}
              </motion.button>
            ))}
          </div>
          
          {/* Content Section with 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              key={activeItem.id + "-content"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                <span className="block text-amber-400 text-xl mb-2 font-light tracking-wide">{activeItem.year}</span>
                {activeItem.title}
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                {activeItem.content}
              </p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-sm shadow-md transition duration-200 font-light tracking-wide relative overflow-hidden group"
                >
                  <span className="relative z-10">Tìm hiểu thêm</span>
                  <motion.div 
                    className="absolute inset-0 bg-amber-500"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4 }}
                  ></motion.div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-transparent border border-amber-700/50 text-amber-300 hover:bg-amber-900/30 rounded-sm transition duration-200 font-light tracking-wide"
                >
                  Xem hình ảnh
                </motion.button>
              </div>
            </motion.div>
            
            {/* Right Column - Video */}
            <motion.div
              key={activeItem.id + "-video"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full rounded-lg overflow-hidden shadow-xl border border-gray-800">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    className="w-full h-full" 
                    src={`https://www.youtube.com/embed/${activeItem.videoId}?autoplay=0&rel=0`}
                    title={activeItem.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-amber-700/10 to-amber-900/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Historical Figures Section */}
      <section className="py-24 bg-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-800/20 to-amber-700/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-light"
            >
              NGƯỜI CON ƯU TÚ
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-light text-white mb-4"
            >
              Danh nhân <span className="text-amber-300">Bến Tre</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto font-light"
            >
              Những người con ưu tú của Bến Tre đã có những đóng góp quan trọng vào lịch sử, văn hóa và phát triển của quê hương
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={`figure-${item}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800 group hover:border-amber-700/50 transition-all duration-300"
              >
                <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(https://placehold.co/800x600/c0a46d/FFFFFF/png?text=Danh+nhân+${item})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  
                  {/* Color overlay on hover */}
                  <div className="absolute inset-0 bg-amber-900/30 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                </div>
                
                <div className="p-6 relative">
                  {/* Gold accent line - grows on hover */}
                  <div className="absolute top-0 left-0 h-[2px] bg-amber-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-amber-200 transition-colors">
                    Danh nhân Bến Tre {item}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 font-light">
                    Mô tả ngắn về tiểu sử và những đóng góp quan trọng của danh nhân này đối với lịch sử và văn hóa Bến Tre.
                  </p>
                  
                  <a 
                    href="#" 
                    className="text-amber-400 hover:text-amber-300 font-light inline-flex items-center group"
                  >
                    <span>Tìm hiểu thêm</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-block overflow-hidden group"
            >
              <button className="px-8 py-4 bg-amber-700 text-white font-light tracking-wider relative overflow-hidden group transition-all duration-300">
                <span className="relative z-10">XEM TẤT CẢ DANH NHÂN</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                ></motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 