import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Image from 'next/image'

const districts = [
  {
    name: 'Thành phố Bến Tre',
    description: 'Trung tâm hành chính, văn hóa, kinh tế của tỉnh. Nơi đây có nhiều di tích lịch sử, văn hóa quan trọng và là điểm đến du lịch hấp dẫn.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Thành+phố+Bến+Tre',
    specialties: ['Kẹo dừa', 'Bưởi da xanh', 'Bánh phồng tôm'],
    attractions: ['Chợ Bến Tre', 'Bảo tàng Đồng Khởi Bến Tre', 'Công viên Bến Tre'],
  },
  {
    name: 'Huyện Châu Thành',
    description: 'Vùng đất trù phú với nhiều vườn cây ăn trái và làng nghề truyền thống. Nơi đây còn lưu giữ nhiều nét văn hóa đặc sắc của vùng sông nước.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Huyện+Châu+Thành',
    specialties: ['Bưởi da xanh', 'Mật hoa dừa', 'Bánh tráng Mỹ Lồng'],
    attractions: ['Làng nghề bánh tráng Mỹ Lồng', 'Vườn cây ăn trái', 'Chùa Vĩnh Thành'],
  },
  {
    name: 'Huyện Chợ Lách',
    description: 'Vùng đất nổi tiếng với nghề làm vườn và chăn nuôi. Nơi đây có nhiều vườn cây ăn trái sum suê và các trang trại chăn nuôi quy mô lớn.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Huyện+Chợ+Lách',
    specialties: ['Sầu riêng', 'Măng cụt', 'Bưởi da xanh'],
    attractions: ['Vườn cây ăn trái', 'Trang trại chăn nuôi', 'Chợ nổi Chợ Lách'],
  },
  {
    name: 'Huyện Mỏ Cày Nam',
    description: 'Vùng đất có nhiều tiềm năng phát triển du lịch sinh thái và nông nghiệp. Nơi đây còn lưu giữ nhiều nét văn hóa truyền thống độc đáo.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Huyện+Mỏ+Cày+Nam',
    specialties: ['Dừa sáp', 'Bưởi da xanh', 'Mật hoa dừa'],
    attractions: ['Vườn dừa sáp', 'Làng nghề đan đát', 'Chùa Vĩnh Phước'],
  },
  {
    name: 'Huyện Mỏ Cày Bắc',
    description: 'Vùng đất có nhiều tiềm năng phát triển nông nghiệp và thủy sản. Nơi đây còn lưu giữ nhiều nét văn hóa truyền thống độc đáo.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Huyện+Mỏ+Cày+Bắc',
    specialties: ['Tôm càng xanh', 'Cá bớp', 'Bưởi da xanh'],
    attractions: ['Vườn cây ăn trái', 'Trang trại thủy sản', 'Chùa Vĩnh Phước'],
  },
  {
    name: 'Huyện Giồng Trôm',
    description: 'Vùng đất có nhiều tiềm năng phát triển nông nghiệp và thủy sản. Nơi đây còn lưu giữ nhiều nét văn hóa truyền thống độc đáo.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Huyện+Giồng+Trôm',
    specialties: ['Tôm càng xanh', 'Cá bớp', 'Bưởi da xanh'],
    attractions: ['Vườn cây ăn trái', 'Trang trại thủy sản', 'Chùa Vĩnh Phước'],
  },
]

export default function Districts() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://placehold.co/1920x1080/c0a46d/FFFFFF/png?text=Các+huyện+Bến+Tre)',
              filter: 'brightness(0.5) contrast(1.2) saturate(1.1)',
            }}
          />
          
          {/* Gold overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-amber-700/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
        </div>
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
              Các huyện <span className="text-amber-200">Bến Tre</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-gray-300 font-light text-lg md:text-xl"
            >
              Khám phá vẻ đẹp riêng của từng huyện
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

      {/* Districts Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-light">
              ĐỊA PHƯƠNG
            </p>
            <h2 className="text-3xl font-light text-white mb-6">
              Vùng đất <span className="text-amber-300">sông nước</span>
            </h2>
            <p className="text-gray-300 font-light">
              Bến Tre với 9 đơn vị hành chính, mỗi nơi đều có những nét đặc trưng riêng về văn hóa, 
              ẩm thực và cảnh quan thiên nhiên, tạo nên bức tranh đa dạng về vùng đất miền Tây.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districts.map((district, index) => (
              <motion.div
                key={district.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-amber-700/50 transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${district.image})`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>
                  
                  {/* Color overlay on hover */}
                  <div className="absolute inset-0 bg-amber-900/30 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                </div>
                
                <div className="p-6 relative">
                  {/* Gold accent line - grows on hover */}
                  <div className="absolute top-0 left-0 h-[2px] bg-amber-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  
                  <h3 className="text-2xl font-light text-white group-hover:text-amber-200 transition-colors mb-4">
                    {district.name}
                  </h3>
                  
                  <p className="text-gray-300 font-light mb-6">
                    {district.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-light text-white mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">•</span>
                        Đặc sản
                      </h4>
                      <div className="flex flex-wrap gap-2 ml-6">
                        {district.specialties.map((specialty) => (
                          <span key={specialty} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-light text-white mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">•</span>
                        Điểm đến
                      </h4>
                      <div className="flex flex-wrap gap-2 ml-6">
                        {district.attractions.map((attraction) => (
                          <span key={attraction} className="text-xs bg-gray-800 text-amber-300/70 px-3 py-1 rounded-full">
                            {attraction}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 py-3 bg-transparent border border-amber-600 text-amber-400 hover:bg-amber-900/30 transition-colors duration-300 font-light tracking-wide">
                      KHÁM PHÁ NGAY
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-cover bg-center filter grayscale" 
            style={{
              backgroundImage: 'url(https://placehold.co/1920x1080/c0a46d/FFFFFF/png?text=Bến+Tre)',
            }}
          ></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-light"
            >
              KHÁM PHÁ
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-light mb-6 text-white"
            >
              Trải nghiệm <span className="text-amber-300">văn hóa</span> địa phương
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
            >
              Đăng ký tour để khám phá vẻ đẹp độc đáo của từng huyện ở Bến Tre, trải nghiệm nền văn hóa 
              phong phú và thưởng thức những món đặc sản ngon nhất của vùng đất này.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-block overflow-hidden group"
            >
              <button className="px-8 py-4 bg-amber-700 text-white font-light tracking-wider relative overflow-hidden group transition-all duration-300">
                <span className="relative z-10">ĐẶT TOUR NGAY</span>
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