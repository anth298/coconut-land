import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Image from 'next/image'

const specialties = [
  {
    name: 'Kẹo dừa',
    description: 'Kẹo dừa Bến Tre là một đặc sản nổi tiếng, được làm từ nước cốt dừa tươi, đường và các nguyên liệu tự nhiên. Kẹo có vị ngọt thanh, thơm mùi dừa và dai mềm.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Kẹo+dừa',
    origin: 'Thành phố Bến Tre',
    price: '50,000 - 100,000đ/kg',
    whereToBuy: ['Chợ Bến Tre', 'Các cửa hàng đặc sản', 'Làng nghề kẹo dừa'],
  },
  {
    name: 'Bưởi da xanh',
    description: 'Bưởi da xanh Bến Tre nổi tiếng với vị ngọt thanh, mọng nước và thơm ngon. Loại bưởi này được trồng nhiều ở các huyện Châu Thành, Chợ Lách.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Bưởi+da+xanh',
    origin: 'Huyện Châu Thành, Chợ Lách',
    price: '30,000 - 50,000đ/kg',
    whereToBuy: ['Vườn bưởi', 'Chợ địa phương', 'Các cửa hàng đặc sản'],
  },
  {
    name: 'Mật hoa dừa',
    description: 'Mật hoa dừa là một loại nước uống tự nhiên, được lấy từ hoa dừa. Có vị ngọt thanh, thơm mùi dừa và rất tốt cho sức khỏe.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Mật+hoa+dừa',
    origin: 'Các huyện trong tỉnh',
    price: '40,000 - 60,000đ/lít',
    whereToBuy: ['Làng nghề mật hoa dừa', 'Các cửa hàng đặc sản'],
  },
  {
    name: 'Bánh phồng tôm',
    description: 'Bánh phồng tôm Bến Tre được làm từ tôm tươi, bột gạo và các gia vị đặc biệt. Bánh có vị giòn tan, thơm mùi tôm và rất hấp dẫn.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Bánh+phồng+tôm',
    origin: 'Thành phố Bến Tre',
    price: '80,000 - 120,000đ/kg',
    whereToBuy: ['Chợ Bến Tre', 'Các cửa hàng đặc sản', 'Làng nghề bánh phồng'],
  },
  {
    name: 'Dừa sáp',
    description: 'Dừa sáp là một loại dừa đặc biệt, có cơm dừa dày, mềm và ngọt. Đây là một đặc sản quý hiếm và độc đáo của Bến Tre.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Dừa+sáp',
    origin: 'Huyện Mỏ Cày Nam',
    price: '100,000 - 150,000đ/trái',
    whereToBuy: ['Vườn dừa sáp', 'Các cửa hàng đặc sản'],
  },
  {
    name: 'Bánh tráng Mỹ Lồng',
    description: 'Bánh tráng Mỹ Lồng nổi tiếng với độ mỏng, giòn và thơm ngon. Được làm từ gạo ngon và nước suối trong lành.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Bánh+tráng',
    origin: 'Huyện Châu Thành',
    price: '30,000 - 50,000đ/kg',
    whereToBuy: ['Làng nghề bánh tráng Mỹ Lồng', 'Chợ địa phương'],
  },
]

export default function Specialties() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://placehold.co/1920x1080/c0a46d/FFFFFF/png?text=Đặc+sản+Bến+Tre)',
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
              THƯỞNG THỨC
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-4xl md:text-6xl font-extralight tracking-wider mb-6"
            >
              Đặc sản <span className="text-amber-200">Bến Tre</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-gray-300 font-light text-lg md:text-xl"
            >
              Thưởng thức hương vị đặc trưng của vùng đất dừa
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

      {/* Specialties Grid */}
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
              TINH HOA
            </p>
            <h2 className="text-3xl font-light text-white mb-6">
              Vị ngon đặc trưng <span className="text-amber-300">xứ dừa</span>
            </h2>
            <p className="text-gray-300 font-light">
              Bến Tre tự hào với đa dạng đặc sản truyền thống mang đậm hương vị địa phương,
              được chế biến từ những nguyên liệu tươi ngon nhất của vùng đất này.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.name}
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
                      backgroundImage: `url(${specialty.image})`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>
                  
                  {/* Color overlay on hover */}
                  <div className="absolute inset-0 bg-amber-900/30 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute top-5 left-5 bg-amber-700/80 text-white text-xs px-3 py-1 rounded-sm">
                    {specialty.origin}
                  </div>
                </div>
                
                <div className="p-6 relative">
                  {/* Gold accent line - grows on hover */}
                  <div className="absolute top-0 left-0 h-[2px] bg-amber-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  
                  <h3 className="text-2xl font-light text-white group-hover:text-amber-200 transition-colors mb-4">
                    {specialty.name}
                  </h3>
                  
                  <p className="text-gray-300 font-light mb-6">
                    {specialty.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-light text-white mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">•</span>
                        Giá tham khảo
                      </h4>
                      <p className="text-amber-300 ml-6">{specialty.price}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-light text-white mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">•</span>
                        Nơi mua
                      </h4>
                      <div className="flex flex-wrap gap-2 ml-6">
                        {specialty.whereToBuy.map((place) => (
                          <span key={place} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 py-3 bg-transparent border border-amber-600 text-amber-400 hover:bg-amber-900/30 transition-colors duration-300 font-light tracking-wide">
                      TÌM HIỂU THÊM
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
              backgroundImage: 'url(https://placehold.co/1920x1080/c0a46d/FFFFFF/png?text=Đặc+sản)',
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
              TRẢI NGHIỆM
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-light mb-6 text-white"
            >
              Khám phá <span className="text-amber-300">ẩm thực</span> Bến Tre
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
            >
              Hãy tham gia tour ẩm thực của chúng tôi để khám phá và thưởng thức những món đặc sản độc đáo nhất của Bến Tre, từ kẹo dừa thơm ngon đến những trái cây ngọt lành.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-block overflow-hidden group"
            >
              <button className="px-8 py-4 bg-amber-700 text-white font-light tracking-wider relative overflow-hidden group transition-all duration-300">
                <span className="relative z-10">ĐẶT TOUR ẨM THỰC</span>
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